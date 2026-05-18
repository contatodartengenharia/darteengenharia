import { motion } from 'framer-motion'
import { heroTitle, heroWord, fadeUp, lineGrow } from '@/animations/variants'
import heroBg from '@/assets/images/hero-bg.jpg'

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-cream"
      style={{ height: 'clamp(480px, 74vh, 780px)' }}
      aria-label="Seção inicial"
    >
      {/* Imagem — full width em mobile, 62% em desktop */}
      <div className="absolute top-0 right-0 w-full md:w-[62%] h-full">
        <img
          src={heroBg}
          alt="Fachada de imóvel residencial moderno"
          className="w-full h-full object-cover object-[center_35%]"
          fetchPriority="high"
        />
      </div>

      {/* Gradiente vertical — mobile only */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] md:hidden"
        style={{ background: 'linear-gradient(to bottom, rgba(244,239,232,.5) 0%, rgba(244,239,232,.85) 38%, #F4EFE8 62%)' }}
        aria-hidden
      />
      {/* Gradiente horizontal — desktop only */}
      <div
        className="absolute inset-0 pointer-events-none z-[1] hidden md:block"
        style={{
          background: 'linear-gradient(to right, #F4EFE8 0%, #F4EFE8 28%, rgba(244,239,232,.96) 40%, rgba(244,239,232,.72) 52%, rgba(244,239,232,.15) 68%, transparent 82%)',
        }}
        aria-hidden
      />

      {/* Conteúdo */}
      <div className="container-app relative z-[2] h-full flex items-end md:items-center pb-10 md:pb-0 pt-4">
        <div className="max-w-[480px]">

          {/* Título */}
          <motion.h1
            variants={heroTitle}
            initial="hidden"
            animate="visible"
            className="font-display text-navy leading-[1.0] mb-[0.6rem]"
            style={{ fontSize: 'clamp(2.6rem,5.5vw,4.8rem)', letterSpacing: '0.01em' }}
          >
            {['DARTE', 'Engenharia Civil'].map((word, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span className="block" variants={heroWord}>{word}</motion.span>
              </span>
            ))}
          </motion.h1>

          {/* Gold line */}
          <motion.span
            className="gold-line"
            variants={lineGrow}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.6 }}
            aria-hidden
          />

          {/* Subtítulo */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.7 }}
            className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-[#2C2C2C] mb-[1.8rem] leading-[1.7]"
          >
            Engenharia com técnica,<br />controle e propósito
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.85 }}
          >
            <a
              href="https://wa.me/5527999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
              target="_blank" rel="noopener noreferrer"
              className="btn-navy"
            >
              {WA_ICON}
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
