/// <reference types = "cypress" />
//invoke('jquery Method')...

export class FPLLoanAmountTenureWebPage {

    details = {
        zeplin: () => 'https://zpl.io/mDzL7j9',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        lblLoanAmount: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.place_fixed_loan_amt"]'),
        valLoanAmount: () => cy.getIframeBody().find('[data-cy="loanPrice"]'),
        iconRupees: () => cy.getIframeBody().find('[data-cy="app.components.Common.rupee_symbol"]'),
        lblEMI: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.place_fixed_emi"]'),
        lblSelectLoanAmount: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.place_variable_slctlamnt"]'),
        minValSelectLoanAmount: () => cy.getIframeBody().find('[data-cy="5000_minRangeAmt"]'),
        maxValSelectLoanAmount: () => cy.getIframeBody().find('[data-cy="15000_maxRangeAmt"]'),
        sliderSelectLoanAmount: () => cy.getIframeBody().find('[class="rangeslider__fill"]').invoke("val", 50000).trigger("change").click({ force: true }),
        lblSelectTenure: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.place_variable_slctmonth"]'),
        valSelectTenure: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.place_variable_month_1"]'),
        btnViewSummaryAndCharges: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.place_variable_btntxt"]'),
        // btnViewSummaryAndCharges: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.place_variable_btntxt"]'),
    }
    verifyLoanAmountLabel() {
        this.elements.lblLoanAmount().should('be.visible')
    }
    verifyLoanAmountValue() {
        this.elements.valLoanAmount().should('be.visible')
    }
    verifyRupeesIcon() {
        this.elements.iconRupees().should('be.visible')
    }
    verifyEMILabel() {
        this.elements.lblEMI().should('be.visible')
    }
    verifySelectLoanAmountLabel() {
        this.elements.lblSelectLoanAmount().should('be.visible')
    }
    scrollSliderselectLoanAmount() {
        this.elements.sliderSelectLoanAmount()
    }
    clickSelectLoanAmountMinValue() {
        this.elements.minValSelectLoanAmount().click()
    }
    clickSelectLoanAmountMaxValue() {
        this.elements.maxValSelectLoanAmount().click()
    }
    clickSliderSelectLoanAmount() {
        this.elements.sliderSelectLoanAmount()
    }
    verifySelectTenureLabel() {
        this.elements.lblSelectTenure().should('be.visible')
    }
    verifySelectTenureValue() {
        this.elements.valSelectTenure().should('be.visible')
    }
    verifyViewSummaryAndChargesText(btnViewSummaryAndCharges) {
        this.elements.btnViewSummaryAndCharges().should('have.text', btnViewSummaryAndCharges)
    }
    clickViewSummaryAndChargesBtn() {
        this.elements.btnViewSummaryAndCharges().click()
    }
    verifyBuyEMIProtectionTextIsNotVisible() {
        this.elements.txtBuyEMIProtection().should('not.exist')
    }

}

export const fplLoanAmountTenureWebPage = new FPLLoanAmountTenureWebPage()