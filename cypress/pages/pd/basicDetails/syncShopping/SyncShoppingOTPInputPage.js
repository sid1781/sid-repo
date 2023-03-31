
/// <reference types = "cypress" />

export class SyncShoppingOTPInputPage {

    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
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
    clickSubmitbtn(){
        this.elements.btnSubmit().click()
    }

}

export const syncShoppingOTPInputPage = new SyncShoppingOTPInputPage;