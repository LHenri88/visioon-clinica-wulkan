export const CLINIC = {
  "slug": "clinica-wulkan",
  "name": "Clínica Wulkan",
  "tagline": "Harmonização Facial Médica · 18 anos",
  "slogan": "A medicina por trás da beleza natural",
  "hero_headline_real": "Especialista em Harmonização Facial Médica",
  "domain": "clinicawulkan.com.br",
  "email": "contato@clinicawulkan.com.br",
  "city": "São Paulo · SP",
  "category": "Harmonização Facial Médica",
  "primary_procedure": "harmonizacao-facial",
  "brand": {
    "primary": "#2A1C2E",
    "secondary": "#C49A6C",
    "accent": "#E8D5C4",
    "ink": "#0F0A11",
    "paper": "#FAF6F1",
    "font_display": "'Cormorant Garamond', serif",
    "font_body": "'Manrope', sans-serif",
    "logo_glyph": "W"
  },
  "tone_of_voice": "Luxo discreto, autoridade médica feminina. Vocabulário clínico (HOF, ácido hialurônico) sem perder humanidade.",
  "icp": "Mulheres 35-55, classe A/B+, pacientes recorrentes, exigem naturalidade e evidência científica.",
  "sections": [
    "Hero",
    "Doctor",
    "Protocol",
    "Procedures",
    "Simulator",
    "BeforeAfter",
    "Testimonials",
    "Press",
    "Schedule",
    "Footer",
    "ChatWidget"
  ],
  "hero": {
    "kicker": "18 anos · Harmonização Facial Médica",
    "headline": "A medicina por trás da beleza natural. Visualizada antes de aplicada.",
    "sub": "Protocolo HOF baseado em evidência, com pré-visualização clínica por IA que preserva sua identidade — calibrado em proporções áureas reais."
  },
  "cta_primary": "Simular harmonização",
  "chat_persona": "Sou Sofia, da Wulkan. Explico o protocolo HOF, cronograma de aplicações e respondo dúvidas médicas com a profundidade que você espera.",
  "procedures": [
    "harmonizacao-facial",
    "preenchimento-labial",
    "botox",
    "bioestimulador"
  ],
  "procedure_details": [
    {
      "id": "harmonizacao-facial",
      "name": "Harmonização Facial",
      "desc": "Protocolo médico de equilíbrio facial respeitando anatomia.",
      "img": "/img/procedure-hof.jpg"
    },
    {
      "id": "preenchimento-labial",
      "name": "Preenchimento Labial",
      "desc": "Volume e definição labial com ácido hialurônico premium.",
      "img": "/img/procedure-labial.jpg"
    },
    {
      "id": "botox",
      "name": "Toxina Botulínica",
      "desc": "Suavização de linhas dinâmicas preservando expressão natural.",
      "img": "/img/procedure-botox.jpg"
    },
    {
      "id": "bioestimulador",
      "name": "Bioestimulador",
      "desc": "Estímulo de colágeno para firmeza e qualidade da pele.",
      "img": "/img/procedure-bio.jpg"
    }
  ],
  "doctor": {
    "name": "Dra. Wulkan",
    "title": "CRM-SP · Especialista em Medicina Estética",
    "bio": "Há 18 anos referência em harmonização facial médica em São Paulo. Pesquisadora em proporções áureas aplicadas à estética facial.",
    "avatar": "/img/doctor.jpg"
  },
  "protocol": {
    "title": "Protocolo HOF Wulkan",
    "sub": "Mais do que aplicações — um plano estético-clínico em 4 etapas",
    "steps": [
      {
        "title": "Avaliação anatômica",
        "desc": "Análise de proporções áureas, simetria e plano facial."
      },
      {
        "title": "Planejamento individual",
        "desc": "Cronograma de aplicações respeitando sua identidade."
      },
      {
        "title": "Procedimentos em sessões",
        "desc": "Toxina, preenchimento, bioestimulador — protocolo escalonado."
      },
      {
        "title": "Acompanhamento",
        "desc": "Reavaliação a cada 90 dias com pré-visualização atualizada."
      }
    ]
  },
  "press": [
    "Vogue Brasil",
    "Harper's Bazaar",
    "Estado de S. Paulo",
    "Glamour"
  ],
  "testimonials_real": [
    {
      "text": "A primeira clínica em que senti que respeitavam minha identidade. Resultado natural.",
      "author": "Cliente · 42, Jardins"
    },
    {
      "text": "Procuro a Dra. Wulkan há 6 anos. Confiança total.",
      "author": "Cliente · 38, Higienópolis"
    },
    {
      "text": "Saí parecendo eu mesma — só descansada e equilibrada.",
      "author": "Cliente · 51, Itaim"
    }
  ],
  "images": {
    "hero": "/img/hero.jpg",
    "procedures": {
      "harmonizacao-facial": "/img/procedure-hof.jpg",
      "preenchimento-labial": "/img/procedure-labial.jpg",
      "botox": "/img/procedure-botox.jpg",
      "bioestimulador": "/img/procedure-bio.jpg"
    },
    "doctor": "/img/doctor.jpg",
    "_note": "Wulkan: imagens geradas via nano-banana (site oficial bloqueou WebFetch)"
  }
} as const;
export type ClinicConfig = typeof CLINIC;
