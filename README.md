# 🚀 E-commerce BeliBeli

**Simulação de uma plataforma de e-commerce moderna e responsiva em constante desenvolvimento.**

---

## 💡 Sobre o Projeto

O **E-commerce BeliBeli** é um projeto de portfólio pessoal focado em demonstrar proficiência em **desenvolvimento Full Stack** com o ecossistema **Next.js/TypeScript**.  
O objetivo é construir uma plataforma completa de comércio eletrônico, priorizando a **experiência do usuário (UX)** e uma **arquitetura de código limpa**.

> 🧠 Este projeto está em **desenvolvimento ativo** e em constante melhoria.  
> Novas funcionalidades e refatorações são aplicadas diariamente, garantindo um código sempre atualizado e otimizado.

---

## ⚙️ Tecnologias Utilizadas

Este projeto utiliza a seguinte stack:

| Categoria | Tecnologia | Detalhes |
|------------|-------------|-----------|
| **Frontend & Backend** | [Next.js (App Router)](https://nextjs.org/) | Estrutura unificada e robusta, utilizando o poder do React e renderização híbrida. |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) | Garantindo tipagem forte e maior segurança de código. |
| **ORM** | [Prisma](https://www.prisma.io/) | ORM de última geração para interação com o banco de dados. |
| **Banco de Dados** | SQLite | Utilizado para desenvolvimento e prototipação rápida. |
| **Estilização** | [Tailwind CSS](https://tailwindcss.com/) | Desenvolvimento rápido, flexível e totalmente responsivo de UI. |

---

## ✅ Status Atual do Desenvolvimento

### 🔐 Fluxo de Autenticação e Cadastro
- **Sistema de Autenticação Completo:** Registro de usuário (multi-step) e Login com geração e validação de Token.  
- **UX/UI - Status Logado:** Melhorias em andamento para deixar mais claro quando o usuário está logado.

---

### 🖥️ Layout e Responsividade
- **Layout Totalmente Responsivo:** O design se adapta a todas as telas (mobile, tablet e desktop).

![GIF: Responsividade da Página Inicial](docs/gifs/belibeliresponsivity.gif)

---

### 🛒 Navegação e Interação com Produto
- **Rota Principal (Home):** Contém Header, Banner, Seção de Ofertas Relâmpago e listagem de produtos gerais.  
- **Interação com Produto (Modal):** No desktop, o hover sobre o card exibe um botão para abrir o modal de detalhes.

![GIF: Interação com Card de Produto e Abertura do Modal](docs/gifs/product_modal_interaction.gif)

---

## 🛣️ Próximos Passos e Roadmap

| Módulo | Status | Descrição |
|---------|---------|-----------|
| **Página de Detalhes** | 🕒 Em breve | Implementação da página de detalhes do produto dedicada (fora do modal). |
| **Página do Carrinho** | 🚧 Em desenvolvimento | Finalização da rota para gerenciar itens no carrinho antes do checkout. |
| **Wishlist** | 📝 Planejado | Sistema para salvar e gerenciar produtos desejados pelo usuário. |
| **Configurações da Conta** | 📝 Planejado | Rota dedicada para o usuário gerenciar suas informações, endereços e preferências. |

---

## 💻 Como Rodar Localmente

Siga estas instruções para configurar o projeto na sua máquina:

```bash
# Clone o repositório
git clone https://github.com/SeuUsuario/ecommerce-belibeli-app.git
cd ecommerce-belibeli-app

# Instale as dependências
npm install
# ou
yarn install

# Configure o Banco de Dados (Prisma)
# Crie seu arquivo .env baseado no .env.example e aplique as migrações:
npx prisma migrate dev

# Execute o servidor de desenvolvimento
npm run dev
# ou
yarn dev
