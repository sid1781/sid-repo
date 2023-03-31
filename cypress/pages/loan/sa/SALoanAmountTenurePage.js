/// <reference types = "cypress" />

export class SALoanAmountTenurePage {

    details = {
        zeplin: () => 'https://zpl.io/mDzL7j9',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        lblLoanAmount: () => cy.get('[data-cy="app.components.BbankAccount.place_fixed_loan_amt"]'),
        valLoanAmount: () => cy.get('[data-cy="loanPrice"]'),
        iconRupees: () => cy.get('[data-cy="app.components.Common.rupee_symbol"]'),
        lblEMI: () => cy.get('[]'),
        lblSelectLoanAmount: () => cy.get('[data-cy="app.components.BbankAccount.place_variable_slctlamnt"]'),
        minValSelectLoanAmount: () => cy.get('[data-cy="4500_minRangeAmt"]'),
        maxValSelectLoanAmount: () => cy.get('[data-cy="6000_maxRangeAmt"]'),
        sliderSelectLoanAmount: () => cy.get('[]'),
        lblSelectTenure: () => cy.get('[data-cy="app.components.BbankAccount.place_variable_slctmonth"]'),
        valSelectTenure: () => cy.get('[data-cy="app.components.BbankAccount.place_variable_month_0"]'),
        btnViewSummaryAndCharges: () => cy.get('[data-cy="app.components.BbankAccount.place_variable_btntxt"]',{timeout : 10000}),
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
        this.elements.btnViewSummaryAndCharges().click({timeout:2000})
    }

}

export const saLoanAmountTenurePage = new SALoanAmountTenurePage
