/// <reference types = "cypress" />

export class AssetValidationPage {

    details = {
        zeplin: () => 'https://zpl.io/qyPGjw4',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="pd_off_secl_title"]'),
        lblVerifyElectricityConnection: () => cy.get('[data-cy="ebBill"]'),
        subTextOfVerifyElectricityConnection: () => cy.get('[data-cy="cardItemSub"]'),
        imgOfVerifyElectricityConnection: () => cy.get('[data-cy="pgFirstTdcardItem3Img"]'),
        infoTabTextOfVerifyElectricityConnection: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.elec_connection"]'),
        infoTabDescOfVerifyElectricityConnection: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.pd_off_name_eb_bill_desc1"]'),
        lblVerifyVehicleRegistration: () => cy.get('[data-cy="vehicleRC"]'),
        subTextOfVerifyVehicleRegistration: () => cy.get('[data-cy="substr_vehicleRC"]'),
        imgOfVerifyVehicleRegistration: () => cy.get('[data-cy="cardItem3Img_1"]'),
        infoTabTextOfVerifyVehicleRegistration: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.vrc_title"]'),
        infoTabDescOfVerifyVehicleRegistration: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.vehicle_rc_desc1"]'),
        lblGSTVerification: () => cy.get('[]'),
        subTextOfGSTVerification: () => cy.get('[]'),
        imgOfGSTVerification: () => cy.get('[]'),
        infoTabTextOfGSTVerification: () => cy.get('[]'),
        subSmallText: () => cy.get('[]'),
        btnContinue: () => cy.contains('Continue')
    }

    verifyPageTitle(pageTitle) {
        this.elements.pageTitle().should('contain.text', pageTitle)
    }
    verifyElectricityConnectionLabel(electricityconnection) {
        this.elements.lblVerifyElectricityConnection().should('contain.text',electricityconnection)
    }
    verifySubTextElectricityConnectionLabel(subtxt) {
        this.elements.subTextOfVerifyElectricityConnection().should('contain.text',subtxt)
    }
    verifyInfoTabElectricityConnectionText(infotabtxt) {
        this.elements.infoTabTextOfVerifyElectricityConnection().should('contain.text',infotabtxt)
    }
    verifyInfoTabElectricityConnectionDescription(infodesc) {
        this.elements.infoTabDescOfVerifyElectricityConnection().should('contain.text',infodesc)
    }
    verifyVehicleRegistrationLabel(vehiclerc) {
        this.elements.lblVerifyVehicleRegistration().should('contain.text',vehiclerc)
    }
    verifySubTextVehicleRegistrationLabel(subtxt) {
        this.elements.subTextOfVerifyVehicleRegistration().should('contain.text',subtxt)
    }
    verifyInfoTabVehicleRegistrationText(infotabtxt) {
        this.elements.infoTabTextOfVerifyVehicleRegistration().should('contain.text',infotabtxt)
    }
    verifyInfoTabVehicleRegistrationDescription(infodesc) {
        this.elements.infoTabDescOfVerifyVehicleRegistration().should('contain.text',infodesc)
    }
    clickOnVehicleRegistration(){
        this.elements.lblVerifyVehicleRegistration().click()
    }
    clickOnElectricityConnection(){
        this.elements.lblVerifyElectricityConnection().click()
    }
    clickOnContinueBtn(){
        this.elements.btnContinue() .click({ multiple: true, force: true })
    }
}

export const assetValidationPage = new AssetValidationPage