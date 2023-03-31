/// <reference types = "cypress" />

export class FPLLoanAmountDetailsPage {

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
        subtxtInsurancePremium: () => cy.get('[data-cy="app.components.LoanDetails.applyInsuranceFeeDesc"]'),
        valInsurancePremium: () => cy.get('[data-cy="insurance_formatCurrency"]'),
        //Fees and Charges Block 
        lblFeesAndCharges: () => cy.get('[data-cy="feesCharges_title"]'),
        subtxtFeesAndCharges: () => cy.get('[data-cy="feesCharges_desc"]'),
        //Processing Fee Block
        lblProcessingFee: () => cy.get('[data-cy="processingFee_title"]',{timeout:5000}),
        iconProcessingFee: () => cy.get('[data-cy="StarImg"]'),
        subtxtProcessingFee: () => cy.get('[data-cy="processingFee_reducedPtInfo"]'),
        valProcessingFee: () => cy.get('[data-cy="processingFee_formatCurrency"]'),
        //One Time Onboarding Fee Block 
        lblOneTimeOnboardingFee: () => cy.get('[data-cy="allFees_title"]'),
        valOneTimeOnboardingFee: () => cy.get('[data-cy="allFees_formatCurrency"]'),
        //Loan Documennts Signing Fee Block
        lblLoanDocumantSigningFee: () => cy.get('[data-cy="agreementFees_title"]'),
        valLoanDocumantSigningFee: () => cy.get('[data-cy="agreementFees_formatCurrency"]'),
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
        chkGetMyCSR: () => cy.get('[data-id="checkBox"]'),
        //Repayment Schedule Button
        btnViewRepaymentSchedule: () => cy.get('[data-cy="app.components.LoanDetails.viewRepaySchedule"]'),
        //coupon details block
        iconCoupon: () => cy.get('[]'),
        textCoupon_AppliedSuccessful: () => cy.get('[data-cy="app.components.BDiscount.applyDiscountApplSucc"]'),
        textCouponCodeSuccessfullLoan:() => cy.get('[data-cy="app.components.BDiscount.applyPointsSucc"]'),
        subTextDiscountAppliedOnProcessingFee: () => cy.get('[data-cy="discountMsg"]'),
        iconClose: () => cy.get('[data-cy="close"]'),
        lblLoanAmount: () => cy.get('[data-cy="loanAmt"]'),
    }
    verifyApplyCouponCodeLabel() {
        this.elements.lblApplyCouponCode().should('be.visible')
    }

    verifyApplyCouponCodeLabel_1(lblApplyCouponCode) {
        this.elements.lblApplyCouponCode().should('have.text', lblApplyCouponCode)
    }

    clickApplyCouponCodeLabel() {
        this.elements.lblApplyCouponCode().click()
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
    verifyProcessingFeeLabel() {
        this.elements.lblProcessingFee().should('be.visible')
    }
    verifyOnboardingFeeLabel(onbardingfee){
        this.elements.lblOneTimeOnboardingFee().should('have.text',onbardingfee)
    }
    verifyOnboardingFeeValue(value){
        this.elements.valOneTimeOnboardingFee().should('have.text',value)
    }
    verifyInsurancePremiumLabel() {
        this.elements.lblInsurancePremium().should('be.visible')
    }
    clickViewRepaymentScheduleBtn() {
        this.elements.btnViewRepaymentSchedule().should('be.visible').click()
    }
    verifyAnnualPercentageRateLabel(title) {
        this.elements.lblAnnualPercentageRate().should('be.visible', title)
    }
    verifyAnnualPercentageRateValue() {
        this.elements.valAnnualPercentageRate().should('exist')
    }
    verifyProcessingFeeLabel(title) {
        this.elements.lblProcessingFee().should('be.visible', title)
    }
    verifyDiscountAppliedOnTheProcessingFee(discountapplied) {
        this.elements.subtxtDiscountAppliedOnTheProcessingFee().should('have.text', discountapplied)
    }
    verifyInsurancePremiumLabel(title) {
        this.elements.lblInsurancePremium().should('be.visible', title)
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
    // valProcessingFee
    verifyProcessingFeeText(valProcessingFee) {
        this.elements.valProcessingFee().should('have.text', valProcessingFee)
    }
    clickInsuranceKnowMoreLink() {
        this.elements.lnkKnowMore().should('be.visible').click()
    }
    //coupon details block
    //  iconCoupon
    verifyCouponIcon(iconCoupon) {
        this.elements.iconCoupon().should('have.attr', 'src', iconCoupon)
    }
    //  textCoupon_AppliedSuccessful
    verifyCouponAppliedText(textCoupon_AppliedSuccessful) {
        this.elements.textCoupon_AppliedSuccessful().should('have.text', textCoupon_AppliedSuccessful)
    }
    verifyCouponCodeSuccessfullLoanText(textCoupon_AppliedSuccessful) {
        this.elements.textCouponCodeSuccessfullLoan().should('have.text', textCoupon_AppliedSuccessful)
    }
    //  iconClose
    clickCloseIcon() {
        this.elements.iconClose().click()
    }
    clickBuyEMIcheckBox(){
        this.elements.chkBuyEMI().click()
    }
    verifyProcessingFee(){
        this.elements.subtxtProcessingFee().should('be.visible')
    }
    verifyLabelInsuranceProductNotVisible() {
        this.elements.lblInsurancePremium().should('not.exist')
    }
    verifyTxtInsuranceProductNotVisible() {
        this.elements.subtxtInsurancePremium().should('not.exist')
    }
    verifyDeductedFromLoanText(subtxt) {
        this.elements.subtxtInsurancePremium().should('have.text', subtxt)
    }
    verifyBuyEMIText(emitext) {
        this.elements.lblBuyEMI().should('have.text', emitext)
    }
    verifyCSRText(csrtext) {
        this.elements.lblGetMyCSR().should('have.text', csrtext)
    }
    verifyTransferToBankLabel(text) {
        this.elements.lblTransferToBank().should('have.text', text)
    }
    verifyTransferToBankValue(value) {
        this.elements.valTransferToBank().should('have.text', value)
    }
    clickBuyEmiCheckBox() {
        this.elements.chkBuyEMI().click()
    }
    clickGetMyCSRCheckBox() {
        this.elements.chkGetMyCSR().click({ multiple: true })
    }
    verifyTotalIntrestLabel(label) {
        this.elements.lblTotalInterest().should('have.text', label)
    }
    verifyTotalIntrestValue(value) {
        this.elements.valTotalInterest().should('have.text', value)
    }
    verifyAnnualizedIntrestRateLabel(label) {
        this.elements.lblAnnualizedInterestRate().should('have.text', label)
    }
    verifyAnnualizedIntrestRateValue(value) {
        this.elements.valAnnualizedInterestRate().should('have.text', value)
    }
    verifyFeeAndchargesLabel(text) {
        this.elements.lblFeesAndCharges().should('have.text', text)
    }
    verifyTenureLabel(tenure) {
        this.elements.lblTenure().should('have.text', tenure)
    }
    verifyLoanAmountLabel(title) {
        this.elements.lblLoanAmount().should('have.text', title)
    }
    verifyRepaymentShedulePageButton() {
        this.elements.btnViewRepaymentSchedule().should('be.visible')
    }
    verifyCouponAppliedLabel(appliedsuccessfully) {
        this.elements.lblAppliedSuccessfully().should('have.text', appliedsuccessfully)
    }
    verifyDiscountAppliedOnTheProcessingFeeSubText(text) {
        this.elements.subtxtDiscountAppliedOnTheProcessingFee().should('have.text', text)
    }
    verifyGSTlbl(gst){
        this.elements.lblGST().should('have.text',gst)
    }
    verifyGSTValue(value){
        this.elements.valGST().should('have.text',value)
    }
    verifyCSRFeeLabel(csrtextFee){
        this.elements.lblCSRFee().should('have.text',csrtextFee)
    }
    verifyCSRFeeValue(){
        this.elements.valCSRFee().should('be.visible')
    }
    verifyLoanDocumantSigningFee(document){
        this.elements.lblLoanDocumantSigningFee().should('have.text',document)
    }
    verifyLoanDocumantSigningFeeValue(Fees){
        this.elements.valLoanDocumantSigningFee().should('have.text',Fees)
    }
    verifyLoanDocumantSigningFeeDisabled(){
        this.elements.lblLoanDocumantSigningFee().should('not.exist')
    }
    verifyBuyEMIcheckBox() {
        this.elements.chkBuyEMI().should('be.visible')
    }

}

export const fplLoanAmountDetailsPage = new FPLLoanAmountDetailsPage