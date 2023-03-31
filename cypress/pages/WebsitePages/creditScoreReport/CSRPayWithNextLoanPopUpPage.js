///<reference types="cypress" />

export class CSRPayWithNextLoanPopUpPage{

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/605b3d806a2cb6092ede9e26',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        btnClose : () => cy.get('[]'),
        pageTitle : () => cy.get('[]'),
        txtConfirmCancellationOfPayViaNextLoan : () => cy.get('[]'),
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