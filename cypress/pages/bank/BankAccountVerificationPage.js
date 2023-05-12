/// <reference types = "cypress" />
export class BankAccountVerificationPage {

    details = {
        zeplin : () => 'https://zpl.io/aRKLgzn',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f26e7d7b',
    }

    elements ={ 
        pageTitle : () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        btnBack : () => cy.get('[]'),
        iconHelp : () => cy.get('[]'),
        iconKreditbee : () => cy.get('[]'),
        icon1Rupee : () => cy.get('[]'),
        iconBank : () => cy.get('[]'),
        txt1Rupee : () => cy.get('[]'),
        txtFundTransferForAccountVerification : () => cy.get('[data-cy="app.components.BbankAccount.acc_verify_vtxt"]'),
        subTxt1Rupee : () =>  cy.get('[data-cy="app.components.BbankAccount.acc_verify_vtxt"]'),
        btnContinue : () =>  cy.get('[data-cy="app.components.BbankAccount.acc_verify_continue"]'),
    }

   clickContinueBtn() {
        this.elements.btnContinue().click()
    }

    verifyTransferTextInformation(exptectedText) {
        this.elements.txtFundTransferForAccountVerification().should('have.text', exptectedText)
    }

    verifyPageTitle(AccountVerification) {
        this.elements.pageTitle().should('have.text', AccountVerification)
    }

}

export const bankAccountVerificationPage = new BankAccountVerificationPage
