<h1 align="center">🌐 BiosWorld — Landing Page</h1>

<p align="center">
  <em>Landing page de apresentação do produto BiosWorld, construída com React e Vite, com deploy contínuo na Vercel.</em>
</p>

<p align="center">
  <a href="https://biosworld-react.vercel.app">
    <img src="https://img.shields.io/badge/demo-online-00ffd1?style=for-the-badge" alt="Demo"/>
  </a>
  <img src="https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite"/>
  <img src="https://img.shields.io/badge/Tailwind-3-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind"/>
</p>

---

## 📸 Demo

> 🌐 **[Acesse a demo ao vivo →](https://biosworld-react.vercel.app)**

---

## 🎯 Sobre

Landing page de apresentação para o produto **BiosWorld**, com foco em conversão. O projeto começou em **Next.js** e foi migrado para **React + Vite** durante o desenvolvimento — a migração está documentada nos commits e foi um exercício importante de aprendizado sobre o que cada ferramenta oferece.

O site tem 36 commits mostrando a evolução natural do projeto, com 36 deploys automáticos na Vercel.

---

## ✨ Features

- 🎨 Design responsivo (mobile-first)
- ⏱️ Timer de oferta com contagem regressiva
- ❓ Seção de FAQ interativa
- 📄 Seção com pitch deck integrado
- ⚡ Build otimizado com Vite (ultra rápido)
- 🚀 Deploy contínuo via Vercel (push → produção)

---

## 🛠️ Stack

**Front-end**
- [React 18](https://react.dev/) — Biblioteca de UI
- [Vite](https://vitejs.dev/) — Build tool moderna, mais rápida que Webpack
- [Tailwind CSS](https://tailwindcss.com/) — Estilização utility-first
- [PostCSS](https://postcss.org/) — Processamento de CSS

**Infra**
- [Vercel](https://vercel.com/) — Hosting + CI/CD automático
- [ESLint](https://eslint.org/) — Linting do código

---

## 🚀 Rodando localmente

```bash
# Clone o repositório
git clone https://github.com/Henrique990/biosworld-react.git
cd biosworld-react

# Instale as dependências
npm install

# Rode em modo desenvolvimento
npm run dev
```

A aplicação vai abrir em `http://localhost:5173`.

### Scripts

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # build de produção
npm run preview  # preview do build localmente
```

---

## 💡 Aprendizados

### Migração Next.js → React + Vite

Comecei com Next.js mas migrei para Vite porque o projeto era uma landing page estática — não havia necessidade de SSR, API routes ou otimizações que o Next traz. O Vite entregou um **build mais rápido**, **menos dependências** e um **DX simples e direto** para o caso de uso.

> **Lição:** escolha a ferramenta certa para o problema. Next.js é incrível, mas nem todo projeto precisa dele.

### Deploy contínuo na Vercel

36 commits = 36 deploys automáticos. Cada push na branch `main` virou um deploy de produção.
Aprendi na prática como configurar variáveis de ambiente, preview deployments por PR e domain customization.

### Componentização

Quebrar a landing em componentes reutilizáveis (Header, FAQ, Timer, CTA) deixou o código limpo e me forçou a pensar em props bem definidas.

---

## 🚧 Roadmap (se eu retomar)

- [ ] Adicionar tracking (Google Analytics / Plausible)
- [ ] A/B testing nos CTAs
- [ ] Migrar de JS para TypeScript
- [ ] Adicionar testes E2E com Playwright
- [ ] Melhorar Lighthouse score (acessibilidade)

---

## 📝 Licença

MIT © [Henrique Teixeira](https://github.com/Henrique990)

---

<p align="center">
  Feito com 💚 por <a href="https://github.com/Henrique990">Henrique Teixeira</a> · 2023
</p>
