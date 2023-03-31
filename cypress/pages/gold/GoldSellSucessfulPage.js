/// <reference types = "cypress" />

export class GoldSellSucessfulPage {

    details = {
        zeplin: () => 'https://zpl.io/o1W6wkk',
        overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=451f9818',    
    }

    elements ={
        lblSellGoldSucessful : () => cy.get('[data-cy="app.components.DigitalGold.gold_Sell_bank_successful"]'),
        iconSellGoldSucessful : () => cy.get('[]'),
        lblTransactionID : () => cy.get('[data-cy="app.components.DigitalGold.transaction_id"]'),
        valTransactionID : () => cy.get('[data-cy="Transaction_id_1722121"]'),
        lblGoldWeight : () =>  cy.get('[]'),
        valGoldWeight : () =>  cy.get('[]'),
        lblGoldPrice : () =>  cy.get('[]'),
        valGoldPrice : () =>  cy.get('[]'),
        lblTransferAccountNumber : () =>  cy.get('[]'),
        valTransferAccountNumber : () =>  cy.get('[]'),
        lblDownloadInvoice : () =>  cy.get('[]'),
        lblDownloadInvoice : () =>  cy.get('[]'),
        btnOK : () => cy.get('[data-cy="okBtn"]'),   
        lblPaymentFailed : () => cy.get('[data-cy="bInfoTitle"]'),
        lblBankTransferProcessing :() => cy.get('[data-cy="app.components.DigitalGold.gold_Sell_bank_pending"]'),
        btnCheckStatus : () => cy.get('[data-cy="okBtn"]')
    }
    verifySellGoldSucessfullLabel(txt){
        this.elements.lblSellGoldSucessful().should('have.text', txt)
    }
    verifyPaymentFailed (){
        this.elements.lblPaymentFailed().should('be.visible')
    }
    verifyBankTransferProcessingLabel(lbl){
        this.elements.lblBankTransferProcessing().should('have.text', lbl)
    }
    verifyCheckBankTransferStatusBtn(btn){
        this.elements.btnCheckStatus().eq(0).should('have.text', btn)
    }
    clickOKBtn(){
        this.elements.btnOK().eq(1).click()
    }

}

export const goldSellSucessfulPage = new GoldSellSucessfulPage