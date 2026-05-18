# DOT Digital Group — Teste Prático
Repositório criado para o teste prático da vaga de Analista de Testes de nível Pleno na DOT Digital Group.

## Visão Geral

Este projeto contém a automação End-to-End desenvolvida como teste técnico para validação do fluxo de busca, seleção de curso e início do checkout da plataforma Alura.

A automação foi construída utilizando:

- Cypress
- JavaScript
- Page Object Model (POM)

O objetivo principal da suíte é validar o comportamento crítico do usuário durante a jornada de:

1. Busca de um curso sobre Cypress
2. Filtragem dos resultados
3. Seleção de um curso aleatório
4. Acesso à landing page do curso
5. Escolha de plano
6. Redirecionamento ao checkout

---

# Arquitetura do Projeto

```txt
frontend/
 ├── cypress/
 │    ├── e2e/
 │    │     └── assignAluraPlan.cy.js
 │    │
 │    ├── pages/
 │    │     ├── HomePage.js
 │    │     ├── BuscaPage.js
 │    │     ├── LpGenericaCursoEscolhido.js
 │    │     └── index.js
 │    │
 │    ├── support/
 │    │     ├── commands.js
 │    │     └── e2e.js
 │    │
 │    ├── utils/
 │    │     └── customHelpers.js
 │    │
 │    ├── screenshots/
 │    └── videos/
 │
 ├── cypress.config.js
 ├── package.json
 └── package-lock.json
```

---

# Estratégia de Automação

## Padrão Page Object Model

Foi utilizado o padrão POM para:

- Centralizar seletores
- Facilitar manutenção
- Melhorar legibilidade
- Reduzir duplicação
- Isolar regras de navegação

## Fluxo Automatizado

### CT01
Busca pelo termo “cypress”

### CT02
Filtragem por cursos

### CT03
Validação da landing page do curso selecionado

### CT04
Seleção aleatória de plano e acesso ao checkout

---

# Decisões Técnicas

## Seleção aleatória de curso

Foi utilizada escolha randômica de curso e plano para aumentar cobertura funcional da automação e validar diferentes combinações possíveis da plataforma.

## Screenshots

Foram adicionados screenshots estratégicos para:

- Evidência de execução
- Facilitar debugging
- Melhor rastreabilidade em pipelines CI/CD

## Separação entre páginas

Cada página relevante da aplicação possui sua própria responsabilidade:

- HomePage
- BuscaPage
- LpGenericaCursoEscolhido

Essa abordagem facilita escalabilidade futura da suíte.

---

# Como Executar o Projeto

## Pré-requisitos

- Node.js 18+
- npm

---

## Instalação

```bash
npm install
```

---

## Execução modo interativo

```bash
npx cypress open
```

---

## Execução headless

```bash
npx cypress run
```

---

# Configurações

## Base URL

```js
baseUrl: 'https://www.alura.com.br'
```

## Resolução

```js
viewportWidth: 1280
viewportHeight: 720
```

---

# Melhorias Futuras

## Component Object Model

A área de planos já demonstra potencial de reutilização.

Em um cenário real, seria recomendado extrair:

```txt
cypress/components/PlanosComponent.js
```

Isso permitiria reutilização entre:

- Landing pages
- Checkout
- Upsell
- Ofertas

## Massa de dados

Possível introdução de:

- Factories
- Dados dinâmicos

## Qualidade adicional

- Intercepts para estabilização
- Custom commands
- Separação entre smoke/regression
- Tags de execução

---
