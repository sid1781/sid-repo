/// <reference types = "cypress" />

export class EmploymentVerificationInfoPage {

    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="titleSection"]'),
        imgEmploymentVerification: () => cy.get('[]'),
        lblSteps: () => cy.contains('div','STEPS'),
        lblStep1: () => cy.get('[data-cy="app.components.ExtraDetails.EmploymentVerification.step_1"]'),
        lblStep2: () => cy.get('[data-cy="app.components.ExtraDetails.EmploymentVerification.step_2"]'),
        lblStep3: () => cy.get('[data-cy="app.components.ExtraDetails.EmploymentVerification.step_3"]'),
        lblStep4: () => cy.get('[data-cy="app.components.ExtraDetails.EmploymentVerification.step_4"]'),
        lblStep5: () => cy.get('[data-cy="app.components.ExtraDetails.EmploymentVerification.step_5"]'),
        lblConsentText: () => cy.get('[data-cy="app.containers.Bhive.Consent.terms"]'),
        btnContinue: () => cy.contains('button','Continue')

    }
    verifyPageTitle(pageTitle) {
        this.elements.pageTitle().should('contain.text', pageTitle)
    }
    verifyStepsLabel(steps) {
        this.elements.lblSteps().should('contain.text',steps)
    }
    verifyStep1Label(step1) {
        this.elements.lblStep1().should('contain.text',step1)
    }
    verifyStep2Label(step2) {
        this.elements.lblStep2().should('contain.text',step2)
    }
    verifyStep3Label(step3) {
        this.elements.lblStep3().should('contain.text',step3)
    }
    verifyStep4Label(step4) {
        this.elements.lblStep4().should('contain.text',step4)
    }
    verifyStep5Label(step5) {
        this.elements.lblStep5().should('contain.text',step5)
    }
    verifyConsentTextLabel(consenttext) {
        this.elements.lblConsentText().should('contain.text',consenttext)
    }
    clickOnContinueBtn(){
        this.elements.btnContinue().click({force : true})
    }
}

export const employmentVerificationInfoPage = new EmploymentVerificationInfoPage