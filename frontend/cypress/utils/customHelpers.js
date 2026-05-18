export class CustomHelpers {
    checkUrl(inputUrl){
        cy.url().should('include', inputUrl)
    }
}