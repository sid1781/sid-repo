/// <reference types = "cypress" />

export class GSTVerificationProvideGSTINPage {

    details = {
        zeplin: () => 'https://zpl.io/dxWzd3l',
        overflow: () => 'https://overflow.io/s/3IH4JZ6J/?node=b7e5d24f',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.extraDetails.gst_no_title"]'),
        iconGSTINNumber: () => cy.get('[data-cy="img_undefined"]'),
        txtGSTINNumber: () => cy.get('[data-cy="label_undefined"]'),
        lblGSTIN: () => cy.get('[data-cy="label_app.components.extraDetails.gstin_placeholder"]'),
        inpGSTINNumber: () => cy.get('[data-cy="input_app.components.extraDetails.gstin_placeholder"]'),
        //inpGSTINNumber: () => cy.get('[data-cy="input_app.components.extraDetails.gst_num_placeholder"]'),//data-cy changes
        txtExample: () => cy.get('[data-cy="app.components.extraDetails.gstin_no_example"]'),
        valGSTINExample: () => cy.get('[data-cy="app.components.extraDetails.gstin_no_example"]'),
        btnContinue: () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]'),
    }
                              
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    verifySTINNumberIcon() {
        this.elements.iconGSTINNumber().should('be.visible')
    }
    verifyGSTINNumberText(GSTINnumber) {
        this.elements.txtGSTINNumber().should('have.text', GSTINnumber)
    }
    verifyGSTINLabel(GSTIN) {
        this.elements.lblGSTIN().should('have.text', GSTIN)
    }
    verifyGSTINNumberInput(gstno) {
        this.elements.inpGSTINNumber().type(gstno)
    }
    verifyExampleText() {
        this.elements.txtExample().should('be.visible')
    }
    verifyGSTINExampleValue() {
        this.elements.valGSTINExample().should('be.visible')
    }
    verifyContinueButton(button) {
        this.elements.btnContinue().should('have.text', button)
    }
    clickContinueButton() {
        this.elements.btnContinue().click()
    }
}

export const gstVerificationProvideGSTINPage = new GSTVerificationProvideGSTINPage()