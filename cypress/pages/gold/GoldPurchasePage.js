/// <reference types = "cypress" />

export class GoldPurchasePage {

    details = {
        zeplin: () => 'https://zpl.io/B1kd4y0',
        overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=1e4ba720',    
    }

    elements ={
        pageTitle : () => cy.get('[data-cy="app.components.SeamlessPG.payment_title"]'),
        icon24kKaratGold : () =>  cy.get('[data-cy="gold_icon"]'),
        lbl24kKaratGold  : () =>  cy.get('[data-cy="gold_icon"]'),
        lblGoldWeight : () =>  cy.get('[data-cy="product_label_Gold Weight"]'),
        valGoldWeight : () =>  cy.get('[data-cy="product_value_Gold Weight"]'),
        lblGoldPrice : () =>  cy.get('[data-cy="product_label_Gold Price"]'),
        valGoldPrice : () =>  cy.get('[data-cy="product_value_Gold Price"]'),
        lblGST : () =>  cy.get('[data-cy="product_label_GST (3%)"]'),
        valGST : () =>  cy.get('[data-cy="product_value_GST (3%)"]'),
        txtInfoToSafeGold   : () =>  cy.get('[data-cy="app.containers.Bhive.Consent.terms"]'),
        lnkTermsOfUse : () => cy.get('[data-cy="app.containers.Bhive.Consent.terms"] > TODO span > a'),
        lblGoldAmount : () => cy.get('[data-cy="gold_payble_amount"]'),
        lblTimeLeft : () => cy.get('[data-cy="app.components.SeamlessPG.remaining_time"]'),
        iconTimer : () => cy.get('[]'),
        valtimer : () => cy.get('[data-cy="timer_value"]'),
        lblSelectPaymentMethod : () => cy.get('[data-cy="app.components.SeamlessPG.select_payment_method"]'),
        rbDebitCard : () => cy.get('[]'),
        lblDebitCard : () => cy.get('[data-cy="payment_method_0"]'),
        iconDebitCard : () => cy.get('[]'),
        btnPayWithDebitCard : () => cy.get('[data-cy="payment_btn_0"]'),
        rbNetBanking : () => cy.get('[]'),
        lblNetBanking  : () => cy.get('[]'),
        iconNetBanking  : () => cy.get('[]'),
        btnPayWithNetBanking  : () => cy.get('[]'),
        iconSafeGoldCoin : () => cy.get('[]'),
        lblSafeGoldCoin : () => cy.get('[]'),
        lblTotalPrice : () => cy.get('[]'),
        valTotalPrice : () => cy.get('[]'),
        lblGoldBalanceUsed : () => cy.get('[]'),
        valGoldBalanceUsed : () => cy.get('[]'),
        lblDeliveryAndMintingCharges : () => cy.get('[]'),
        valDeliveryAndMintingCharges : () => cy.get('[]'),
        valGoldPrice : () => cy.get('[data-cy="product_value_Gold Price"]'),
        lblPointsDiscount :() => cy.get('[data-cy="product_label_Points discount"]'),
        valPointsDiscount : () => cy.get('[data-cy="product_value_Points discount"]'),
    }
    verifyPageTitle(title) {
        this.elements.pageTitle().eq(0).should('have.text',title)
    }
    verifyPresenceOf24KaratGoldIcon() {
        this.elements.icon24kKaratGold().should('exist')
    }
    verify24KaratGoldLabel(label) {
        this.elements.lbl24kKaratGold().should('have.text', label) 
    }
    verifyGoldWeighLabel(label) {
        this.elements.lblGoldWeight().should('have.text', label)
    }
    verifyGoldWeightValue() {
        this.elements.valGoldWeight().should('be.visible')
    }
    verifyGoldPriceLabel(label) {
        this.elements.lblGoldPrice().should('have.text', label)
    }
    verifyGoldPriceValue() {
        this.elements.valGoldPrice().should('be.visible')
    }
    verifyGSTLabel(label) {
        this.elements.lblGST().should('have.text', label)
    }
    verifyGSTValue() {
        this.elements.valGST().should('be.visible')
    }
    verifyInfoToSafeGoldText() {
        this.elements.txtInfoToSafeGold().should('be.visible')
    }
    clickTermsOfUseLink(){
        this.elements.lnkTermsOfUse().should('be.visible')
    }
    verifyGoldAmountLabel() {
        this.elements.lblGoldAmount().should('be.visible')
    }
    verifyTimeLeftLabel(timeleft){
        this.elements.lblTimeLeft().should('have.text', timeleft)
    }
    verifytimerValue(timer){
        this.elements.valtimer().should('have.text', timer)
    }
    verifySelectPaymentMethodLabel(){
        this.elements.lblSelectPaymentMethod().should('be.visible')
    }
    clickDebitCardradiobutton(){
        this.elements.rbDebitCard().click()
    }
    clickDebitCardLabel(){
        this.elements.lblDebitCard().click()
    }
    verifyDebitCardLabel(){
        this.elements.lblDebitCard().should('be.visible')
    }
    clickPayWithDebitCardButton(){
        this.elements.btnPayWithDebitCard().click()
    }
    clickNetBankingrb(){
        this.elements.rbNetBanking().click()
    }
    verifyNetBankinglbl(){
        this.elements.lblNetBanking().should('be.visile')
    }
    verifyNetBankingIcon(){
        this.elements.iconNetBanking().should('be.visible')
    }
    clickpaywithNetBanking(){
        this.elements.btnPayWithNetBanking().click()
    }
    verifySafeGoldCoinIcon(){
        this.elements.iconSafeGoldCoin().should('be.visible')
    }
    verifyTotalPriceLabel(label) {
        this.elements.lblTotalPrice().should('have.text', label)
    }
    verifyTotalPriceValue() {
        this.elements.valTotalPrice().should('be.visible')
    }
    verifyGoldBalanceUsedLabel(label) {
        this.elements.lblGoldBalanceUsed().should('have.text', label)
    }
    verifyGoldBalanceUsedValue() {
        this.elements.valGoldBalanceUsed().should('be.visible')
    }
    verifyDeliveryAndMintingChargesLabel(label) {
        this.elements.lblDeliveryAndMintingCharges().should('have.text', label)
    }
    verifyDeliveryAndMintingChargesValue() {
        this.elements.valDeliveryAndMintingCharges().should('be.visible')
    }
    verifyGoldPriceValue(){
        this.elements.valGoldPrice().should('be.visible')
    }
       verifyPurchaseAmountValue(amountValue) {
        this.elements.valPurchaseAmount().should('have.text', amountValue)
    }
    verifyTimerGreenColor(){
        this.elements.valtimer().should('have.text', '04:01').should('have.css', 'color', 'rgb(60, 193, 197)')
    }
    verifyTimerOrangeColor(){
        this.elements.valtimer().should('have.text', '01:00').should('have.css', 'color', 'rgb(255, 132, 52)')
    }
    verifyTimerRedColor(){
        this.elements.valtimer().should('have.text', '00:27').should('have.css', 'color', 'rgb(249, 251, 252)')
    }
    verifyPointsDiscountLabel(){
        this.elements.lblPointsDiscount().should('be.visible')
    }
    
}

export const goldPurchasePage = new GoldPurchasePage()