const PROCEDURE_PROMPTS = {
  "harmonizacao-facial": "BEFORE→AFTER clinical simulation. The input photo is the BEFORE state. Render the AFTER state of the SAME person after professional facial harmonization (fillers + threads). VISIBLE CHANGES: cheekbones are slightly elevated, jawline is more defined and contoured, face appears more symmetrical, nasolabial folds are softened — a refined, natural refinement. PRESERVE EXACTLY: same facial identity, skin tone, hair color and style, eye color, nose shape, lip shape, background, expression, lighting. Only proportions are subtly improved. Ultra-photorealistic clinical portrait.",
  "preenchimento-labial": "BEFORE→AFTER clinical simulation. The input photo is the BEFORE state. Render the AFTER state of the SAME person after professional hyaluronic acid lip filler. VISIBLE CHANGES: lips are visibly fuller (approximately 25% more volume), upper lip has a well-defined cupid's bow, vermilion border is clearly defined, lips appear plumper and more symmetrical — natural result, not overdone. PRESERVE EXACTLY: same face, skin tone, eyes, nose, cheeks, hair, background, lighting, expression. Only the lip area is changed. Ultra-photorealistic clinical portrait.",
  "bioestimulador": "BEFORE→AFTER clinical simulation. The input photo is the BEFORE state. Render the AFTER state of the SAME person 3 months after collagen biostimulator treatment (Sculptra/Radiesse). VISIBLE CHANGES: skin texture is noticeably firmer and smoother, mid-face volume is restored, fine lines and skin laxity are reduced, overall skin appears rejuvenated and fresher. PRESERVE EXACTLY: same face identity, bone structure, hair, eye color, skin tone, expression, background, lighting. Only skin quality and slight volume are improved. Ultra-photorealistic clinical portrait.",
  "bichectomia": "BEFORE→AFTER clinical simulation. The input photo is the BEFORE state. Render the AFTER state of the SAME person after bichectomy (buccal fat removal). VISIBLE CHANGES: cheeks are noticeably slimmer and more sculpted, cheekbones appear more prominent, jawline is more defined, face shape is more angular and lean. PRESERVE EXACTLY: same skin tone, eyes, nose, lips, hair, expression, background, lighting. Only the lower cheek fullness is reduced. Ultra-photorealistic clinical portrait."
};
const CLINIC = { slug: 'clinica-wulkan', name: "Clínica Wulkan", tone: "Luxo discreto, autoridade médica feminina. Vocabulário clínico (HOF, ácido hialurônico) sem perder humanidade." };

export default async function handler(req, res) {
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userB64, userMime, procedure } = req.body || {};
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'OPENAI_API_KEY_MISSING' });
  const basePrompt = PROCEDURE_PROMPTS[procedure];
  if (!basePrompt) return res.status(400).json({ error: 'Procedure not supported' });
  const fullPrompt = [basePrompt, `Preview for ${CLINIC.name}.`, 'CRITICAL: photorealistic clinical preview, preserve patient identity perfectly.'].join('\n');
  try {
    const form = new FormData();
    form.append('model', 'gpt-image-2');
    form.append('prompt', fullPrompt);
    form.append('quality', 'high');
    // retrato 1024x1536 — classe Full HD (~1.6MP), formato adequado a fotos frontais
    form.append('size', '1024x1536');
    form.append('image', new Blob([Buffer.from(userB64, 'base64')], { type: userMime || 'image/png' }), 'photo.png');
    const r = await fetch('https://api.openai.com/v1/images/edits', {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}` },
      body: form,
    });
    const j = await r.json();
    if (!r.ok) {
      const code = j?.error?.code || '';
      if (r.status === 429 || code === 'insufficient_quota' || code === 'rate_limit_exceeded') {
        return res.status(503).json({ error: 'QUOTA_EXCEEDED', userMessage: 'O simulador está temporariamente indisponível por limite de uso. Agende uma consulta para ver o resultado ao vivo com nossa equipe!' });
      }
      return res.status(500).json({ error: j?.error?.message || 'OpenAI error' });
    }
    const b64 = j?.data?.[0]?.b64_json;
    if (!b64) return res.status(500).json({ error: 'No image in response' });
    return res.status(200).json({ ok: true, clinic: CLINIC.name, procedure, image: { mimeType: 'image/png', data: b64 } });
  } catch (err) { return res.status(500).json({ error: err.message }); }
}
