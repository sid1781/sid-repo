/// <reference types = "cypress" />

export class SALoanAmountDetailsPage {

    details = {
        zeplin: () => 'https://zpl.io/jZo6vN6', //apply coupon code
        zeplin_varitaion: () => 'https://zpl.io/5E0RGPW', //successfull
        overflow: () => '', //TODO Link
    }

    elements = {

        pageTitle: () => cy.get('[data-cy="loanAmt"]'),
        iconRupee: () => cy.get('[data-cy="app.components.Common.rupee_symbol"]'),
        valLoanAmount: () => cy.get('[data-cy="loanAmount"]'),
        //Total Interest Block
        lblTotalInterest: () => cy.get('[data-cy="totalInterest_title"]'),
        iconRupee: () => cy.get('[class="rupee"]'),
        valTotalInterest: () => cy.get('[data-cy="totalInterest_formatCurrency"]'),
        // Annutal Annualized Interest Rate Block
        lblAnnualizedInterestRate: () => cy.get('[data-cy="anualInterestRate_title"]'),
        valAnnualizedInterestRate: () => cy.get('[data-cy="anualInterestRate_formatCurrency"]'),
        //APR Block
        lblAnnualPercentageRate: () => cy.get('[data-cy="aprAmount_title"]'),
        valAnnualPercentageRate: () => cy.get('[data-cy="aprAmount_formatCurrency"]'),
        //Insureance Premium Block
        lblInsurancePremium: () => cy.get('[data-cy="insurance_title"]'),
        subtxtInsurancePremium: () => cy.get('[data-cy="insurance_desc"]'),
        valInsurancePremium: () => cy.get('[data-cy="insurance_formatCurrency"]'),
        //Fees and Charges Block 
        lblFeesAndCharges: () => cy.get('[data-cy="feesCharges_title"]'),
        subtxtFeesAndCharges: () => cy.get('[data-cy="feesCharges_desc"]'),
        //Processing Fee Block
        lblProcessingFee: () => cy.get('[data-cy="processingFee_title"]'),
        iconProcessingFee: () => cy.get('[data-cy="StarImg"]'),
        subtxtProcessingFee: () => cy.get('[data-cy="processingFee_reducedPtInfo"]'),
        valProcessingFee: () => cy.get('[data-cy="processingFee_formatCurrency"]'),
        //One Time Onboarding Fee Block 
        lblOneTimeOnboardingFee: () => cy.get('[data-cy="allFees_title"]'),
        valOneTimeOnboardingFee: () => cy.get('[data-cy="allFees_formatCurrency"]'),
        //Loan Documennts Signing Fee Block
        lblLoanDocumantSigningFee: () => cy.get('[data-cy="agreementFees_title"]'),
        valLoanDocumantSigningFee: () => cy.get('data-cy="agreementFees_formatCurrency"'),
        //CSR Fee Block
        lblCSRFee: () => cy.get('[data-cy="csr_title"]'),
        valCSRFee: () => cy.get('[data-cy="csr_formatCurrency"]'),
        //GST Block
        lblGST: () => cy.get('[data-cy="gst_title"]'),
        valGST: () => cy.get('[data-cy="gst_formatCurrency"]'),
        //Transfer To Bank Block
        lblTransferToBank: () => cy.get('[data-cy="top_leftLabel_0"]'),
        valTransferToBank: () => cy.get('[data-cy="bottom_leftLabel_1"]'),
        //Tenure Block
        lblTenure: () => cy.get('[data-cy="top_rightLabel_0"]'),
        lblTenureMonths: () => cy.get('[data-cy="bottom_rightLabel_1"]'),
        // Apply Coupon Code Block 
        iconApplyCouponCode: () => cy.get('[]'),
        lblApplyCouponCode: () => cy.get('[data-cy="app.components.BDiscount.applyDiscountCouponCode"]'),
        lnkApplyCouponCode: () => cy.get('[]'),
        lblAppliedSuccessfully: () => cy.get('[data-cy="app.components.BDiscount.applyDiscountApplSucc"]'),
        lnkAppliedSuccessfully: () => cy.get('[]'),
        subtxtDiscountAppliedOnTheProcessingFee: () => cy.get('[data-cy="discountMsg"]'),
        //Buy EMI Block
        iconBuyEMI: () => cy.get(''),
        lblBuyEMI: () => cy.get('[data-cy="app.components.LoanDetails.applyInsuranceFee"]'),
        subtxtBuyEMI: () => cy.get('[data-cy="app.components.LoanDetails.applyInsuranceFeeDesc"]'),
        lnkKnowMore: () => cy.get('[data-cy="app.components.LoanDetails.knowMoreText"]'),
        chkBuyEMI: () => cy.get('[data-cy="icon_insuranceFeeCheckBox"]'),
        // CSR Block
        iconGetMyCSR: () => cy.get(''),
        lblGetMyCSR: () => cy.get('[data-cy="app.components.LoanDetails.applyCSRfee"]'),
        subtxtGetMyCSR: () => cy.get('[data-cy="app.components.LoanDetails.csrDiscountText"]'),
        lnkKnowMore: () => cy.get('[data-cy="app.components.LoanDetails.knowMoreText"]'),
        chkGetMyCSR: () => cy.get('[data-cy="icon_crsFeeCheckBox"]'),
        //Repayment Schedule Button
        btnViewRepaymentSchedule: () => cy.get('[data-cy="app.components.LoanDetails.viewRepaySchedule"]'),
        lblLoanAmountUpto: () => cy.get('[data-cy="app.components.BbankAccount.place_locked_loan_amt_upto"]'),

        //Document Fee
        lblDocumentCollectFee: () => cy.get('[data-cy="allFees_title"]'),

    }

