# Casos de Teste e Estimativa de Tempo

## Suíte de Testes

### Legenda de Tipos

| Tipo         | Descrição                                                  |
| ------------ | ---------------------------------------------------------- |
| Funcional    | Valida o comportamento esperado da funcionalidade          |
| Regressão    | Garante que funcionalidades existentes não foram quebradas |
| Negativo     | Valida o comportamento do sistema com entradas inválidas   |
| Borda        | Valida os limites mínimos e máximos aceitos pelo sistema   |
| Exploratório | Investigação livre de comportamentos inesperados           |

---

## Caminho Feliz

| ID   | Título                                  | Pré-condições                | Passos                                                                              | Resultado Esperado                                                        | Tipo      | Automação    |
| ---- | --------------------------------------- | ---------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------- | ------------ |
| CT01 | Busca retorna cursos de Cypress         | Estar na home da Alura       | 1. Clicar no campo de busca 2. Digitar "Cypress" 3. Confirmar busca                 | Página de resultados exibe cursos relacionados a Cypress com nome e área  | Funcional | Automatizado |
| CT02 | Acesso à página do curso                | Resultados de busca exibidos | 1. Filtrar busca por tipo 'Cursos' 2. Selecionar algum curso Cypress                | Página do curso exibe nome, ementa, instrutor e botão de matrícula        | Funcional | Automatizado |
| CT03 | Navegação para página de planos         | Estar na página do curso     | 1. Clicar em "Conheça os planos"                                                    | Página de planos exibe Plus, Pro e Ultra Lab com preços e benefícios      | Funcional | Automatizado |
| CT04 | Seleção de plano e acesso ao checkout   | Estar na página de planos    | 1. Clicar em "Matricule-se" no plano Plus                                           | Usuário é direcionado ao checkout com resumo do plano selecionado visível | Funcional | Automatizado |
| CT05 | Preenchimento válido de todos os campos | Estar no checkout            | 1. Preencher nome, email, CPF 2. Pix como forma de pagamento 3. Clicar em finalizar | QR Code para pagamento é exibido e botão de submissão é ativado           | Funcional | Manual       |

---

## Caminhos Alternativos

| ID   | Título                                 | Pré-condições     | Passos                           | Resultado Esperado                                     | Tipo      | Automação |
| ---- | -------------------------------------- | ----------------- | -------------------------------- | ------------------------------------------------------ | --------- | --------- |
| CT06 | Retorno ao plano após acessar checkout | Estar no checkout | 1. Clicar em voltar no navegador | Usuário retorna à página de planos sem perda de estado | Funcional | Manual    |

---

## Cenários de Erro: campos inválidos

| ID   | Título                                      | Pré-condições     | Passos                                                    | Resultado Esperado                                       | Tipo     | Automação |
| ---- | ------------------------------------------- | ----------------- | --------------------------------------------------------- | -------------------------------------------------------- | -------- | --------- |
| CT07 | Tentar finalizar com todos os campos vazios | Estar no checkout | 1. Clicar em finalizar sem preencher nada                 | Mensagem de erro exibida em todos os campos obrigatórios | Negativo | Manual    |
| CT08 | Email sem formato válido                    | Estar no checkout | 1. Digitar "emailsemarroba" no campo email 2. Clicar fora | Mensagem "email inválido" exibida                        | Negativo | Manual    |
| CT09 | CPF com todos os dígitos iguais             | Estar no checkout | 1. Digitar "111.111.111-11" no campo CPF                  | Mensagem "CPF inválido" exibida                          | Negativo | Manual    |
| CT10 | CPF com quantidade incorreta de dígitos     | Estar no checkout | 1. Digitar "123.456" no campo CPF                         | Mensagem de erro de formato exibida                      | Borda    | Manual    |
| CT11 | Número de cartão incompleto                 | Estar no checkout | 1. Digitar "4111" no campo de cartão 2. Clicar fora       | Mensagem de erro de formato exibida                      | Negativo | Manual    |
| CT12 | Nome com apenas um caractere                | Estar no checkout | 1. Digitar "A" no campo nome                              | Mensagem de erro de tamanho mínimo exibida               | Borda    | Manual    |

