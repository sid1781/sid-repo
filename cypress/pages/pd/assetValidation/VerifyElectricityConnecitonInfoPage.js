/// <reference types = "cypress" />

export class VerifyElectricityConnectionInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/2vvmo1j',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.extraDetails.elec_connection"]'),
        subTextPageTitle: () => cy.get('[data-cy="eventDesc"]'),
        iconVerifyElectricityConnection: () => cy.get('[data-cy="titleImg"]'),
        lblSteps: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.steps"]'),
        subTxt1Steps: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.ebb_step_1"]'),
        subTxt2Steps: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.ebb_step_2"]'),
        subTxt3Steps: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.ebb_step_3"]'),
        infoVerifyElecricityConnection: () => cy.get('[]'),
        txtVerifyElecricityConnectionConsent: () => cy.get('[data-cy="label_app.components.ProcessingFeeReduction.ebb_desc"]'),
        btnContinue: () => cy.contains('button','Continue')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('contains.text', title)
    }

    verifyPageTitleSubText(sub) {
        this.elements.subTextPageTitle().should('have.text', sub)
    }

    verifyElectricityConnectionIcon() {
        this.elements.iconVerifyElectricityConnection()
    }

    verifyContinuButton(button) {
        this.elements.btnContinue().should('have.text', button)
    }

    clickContinueButton() {
        this.elements.btnContinue().click()
    }
}

export const verifyElectricityConnectionInfoPage = new VerifyElectricityConnectionInfoPage()