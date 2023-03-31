/// <reference types = "cypress" />

export class VerifyVehicleRegistrationPage {

    details = {
        zeplin: () => 'https://zpl.io/8lzBol6',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.vrc_title"]'),
        inpVehicleNumber: () => cy.get('[data-cy="input_app.components.ProcessingFeeReduction.provide_vrc_no"]'),
        iconVehicleNumber: () => cy.get('[data-cy="img_app.components.ProcessingFeeReduction.provide_vrc_no"]'),
        infoVehicleNumber: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.vehicle_no_ex"]'),
        btnSubmit: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.email_submit_btn"]')
    }

    verifyPageTitle(pageTitle) {
        this.elements.pageTitle().should('contain.text', pageTitle)
    }
    enterVehicleNumber(vehiclenumber) {
        this.elements.inpVehicleNumber().type(vehiclenumber)
    }
    verifyVehicleNumbericon(icon) {
        this.elements.iconVehicleNumber().should('have.attr','src').should('include',icon)
    }
    verifyInfoVehicleNumberText(infovehiclenumber) {
        this.elements.infoVehicleNumber().should('contain.text',infovehiclenumber)
    }
    clickOnSubmitBtn() {
        this.elements.btnSubmit().click()
    }
}

export const verifyVehicleRegistrationPage = new VerifyVehicleRegistrationPage()