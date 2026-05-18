# História do Usuário e Critérios de Aceite
## Contexto

A Alura é a maior plataforma de ensino de tecnologia do Brasil, oferecendo cursos e formações nas áreas de Programação, Data Science, DevOps, UX & Design, entre outras. O fluxo testado cobre a jornada completa de um profissional de QA que deseja se matricular em um curso de Cypress.

---

## História do Usuário

**Como** profissional de QA em busca de evolução técnica,
**Quero** encontrar, escolher e iniciar a matrícula em um curso de Cypress na Alura,
**Para** aprimorar minhas habilidades em automação de testes e avançar na minha carreira.

---

## Critérios de Aceite

### CA01 — Busca de curso

- O campo de busca deve estar visível e acessível na home
- Ao buscar por "Cypress", o sistema deve retornar resultados relevantes
- Os resultados devem exibir nome do curso e área de conhecimento

### CA02 — Página do curso

- Ao clicar em um curso, o usuário deve ser direcionado para a página de detalhes
- A página deve exibir: nome do curso, ementa, instrutor e botão de matrícula
- O botão de matrícula deve estar visível e clicável

### CA03 — Página de planos

- Ao clicar em "Conheça os planos" ou "Matricule-se", o usuário deve ser direcionado para o carrossel de  planos.
- O usuário deve poder escolher entre plano anual e bianual.
- O carrossel deve exibir os planos disponíveis com nome, preço e benefícios
- Cada plano deve ter um botão de matrícula individual

### CA04 — Seleção de plano e acesso ao checkout

- Ao clicar em "Matricule-se" em qualquer plano, o usuário deve ser direcionado ao checkout
- O checkout deve exibir o resumo do plano selecionado
- O usuário não deve precisar estar logado para acessar o checkout

### CA05 — Validação de campos no checkout

- Todos os campos obrigatórios devem exibir mensagem de erro ao tentar avançar sem preenchimento
- O campo de email deve validar o formato — ex: `email@dominio.com`
- O campo de CPF deve validar o formato e a validade do número
- O botão de finalizar compra deve estar desabilitado enquanto houver campos obrigatórios não preenchidos ou com formato inválido

### CA06 — Limitação conhecida

- A submissão final do formulário é bloqueada por captcha
- A validação da submissão foi realizada manualmente

