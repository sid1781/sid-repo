///<reference types="cypress" />

export class CSRInfoPage{

    details = {
        zeplin : () => 'https://zpl.io/25BvOvJ',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=6f089f4d',
    }

    elements = {
        pageTitle : () => cy.get('[data-cy="app.components.CreditScore.ks_kb_page_title"]').eq(1), 
        lblCreditHealthMatters : () => cy.get(''),
        iconConfirmRegisteredMobileNumber : () => cy.get('[data-cy="cardLoanImg_app.components.CreditScore.ks_mobile_confirm_text"]'),
        txtConfirmRegisteredMobileNumber : () => cy.get('[data-cy="label_app.components.CreditScore.ks_mobile_confirm_text"]'),
        txtModesOfPaymentForCreditScoreReportAndTaxInfo : () => cy.get('[data-cy="app.components.CreditScore.ks_credit_get_now_amount_txt"]'),
        btnPayAndGetReport : () => cy.get('[data-cy="app.components.CreditScore.ks_credit_get_now_btn_with_amt"]'),
        txtMinCreditScore : () => cy.get('[data-cy="creditMinScore"]'), 
        txtMaxCreditScore : () => cy.get('[data-cy="creditMaxScore"]'),
        txtCreditScoreProviderName : () => cy.get('[data-cy="app.components.CreditScore.ks_score_title"]'),
        txtCreditScore : () => cy.get('[data-cy="app.components.CreditScore.csr_NA_text"]'),
        lblCreditScoreGenerationDate : () => cy.get('[data-cy="app.components.CreditScore.ks_last_update_txt"]'),
        btnDownloadCreditReport : () => cy.get('[data-cy="app.components.CreditScore.ks_download_pdf_btn"]'),
        btnGetLatestCreditReport : () => cy.get('[data-cy="app.components.CreditScore.csr_regen_button"]'),
        iconRefreshScore : () => cy.get('[data-cy="img_app.components.CreditScore.csr_regen_info"]'),
        txtRefreshScore : () => cy.get('[data-cy="label_app.components.CreditScore.csr_regen_info"]'),
        lblCreditStatus: () => cy.get('[data-cy="app.components.CreditScore.ks_credit_status_text"]'), 
        iconCompareWithPreviousReport: () => cy.get(''),
        lblCompareWithPreviousReport: () => cy.get(''), 
        iconCreditAccountsAndHistory: () => cy.get(''),
        lblCreditAccountsAndHistory: () => cy.get(''), 
        iconCreditPaymentHistory: () => cy.get(''),
        lblCreditPaymentHistory: () => cy.get(''), 
        iconCheckYourCreditEnquiries: () => cy.get(''),
        lblCheckYourCreditEnquiries: () => cy.get(''),
        lblCreditKeyFactors: () => cy.get(''),
        lblOnTimePayments : () => cy.get('[data-cy="app.components.CreditScore.ks_one_time_payment"]'),
        txtCreditStatusOnTimePayments : () => cy.get('[data-cy="app.components.CreditScore.ks_credit_status_text"]'),
        lblCreditUsageOnTimePayments : () => cy.get('[data-cy="app.components.CreditScore.ks_credit_usages"]'),
        txtImpactOnCreditScore : () => cy.get('[data-cy="app.components.CreditScore.ks_low_impact_desc3"]'),
        lblCreditUsage : () => cy.get('[data-cy="app.components.CreditScore.ks_one_time_payment"]'),
        txtCreditStatusCreditUsage : () => cy.get('[data-cy="app.components.CreditScore.ks_credit_status_text"]'),
        lblOldestAccountAge : () => cy.get('[]'),
        txtCreditStatusOldestAccountAge: () => cy.get('[]'),
        lblCreditUsageOldestAccountAge : () => cy.get('[]'),
        lblNumberOfAccounts : () => cy.get('[]'),
        txtCreditStatusNumberOfAccounts: () => cy.get('[]'),
        lblCreditUsageNumberOfAccounts : () => cy.get('[]'),
        lblLast30DaysEnquiry : () => cy.get('[]'),
        txtCreditStatusLast30DaysEnquiry: () => cy.get('[]'),
        lblCreditUsageLast30DaysEnquiry : () => cy.get('[]'),
        btnGetNow : () => cy.get(''),
    }
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    } 
    clickPayAndGetReportButton(){
        this.elements.btnPayAndGetReport().click()
    } 
    verifyMinCreditScoreText(){
        this.elements.txtMinCreditScore().should('be.visible')
    }
    verifyMaxCreditScoreText(){
        this.elements.txtMaxCreditScore().should('be.visible')
    }
    verifyCreditScoreProviderNameText(providername){
        this.elements.txtCreditScoreProviderName().should('have.text', providername)
    }
    verifyCreditScore(){
        this.elements.txtCreditScore().should('be.visible')
    }
    verifyCreditScoreGenerationDateLabel(){
        this.elements.lblCreditScoreGenerationDate().should('be.visible')
    }
    verifyDownloadCreditReportButton(buttonname){
        this.elements.btnDownloadCreditReport().should('have.text', buttonname)
    }
    clickDownloadCreditReportButton(){
        this.elements.btnDownloadCreditReport().click()
    }
    verifyGetLatestCreditReportButton(btnname){
        this.elements.btnGetLatestCreditReport().should('have.text', btnname)
    }
    clickGetLatestCreditReportButton(){
        this.elements.btnGetLatestCreditReport.click()
    }
    verifyRefreshScoreIcon(){
        this.elements.iconRefreshScore().should('be.visible')
    }
    verifyRefreshScoreText(){
        this.elements.txtRefreshScore().should('be.visible')
    }
    verifyCreditStatusLabel(){
        this.elements.lblCreditStatus().should('be.visible')
    }
    verifyCompareWithPreviousReportIcon(){
        this.elements.iconCompareWithPreviousReport().should('be.visible')
    }
    verifyCompareWithPreviousReportLabel(){
        this.elements.lblCompareWithPreviousReport().should('be.visible')
    }
    verifyCompareWithPreviousReportLabel(){
        this.elements.lblCompareWithPreviousReport().should('be.visible')
    }
    verifyCreditAccountsAndHistoryIcon(){
        this.elements.iconCreditAccountsAndHistory().should('be.visible')
    }
    verifyCreditAccountsAndHistoryLabel(){
        this.elements.lblCreditAccountsAndHistory().should('be.visible')
    }
    verifyCreditPaymentHistoryIcon(){
        this.elements.iconCreditPaymentHistory().should('be.visible')
    }
    verifyCreditPaymentHistoryLabel(){
        this.elements.lblCreditPaymentHistory.should('be.visible')
    }
    verifyCreditPaymentHistoryLabel(){
        this.elements.lblCreditPaymentHistory().should('be.visible')
    }
    verifyCheckYourCreditEnquiriesIcon(){
        this.elements.iconCheckYourCreditEnquiries().should('be.visible')
    }
    verifyCheckYourCreditEnquiriesLabel(){
        this.elements.lblCheckYourCreditEnquiries().should('be.visible')
    }
    verifyCreditKeyFactorsLabel(){
        this.elements.lblCreditKeyFactors().should('be.visible')
    }
    verifyOnTimePaymentsLabel(){
        this.elements.lblOnTimePayments().should('be.visible')
    }
    verifyCreditStatusOnTimePaymentsText(){
        this.elements.txtCreditStatusOnTimePayments().should('be.visible')
    }
    verifyCreditStatusOnTimePaymentsLabel(){
        this.elements.lblCreditUsageOnTimePayments().should('be.visible')
    }
    verifyImpactOnCreditScoreText(){
        this.elements.txtImpactOnCreditScore().should('be.visible')
    }
    verifyCreditUsageLabel(){
        this.elements.lblCreditUsage().should('be.visible')
    }
    verifyCreditStatusCreditUsageText(){
        this.elements.txtCreditStatusCreditUsage().should('be.visible')
    }
    verifyOldestAccountAgeLabel(){
        this.elements.lblOldestAccountAge().should('be.visible')
    }
    verifyCreditStatusOldestAccountAgeText(){
        this.elements.txtCreditStatusOldestAccountAge().should('be.visible')
    }
    verifyCreditUsageOldestAccountAgeLabel(){
        this.elements.lblCreditUsageOldestAccountAge().should('be.visible')
    }
    verifyNumberOfAccountsLabel(){
        this.elements.lblNumberOfAccounts().should('be.visible')
    }
    verifyCreditStatusNumberOfAccountsText(){
        this.elements.txtCreditStatusNumberOfAccounts().should('be.visible')
    }
    verifyCreditUsageNumberOfAccountsLabel(){
        this.elements.lblCreditUsageNumberOfAccounts().should('be.visible')
    }
    verifyLast30DaysEnquiryLabel(){
        this.elements.lblLast30DaysEnquiry().should('be.visible')
    }
    verifyCreditStatusLast30DaysEnquiryText(){
        this.elements.txtCreditStatusLast30DaysEnquiry().should('be.visible')
    }
    verifyCreditUsageLast30DaysEnquiryLabel(){
        this.elements.lblCreditUsageLast30DaysEnquiry().should('be.visible')
    }
    clickGetNowButton(){
        this.elements.btnGetNow().click()
    }  
}

export const  csrInfoPage = new CSRInfoPage
