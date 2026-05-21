import { motion, AnimatePresence, useInView } from 'framer-motion'
import { useState, useCallback, useEffect, useRef } from 'react'
import { X } from 'lucide-react'
import { fadeUp, staggerContainer, scaleIn } from '@/animations/variants'
import { CONTACT } from '@/data/services'

// Cover images
import img1 from '@/assets/images/experiencia/exp-sabor-da-terra.webp'
import img2 from '@/assets/images/experiencia/exp-cobertura-praia-costa.webp'
import img3 from '@/assets/images/experiencia/exp-area-lazer.webp'

// Sabor da Terra gallery
import sdt2 from '@/assets/images/experiencia/sabor-da-terra/exp-sabor-da-terra-BJ2cqtKJ2.webp'
import sdt3 from '@/assets/images/experiencia/sabor-da-terra/gemini-2.5-flash-image_Um_angulo_de_cima-0.webp'

// Cobertura Praia da Costa gallery
import cpc2 from '@/assets/images/experiencia/cobertura-praia-costa/c2bc912b-1485-4404-8ec3-264a702a73b5.webp'
import cpc3 from '@/assets/images/experiencia/cobertura-praia-costa/db97f41b-d437-4db9-b985-632f6f82747e.webp'

// Área de Lazer gallery
import al2 from '@/assets/images/experiencia/area-lazer/47efa51c-ea75-40d9-9f07-1efe11799d88.webp'
import al3 from '@/assets/images/experiencia/area-lazer/cd6d6404-ce3d-4a0d-9e42-228cc7d4c676.webp'

interface ProjectImage {
  src: string
  alt: string
}

interface Project {
  id: string
  title: string
  images: ProjectImage[]
}

const PROJECTS: Project[] = [
  {
    id: 'sabor-da-terra',
    title: 'Sabor da Terra',
    images: [
      { src: img1, alt: 'Fachada comercial do Sabor da Terra — vidro reflexivo e painéis brancos' },
      { src: sdt2, alt: 'Sabor da Terra — detalhe da fachada' },
      { src: sdt3, alt: 'Sabor da Terra — vista superior' },
    ],
  },
  {
    id: 'cobertura-praia-costa',
    title: 'Cobertura na Praia da Costa',
    images: [
      { src: img2, alt: 'Varanda de cobertura com vigas de madeira e vista para o mar' },
      { src: cpc2, alt: 'Cobertura Praia da Costa — interior' },
      { src: cpc3, alt: 'Cobertura Praia da Costa — detalhe' },
    ],
  },
  {
    id: 'area-lazer',
    title: 'Área de lazer',
    images: [
      { src: img3, alt: 'Área de lazer com piscina, deck em madeira e palmeiras' },
      { src: al2, alt: 'Área de lazer — detalhe do deck' },
      { src: al3, alt: 'Área de lazer — vista geral' },
    ],
  },
]

const WA_MSG = (title: string) =>
  `${CONTACT.whatsapp}?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20projeto%20${encodeURIComponent(title)}.`

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [activeIdx, setActiveIdx] = useState(0)

  const selectedProject = PROJECTS.find(p => p.id === selectedId) ?? null

  const open = useCallback((id: string) => {
    setSelectedId(id)
    setActiveIdx(0)
  }, [])

  const close = useCallback(() => {
    setSelectedId(null)
    setActiveIdx(0)
  }, [])

  // Esc key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [close])

  // Lock body scroll when gallery is open
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [selectedId])

  return (
    <section id="experiencia" className="py-[5.5rem] bg-cream" aria-labelledby="experience-title">
      <div className="container-app">

        {/* Header */}
        <header className="text-center mb-10" ref={ref}>
          <motion.h2
            id="experience-title"
            className="section-title"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
          >
            Experiência que se traduz em resultados
          </motion.h2>
          <motion.p
            className="text-[0.85rem] text-muted mt-2"
            variants={fadeUp} initial="hidden" animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.1 }}
          >
            Projetos que refletem técnica, controle e atenção aos detalhes.
          </motion.p>
        </header>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {PROJECTS.map((project) => (
            <motion.button
              key={project.id}
              variants={scaleIn}
              onClick={() => open(project.id)}
              className="group block text-left w-full cursor-pointer"
              aria-label={`Ver galeria: ${project.title}`}
            >
              {/* Cover image */}
              <div className="overflow-hidden rounded-[8px] h-[300px] sm:h-[320px]">
                <img
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>

              {/* Title row */}
              <div className="flex items-center justify-between pt-4 pb-1">
                <span className="font-body text-[0.88rem] font-medium text-navy
                                 transition-colors duration-200 group-hover:text-gold-dark">
                  {project.title}
                </span>
                <span
                  className="text-navy text-[0.9rem] transition-transform duration-300 ease-out-expo group-hover:translate-x-1 group-hover:text-gold-dark"
                  aria-hidden
                >
                  →
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>

      </div>

      {/* Gallery modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-navy/80 backdrop-blur-sm"
              onClick={close}
              aria-hidden
            />

            {/* Positioning wrapper — separado do motion para não conflitar com transforms de animação */}
            <div className={[
              'fixed z-50',
              'inset-x-3 top-[4vh] bottom-[4vh]',
              'md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2',
              'md:w-[min(860px,92vw)]',
            ].join(' ')}>
            <motion.div
              key="gallery-panel"
              role="dialog"
              aria-modal="true"
              aria-label={`Galeria: ${selectedProject.title}`}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 32, scale: 0.97 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              className="h-full md:max-h-[88vh] overflow-y-auto rounded-[12px] bg-white"
            >
              {/* Modal header */}
              <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-4 bg-navy">
                <h3 className="font-display text-white text-[1.15rem] font-normal leading-tight">
                  {selectedProject.title}
                </h3>
                <button
                  onClick={close}
                  className="p-1.5 text-white/50 hover:text-white transition-colors duration-200 rounded"
                  aria-label="Fechar galeria"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Main image */}
              <div className="relative bg-sand w-full" style={{ aspectRatio: '16/9' }}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeIdx}
                    src={selectedProject.images[activeIdx].src}
                    alt={selectedProject.images[activeIdx].alt}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.28 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Image counter */}
                <span className="absolute bottom-3 right-3 bg-navy/60 text-white text-[0.7rem] px-2 py-0.5 rounded-full backdrop-blur-sm" aria-hidden>
                  {activeIdx + 1} / {selectedProject.images.length}
                </span>
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3 px-4 pt-4 pb-2 flex-wrap" role="group" aria-label="Miniaturas">
                {selectedProject.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    className={[
                      'w-[5.5rem] h-[3.8rem] sm:w-24 sm:h-16 rounded-[6px] overflow-hidden border-2 transition-all duration-200 flex-shrink-0',
                      i === activeIdx
                        ? 'border-gold shadow-[0_0_0_2px_rgba(184,147,90,0.3)]'
                        : 'border-transparent opacity-55 hover:opacity-90',
                    ].join(' ')}
                    aria-label={`Imagem ${i + 1} de ${selectedProject.title}`}
                    aria-pressed={i === activeIdx}
                  >
                    <img
                      src={img.src}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="px-4 pb-6 pt-3">
                <a
                  href={WA_MSG(selectedProject.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-navy !bg-gold hover:!bg-gold-dark justify-center w-full"
                  aria-label={`Falar sobre o projeto ${selectedProject.title} no WhatsApp`}
                >
                  Falar sobre este projeto
                </a>
              </div>
            </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  )
}
