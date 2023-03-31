/// <reference types = "cypress" />

export class SelectServiceProviderPage {

    details = {
        //technically , we dont have VD on zeplin.its an alternative
        zeplin: () => 'https://zpl.io/Amd0Jv8',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.select_service_provider"]'),
        inpSelectServiceProvider: () => cy.get('[data-cy="label_app.components.ProcessingFeeReduction.search"]'),
        imgOfSelectServiceProvider: () => cy.get('[]'),
        iconOfSearch: () => cy.get('[]'),
        btnContinue: () => cy.contains('Continue'),
        ddListOfServices: () => cy.get('[data-cy="bankList_4"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    clickListOfServicesDropDown() {
        this.elements.ddListOfServices().click()
    }

    clickContinueButton() {
        this.elements.btnContinue().click()
    }
}

export const selectServiceProviderPage = new SelectServiceProviderPage()