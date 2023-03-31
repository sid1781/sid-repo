/// <reference types = "cypress" />

export class SignLoanDocumentWebPage {

    details = {
        zeplin: () => 'https://zpl.io/2GM9x74',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        iconSignDocument: () => cy.getIframeBody().find('[]'),
        lblPageTitle: () => cy.getIframeBody().find('[data-cy="chooseEsignLoanAgrm"]').contains('Sign Loan Document'),
        lblDigitalSign: () => cy.getIframeBody().find('[]'),
        rbDigitalSign: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.esign_options_name3"]'), //whole block 
        subTxtDigitalsign: () => cy.getIframeBody().find('[]'),
        lblESign: () => cy.getIframeBody().find('[]'),
        rbEsign: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.esign_options_name1"]'),
        subTxtESign: () => cy.getIframeBody().find('[]'),
        btnContinue: () => cy.getIframeBody().find('button'),
    }

    verifyPageTitle() {
        this.elements.lblPageTitle().should('exist')
    }
    //TODO methods
    // iconSignDocument 
    // lblDigitalSign 
    // rbDigitalSign 
    verifyDigitalSignInText() {
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
    // subTxtESign 
    // btnContinue 
    clickContinueBtn() {
        this.elements.btnContinue().click()
    }

}

export const signLoanDocumentWebPage = new SignLoanDocumentWebPage