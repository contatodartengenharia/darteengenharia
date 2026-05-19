import { motion } from 'framer-motion'
import { heroTitle, heroWord, fadeUp, lineGrow } from '@/animations/variants'
import heroBg768  from '@/assets/images/hero-bg-768.webp'
import heroBg1280 from '@/assets/images/hero-bg-1280.webp'
import heroBg1920 from '@/assets/images/hero-bg-1920.webp'
import heroBgFallback from '@/assets/images/hero-bg.jpg'

const HERO_SRCSET = `${heroBg768} 768w, ${heroBg1280} 1280w, ${heroBg1920} 1920w`

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function Hero() {
  return (
    <section id="inicio" aria-label="Seção inicial">

      {/* ── MOBILE: imagem acima, texto abaixo ── */}
      <div className="md:hidden">
        {/* Foto */}
        <div className="w-full h-[52vw] min-h-[220px] max-h-[320px] overflow-hidden">
          <img
            src={heroBgFallback}
            srcSet={HERO_SRCSET}
            sizes="100vw"
            alt="Fachada de imóvel residencial moderno"
            className="w-full h-full object-cover object-[center_35%]"
            fetchPriority="high"
          />
        </div>

        {/* Texto sobre fundo cream sólido */}
        <div className="bg-cream px-6 py-8">
          <motion.h1
            variants={heroTitle}
            initial="hidden"
            animate="visible"
            className="font-display text-navy leading-[1.0] mb-[0.5rem]"
            style={{ fontSize: 'clamp(2.2rem,9vw,3rem)' }}
          >
            {['DARTE', 'Engenharia Civil'].map((word, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span className="block" variants={heroWord}>{word}</motion.span>
              </span>
            ))}
          </motion.h1>

          <motion.span
            className="gold-line"
            variants={lineGrow} initial="hidden" animate="visible"
            transition={{ delay: 0.5 }}
            aria-hidden
          />

          <motion.p
            variants={fadeUp} initial="hidden" animate="visible"
            transition={{ delay: 0.6 }}
            className="text-[0.68rem] font-medium tracking-[0.2em] uppercase text-[#2C2C2C] mb-6 leading-[1.7]"
          >
            Engenharia com técnica,<br />controle e propósito
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.75 }}>
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

      {/* ── DESKTOP: split layout com gradiente horizontal ── */}
      <div
        className="hidden md:block relative overflow-hidden bg-cream"
        style={{ height: 'clamp(480px, 74vh, 780px)' }}
      >
        {/* Imagem direita */}
        <div className="absolute top-0 right-0 w-[62%] h-full">
          <img
            src={heroBgFallback}
            srcSet={HERO_SRCSET}
            sizes="62vw"
            alt="Fachada de imóvel residencial moderno"
            className="w-full h-full object-cover object-[center_35%]"
            fetchPriority="high"
          />
        </div>

        {/* Gradiente cream → transparente */}
        <div
          className="absolute inset-0 pointer-events-none z-[1]"
          style={{
            background: 'linear-gradient(to right, #F4EFE8 0%, #F4EFE8 28%, rgba(244,239,232,.96) 40%, rgba(244,239,232,.72) 52%, rgba(244,239,232,.15) 68%, transparent 82%)',
          }}
          aria-hidden
        />

        {/* Conteúdo */}
        <div className="container-app relative z-[2] h-full flex items-center">
          <div className="max-w-[480px]">
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

            <motion.span
              className="gold-line"
              variants={lineGrow} initial="hidden" animate="visible"
              transition={{ delay: 0.6 }}
              aria-hidden
            />

            <motion.p
              variants={fadeUp} initial="hidden" animate="visible"
              transition={{ delay: 0.7 }}
              className="text-[0.7rem] font-medium tracking-[0.22em] uppercase text-[#2C2C2C] mb-[1.8rem] leading-[1.7]"
            >
              Engenharia com técnica,<br />controle e propósito
            </motion.p>

            <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.85 }}>
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
      </div>

    </section>
  )
}
