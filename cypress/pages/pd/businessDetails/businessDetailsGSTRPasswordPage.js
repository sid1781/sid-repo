/// <reference types = "cypress" />

export class BusinessDetailsGSTRPasswordpage {

    details = {
        zeplin: () => 'https://zpl.io/40Ygyyp',
        overflow: () => 'https://overflow.io/s/3ih4jz6j/?node=b7e5d24f&prototype',
    }

    elements = {
        pageTitle : () => cy.get(),
        iconPDF : () => cy.get(),
        valFileName : () =>cy.get('[data-cy="input_app.components.extraDetails.gst_username_placeholder"]'),
        lblEnterPasswordToUnlock : () => cy.get('[data-cy="input_app.components.extraDetails.gst_password_placeholder"]'),
        iconKey : () => cy.get(),
        valPassword : () => cy.get ('[data-cy="input_app.components.extraDetails.gst_password_placeholder"]'),
        lnkView : () => cy.get (),
        iconInfo : () => cy.get(),
        txtUploadPassword : () =>cy.get(),
        //created me
        btnOTP:()=>cy.get('[data-cy="app.components.extraDetails.otp_text"]'),
        inpOTP:()=>cy.get('[data-cy="input_app.components.Common.get_otp"]'),
        btnSubmit : () => cy.contains('Submit')

    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    verifyPDFIcon() {
        this.elements.iconPDF().should('be.visible')
    }
    EnterFileNameValue() {
        this.elements.valFileName().should('be.visible')
    }
    verifyEnterPasswordToUnlock(password) {
        this.elements.lblEnterPasswordToUnlock().should('have.text', password)
    }
    verifyKeyIcon() {
        this.elements.iconKey().should('be.visible')
    }
    EnterPasswordValue() {
        this.elements.valPassword().should('be.visible')
    }
    verifyViewLink() {
        this.elements.lnkView().should('be.visible')
    }
    clickViewLink() {
        this.elements.lnkView().click()
    }
    verifyInfoIcon() {
        this.elements.iconInfo().should('be.visible')
    }
    verifyUploadPasswordText(passwordtext) {
        this.elements.txtUploadPassword().should('have.text', passwordtext)
    }
    verifySubmitButton(submit) {
        this.elements.btnSubmit().should('have.text', submit)
    }
    clickSubmitButton() {
        this.elements.btnSubmit().click({force:true})
    }
    inputFileNameValue(name) {
    this.elements.valFileName().type(name)
    }
    clickinputOTPBtn(){
        this.elements.btnOTP().eq(0).click()
    }
    inputPasswordValue(password) {
        this.elements.valPassword().type(password)
    }
    clickInputOTP(){
        this.elements.inpOTP().click()
    }
    inputOTP(otp){
        this.elements.inpOTP().type(otp)
    }

}

export const businessDetailsGSTRPasswordPage = new BusinessDetailsGSTRPasswordpage()
