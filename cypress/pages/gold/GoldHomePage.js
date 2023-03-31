
/// <reference types = "cypress" />
export class GoldHomePage {
        
    details = {
        zeplin: () => 'https://zpl.io/g8Dv5JZ',
        zeplin_reward_milestone: () => 'https://zpl.io/kDxXrx5',
        overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=1e4ba720',    
    }
      elements = {
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]', {timeout:10000}),
        lblGoldBalance: () => cy.get('[data-cy="app.components.DigitalGold.gold_balance"]'),
        lblTotalWeight: () => cy.get('[data-cy="app.components.DigitalGold.total_weight"]'),
        valGoldBalance: () => cy.get('[data-cy="totalGoldBalance"]'),
        imgGoldBars: () => cy.get('[]'),
        imglive: () => cy.get('[data-cy="app.components.DigitalGold.live"]'),
        lbllive: () => cy.get('[data-cy="app.components.DigitalGold.live"]'),
        lblBuyPricePerGram: () => cy.contains('div','Buy Price per gram:'),
        valBuyPricePerGram: () => cy.get('[]'),
        imgGoldCoins: () => cy.get('[data-cy="goldCoinsFallingImg"]'),
        lblInvensting: () => cy.get('[data-cy="app.components.DigitalGold.start_invest_in_lable"]'),
        txt24kGold: () => cy.get('[data-cy="app.components.DigitalGold.flling24K_gold_coins_txt"]'),
        btnInvestNow: () => cy.get('[data-cy="app.components.DigitalGold.invest_now"]'),
        iconPiggyBank: () => cy.get('[data-cy="goldCoinsFallingImg"]'),
        txtInvestInGold: () => cy.get('[data-cy="nudge_label"]'),
        btnInvest: () => cy.get('[data-cy="nudge_btn"]'),
        imgBanners: () => cy.get('[data-cy="bannerImg_0"]'),
        iconWallet: () => cy.get('[]'),
        lblSell24KGold: () => cy.contains('span','Sell 24K Gold'),
        subTxtSell24KGold: () => cy.get('[]'),
        iconGoldDelivery: () => cy.get('[]'),
        lblGoldDelivery: () => cy.get('[]'),
        subTxtGoldDelivery: () => cy.get('[]'),
        iconFAQ: () => cy.get('[]'),
        lblFAQ: () => cy.contains('span','FAQ'),
        lblAdvantagesOfBuying24KGold: () => cy.contains('span','Advantages of Buying 24K Gold'),
        txtStartInvestingAt1Rupee: () => cy.get('[]'),
        txtBuyGoldAtLiveMarketPrices: () => cy.get('[]'),
        txtFlexibility: () => cy.get('[]'),
        txtConvertYourGoldBalanceToGoldCoins: () => cy.get('[]'),
        txtSecure: () => cy.get('[]'),
        txtStoredInHighSecurityVaults: () => cy.get('[]'),
        txtAccessible24x7: () => cy.get('[]'),
        txtBuySellDeliverAnytimeAnywhere: () => cy.get('[]'),
        iconDeliveryPending: () => cy.get('[]'),
        lblDeliveryPending: () => cy.get('[]'),
        lblGoldDelivery: () => cy.get('[data-cy="Gold Delivery"]'),
        valGoldDelivery: () => cy.get('[]'),
        btnTrackOrder: () => cy.contains('button','Track Order'),
        iconTransactionHistory: () => cy.get('[]'),
        lblTransactionHistory: () => cy.contains('span','Transaction History'),
        cardRewards: () => cy.get('[]'),
        iconRewards: () => cy.get('[]'),
        lblRewards: () => cy.get('[data-cy="app.components.DigitalGold.rewards_title_txt"]'),
        subTxtRewards: () => cy.get('[data-cy="app.components.DigitalGold.rewards_desc_txt"]'),
        iconMilestones: () => cy.get('[]'),
        lblMilestones: () => cy.get('[data-cy="app.components.DigitalGold.milestone_title_txt"]'),
        subTxtMilestones: () => cy.get('[data-cy="app.components.DigitalGold.milestone_desc_txt"]'),
        iconGold: () => cy.get('[]'),
        iconLive: () => cy.get('[]'),
        btnSell24KGold: () => cy.get('[data-cy="Sell 24K Gold"]'),
        btnGoldDelivery: () => cy.contains('span', 'Gold Delivery'),
        btnInvestOneRupee:() => cy.get('[data-cy="nudge_btn"]'),
        txtInvestWithRupee10: () => cy.contains('Start Auto invest with ₹ 10'),
        lblInsurance: () => cy.get('[data-cy="insurance_title"]'),
        lblAutoInvest : () => cy.contains('span','Auto-Invest'),
        lblCongrations: () => cy.get('[xmlns="http://www.w3.org/2000/svg"]')
    }
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // lblGoldBalance
    verifyGoldBalanceLabel(label) {
        this.elements.lblGoldBalance().should('have.text', label)
    }
    // lblTotalWeight
    verifyTotalWeightLabel(label) {
        this.elements.lblTotalWeight().should('have.text', label)
    }
    // valGoldBalance
    verifyGoldBalanceValue(value) {
        this.elements.valGoldBalance().should('have.text', value)
    }
    // imgGoldBars
    verifyGoldBarsImage(){

    }
   // imglive
   verifyLiveImage(){

   }
    // lbllive
    verifyLiveLabel(){

    }
    // lblBuyPricePerGram
    verifyBuyPricePerGramLabel(){

    }
    // valBuyPricePerGram
    verifyBuyPricePerGramValue(){

    }
    // imgGoldCoins
    verifyPresenceOfGoldCoins(){

    }
    // lblInvensting
    verifyInvenstingLabel(){

    }
    // txt24kGold
    verify24KGoldText(){

    }
    // btnInvestNow
    clickInvestNowButton() {
        this.elements.btnInvestNow().click()
    }
    // iconPiggyBank
    verifyPresenceOfPiggyBank(){

    }
    // txtInvestInGold
    verifyInvestInGoldText(){

    }
    // btnInvest
    ClickInvestButton(){

    }
    // imgBanners
    VerifyBannersImage(){

    }
    // iconWallet
    verifyPresenceOfWalletIcon(){

    }
    // lblSell24KGold
    VeifySell24KGoldLabel(){

    }
    // subTxtSell24KGold
    VeifySell24KGoldSubText(){

    }
    // iconGoldDelivery
    verifyPresenceOfGoldDeliveryIcon(){

    }
    // lblGoldDelivery
    verifyGoldDeliveryLabel(){

    }
    // subTxtGoldDelivery
    verifyGoldDeliverySubText(){

    }
    // iconFAQ
    verifyPresenceOfFAQIcon(){

    }
    // lblFAQ
    verifyFAQLabel(){

    }
    // lblAdvantagesOfBuying24KGold
    verifyAdvantagesOfBuying24KGoldLabel(){

    }
    // txtStartInvestingAt1Rupee
    verifyStartInvestingAt1RupeeText(){

    }
    // txtBuyGoldAtLiveMarketPrices
    verifyBuyGoldAtLiveMarketPricesText(){

    }
    // txtFlexibility
    verifyFlexibilityText(){

    }
    // txtConvertYourGoldBalanceToGoldCoins
    verifyConvertYourGoldBalanceToGoldCoinsText(){

    }
    // txtSecure
    verifySecureText(){

    }
    // txtStoredInHighSecurityVaults
    verifyStoredInHighSecurityVaultsText(){

    }
    // txtAccessible24x7
    verifyAccessible24x7Text(){

    }
    // txtBuySellDeliverAnytimeAnywhere
    verifyBuySellDeliverAnytimeAnywhereText(){

    }
    // iconDeliveryPending
    verifyDeliveryPendingIcon(){

    }
    // lblDeliveryPending
    verifyDeliveryPendingLabel(){

    }
    // lblGoldDelivery
    verifyGoldDeliveryLabel(){

    }
    // valGoldDelivery
    verifyGoldDeliveryValue(){

    }
    // btnTrackOrder
    clickTrackOrderButton(){

    }
    // iconTransactionHistory
    verifyTransactionHistoryIcon(){

    }
    // lblTransactionHistory
    veriyTransactionHistoryLabel(){

    }
    clickTransactionHistoryLabel(){

    }
    // cardRewards
    verifyRewardsCard(){

    }
    // iconRewards
    verifyRewardsIcon(){

    }
    // lblRewards
    verifyRewardsLabel(){

    }
    // subTxtRewards
    verifyRewardsSubText(){

    }
    // iconMilestones
    verifyMilestonesIcon(){

    }
    // lblMilestones
    verifyMilestonesLabel(){

    }
    clickMilestonesLabel(){

    }
    // subTxtMilestones
    verifyMilestonesSubText(){

    }
    // iconGold
    verifyPresenceOfGoldIcon() {
        this.elements.iconGold().should('exist')
    }
    // iconLive
    verifyDeliveryPendingIcon(){

    }
    // btnSell24KGold
    clickSell24KGoldBtn() {
        this.elements.btnSell24KGold().click()
    }
    verifyPresenceOfGoldIcon() {
        this.elements.iconGold().should('exist')
    }
    verifyGoldBalanceLabel() {
        this.elements.lblGoldBalance().should('be.visible')
    }
    verifyGoldBalanceValue(value) {
        this.elements.valGoldBalance().should('be.visible')
    }
    clickInvestNowButton() {
        this.elements.btnInvestNow().click()
    }
    verifyInvestNowButton(){
        this.elements.btnInvestNow().should('be.visible')
    }
    clickGoldDeliveryButton() {
        this.elements.btnGoldDelivery().click()
    }
    verifyTotalWeightLabel(){
        this.elements.lblTotalWeight().should('be.visible')
    }
    verifyGoldBarsImage(src){
        this.elements.imgGoldBars().should('have.attr',src)
    }
    verifyLiveImage(){
        this.elements.imglive().should('be.visible')
    }
    verifyLiveLabel(text){
        this.elements.lbllive().should('have.text',text)
    }
    verifyBuyPricePerGramLabel(BuyPricePerGram){
        this.elements.lblBuyPricePerGram().should('have.text',BuyPricePerGram)
    }
    verifyBuyPricePerGramValue(value){
        this.elements.valBuyPricePerGram().should('have.text',value)
    }
    verifyGoldCoinsImage(){
        this.elements.imgGoldCoins().should('be.visible')
    }
    verifyInvenstingLabel(text){
        this.elements.lblInvensting().should('have.text',text)
    }
     verify24kGoldText(text){
        this.elements.txt24kGold().should('have.text',text)
     }
     verifyPiggyBankIcon(){
        this.elements.iconPiggyBank().should('be.visible')
     }
     verifyInvestInGoldText(text){
        this.elements.txtInvestInGold().should('have.text',text)
     }
     clickInvestButton(){
        this.elements.btnInvest().click()
     }
     verifyInvestButton(){
        this.elements.btnInvest().should('be.visible')
     }
     verifyBannersImage(){
        this.elements.imgBanners().should('be.visible')
     }
    verifyWalletIcon(){
        this.elements.iconWallet().should('be.visible')
    }
    verifySell24KGoldLabel(){
        this.elements.lblSell24KGold().should('be.visible')
    }
    verifySell24KGoldSubText(text){
        this.elements.subTxtSell24KGold().should('have.text',text)
    }
    verifyGoldDeliveryIcon(){
        this.elements.iconGoldDelivery().should('be.visible')
    }
    verifyGoldDeliveryLabel(text){
        this.elements.lblGoldDelivery().should('have.text',text)
    }
    verifyGoldDeliverySubText(text){
        this.elements.subTxtGoldDelivery().should('have.text',text)
    }
    verifyFAQIcon(){
        this.elements.iconFAQ().should('be.visible')
    }
    verifyFAQLabel(text){
        this.elements.lblFAQ().should('be.visible')
    }
    verifyAdvantagesOfBuying24KGoldLabel(text){
        this.elements.lblAdvantagesOfBuying24KGold().should('have.text',text)
    }
    verifyStartInvestingAt1RupeeText(text){
        this.elements.txtStartInvestingAt1Rupee().should('have.text',text)
    }
    verifyBuyGoldAtLiveMarketPricesText(text){
        this.elements.txtBuyGoldAtLiveMarketPrices().should('have.text',text)
    }
    verifyFlexibilityText(text){
        this.elements.txtFlexibility().should('have.text',text)
    }
    verifyConvertYourGoldBalanceToGoldCoinsText(text){
        this.elements.txtConvertYourGoldBalanceToGoldCoins().should('have.text',text)
    }
    verifySecureText(text){
        this.elements.txtSecure().should('have.text',text)
    }
    verifyStoredInHighSecurityVaultsText(text){
        this.elements.txtStoredInHighSecurityVaults().should('have.text',text)
    }
    verifyAccessible24x7Text(text){
        this.elements.txtAccessible24x7().should('have.text',text)
    }
    verifyBuySellDeliverAnytimeAnywhereText(text){
        this.elements.txtBuySellDeliverAnytimeAnywhere().should('have.text',text)
    }
    verifyDeliveryPendingIcon(){
        this.elements.iconDeliveryPending().should('be.visible')
    }
    verifyDeliveryPendingLabel(text){
        this.elements.lblDeliveryPending().should('have.text',text)
    }
    verifyGoldDeliveryLabel(text){
        this.elements.lblGoldDelivery().should('have.text',text)
    }
    verifyGoldDeliveryValue(value){
        this.elements.valGoldDelivery().should('have.text',value)
    }
    clickTrackOrderButton(){
        this.elements.btnTrackOrder().click()
    }
    verifyTrackOrderButton(btn){
        this.elements.btnTrackOrder().should('have.text', btn)
    }
    verifyTransactionHistoryIcon(){
        this.elements.iconTransactionHistory().should('be.visible')
    }
    verifyTransactionHistoryLabel(text){
        this.elements.lblTransactionHistory().should('have.text',text)
    }
    verifyRewardsCard(){
        this.elements.cardRewards().should('be.visible')
    }
    verifyRewardsIcon(){
        this.elements.iconRewards().should('be.visible')
    }
    verifyRewardsLabel(text){
        this.elements.lblRewards().should('have.text',text)
    }
    clickRewardsLabel(){
        this.elements.lblRewards().click()
    }
    verifyRewardsSubText(text){
        this.elements.subTxtRewards().should('have.text',text)
    }
    verifyMilestonesIcon(){
        this.elements.iconMilestones().should('be.visible')
    }
    verifyMilestonesLabel(text){
        this.elements.lblMilestones().should('have.text',text)
    }
    clickMilestonesLabel(){
        this.elements.lblMilestones().click()
    }
    verifyMilestonesSubText(text){
        this.elements.subTxtMilestones().should('have.text',text)
    }
    verifyGoldIcon(){
        this.elements.iconGold().should('be.visible')
    }
    verifyLiveIcon(){
        this.elements.iconLive().should('be.visible')
    }
    clickSell24KGoldButton(){
        this.elements.btnSell24KGold().click()
    }
    clickGoldDeliveryButton(){
        this.elements.btnGoldDelivery().click()
    }
    verifyAdvantagesOfBuying24KGoldLabelNotExist(){
        this.elements.lblAdvantagesOfBuying24KGold().should('not.exist')
    }
    verifyInvest1NotExist(){
        this.elements.btnInvest().should('not.exist')
    }
    verifyTransactionHistoryLabelNotVisible(){
        this.elements.lblTransactionHistory().should('not.exist')
    }
    verifyInvestOneRupeeButton(){
        this.elements.btnInvestOneRupee().should('be.visible')
    }
    clickInvestOneRupeeButton(){
        this.elements.btnInvestOneRupee().click()
    }
    verifyInvestWithRupee10Text(){
        this.elements.txtInvestWithRupee10().should('exist')
    }
    verifyInvestWithRupee10TextNotVisible(){
        this.elements.txtInvestWithRupee10().should('not.exist')
    }
    verifyInsuranceLabel(text){
        this.elements.lblInsurance().should('have.text',text)
    }
    clickTransactionHistoryLabel(){
        this.elements.lblTransactionHistory().click()
    }
    verifyAutoInvestLabel(autoinvest){
        this.elements.lblAutoInvest().should('have.text', autoinvest)
    }
    clickClosePopUp(){
        this.elements.lblCongrations().click()
    }
    clickFAQLabel(){
        this.elements.lblFAQ().click()
    }
}
export const goldHomePage = new GoldHomePage()
