class BuscaPage {
  getFiltroTipoConteudo(valorFiltro) {
    return cy
      .get("#busca--filtros--tipos li")
      .children(`input[value=${valorFiltro}]`);
  }

  clickFiltroTipoConteudo(valorFiltro) {
    this.getFiltroTipoConteudo(valorFiltro)
      .siblings("label")
      .scrollIntoView()
      .should("be.visible")
      .click();

    this.getFiltroTipoConteudo(valorFiltro).should("be.checked");
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

  clickRandomCurso() {
    return this.getListaCursos().then((cursos) => {
      const indiceCursoAleatorio = Math.floor(Math.random() * cursos.length);
      const item = cursos.eq(indiceCursoAleatorio);

      const nome = item.find(".busca-resultado-nome").text().trim();
      const href = item.find(".busca-resultado-link").attr("href");

      return cy.wrap(item)
        .scrollIntoView()
        .should("be.visible")
        .click()
        .then(() => {
          return { nome, href };
        });
    });
  }
}

export default new BuscaPage();
