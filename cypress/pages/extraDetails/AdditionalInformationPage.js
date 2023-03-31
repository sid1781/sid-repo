/// <reference types = "cypress" />

export class AdditionalInformationPage {

    details = {
        zeplin : () => '', // TODO: Zeplin need to be updated by UI/UX 
        overflow : () => '', // TODO: Overflow need to be updated 
    }

    elements = {
        pageTitle : () => cy.get('[data-cy="app.containers.AdditionalInformation.additional_info"]'),
        lblSelectAnyOneStep : () => cy.get('[data-cy="app.containers.AdditionalInformation.select_any_one_steps"]'),
        iconVerifyHouseHoldIncome : () => cy.get('[]'),
        lblVerifyHouseHoldIncome : () => cy.get('[data-cy="additionalInfoTitle0"]'),
        subTxtVerifyHouseHoldIncome : () => cy.get('[data-cy="additionalInfoDesc0"]'),
        lnkVerifyHouseHoldIncome : () => cy.get('[]'),
        iconKreditBeeDisclaimer : () => cy.get('[]'),
        txtKreditBeeDisclaimer : () => cy.get('[]'),
        imgSSLProtectionSecure : () => cy.get('[]'),
        txtSSLProtectionSecure : () => cy.get('[]'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    clickHouseHoldIncomeLabel() {
        this.elements.lblVerifyHouseHoldIncome().click()
    }
}

export const additionalInformationPage = new AdditionalInformationPage()