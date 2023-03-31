
export class MobileInputPage {

    details = {
        zeplin: () => '',//TODO : Zeplin Link 
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=9e3d48bf'
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.MobileSignin.welcome_to_txt"]'),
        iconKreditBee: () => cy.get('img'),
        imgBackground: () => cy.get('div'),
        lblLogin: () => cy.get('[data-cy="app.components.MobileSignin.signin_mobile_head"]'),
        lblEnterYourPhoneNumber: () => cy.get('[data-cy="app.components.MobileSignin.enter_phone"]'),
        lblCountryCode: () => cy.get('[data-cy="app.components.Common.mob_country_code"]'),
        inpMobileNumber: () => cy.get('[data-cy="app.components.MobileSignin.mob_digit"]'),
        msgMobileNumber: () => cy.get('[data-cy="errMsg"]'),
        chkBoxConsent: () => cy.get('[data-id="checkBox"'),
        txtConsent: () => cy.get('[data-cy="checkboxText"]'),
        lnkPrivacyPolicy: () => cy.get('[data-cy="app.components.MobileSignin.privacy_policy"]'),
        lnkTermsAndConditions: () => cy.get('[data-cy="app.components.MobileSignin.terms_and_condition"]'),
        btnContinue: () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]'),
    }


    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyKreditBeeIcon() {
        this.elements.iconKreditBee().should('have.attr', 'alt').should('include', 'brand-logo')
    }

    verifyBackgroundImg() {
        this.elements.imgBackground().should('have.css', 'background-image')
    }

    verifyLoginLabel(loginlabel) {
        this.elements.lblLogin().should('have.text', loginlabel)
    }

    verifyEnterYourPhoneNumberLabel(enteryournumber) {
        this.elements.lblEnterYourPhoneNumber().should('have.text', enteryournumber)
    }

    verifyCountryCodeLabel(countrycode) {
        this.elements.lblCountryCode().should('have.text', countrycode)
    }

    enterMobileNumber(mobilenumber) {
        this.elements.inpMobileNumber().type(mobilenumber)
    }

    clearMobileNumber() {
        this.elements.inpMobileNumber().clear()
    }

    verifyMobileNumberMessage(messagemobilenumber) {
        this.elements.msgMobileNumber().should('have.text', messagemobilenumber)
    }

    uncheckConsentChkBox() {
        this.elements.chkBoxConsent().should('have.attr', 'data-id', 'checkBox')
    }

    clickConsentChkBox() {
        this.elements.chkBoxConsent().click()
    }
    //TODO
    verifyConsentChkBoxState(state) {
        if (state == 'checked') {
            this.elements.chkBoxConsent().should('have.attr', 'data-value', 'checked')
        } else {
            this.elements.chkBoxConsent().should('have.attr', 'data-value', 'unchecked')
        }
    }

    verifyConsentText(consenttext) {
        this.elements.txtConsent().should('contain.text', consenttext)
    }

    verifyPrivacyPolicyText(privacypolicy) {
        this.elements.lnkPrivacyPolicy().should('have.text', privacypolicy)
    }

    clickPrivacyPolicyLink() {
        this.elements.lnkPrivacyPolicy().click()
    }

    verifyTermsAndConditionsText(termsandcondition) {
        this.elements.lnkTermsAndConditions().should('have.text', termsandcondition)
    }

    clickTermsAndConditionsLink() {
        this.elements.lnkPrivacyPolicy().click()
    }

    verifyContinueText(continuetxt) {
        this.elements.btnContinue().should('have.text', continuetxt)

    }

    verifyContinueTextDisabled() {
        this.elements.btnContinue().should('be.disabled')
    }

    clickContinueBtn() {
        this.elements.btnContinue().click()
    }
    //TODO
    bkPerformLogin(mobileNumber) {
        this.enterMobileNumber(mobileNumber)
        this.clickConsentChkBox()
        this.clickContinueBtn()
    }

    bkPerformCheckBoxAndContinueValidation(mobileNumber) {
        let inputNumber = 0;
        if (inputNumber) {
            this.elements.inpMobileNumber().type(mobileNumber)
            this.elements.chkBoxConsent().should('have.attr', 'data-value', 'unchecked')
            this.verifyContinueTextDisabled()
        } else if (inputNumber != 0) {
            this.verifyContinueTextDisabled()
            this.elements.chkBoxConsent().should('have.attr', 'data-value', 'unchecked')
        }
        else {
            this.elements.inpMobileNumber().type(mobileNumber)
            this.elements.inpMobileNumber().clear()
            this.elements.chkBoxConsent().should('have.attr', 'data-value', 'unchecked')
            this.verifyContinueTextDisabled()
        }
    }

}

export const mobileInputPage = new MobileInputPage()
