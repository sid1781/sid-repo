///<reference types="cypress" />

export class CSRPayWithNextLoanInfoPage{

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5eb4fd0237597b7443f20379',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        btnBack : () => cy.get('[]'),
        imgPayWithNextLoan : () => cy.get('[]'),
        pageTitle : () => cy.get('[]'),
        lblSteps : () => cy.get('[]'),
        txtAvailCashLoanInfo : () => cy.get('[]'),
        txtCreditReportPaymentDeductionInfo : () => cy.get('[]'),
        txtCreditReportGenerationInfo : () => cy.get('[]'),
        btnOK : () => cy.get('[]'),
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