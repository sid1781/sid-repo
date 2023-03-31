// <reference types = "cypress" />

export class AutoDebitMandidatesPage {

    details = {
        // zeplin: () => 'https://zpl.io/qyA8q6J', //TODO Link
        // overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',//TODO
    }

    elements = {
       pageTitle:()=>cy.get('[data-cy="app.components.MyNachMandate.my_nach_mandates_txt"]'),
       txtCancellationProcess:()=>cy.contains('span','Cancellation Processing'),
       txtActive:()=>cy.contains('span','Active'),
       txtCancelled:()=>cy.contains('span','Cancelled')

    }
    verifyPageTitle(title){
        this.elements.pageTitle().should('contain',title)
    }
    verifyCancellationProcessText(text){
        this.elements.txtCancellationProcess().should('contain',text)
    }
    verifyActiveText(active){
        this.elements.txtActive().should('contain',active)
    }
    verifyCancelledText(cancelled){
        this.elements.txtCancelled().should('contain',cancelled)
    }
    
    
}
export const autoDebitMandidatesPage = new AutoDebitMandidatesPage