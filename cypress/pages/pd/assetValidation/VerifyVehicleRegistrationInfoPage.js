/// <reference types = "cypress" />
export class VerifyVehicleRegistrationInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/2vvmAdY',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.vrc_title_1"]'),
        subTextPageTitle: () => cy.get('[data-cy="eventDesc"]'),
        iconVerifyVehicleRegistration: () => cy.get('[data-cy="titleImg"]'),
        lblSteps: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.steps"]'),
        subTxt1Steps: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.vrc_info_s1"]'),
        subTxt2Steps: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.vrc_info_step2"]'),
        infoVerifyVehicleRegistration: () => cy.get('[data-cy="label_app.components.ProcessingFeeReduction.vrc_desc"]'),
        txtConsentTermsAndConditions: () => cy.get('[]'),
        btnContinue: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.off_info_con"]')
    }
    verifyPageTitle(pageTitle) {
        this.elements.pageTitle().should('contain.text', pageTitle)
    }
    verifySubTextOfPageTitle(subtxt) {
        this.elements.subTextPageTitle().should('contain.text',subtxt)
    }
    verifyStepsLabel(steps) {
        this.elements.lblSteps().should('contain.text',steps)
    }
    verifySteps1SubText(steps1) {
        this.elements.subTxt1Steps().should('contain.text',steps1)
    }
    verifySteps2SubText(steps2) {
        this.elements.subTxt2Steps().should('contain.text',steps2)
    }
    verifyInfoVehicleRegistrsation(info) {
        this.elements.infoVerifyVehicleRegistration().should('contain.text',info)
    }
    clickOnContinueBtn(){
        this.elements.btnContinue().click({force : true})
    }
}

export const verifyVehicleRegistrationInfoPage = new VerifyVehicleRegistrationInfoPage()