///<reference types="cypress" />

export class CSRPayWithNextLoanInfoPage{

    details = {
        zeplin : () => 'https://zpl.io/bzE3zQX',
        overflow1 : () => 'https://overflow.io/s/1NS0Y7J3/?node=d1e9d6b8',
        overflow2 : () => 'https://overflow.io/s/1NS0Y7J3/?node=6f089f4d',
    }

    elements = {
        imgPayWithNextLoan : () => cy.get('[]'),
        pageTitle : () => cy.get('[]'),
        lblSteps : () => cy.get('[]'),
        txtAvailCashLoanInfo : () => cy.get('[]'),
        txtCreditReportPaymentDeductionInfo : () => cy.get('[]'),
        txtCreditReportGenerationInfo : () => cy.get('[]'),
        btnOK : () => cy.get('[]'),
        btnBack : () => cy.get('[]'),
        btnConfirm : () => cy.get('[]'),
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

export const  csrPayWithNextLoanInfoPage = new CSRPayWithNextLoanInfoPage