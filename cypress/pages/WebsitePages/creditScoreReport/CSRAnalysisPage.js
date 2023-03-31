///<reference types="cypress" />

export class CSRAnalysisPage {

    details = {
        zeplin: () => 'https://zpl.io/mDzDyxA',
        overflow: () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2',
    }

    elements = {
        pageTitle: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
        btnDownloadCreditReport: () => cy.getIframeBody().find('[data-cy="ksDownloadPdf"]'),
        btnDownloadLatestCreditReport: () => cy.getIframeBody().find('button').eq(1),
        iconrefreshScore: () => cy.getIframeBody().find('[]'),
        txtrefreshSckore: () => cy.getIframeBody().find('[]'),
        TxtOnTimePayments: () => cy.getIframeBody().find('[]'),
        valOnTimePayments: () => cy.getIframeBody().find('[]'),
        TxtCreditUsage: () => cy.getIframeBody().find('[]'),
        valCreditUsage: () => cy.getIframeBody().find('[]'),
        TxtOldestAccountAge: () => cy.getIframeBody().find('[]'),
        valOldestAccountAge: () => cy.getIframeBody().find('[]'),
        TxtNumberOfAccounts: () => cy.getIframeBody().find('[]'),
        valNumberOfAccounts: () => cy.getIframeBody().find('[]'),
        iconCreditReport: () => cy.getIframeBody().find('[]'),
        TxtCreditReport: () => cy.getIframeBody().find('[]'),
        txtCreditStatus: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_credit_status_text"]'),
        //comparing csr report
        iconComparingPriviousReport: () => cy.getIframeBody().find('[data-cy="icon_app.components.CreditScore.compare_with_prev_report"]'),
        lblComparingPriviousReport: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.compare_with_prev_report"]'),
        lnkComparingPriviousReport: () => cy.getIframeBody().find('[data-cy="right-icon"]'),

        //CSR Accounts and History
        iconAccountsAndHistory: () => cy.getIframeBody().find('[data-cy="icon_app.components.CreditScore.credit_account_and_history"]'),
        lblAccountsAndHistory: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.credit_account_and_history"]'),
        lnkAccountsAndHistory: () => cy.getIframeBody().find('[data-cy="right-icon"]'),

        //CSR payments and history
        iconPaymentsHistory: () => cy.getIframeBody().find('[data-cy="icon_app.components.CreditScore.credit_payment_history"]'),
        lblCreditPaymentsHistory: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.credit_payment_history"]'),
        lnkPaymentsHistory: () => cy.getIframeBody().find('[data-cy="right-icon"]'),

        // CSR checking your credits
        iconCheckCreditsEnquires: () => cy.getIframeBody().find('[data-cy="icon_app.components.CreditScore.check_your_credit_enquiry"]'),
        lblCheckCreditsEnquires: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.check_your_credit_enquiry"]'),
        lnkCheckCreditsEnquires: () => cy.getIframeBody().find('[data-cy="right-icon"]'),

        //CSR credit Key Factors
        txtCreditfactor: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.credit_key_factors"]'),
        lblCSRComparingPriviousReport: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.csr_status_change"]'),
        text30DaysEnquiry: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_no_of_accounts"]'),
        val30DaysEnquiry: () => cy.getIframeBody().find('[data-cy="value_4"]')
    }
    verifyPageTitle() {
        this.elements.pageTitle().should('be.visible')
    }
    verifyOnTimePaymentsText() {
        this.elements.TxtOnTimePayments.should('be.visible')
    }
    verifyOnTimePaymentsValue() {
        this.elements.valOnTimePayments().should('be.visible')
    }
    verifyCreditUsageText() {
        this.elements.TxtCreditReport().should('be.visible')
    }
    verifyCreditUsageValue() {
        this.elements.valCreditUsage().should('be.visible')
    }
    verifyOldestAccountAgeText() {
        this.elements.TxtOldestAccountAge().should('be.visible')
    }
    verifyOldestAccountAgeValue() {
        this.elements.valOldestAccountAge().should('be.visible')
    }
    verifyNumberOfAccountsText() {
        this.elements.TxtNumberOfAccounts().should('be.visible')
    }
    verifyNumberOfAccountsValue() {
        this.elements.valNumberOfAccounts().should('be.visible')
    }
    verifyCreditReportIcon() {
        this.elements.iconCreditReport().should('be.visible')
    }
    verifyCreditReportText() {
        this.elements.TxtCreditReport().should('be.visible')
    }
    clickdownloadCreditReportButton() {
        this.elements.btnDownloadCreditReport().click({ force: true })
    }
    verifyCreditStatusText(text) {
        this.elements.txtCreditStatus().should('have.text', text)
    }
    clickCSRComparingPriviousReportLabel() {
        this.elements.lblCSRComparingPriviousReport().click()
    }
    clickDownloadLatestCreditReportButton() {
        this.elements.btnDownloadLatestCreditReport().click()
    }
    //methods i am created 15

    verifyComparingPriviousReport() {
        this.elements.lblComparingPriviousReport().should('be.visible')
    }
    clickComparingPriviousReport() {
        this.elements.lblComparingPriviousReport().click({ force: true })
    }
    clickCreditPaymentsHistory() {
        this.elements.lblCreditPaymentsHistory().click({ force: true })
    }

    verify30DaysEnquiryText(txt) {
        this.elements.text30DaysEnquiry().should('have.text', txt)
    }
    click30DaysEnquiry() {
        this.elements.text30DaysEnquiry().click()
    }
    verifyCrediAccountAndHistory() {
        this.elements.lblAccountsAndHistory().should('be.visible')
    }
    clickCreditAccountAndHistory() {
        this.elements.lblAccountsAndHistory().click()
    }
    verifyCreditPaymentHistory() {
        this.elements.lblCreditPaymentsHistory().should('be.visible')
    }
    clickPaymentsHistory() {
        this.elements.lblCreditPaymentsHistory().click()
    }

    verifyCheckCreditsEnquires() {
        this.elements.lblCheckCreditsEnquires().should('be.visible')
    }
    clickCheckCreditsEnquires() {
        this.elements.lblCheckCreditsEnquires().click()
    }
}

export const csrAnalysisPage = new CSRAnalysisPage