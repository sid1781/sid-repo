/// <reference types = "cypress" />

export class GSTVerificationInfoPage {

    details = {
        zeplin: () => 'no VD found',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=23bf661f',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.extraDetails.pd_off_gst_name"]'),
        subTxtAvailDiscount: () => cy.get('[data-cy="pdEventDesc"]'),
        iconGSTVerification: () => cy.get('[]'),
        lblSteps: () => cy.get('[data-cy="app.components.extraDetails.steps"]'),
        subtxtInfo: () => cy.get('[data-cy="app.components.extraDetails.pd_off_gst_step_1"]'),
        lblOfferValidFor: () => cy.get('[data-cy="app.components.extraDetails.offer_valid_for"]'),
        lblInfoBox: () => cy.get('[]'),
        lblConsentTermsSubText: () => cy.get('[]'),
        iconConsentTermsSubText: () => cy.get('[]'),
        btnContinue: () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]')
    }
    
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    
    verifyAvailDiscountSubText(subtext) {
        this.elements.subTxtAvailDiscount().should('have.text', subtext)
    }
    
    verifyGSTVerificationIcon() {
        this.elements.iconGSTVerification()
    }
    
    verifyStepsLabel(steps) {
        this.elements.lblSteps().should('have.text', steps)
    }
    
    verifyInfoSubText(subtext) {
        this.elements.subtxtInfo().should('have.text', subtext)
    }
    
    verifyOfferValidForLabel(valid) {
        this.elements.lblOfferValidFor().should('have.text', valid)
    }
    
    verifyInfoBoxlabel() {
        this.elements.lblInfoBox()
    }
    
    verifyConsentermsSubText() {
        this.elements.lblConsentTermsSubText()
    }
    
    verifyConsentTermsSubtextIcon() {
        this.elements.iconConsentTermsSubText()
    }
    
    verifyContinueButton(text) {
        this.elements.btnContinue().should('have.text', text)
    }
    
    clickContinueButton() {
        this.elements.btnContinue().click()
    }
}

export const gstVerificationInfoPage = new GSTVerificationInfoPage()