///<reference types="cypress" />

export class CSROTPInputPage{

    details = {
        zeplin : () => 'https://zpl.io/noP5wBO',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=6f089f4d',
    }

    elements = {
        btnBack : () => cy.get('[data-cy="goBackBtn"]'),
        pageTitle : () => cy.get('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
        iconHelp : () => cy.get('[]'), 
        lblOTPHeading : () => cy.get('[data-cy="app.components.CreditScore.ks_otp_mob"]'),
        txtMobileNumber : () => cy.get('[]'),
        iconOTP : () => cy.get('[]'),
        inpOTP: () => cy.get('[data-cy="input_app.components.CreditScore.otp_placeholder"]'),        
        txtTimer: () => cy.get('[]'),
        txtConsent: () => cy.get('[data-cy="checkboxText"]'),
        chkBoxConsent: () => cy.get('[data-id="checkBox"]'),
        lnkTermsAndConditions: () => cy.get('[data-cy="checkboxLink"]'),
        btnSubmit: () => cy.get('[data-cy="app.components.Common.submit_btn_caps"]'),
        // Post OTP Submit Elements
        iconWaiting: () => cy.get('[]'),
        lblAwaitingHeading: () => cy.get('[]'),
        txtAwaitingInfo: () => cy.get('[]'),
        btnRefresh : () => cy.get('[]'),
    }
    
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyOTPHeadingLabel(label) {
        this.elements.lblOTPHeading ().should('have.text', label)
    }

    verifyMobileNumber(number) {
        this.elements.txtMobileNumber().should('have.text', number)
    }

    verifyPresenceOfOTPIcon() {
        this.elements.iconOTP().should('exist')
    }

    verifyOTPInputPlacehodlerText(placeholder) {
        // TODO - write a func to verify OTP present in placeholder
    }

    enterOTP(otp) {
        this.elements.inpOTP().type(otp)
    }

    clearOTP() {
        this.elements.inpOTP().clear()
    }

    verifyTimeText() {
        // TODO functionality to verfiy the timer - presence
    }
    verifyTimeFunctionality() {
        // TODO functionality to verfiy the timer - countdown
    }

    verifyConsentText(consentText) {
        this.elements.txtConsent().should('have.text', consentText)
    }

    checkConsentBox() {
        this.elements.chkBoxConsent().click()
    }

    uncheckConsentBox() {
        this.elements.txtConsent().click()
    }

    clickTermsAndConditionsLink() {
        this.elements.lnkTermsAndConditions().click()
    }

    clickSubmitBtn() {
        this.elements.btnSubmit().click()
    }

    verifyPresenceOfWaitingIcon() {
        this.elements.iconWaiting().should('exist')
    }

    verifyAwaitingInfoText(text) {
        this.elements.txtAwaitingInfo().should('have.text', text)
    }
    
    clickRefreshBtn(){
        this.elements.btnRefresh().click();
    }
    clickbackButton(){
        this.elements.btnBack().click()
    } 
}

export const  csrOTPInputPage = new CSROTPInputPage