    verifyTotalIntrestLabel(label) {
        this.elements.lblTotalInterest().should('have.text', label)
    }
    verifyTotalIntrestValue(value) {
        this.elements.valTotalInterest().should('have.text', value)
    }
    verifyFeeAndchargesLabel(text) {
        this.elements.lblFeesAndCharges().should('have.text', text)
    }
    verifyApplyCouponCodeLabel() {
        this.elements.lblApplyCouponCode().should('be.visible').click()
    }

    clickGetMyCSRLabel(){
        this.elements.lblGetMyCSR().click()
    }

    clickApplyCouponCodeLink() {
        this.elements.lnkApplyCouponCode().click()
    }

    clickAppliedSuccessfullyLink() {
        this.elements.lnkAppliedSuccessfully().click()
    }

    verifyAnnualPercentageRateLabel(title) {
        this.elements.lblAnnualPercentageRate().should('have.text', title)
    }

    verifyNoAnnualPercentageRateLabel() {
        this.elements.lblAnnualPercentageRate().should('not.exist')
    }

    verifyAnnualPercentageRateValue() {
        this.elements.valAnnualPercentageRate().should('exist')
    }


    verifyProcessingFeeLabel() {
        this.elements.lblProcessingFee().should('be.visible')
    }

    verifyInsurancePremiumLabel() {
        this.elements.lblInsurancePremium().should('be.visible')
    }

    clickViewRepaymentScheduleBtn() {
        this.elements.btnViewRepaymentSchedule().should('be.visible').click()
    }

    verifyAppliedSuccessfullyLabel(text){
        this.elements.lblAppliedSuccessfully().should('have.text',text)
    }
    verifyDiscountAppliedOnTheProcessingFeeSubText(text){
        this.elements.subtxtDiscountAppliedOnTheProcessingFee().should('have.text',text)
    }
    clickKnowMoreLink() {
        this.elements.lnkKnowMore().should('be.visible').click()
    }
    verifyDocumentCollectFeeLabel(DocumentCollectFee){
        this.elements.lblDocumentCollectFee().should('have.text',DocumentCollectFee)
    }
    verifyLoanAmountUpto(txt){
        this.elements.lblLoanAmountUpto().should('have.text', txt)
    }
    verifyCSRFeeLabel(csrtextFee){
        this.elements.lblCSRFee().should('have.text',csrtextFee)
    }
    verifyBuyEMIChkBoxState(state) {
        if (state == 'checked') {
            this.elements.chkBuyEMI().should('have.attr', 'data-value', 'checked')
        } else {
            this.elements.chkBuyEMI().should('have.attr', 'data-value', 'unchecked')
        }
    }
    verifyGetMyCSRChkBoxState(state) {
        if (state == 'checked') {
            this.elements.chkGetMyCSR().should('have.attr', 'data-value', 'checked')
        } else {
            this.elements.chkGetMyCSR().should('have.attr', 'data-value', 'unchecked')
        }
    }
    clickGetMyCSRCheckBox(){
        this.elements.chkGetMyCSR().click({force:true})
    }
}

export const saLoanAmountDetailsPage = new SALoanAmountDetailsPage()