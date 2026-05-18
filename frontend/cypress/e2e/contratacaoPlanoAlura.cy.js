import { CustomHelpers } from "../utils/customHelpers";
import { BuscaPage, HomePage, LpGenericaCursoEscolhido } from "../pages";

const customHelpers = new CustomHelpers();

describe(`
    COMO profissional de QA em busca de evolução técnica; 
    QUERO encontrar, escolher e iniciar a matrícula em um curso de Cypress na Alura 
    PARA aprimorar minhas habilidades em automação de testes e avançar na minha carreira.
    `, () => {
  context("End-to-End", () => {
    beforeEach(() => {
      cy.visit("/");
    });

    it("[CT01,CT02,CT03,CT04] Caminho feliz", () => {
      //CT01
      const textoBusca = HomePage.insertTextBusca("cypress");
      //CT02
      customHelpers.checkUrl(textoBusca);
      cy.screenshot("Buscando pelo curso Cypress");
      BuscaPage.clickFiltroTipoConteudo("COURSE");
      BuscaPage.submitFiltragem();
      BuscaPage.clickRandomCurso().then((cursoSelecionado) => {
        cy.screenshot("Landing Page do curso escolhido");
        customHelpers.checkUrl(cursoSelecionado.href);
      //CT03
        LpGenericaCursoEscolhido.getTituloCurso().then((tituloCurso) => {
          expect(cursoSelecionado.nome).to.contain(tituloCurso);
        });
      });

      LpGenericaCursoEscolhido.clickAcessarPlanos();
      //CT04
      LpGenericaCursoEscolhido.clickRandomDuracaoPlano();
      LpGenericaCursoEscolhido.clickRandomPlano();
      cy.origin("https://cursos.alura.com.br", () => {
        cy.screenshot("Checkout");
      });
    });
  });
});
