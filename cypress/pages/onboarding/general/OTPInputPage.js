export class OTPInputPage {

    details = {
        zeplin: () => 'https://zpl.io/8l6w1Jw',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=e576c778'
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.MobileSignin.verify_mobile"]'),
        lblEnterSixDigitOTP: () => cy.get('[data-cy="app.components.MobileSignin.signin_mobile_otp_title"]'),
        valMobileNumber: () => cy.get('.skins__MobSpan-sc-11ppbom-11'),
        lnkChangeMobileNumber: () => cy.get('[data-cy="app.components.MobileSignin.siginin_mobile_change_text"]'),
        lblOTP: () => cy.get('[data-cy="label_app.components.MobileSignin.enter_otp_here"]'),
        iconOTP: () => cy.get('[data-cy="img_app.components.MobileSignin.enter_otp_here"]'),
        inpEnterOTP: () => cy.get('[data-cy="input_app.components.MobileSignin.enter_otp_here"]'),
        txtTimer: () => cy.get('[data-cy="timer"]'),
        lnkResendOTP: () => cy.get('[data-cy="resendoption"]'),
        txtGetOTPonCall:() => cy.contains('Get OTP on call'),
        iconConsent: () => cy.get('[data-cy="infoImg"]'),
        txtConsent: () => cy.get('[data-cy="app.components.Common.kreditbee_info"]'),
        btnSubmit: () => cy.get('[data-cy="app.components.Common.submit_btn_caps"]'),
        msgOTPInput: () => cy.get('[data-cy="toastMsg"]'),
        //deleteAccount-OTP
        inpDeleteAccountOTP: () => cy.get('[data-cy="input_otpForm"]'),
        msgInvalidOTP: () => cy.get('[data-cy="errorMessage_app.components.MobileSignin.enter_otp_here"]')
        
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyEnterSixDigitOTPText(otpentersixdigit) {
        this.elements.lblEnterSixDigitOTP().should('contain.text', otpentersixdigit)
    }

    verifyMobileNumberValue(mobilenumber) {
        this.elements.valMobileNumber().should('have.text', mobilenumber)
    }

    verifyChangeMobeileNumberLink(changelink) {
        this.elements.lnkChangeMobileNumber().should('have.text', changelink)
    }

    verifyOTPLabel(otplabel) {
        this.elements.lblOTP().should('have.text', otplabel)
    }

    verifyOTPIcon() {
        this.elements.iconOTP().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/icons/O/ic-otp.svg')
    }

    enterOTP(otpenter) {
        this.elements.inpEnterOTP().type(otpenter)
    }
    verifyTimerText(timer) {
        this.elements.txtTimer().should('have.text', timer)
    }

    verifyResendOTPLink(resend) {
        this.elements.lnkResendOTP().should('have.text', resend)
    }

    clickResendOTPLink() {
        this.elements.lnkResendOTP().click()
    }

    iconConsent() {
        this.elements.iconConsent().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/common/ic-info-warning.svg')
    }

    verifyConsentText(consent) {
        this.elements.txtConsent().should('contain.text', consent)
    }

    verifySubmitBtnText(submit) {
        this.elements.btnSubmit().should('have.text', submit)
    }

    clickSubmitBtn() {
        this.elements.btnSubmit().click()
    }

    verifyOTPInputMessage(message) {
        this.elements.msgInvalidOTP().should('have.text', message)
    }

    // inpDeleteAccountOTP
    enterDeleteAccountOTP(otp) {
        this.elements.inpDeleteAccountOTP().type(otp)
    }

    //msgInvalidOTP
    verifyInvalidOTP(msgInvalidOTP) {
        this.elements.msgInvalidOTP().should('have.text', msgInvalidOTP)
    }

    verifyGetOTPOnCallText(txtGetOTPonCall){
        this.elements.txtGetOTPonCall().should('have.text',txtGetOTPonCall)
    }
}

export const otpInputPage = new OTPInputPage()