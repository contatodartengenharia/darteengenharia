export const SERVICES = [
  {
    id: 'vistoria-imoveis',
    title: 'Vistoria de Imóveis',
    description: 'Avaliação técnica para identificar patologias construtivas e não conformidades aparentes em imóveis residenciais e comerciais.',
    detail: 'Realizamos vistorias técnicas em imóveis residenciais e comerciais para identificar patologias construtivas, não conformidades aparentes e manifestações que possam comprometer a segurança, o desempenho e a conservação do imóvel.',
    includes: [
      'Vistoria para compra de imóvel',
      'Vistoria de entrega de imóvel/entrega de chaves',
      'Vistoria para locação',
      'Vistoria cautelar de vizinhança antes do início da obra',
      'Inspeção visual das condições aparentes do imóvel',
      'Relatório técnico de vistoria com registro fotográfico e respectiva ART',
    ],
  },
  {
    id: 'acompanhamento-obras',
    title: 'Acompanhamento de Obras e Reformas',
    description: 'Supervisão técnica da execução de obras e reformas, com controle de qualidade, prazos, etapas e alinhamento com o projeto e as normas técnicas.',
    detail: 'Acompanhamos obras e reformas com olhar técnico sobre a execução, qualidade dos serviços, prazos e etapas, contribuindo para prevenir falhas, orientar decisões e garantir mais segurança ao andamento da obra.',
    includes: [
      'Acompanhamento de obras e reformas residenciais e comerciais',
      'Visitas técnicas periódicas à obra',
      'Supervisão da execução dos serviços',
      'Controle de qualidade, prazos e etapas',
      'Verificação do alinhamento com o projeto, normas técnicas e boas práticas de engenharia',
      'Registro de alterações relevantes durante a execução, quando necessário',
    ],
  },
  {
    id: 'inspecao-predial',
    title: 'Inspeção Predial',
    description: 'Análise técnica das condições de conservação, segurança, uso e manutenção de edificações residenciais e comerciais.',
    detail: 'Realizamos inspeções prediais conforme a ABNT NBR 16747 para identificar manifestações patológicas, anomalias e não conformidades, avaliar riscos e orientar a manutenção preventiva e corretiva da edificação.',
    includes: [
      'Inspeção predial conforme ABNT NBR 16747',
      'Avaliação dos sistemas da edificação',
      'Identificação de manifestações patológicas, anomalias e não conformidades',
      'Classificação do grau de risco das anomalias e não conformidades identificadas',
      'Plano de manutenção preventiva e corretiva',
      'Emissão de laudo de inspeção predial com registro fotográfico e respectiva ART',
    ],
  },
  {
    id: 'consultoria-reforma',
    title: 'Consultoria para Obras e Reformas',
    description: 'Consultoria técnica para orientar decisões sobre obras, reformas, intervenções e demandas de manutenção em condomínios, residências e imóveis comerciais.',
    detail: 'Orientamos clientes, síndicos, administradoras e responsáveis pela tomada de decisão em obras, reformas e intervenções, com suporte na avaliação de soluções, definição dos próximos passos e redução de riscos, improvisos e retrabalhos.',
    includes: [
      'Consultoria técnica para obras, reformas e intervenções',
      'Orientação antes de iniciar a obra ou reforma',
      'Avaliação de soluções técnicas e alternativas possíveis',
      'Suporte para tomada de decisões mais seguras',
      'Apoio à definição dos próximos passos',
      'Direcionamento técnico para reduzir riscos, improvisos e retrabalhos',
    ],
  },
  {
    id: 'orcamento-obra',
    title: 'Orçamento de Obra',
    description: 'Elaboração de orçamento para obras e reformas com base em projeto e escopo definido, em versão estimativa ou detalhada.',
    detail: 'Elaboramos orçamentos para obras e reformas em formato estimativo ou detalhado, com levantamento de quantitativos e organização dos custos por etapas, trazendo mais clareza ao planejamento financeiro da execução.',
    includes: [
      'Orçamento estimativo para noção inicial de custo',
      'Orçamento detalhado de obra ou reforma',
      'Levantamento de serviços e quantitativos',
      'Estimativa de materiais, mão de obra e etapas de execução',
      'Organização dos custos por serviços ou fases da obra',
      'Apoio ao planejamento financeiro da execução',
    ],
  },
  {
    id: 'regularizacao-imoveis',
    title: 'Regularização de Imóveis',
    description: 'Suporte técnico para regularização de imóveis residenciais e comerciais, com adequação documental e apoio em processos junto aos órgãos competentes.',
    detail: 'Atuamos no apoio técnico para identificar pendências, organizar informações do imóvel e orientar as adequações necessárias para processos de regularização, trazendo mais clareza e segurança documental para proprietários, empresas e agentes do mercado imobiliário.',
    includes: [
      'Regularização de imóveis residenciais e comerciais',
      'Apoio a proprietários, empresas e imobiliárias',
      'Organização documental e adequações necessárias',
      'Suporte técnico para demandas de regularização',
    ],
  },
] as const

export type ServiceId = typeof SERVICES[number]['id']

export const CONTACT = {
  phone: '(27) 99796-7523',
  phoneHref: 'tel:+5527997967523',
  whatsapp: 'https://wa.me/5527997967523',
  whatsappMsg: 'https://wa.me/5527997967523?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento.',
  email: 'contato@darteeng.com.br',
  region: 'Vitória - ES',
  instagram: 'https://instagram.com/darte.engenharia',
  instagramHandle: '@darte.engenharia',
} as const
