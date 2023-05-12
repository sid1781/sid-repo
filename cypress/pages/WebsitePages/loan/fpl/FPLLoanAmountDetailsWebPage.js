/// <reference types = "cypress" />

export class FPLLoanAmountDetailsWebPage {

    details = {
        zeplin: () => 'https://zpl.io/jZo6vN6', //apply coupon code
        zeplin_varitaion: () => 'https://zpl.io/5E0RGPW', //successfull
        overflow: () => '', //TODO Link
    }

    elements = {

        pageTitle: () => cy.getIframeBody().find('[data-cy="loanAmt"]'),
        iconRupee: () => cy.getIframeBody().find('[data-cy="app.components.Common.rupee_symbol"]'),
        valLoanAmount: () => cy.getIframeBody().find('[data-cy="loanAmount"]'),
        //Total Interest Block
        lblTotalInterest: () => cy.getIframeBody().find('[data-cy="totalInterest_title"]'),
        iconRupee: () => cy.getIframeBody().find('[class="rupee"]'),
        valTotalInterest: () => cy.getIframeBody().find('[data-cy="totalInterest_formatCurrency"]'),
        // Annutal Annualized Interest Rate Block
        lblAnnualizedInterestRate: () => cy.getIframeBody().find('[data-cy="anualInterestRate_title"]'),
        valAnnualizedInterestRate: () => cy.getIframeBody().find('[data-cy="anualInterestRate_formatCurrency"]'),
        //APR Block
        lblAnnualPercentageRate: () => cy.getIframeBody().find('[data-cy="aprAmount_title"]'),
        valAnnualPercentageRate: () => cy.getIframeBody().find('[data-cy="aprAmount_formatCurrency"]'),
        //Insureance Premium Block
        lblInsurancePremium: () => cy.getIframeBody().find('[data-cy="insurance_title"]'),
        subtxtInsurancePremium: () => cy.getIframeBody().find('[data-cy="insurance_desc"]'),
        valInsurancePremium: () => cy.getIframeBody().find('[data-cy="insurance_formatCurrency"]'),
        //Fees and Charges Block 
        lblFeesAndCharges: () => cy.getIframeBody().find('[data-cy="feesCharges_title"]'),
        subtxtFeesAndCharges: () => cy.getIframeBody().find('[data-cy="feesCharges_desc"]'),
        //Processing Fee Block
        lblProcessingFee: () => cy.getIframeBody().find('[data-cy="processingFee_title"]'),
        iconProcessingFee: () => cy.getIframeBody().find('[data-cy="StarImg"]'),
        subtxtProcessingFee: () => cy.getIframeBody().find('[data-cy="processingFee_reducedPtInfo"]'),
        valProcessingFee: () => cy.getIframeBody().find('[data-cy="processingFee_formatCurrency"]'),
        //One Time Onboarding Fee Block 
        lblOneTimeOnboardingFee: () => cy.getIframeBody().find('[data-cy="allFees_title"]'),
        valOneTimeOnboardingFee: () => cy.getIframeBody().find('[data-cy="allFees_formatCurrency"]'),
        //Loan Documennts Signing Fee Block
        lblLoanDocumantSigningFee: () => cy.getIframeBody().find('[data-cy="agreementFees_title"]'),
        valLoanDocumantSigningFee: () => cy.getIframeBody().find('data-cy="agreementFees_formatCurrency"'),
        //CSR Fee Block
        lblCSRFee: () => cy.getIframeBody().find('[data-cy="csr"]'),
        valCSRFee: () => cy.getIframeBody().find('[data-cy="csr_formatCurrency"]'),
        //GST Block
        lblGST: () => cy.getIframeBody().find('[data-cy="gst"]'),
        valGST: () => cy.getIframeBody().find('[data-cy="gst_formatCurrency"]'),
        //Transfer To Bank Block
        lblTransferToBank: () => cy.getIframeBody().find('[data-cy="top_leftLabel_0"]'),
        valTransferToBank: () => cy.getIframeBody().find('[data-cy="bottom_leftLabel_1"]'),
        //Tenure Block
        lblTenure: () => cy.getIframeBody().find('[data-cy="top_rightLabel_0"]'),
        lblTenureMonths: () => cy.getIframeBody().find('[data-cy="bottom_rightLabel_1"]'),
        // Apply Coupon Code Block 
        iconApplyCouponCode: () => cy.getIframeBody().find('[]'),
        lblApplyCouponCode: () => cy.getIframeBody().find('[data-cy="app.components.BDiscount.applyDiscountCouponCode"]'),
        lnkApplyCouponCode: () => cy.getIframeBody().find('[]'),
        lblAppliedSuccessfully: () => cy.getIframeBody().find('[]'),
        lnkAppliedSuccessfully: () => cy.getIframeBody().find('[]'),
        subtxtDiscountAppliedOnTheProcessingFee: () => cy.getIframeBody().find('[data-cy="discountMsg"]'),
        //Buy EMI Block
        iconBuyEMI: () => cy.getIframeBody().find(''),
        lblBuyEMI: () => cy.getIframeBody().find('[data-cy="app.components.LoanDetails.applyInsuranceFee"]'),
        subtxtBuyEMI: () => cy.getIframeBody().find('[data-cy="app.components.LoanDetails.applyInsuranceFeeDesc"]'),
        lnkKnowMore: () => cy.getIframeBody().find('[data-cy="app.components.LoanDetails.knowMoreText"]'),
        chkBuyEMI: () => cy.getIframeBody().find('[data-cy="icon_insuranceFeeCheckBox"]'),
        // CSR Block
        iconGetMyCSR: () => cy.getIframeBody().find(''),
        lblGetMyCSR: () => cy.getIframeBody().find('[data-cy="app.components.LoanDetails.applyCSRfee"]'),
        subtxtGetMyCSR: () => cy.getIframeBody().find('[data-cy="app.components.LoanDetails.csrDiscountText"]'),
        lnkKnowMore: () => cy.getIframeBody().find('[data-cy="app.components.LoanDetails.knowMoreText"]'),
        chkGetMyCSR: () => cy.getIframeBody().find('[data-cy="icon_crsFeeCheckBox"]'),
        //Repayment Schedule Button
        btnViewRepaymentSchedule: () => cy.getIframeBody().find('[data-cy="app.components.LoanDetails.viewRepaySchedule"]',{timeout:20000}),

        //coupon details block
        iconCoupon: () => cy.getIframeBody().find('[]'),
        textCoupon_AppliedSuccessful: () => cy.getIframeBody().find('[data-cy="app.components.BDiscount.applyDiscountApplSucc"]'),
        subTextDiscountAppliedOnProcessingFee: () => cy.getIframeBody().find('[data-cy="discountMsg"]'),
        iconClose: () => cy.getIframeBody().find('[data-cy="close"]'),
        lblLoanAmount: () => cy.getIframeBody().find('[data-cy="loanAmt"]'),

        //View breakup
        lblViewBreakUp: () => cy.getIframeBody().find('[data-cy="viewDetails"]'),
        lblHideBreakUp: () => cy.getIframeBody().find('[data-cy="viewDetails"]')

    }

