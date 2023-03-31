/// <reference types = "cypress" />

export class GoldSellPage {

  details = {
    zeplin: () => ' https://zpl.io/KGnq9LJ',
    overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=1e4ba720',
  }
  elements = {
    pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
    lblCurrentSellValue: () => cy.get('[data-cy="app.components.DigitalGold.current_value"]'),
    valCurrentGold: () => cy.get('[data-cy="currentGoldvalue"]'),
    imglive: () => cy.get('[]'),
    lbllive: () => cy.get('[]'),
    lblSellPricePerGram: () => cy.get('[]'),
    valSellPricePerGram: () => cy.get('[]'),
    iconSellGold: () => cy.get('[]'),
    tabSellGold: () => cy.contains('div', 'Sell Gold'),
    txtRupees: () => cy.get('[data-cy="inputBox"]'),
    inpRupeeField: () => cy.get('[data-cy="input_gold_buy_or_sell_in_rupees_or_gram"]'),
    txtGrams: () => cy.get('[data-cy="label_gold_buy_or_sell_in_rupees_or_gram"]'),
    inpGramsField: () => cy.get('[data-cy="input_gold_buy_or_sell_in_rupees_or_gram"]'),
    btnSell: () => cy.get('[data-cy="SellNow"]'),
    tabBuyGold: () => cy.contains('div', 'Buy Gold'),
    errmsgMaximumTransactionReach: () => cy.contains('span', 'Maximum transactions limit reached for the day.'),
    valSellGoldInRupees: () => cy.get('[data-cy="input_gold_buy_or_sell_in_rupees_or_gram"]'),
    valSellGoldInGrams: () => cy.get('[data-cy="input_gold_buy_or_sell_in_rupees_or_gram"]'),
  }
  verifyPageTitle(pagetitile) {
    this.elements.pageTitle().should('have.text', pagetitile)
  }
  verifyCurrentSellValueLabel() {
    this.elements.lblCurrentSellValue().should('be.visible')
  }
  verifyCurrentGoldValue(value) {
    this.elements.valCurrentGold().should('have.text', value)
  }
  verifyliveImage() {
    this.elements.imglive().should('be.visible')
  }
  verifyliveLabel() {
    this.elements.lbllive().should('be.visible')
  }
  verifySellPricePerGramLabel() {
    this.elements.lblSellPricePerGram().should('be.visible')
  }
  verifySellPricePerGramValue() {
    this.elements.valSellPricePerGram().should('be.visible')
  }
  veifySellGoldIcon() {
    this.elements.iconSellGold().should('be.visible')
  }
  verifySellGoldTab() {
    this.elements.tabSellGold().should('be.visible')
  }
  verifyRupeesText() {
    this.elements.txtRupees().should('be.visible')
  }
  enterRupeeFieldInput(amount) {
    this.elements.inpRupeeField().eq(0).type(amount)
  }
  verifyGramsText() {
    this.elements.txtGrams().should('be.visible')
  }
  verifyGramsFieldInput() {
    this.elements.inpGramsField().should('be.visible')
  }
  clickSellButton() {
    this.elements.btnSell().click()
  }
  clickBuyGoldTab() {
    this.elements.tabBuyGold().click()
  }
  verifyMaximumTransactionReachErrorMessage(errmsg) {
    this.elements.errmsgMaximumTransactionReach().should('have.text', errmsg)
  }
  verifyErrorMessageNotVisible() {
    this.elements.errmsgMaximumTransactionReach().should('not.exist')
  }

  clickBuyGoldTab(){
    this.elements.tabBuyGold().click()
  }
  enterGramsFieldInput(grams) {
    this.elements.inpGramsField().eq(1).type(grams)
  }
  verifySellGoldGramsConvertedToRupeesValue(value) {
    this.elements.valSellGoldInRupees().should('have.attr', 'value')
  }
  verifySellGoldRupeesConvertedToGramsValue(value) {
    this.elements.valSellGoldInGrams().should('have.attr', 'value')
  }
}

export const goldSellPage = new GoldSellPage()