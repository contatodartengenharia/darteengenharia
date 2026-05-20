import { useState, useCallback, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2 } from 'lucide-react'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer } from '@/animations/variants'
import { SERVICES, CONTACT } from '@/data/services'
import iconVistoria    from '@/assets/images/icon-vistoria-imoveis.png'
import iconAcompanha   from '@/assets/images/icon-acompanhamento-obras.png'
import iconInspecao    from '@/assets/images/icon-inspecao-predial.png'
import iconConsultoria from '@/assets/images/icon-consultoria-reforma.png'
import iconOrcamento   from '@/assets/images/icon-orcamento-obra.png'
import iconRegulariza  from '@/assets/images/icon-regularizacao-imoveis.png'
import {
  IconVistoriaImoveis,
  IconAcompanhamentoObras,
  IconInspecaoPredial,
  IconConsultoriaReforma,
  IconOrcamentoObra,
  IconRegularizacaoImoveis,
} from '@/assets/icons/serviceIcons'

/* PNG — cards fechados (fundo claro) */
const PNG_ICONS = [
  iconVistoria, iconAcompanha, iconInspecao,
  iconConsultoria, iconOrcamento, iconRegulariza,
]

/* SVG — card expandido (fundo navy, herda text-white) */
const SVG_ICONS = [
  IconVistoriaImoveis, IconAcompanhamentoObras, IconInspecaoPredial,
  IconConsultoriaReforma, IconOrcamentoObra, IconRegularizacaoImoveis,
]

const WA_MSG = (title: string) =>
  `${CONTACT.whatsapp}?text=Olá!%20Tenho%20interesse%20no%20serviço%20de%20${encodeURIComponent(title)}.`

export function Services() {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  const selected = SERVICES.find(s => s.id === selectedId) ?? null
  const others = SERVICES.filter(s => s.id !== selectedId)

  const close = useCallback(() => setSelectedId(null), [])

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [close])

  return (
    <section id="servicos" className="py-[5.5rem] bg-cream" aria-labelledby="services-title">
      <div className="container-app">

        {/* Cabeçalho */}
        <header className="text-center mb-11" ref={ref}>
          <motion.h2
            id="services-title"
            className="section-title mt-1"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            Soluções técnicas e serviços
          </motion.h2>
        </header>

        {/* Grid com expansão */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-card overflow-hidden"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          role="list"
        >
          {/* Card expandido */}
          <AnimatePresence mode="popLayout">
            {selected && (() => {
              const idx = SERVICES.findIndex(s => s.id === selected.id)
              const SvgIcon = SVG_ICONS[idx]
              return (
                <motion.article
                  key={`${selected.id}-expanded`}
                  layout
                  layoutId={selected.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="col-span-1 sm:col-span-2 lg:col-span-3 bg-navy relative"
                  role="listitem"
                  aria-expanded="true"
                >
                  <div className="p-8 lg:p-10">
                    <button
                      onClick={close}
                      className="absolute top-5 right-5 text-white/40 hover:text-white transition-colors duration-200 p-1"
                      aria-label="Fechar detalhes"
                    >
                      <X size={20} />
                    </button>

                    <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-8 lg:gap-12 items-start">
                      <div className="flex flex-col gap-4">
                        <div className="w-14 h-14 flex-shrink-0 text-white/70">
                          <SvgIcon className="w-full h-full" />
                        </div>
                        <div>
                          <h3 className="font-display text-white text-[1.6rem] lg:text-[2rem] font-normal leading-[1.2] max-w-[280px]">
                            {selected.title}
                          </h3>
                          <span className="block w-10 h-[2px] bg-gold mt-3" aria-hidden />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-start">
                        <div>
                          <p className="text-white/70 text-[0.9rem] leading-[1.85] mb-6">
                            {selected.detail}
                          </p>
                          <ul className="flex flex-col gap-[0.6rem]">
                            {selected.includes.map((item) => (
                              <li key={item} className="flex items-start gap-[0.6rem]">
                                <CheckCircle2 className="text-gold flex-shrink-0 mt-0.5" size={16} aria-hidden />
                                <span className="text-white/80 text-[0.82rem] leading-[1.6]">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-col gap-3 lg:min-w-[200px]">
                          <a
                            href={WA_MSG(selected.title)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-navy !bg-gold hover:!bg-gold-dark whitespace-nowrap justify-center"
                          >
                            Solicitar Orçamento
                          </a>
                          <button
                            onClick={close}
                            className="text-white/40 text-[0.75rem] hover:text-white/70 transition-colors text-center"
                          >
                            Ver todos os serviços
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              )
            })()}
          </AnimatePresence>

          {/* Cards normais */}
          {(selectedId ? others : SERVICES).map((svc) => {
            const PngIcon = PNG_ICONS[SERVICES.findIndex(s => s.id === svc.id)]
            const isOther = !!selectedId

            return (
              <motion.article
                key={svc.id}
                layout
                layoutId={svc.id}
                variants={fadeUp}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setSelectedId(svc.id)}
                className="group bg-white relative overflow-hidden
                           p-[1.8rem_1.9rem_1.85rem] cursor-pointer select-none
                           transition-colors duration-300 hover:bg-[#FAF7F2]"
                style={{ opacity: isOther ? 0.7 : 1 }}
                role="listitem button"
                tabIndex={0}
                aria-label={`Ver detalhes: ${svc.title}`}
                onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') setSelectedId(svc.id) }}
              >
                {/* Linha dourada hover */}
                <span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gold origin-left scale-x-0
                             transition-transform duration-[600ms] ease-out-expo group-hover:scale-x-100"
                  aria-hidden
                />
                {/* Shimmer */}
                <span
                  className="absolute inset-0 bg-[linear-gradient(105deg,transparent_38%,rgba(255,255,255,.32)_50%,transparent_62%)]
                             -translate-x-full transition-transform duration-500 ease-out-expo group-hover:translate-x-full"
                  aria-hidden
                />

                {/* Layout: ícone + título + "+" na mesma linha, descrição abaixo */}
                <div className="flex items-start gap-4">
                  <div
                    className="w-[52px] h-[52px] flex-shrink-0
                               transition-transform duration-[320ms] ease-spring group-hover:-translate-y-1"
                    aria-hidden
                  >
                    <img src={PngIcon} alt="" className="w-full h-full object-contain brightness-[1.05] group-hover:brightness-100 transition-[filter] duration-300" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-[1.05rem] font-medium text-navy leading-[1.3]">
                        {svc.title}
                      </h3>
                      <span
                        className="text-navy text-[1.3rem] leading-none flex-shrink-0 mt-0.5
                                   transition-transform duration-300 group-hover:rotate-45 group-hover:text-gold"
                        aria-hidden
                      >
                        +
                      </span>
                    </div>
                    <p className="text-[0.8rem] text-muted leading-[1.75] mt-2">
                      {svc.description}
                    </p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        {/* Hint quando expandido */}
        <AnimatePresence>
          {selectedId && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.3 }}
              className="text-center text-[0.72rem] text-muted mt-4"
            >
              Pressione <kbd className="bg-white border border-border rounded px-1.5 py-0.5 font-mono text-[0.68rem]">Esc</kbd> ou clique em outro serviço para fechar
            </motion.p>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}
