import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { scrollTo } from '@/hooks/useLenis'
import logoImg from '@/assets/images/a7962e9d-75c5-4131-9087-7d1a78e0ec6f.jpg'

const NAV_LINKS = [
  { label: 'Início',      href: '#inicio' },
  { label: 'Serviços',    href: '#servicos' },
  { label: 'Experiência', href: '#experiencia' },
  { label: 'Contato',     href: '#contato' },
]

const WA_ICON = (
  <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('#inicio')

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(e => { if (e.isIntersecting) setActive(`#${e.target.id}`) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }

  return (
    <>
      <nav className="sticky top-0 z-[100] h-[68px] bg-white border-b border-border flex items-center">
        <div className="container-app flex items-center justify-between w-full">

          {/* Logo */}
          <a href="#inicio" onClick={e => handleNav(e, '#inicio')} className="flex items-center gap-[0.65rem]">
            <img src={logoImg} alt="" width={38} height={38} className="rounded-md object-contain" aria-hidden />
            <div className="leading-[1.1]">
              <span className="block font-display text-[1.15rem] font-semibold text-navy tracking-[0.04em]">D'Arte</span>
              <span className="block text-[0.55rem] font-medium tracking-[0.18em] uppercase text-muted">Engenharia Civil</span>
            </div>
          </a>

          {/* Links desktop */}
          <ul className="hidden md:flex items-center gap-9" role="list">
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={e => handleNav(e, link.href)}
                  className={cn(
                    'text-[0.82rem] font-normal text-[#2C2C2C] relative pb-0.5',
                    'after:absolute after:bottom-[-2px] after:left-0 after:h-px after:bg-[#2C2C2C]',
                    'after:transition-[width] after:duration-300 after:ease-out-expo',
                    active === link.href ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA desktop */}
          <a
            href="https://wa.me/5527999999999?text=Olá!%20Gostaria%20de%20solicitar%20um%20orçamento."
            target="_blank" rel="noopener noreferrer"
            className="hidden md:inline-flex btn-navy"
          >
            {WA_ICON}
            Falar no WhatsApp
          </a>

          {/* Hamburger mobile */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden p-2 text-navy"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[99] bg-white flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={e => handleNav(e, link.href)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className="font-display text-[2.5rem] font-normal text-navy"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="https://wa.me/5527999999999"
              target="_blank" rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="btn-navy mt-2"
            >
              {WA_ICON} WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
