// <reference types = "cypress" />

export class SignIntoDigiLockerPage {

    details = {
        zeplin: () => '', //TODO : Zeplin Link
        overflow: () => '',//TODO :Overflow Link
    }

    elements = {
        imgOfDigiLocker: () => cy.get('[class="navbar-brand order-1 order-lg-1 text-center mt-3 mb-3"]'),
        pageTitle: () => cy.get('[class="card-title mb-4"]'),
        txtSignIntoDigiLocker: () => cy.get('[class="text-muted"]'),
        inpEnterAadharNumber: () => cy.get('[class="form-group"]'),
        lblEnterTheText: () => cy.get('[class="form-group row"]'),
        imgCaptcha: () => cy.get('[class="w-85"]'),
        inpEnterTheText: () => cy.get('[class="form-group row"]'),
        subtextOfEnterTheText: () => cy.get('[class="form-group"]'),
        lnkEnterTheText: () => cy.get('[class="form-group"]'),
        btnNext: () => cy.get('[class="btn btn-success btn-lg btn-block "]'),
        lnkReturn: () => cy.get('[class="auth_partner_redirect"]'),
    }
     // PageTitle
     verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    verifyDigiLockerImg() {
        this.elements.imgOfDigiLocker().should('have.css', 'Digi-Locker')
    }
    verifySignIntoDigiLockerText(text) {
        this.elements.txtSignIntoDigiLocker().should('have.text', text)
    }
    verifyEnterTheTextlabel(text) {
        this.elements.lblEnterTheText().should('have.text', text)
    }
    verifyCaptchaImg() {
        this.elements.imgCaptcha().should('have.css', 'Captcha')
    }
    verifysubtextOfEnterTheText(text) {
        this.elements.subtextOfEnterTheText().should('have.text', text)
    }
    verifyEnterTheTextlnk(text) {
        this.elements.lnkEnterTheText().should('have.text', text)
    }
    clickEnterTheTextlnk() {
        this.elements.lnkEnterTheText().click()
    }
    clickNextbtn(){
        this.elements.btnNext().click()
    }
    verifyReturnlnk(text) {
        this.elements.lnkReturn().should('have.text', text)
    }
    clickReturnlnk() {
        this.elements.lnkReturn().click()
    }

}

export const  signIntoDigiLockerPage = new SignIntoDigiLockerPage()