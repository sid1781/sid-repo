/// <reference types = "cypress" />

export class AccountsPage {

    details = {
        zeplin: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        //Profile details section
        iconProfile: () => cy.get(".skins__Selfie-sc-9pap7r-15.jwNcPb"),
        txtProfileName: () => cy.get('[data-cy="profileName"]'),
        txtProfileEmail: () => cy.get('[data-cy="profileEmail"]'),
        valProfileMobile: () => cy.get('[data-cy="profileMobile"]'),
        //Offers section
        iconOffers: () => cy.get('.sc-htpNat.JiDcQ'),
        offersTitle: () => cy.get('[data-cy="app.components.BloanRecord.offr_banner_title]'),
        lbloffers: () => cy.get('[data-cy="app.components.BloanRecord.offr_banner_sub_title"]'),
        btnViewOffers: () => cy.get('[data-cy="app.components.BloanRecord.offr_banner_btn_txt"]'),
        //Salaried Loan
        iconSALoan: () => cy.get('[data-cy="icon"]'),
        lblSALoan: () => cy.get('[data-cy="app.components.BloanRecord.sa_banner_title"]'),
        subTxtSALoan: () => cy.get('[data-cy="app.components.BloanRecord.sa_banner_sub_title"]'),
        btnApplyNow: () => cy.get('[data-cy="app.components.Common.apply_now_caps_text"]'),
        //Discount And Credit Section
        iconDiscountAndCredit: () => cy.get('[name="ic-credit"]'),
        txtDiscountAndCredit: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_pd"]'),
        lblDiscount: () => cy.get('[data-cy="tag_app.components.BloanRecord.action_listing_pd"]'),
        lnkDiscountAndCredit: () => cy.get('[data-cy="listRow_app.components.BloanRecord.action_listing_pd"]').children().children('span', 'Discount & Credit').children(),
        //Refer And Earn Section
        iconReferAndEarn: () => cy.get('[name="ic-refer-new"]'),
        txtReferAndEarn: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_referearn"]'),
        lblReferAndEarn: () => cy.get('[data-cy="tag_app.components.BloanRecord.action_listing_referearn"]'),
        lnkReferAndEarn: () => cy.get('[data-cy="listRow_app.components.BloanRecord.action_listing_referearn"]').children().children('span', 'Refer & Earn').children(),
        // 24 Carat Gold Section
        icon24KGold: () => cy.get('[name="ic-gold"]'),
        txt24KGold: () => cy.get('[data-cy="app.components.BloanRecord._gold"]'),
        lbl24KGold: () => cy.get('[data-cy="tag_app.components.BloanRecord._gold"]'),
        lnk24KGold: () => cy.get('[data-cy="listRow_app.components.BloanRecord._gold"]').children().children('span', '24K Gold').children(),
        // Credit Score section
        iconCreditScore: () => cy.get('[name="ic-credit-meter"]'),
        txtCreditScore: () => cy.get('[data-cy="app.components.BloanRecord.kb_credit_score"]'),
        lblCreditscore: () => cy.get(['data-cy="tag_app.components.BloanRecord.kb_credit_score"']),
        lnkCreditScore: () => cy.get('[data-cy="listRow_app.components.BloanRecord.kb_credit_score"]').children().children('span', 'Credit Score').children(),
        //Profile Section
        iconProfile: () => cy.get('[name="ic-user"]'),
        txtProfile: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_profile"]'),
        lnkProfile: () => cy.get('[data-cy="listRow_app.components.BloanRecord.action_listing_profile"]').children().children('span', 'Profile').children(),
        //Bank Accounts Section
        iconBankAccounts: () => cy.get('[name="ic-bank1"]'),
        txtBankAccounts: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_bankacc"]'),
        lnkBankAccounts: () => cy.get('[data-cy="listRow_app.components.BloanRecord.action_listing_bankacc"]').children().children('span', 'Bank Accounts').children(),
        // KreditBee points Section
        iconKreditBeePoints: () => cy.get('[name="ic-kbcoin"]'),
        txtKreditBeePoints: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_points"]'),
        lnkKreditBeePoints: () => cy.get('[data-cy="listRow_app.components.BloanRecord.action_listing_points"]').children().children('span', 'Kreditbee Points').children(),
        // AutoDebit Mandate Section
        iconAutoDebitMandate: () => cy.get('[name="ic-esign"]'),
        txtAutoDebitMandate: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_nach"]'),
        lnkAutoDebitMandate: () => cy.get('[data-cy="listRow_app.components.BloanRecord.action_listing_nach"]').children().children('span', 'Auto Debit Mandates').children(),
        //Insurance Section
        iconInsurance: () => cy.get('[name="ic-insurance2"]'),
        txtInsurance: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_insurance"]'),
        lnkInsurance: () => cy.get('[data-cy="listRow_app.components.BloanRecord.action_listing_insurance"]').children().children('span', 'Insurance').children(),
        //Help Section
        iconHelp: () => cy.get('[name="ic-faq1"]'),
        txtHelp: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_help"]'),
        lnkHelp: () => cy.get('[data-cy="listRow_app.components.BloanRecord.action_listing_help"]').children().children('span', 'Help').children(),
        //Settings section
        iconSettings: () => cy.get('[name="ic-settings"]'),
        txtSettings: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_sett"]'),
        lnkSettings: () => cy.get('[data-cy="listRow_app.components.BloanRecord.action_listing_sett"]').children().children('span', 'Settings').children(),
        //Video Verification
        iconVideoVerification: () => cy.get('[name="ic-selfie"]'),
        txtVideoVerification: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_vKyc"]'),
        lnkVideoVerification: () => cy.get('[data-cy="listRow_app.components.BloanRecord.action_listing_vKyc"]').children().children('span', 'Video Verification').children(),
        //Expense Tracker
        iconExpenseTracker: () => cy.get('[name="ic-expense"]'),
        txtExpenseTracker: () => cy.get('[data-cy="app.components.BloanRecord.kb_expense_manager"]'),
        lnkExpenseTracker: () => cy.get('[data-cy="listRow_app.components.BloanRecord.kb_expense_manager"]').children().children('span', 'Expense Tracker').children(),
        btnInsurance: () => cy.get('[data-cy="insurance"]', { wait: 6000 }),
        lblInsurance: () => cy.get('[data-cy="app.components.BloanRecord.action_listing_insurance"]'),
        //Rate your experience
        lblRateYourExperience:()=>cy.get('[data-cy="app.components.BloanRecord.noti_title"]'),
        subtxtRateYourExperience:()=>cy.get('[data-cy="app.components.BloanRecord.noti_sub_title"]'),
        iconRateYourExperience:()=>cy.get('[]'),
        lblRateUs:()=>cy.get('[data-cy="app.components.BloanRecord.noti_btn_txt"]'),
        lnkRateUs:()=>cy.get('[]')

    }
    verifyDiscountAndCreditIcon(iconDiscountAndCredit) {
        this.elements.iconDiscountAndCredit().should('have.attr', 'src', iconDiscountAndCredit)
            .and('be.visible')
    }

