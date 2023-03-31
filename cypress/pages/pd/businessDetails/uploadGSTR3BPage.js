/// <reference types = "cypress" />

export class UploadGSTR3BPage {

    details = {
        zeplin: () => 'https://zpl.io/AmdLmvq',
        overflow: () => 'https://overflow.io/s/3IH4JZ6J/?node=b7e5d24f&prototype',
    }

    elements = {
        pageTitle : () => cy.get('[data-cy="app.components.extraDetails.pd_off_gstr_name_pd"]'),
        iconUploadGSTR3B : () => cy.get('[data-cy="titleImg"]'),
        txtSteps : () => cy.get('[data-cy="app.components.extraDetails.steps"]'),
        subTxtStep1 : () => cy.get('[data-cy="app.components.extraDetails.pd_off_gstr_step_1"]'),
        subTxtStep2 : () => cy.get('[data-cy="app.components.extraDetails.pd_off_gstr_step_2"]'),
        lblOfferValidFor : () => cy.get('[data-cy="app.components.extraDetails.offer_valid_for"]'),
        valOfferValidFor : () => cy.get('[data-cy="app.components.extraDetails.for_business_shop_owners"]'),
        iconInfoGST : () => cy.get('[data-cy="img_app.components.extraDetails.gstr_desc_name"]'),
        lblInfoGST : () => cy.get('[data-cy="label_app.components.extraDetails.gstr_desc_name"]'),
        // infoGSTR3B : () => cy.get(), -- This component are removed
        lnkTermsAndConditions : () => cy.get('[data-cy="app.components.Common.tandcText"]'),
        lnkPrivacyPolicy : () => cy.get('[data-cy="app.components.Common.privacyPolicyText"]'),
        btnContinue : () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]')
    }

        verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    }

    verifyUploadGSTR3BIcon() {
        this.elements.iconUploadGSTR3B().should('be.visible')
    }

    verifyStepsText(STEPS) {
        this.elements.txtSteps().should('have.text', STEPS)
    }

    verifyStep1SubText() {
        this.elements.subTxtStep1().should('be.visible')
    }

    verifyStep2SubText() {
        this.elements.subTxtStep2().should('be.visible')
    }

    verifyOfferValidForLabel(offervalid) {
        this.elements.lblOfferValidFor().should('have.text', offervalid)
    }

    verifyOfferVaildForValue() {
        this.elements.valOfferValidFor().should('be.visible')
    }

    verifyInfoGSTIcon() {
        this.elements.iconInfoGST().should('be.visible')
    }

    verifyInfoGSTLabel(infoGST) {
        this.elements.lblInfoGST().should('have.text',infoGST)
    }

    verifyTermsAndConditionsLink() {
        this.elements.lnkTermsAndConditions().should('be.visible')
    }

    clickTermsAndConditionsLink() {
        this.elements.lnkTermsAndConditions().click()
    }

    verifyPrivacyPolicyLink() {
        this.elements.lnkPrivacyPolicy().should('be.visible')
    }

    clickPrivacyPolicyLink() {
        this.elements.lnkPrivacyPolicy().click()
    }

    verifyContinueButton(Continue) {
        this.elements.btnContinue().should('have.text', Continue)
    }

    clickContinueButton() {
        this.elements.btnContinue().click()
    }
}

export const uploadGSTR3BPage = new UploadGSTR3BPage()