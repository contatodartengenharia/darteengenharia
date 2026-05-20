# Log de Desenvolvimento — DARTE Engenharia Civil

## Fase 1 — Prototipagem Vanilla
- Criação do site inicial com HTML/CSS/JS puro e animações GSAP
- Descoberta e implementação da imagem de fundo do hero (`hero-bg.jpg`)
- Implementação dos ícones de serviços a partir do sprite original (`c9ab5224`)
- Layout split tentado em vanilla antes de migrar para React

## Fase 2 — Migração para SPA React
- Migração completa para React 19 + Vite 8 + TypeScript seguindo pipeline definida
- Configuração do TailwindCSS v3 (v4 descartada por incompatibilidade de toolchain)
- Design tokens: navy `#1C3A6E`, gold `#C8A96A`, cream `#F4EFE8`, sand `#EDE6DA`
- Tipografia: Cormorant Garamond (display) + Inter (body) via Google Fonts
- Alias `@/` configurado em Vite + tsconfig

## Fase 3 — Componentes e Seções

- **Hero**: gradiente horizontal split (cream → foto) no desktop; animações sequenciadas com Framer Motion
- **Services**: 6 cards com ícones SVG recriados fielmente; expansão in-place com `layout` do Framer Motion
- **CTA**: imagem responsiva com call-to-action para WhatsApp
- **ContactBar**: linha de contato com ícones Lucide, telefone, e-mail e região
- **Navbar**: smooth scroll via Lenis, menu mobile com AnimatePresence, active-link por IntersectionObserver
- **Footer**: grid 3 colunas, Instagram via SVG inline (lucide-react não tem ícone de marca)
- **ContactForm**: React Hook Form + Zod + Sonner; placeholder Formspree aguardando ID real

## Fase 4 — SEO, Analytics e Deploy
- React Helmet Async para meta tags, OpenGraph e Twitter Cards
- vite-plugin-sitemap gerando `sitemap.xml` com hostname `https://darte.eng.br`
- `robots.txt` configurado
- React GA4 e Microsoft Clarity integrados via env vars (`VITE_GA_ID`, `VITE_CLARITY_ID`)
- `vercel.json`: rewrite SPA, security headers, cache imutável para assets

## Fase 5 — Git, GitHub e Vercel
- Repositório criado: `github.com/YagoYal/darte-engenharia` (conta pessoal temporária)
- `.gitignore` + `.gitattributes` (LF normalization, binários)
- `README.md` completo com stack, estrutura e instruções
- Deploy automático na Vercel conectado ao repo
- Variáveis de ambiente de analytics a configurar na dashboard Vercel

## Fase 6 — Ajustes de Responsividade
- **Fix hero esbranquiçado no desktop**: gradiente vertical mobile estava sobrepondo desktop
- **Fix hero esbranquiçado no mobile**: solução definitiva — dois layouts completamente separados
  - `md:hidden`: imagem acima sem overlay algum + texto sobre fundo cream sólido abaixo
  - `hidden md:block`: layout split original com gradiente horizontal (inalterado)
- Validação de responsividade nas larguras 375px · 768px · 1024px · 1280px

## Fase 7 — Segurança

- **CSP**: `Content-Security-Policy` no `vercel.json` — permite apenas `self` + Google Fonts, GA4, Clarity e Formspree; bloqueia tudo mais
- **HSTS**: `Strict-Transport-Security` com `max-age=63072000; includeSubDomains; preload`
- **Honeypot**: campo `_gotcha` oculto no `ContactForm.tsx` — Formspree ignora submissões de bots que o preenchem
- Commit `55cf14a` pusheado para `main` → redeploy automático na Vercel

## Fase 10 — Polimento de Ícones e Logos (2026-05-20)

- Logos PNG reais do cliente (logo1–6.png) substituíram os SVGs desenhados manualmente
- Cards fechados: PNG com `brightness(1.05)` → fundo cream vira branco; hover volta a `brightness(1.0)`
- Card expandido (navy): PNG dentro de badge `bg-white/10 rounded-xl` — mesma logo de fora
- Hero: "DARTE" → "D'Arte", gradiente hardcoded `#F4EFE8` → `#FCF7F3`, WA placeholder → real
- Navbar/Footer: "DARTE" uppercase → "D'Arte" (removido `uppercase` CSS e `tracking` excessivo)

---

## Fase 9 — Redesign Visual (2026-05-20)

### Seção Experiência (nova)
- Criado `Experience.tsx` com 3 fotos de projetos reais copiadas de `ProjetoJu/Experiencia/`
- Fotos: `exp-sabor-da-terra.jpg`, `exp-cobertura-praia-costa.jpg`, `exp-area-lazer.jpg`
- Animações: `scaleIn` + `staggerContainer` + hover scale na imagem e translate na seta

### Serviços — atualização completa
- 6 novos serviços: Vistoria, Acompanhamento, Inspeção Predial, Consultoria p/ Obras, Orçamento de Obra, Regularização
- Título da seção: "Soluções técnicas e serviços"
- Layout dos cards: ícone+título na mesma linha com `+` à direita (antes era coluna com `→` embaixo)
- 6 ícones SVG redesenhados para bater com referência visual fornecida pelo cliente:
  - `IconAcompanhamentoObras`: capacete de obra (cúpula + aba + fita interna)
  - `IconConsultoriaReforma`: rolo de planta + lápis diagonal
  - `IconOrcamentoObra`: documento + moeda $ + calculadora
  - `IconRegularizacaoImoveis`: documento + casa + selo de verificação

### Estrutura da página
- Removidas seções: CTA (`#sobre`) e ContactBar (branca)
- Navbar: "Sobre" → "Experiência" (`#experiencia`)
- Footer redesenhado: 3 colunas — logo | texto CTA | contatos (tel, email, local, IG)

### Contato real inserido
- Telefone: (27) 99796-7523 | Email: contato@darteeng.com.br | IG: @darte.engenharia

### Design tokens corrigidos
- Navy: `#1C3A6E` → `#08386F` | Rodapé: `#122450` → `#04346D`
- Gold: `#C8A96A` → `#C89B45` | Cream: `#F4EFE8` → `#FCF7F3`
- Fonte body/menu: **Inter** → **Montserrat** (Google Fonts atualizado)

### Logo
- Navbar e Footer: "DARTE" (uppercase) → "D'Arte" (capitalização correta, sem `uppercase` CSS)

---

## Fase 8 — Performance & Core Web Vitals

- Geradas versões webp responsivas do hero: `hero-bg-768.webp` (64KB), `hero-bg-1280.webp` (178KB), `hero-bg-1920.webp` (420KB) — original era 640KB jpg
- `Hero.tsx` atualizado com `srcSet` + `sizes` em ambos os layouts (mobile/desktop); fallback `.jpg` mantido
- `CTA.tsx` migrado para `cta-interior.webp` (103KB vs 178KB jpg — 42% menor)
- Commit `f5e8b5a` pusheado para `main`
