/// <reference types = "cypress" />

export class SyncShoppingMerchantInfoPage {

    details = {
        zeplin: () => 'no VD found',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        imgOfSyncProduct: () => cy.get('[]'),
        subTextOfSyncProduct: () => cy.get('[]'),
        lblFlipkartAccount: () => cy.get('[]'),
        lblSteps: () => cy.get('[]'),
        infoSubText1: () => cy.get(),
        infoSubText2: () => cy.get(),
        txtinfoBox: () => cy.get(),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        btnContinue: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.off_info_con"]'),

    }
    clickContinueBtn(){
        this.elements.btnContinue().click()
    }

}

export const syncShoppingMerchantInfoPage = new SyncShoppingMerchantInfoPage