    verifyViewBreakupText(breakup) {
        this.elements.lblViewBreakUp().should('have.text', breakup)
    }

    clickViewBreakupText() {
        this.elements.lblViewBreakUp().click()
    }

    verifyHideBreakUpText(breakup) {
        this.elements.lblHideBreakUp().should('have.text', breakup)
    }
    clickHideBreakUpText() {
        this.elements.lblHideBreakUp().click()
    }

    validate_Contensts_In_Breakup_Block(breakup, lblCSRFee) {
        if (this.verifyHideBreakUpText(breakup)) {
            this.verifyCSRFeeLabel(lblCSRFee)
        }
        else {
            this.clickViewBreakupText()
            this.verifyCSRFeeLabel(lblCSRFee)
        }
    }
    // lblCSRFee 
    verifyCSRFeeLabel(lblCSRFee) {
        this.elements.lblCSRFee().should('have.text', lblCSRFee)
    }
    // lblGST
    verifyGSTLabel(lblGST) {
        this.elements.lblGST().should('have.text', lblGST)
    }

    verifyApplyCouponCodeLabel() {
        this.elements.lblApplyCouponCode().should('be.visible').click()
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
    //  iconClose
    clickCloseIcon() {
        this.elements.iconClose().click()
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
        this.elements.chkGetMyCSR().click()
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


}

export const fplLoanAmountDetailsWebPage = new FPLLoanAmountDetailsWebPage()