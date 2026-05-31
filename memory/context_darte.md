# Contexto DARTE - Retomada Rapida

## Estado Atual

SPA React/Vite da DARTE Engenharia em `darte-app`, publicada via GitHub/Netlify. A marca visivel foi simplificada para "D'Arte Engenharia". Navbar desktop nao tem botao de WhatsApp; menu mobile mantem o botao. Repo publico em `github.com/contatodartengenharia/darteengenharia`.

## Feito Recentemente (2026-05-31)

- Projeto migrado do Vercel (conta YagoYal) para Netlify (conta contatodartengenharia).
- Repo movido de `YagoYal/darte-engenharia` para `contatodartengenharia/darteengenharia`.
- `netlify.toml` criado com build command (`npm run build`), publish dir (`dist`) e redirects SPA.
- `vercel.json` e `public/_redirects` removidos — projeto 100% Netlify.
- Titulo SEO simplificado para `D'ARTE Engenharia` em `src/seo/SEO.tsx`.

## Proximos Pontos

- Configurar Formspree real e variaveis `VITE_GA_ID` / `VITE_CLARITY_ID` no Netlify.
- Apontar dominio da Hostinger para Netlify via DNS.
- Atualizar ou remover LICENSE no momento da transferencia do repo ao cliente.
