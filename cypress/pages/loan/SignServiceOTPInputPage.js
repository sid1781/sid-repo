/// <reference types = "cypress" />

export class SignServiceOTPInputPage {

    details = {
        zeplin: () => 'https://zpl.io/KGAoO1W',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.KbEsignOtp.sign_service"]'),
        lblPageTitle: () => cy.get('[]'),
        lblEnterOTP: () => cy.get('[data-cy="placeholder_undefined"]'),
        inpOTP: () => cy.get('[id="esign-otp-inp"]'),
        inpOTPSA: () => cy.get('[id="signbee-otp-inp"]'),
        txtResend: () => cy.get('[data-cy="resend"]'),
        iconGetOTPOnCall: ()=> cy.get('[data-cy="getOtpOnCall"]'),
        txtGetOTPOnCall: () => cy.contains('span','Get OTP on call'),
        valTimer: () => cy.get('[data-cy="timer"]'),
        lblSignDocument: () => cy.contains('div', 'Sign Document with Face ID verification in the next step'),
        btnCancel: () => cy.get('button').first(),
        btnSubmit: () => cy.get('[data-cy="signNowBtn"]'),
    }

    verifyPageTitle() {
        this.elements.pageTitle().should('exist')
    }

    // lblEnterOTP 
    verifyEnterOTPLabel(lblEnterOTP) {
        this.elements.lblEnterOTP().should('contains.text', lblEnterOTP)
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
    clickResentText(){
        this.elements.txtResend().click()
    }
    //GetOTPOnCall
    verifyGetOTPOnCallIcon(){
        this.elements.iconGetOTPOnCall().should('be.visible')
    }
    verifyGetOTPOnCallText(OnCall){
        this.elements.txtGetOTPOnCall().should('have.text',OnCall)
    }
    clickGetOTPOnCallText(){
        this.elements.txtGetOTPOnCall().click()
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

export const signServiceOTPInputPage = new SignServiceOTPInputPage