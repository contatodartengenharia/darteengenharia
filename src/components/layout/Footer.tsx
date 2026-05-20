import { Phone, Mail, MapPin } from 'lucide-react'

function IgIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  )
}
import { scrollTo } from '@/hooks/useLenis'
import { CONTACT } from '@/data/services'
import logoImg from '@/assets/images/a7962e9d-75c5-4131-9087-7d1a78e0ec6f.jpg'

const LINKS = ['Início', 'Serviços', 'Experiência', 'Contato']
const HREFS = ['#inicio', '#servicos', '#experiencia', '#contato']

export function Footer() {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    scrollTo(href)
  }

  return (
    <footer id="contato" className="bg-navy pt-10 pb-8 text-white/70">
      <div className="container-app">
        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-10 md:gap-16 items-center pb-8 border-b border-white/[0.08] mb-6">

          {/* Col 1 — Logo */}
          <a href="#inicio" onClick={e => handleNav(e, '#inicio')} className="inline-flex items-center gap-[0.65rem]">
            <img src={logoImg} alt="" width={38} height={38} className="rounded-[5px] opacity-85 object-contain" aria-hidden />
            <div className="leading-[1.15]">
              <span className="block font-display text-[1.1rem] font-semibold tracking-[0.04em] text-white">D'Arte</span>
              <span className="block text-[0.52rem] tracking-[0.18em] uppercase text-white/40">Engenharia Civil</span>
            </div>
          </a>

          {/* Col 2 — Texto CTA */}
          <p className="text-[0.85rem] text-white/55 leading-[1.75] md:text-center">
            Precisa de suporte técnico<br className="hidden md:block" />
            para seu imóvel ou obra?{' '}
            <a
              href={CONTACT.whatsappMsg}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 hover:text-gold transition-colors duration-200 underline underline-offset-2"
            >
              Fale conosco.
            </a>
          </p>

          {/* Col 3 — Contatos */}
          <nav aria-label="Contato" className="flex flex-col gap-[0.55rem]">
            <a href={CONTACT.phoneHref} className="flex items-center gap-[0.55rem] text-[0.78rem] text-white/60 hover:text-gold transition-colors duration-200">
              <Phone size={14} className="flex-shrink-0" aria-hidden />
              {CONTACT.phone}
            </a>
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-[0.55rem] text-[0.78rem] text-white/60 hover:text-gold transition-colors duration-200">
              <Mail size={14} className="flex-shrink-0" aria-hidden />
              {CONTACT.email}
            </a>
            <div className="flex items-center gap-[0.55rem] text-[0.78rem] text-white/60">
              <MapPin size={14} className="flex-shrink-0" aria-hidden />
              {CONTACT.region}
            </div>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-[0.55rem] text-[0.78rem] text-white/60 hover:text-gold transition-colors duration-200"
            >
              <IgIcon />
              {CONTACT.instagramHandle}
            </a>
          </nav>
        </div>

        {/* Links rápidos + copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <nav aria-label="Links rápidos" className="flex gap-5">
            {LINKS.map((label, i) => (
              <a
                key={label}
                href={HREFS[i]}
                onClick={e => handleNav(e, HREFS[i])}
                className="text-[0.72rem] text-white/35 hover:text-white/60 transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>
          <p className="text-[0.65rem] text-white/25 tracking-[0.04em]">
            © 2024 DARTE Engenharia Civil. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
