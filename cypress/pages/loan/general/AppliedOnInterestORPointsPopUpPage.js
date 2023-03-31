/// <reference types = "cypress" />

export class RemoveCouponCodePage {

    details = {
        zeplin: () => 'https://zpl.io/09WjxPE',
        overflow: () => '',//TODO Link
    }

    elements = {

        pageTitleCouponCodeApplied: () => cy.get('[data-cy="app.components.LoanDetails.couponCodeApplied"]'),
        subtxtRemoveTheAppliedCouponCode: () => cy.get('[data-cy="app.components.LoanDetails.placeOrderRmvcoup"]'),
        btnRemove: () => cy.get('[data-cy="app.components.BDiscount.bd_remove"]'),
        btnNoKeepIt: () => cy.get('[data-cy="app.components.BDiscount.bd_keep"]'),
        iconClose: () => cy.get('[data-cy="CloseImg"]'),
        pageTitlePointsApplied: () => cy.get('[data-cy="app.components.LoanDetails.pointsApplied"]'),
        subtxtRemoveAppliedPoints: () => cy.get('[data-cy="app.components.LoanDetails.placeOrderRmvpoint"]'),

    }

    // pageTitleCouponCodeApplied
    verifyCouponCodeAppliedText(pageTitleCouponCodeApplied) {
        this.elements.pageTitleCouponCodeApplied().should('have.text', pageTitleCouponCodeApplied)
    }
    // subtxtRemoveTheAppliedCouponCode
    verifyRemoveAppliedCodeSubText(subtxtRemoveTheAppliedCouponCode) {
        this.elements.subtxtRemoveTheAppliedCouponCode().should('have.text', subtxtRemoveTheAppliedCouponCode)
    }
    // iconClose
    verifyCloseIcon(iconClose) {
        this.elements.iconClose().should('have.attr', 'src', iconClose)
    }

    clickCloseIcon() {
        this.elements.iconClose().click()
    }

    verifyRemoveText(btnRemove) {
        this.elements.btnRemove().should('have.text', btnRemove)
    }

    clickRemoveBtn() {
        this.elements.btnRemove().click()
    }

    verifyNoKeepItText(btnNoKeepIt) {
        this.elements.btnNoKeepIt().should('have.text', btnNoKeepIt)
    }
    clickNoKeepItBtn() {
        this.elements.btnNoKeepIt().click()
    }
    //TODO
    // pageTitlePointsApplied
    // subtxtRemoveAppliedPoints


}

export const removecouponcode = new RemoveCouponCodePage()