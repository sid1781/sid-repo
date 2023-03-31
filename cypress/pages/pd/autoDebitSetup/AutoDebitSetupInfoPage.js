/// <reference types = "cypress" />

export class AutoDebitSetupInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/VKZOelq',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        imgOfSetupAutoDebit: () => cy.get('[]'),
        txtOfSetupAutoDebit: () => cy.get('[]'),
        subTextOfSetupAutoDebit: () => cy.get('[]'),
        infoSubTextBox: () => cy.get('[]'),
        iconOfSubTextBox: () => cy.get('[]'),
        btnSelectBankAccount: () => cy.get('[data-cy="app.components.extraDetails.select_bank_account"]'),
        btnEDSelectBankAccount: () => cy.get('[data-cy="app.components.Enach.select_bank_account"]'),
    }
    clickSelectBankAccount(){
        this.elements.btnSelectBankAccount().click()
    }

    clickSelectBankAaccountButton() {
        this.elements.btnSelectBankAccount().click()
    }

    clickEDSelectBankAccount() {
        this.elements.btnEDSelectBankAccount().click()
    }
}

export const autoDebitSetupInfoPage = new AutoDebitSetupInfoPage()