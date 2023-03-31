/// <reference types = "cypress" />

export class HowToUploadViaDigiLockerPage {

    details = {
        zeplin: () => '', //TODO : Zeplin Link
        overflow: () => '',//TODO :Overflow Link
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.Bdocs.how_upload_digi_header"]'),
        lnkGoBack: () => cy.get('[data-cy="goBackBtn"]'),
        imgOfDigiAadhar: () => cy.get('[class="skins__UploadImg-r1kr7v-9 eKpMwr"]'),
        lblSteps: () => cy.get('[data-cy="app.components.Bdocs.how_upload_digi_title"]'),
        subTextOfSteps1: () => cy.get('[data-cy="app.components.Bdocs.how_upload_digi_locker_service_step1"]'),
        subTextOfSteps2: () => cy.get('[data-cy="app.components.Bdocs.how_upload_digi_locker_service_step3"]'),
        subTextOfSteps3: () => cy.get('[data-cy="app.components.Bdocs.how_upload_digi_locker_service_step4"]'),
        lnkDontHaveADigilockerAccount: () => cy.get('[data-cy="app.components.Bdocs.sign_upto_digi_locker"]'),
        chkBoxConsent: () => cy.get('[data-cy="check_icon"]'),
        txtConsentSubmit: () => cy.get('[data-cy="checkboxText"]'),
        btnSignInToDigiLocker: () => cy.get('[data-cy="app.components.Bdocs.sign_in_digi_locker"]'),
    }
    // PageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    clickGoBacklnk() {
        this.elements.lnkGoBack().click()
    }
    verifyDigiAadharImg() {
        this.elements.imgOfDigiAadhar().should('have.css', 'Digi-Aadhar')
    }
    // lblSteps 
    verifyStepsLabel(lblSteps) {
        this.elements.lblSteps().should('have.text', lblSteps)
    }
    verifysubTextOfSteps1(subTextOfSteps1) {
        this.elements.subTextOfSteps1().should('have.text', subTextOfSteps1)
    }
    verifysubTextOfSteps2(subTextOfSteps2) {
        this.elements.subTextOfSteps2().should('have.text', subTextOfSteps2)
    }
    verifysubTextOfSteps3(subTextOfSteps3) {
        this.elements.subTextOfSteps3().should('have.text', subTextOfSteps3)
    }
    verifyDontHaveADigilockerAccountLink(text) {
        this.elements.lnkDontHaveADigilockerAccount().should('have.text', text)
    }
    clickDontHaveADigilockerAccountLink() {
        this.elements.lnkDontHaveADigilockerAccount().click()
    }
    //chkBox
    selectConsent() {
        this.elements.chkBoxConsent().click({ multiple: true })
    }
    // txtConsentSubmit
    verifyConsentSubmitText(txtConsentSubmit) {
        this.elements.txtConsentSubmit().should('have.text', txtConsentSubmit)
    }
    //btn signin
    verifySignintoDigiLockerButtonText(SignintoDigiLocker) {
        this.elements.btnSignInToDigiLocker().should('have.text', SignintoDigiLocker)
    }

    clickSignInToDigiLockerButton() {
        this.elements.btnSignInToDigiLocker().click()
    }

}

export const howToUploadViaDigiLockerPage = new HowToUploadViaDigiLockerPage()