
/// <reference types = "cypress" />

export class RegisteredMobileNumberOTPInputPage {

    details = {
        zeplin: () => 'no VD found',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.Verification.otp_verification_title"]'),
        lblMobileNumber: () => cy.get('[data-cy="mobileNumber"]'),
        lblEnterOTP: () => cy.get('[data-cy="label_app.components.Verification.otp_placeholder"]'),
        inpEnterOTP : () => cy.get('[data-cy="input_app.components.Verification.otp_placeholder"]'),
        btnResend: () => cy.get('[data-cy="resendoption"]'),
        lblPartnerInfo: () => cy.get('[data-cy="label_app.components.ProcessingFeeReduction.otp_auth_label"]'),
        btnSubmit: () => cy.get('[data-cy="app.components.Verification.otp_submit_button"]')
    }
    verifyPageTitle(pageTitle) {
        this.elements.pageTitle().should('have.text', pageTitle)
    }
    verifyMobileNumberLabel() {
        this.elements.lblMobileNumber().should('be.visible')
    }
    verifyEnterOTPLabel(enterotp) {
        this.elements.lblEnterOTP().should('contain.text',enterotp)
    }
    EnterOTPInput(otp){
        this.elements.inpEnterOTP().type(otp)
    }
    verifyResendBtn() {
        this.elements.btnResend().should('be.visible')
    }
    verifyPartnerInfoLabel(partnerinfo) {
        this.elements.lblPartnerInfo().should('contain.text',partnerinfo)
    }
    verifySubmitBtn(submit) {
        this.elements.btnSubmit().should('contain.text',submit)
    }
    clickOnSubmitBtn() {
        this.elements.btnSubmit().click()
    }

}

export const registeredMobileNumberOTPInputPage = new RegisteredMobileNumberOTPInputPage