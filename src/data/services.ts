export const SERVICES = [
  {
    id: 'vistoria-imoveis',
    title: 'Vistoria de Imóveis',
    description: 'Avaliação técnica de imóveis residenciais e comerciais.',
    detail: 'Realizamos vistorias técnicas em imóveis residenciais e comerciais com foco na identificação de patologias construtivas, não conformidades aparentes e demais manifestações que possam comprometer a segurança, o desempenho e a conservação do imóvel.',
    includes: [
      'Vistoria para compra de imóvel',
      'Vistoria de entrega de imóvel (entrega de chaves)',
      'Vistoria para locação',
      'Inspeção visual das condições aparentes do imóvel',
      'Relatório técnico de vistoria com registro fotográfico e respectiva ART',
    ],
  },
  {
    id: 'acompanhamento-obras',
    title: 'Acompanhamento de Obras e Reformas',
    description: 'Supervisão técnica com controle de execução.',
    detail: 'Presença técnica constante ou periódica na obra para fiscalizar a execução dos serviços, garantir que os projetos estejam sendo respeitados, controlar a qualidade dos materiais aplicados e validar cada etapa antes de liberar o pagamento do empreiteiro.',
    includes: [
      'Visitas técnicas periódicas com relatório de progresso',
      'Fiscalização da conformidade com projetos e normas',
      'Controle de qualidade de materiais e serviços',
      'Mediação técnica entre cliente e empreiteiro',
      'Liberação técnica de cada etapa da obra',
    ],
  },
  {
    id: 'inspecao-predial',
    title: 'Inspeção Predial',
    description: 'Análise das condições de conservação e segurança.',
    detail: 'Avaliação completa das condições de conservação, manutenção e segurança de edificações, conforme a NBR 16.747. Atendemos condomínios residenciais e comerciais que precisam do laudo para fins legais, seguros ou para planejamento de manutenção preventiva.',
    includes: [
      'Inspeção conforme NBR 16.747',
      'Avaliação de todos os sistemas da edificação',
      'Classificação de risco das anomalias (baixo, médio, alto, crítico)',
      'Plano de manutenção preventiva e corretiva',
      'Laudo com ART para fins legais e de seguro',
    ],
  },
  {
    id: 'consultoria-reforma',
    title: 'Consultoria para Obras e Reformas',
    description: 'Orientação técnica para soluções eficientes e seguras.',
    detail: 'Antes de iniciar qualquer obra, conte com orientação técnica especializada. Analisamos a viabilidade estrutural, verificamos a necessidade de projetos e alvarás, e orientamos a execução para evitar retrabalhos, gastos desnecessários e riscos à segurança.',
    includes: [
      'Análise de viabilidade estrutural da reforma',
      'Verificação de necessidade de projetos e alvarás',
      'Compatibilização das intervenções com a edificação existente',
      'Orientação sobre materiais e técnicas adequadas',
      'Acompanhamento inicial para evitar erros de execução',
    ],
  },
  {
    id: 'orcamento-obra',
    title: 'Orçamento de Obra',
    description: 'Estimativas de custos estruturadas e assertivas.',
    detail: 'Elaboramos orçamentos técnicos detalhados para obras e reformas, com levantamento preciso de quantitativos, especificação de materiais e composição de custos. Ideal para planejar financeiramente sua obra antes de iniciar a execução.',
    includes: [
      'Levantamento de quantitativos por etapa',
      'Pesquisa e especificação de materiais',
      'Composição de custos com BDI',
      'Memória de cálculo detalhada',
      'Relatório com cronograma físico-financeiro',
    ],
  },
  {
    id: 'regularizacao-imoveis',
    title: 'Regularização de Imóveis',
    description: 'Suporte técnico para adequação e regularização.',
    detail: 'Prestamos assessoria técnica para regularização de imóveis junto aos órgãos competentes, incluindo emissão de ART, elaboração de projetos as built e adequação documental. Garantimos que seu imóvel esteja em conformidade com a legislação vigente.',
    includes: [
      'Análise da situação cadastral do imóvel',
      'Elaboração de projetos as built',
      'Emissão de ART/RRT',
      'Assessoria junto à prefeitura e cartório',
      'Acompanhamento do processo até a conclusão',
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
