class HomePage {

    getFormBusca(){
        return cy.get('#header-items form[action="/busca"]')
    }

    getCampoBusca() {
        return cy.get("#header-barraBusca-form-campoBusca")
    }

    getBotaoBusca(){
        return this.getCampoBusca().siblings('button.search-bar__form-submit')
    }

    clickBotaoBusca(){
        this.getBotaoBusca()
            .scrollIntoView()
            .should('be.visible')
            .click()
    }

    insertTextBusca(textoBusca){
        this.clickBotaoBusca()
        
        this.getCampoBusca()
            .should('be.visible')
            .clear()
            .type(textoBusca)

        this.getFormBusca().submit()
        return textoBusca
    }
}

export default new HomePage()