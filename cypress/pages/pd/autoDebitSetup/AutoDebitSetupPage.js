/// <reference types = "cypress" />

export class AutoDebitSetupPage {

    details = {
        zeplin: () => 'https://zpl.io/W4WPJDn',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        lblBack:()=>cy.get('[data-cy="goBackBtn"]'),
        pageTitle: () => cy.get('[]'),
        imgOfAutoDebitSetup: () => cy.get('[]'),
        lblSetupUsingNetbanking: () => cy.contains('p','Setup using Netbanking'),
        subTextOfSetupUsingNetbanking: () => cy.get('[]'),
        iconOfSetupUsingNetbanking: () => cy.get('[]'),
        infoSubTextBox1: () => cy.get('[]'),
        // lblSetupUsingDebitCard: () => cy.get('[data-cy="debitcardNach"]'),
        lblSetupUsingDebitCard: () => cy.contains('p','Setup using Debit card'),
        subTextOfSetupUsingDebitCard: () => cy.get('[]'),
        iconOfSetupUsingDebitCard: () => cy.get('[]'),
        infoSubTextBox2: () => cy.get('[]'),
        lblSetupUsingPrintedForm: () => cy.get('[]'),
        subTextOfSetupUsingPrintedForm: () => cy.get('[]'),
        iconOfSetupUsingPrintedForm: () => cy.get('[]'),
        infoSubTextBox3: () => cy.get('[]'),
        // btnContinue: () => cy.get('[data-cy="debitcardNach"]').eq(1),
        lblNACHAutoDebit: () => cy.get('[data-cy="carditem"]').eq(1),
        btnSelectBankAccount: () => cy.contains('Select Bank account'), 
        btnContinue: () => cy.contains('button','Continue'),
        lblUPIMandate: () => cy.contains('p','UPI Mandate'),

    }

    clickSelectBankAccountButton() {
        this.elements.btnSelectBankAccount().click()
    }
    clickNACHAAutoDebit(){
        this.elements.lblNACHAutoDebit().click()
    }
       
    clickSetupUsingDebitCardlabel(){
        this.elements.lblSetupUsingDebitCard().click()
    }
    clickContinueButton(){
        this.elements.btnContinue().click()
    }
    verifyBackbtn(){
        this.elements.lblBack().should('be.visible')
    }
    clickBack(){
        this.elements.lblBack().click()
    }
    clickUPIMandate(){
        this.elements.lblUPIMandate().click()
    }
    clickSetupNetBanking(){
        this.elements.lblSetupUsingNetbanking().click()
    }
}

export const autoDebitSetupPage = new AutoDebitSetupPage()