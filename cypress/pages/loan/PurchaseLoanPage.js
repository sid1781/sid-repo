/// <reference types = "cypress" />
export class PurchaseLoanPage {
    details = {
        zeplin: () => '', //TODO 
        overflow: () => '', //
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.CheckoutFinanceSeparatePage.purchase_loan"]'),
        btnActiveNow: () => cy.get('[data-cy="app.components.CheckoutFinanceSeparatePage.activate_now_btn"]'),

    }
    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    }
    clickActiveNowButton() {
        this.elements.btnActiveNow().click()
    }


}

export const purchaseLoanPage = new PurchaseLoanPage()