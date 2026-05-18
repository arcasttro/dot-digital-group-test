export class BuscaPage {
  checkUrl(inputUrl) {
    cy.url().should("include", inputUrl);
  }

  getFiltroTipoConteudo(valueFilter) {
    return cy
      .get("#busca--filtros--tipos")
      .children("li.value")
      .contains(valueFilter);
  }

  clickFiltroTipoConteudo(valueFilter) {
    this.getFiltroTipoConteudo().scrollIntoView().should("be.visible").click();
  }

  submitFiltragem() {
    cy.get("#busca--filtrar-resultados")
      .scrollIntoView()
      .should("be.visible")
      .click();
  }

  getListaCursos() {
    return cy.get("#busca-resultados ul.paginacao-pagina").children();
  }

  getCursoInfo(htmlItem) {
    const data = htmlItem.children(".busca-resultado-container");

    const hrefCurso = cursos
      .eq(randomCurso)
      .children(".card-curso")
      .its("href");

    return {
      name: data.children(".busca-resultado-nome").invoke("text").trim(),
      description: data
        .children(".busca-resultado-descricao")
        .invoke("text")
        .trim(),
    };
  }

  clickRandomCurso() {
    return this.getListaCursos().then((cursos) => {
      const randomCurso = Math.floor(Math.random() * cursos.length);
      const item = cursos.eq(randomCurso);

      const nome = item.find(".busca-resultado-nome").text().trim();
      const descricao = item.find(".busca-resultado-descricao").text().trim();
      const href = item.find(".busca-resultado-link").attr("href");

      item.scrollIntoView().should("be.visible").click();
      
      return { nome, descricao, href }
    });
  }
}
