/// <reference types = "cypress" />

export class SignServicePage {

    details = {
        zeplin: () => 'https://zpl.io/299oB4B',
        zeplin_variation: () => 'https://zpl.io/anX4wKx',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        PageTitle: () => cy.get('[data-cy="app.components.KbEsignOtp.sign_service"]'),
        lblTransactionID: () => cy.get('[data-cy="app.components.KbEsignOtp.loan_pdf_details_title1"]'),
        valTransactionID: () => cy.get('[data-cy="value_0"]', { timeout: 2000 }),
        lblDataAndTime: () => cy.get('[data-cy="app.components.KbEsignOtp.loan_pdf_details_title2"]'),
        valDataAndTime: () => cy.get('[data-cy="value_1"]', { timeout: 2000 }),
        lblDeviceID: () => cy.get('[data-cy="app.components.KbEsignOtp.loan_pdf_details_title3"]'),
        valDeviceID: () => cy.get('[data-cy="value_2"]'),
        lblIPAddress: () => cy.get('[data-cy="app.components.KbEsignOtp.ip_address"]'),
        valIPAddress: () => cy.get('[data-cy="value_3"]'),
        chkBoxConsent: () => cy.get('[data-id="checkBox"]'),
        txtConsentRead: () => cy.get('[data-cy="checkboxText_tcKB"]'),
        txtConsentUnderstood: () => cy.get('[data-cy="checkboxText_tcKB1"]'),
        txtConsentLegalAndBinding: () => cy.get('[data-cy="checkboxText_tcKB2"]'),
        btnBack: () => cy.get('button').eq(0),
        btnContinue: () => cy.get('[data-cy="signNowBtn"]'),
        btnSAContinue: () => cy.get('[data-cy="app.components.Signbee.continue_btn_text"]')
    }

    // PageTitle
    verifyPageTitle(title) {
        this.elements.PageTitle().should('have.text', title)
    }
    // lblTransactionID 
    verifyTransactionIDLabel(lblTransactionID) {
        this.elements.lblTransactionID().should('have.text', lblTransactionID)
    }
    // valTransactionID 
    verifyTransactionIDValue(valTransactionID) {
        this.elements.valTransactionID().should('have.text', valTransactionID)
    }
    // lblDataAndTime 
    verifyDateAndTimeLabel(lblDataAndTime) {
        this.elements.lblDataAndTime().should('have.text', lblDataAndTime)
    }
    // valDataAndTime 
    verifyDateAndTimeValue(valDataAndTime) {
        this.elements.valDataAndTime().should('have.text', valDataAndTime)
    }
    // lblDeviceID 
    verifyDeviceIDLabel(lblDeviceID) {
        this.elements.lblDeviceID().should('have.text', lblDeviceID)
    }
    // valDeviceID 
    verifyDeviceIDValue(valDeviceID) {
        this.elements.valDeviceID().should('have.text', valDeviceID)
    }
    // lblIPAddress 
    verifyIPAddressLabel(lblIPAddress) {
        this.elements.lblIPAddress().should('have.text', lblIPAddress)
    }
    // valIPAddress 
    verifyIPAddressValue(valIPAddress) {
        this.elements.valIPAddress().should('have.text', valIPAddress)
    }
    //chkBox
    selectConsent() {
        this.elements.chkBoxConsent().click({ multiple: true })
    }
    // txtConsentRead 
    verifyConsentReadText(txtConsentRead) {
        this.elements.txtConsentRead().should('have.text', txtConsentRead)
    }
    // txtConsentUnderstood 
    verifyConsentUnderstoodText(txtConsentUnderstood) {
        this.elements.txtConsentUnderstood().should('have.text', txtConsentUnderstood)
    }
    // txtConsentLegalAndBinding 
    verifyConsentLegalAndBindingText(txtConsentLegalAndBinding) {
        this.elements.txtConsentLegalAndBinding().should('have.text', txtConsentLegalAndBinding)
    }
    // btnBack 
    verifyBackButtonText(btnBack) {
        this.elements.btnBack().should('have.text', btnBack)
    }

    clickBackButton() {
        this.elements.btnBack().click()
    }
    // btnContinue 
    verifyContinueButtonText(btnContinue) {
        this.elements.btnContinue().should('have.text', btnContinue)
    }

    clickContinueButton() {
        this.elements.btnContinue().click()
    }
    //btnSAContinue
    verifySAContinueButtonText(btnContinue) {
        this.elements.btnSAContinue().should('have.text', btnContinue)
    }

    clickContinueSAButton() {
        this.elements.btnSAContinue().click()
    }

    clickConsentReadText() {
        this.elements.txtConsentRead().click()
    }

    clickConsentUnderstoodText() {
        this.elements.txtConsentUnderstood().click()
    }

    clickConsentLegalAndBindingText() {
        this.elements.txtConsentLegalAndBinding().click()
    }

}

export const signServicePage = new SignServicePage