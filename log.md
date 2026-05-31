# Log de Desenvolvimento - DARTE Engenharia

## Fase 1 - Prototipagem Vanilla

- Criacao do site inicial com HTML/CSS/JS puro e animacoes GSAP.
- Descoberta e implementacao da imagem de fundo do hero (`hero-bg.jpg`).
- Implementacao dos icones de servicos a partir do sprite original (`c9ab5224`).
- Layout split tentado em vanilla antes de migrar para React.

## Fase 2 - Migracao para SPA React

- Migracao completa para React 19 + Vite 8 + TypeScript seguindo pipeline definida.
- Configuracao do TailwindCSS v3 (v4 descartada por incompatibilidade de toolchain).
- Alias `@/` configurado em Vite + tsconfig.
- Tipografia final: Cormorant Garamond (display) + Montserrat (body/menu).

## Fase 3 - Componentes e Secoes

- Hero: gradiente horizontal split no desktop; layout mobile separado.
- Services: 6 cards com expansao in-place usando `layout`/`layoutId` do Framer Motion.
- CTA: imagem responsiva com call-to-action para WhatsApp.
- Navbar: smooth scroll via Lenis, menu mobile com AnimatePresence, active-link por IntersectionObserver.
- Footer: grid 3 colunas, Instagram via SVG inline.
- ContactForm: React Hook Form + Zod + Sonner; placeholder Formspree aguardando ID real.

## Fase 4 - SEO, Analytics e Deploy

- React Helmet Async para meta tags, OpenGraph e Twitter Cards.
- `vite-plugin-sitemap` gerando `sitemap.xml` com hostname `https://darte.eng.br`.
- `robots.txt` configurado.
- React GA4 e Microsoft Clarity integrados via env vars (`VITE_GA_ID`, `VITE_CLARITY_ID`).
- `vercel.json`: rewrite SPA, security headers e cache imutavel para assets.

## Fase 5 - Git, GitHub e Vercel

- Repositorio criado: `github.com/YagoYal/darte-engenharia` (conta pessoal temporaria).
- `.gitignore` + `.gitattributes` configurados.
- `README.md` completo com stack, estrutura e instrucoes.
- Deploy automatico na Vercel conectado ao repo.
- Variaveis de ambiente de analytics ainda devem ser configuradas na dashboard Vercel.

## Fase 6 - Responsividade

- Hero desktop e mobile separados para evitar sobreposicao de gradientes.
- Footer mobile corrigido para manter espaco entre "suporte tecnico" e "para seu imovel ou obra".
- Checagem headless em 390px e 320px: sem overflow horizontal no topo, card expandido de Vistoria e footer.

## Fase 7 - Seguranca

- CSP no `vercel.json`.
- HSTS com `max-age=63072000; includeSubDomains; preload`.
- Honeypot `_gotcha` oculto no `ContactForm.tsx`.

## Fase 8 - Performance & Core Web Vitals

- Geradas versoes WebP responsivas do hero: `hero-bg-768.webp`, `hero-bg-1280.webp`, `hero-bg-1920.webp`.
- `Hero.tsx` atualizado com `srcSet` + `sizes` em ambos os layouts.
- `CTA.tsx` migrado para `cta-interior.webp`.

## Fase 9 - Redesign Visual

- Criado `Experience.tsx` com 3 fotos de projetos reais.
- Fotos atuais: `exp-sabor-da-terra.jpg`, `exp-cobertura-praia-costa.jpg`, `exp-area-lazer.jpg`.
- Animacoes: `scaleIn` + `staggerContainer` + hover scale na imagem.
- Removidas secoes antigas CTA/Sobre e ContactBar branca.
- Navbar: "Sobre" virou "Experiencia" (`#experiencia`).
- Footer redesenhado: logo | texto CTA | contatos.

## Fase 10 - Polimento de Icones, Logos e Marca

- Logos PNG reais do cliente substituem SVGs manuais nos cards de servicos.
- Hero/Navbar/Footer: "DARTE" ajustado para "D'Arte".
- Marca visivel atual: "D'Arte Engenharia"; "Civil" removido de navbar, hero, footer e copyright.
- Navbar desktop: CTA de WhatsApp removido; botao permanece no menu mobile.

## Fase 14 - Fix Mobile: area vazia abaixo do modal (2026-05-21)

- Bug: `h-full` no motion.div resolvia para `auto` porque wrapper fixed com
  top/bottom nao tem `height` explicito — backdrop navy aparecia abaixo do conteudo.
- Fix: wrapper vira `flex flex-col` no mobile; motion.div usa `flex-1` para
  preencher os 92vh. Desktop desativa via `md:block` + `md:flex-none md:h-auto`.
- Validacoes: tsc -b passou; npm run build passou.

## Fase 13 - Zoom, Drag e Polimento da Galeria (2026-05-21)

- Botoes de zoom (- / % / +) sobrepostos na imagem, canto inferior esquerdo.
- Zoom range: 100% → 300% em passos de 50%.
- Drag/pan com constraints manuais: maxDrag = containerSize * (zoom-1) / 2.
  Corrige bug do dragConstraints={ref} que media tamanho CSS sem scale (limite zero).
