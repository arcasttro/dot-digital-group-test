class CheckoutPage {
  getNomeCompleto() {
    return cy.get('input[name="name"]');
  }
  getEmail() {
    return cy.get('input[name="email"]');
  }
  getCelular() {
    return cy.get('input[name="phone"]');
  }
  getCPF() {
    return cy.get('input[name="cpf"]');
  }

  getCEP() {
    return cy.get('input[name="zipCode"]');
  }
  getEndereco() {
    return cy.get('input[name="street"]');
  }
  getNumero() {
    return cy.get('input[name="number"]');
  }
  getComplemento() {
    return cy.get('input[name="complement"]');
  }
  getBairro() {
    return cy.get('input[name="neighborhood"]');
  }
  getCidade() {
    return cy.get('input[name="city"]');
  }
  getEstado() {
    return cy.get('select[name="state"]');
  }

  getCupom() {
    return cy.get('input[name="coupon"]');
  }
  getBotaoRemoverCupom() {
    return cy.get("button.coupon__btn");
  }

  getBotaoFormaPagamento(method) {
    //'credit' | 'pix' | 'paypal' | 'nupay'
    // Deixarei fixado em pagamento pix para facilitar os testes
    return cy.get(`button.method__button[data-method="pix"]`);
  }

  getTituloPlano() {
    return cy.get("h2.product__name");
  }
  getValorTotal() {
    return cy.get("h3.checkout__price");
  }

  // parece inutil, melhor validar a propriedade no step
  getErroCampo(campo) {
    //'name' | 'email' | 'phone' | 'cpf' | 'zipcode' | 'street' | 'number' | 'neighborhood' | 'city' | 'state'
    return cy.get(`[data-error-${campo}]`);
  }

  getBotaoConfirmarPagamento() {
    return cy.get("button.payment__btn");
  }

  clickRemoverCupom() {
    this.getBotaoRemoverCupom().scrollIntoView().should("be.visible").click();
  }
  clickFormaPagamento(method) {
    //'credit' | 'pix' | 'paypal' | 'nupay'
    // Deixarei fixado em pagamento pix para facilitar os testes

    this.getBotaoFormaPagamento(method)
      .scrollIntoView()
      .should("be.visible")
      .click();
  }
  clickConfirmarPagamento() {
    this.getBotaoConfirmarPagamento()
      .scrollIntoView()
      .should("be.visible")
      .click();
  }

  typeNomeCompleto(value) {
    this.getNomeCompleto().clear().type(value);
  }
  typeEmail(value) {
    this.getEmail().clear().type(value);
  }
  typeCelular(value) {
    this.getCelular().clear().type(value);
  }
  typeCPF(value) {
    this.getCPF().clear().type(value);
  }
  typeCEP(value) {
    this.getCEP().clear().type(value);
  }
  typeEndereco(value) {
    this.getEndereco().clear().type(value);
  }
  typeNumero(value) {
    this.getNumero().clear().type(value);
  }
  typeComplemento(value) {
    this.getComplemento().clear().type(value);
  }
  typeBairro(value) {
    this.getBairro().clear().type(value);
  }
  typeCidade(value) {
    this.getCidade().clear().type(value);
  }
  selectEstado(value) {
    this.getEstado().select(value);
  }
}

export default new CheckoutPage();