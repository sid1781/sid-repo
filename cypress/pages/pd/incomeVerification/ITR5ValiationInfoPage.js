
/// <reference types = "cypress" />

export class ITRVValiationInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/ad64Bl1',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        imgITRV: () => cy.get('[]'),
        infoSubText: () => cy.get(),
        lblSteps: () => cy.get(),
        SubTextOfSteps1: () => cy.get(),
        SubTextOfSteps2: () => cy.get(),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        btnContinue: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.off_info_con"]'),

    }

    clickContinueButton() {
        this.elements.btnContinue().click()
    }
}

export const itrvValiationInfoPage = new ITRVValiationInfoPage()