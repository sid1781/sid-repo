/// <reference types = "cypress" />

export class SignLoanDocumentPage {

    details = {
        zeplin: () => 'https://zpl.io/2GM9x74',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        iconSignDocument: () => cy.get('[]'),
        lblPageTitle: () => cy.get('[data-cy="chooseEsignLoanAgrm"]').contains('Sign Loan Document'),
        lblDigitalSign: () => cy.get('[]'),
        rbDigitalSign: () => cy.get('[data-cy="app.components.BbankAccount.esign_options_name3_item"]'), //whole block 
        subTxtDigitalsign: () => cy.get('[]'),
        lblESign: () => cy.get('[]'),
        rbEsign: () => cy.get('[data-cy="app.components.BbankAccount.esign_options_name1"]'),
        subTxtESign: () => cy.get('[]'),
        btnContinue: () => cy.get('button'),
    }

    verifyPageTitle() {
        this.elements.lblPageTitle().should('exist')
    }
    //TODO methods
    // iconSignDocument 
    // lblDigitalSign 
    // rbDigitalSign 
    verifyDigitalSignInText(digitalSignIn) {
        this.elements.rbDigitalSign().should('have.text', digitalSignIn)
    }

    clickDigitalSignButton() {
        this.elements.rbDigitalSign().click()
    }
    // subTxtDigitalsign 
    // lblESign 
    // rbEsign 
    clickESignButton() {
        this.elements.rbEsign().click()
    }
    verifyESignText(Esign){
        this.elements.rbEsign().should('have.text',Esign)
    }
    // subTxtESign 
    // btnContinue 
    clickContinueBtn() {
        this.elements.btnContinue().click()
    }

}

export const signLoanDocumentPage = new SignLoanDocumentPage