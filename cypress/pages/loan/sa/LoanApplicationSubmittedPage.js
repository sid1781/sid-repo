/// <reference types = "cypress" />


export class LoanApplicationSubmittedPage {

    details = {
        zeplin: () => '',
        overflow: () => '', //TODO Link
    }
    elements = {
        pageTitle: () => cy.get('[data-cy="app.containers.BbankAccount.loan_success_title"]'),
    }
    verifypageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    }

}

export const loanApplicationSubmittedPage = new LoanApplicationSubmittedPage() 