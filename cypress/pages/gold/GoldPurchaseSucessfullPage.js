/// <reference types = "cypress" />

export class GoldPurchaseSucessfulPage {

    elements ={
        lblGoldPurchaseSucessful : () => cy.get('[data-cy="app.components.DigitalGold.gold_purchase_successful"]'),
        iconSellGoldSucessful : () => cy.get('[data-cy="status_ic-success"]'),
        lblTransactionID : () => cy.get('[data-cy="app.components.DigitalGold.transaction_id"]'),
        valTransactionID : () => cy.get('[data-cy="Transaction_id_1722121"]'),
        lblGoldWeight : () =>  cy.get('[]'),
        valGoldWeight : () =>  cy.get('[]'),
        lblGoldPrice : () =>  cy.get('[]'),
        valGoldPrice : () =>  cy.get('[]'),
        lblGST :()=> cy.get('[]'),
        lblTotalPrice : () => cy.get('[]'),
        lblDownloadInvoice : () =>  cy.get('[]'),
        lblDownloadInvoice : () =>  cy.get('[]'),
        btnOK : () => cy.get('[data-cy="okBtn"]'),   
    }
    verifyGoldPurchaseSucessfull(txt){
        this.elements.lblGoldPurchaseSucessful().should('have.text', txt)
    }

}

export const goldPurchaseSucessfulPage = new GoldPurchaseSucessfulPage()