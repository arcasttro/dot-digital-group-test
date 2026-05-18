# Relatório de Execução

## Resumo da Execução

| Categoria             | Quantidade | Sucesso ✅ | Falha ❌|
| --------------------- | ---------- | ------- | ----- |
| Caminho feliz         | 5          | 5       | 0     |
| Caminhos alternativos | 1          | 1       | 0     |
| Campos inválidos      | 7          | 7       | 0     |
| Borda                 | 3          | 3       | 0     |
| Exploratório          | 1          | 1       | 0     |
| **Total**             | **14**     | **14**  | 0     |

| ID   | Título                                      | Pré-condições                | Passos                                                                              | Resultado Esperado                                                        | Resultado         | Automação    |
| ---- | ------------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ----------------- | ------------ |
| CT01 | Busca retorna cursos de Cypress             | Estar na home da Alura       | 1. Clicar no campo de busca 2. Digitar "Cypress" 3. Confirmar busca                 | Página de resultados exibe cursos relacionados a Cypress com nome e área  | Relatório Cypress | Automatizado |
| CT02 | Acesso à página do curso                    | Resultados de busca exibidos | 1. Filtrar busca por tipo 'Cursos' 2. Selecionar algum curso Cypress                | Página do curso exibe nome, ementa, instrutor e botão de matrícula        | Relatório Cypress | Automatizado |
| CT03 | Navegação para página de planos             | Estar na página do curso     | 1. Clicar em "Conheça os planos"                                                    | Página de planos exibe Plus, Pro e Ultra Lab com preços e benefícios      | Relatório Cypress | Automatizado |
| CT04 | Seleção de plano e acesso ao checkout       | Estar na página de planos    | 1. Clicar em "Matricule-se" no plano Plus                                           | Usuário é direcionado ao checkout com resumo do plano selecionado visível | Relatório Cypress | Automatizado |
| CT05 | Preenchimento válido de todos os campos     | Estar no checkout            | 1. Preencher nome, email, CPF 2. Pix como forma de pagamento 3. Clicar em finalizar | QR Code para pagamento é exibido e botão de submissão é ativado           | ✅                | Manual       |
| CT06 | Retorno ao plano após acessar checkout      | Estar no checkout            | 1. Clicar em voltar no navegador                                                    | Usuário retorna à página de planos sem perda de estado                    | ✅                | Manual       |
| CT07 | Tentar finalizar com todos os campos vazios | Estar no checkout            | 1. Clicar em finalizar sem preencher nada                                           | Mensagem de erro exibida em todos os campos obrigatórios                  | ✅                | Manual       |
| CT08 | Email sem formato válido                    | Estar no checkout            | 1. Digitar "emailsemarroba" no campo email 2. Clicar fora                           | Mensagem "email inválido" exibida                                         | ✅                | Manual       |
| CT09 | CPF com todos os dígitos iguais             | Estar no checkout            | 1. Digitar "111.111.111-11" no campo CPF                                            | Mensagem "CPF inválido" exibida                                           | ✅                | Manual       |
| CT10 | CPF com quantidade incorreta de dígitos     | Estar no checkout            | 1. Digitar "123.456" no campo CPF                                                   | Mensagem de erro de formato exibida                                       | ✅                | Manual       |
| CT11 | Número de cartão incompleto                 | Estar no checkout            | 1. Digitar "4111" no campo de cartão 2. Clicar fora                                 | Mensagem de erro de formato exibida                                       | ✅                | Manual       |
| CT12 | Nome com apenas um caractere                | Estar no checkout            | 1. Digitar "A" no campo nome                                                        | Mensagem de erro de tamanho mínimo exibida                                | ✅                | Manual       |
| CT13 | Email no limite máximo de caracteres        | Estar no checkout            | 1. Digitar email com 254 caracteres (limite RFC 5321)                               | Campo aceita o valor e não exibe erro de formato                          | ✅                | Manual       |
| CT14 | Comportamento da página em viewport mobile  | Estar na home                | 1. Redimensionar para 375x812 2. Realizar o fluxo completo                          | Todos os elementos são acessíveis e responsivos                           | ✅                | Manual       |

---
