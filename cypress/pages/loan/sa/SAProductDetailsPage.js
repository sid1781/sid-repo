/// <reference types = "cypress" />

export class SAProductDetailsPage {

    details = {
        zeplin: () => '',
        overflow: () => '', //TODO Link
    }

    elements = {
        pageTitle : () => cy.get('[]'),
        lblLoanAmountUpto : () => cy.get('[data-cy="app.components.BbankAccount.place_locked_loan_amt_upto"]'),
        valLoanAmountUpto : () => cy.get('[data-cy="refinedLoanAmt"]'), 
        lblProcessingFee: () => cy.get('[data-cy="processingFee_title"]'),
        iconProcessingFee: () => cy.get('[data-cy="StarImg"]'),
        txtDeductedLoanAmount: () => cy.get('[data-cy="processingFee_reducedPtInfo"]'),
        valProcessingFee: () => cy.get('[data-cy="processingFee_formatCurrency"]'),
        lblGST: () => cy.get('[data-cy="gst_title"]'),
        valGST: () => cy.get('[data-cy="gst_formatCurrency"]'),
        lblInterestStartingfrom : () => cy.get('[]'),
        valInterestStartingfrom : () => cy.get('[]'),
        lblTenure: () => cy.get('[data-cy="top_rightLabel_0"]'),
        lblTenureMonths: () => cy.get('[data-cy="bottom_rightLabel_1"]'),
        iconPenaltyCharges: () => cy.get('[]'),
        txtPenaltyCharges: () => cy.get('[]'),
        btnApplyNow: () => cy.get('[data-cy="app.components.Common.apply_now_caps_text"]'),
        btnCallNow : () => cy.get('[data-cy="app.components.EmploymentSummary.need_help_call_now"]'),
        btnBackToLoans :() => cy.get('[data-cy="app.components.BbankAccount.place_locked_back_to_loans"]'),
        btnLocked : () => cy.get('[data-cy="app.components.BbankAccount.place_locked_status_text"]'),
    }
    verifyLoanAmountUptoLabel(txt){
        this.elements.lblLoanAmountUpto().should('have.text', txt)
    }
    clickApplyNowBtn(){
        this.elements.btnApplyNow().click()
    }
    verifyApplyNowbtn(){
        this.elements.btnApplyNow().should('be.visible')
    }
    verifyCallNowBtnNotVisible(){
        this.elements.btnCallNow().should('not.exist')
    }
    verifyBackToLoansBtn(){
        this.elements.btnBackToLoans().should('be.visible')
    }
    verifyLockedBtn(){
        this.elements.btnLocked().should('be.visible')
    }
}

export const saProductDetailsPage = new SAProductDetailsPage() 