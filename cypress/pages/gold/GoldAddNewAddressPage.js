/// <reference types = "cypress" />

export class GoldAddNewAddressPage {
    details = {
        zeplin: () => 'https://zpl.io/KGkQO07',
        overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=1e4ba720',    
    }

    elements ={
        pageTitle : () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblName : () => cy.get('[data-cy="label_app.components.DigitalGold.name_placeholder"]'),
        iconName : () => cy.get('[]'),
        inpName : () => cy.get('[data-cy="input_app.components.DigitalGold.name_placeholder"]'),
        lblMobileNumber : () => cy.get('[data-cy="label_app.components.DigitalGold.mobile_placeholder"]'),
        iconMobile : () => cy.get('[]'),
        inpMobileNumber : () => cy.get('[data-cy="input_app.components.DigitalGold.mobile_placeholder"]'),
        lblPinCode : () => cy.get('[data-cy="label_app.components.DigitalGold.pincode_placeholder"]'),
        iconPinCode : () => cy.get('[]'),
        inpPinCode : () => cy.get('[data-cy="input_app.components.DigitalGold.pincode_placeholder"]'),
        lblAddress1 : () => cy.get('[data-cy="label_app.components.DigitalGold.address1_placeholder"]'),
        iconAddress1 : () => cy.get('[]'),
        inpAddress1 : () => cy.get('[data-cy="input_app.components.DigitalGold.address1_placeholder"]'),
        lblAddress2 : () => cy.get('[data-cy="label_app.components.PersonalInfoLayout.address2_placeholder"]'),
        iconAddress2 : () => cy.get('[]'),
        inpAddress2 : () => cy.get('[data-cy="input_app.components.PersonalInfoLayout.address2_placeholder"]'),
        lblCity : () => cy.get('[data-cy="label_app.components.PersonalInfoLayout.city_placeholder"]'),
        iconCity : () => cy.get('[]'),
        btnSubmitDetails : () => cy.get('[data-cy="app.components.DigitalGold.submit_address_details"]') 
    }
    verifyTitlePage(title){
     this.elements.pageTitle().should('have.text',title)
    }
    verifyNameLabel(text){
        this.elements.lblName().should('have.text',text) 
    }
    verifyNameIcon(){
        this.elements.iconName().should('be.visible')
    }
    verifyNameInput(text){
        this.elements.inpName().should('have.text',text)
    }
    verifyMobileNumberLabel(text){
        this.elements.lblMobileNumber().should('have.text',text)
    }
    verifyMobileIcon(){
        this.elements.iconMobile().should('be.visible')
    }
    verifyMobileNumberInput(number){
        this.elements.inpMobileNumber().should('have.text',number)
    }
    verifyPincodeLabel(text){
        this.elements.lblPinCode().should('have.text',text)
    } 
    verifyPinCodeIcon(){
        this.elements.inpPinCode().should('be.visible')
    }
    verifyPinCodeInput(value){
        this.elements.inpPinCode().should('have.text',value)
    }
    verifyAddress1Label(text){
        this.elements.lblAddress1().should('have.text',text)
    }
    verifyAddress1Icon(){
        this.elements.iconAddress1().should('be.visible')
    }
    verifyAddress1Input(text){
        this.elements.inpAddress1().should('have.text',text)
    }
    verifyAddress2Label(text){
        this.elements.lblAddress2().should('have.text',text)
    }
    verifyAddress2Icon(){
        this.elements.iconAddress2().should('be.visible')
    }
    verifyAddress2Input(text){
        this.elements.inpAddress2().should('have.text',text)
    }
    verifyCityLabel(text){
        this.elements.lblCity().should('have.text',text)
    }
    verifyCityIcon(){
        this.elements.iconCity().should('be.visible')
    }
    verifyCityNameInput(text){
        this.elements.inpCityName().should('have.text',text)
    }
    verifySubmitDetailsButton(txt){
     this.elements.btnSubmitDetails().should('have.text', txt)
    }
    clickSubmitDetailsButton(){
        this.elements.btnSubmitDetails().click()
    }
}

export const goldAddNewAddressPage = new GoldAddNewAddressPage()
