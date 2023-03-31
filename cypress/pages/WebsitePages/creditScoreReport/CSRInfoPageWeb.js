///<reference types="cypress" />

export class CSRInfoPageWeb{

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5e8b33c1e75119b93cab714c',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle : () => cy.getIframeBody().find('[data-cy="csrTitle"]').eq(1), 
        btnPayAndGetReport : () => cy.get('[data-cy="getReportBtn"]'),
        txtMinCreditScore : () => cy.getIframeBody().find('[data-cy="creditMinScore"]'), 
        txtMaxCreditScore : () => cy.getIframeBody().find('[data-cy="creditMaxScore"]'),
        txtCreditScoreProviderName : () => cy.getIframeBody().find('[data-cy="scoreTitle"]'),
        txtCreditScore : () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.csr_NA_text"]'),
        lblCreditScoreGenerationDate : () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_last_update_txt"]'),
        btnDownloadCreditReport : () => cy.getIframeBody().find('[data-cy="ksDownloadPdf"]'),
        btnGetLatestCreditReport : () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.csr_regen_button"]'),
        iconRefreshScore : () => cy.getIframeBody().find('[data-cy="img_app.components.CreditScore.csr_regen_info"]'),
        txtRefreshScore : () => cy.getIframeBody().find('[data-cy="label_app.components.CreditScore.csr_regen_info"]'),
        lblCreditStatus: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_credit_status_text"]'), 
        iconCompareWithPreviousReport: () => cy.getIframeBody().find(''),
        lblCompareWithPreviousReport: () => cy.getIframeBody().find(''), 
        iconCreditAccountsAndHistory: () => cy.getIframeBody().find(''),
        lblCreditAccountsAndHistory: () => cy.getIframeBody().find(''), 
        iconCreditPaymentHistory: () => cy.getIframeBody().find(''),
        lblCreditPaymentHistory: () => cy.getIframeBody().find(''), 
        iconCheckYourCreditEnquiries: () => cy.getIframeBody().find(''),
        lblCheckYourCreditEnquiries: () => cy.getIframeBody().find(''),
        lblCreditKeyFactors: () => cy.getIframeBody().find(''),
        lblOnTimePayments : () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_one_time_payment"]'),
        txtCreditStatusOnTimePayments : () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_credit_status_text"]'),
        lblCreditUsageOnTimePayments : () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_credit_usages"]'),
        txtImpactOnCreditScore : () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_low_impact_desc3"]'),
        lblCreditUsage : () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_one_time_payment"]'),
        txtCreditStatusCreditUsage : () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_credit_status_text"]'),
        lblOldestAccountAge : () => cy.getIframeBody().find('[]'),
        txtCreditStatusOldestAccountAge: () => cy.getIframeBody().find('[]'),
        lblCreditUsageOldestAccountAge : () => cy.getIframeBody().find('[]'),
        lblNumberOfAccounts : () => cy.getIframeBody().find('[]'),
        txtCreditStatusNumberOfAccounts: () => cy.getIframeBody().find('[]'),
        lblCreditUsageNumberOfAccounts : () => cy.getIframeBody().find('[]'),
        lblLast30DaysEnquiry : () => cy.getIframeBody().find('[]'),
        txtCreditStatusLast30DaysEnquiry: () => cy.getIframeBody().find('[]'),
        lblCreditUsageLast30DaysEnquiry : () => cy.getIframeBody().find('[]'),
        btnGetNow : () => cy.getIframeBody().find(''),
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

export const  csrInfoPageWeb = new CSRInfoPageWeb