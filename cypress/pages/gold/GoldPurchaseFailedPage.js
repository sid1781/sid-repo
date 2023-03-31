/// <reference types = "cypress" />

export class GoldProcessingPage {

    details = {

        zeplin_Pending : () => 'https://zpl.io/Z09mZAG',
        zeplin_Successful : () => 'https://zpl.io/YYd13Dw',
        zeplin_Failed : () => 'https://zpl.io/09k5KA9',
        zeplin_PaymentFailed : () => 'https://zpl.io/ew8O6KN',
        overflow : () => 'https://overflow.io/s/W0E7DPNH/?node=ac49da19',    
    }
    elements = {
        pageTitle : () => cy.get('[]'),
        iconFailed : () => cy.get('[]'),
        lblTransactionID : () => cy.get('[]'),
        valTransactionID : () => cy.get('[]'),
        lblGoldWeight : () => cy.get('[]'),
        valGoldWeight : () => cy.get('[]'),
        lblGoldPrice : () => cy.get('[]'),
        valGoldPrice : () => cy.get('[]'),
        lblGST : () => cy.get('[]'),
        valGST : () => cy.get('[]'),
        lblTotalPrice : () => cy.get('[]'),
        valTotalPrice : () => cy.get('[]'),
        btnOK : () => cy.get('[]'),
        //GoldPurchasePendingPage
        iconPurchaseprocessing : () => cy.get('[]'),
        iconProcessinginfo : () => cy.get('[]'),
        txtProcessinginfo : () => cy.get('[]'),
        //GoldPurchaseSucessfulPage
        iconPurchaseSucessful : () => cy.get('[]'),
        lnkDownloadInvoice : () => cy.get('[]'),
        //GoldPurchaseFailedPage
        iconPurchaseFailed : () => cy.get('[]'),
        iconPurchaseFailedinfo : () => cy.get('[]'),
        txtPurchaseFailedinfo : () => cy.get('[]'),
        //PurchasePaymentFailedPage
        iconPaymnetFailed : () => cy.get('[]'),
        titlepaymentFailed : () => cy.get('[]'),
        txtpaymentFailed : () => cy.get('[]'),
    }
}
export const goldProcessingPage = new GoldProcessingPage      