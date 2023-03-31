///<reference types="cypress" />

export class CSROTPInputWebPage {

    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5df388e94802b449b83d18e8',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        btnBack: () =>cy.getIframeBodyWebsite().find('[data-cy="goBackBtn"]'),
        pageTitle: () =>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
        iconHelp: () =>cy.getIframeBodyWebsite().find('[]'),
        lblOTPHeading: () =>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.ks_otp_mob"]'),
        txtMobileNumber: () =>cy.getIframeBodyWebsite().find('[]'),
        iconOTP: () =>cy.getIframeBodyWebsite().find('[]'),
        inpOTP: () =>cy.get('[data-cy="otp"]'),
        txtTimer: () =>cy.getIframeBodyWebsite().find('[]'),
        txtConsent: () =>cy.getIframeBodyWebsite().find('[data-id="checkBox"]'),
        chkBoxConsent: () =>cy.get('[data-id="checkBox"]'),
        lnkTermsAndConditions: () =>cy.getIframeBodyWebsite().find('[data-cy="checkboxLink"]'),
        btnSubmit: () =>cy.get('button'),

        // Post OTP Submit Elements
        iconWaiting: () =>cy.getIframeBodyWebsite().find('[]'),
        lblAwaitingHeading: () =>cy.getIframeBodyWebsite().find('[]'),
        txtAwaitingInfo: () =>cy.getIframeBodyWebsite().find('[]'),
        btnRefresh: () =>cy.getIframeBodyWebsite().find('[]'),

    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyOTPHeadingLabel(label) {
        this.elements.lblOTPHeading().should('have.text', label)
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

    clickRefreshBtn() {
        this.elements.btnRefresh().click();
    }
    clickOnCheckBoxText() {
        this.elements.txtConsent().click()
    }

}

export const csrOTPInputWebPage = new CSROTPInputWebPage