/// <reference types = "cypress" />

export class VerifyWorkEmailOTPInputPage {

    details = {
        zeplin: () => 'no VD found',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.extraDetails.work_email_otp_verification_title"]'),
        lblEmailID: () => cy.get('[]'),
        btnChange: () => cy.get(),
        lblOTP: () => cy.get(),
        valEnterOTP: () => cy.get('[data-cy="input_app.components.extraDetails.otp_text"]'),
        imgOTP: () => cy.get(),
        valTimer: () => cy.get(),
        btnSubmit: () => cy.get('[data-cy="app.components.extraDetails.otp_submit_button"]'),
    }
    enterOTP(otp){
           this.elements.valEnterOTP().type(otp)
    }

    clickSubmitButton(){
        this.elements.btnSubmit().click()
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
}

export const verifyWorkEmailOTPInputPage = new VerifyWorkEmailOTPInputPage()