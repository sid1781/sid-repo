/// <reference types = "cypress" />

export class SyncShoppingMerchantPage {

    details = {
        zeplin: () => 'https://zpl.io/40YqBW0',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        imgOfSyncProduct: () => cy.get('[]'),
        subTextOfSyncProduct: () => cy.get('[]'),
        lblSteps: () => cy.get('[]'),
        infoSubText1: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.flipkart_user_id"]'),
        infoSubText2: () => cy.get('[data-cy="input_app.components.ProcessingFeeReduction.flipkart_password"]'),
        txtinfoBox: () => cy.get(),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        btnSubmit: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.email_submit_btn"]'),


    }
    EnterFlipKartMobileNumber(mobile){
        this.elements.infoSubText1().type(mobile)
    }
    EnterFlipKartMobilePossword(mobile){
        this.elements.infoSubText2().type(mobile)
    }
clickSubmit(){
    this.elements.btnSubmit().click()
}

}

export const syncShoppingMerchantPage = new SyncShoppingMerchantPage