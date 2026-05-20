# Roadmap — DARTE Engenharia Civil

## Concluído

- [x] Estrutura SPA com React 19 + Vite 8 + TypeScript
- [x] TailwindCSS v3 com design tokens
- [x] Tipografia: Cormorant Garamond (títulos) + **Montserrat** (corpo/menu/botões)
- [x] Design tokens definitivos: navy `#08386F`, gold `#C89B45`, cream `#FCF7F3`, rodapé `#04346D`
- [x] Seção Hero — split layout desktop + layout mobile separado
- [x] Seção Serviços — 6 cards com layout ícone+título+`+`, expansão in-place (Framer Motion)
- [x] Ícones SVG redesenhados para todos os 6 serviços (capacete, rolo de planta, calculadora, casa…)
- [x] Serviços atualizados: Vistoria, Acompanhamento, Inspeção Predial, Consultoria, Orçamento, Regularização
- [x] **Seção Experiência** — 3 fotos de projetos reais (Sabor da Terra, Cobertura PdC, Área de Lazer)
- [x] Navbar: links Início / Serviços / Experiência / Contato com smooth scroll e active-link
- [x] Logo "D'Arte" com capitalização correta em navbar, footer e hero
- [x] Logos PNG reais do cliente integradas nos cards de serviços (fundo branco via brightness, badge no expandido)
- [x] Footer redesenhado — 3 colunas: logo | texto CTA | contatos reais
- [x] Contato real integrado: (27) 99796-7523 · contato@darteeng.com.br · @darte.engenharia
- [x] Formulário de contato com React Hook Form + Zod + Sonner (aguardando ID Formspree)
- [x] SEO completo: meta tags, OpenGraph, Twitter Cards, sitemap.xml, robots.txt
- [x] Smooth scroll (Lenis) + cursor personalizado + barra de progresso
- [x] Analytics: Google Analytics 4 + Microsoft Clarity (via env vars)
- [x] Animações de entrada (Framer Motion): heroTitle, fadeUp, staggerContainer, scaleIn
- [x] Imagens webp responsivas com srcset — hero (768/1280/1920w)
- [x] Security headers + SPA rewrite + asset caching (`vercel.json`)
- [x] CSP · HSTS · Honeypot anti-spam
- [x] Deploy automático na Vercel via GitHub Actions

---

## Próximos passos

### 1. Formulário funcional com Formspree

Criar conta em formspree.io, criar um form e substituir `SEU_ID` em `ContactForm.tsx` pelo ID gerado. Testar envio end-to-end.

### 2. Variáveis de ambiente reais na Vercel

Adicionar `VITE_GA_ID` e `VITE_CLARITY_ID` reais na dashboard da Vercel para ativar analytics em produção.

### 3. Core Web Vitals

Rodar PageSpeed Insights na URL da Vercel e corrigir eventuais regressões de LCP/CLS após as novas fotos de Experiência (imagens WhatsApp não otimizadas — converter para webp).

### 4. Migração para conta profissional

Após aprovação do cliente: migrar repo `darte-engenharia` e projeto Vercel da conta pessoal do Yago para a conta/org profissional.
