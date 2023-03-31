/// <reference types = "cypress" />

export class GoldDeliveryProcessingPage {
    details = {
        zeplin: () => 'https://zpl.io/wqQgEyK',
        overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=96594aba',    
    }
    details = {
        zeplin: () => '',// TODO: Zeplin need to be updated by UI/UX 
        overflow: () => '',// TODO: Overflow need to be updated    
    }
    elements ={
        pageTitle : () => cy.get('[]'),
        iconOrderProcessing : () => cy.get('[]'),
        lblTransactionID : () => cy.get('[]'),
        valTransactionID : () => cy.get('[]'),
        lblTransactionID : () => cy.get('[]'),
        iconSafeGoldCoin : () => cy.get('[]'),
        lblSafeGoldCoin : () => cy.get('[]'),
        lblProductPrice : () => cy.get('[]'),
        valProductPrice : () => cy.get('[]'),
        lblGoldBalanceUsed : () => cy.get('[]'),
        valGoldBalanceUsed : () => cy.get('[]'),
        lblDeliveryAndMintingCharges : () => cy.get('[]'),
        valDeliveryAndMintingCharges : () => cy.get('[]'),
        txtDeliveryStatus : () => cy.get('[]'),
        iconDeliveryStatus : () => cy.get('[]'),
        btnOK : () => cy.get('[]'),
       
    }
}

export const goldDeliveryProcessingPage = new GoldDeliveryProcessingPage