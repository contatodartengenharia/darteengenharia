/* Ícones dos serviços — viewBox 46×46 */

/* 1 — Clipboard + lupa (Vistoria de Imóveis) */
export function IconVistoriaImoveis(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 46 46" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="6" y="9" width="25" height="31" rx="2"/>
      <rect x="14" y="6" width="9" height="6" rx="1.5"/>
      <polyline points="10,17 12,19.5 15,15.5"/>
      <line x1="17" y1="17.5" x2="26" y2="17.5"/>
      <polyline points="10,23 12,25.5 15,21.5"/>
      <line x1="17" y1="23.5" x2="26" y2="23.5"/>
      <polyline points="10,29 12,31.5 15,27.5"/>
      <line x1="17" y1="29.5" x2="23" y2="29.5"/>
      <circle cx="29" cy="33" r="7"/>
      <line x1="34.5" y1="38.5" x2="38" y2="42"/>
    </svg>
  )
}

/* 2 — Capacete de obra (Acompanhamento de Obras e Reformas) */
export function IconAcompanhamentoObras(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 46 46" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Cúpula */}
      <path d="M7 27 Q7 10 23 10 Q39 10 39 27"/>
      {/* Aba (mais larga) */}
      <line x1="3" y1="27" x2="43" y2="27" strokeWidth="2.2"/>
      {/* Fita interna de suspensão */}
      <path d="M13 27 Q13 20 23 19 Q33 20 33 27"/>
    </svg>
  )
}

/* 3 — Prédio + lupa com check (Inspeção Predial) */
export function IconInspecaoPredial(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 46 46" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="12" width="24" height="30" rx="1"/>
      <rect x="6"  y="15" width="5" height="4" rx=".5"/>
      <rect x="14" y="15" width="5" height="4" rx=".5"/>
      <rect x="6"  y="22" width="5" height="4" rx=".5"/>
      <rect x="14" y="22" width="5" height="4" rx=".5"/>
      <rect x="6"  y="29" width="5" height="4" rx=".5"/>
      <rect x="11" y="34" width="5" height="8" rx=".5"/>
      <rect x="6"  y="7"  width="5" height="5" rx=".5"/>
      <rect x="15" y="7"  width="5" height="5" rx=".5"/>
      <circle cx="34" cy="28" r="9"/>
      <polyline points="30,28 32.5,30.5 38,25"/>
      <line x1="41" y1="35" x2="44" y2="38"/>
    </svg>
  )
}

/* 4 — Rolo de planta + lápis (Consultoria para Obras e Reformas) */
export function IconConsultoriaReforma(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 46 46" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Rolo de planta — corpo plano */}
      <rect x="14" y="20" width="26" height="18" rx="1"/>
      {/* Ponta cilíndrica esquerda do rolo */}
      <ellipse cx="14" cy="29" rx="4.5" ry="9"/>
      {/* Linhas da planta (planta-baixa) */}
      <line x1="19" y1="25" x2="36" y2="25"/>
      <line x1="19" y1="29" x2="36" y2="29"/>
      <line x1="19" y1="33" x2="29" y2="33"/>
      <line x1="26" y1="20" x2="26" y2="38"/>
      {/* Lápis diagonal — dois lados do corpo */}
      <line x1="32" y1="5" x2="15" y2="22"/>
      <line x1="35" y1="8" x2="18" y2="25"/>
      {/* Topo do lápis (borracha) */}
      <line x1="32" y1="5" x2="35" y2="8"/>
      {/* Ponta do lápis */}
      <polyline points="15,22 12,26 18,25"/>
    </svg>
  )
}

/* 5 — Documento + moeda $ + calculadora (Orçamento de Obra) */
export function IconOrcamentoObra(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 46 46" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Documento */}
      <path d="M5 4 H27 L35 12 V41 H5 Z"/>
      <polyline points="27,4 27,12 35,12"/>
      {/* Moeda de dólar */}
      <circle cx="16" cy="30" r="8"/>
      <line x1="16" y1="22.5" x2="16" y2="24"/>
      <line x1="16" y1="36" x2="16" y2="37.5"/>
      <path d="M13 24.5 Q13 22.5 16 22.5 Q19 22.5 19 25 Q19 27.5 16 28 Q13 28.5 13 31 Q13 33.5 16 33.5 Q19 33.5 19 31.5"/>
      {/* Calculadora */}
      <rect x="28" y="21" width="13" height="18" rx="1.5"/>
      <rect x="30" y="23" width="9" height="4" rx=".5"/>
      <rect x="30" y="29" width="2.5" height="2" rx=".3"/>
      <rect x="33.5" y="29" width="2.5" height="2" rx=".3"/>
      <rect x="37" y="29" width="2.5" height="2" rx=".3"/>
      <rect x="30" y="33" width="2.5" height="2" rx=".3"/>
      <rect x="33.5" y="33" width="2.5" height="2" rx=".3"/>
      <rect x="37" y="33" width="2.5" height="2" rx=".3"/>
    </svg>
  )
}

/* 6 — Documento + casa + check (Regularização de Imóveis) */
export function IconRegularizacaoImoveis(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 46 46" fill="none" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* Documento */}
      <path d="M5 4 H27 L35 12 V41 H5 Z"/>
      <polyline points="27,4 27,12 35,12"/>
      {/* Casa dentro do documento */}
      <polyline points="10,35 10,26 20,19 30,26 30,35"/>
      <line x1="8" y1="27" x2="20" y2="19"/>
      <line x1="32" y1="27" x2="20" y2="19"/>
      <rect x="16" y="28" width="8" height="7" rx=".5"/>
      {/* Selo de verificação */}
      <circle cx="33" cy="36" r="7"/>
      <polyline points="29.5,36 32,38.5 37,33"/>
    </svg>
  )
}
