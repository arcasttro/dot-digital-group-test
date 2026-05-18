class LpGenericaCursoEscolhido {
  getTituloCurso() {
    return cy.get(".curso-banner-course-title").then((elementTitle) => {
      const title = elementTitle.text().trim();

      return cy.get(".course--banner-text-category").then((elementCategory) => {
        const category = elementCategory.text().trim();

        return `${title} ${category}`.trim();
      });
    });
  }

  clickAcessarPlanos() {
    cy.get(".course-icon-title-flex")
      .find('a[href="#planos"]')
      .scrollIntoView()
      .should("be.visible")
      .click();
  }

  //A partir desse momento, em um projeto real, eu criaria /cypress/components/planos.js (Component Object Model)
  // A div de planos se torna presente em diversas outras paginas do produto, assim, essa estrutura facilita reutilização e manutenção

  getDuracaoPlano() {
    return cy.get(".planosSwitch__buttons").children();
  }

  clickRandomDuracaoPlano() {
    this.getDuracaoPlano().then((data) => {
      const index = Math.floor(Math.random() * data.length);

      cy.wrap(data.eq(index)).scrollIntoView().should("be.visible").click();
    });
  }

  getPlanos() {
    return cy.get(".plans__list.popup:not(.hidden)").children();
  }

  clickRandomPlano() {
    return this.getPlanos().then((planos) => {
      const index = Math.floor(Math.random() * planos.length);
      const item = planos.eq(index);
      cy.wrap(item)
        .find(".plans__plan__cta")
        .scrollIntoView()
        .should("be.visible")
        //.click();
    });
  }
}

export default new LpGenericaCursoEscolhido();
