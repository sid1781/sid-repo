/// <reference types = "cypress" />

export class VerifyElectricityConnectionPage {

    details = {
        zeplin: () => 'https://zpl.io/09WnQMQ',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="elecConnection"]'),
        inpSelectElectricityBoard: () => cy.get('[type="text"]'),
        linkSelectElectricityBoard: () => cy.get('[]'),
        txtElectricityBoard: () =>cy.get('[data-cy="bankList_3"]'),
        btnContinue: () =>cy.get('[data-cy="app.components.ProcessingFeeReduction.off_info_con"]'),
        iconSelectElectricityBoard: () => cy.get('[]'),
        inpRegistrationNumber: () => cy.get('[data-cy="input_app.components.ProcessingFeeReduction.ebb_form_regnum_ph"]'),
        iconRegistrationNumber: () => cy.get('[]'),
        iconInfoVerifyElectricityConnection: () => cy.get('[data-cy="img_app.components.ProcessingFeeReduction.electricity_info"]'),
        infoVerifyElectricityConnection: () => cy.get('[data-cy="label_app.components.ProcessingFeeReduction.electricity_info"]'),
        iconVerifyElectricityConnectionConsent: () => cy.get('[]'),
        lblVerifyElectricityConnectionConsent: () => cy.get('[]'),
        btnSubmit: () => cy.contains('button','Submit'),
    }

    verifypageTitle(title) {
        this.elements.pageTitle().should('contains.text', title)
    }

    EnterSelectElectricityBoardInput() {
        this.elements.inpSelectElectricityBoard().eq(0).click()
    }
    selectElectricityBoardtext(){
        this.elements.txtElectricityBoard().click()
    }
    clickContinue(){
        this.elements.btnContinue().click()
    }
    EnterRegistrationNumberInput() {
        this.elements.inpSelectElectricityBoard().eq(1).click().type(123456)
    }

    verifySubmitButton(submit) {
        this.elements.btnSubmit().should('have.text', submit)
    }

    clickSubmitButton() {
        this.elements.btnSubmit().click()
    }
}

export const verifyElectricityConnectionPage = new VerifyElectricityConnectionPage()