/// <reference types = "cypress" />

export class GSTVerificationPasswordLoginPage {

    details = {
        zeplin: () => 'https://zpl.io/jZe5N36',
        overflow: () => 'https://overflow.io/s/3IH4JZ6J/?node=b7e5d24f',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.extraDetails.provide_gst_details"]'),
        iconGSTVerification: () => cy.get('[data-cy="infoImg"]'),
        txtGSTVerification: () => cy.get('[data-cy="simpleInfoMsg"]'),
        lblGSTNUserName: () => cy.get('[data-cy="label_app.components.extraDetails.gst_username_placeholder"]'),
        inpGSTNUserName: () => cy.get('[data-cy="input_app.components.extraDetails.gst_username_placeholder"]'),
        lblLoginVia: () => cy.get('[class="typography-content sc-frDJqD fksYWb"]'),
        rbPassword: () => cy.get('[class="typography-content sc-frDJqD eXQUSM"]'),
        rbOTP: () => cy.get('[class="typography-content sc-frDJqD iZguom"]'), 
        lblGSTNPassword: () => cy.get('[data-cy="label_app.components.extraDetails.gst_password_placeholder"]'),
        inpGSTNPassword: () => cy.get('[data-cy="input_app.components.extraDetails.gst_password_placeholder"]'),
        lblOTP: () => cy.get('[data-cy="label_app.components.Common.get_otp"]'),
        inpOTP: () => cy.get('[data-cy="input_app.components.Common.get_otp"]'),
        iconGSTPortal: () => cy.get('[src="https://ik.imagekit.io/kreditbee/app-static/loan/bulb.svg"]'),
        txtGSTPortal: () => cy.get('[]'),
        lnkGSTPortal: () => cy.get('[]'),
        btnSubmit: () => cy.get('[data-cy="app.components.Common.submit_btn_caps"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    verifyGSTVerificationIcon() {
        this.elements.iconGSTVerification().should('be.visible')
    }   
    verifyGSTVerificationText(text) {
        this.elements.txtGSTVerification().should('have.text', text)
    }
    verifyGSTNUserName(name) {
        this.elements.lblGSTNUserName().should('have.text', name)
    }  
    verifyGSTNUserNameInput() {
        this.elements.inpGSTNUserName().should('be.visible')
    }
    clickGSTNUserNameInput() {
        this.elements.inpGSTNUserName().click()
    }  
    verifyLoginViaLabel(login) {
        this.elements.lblLoginVia().should('have.text', login)
    }   
    verifyPasswordRadioButton(password) {
        this.elements.rbPassword().should('have.text', password)
    }
    clickPasswordRadioButton() {
        this.elements.rbPassword().click()
    } 
    verifyOTPRadioButton(otp) {
        this.elements.rbOTP().should('have.text', otp)
    }
    clickOTPRadioButton() {
        this.elements.rbOTP().click()
    } 
    verifyGSTNPasswordLabel(password) {
        this.elements.lblGSTNPassword().should('have.text', password)
    }
    verifyGSTNPasswordInput() {
        this.elements.inpGSTNPassword().should('be.visible')
    }
    clickGSTNPasswordInput() {
        this.elements.inpGSTNPassword().click()
    }  
    verifyOTPLabel(otp) {
        this.elements.lblOTP().should('have.text', otp)
    }   
    verifyOTPInput() {
        this.elements.inpOTP().should('be.visible')
    }
    clickOTPInput() {
        this.elements.inpOTP().click()
    }
    verifyGSTPortalIcon() {
        this.elements.iconGSTPortal().should('be.visible')
    }
    verifyGSTPortalText() {
        this.elements.txtGSTPortal().should('be.visible')
    }   
    verifyGSTPortalLink () {
        this.elements.lnkGSTPortal().should('be.visible')
    }
    clickGSTPortalLink() {
        this.elements.lnkGSTPortal().click()
    }
    verifySubmitButton(submit) {
        this.elements.btnSubmit().should('have.text', submit)
    }
    clickSubmitButton() {
        this.elements.btnSubmit().click()
    }
}

export const gstVerificationPasswordLoginPage = new GSTVerificationPasswordLoginPage()