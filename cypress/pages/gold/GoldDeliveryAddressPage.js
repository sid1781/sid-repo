/// <reference types = "cypress" />

export class GoldDeliveryAddressPage {

    details = {
        zeplin: () => 'https://zpl.io/9qkzpDW',
        overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=1e4ba720',    
    }
    elements ={
        pageTitle : () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblPinCode : () => cy.get('[data-cy="label_picncode_checks"]'),
        iconPinCode : () => cy.get('[]'),
        inpPinCode : () => cy.get('[data-cy="input_picncode_checks"]'),
        lblApplicableAddress : () => cy.get('[]'),
        rbAddress : () => cy.get('[]'),
        txtFullAddress : () => cy.get('[]'),
        btnAddNewAddress : () => cy.get('[]'),
        btnConfirm : () => cy.get('[]'),
    }
    verifyTitlePage(title){
        this.elements.pageTitle().should('have.text',title)
    }
    verifyPincodeLabel(text){
        this.elements.lblPinCode().should('have.text',text)
    }
    verifyPincodeIcon(){
        this.elements.iconPinCode().should('be.visible')
    }
    verifyPincodeInput(text){
        this.elements.inpPinCode().should('have.text',text)
    }
    verifyApplicableAddresssLabel(text){
        this.elements.lblApplicableAddress().should('have.text',text)
    }
    clickyAddressRadioButton(){
        this.elements.rbAddress().click
    }
    verifyFullAddressText(text){
        this.elements.txtFullAddress().should('have.text',text)
    }
    clickAddNewAddressButton(){
        this.elements.btnAddNewAddress().click()
    }
    clickConfirmButton(){
        this.elements.btnConfirm().click()
    }
}

export const goldDeliveryAddressPage = new GoldDeliveryAddressPage()