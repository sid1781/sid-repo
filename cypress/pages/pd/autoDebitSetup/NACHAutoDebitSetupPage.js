/// <reference types = "cypress" />

export class NACHAutoDebitSetupPage {

    details = {
        zeplin: () => 'https://zpl.io/W4WPJDn',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        imgOfAutoDebitSetup: () => cy.get('[]'),
        lblSetupUsingNetbanking: () => cy.get('[]'),
        subTextOfSetupUsingNetbanking: () => cy.get('[]'),
        iconOfSetupUsingNetbanking: () => cy.get('[]'),
        infoSubTextBox1: () => cy.get('[]'),
        lblSetupUsingDebitCard: () => cy.get('[]'),
        subTextOfSetupUsingDebitCard: () => cy.get('[]'),
        iconOfSetupUsingDebitCard: () => cy.get('[]'),
        infoSubTextBox2: () => cy.get('[]'),
        lblSetupUsingPrintedForm: () => cy.get('[]'),
        subTextOfSetupUsingPrintedForm: () => cy.get('[]'),
        iconOfSetupUsingPrintedForm: () => cy.get('[]'),
        infoSubTextBox3: () => cy.get('[]'),
        btnContinue: () => cy.get('[]'),
        lblNACHAutoDebit: () => cy.get('[data-cy="carditem"]'),
        btnSelectBankAccount: () => cy.get('[class="skins__ContinueBtn-sc-14eqbyx-118 kzqkin BBtn-sc-19btvbw-0 eHtehy"]'), 

    }

    clickNACHAutoDebitLabel() {
        this.elements.lblNACHAutoDebit().click({multiple: true})
    }

    clickSelectBankAccountButton() {
        this.elements.btnSelectBankAccount().click()
    }

}

export const nachAutoDebitSetupPage = new NACHAutoDebitSetupPage

