/// <reference types = "cypress" />

export class SyncWalletPage {

    details = {
        zeplin: () => 'https://zpl.io/g8DyJjZ',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        imgOfSyncProduct: () => cy.get('[]'),
        subTextOfSyncProduct: () => cy.get('[]'),
        lblSteps: () => cy.get('[]'),
        infoSubText1: () => cy.get(),
        infoSubText2: () => cy.get(),
        infoSubText3: () => cy.get(),
        txtinfoBox: () => cy.get(),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        btnContinue: () => cy.get('[data-cy="btnText"]'),


    }
    clickContinue(){
        this.elements.btnContinue().click()
    }

}

export const syncWalletPage = new SyncWalletPage