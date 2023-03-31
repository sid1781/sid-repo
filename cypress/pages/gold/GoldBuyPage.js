/// <reference types = "cypress" />

export class GoldBuyPage {
    details = {
        zeplin: () => 'https://zpl.io/jZE0nQr',
        overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=1e4ba720',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        iconBuyGold: () => cy.get('[]'),
        tabBuyGold: () => cy.contains('div', 'Buy Gold'),
        txtRupees : () =>  cy.get('[data-cy="label_gold_buy_or_sell_in_rupees_or_gram"]'),
        lblRupees: () => cy.get('[data-cy="label_gold_buy_or_sell_in_rupees_or_gram"]').eq(0),
        inpRupeeField: () => cy.get('input[label="Rupees"]'),
        txtGrams: () => cy.get('[data-cy="label_gold_buy_or_sell_in_rupees_or_gram"]'),
        inpGramsField: () => cy.get('input[name="grams"]'),
        btnBuy1rupee: () => cy.get('[data-cy="tab_button_Buy_0"]'),
        btnBuy10rupee: () => cy.get('[data-cy="tab_button_Buy_1"]'),
        btnBuy50rupee: () => cy.get('[data-cy="tab_button_Buy_2"]'),
        btnBuy100rupee: () => cy.get('[data-cy="tab_button_Buy_3"]'),
        btnBuy: () => cy.get('[data-cy="BuyNow"]'),
        tabSellGold: () => cy.contains('div', 'Sell Gold'),
        lblerrorMsg: () => cy.contains('span', 'Service temporarily not available'),
        lblApplyCouponcodeorPoints: () => cy.get('[data-cy="app.components.BDiscount.applyDiscountCouponCode"]'),
        errmsgMaximumTransactionReach: () => cy.contains('span', 'Maximum transactions limit reached for the day.'),
        txtPointsAppliedSucessfully :() => cy.get('[data-cy="app.components.BDiscount.applyPointsSucc"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    verifyBuyGoldIcon() {
        this.elements.iconBuyGold().should('be.visible')
    }
    verifyBuyGoldTab() {
        this.elements.tabBuyGold().should('be.visible')
    }
    verifyRupeesText() {
        this.elements.txtRupees().should('be.visible')
    }
    verifyRupeesLabel() {
        this.elements.lblRupees().should('be.visible')
    }
    enterAmountInRupees() {
        this.elements.inpRupeeField().type('5000',{timeout:2000})
    }
    verifyAmountInRupeesPrefilled() {
        this.elements.inpRupeeField().eq(2).should('not.be.empty')
    }
    verifyGramsText() {
        this.elements.txtGrams().should('be.visible')
    }
    enterGramsFieldInput() {
        this.elements.inpGramsField().type('0.80')
    }
    enterGramsGold(gg){
        this.elements.inpGramsField().type(gg)
    }
    verifyGramsFieldInputPrefilled() {
        this.elements.inpGramsField().eq(3).should('not.be.empty')
    }
    clickBuy1rupeeButton() {
        this.elements.btnBuy1rupee().click()
    }
    clickBuy10rupeeButton() {
        this.elements.btnBuy10rupee().click()
    }
    clickBuy50rupeeButton() {
        this.elements.btnBuy50rupee().click()
    }
    clickBuy100rupeeButton() {
        this.elements.btnBuy100rupee().click()
    }
    clickBuyButton() {
        this.elements.btnBuy().click()
    }
    clickSellGoldTab() {
        this.elements.tabSellGold().click()
    }
    verifyErrorMessageLabel() {
        this.elements.lblerrorMsg().should('be.visible')
    }

    verifyApplyCouponcodeorPointsLabel(couponcode) {
        this.elements.lblApplyCouponcodeorPoints().should('have.text', couponcode)
    }
    verifyApplyCouponcodeorPointsLabelIsEnabled() {
        this.elements.lblApplyCouponcodeorPoints().should('be.visible')
    }
    verifyApplyCouponcodeorPointsLabelIsDisabled() {
        this.elements.lblApplyCouponcodeorPoints().should('to.be.disabled')
    }
    clickApplyCouponcodeorPointsLabel() {
        this.elements.lblApplyCouponcodeorPoints().click({force:true})
    }
    verifyMaximumTransactionReachErrorMessage(errmsg) {
        this.elements.errmsgMaximumTransactionReach().should('have.text', errmsg)
    }
    verifyErrorMessageNotVisible() {
        this.elements.errmsgMaximumTransactionReach().should('not.exist')
    }
    verifyPointsAppliedSuccessfullyText(){
        this.elements.txtPointsAppliedSucessfully().should('be.visible')
    }
}
export const goldBuyPage = new GoldBuyPage()
