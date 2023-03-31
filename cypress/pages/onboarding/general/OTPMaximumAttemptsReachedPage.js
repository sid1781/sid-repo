/// <reference types = "cypress" />

export class OTPMaximumAttemptsReachedPage {

    details = {
        zeplin: () => 'https://zpl.io/RML1Zeg',
        overflow: () => ''//TODO: Overflow Link
    }

    elements = {
        iconWarning: () => cy.get('.sc-bxivhb'),
        pageTitle: () => cy.get('[data-cy="app.components.FirebaseLogin.login_with_otp_err_title"]'),
        txtRetry: () => cy.get('[data-cy="app.components.FirebaseLogin.login_with_otp_err_desc"]'),
        btnOK: () => cy.get('button')
    }
    //iconWarning
    verifyMaxAttemptsReachedIcon() {
        this.elements.iconWarning().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/icons/E/ic-error1.svg')
        .should('be.visible')
    }
    //pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    //txtRetry
    verifyRetryText(retry) {
        this.elements.txtRetry().should('have.text', retry)
    }
    //btnOK
    verifyOKText(textOK) {
        this.elements.btnOK().should('have.text', textOK)
    }

    clickOKBtn() {
        this.elements.btnOK().click()
    }
}

export const otpMaximumAttemptsReachedPage = new OTPMaximumAttemptsReachedPage()