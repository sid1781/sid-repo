///<reference types="cypress" />

export class CSRPaymentOptionsPage {

    details = {
        zeplin : () => 'https://zpl.io/V4mEX0J',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=6f089f4d',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        btnBack: () => cy.get('[]'),
        iconHelp: () => cy.get('[data-cy="helpImg"]'),
        lblPaymentAmount: () => cy.get('[]'),
        valPaymentAmount: () => cy.get('[]'),
        lblFee: () => cy.get('[]'),
        valFeeAmount: () => cy.get('[data-cy="regenAmountDue"]'),
        lblGSTPayable: () => cy.get('[]'),
        valGSTAmount: () => cy.get('[]'),
        iconCSR: () => cy.get('[]'),
        lblGetCSROnNextLoan: () => cy.get('[]'),
        lblSelectPaymentMethod: () => cy.get('[]'),
        iconPayNow: () => cy.get('[data-cy="paymentOptionImg]'),
        iconPayWithCouponCode: () => cy.get('[]'),
        txtPayWithCouponCode: () => cy.get('[data-cy="app.components.CreditScore.csr_apply_coupon_or_points"]'),
        txtPayWithCouponCode_1: () => cy.get('[data-cy="app.components.CreditScore.csr_apply_coupon_code"]'),
        iconPayWithNextLoan: () => cy.get('[]'),
        subTxtPayNow: () => cy.get('[]'),
        subTxtPayWithNextLoan: () => cy.get('[]'),
        lblPayNow: () => cy.get('[data-cy="app.components.CreditScore.csr_payonline_text"]'),
        btnPayNow: () => cy.get('[data-cy="app.components.CreditScore.csr_payonline_text"]'),
        btnPayWithCouponCode: () => cy.get('[]'),
        lblPayWithNextLoan: () => cy.get('[data-cy="app.components.CreditScore.csr_pvnl_text"]'),
        btnPayWithNextLoan: () => cy.get('[]'),
        txtPayableAmount: () => cy.get('[data-cy="app.components.CreditScore.csr_payable_amt_text"]'),
        txtCoupon: () => cy.get('[data-cy="app.components.CreditScore.csr_couponss_text"]'),
        txtCouponSuccessFullMeassage: () => cy.get('[data-cy="app.components.CreditScore.csr_applied_success"]'),
        btnContinue: () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]'),
        btnCouponOrPoints: () => cy.get('[data-cy="app.components.CreditScore.csr_apply_coupon_or_points"]'),
        
    }

    verifyPageTitle(pageTile) {
        this.elements.pageTitle().should('have.text', pageTile)
    }

    verifyPaymentAmountLabel(label) {
        this.elements.lblPaymentAmount().should('have.text', label)
    }

    verifyPaymentAmountValue(value) {
        this.elements.verifyPaymentAmountValue().should('have.text', value)
    }

    clickPayNowButton() {
        this.elements.btnPayNow().click()
    }
    verifyPayNowLabel(paynow){
        this.elements.lblPayNow().should('have.text',paynow)
    }
    clickPayWithCouponCodeText() {
        this.elements.txtPayWithCouponCode().click()
    }

    clickPayWithCouponCodeBtn() {
        this.elements.txtPayWithCouponCode_1().click()
    }
    verifyPayWithCouponCodeText(PayWithCouponCode){
        this.elements.txtPayWithCouponCode_1().should('have.text',PayWithCouponCode)
    }
    verifyPayWithNextLoanLabel(paywithnextloan){
        this.elements.lblPayWithNextLoan().should('have.text',paywithnextloan)
    }
    clickPayWithNextLoanLabel(){
        this.elements.lblPayWithNextLoan().click()
    }
    verifyCouponSuccessFullMeassage(message) {
        this.elements.txtCouponSuccessFullMeassage().should('contain', message)
    }
    clickContinueButton() {
        this.elements.btnContinue().click({ force: true })
    }
    varifyPayableAmountText(payable){
        this.elements.txtPayableAmount().should('have.text',payable)
    }
    verifyCouponOrpointsButton(points) {
        this.elements.btnCouponOrPoints().should('have.text',points)
    }
    clickCouponOrpointsButton() {
        this.elements.btnCouponOrPoints().click()
    }
    verifyContinueButton() {
        this.elements.btnContinue().should('be.visible')
    }
    verifyFeeAmount(fee){
        this.elements.valFeeAmount().should('have.text',fee)
    }
}

export const csrPaymentOptionsPage = new CSRPaymentOptionsPage()
