///<reference types="cypress" />

export class CSRPaymentOptionsWebPage {

    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5eb4fcfc14e3b54de3f5d15b',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.getIframeBodyWebsite().find('[]'),
        btnBack: () => cy.getIframeBodyWebsite().find('[]'),
        iconHelp: () => cy.getIframeBodyWebsite().find('[data-cy="helpImg"]'),
        lblPaymentAmount: () => cy.getIframeBodyWebsite().find('[]'),
        valPaymentAmount: () => cy.getIframeBodyWebsite().find('[]'),
        lblFee: () => cy.getIframeBodyWebsite().find('[]'),
        valFeeAmount: () => cy.getIframeBodyWebsite().find('[]'),
        lblGSTPayable: () => cy.getIframeBodyWebsite().find('[]'),
        valGSTAmount: () => cy.getIframeBodyWebsite().find('[]'),
        iconCSR: () => cy.getIframeBodyWebsite().find('[]'),
        lblGetCSROnNextLoan: () => cy.getIframeBodyWebsite().find('[]'),
        lblSelectPaymentMethod: () => cy.getIframeBodyWebsite().find('[]'),
        iconPayNow: () => cy.getIframeBodyWebsite().find('[data-cy="paymentOptionImg]'),
        iconPayWithCouponCode: () => cy.getIframeBodyWebsite().find('[]'),
        txtPayWithCouponCode: () => cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.csr_apply_coupon_or_points"]'),
        txtPayWithCouponCode_1: () => cy.contains('Pay with Coupon Code'),
        iconPayWithNextLoan: () => cy.getIframeBodyWebsite().find('[]'),
        subTxtPayNow: () => cy.getIframeBodyWebsite().find('[]'),
        subTxtPayWithNextLoan: () => cy.getIframeBodyWebsite().find('[]'),
        btnPayNow: () => cy.contains('Pay Now'),
        btnPayWithCouponCode: () => cy.getIframeBodyWebsite().find('[]'),
        btnPayWithNextLoan: () => cy.getIframeBodyWebsite().find('[]'),
        txtPayableAmount: () => cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.csr_payable_amt_text"]'),
        txtCoupon: () => cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.csr_couponss_text"]'),
        txtCouponSuccessFullMeassage: () => cy.getIframeBodyWebsite().find('[data-cy="AppliedSuccess"]'),
        btnContinue: () => cy.getIframeBodyWebsite().find('[data-cy="app.components.Common.continue_btn_caps"]')
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
    verifyPayNowButton() {
        this.elements.btnPayNow().should('be.visible')
    }
    clickPayWithCouponCodeText() {
        this.elements.txtPayWithCouponCode().click()
    }
    verifyPayWithCouponCodeBtn() {
        this.elements.txtPayWithCouponCode_1().should('be.visible')
    }
    clickPayWithCouponCodeBtn() {
        this.elements.txtPayWithCouponCode_1().click()
    }
    verifyCouponSuccessFullMeassage(message) {
        this.elements.txtCouponSuccessFullMeassage().should('contain', message)
    }
    clickContinueButton() {
        this.elements.btnContinue().click({ force: true })
    }

}

export const csrPaymentOptionsWebPage = new CSRPaymentOptionsWebPage