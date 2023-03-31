/// <reference types = "cypress" />

export class SignServiceOTPInputWebPage {

    details = {
        zeplin: () => 'https://zpl.io/KGAoO1W',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        pageTitle: () => cy.getIframeBody().find('[data-cy="app.components.KbEsignOtp.sign_service"]'),
        lblPageTitle: () => cy.getIframeBody().find('[]'),
        lblEnterOTP: () => cy.getIframeBody().find('[data-cy="placeholder_undefined"]'),
        inpOTP: () => cy.getIframeBody().find('[data-cy="otpText_undefined"]'),
        inpOTPSA: () => cy.getIframeBody().find('[id="signbee-otp-inp"]'),
        txtResend: () => cy.getIframeBody().find('[]'),
        valTimer: () => cy.getIframeBody().find('[data-cy="timer"]'),
        lblSignDocument: () => cy.getIframeBody().contains('div', 'Sign Document with Face ID verification in the next step'),
        btnCancel: () => cy.getIframeBody().find('button').first(),
        btnSubmit: () => cy.getIframeBody().find('[data-cy="signNowBtn"]'),
    }

    verifyPageTitle() {
        this.elements.pageTitle().should('exist')
    }

    // lblEnterOTP 
    verifyEnterOTPLabel(lblEnterOTP) {
        this.elements.lblEnterOTP().should('have.text', lblEnterOTP)
    }
    // inpOTP 
    enterOTP(otp) {
        this.elements.inpOTP().type(otp)
    }
    //inpOTPSA
    enterOTPSA(saotp) {
        this.elements.inpOTPSA().type(saotp)
    }
    // valTimer 
    verifyTimerValue(valTimer) {
        this.elements.valTimer().should('have.text', valTimer)
    }

    verifyResentText(resend) {
        this.elements.txtResend().should('have.text', resend)
    }
    // lblSignDocument 
    verifySignDocumentLabel(lblSignDocument) {
        this.elements.lblSignDocument().should('have.text', lblSignDocument)
    }
    // btnCancel 
    verifyCancelButtonText(btnCancel) {
        this.elements.btnCancel().should('have.text', btnCancel)
    }

    clickCancelButton() {
        this.elements.btnCancel().click()
    }
    // btnSubmit 
    verifySubmitButtonText(btnSubmit) {
        this.elements.btnSubmit().should('have.text', btnSubmit)
    }

    clickSubmit() {
        this.elements.btnSubmit().click()
    }

}

export const signServiceOTPInputWebPage = new SignServiceOTPInputWebPage