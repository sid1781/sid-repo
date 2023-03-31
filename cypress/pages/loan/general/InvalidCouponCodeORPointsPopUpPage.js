// <reference types = "cypress" />

export class InvalidCouponCodePage {

    details = {
        zeplin: () => 'https://zpl.io/jZLXWXx',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.BDiscount.bd_sorry"]'),
        txtInvalidCouponCode: () => cy.get('[data-cy="error_msg"]'),
        btnOk: () => cy.get('[data-cy="app.components.Common.ok_btn_uc"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyInvalidCouponCodeText(txtInvalidCouponCode) {
        this.elements.txtInvalidCouponCode().should('have.text', txtInvalidCouponCode)
    }

    clickOkBtn() {
        this.elements.btnOk().click()
    }

}

export const invalidcouponcodePage = new InvalidCouponCodePage()