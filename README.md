# DARTE Engenharia Civil

Landing page premium para escritório de engenharia civil, desenvolvida como SPA moderna com foco em performance, SEO e experiência do usuário.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | React 19 + Vite 8 |
| Linguagem | TypeScript |
| Estilo | TailwindCSS v3 |
| Animações | Framer Motion + Lenis |
| Ícones | Lucide React |
| Roteamento | React Router DOM |
| SEO | React Helmet Async + vite-plugin-sitemap |
| Formulário | React Hook Form + Zod + Sonner |
| Analytics | Google Analytics 4 + Microsoft Clarity |
| Deploy | Netlify |
| Domínio | Hostinger |

## Funcionalidades

- **Hero** com gradiente split (cream → foto) e animações de entrada sequenciadas
- **Seção de Serviços** com expansão in-place ao clicar no card (Framer Motion `layout`)
- **SEO completo** — meta tags, OpenGraph, Twitter Cards, sitemap automático, robots.txt
- **Formulário de contato** com validação Zod e feedback via toast (Sonner)
- **Smooth scroll** (Lenis) + cursor personalizado + barra de progresso de scroll
- **Responsivo** — mobile-first, testado em 375px · 768px · 1024px · 1280px
- **Security headers** configurados no `vercel.json`
- Lazy loading nas imagens + code splitting automático via Vite

## Estrutura

```text
src/
├── analytics/          # Google Analytics 4
├── animations/         # Framer Motion variants
├── assets/
│   ├── icons/          # SVGs dos serviços (fiéis ao brand)
│   └── images/
├── components/
│   ├── animations/     # MotionSection, StaggerGrid
│   ├── cards/          # ServiceCard
│   ├── forms/          # ContactForm (RHF + Zod)
│   ├── layout/         # Navbar, Footer
│   └── sections/       # Hero, Services, CTA, ContactBar
├── data/               # Conteúdo dos serviços e contato
├── hooks/              # useLenis, useScrollProgress
├── integrations/       # Microsoft Clarity
├── lib/                # cn() utility
├── pages/              # Home (lazy loaded)
├── routes/             # AppRouter
├── seo/                # SEO component
├── styles/             # globals.css (Tailwind + Google Fonts)
└── types/              # TypeScript interfaces
```

## Desenvolvimento local

```bash
# Instalar dependências
npm install

# Dev server — http://localhost:5173
npm run dev

# Build de produção
npm run build

# Preview do build
npm run preview
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha:

```env
VITE_GA_ID=G-XXXXXXXXXX       # Google Analytics 4
VITE_CLARITY_ID=xxxxxxxxxx     # Microsoft Clarity
```

## Deploy

Deploy automático na **Netlify** via integração com GitHub.

- Push para `main` → deploy automático
- DNS na **Hostinger** apontando para Netlify
- HTTPS, CDN global e proteção DDoS gerenciados pela Netlify

---

> Repositório pessoal temporário para apresentação ao cliente. Migração para contas profissionais prevista.