- dragElastic=0, dragMomentum=false: para exatamente na borda sem ultrapassar.
- Drag habilitado somente quando zoomLevel > 1; cursor muda para grab/grabbing.
- Medicao do container: tentativa imediata + confirmacao apos 480ms (pos-animacao).
- Posicao de drag clampeada dentro dos novos limites ao mudar zoom.
- Bug fix: centralizacao do modal no desktop (wrapper div separa posicionamento de animacao).
- Bug fix: modal colado no topo — max-h[78vh] + imagem com maxHeight min(484px,44vh).
- Imagens originais PNG/JPG da galeria removidas localmente (apenas WebP no projeto).
- Validacoes: tsc -b passou; npm run build passou (zero erros, ~1.11s).

## Fase 12 - Galeria Expandida da Experiencia (2026-05-21)

- `Experience.tsx` reescrito: cards agora abrem modal de galeria em vez de navegar para WhatsApp.
- Estado `selectedId` + `activeIdx` controlam qual projeto esta aberto e qual imagem esta ativa.
- `AnimatePresence` com backdrop translucido (navy/80) e painel com `scale + y` na entrada/saida.
- Painel: cabecalho sticky (navy), imagem principal 16:9 com crossfade entre miniaturas, strip de thumbnails com borda gold no ativo, CTA secundario para WhatsApp.
- Fechar: botao X, tecla Esc, ou clique no backdrop. Body scroll bloqueado enquanto aberto.
- Responsivo: `inset-x-3 top-[4vh] bottom-[4vh]` no mobile; `md:w-[min(860px,92vw)]` centrado no desktop.
- Acessibilidade: `role="dialog"`, `aria-modal`, `aria-label`, `aria-pressed` nas miniaturas.
- Imagens de galeria por projeto importadas estaticamente a partir das pastas ja existentes.
- Validacoes: `npx.cmd tsc -b` passou; `npm.cmd run build` passou (13.54s, zero erros TypeScript).
- Nota: PNGs da galeria (cobertura e area-lazer) estao grandes (~1.8-2.2 MB). Conversao para WebP e proxima tarefa de performance.

## Fase 17 - Migracao para Netlify (2026-05-31)

- Repo migrado de `YagoYal/darte-engenharia` para `contatodartengenharia/darteengenharia`.
- YagoYal adicionado como colaborador (Write) no novo repo.
- `netlify.toml` criado: build command `npm run build`, publish dir `dist`, redirects SPA.
- `vercel.json` e `public/_redirects` removidos.
- Titulo SEO simplificado: `D'ARTE Engenharia` (removido pipe + sufixo variavel).
- README atualizado: Deploy e DNS trocados de Vercel para Netlify.
- Commits: `2a6c1f7`, `148b375`, `5fb523e`, `d0a51da`, `83f8103`, `811b30c`.

## Fase 16 - Protótipo Painel Administrativo (2026-05-29)

- Criado `ProjetoJu/admin-preview.html` — protótipo visual estático do painel adm para apresentação ao cliente.
- Telas implementadas: Login, Dashboard, Serviços, Portfólio, Mensagens (Leads).
- Cores e tipografia seguem os design tokens da DARTE (navy, gold, cream, Cormorant + Montserrat).
- Fluxo de portfólio: lista de projetos com capa + contador de fotos → tela de detalhe com capa editável + galeria.
- Galeria: trocar foto individual, remover, adicionar novas (com preview instantâneo via FileReader).
- Wizard "Novo Projeto" em 3 passos: informações → upload de capa → upload de galeria → card criado na listagem.
- Mensagens: tabela de leads com status (Nova/Lida/Respondida) + modal de detalhe com botão WhatsApp.
- Definido que mensagens viriam do formulário do site (React Hook Form → Formspree/Supabase), não do WhatsApp.
- Discutido precificação: landing base R$800–1.000 + painel adm = pacote R$1.600 (mercado ES).
- Alternativas de CMS avaliadas: Sanity (free tier viável), Contentful (caro), Formspree (só leads). Conclusão: painel personalizado tem maior diferencial de venda.

## Fase 15 - Copy dos Servicos e LICENSE (2026-05-28)

- Copy completa de todos os 6 cards de servicos atualizada em `src/data/services.ts` conforme briefing visual entregue pelo cliente (6 imagens JPEG de referencia).
- Alteracoes por servico: description expandida, detail reescrita, includes revisados (alguns ganhou item extra, Regularizacao reduziu de 5 para 4 itens mais enxutos).
- `LICENSE` criado na raiz: copyright do Yago, proibe uso comercial sem autorizacao por escrito, direciona contato para yagoalcontact@gmail.com.
- Commits: `1742146` (services copy), `36e201b` (LICENSE) — ambos em `origin/main`.

## Fase 11 - Copy e Organizacao de Assets (2026-05-20)

- Texto expandido de "Vistoria de Imoveis" atualizado conforme referencia visual enviada pelo cliente.
- Imagens da Experiencia movidas de `src/assets/images/` para `src/assets/images/experiencia/`.
- Pasta raiz `ProjetoJu/Experiencia` removida apos confirmar que o app usa as copias internas.
- Validacoes: `npx.cmd tsc -b` passou; `npm.cmd run build` passou.
- Commits recentes enviados para `origin/main`: `e75f344`, `97c8f40`, `23eb99f`, `7106829`, `0d1bd1e`.
