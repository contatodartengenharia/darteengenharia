import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeUp, staggerContainer, scaleIn } from '@/animations/variants'
import { CONTACT } from '@/data/services'
import img1 from '@/assets/images/experiencia/exp-sabor-da-terra.jpg'
import img2 from '@/assets/images/experiencia/exp-cobertura-praia-costa.jpg'
import img3 from '@/assets/images/experiencia/exp-area-lazer.jpg'

const PROJECTS = [
  {
    title: 'Sabor da Terra',
    image: img1,
    alt: 'Fachada comercial do Sabor da Terra — vidro reflexivo e painéis brancos',
    href: CONTACT.whatsappMsg,
  },
  {
    title: 'Cobertura na Praia da Costa',
    image: img2,
    alt: 'Varanda de cobertura com vigas de madeira e vista para o mar',
    href: CONTACT.whatsappMsg,
  },
  {
    title: 'Área de lazer',
    image: img3,
    alt: 'Área de lazer com piscina, deck em madeira e palmeiras',
    href: CONTACT.whatsappMsg,
  },
]

export function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <section id="experiencia" className="py-[5.5rem] bg-cream" aria-labelledby="experience-title">
      <div className="container-app">

        {/* Cabeçalho */}
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

        {/* Grid de projetos */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {PROJECTS.map((project) => (
            <motion.a
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleIn}
              className="group block"
              aria-label={`Ver projeto: ${project.title}`}
            >
              {/* Imagem */}
              <div className="overflow-hidden rounded-[8px] h-[300px] sm:h-[320px]">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>

              {/* Título do projeto */}
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
            </motion.a>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
