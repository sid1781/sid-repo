/// <reference types = "cypress" />

export class SyncShoppingDetailsPage {

    details = {
        zeplin: () => 'https://zpl.io/DlxR00e',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        imgSyncShoppingtails: () => cy.get('[]'),
        subTextSyncShoppingDetails: () => cy.get('[]'),
        lblFlipkartAccount: () => cy.get('[data-cy="pgCardItemTitle_0"]'),
        lblAmazonAccount: () => cy.get('[data-cy="pgCardItemTitle_1"]'),
        btnbContinue: () => cy.get('[data-cy="continueBtn"]'),

    }
    clickContinueBtn() {
        this.elements.btnbContinue().click()
    }
    clickFlipKartAccount() {
        this.elements.lblFlipkartAccount().click()
    }
}

export const syncShoppingDetailsPage = new SyncShoppingDetailsPage