/// <reference types = "cypress" />

export class VerifyWorkEmailPage {

    details = {
        zeplin: () => 'no VD found',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        lblEnterWorkEmail: () => cy.get('[]'),
        valEnterWorkEmail: () => cy.get('[data-cy="input_app.components.extraDetails.email_placeholder"]'),
        imgWorkEmail: () => cy.get(),
        btnSendOTP: () => cy.get('[data-cy="app.components.extraDetails.send_otp"]'),
    }
enterWorkEmail(email){
    this.elements.valEnterWorkEmail().type(email)
}
clickSendOTP(){
    this.elements.btnSendOTP().click()
}
}

export const verifyWorkEmailPage = new VerifyWorkEmailPage