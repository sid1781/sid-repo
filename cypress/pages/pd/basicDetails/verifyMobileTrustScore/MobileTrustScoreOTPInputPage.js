
/// <reference types = "cypress" />

export class MobileTrustScoreOTPInputPage {

    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        lblEmailID: () => cy.get('[]'),
        btnChange: () => cy.get(),
        lblOTP: () => cy.get(),
        valEnterOTP: () => cy.get('[data-cy="input_undefined"]'),
        imgOTP: () => cy.get(),
        valTimer: () => cy.get(),
        btnSubmit: () => cy.get('[data-cy="buttonTxt"]'),
    }
    enterOTP(otp){
           this.elements.valEnterOTP().type(otp)
    }
    clickSubmitbtn(){
        this.elements.btnSubmit().click()
    }

}

export const mobileTrustOTPInputPage = new MobileTrustScoreOTPInputPage;