---

## Cenários de Borda

| ID   | Título                               | Pré-condições     | Passos                                                | Resultado Esperado                               | Tipo  | Automação |
| ---- | ------------------------------------ | ----------------- | ----------------------------------------------------- | ------------------------------------------------ | ----- | --------- |
| CT13 | Email no limite máximo de caracteres | Estar no checkout | 1. Digitar email com 254 caracteres (limite RFC 5321) | Campo aceita o valor e não exibe erro de formato | Borda | Manual    |

---

## Cenários Exploratórios

| ID   | Título                                     | Pré-condições | Passos                                                     | Resultado Esperado                              | Tipo         | Automação |
| ---- | ------------------------------------------ | ------------- | ---------------------------------------------------------- | ----------------------------------------------- | ------------ | --------- |
| CT14 | Comportamento da página em viewport mobile | Estar na home | 1. Redimensionar para 375x812 2. Realizar o fluxo completo | Todos os elementos são acessíveis e responsivos | Exploratório | Manual    |

---

## Resumo da Cobertura

| Categoria             | Quantidade |
| --------------------- | ---------- |
| Caminho feliz         | 5          |
| Caminhos alternativos | 1          |
| Campos inválidos      | 7          |
| Borda                 | 3          |
| Exploratório          | 1          |
| **Total**             | **14**     |

---

## Estimativa de Tempo

### Técnica utilizada: Decomposição por Atividade com Fator de Risco

O trabalho foi dividido em atividades menores e cada uma recebeu:

- Tempo base: quanto levaria se tudo funcionasse na primeira tentativa
- Fator de risco: multiplicador aplicado quando existe risco real de imprevistos:
  - 1.0 > atividade previsível, comportamento conhecido
  - 1.5 > atividade com dependência externa, seletor dinâmico ou comportamento incerto

Simplificação do PERT

| Atividade                                                     | Tempo Base | Fator | Total |
| ------------------------------------------------------------- | ---------- | ----- | ----- |
| Configuração do projeto (Cypress + estrutura de pastas)       | 1h         | 1.0   | 30min |
| Mapeamento de seletores e Page Objects                        | 3h         | 1.5   | 4h30  |
| CT01 a CT05 - Caminho feliz                                   | 5h         | 1.5   | 7h30  |
| CT06 a CT13 - Caminhos alternativos, Campos inválidos e Borda | 30min      | 1.5   | 3h    |
| CT14 - Viewport mobile                                        | 30min      | 1.0   | 30min |
| README + documentação                                         | 1h         | 1.0   | 1h    |
| Pipeline GitHub Actions                                       | 30min      | 1.0   | 30min |
| Revisão e ajustes finais                                      | 1h         | 1.0   | 1h    |

---

### Total

|                               |            |
| ----------------------------- | ---------- |
| **Soma das atividades**       | 18h30        |
| **Margem de segurança (10%)** | ~2h      |
| **Total estimado**            | **~20h30** |

A margem de 10% cobre imprevistos gerais — comportamento inesperado de algum campo, instabilidade do site ou tempo de pesquisa pontual.

---

### Por que o fator 1.5 foi aplicado em algumas atividades

**Mapeamento de seletores**: plataformas como a Alura costumam usar classes CSS geradas dinamicamente, dificultando a criação de seletores estáveis. É necessário inspecionar o HTML com cuidado para encontrar `id` ou atributos `data-*` disponíveis.

**Desafios técnicos**: Ao testar plataformas em produção, algumas limitações técnicas quanto a construção do site são presentes, e cabe ao desenvolvedor, tomar a decisão de: abortar, contornar e/ou documentar.


