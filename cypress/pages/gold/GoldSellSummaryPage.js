/// <reference types = "cypress" />

export class GoldSellSummaryPage {
    details = {
        zeplin: () => 'https://zpl.io/wqQgEyK',
        overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=1e4ba720',    
    }
    elements ={
        pageTitle : () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        icon24kKaratGold : () =>  cy.get('[data-cy="gold_icon]'),
        lbl24kKaratGold  : () =>  cy.get('[data-cy="gold_icon]'),
        lblGoldWeight : () =>  cy.get('[data-cy="product_label_Gold Weight]'),
        lblGoldWeightValue : () =>  cy.get('[data-cy="gold_payble_amount"]'),
        lblGoldPrice : () =>  cy.get('[data-cy="product_label_Gold Price"   ]'),
        lblGoldPriceValue : () =>  cy.get('[data-cy="product_value_Gold Price"]'),
        txtInfoToSafeGold  : () =>  cy.get('[data-cy="app.containers.Bhive.Consent.terms"]'),
        lnkTermsOfUse : () => cy.get('[]'),
        lblGoldAmount : () => cy.get('[data-cy="product_value_Gold Weight"]'),
        lblTimeLeft : () => cy.get('[data-cy="app.components.SeamlessPG.remaining_time"]'),
        iconTimer : () => cy.get('[]'),
        timerValue : () => cy.get('[data-cy="timer_value"]'),
        lblSelectBankAccount : () => cy.get('[data-cy="app.components.DigitalGold.select_bank_account"]'),
        iconBank : () => cy.get('[]'),
        lblBankAccountNumber : () => cy.get('[data-cy="accNo"]'),
        lblBankStatus : () => cy.get('[]'),
        lblBankName : () => cy.get('[data-cy="bank"]'),
        valBankName : () => cy.get('[]'),
        lblBankBranch : () => cy.get('[data-cy="branch"]'),
        valBankBranch : () => cy.get('[]'),
        lblIFSC : () => cy.get('[data-cy="ifsc"]'),
        valIFSC : () => cy.get('[]'),
        rbSelected : () => cy.get('[]'),
        btnAddSavingBankAccount : () => cy.get('[data-cy="addBankSavingsBank"]'),
        btncontinue : () => cy.get('[data-cy="app.components.BbankAccount.choose_bank_cont_agrm"]'),
    }
    verifyPageTitle(title){
        this.elements.pageTitle().should('have.text',title)
    }
    verify24kKaratGoldIcon(){
        this.elements.icon24kKaratGold().should('be.visible')
    }
    verify24kKaratGoldLabel(text){
        this.elements.lbl24kKaratGold().should('have.text',text)
    }
    verifyGoldWeightLabel(text){
        this.elements.lblGoldWeight().should('have.text',text)
    }
    verifyGoldWeightValueLabel(text){
        this.elements.lblGoldWeightValue().should('have.text',text)
    }
    verifyGoldPriceLabel(text){
        this.elements.lblGoldPrice().should('hace.text',text)
    }
    verifyGoldPriceValueLabel(text){
        this.elements.lblGoldPriceValue().should('have.text',text)
    }
    verifyInfoToSafeGoldText(text){
        this.elements.txtInfoToSafeGold().should('have.text',text)
    }
    clickTermsOfUseLink(){
        this.elements.lnkTermsOfUse().click()
    }
    verifyGoldAmountLabel(text){
        this.elements.lblGoldAmount().should('have.text',text)
    }
    verifyTimeLeftLabel(text){
        this.elements.lblTimeLeft().should('have.text',text)
    }
    verifyTimerIcon(){
        this.elements.iconTimer().should('be.visible')
    }
    verifytimerValue(value){
        this.elements.timerValue().should('have.text',value)
    }
    verifySelectBankAccountLabel(text){
        this.elements.lblSelectBankAccount().should('have.text',text)
    }
    verifyBankIcon(){
        this.elements.iconBank().should('be.visible')
    }
    verifyBankAccountNumberLabel(text){
        this.elements.lblBankAccountNumber().should('have.text',text)
    }
    verifyBankStatusLabel(text){
        this.elements.lblBankStatus().should('have.text',text)
    }
    verifyBankNameLabel(text){
        this.elements.lblBankName().should('have.text',text)
    }
    verifyBankNameValue(value){
        this.elements.valBankName().should('have.value',value)
    }
    verifyBankBranchLabel(text){
        this.elements.lblBankBranch().should('have.text',text)
    }
    verifyBankBranchValue(value){
        this.elements.valBankBranch().should('have.text',value)
    }
    verifyIFSCLabel(text){
        this.elements.lblIFSC().should('have.text',text)
    }
    verifyIFSCValue(value){
        this.elements.valIFSC().should('have.text',value)
    }
    verifySelectedRadioButton(text){
        this.elements.rbSelected().should('have.text',text)  
    }
    clickSelectedRadioButton(){
        this.elements.rbSelected().click()
    }
    clickAddSavingBankAccountButton(){
        this.elements.btnAddSavingBankAccount().click
    }
    verifyAddSavingBankAccountButton(text){
        this.elements.btnAddSavingBankAccount().should('have.text',text)
    }
    verifyContinueButton(text){
        this.elements.btncontinue().should('have.text',text)
    }
    clickContinueButton(){
        this.elements.btncontinue().click()
    }
}
export const goldSellSummaryPage = new GoldSellSummaryPage()