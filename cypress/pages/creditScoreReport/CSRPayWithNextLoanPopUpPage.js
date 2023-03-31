///<reference types="cypress" />

export class CSRPayWithNextLoanPopUpPage{

    details = {
        zeplin : () => 'https://zpl.io/2ygrJJp',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=6f089f4d',
    }

    elements = {
        btnClose : () => cy.get('[]'),
        pageTitle : () => cy.get('[]'),
        txtPayViaNextLoan : () => cy.get('[]'),
        btnYesCancel : () => cy.get('[]'),
        btnNoKeepIt : () => cy.get('[]'),
    }

    verifyPageTitle(pageTile) {
        this.elements.pageTitle().should('have.text', pageTile)
    }

    verifyPaymentAmountLabel(label) {
        this.elements.lblPaymentAmount().should('have.text', label)
    }

    verifyPaymentAmountValue(value) {
        this.elements.verifyPaymentAmountValue().should('have.text', value)
    }
    
}

export const  csrPayWithNextLoanPopUpPage = new CSRPayWithNextLoanPopUpPage