/// <reference types = "cypress" />
//invoke('jquery Method')...

export class FPLLoanAmountTenurePage {

    details = {
        zeplin: () => 'https://zpl.io/mDzL7j9',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        lblLockedLoanAmount: () => cy.get('[data-cy="app.components.BbankAccount.place_locked_loan_amt_upto"]'),
        valLockedLoanAmount: () => cy.get('[data-cy="refinedLoanAmt"]'),
        lblLoanAmount: () => cy.get('[data-cy="app.components.BbankAccount.place_fixed_loan_amt"]'),
        valLoanAmount: () => cy.get('[data-cy="loanPrice"]'),
        iconRupees: () => cy.get('[data-cy="app.components.Common.rupee_symbol"]'),
        lblEMI: () => cy.get('[data-cy="app.components.BbankAccount.place_fixed_emi"]'),
        lblSelectLoanAmount: () => cy.get('[data-cy="app.components.BbankAccount.place_variable_slctlamnt"]'),
        minValSelectLoanAmount: () => cy.get('[data-cy="5000_minRangeAmt"]'),
        maxValSelectLoanAmount: () => cy.get('[data-cy="15000_maxRangeAmt"]'),
        sliderSelectLoanAmount: () => cy.get('[class="rangeslider__fill"]').invoke("val", 50000).trigger("change").click({ force: true }),
        sliderSelectLoanAmountLeft: () => cy.get('[class="rangeslider__fill"]').click('left'),
        lblSelectTenure: () => cy.get('[data-cy="app.components.BbankAccount.place_variable_slctmonth"]'),
        valSelectTenure: () => cy.get('[data-cy="app.components.BbankAccount.place_variable_month_1"]'),
        btnViewSummaryAndCharges: () => cy.get('[data-cy="app.components.BbankAccount.place_variable_btntxt"]',{timeout : 10000}),
        txtBuyEMIProtection :()=>cy.get('[data-cy="app.components.LoanDetails.applyInsuranceFee"]'),
        minValSelectLoanAmount3000: () => cy.get('[data-cy="3000_minRangeAmt"]'),
        maxValSelectLoanAmount6200: () => cy.get('[data-cy="6200_maxRangeAmt"]'),

    }
    verifyLockedLoanAmountLabel(){
        this.elements.lblLockedLoanAmount().should('be.visible')        
    }
    verifyLockedLoanAmountValue(){
        this.elements.valLockedLoanAmount().should('be.visible')
    }
    verifyLoanAmountLabel() {
        this.elements.lblLoanAmount().should('be.visible')
    }
    verifyLoanAmountValue(value) {
        this.elements.valLoanAmount().should('have.text',value)
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
    scrollSliderselectLoanAmountLeft(){
        this.elements.sliderSelectLoanAmountLeft()
    }
    verifySelectLoanAmountMinValue3000() {
        this.elements.minValSelectLoanAmount3000().should('be.visible')
    }
    clickSelectLoanAmountMinValue() {
        this.elements.minValSelectLoanAmount().click()
    }
    verifySelectLoanAmountMaxValue6200() {
        this.elements.maxValSelectLoanAmount6200().should('be.visible')
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
    verifyBuyEMIProtectionTextIsNotVisible(){
        this.elements.txtBuyEMIProtection().should('not.exist')
    }
    verifysliderSelectLoanAmount(){
        this.elements.sliderSelectLoanAmount().should('not.be.false')
    }

}

export const fplLoanAmountTenurePage = new FPLLoanAmountTenurePage
