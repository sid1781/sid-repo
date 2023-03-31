/// <reference types = "cypress" />

export class GSTVerificationStepsPage {

    details = {
        zeplin: () => 'https://zpl.io/GEgGDjJ',
        overflow: () => 'https://overflow.io/s/3IH4JZ6J/?node=b7e5d24f',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.extraDetails.gst_details_ver"]'),
        iconGSTDetailsVerification: () => cy.get('[data-cy="titleImg"]'),
        txtCreditLimit: () => cy.get('[data-cy="pdEventDesc"]'),
        txtProcessingFee: () => cy.get('[data-cy="pdEventDesc"]'),
        txtSteps: () => cy.get('[data-cy="app.components.extraDetails.steps"]'),
        subTxtStep1: () => cy.get('[data-cy="app.components.extraDetails.gst_ver_step1"]'),
        subTxtStep2: () => cy.get('[data-cy="app.components.extraDetails.gst_ver_step2"]'),
        iconGSTRegistration: () => cy.get('[data-cy="img_app.components.extraDetails.gstr_desc_name"]'),
        txtGSTRegistration: () => cy.get('[data-cy="label_app.components.extraDetails.gstr_desc_name"]'),
        lnkTermsAndConditions : () => cy.get('[data-cy="app.components.Common.tandcText"]'),
        lnkPrivacyPolicy : () => cy.get('[data-cy="app.components.Common.privacyPolicyText"]'),
        btnContinue : () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]').eq(1)
    }

    verifyPagetitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    verifyGSTDetailsVerificationIcon() {
        this.elements.iconGSTDetailsVerification().should('be.visible')
    }
    verifyCreditLimitText() {
        this.elements.txtCreditLimit().should('have.text', creditlimit)
    }
    verifyProcessingFeeText(processingfee) {
        this.elements.txtProcessingFee().should('have.text', processingfee)
    }
    verifyStepsText(steps) {
        this.elements.txtSteps().should('have.text', steps)
    }
    verifySubTextStep1Text(subtext1) {
        this.elements.subTxtStep1().should('have.text', subtext1)
    }
    verifySubTextStep2Text(subtext2) {
        this.elements.subTxtStep2().should('have.text', subtext2)
    }
    verifyGSTRegistrationIcon() {
        this.elements.iconGSTRegistration().should('be.visible')
    }
    verifyGSTRegistrationText(registrationtext) {
        this.elements.txtGSTRegistration().should('have.text', registrationtext)
    }
    verifyTermsAndConditionsLink(termsandConditions) {
        this.elements.lnkTermsAndConditions().should('have.text', termsandConditions)
    }
    clickTermsAndConditionsLink() {
        this.elements.lnkTermsAndConditions().click()
    }
    verifyPrivacyPolicyLink(privacypolicy) {
        this.elements().lnkPrivacyPolicy().should('have.text', privacypolicy)
    }
    clickPrivacyPolicyLink() {
        this.elements.lnkPrivacyPolicy().click()
    }
    verifyContinueButton(button) {
        this.elements.btnContinue().should('have.text', button)
    }
    clickContinueButton() {
        this.elements.btnContinue().click()
    }
}

export const gstVerificationStepsPage = new GSTVerificationStepsPage()