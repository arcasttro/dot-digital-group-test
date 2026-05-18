export class HomePage {

    getFormBusca(){
        return cy.get('form.search-bar__form')
    }

    getCampoBusca() {
        return cy.get("#header-barraBusca-form-campoBusca")
    }

    getBotaoBusca(){
        return this.getCampoBusca().siblings('button.search-bar__form-submit')
    }

    insertTextBusca(searchInput){
        this.getBotaoBusca()
            .scrollIntoView()
            .should('be.visible')
            .click()
        
        this.getCampoBusca()
            .should('be.visible')
            .clear()
            .type(searchInput)

        this.getFormBusca.submit()
        return searchInput
    }
}
