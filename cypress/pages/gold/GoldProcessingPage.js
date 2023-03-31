/// <reference types = "cypress" />

export class GoldProcessingPage {

    details = {
        zeplin_Purchase_Pending : () => 'https://zpl.io/Z09mZAG',
        zeplin_Purchase_Successful : () => 'https://zpl.io/YYd13Dw',
        zeplin_Purchase_Failed : () => 'https://zpl.io/09k5KA9',
        zeplin_PaymentFailed : () => 'https://zpl.io/ew8O6KN',
        zeplin_Sell_Pending : () => 'https://zpl.io/dxmYlAR',
        zeplin_Sell_Successful : () => 'https://zpl.io/o1W6wkk',
        zeplin_Sell_Failed : () => 'https://zpl.io/PqzDw4x',
        zeplin_Delivery_Pending : () => 'https://zpl.io/W4pm6jp',
        zeplin_Delivery_Successful : () => 'https://zpl.io/z85jQkG',
        zeplin_Delivery_Failed : () => 'https://zpl.io/PqzDw4x',
        overflow : () => 'https://overflow.io/s/W0E7DPNH/?node=ac49da19',    
    }

    elements = {
        /*Gold Purchase Processing,Successful,Failed Pages */			
        pageTitle : () => cy.get('[]'),
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
        lnkDownloadInvoice : () => cy.get('[]'),
        btnOK : () => cy.get('[]'),
        //GoldPurchasePendingPage
        iconPurchaseprocessing : () => cy.get('[]'),
        iconProcessinginfo : () => cy.get('[]'),
        txtProcessinginfo : () => cy.get('[]'),
        //GoldPurchaseSucessfulPage
        iconPurchaseSucessful : () => cy.get('[]'),
        //GoldPurchaseFailedPage
        iconPurchaseFailed : () => cy.get('[]'),
        iconPurchaseFailedinfo : () => cy.get('[]'),
        txtPurchaseFailedinfo : () => cy.get('[]'),
        //PurchasePaymentFailedPage
        iconPaymnetFailed : () => cy.get('[]'),
        titlepaymentFailed : () => cy.get('[]'),
        txtpaymentFailed : () => cy.get('[]'),
        /*Gold Sell Processing,Successful,Failed Pages */			
        SellTitle : () => cy.get('[]'),
        iconSellGoldPending  : () => cy.get('[]'),
        lblTransferAccountNumber : () => cy.get('[]'),
        lblTransferAccountNumber : () => cy.get('[]'),
        iconSellGoldPending : () => cy.get('[]'),
        txtSellGoldPending : () => cy.get('[]'),
        //sell Gold Sucessful
        titleSellSucessful : () => cy.get('[]'),
        iconSellSucessful : () => cy.get('[]'),
        //sell Gold Failed
        titleSellFailed : () => cy.get('[]'),
        iconSellSucessful : () => cy.get('[]'),
        iconSellGoldFailed : () => cy.get('[]'),
        txtSellGoldFailed : () => cy.get('[]'),
        /* Gold Delivery Order Pending,Sucessful,Failed */
        imgGoldCoin : () => cy.get('[]'),
        lblSafeGold : () => cy.get('[]'),
        lblProductPrice : () => cy.get('[]'),
        valProductPrice : () => cy.get('[]'),
        lblGoldBalanceUsed : () => cy.get('[]'),
        valGoldBalanceUsed : () => cy.get('[]'),
        //Delivery Order Pending 
        lblDeliveryOrderPending : () => cy.get('[]'),
        iconDeliveryOrderPending : () => cy.get('[]'),
        iconDeliveryinfo : () => cy.get('[]'),
        txtDeliveryinfo : () => cy.get('[]'),
        //Delivery Order sucessful
        lblDeliveryOrderSuccessful : () => cy.get('[]'),
        iconDeliveryOrderSucessful : () => cy.get('[]'),
        btnTrackOrder : () => cy.get('[]'),
         //Delivery Order Failed
         lblDeliveryOrderFailed : () => cy.get('[]'),
         iconDeliveryOrderFailed : () => cy.get('[]'),
         iconDeliveryFailedinfo : () => cy.get('[]'),
         txtDeliveryFailedinfo : () => cy.get('[]'),
     
    }
}
export const goldProcessingPage = new GoldProcessingPage