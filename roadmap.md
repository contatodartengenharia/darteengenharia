# Roadmap - DARTE Engenharia

## Concluido

- [x] Estrutura SPA com React 19 + Vite 8 + TypeScript
- [x] TailwindCSS v3 com design tokens
- [x] Tipografia: Cormorant Garamond (titulos) + Montserrat (corpo/menu/botoes)
- [x] Design tokens: navy `#08386F`, gold `#C89B45`, cream `#FCF7F3`, rodape `#04346D`
- [x] Secao Hero - split layout desktop + layout mobile separado
- [x] Secao Servicos - 6 cards com layout icone + titulo + `+`, expansao in-place com Framer Motion
- [x] Servicos atualizados: Vistoria, Acompanhamento, Inspecao Predial, Consultoria, Orcamento, Regularizacao
- [x] Texto do card expandido "Vistoria de Imoveis" atualizado conforme referencia visual do cliente
- [x] Secao Experiencia - 3 fotos de projetos reais (Sabor da Terra, Cobertura PdC, Area de Lazer)
- [x] Imagens da Experiencia organizadas em `src/assets/images/experiencia/`
- [x] Navbar: links Inicio / Servicos / Experiencia / Contato com smooth scroll e active-link
- [x] Navbar desktop sem CTA de WhatsApp; CTA mantido apenas no menu mobile
- [x] Logo "D'Arte" com capitalizacao correta em navbar, footer e hero
- [x] Marca visivel simplificada para "D'Arte Engenharia" em navbar, hero, footer e copyright
- [x] Logos PNG reais do cliente integradas nos cards de servicos
- [x] Footer redesenhado - 3 colunas: logo | texto CTA | contatos reais
- [x] Footer mobile corrigido para evitar texto colado no CTA
- [x] Contato real integrado: (27) 99796-7523; contato@darteeng.com.br; @darte.engenharia
- [x] Formulario de contato com React Hook Form + Zod + Sonner (aguardando ID Formspree)
- [x] SEO completo: meta tags, OpenGraph, Twitter Cards, sitemap.xml, robots.txt
- [x] Smooth scroll (Lenis) + cursor personalizado + barra de progresso
- [x] Analytics: Google Analytics 4 + Microsoft Clarity (via env vars)
- [x] Animacoes de entrada (Framer Motion): heroTitle, fadeUp, staggerContainer, scaleIn
- [x] Imagens WebP responsivas com srcset - hero (768/1280/1920w)
- [x] Security headers + SPA rewrite + asset caching (`netlify.toml`)
- [x] CSP, HSTS e Honeypot anti-spam
- [x] Deploy automatico no Netlify via GitHub (repo `contatodartengenharia/darteengenharia`)
- [x] Checagem mobile headless em 390px e 320px sem overflow horizontal
- [x] Copy de todos os 6 cards de serviços atualizada conforme briefing visual do cliente (description, detail, includes em `src/data/services.ts`)
- [x] LICENSE adicionado na raiz: uso comercial restrito sem autorização do autor

---

## Proximos Passos

### 1. Formulario funcional com Formspree

Criar conta em formspree.io, criar um form e substituir `SEU_ID` em `ContactForm.tsx` pelo ID gerado. Testar envio end-to-end.

### 2. Variaveis de ambiente reais no Netlify

Adicionar `VITE_GA_ID` e `VITE_CLARITY_ID` reais na dashboard do Netlify para ativar analytics em producao.

### 3. Core Web Vitals

Rodar PageSpeed Insights na URL do Netlify e corrigir eventuais regressoes de LCP/CLS apos as novas fotos de Experiencia. Converter fotos da Experiencia para WebP.

### 4. Galeria expandida da Experiencia

- [x] Implementado modal de galeria em `Experience.tsx` com Framer Motion (`AnimatePresence`).
- [x] Cada card abre painel centralizado com imagem principal, miniaturas e CTA para WhatsApp.
- [x] Fechar com botao `X`, tecla `Esc` ou click no backdrop.
- [x] Body scroll bloqueado quando modal esta aberto.
- [x] Responsivo: near-fullscreen no mobile, modal centrado no desktop.
- [x] Imagens galeria organizadas nas pastas `sabor-da-terra/`, `cobertura-praia-costa/`, `area-lazer/`.
- [x] Converter PNGs da galeria para WebP: 15.33 MB → 1.16 MB (-92%).
- [x] Zoom in/out (100%–300%) + drag/pan com constraints corretos na galeria.
- [x] Fix mobile: area navy visivel abaixo do modal (wrapper flex-col + motion.div flex-1).

