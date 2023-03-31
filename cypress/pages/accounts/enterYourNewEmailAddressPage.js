/// <reference types = "cypress" />

export class EnterYourNewEmailAddressPage {

    details = {
        zeplin: () => '',
        zeplinvariation: () => '',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.EmailChange.change_email_header"]'),
        lblEmail: () => cy.get('[data-cy="label_app.components.EmailChange.email_placeholder"]'),
        iconEmail: () => cy.get('[data-cy="app.components.EmailChange.email_placeholder"]'),
        inpEmailAddress: () => cy.get('[data-cy="input_app.components.EmailChange.email_placeholder"]'),
        chkBoxEmailAddressConfirmation: () => cy.get('[data-cy="icon_app.components.EmailChange.email_check_label"]'),
        txtEmailAddressConfirmation: () => cy.get('[data-cy="checkboxText_app.components.EmailChange.email_check_label"]'),
        btnSendOTP: () => cy.get('[data-cy="app.components.EmailChange.email_submit_btn"]'),
        txtErrorMessageInfo: () => cy.get('[data-cy="errorMessage_app.components.EmailChange.email_placeholder"]'),
        
    }

    // pageTitle 
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyEmailLabel(label) {
        this.elements.lblEmail().should('have.text', label)
    }

    verifyEmailIcon(icon) {
        this.elements.iconEmail().should('have.text', icon)
    }

    enterEmailAddress(email) {
        this.elements.inpEmailAddress().type(email)
    }

    clickEmailAddressConfirmationCheckBox(){
        this.elements.chkBoxEmailAddressConfirmation().click()
    }

    verifyEmailAddressConfirmationText(Message) {
        this.elements.txtEmailAddressConfirmation().should('have.text', Message)
    }

    clickSendOTPButton(){
        this.elements.btnSendOTP().click()
    }

    verifyInvalidEmailAddressText(errorMessage) {
        this.elements.txtErrorMessageInfo().should('have.text', errorMessage)
    }
    
}

export const enterYourNewEmailAddressPage = new EnterYourNewEmailAddressPage()