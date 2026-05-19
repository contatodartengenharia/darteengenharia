import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, slideLeft, lineGrow } from '@/animations/variants'
import ctaImg from '@/assets/images/cta-interior.webp'

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-10% 0px' })

  return (
    <section id="sobre" className="py-[5.5rem] bg-sand overflow-hidden" aria-labelledby="cta-title" ref={ref}>
      <div className="container-app">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Conteúdo esquerdo */}
          <div className="max-w-[480px]">
            <motion.h2
              id="cta-title"
              className="font-display text-navy leading-[1.22] mb-[0.4rem]"
              style={{ fontSize: 'clamp(1.8rem,3.5vw,2.7rem)' }}
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            >
              Precisa de suporte<br />técnico para<br />seu imóvel?
            </motion.h2>

            <motion.span
              className="gold-line"
              variants={lineGrow} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.2 }}
              aria-hidden
            />

            <motion.p
              className="text-[0.88rem] text-muted leading-[1.8] mb-[1.75rem]"
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.25 }}
            >
              Fale com a DARTE Engenharia<br />e solicite uma avaliação.
            </motion.p>

            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
              transition={{ delay: 0.35 }}
            >
              <a
                href="https://wa.me/5527999999999?text=Olá!%20Gostaria%20de%20solicitar%20uma%20avaliação%20técnica."
                target="_blank" rel="noopener noreferrer"
                className="btn-navy"
              >
                {WA_ICON}
                Falar no WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Imagem direita */}
          <motion.div
            className="h-[260px] sm:h-[340px] lg:h-[440px] rounded-[20px] overflow-hidden shadow-[0_20px_56px_rgba(28,58,110,.14)]"
            variants={slideLeft} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.15 }}
          >
            <img
              src={ctaImg}
              alt="Interior moderno com ampla janela"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
