/// <reference types = "cypress" />

export class OTPEmailInputPage {

    details = {
        zeplin: () => 'https://zpl.io/ag10NZ1',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=94262e27'
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.Verification.email_otp_verification_title"]'),
        lblEnterSixDigitOTP: () => cy.get('[data-cy="app.components.Verification.enter_otp"]'),
        valEmailID: () => cy.get('span').contains('test@gmail.com'),
        lblOTP: () => cy.get('[data-cy="label_emailOtp"]'),
        iconOTP: () => cy.get('[data-cy="img_emailOtp"]'),
        inpOTP: () => cy.get('[data-cy="input_emailOtp"]'),
        txtTimer: () => cy.get('[data-cy="timer"]'),
        lnkResendOTP: () => cy.get('[data-cy="resend"]'),
        iconConsent: () => cy.get('[]'),
        txtConsent: () => cy.get('[]'),
        msgOTPInputValidation: () => cy.get('[]'),
        iconInfo: () => cy.get('[]'),
        txtInfo: () => cy.get('[]'),
        btnSubmit: () => cy.get('[data-cy="app.components.Verification.otp_submit_button"]'),
    }

    // pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    // lblEnterSixDigitOTP
    verifyEnterSixDigitOTPText(otpentersixdigit) {
        this.elements.lblEnterSixDigitOTP().should('contain.text', otpentersixdigit)
    }

    // valEmailID
    verifyEmailIDValue(emailID) {
        this.elements.valEmailID().should('have.text', emailID)
    }

    // lblOTP
    verifyOTPLabel(otplabel) {
        this.elements.lblOTP().should('have.text', otplabel)
    }
    // iconOTP
    verifyOTPIcon() {
        this.elements.iconOTP().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/icons/O/ic-otp.svg')
    }
    // inpOTP
    enterOTP(otpenter) {
        this.elements.inpOTP().type(otpenter)
    }
    //txtTimer
    verifyTimerText(timer) {
        this.elements.txtTimer().should('have.text', timer)
    }
    //lnkResendOTP
    verifyResendOTPLink(resend) {
        this.elements.lnkResendOTP().should('have.text', resend)
    }

    clickResendOTPLink() {
        this.elements.lnkResendOTP().click()
    }
    //iconConsent
    iconConsent() {
        this.elements.iconConsent().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/common/ic-info-warning.svg')
    }
    //txtConsent
    verifyConsentText(consent) {
        this.elements.txtConsent().should('contain.text', consent)
    }

    //btnSubmit
    verifySubmitBtnText(submit) {
        this.elements.btnSubmit().should('have.text', submit)
    }
    clickSubmitBtn() {
        this.elements.btnSubmit().click()
    }
    // msgOTPInputValidation
    verifyOTPInputMessage(message) {
        this.elements.msgOTPInputValidation().should('have.text', message)
    }
}

export const otpEmailInputPage = new OTPEmailInputPage()