### 5. Painel Administrativo (fase futura)

- [x] Protótipo visual criado em `ProjetoJu/admin-preview.html` para apresentação ao cliente
- [ ] Decidir com cliente: painel personalizado (Supabase + shadcn/ui) ou CMS externo (Sanity)
- [ ] Se painel personalizado: implementar auth (Supabase Auth), CRUD de serviços, upload de fotos, tabela de leads
- [ ] Integrar formulário de contato com banco (substituir Formspree por Supabase direto ou webhook)
- [ ] Rota `/admin` protegida no app React

### 6. DNS e dominio

Apontar dominio da Hostinger para o Netlify via registros DNS. Configurar dominio customizado no painel do Netlify.

```md
# DARTE Engenharia — Escalation Roadmap

> Goal: transform the current institutional website into a scalable digital acquisition, authority, and conversion platform.

---

# 1. Technical Foundation

## 1.1 Infrastructure

### Tasks
- [ ] Purchase premium domain
- [ ] Configure professional DNS
- [ ] Configure CDN
- [ ] Create staging environment
- [ ] Create production environment
- [ ] Configure automated backups
- [ ] Configure uptime monitoring
- [ ] Configure centralized logging
- [ ] Configure CI/CD pipeline
- [ ] Configure environment variables securely

---

## 1.2 Performance

### Tasks
- [ ] Achieve Lighthouse 95+
- [ ] Optimize image delivery
- [ ] Implement lazy loading
- [ ] Implement code splitting
- [ ] Optimize JS bundles
- [ ] Optimize CSS bundles
- [ ] Optimize fonts
- [ ] Enable edge caching
- [ ] Reduce TTFB
- [ ] Improve Core Web Vitals

---

## 1.3 Security

### Tasks
- [ ] Configure WAF
- [ ] Configure anti-bot protection
- [ ] Implement rate limiting
- [ ] Configure security headers
- [ ] Enable advanced SSL
- [ ] Monitor vulnerabilities
- [ ] Configure disaster recovery
- [ ] Implement secure authentication
- [ ] Audit dependencies regularly

---

# 2. Branding & Positioning

## 2.1 Premium Branding

### Tasks
- [ ] Refine visual identity
- [ ] Create brand guidelines
- [ ] Define tone of voice
- [ ] Create strong slogan
- [ ] Create positioning statement
- [ ] Define competitive differentiators
- [ ] Improve visual consistency
- [ ] Improve typography hierarchy

---

## 2.2 Social Proof

### Tasks
- [ ] Add real case studies
- [ ] Create detailed project breakdowns
- [ ] Add testimonials
- [ ] Add client logos
- [ ] Add impact metrics
- [ ] Create before/after showcases
- [ ] Add trust indicators
- [ ] Add certifications

---

# 3. SEO & Organic Growth

## 3.1 Technical SEO

### Tasks
- [ ] Generate sitemap automatically
- [ ] Optimize robots.txt
- [ ] Add structured data/schema
- [ ] Configure Open Graph
- [ ] Add dynamic metadata
- [ ] Configure canonical URLs
- [ ] Improve crawlability
- [ ] Fix broken links

---

## 3.2 Content SEO

### Tasks
- [ ] Create technical blog
- [ ] Perform keyword research
- [ ] Create content calendar
- [ ] Publish weekly articles
- [ ] Create service pages
- [ ] Create landing pages
- [ ] Create evergreen content
- [ ] Build backlink strategy
- [ ] Optimize internal linking

---

## 3.3 Local SEO

### Tasks
- [ ] Configure Google Business Profile
- [ ] Create city-based landing pages
- [ ] Collect customer reviews
- [ ] Optimize local keywords
- [ ] Submit to local directories

---

# 4. Conversion & Sales

## 4.1 Lead Generation

### Tasks
- [ ] Improve CTAs
- [ ] Create lead funnel
- [ ] Build smart forms
- [ ] Create lead magnets
- [ ] Create newsletter strategy
- [ ] Add appointment scheduling
- [ ] Integrate CRM
- [ ] Add WhatsApp integration

---

## 4.2 CRO (Conversion Rate Optimization)

### Tasks
- [ ] Install heatmaps
- [ ] Run A/B tests
- [ ] Optimize hero section
- [ ] Reduce bounce rate
- [ ] Improve copywriting
- [ ] Improve mobile UX
- [ ] Test pricing variations
- [ ] Improve form completion rate

---

## 4.3 Sales Automation

### Tasks
- [ ] Build automated sales pipeline
- [ ] Create email sequences
- [ ] Automate WhatsApp follow-ups
- [ ] Implement lead scoring
- [ ] Build sales dashboard
- [ ] Automate proposal generation

---

# 5. Productization

## 5.1 Service Packaging

### Tasks
- [ ] Define service packages
- [ ] Create pricing page
- [ ] Define average ticket
- [ ] Create recurring plans
- [ ] Create upsell strategy
- [ ] Create premium offerings

---

## 5.2 Operational Scalability

### Tasks
- [ ] Standardize internal processes
- [ ] Create reusable templates
- [ ] Create component library
- [ ] Build design system
- [ ] Standardize project delivery
- [ ] Automate deployments

---

# 6. Authority Building

## 6.1 Technical Authority

### Tasks
- [ ] Publish technical articles
- [ ] Publish benchmarks
- [ ] Publish LinkedIn content
- [ ] Create technical videos
- [ ] Publish trend analysis
- [ ] Publish technical comparisons

---

## 6.2 Community

### Tasks
- [ ] Launch newsletter
- [ ] Create Discord/Slack community
- [ ] Host webinars
- [ ] Host workshops
- [ ] Open-source internal tools
- [ ] Build strategic partnerships

---

# 7. Analytics & Data

## 7.1 Tracking

### Tasks
- [ ] Configure GA4
- [ ] Configure PostHog
- [ ] Configure Hotjar/Clarity
- [ ] Track custom events
- [ ] Track full funnel
- [ ] Configure conversion tracking

---

## 7.2 Business Intelligence

### Tasks
- [ ] Create executive dashboard
- [ ] Track CAC
- [ ] Track LTV
- [ ] Track ROI by channel
- [ ] Monitor conversion rate
- [ ] Monitor revenue by source

---

# 8. Acquisition & Expansion

## 8.1 Paid Acquisition

### Tasks
- [ ] Launch Google Ads
- [ ] Launch LinkedIn Ads
- [ ] Launch Meta Ads
- [ ] Create outbound email campaigns
- [ ] Build outbound automation
- [ ] Create strategic partnerships

---

## 8.2 Geographic Expansion

### Tasks
- [ ] Create multilingual website
- [ ] Expand to LATAM
- [ ] Expand internationally
- [ ] Create niche-specific pages
- [ ] Create white-label offerings
- [ ] Create digital franchise model

---

# 9. Platform Evolution

## 9.1 Client Platform

### Tasks
- [ ] Create client area
- [ ] Create dashboard
- [ ] Build custom CMS
- [ ] Build automatic quoting system
- [ ] Build project portal
- [ ] Automate operations

---

## 9.2 AI & Automation

### Tasks
- [ ] Build AI chatbot
- [ ] Build AI sales assistant
- [ ] Generate proposals automatically
- [ ] Automate support
- [ ] Use AI for SEO
- [ ] Use AI for analytics

---

# 10. Growth Phases

## Phase 1 — Foundation (0–2 Months)

### Focus
- Infrastructure
- Technical SEO
- Branding
- Analytics
- Basic conversion optimization

---

## Phase 2 — Traction (2–6 Months)

### Focus
- Blog
- Case studies
- Sales automation
- Paid acquisition
- CRO optimization

---

## Phase 3 — Scale (6–12 Months)

### Focus
- Authority building
- Content engine
- Commercial expansion
- Operational processes
- Community building

---

## Phase 4 — Digital Product Company (12+ Months)

### Focus
- Proprietary platform
- AI integration
- Recurring revenue
- Internationalization
- Ecosystem expansion

---

# Suggested KPIs

## Traffic
- Organic traffic growth
- Returning visitors
- Branded search volume

## Conversion
- Lead conversion rate
- CAC
- MQL volume
- SQL volume

## Revenue
- Monthly recurring revenue
- Average ticket
- Lifetime value

## Brand
- Domain authority
- Backlinks
- Social engagement
- Brand mentions

---

# Suggested Future Stack

## Frontend
- Next.js
- Tailwind
- Framer Motion

## Backend
- Node.js
- NestJS
- PostgreSQL

## Infrastructure
- Vercel
- Cloudflare
- AWS

## Analytics
- PostHog
- GA4
- Mixpanel

## CRM
- HubSpot
- Pipedrive

## Automation
- n8n
- Zapier

## AI
- OpenAI
- LangChain
- Vector DB

---
```