    verifyDiscountAndCreditText(pagelbl) {
        this.elements.txtDiscountAndCredit().should('contain.text', pagelbl)
    }
    verifyDiscountAndCreditLink(lnkDiscountAndCredit) {
        this.elements.lnkDiscountAndCredit().should('have.attr', 'src', lnkDiscountAndCredit)
    }

    clickDiscountAndCreditText() {
        this.elements.txtDiscountAndCredit().click()
    }
    verifyReferAndEarnIcon(iconReferAndEarn) {
        this.elements.iconReferAndEarn().should('have.attr', 'src', iconReferAndEarn)
    }
    verifyReferandEarnText(pagelbl) {
        this.elements.txtReferAndEarn().should('contain.text', pagelbl)
    }
    verifyReferAndEarnLink(lnkReferAndEarn) {
        this.elements.lnkReferAndEarn().should('have.attr', 'src', lnkReferAndEarn)
    }
    clickReferAndEarnText() {
        this.elements.txtReferAndEarn().click()
    }
    verify24KGoldIcon(icon24KGold) {
        this.elements.icon24KGold().should('have.attr', 'src', icon24KGold)
    }
    verify24KGoldText(pagelbl) {
        this.elements.txt24KGold().should('contain.text', pagelbl)
    }
    verify24KGoldLink(lnk24KGold) {
        this.elements.lnk24KGold().should('have.attr', 'src', lnk24KGold)
    }
    click24KGoldText() {
        this.elements.txt24KGold().click()
    }
    verifyCreditScoreIcon(iconCreditScore) {
        this.elements.iconCreditScore().should('have.attr', 'src', iconCreditScore)
    }
    verifyCreditScoreText(pagelbl) {
        this.elements.txtCreditScore().should('contain.text', pagelbl)
    }
    verifyCreditScoreLink(lnkCreditScore) {
        this.elements.lnkCreditScore().should('have.attr', 'src', lnkCreditScore)
    }
    clickCreditScoreText() {
        this.elements.txtCreditScore().click()
    }
    verifyProfileIcon(iconProfile) {
        this.elements.iconProfile().should('have.attr', 'src', iconProfile)
    }
    verifyProfileText(pagelbl) {
        this.elements.txtProfile().should('contain.text', pagelbl)
    }
    verifyProfileLink(lnkProfile) {
        this.elements.lnkProfile().should('have.attr', 'src', lnkProfile)
    }
    clickProfileText() {
        this.elements.txtProfile().click()
    }
    verifyBankAccountsIcon(iconBankAccounts) {
        this.elements.iconBankAccounts().should('have.attr', 'src', iconBankAccounts)
    }
    verifyBankAccountsText(pagelbl) {
        this.elements.txtBankAccounts().should('contain.text', pagelbl)
    }
    verifyBankAccountsLink(lnkBankAccounts) {
        this.elements.lnkBankAccounts().should('have.attr', 'src', lnkBankAccounts)
    }
    clickBankAccountsBtn() {
        this.elements.txtBankAccounts().click()
    }
    verifyKreditBeePointsText(pagelbl) {
        this.elements.txtKreditBeePoints().should('contain.text', pagelbl)
    }
    clickKreditBeePointsBtn() {
        this.elements.txtKreditBeePoints().click()
    }
    verifyAutoDebitMandateIcon(iconAutoDebitMandate) {
        this.elements.iconAutoDebitMandate().should('have.attr', 'src', iconAutoDebitMandate)
    }
    verifyAutoDebitMandateText(pagelbl) {
        this.elements.txtAutoDebitMandate().should('contain.text', pagelbl)
    }
    verifyAutoDebitMandateLink(lnkAutoDebitMandate) {
        this.elements.lnkAutoDebitMandate().should('have.attr', 'src', lnkAutoDebitMandate)
    }
    clickAutoDebitMandateBtn() {
        this.elements.txtAutoDebitMandate().click()
    }
    verifyInsuranceIcon(iconInsurance) {
        this.elements.iconInsurance().should('have.attr', 'src', iconInsurance)
    }
    verifyInsuranceText(pagelbl) {
        this.elements.txtInsurance().should('contain.text', pagelbl).should('be.visible')
    }
    verifyInsuranceLink(lnkInsurance) {
        this.elements.lnkInsurance().should('have.attr', 'src', lnkInsurance)
    }
    clickInsuranceBtn() {
        this.elements.txtInsurance().click()
    }
    verifyHelpIcon(iconHelp) {
        this.elements.iconHelp().should('have.attr', 'src', iconHelp)
    }
    verifyHelpText(pagelbl) {
        this.elements.txtHelp().should('contain.text', pagelbl)
    }
    verifyHelpLink(lnkHelp) {
        this.elements.lnkHelp().should('have.attr', 'src', lnkHelp)
    }
    clickHelpText() {
        this.elements.txtHelp().click()
    }
    verifySettingsIcon(iconSettings) {
        this.elements.iconSettings().should('have.attr', 'src', iconSettings)
    }
    verifySettingsText(pagelbl) {
        this.elements.txtSettings().should('contain.text', pagelbl)
    }
    verifySettingsLink(lnkSettings) {
        this.elements.lnkSettings().should('have.attr', 'src', lnkSettings)
    }
    clickSettingsBtn() {
        this.elements.txtSettings().click()
    }
    verifyKreditbeePointsLink(lnkKreditBeePoints) {
        this.elements.lnkKreditBeePoints().should('have.attr', 'src', lnkKreditBeePoints)
    }
    verifyKreditbeePointsIcon(iconKreditBeePoints) {
        this.elements.iconKreditBeePoints().should('have.attr', 'src', iconKreditBeePoints)
    }
    verifyVideoVerificationText(VideoVerification) {
        this.elements.txtVideoVerification().should('contain.text', VideoVerification)
    }
    clickOnVideoVerificationText() {
        this.elements.txtVideoVerification().click()
    }
    verifyDiscountAndCreditTextDisabled() {
        this.elements.txtDiscountAndCredit().should('not.exist')
    }
    verifyExpenseTrackerText(ExpenseTracker) {
        this.elements.txtExpenseTracker().should('contain.text', ExpenseTracker)
    }
    verifyGoldIconDisabled(){
        this.elements.lbl24KGold().should('not.exist')
    }
    
    verifyInsuranceButtonNotVisible(){

        this.elements.btnInsurance().should('not.exist')
    }
    verifyInsuranceLabelNotVisible() {
        this.elements.lblInsurance().should('not.exist')
    }
    verifyRateYourExperienceLabel(text) {
        this.elements.lblRateYourExperience().should('have.text', text)
    }
    verifyRateYourExperienceSubText(text) {
        this.elements.subtxtRateYourExperience().should('have.text', text)
    }
    verifyRateYourExperienceIcon() {
        this.elements.iconRateYourExperience().should('be.visible')
    }
    verifyRateUsLabel(text) {
        this.elements.lblRateUs().should('have.text', text)
    }
    clickRateUsLink() {
        this.elements.lnkRateUs().click()
    }
    clickRateUsLabel() {
        this.elements.lblRateUs().click()
    }
    verifySALoanLabel(SA){
        this.elements.lblSALoan().should('have.text',SA)
    }
    verifySALoanSubText(SASubText){
        this.elements.subTxtSALoan().should('have.text',SASubText)
    }
    verifySAApplyNowButton(ApplyNow){
        this.elements.btnApplyNow().should("have.text",ApplyNow)
    }
}
export const accountsPage = new AccountsPage()