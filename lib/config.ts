export const WHATSAPP_URL = "https://wa.me/+5516994117041";

export type CTALocation =
  | "header"
  | "hero"
  | "faq"
  | "final"
  | "flutuante"
  | "sticky-mobile";

export const content = {
  siteName: "Betini Academy",

  nav: [
    { label: "Como funciona", href: "#como-funciona" },
    { label: "Dúvidas", href: "#faq" },
  ],

  hero: {
    eyebrow: "MENTORIA INDIVIDUAL • 3 MESES",
    headlineGroups: [
      ["Venda", "nos", "marketplaces"],
      ["com", "acompanhamento", "de", "verdade."],
    ],
    subtitle:
      "Durante 3 meses, eu acompanho sua operação toda semana e mostro, na prática, o que precisa ser feito para evoluir.",
    marketplacesLine: "Mercado Livre • Shopee • TikTok Shop • Shein",
    ctaLabel: "Quero vender mais",
  },

  headerCtaLabel: "Quero escalar",
  mobileStickyCtaLabel: "Quero aplicar o método",

  howItWorks: {
    id: "como-funciona",
    eyebrow: "COMO FUNCIONA",
    title: "Uma mentoria construída em cima da sua operação.",
    subtitle:
      "Você não recebe uma fórmula genérica. O acompanhamento acontece diretamente sobre os seus produtos, campanhas, números e decisões.",
    items: [
      {
        tag: "INDIVIDUAL",
        description: "A estratégia é direcionada para sua operação, seus produtos e seus números.",
        image: "/images/mentoria/individual.webp",
      },
      {
        tag: "TODA SEMANA",
        description: "Acompanhamos resultados, corrigimos o que for necessário e definimos o próximo passo.",
        image: "/images/mentoria/todasemana.webp",
      },
      {
        tag: "NA PRÁTICA",
        description: "Analisamos produtos, anúncios, campanhas, métricas e oportunidades diretamente nas plataformas.",
        image: "/images/mentoria/napratica.webp",
      },
      {
        tag: "DO ZERO",
        description: "Se você ainda não vende, eu te ensino desde o início.",
        image: "/images/mentoria/dozero.webp",
      },
      {
        tag: "SUPORTE",
        description:
          "Você terá contato direto pelo meu WhatsApp para tirar dúvidas rápidas sobre suas vendas.",
        image: "/images/mentoria/suporte.webp",
      },
    ] as { tag: string; description: string; image: string | null }[],
  },

  authority: {
    id: "autoridade",
    eyebrow: "OPERAÇÃO REAL",
    statStartValue: 1000000,
    statValue: 3000000,
    statPrefix: "+R$ ",
    statSuffix: "",
    statSubtitle: "por mês, em vendas nos marketplaces.",
    title: "Eu ensino o que aplico na minha própria operação.",
  },

  proof: {
    id: "resultados",
    title: "Marketplace não é sorte.\nÉ método.",
    subtitle:
      "Nada disso foi milagre ou acaso. São estratégias aplicadas na prática, testadas em marketplace e que eu vou te ensinar a executar no seu negócio.",
  },

  finalCta: {
    titleLines: ["Você não precisa descobrir", "sozinho o que fazer a seguir."],
    text: "Eu acompanho sua operação de perto, toda semana, do jeito que ela precisa.",
    ctaLabel: "Quero entrar para a mentoria",
    microcopy: "Acompanhamento individual • Aulas semanais • 3 meses",
  },

  faq: {
    title: "Ainda com dúvida?",
    items: [
      {
        q: "A mentoria é individual?",
        a: "Sim. Todo o acompanhamento é direcionado para a sua operação, seus produtos, seus números e seus objetivos.",
      },
      {
        q: "Quanto tempo dura a mentoria?",
        a: "O acompanhamento dura 3 meses.",
      },
      {
        q: "Com que frequência acontecem as aulas?",
        a: "As aulas e acompanhamentos acontecem todas as semanas.",
      },
      {
        q: "Posso entrar mesmo sem nunca ter vendido?",
        a: "Sim. Se você estiver começando do zero, vamos estruturar sua operação desde o início.",
      },
      {
        q: "Já vendo nos marketplaces. A mentoria serve para mim?",
        a: "Sim. Nesse caso, começamos analisando sua operação atual para identificar gargalos, oportunidades e pontos de crescimento.",
      },
      {
        q: "Vocês analisam minha conta?",
        a: "Com sua autorização, o acompanhamento pode ser feito diretamente com você dentro das suas contas para analisar produtos, anúncios, campanhas, métricas e oportunidades.",
      },
    ],
    ctaPrompt: "Não achou sua dúvida?",
    ctaLabel: "Tenho interesse",
  },

  social: {
    instagram: "https://www.instagram.com/cauabetini_/?hl=en",
    tiktok: "https://www.tiktok.com/@cauabetini_?_r=1&_t=ZS-99qdkcmr21f",
  },

  legalNotice:
    "Mercado Livre, TikTok Shop, Shopee e Shein são marcas de seus respectivos proprietários. A Betini Academy não possui vínculo ou afiliação com essas empresas. Resultados individuais dependem da dedicação e da execução de cada aluno; os números citados referem-se à minha própria operação e não constituem promessa de ganhos.",
};
