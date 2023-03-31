// <reference types = "cypress" />

export class ForeCloseLoanPage {

    details = {
        zeplin: () => 'https://zpl.io/qyA8q6J', //TODO Link
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
    
        lblForecloseLoan: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblPrincipleOustanding: () => cy.get('[class="skins__PriceSplitUpTitle-sc-89se55-87 fZAVhe"]').first(),
        iconRupee: () => cy.get('[class="rupee"]'),
        
        lblInterstOutstanding: () => cy.get('[class="skins__PriceSplitUpTitle-sc-89se55-87 fZAVhe"]'),
        iconRupee: () => cy.get('[class="rupee"]'),
        
        lblLoanFeesRefund: () => cy.get('[class="skins__PriceSplitUpTitle-sc-89se55-87 fZAVhe"]'),
        iconRupee: () => cy.get('[class="rupee"]'),
      
        lblTotal: () => cy.get('[class="skins__PriceSplitUpTitle-sc-89se55-87 iGcvav"]'),
        iconRupee: () => cy.get('[class="rupee"]'),
      
        txtForecloseLoan: () => cy.get('[class="BSimpleInfo__TextTd-sc-1ams8cj-4 klMcAY"]'),
        btnPayLoanAmount: () => cy.contains('button','Pay',{timeout : 10000}),
    }
    
    //btnPayLoanAmount
    clickPayLoanAmountBtn() {
        this.elements.btnPayLoanAmount().click()
    }
    verifyForeCloseloanLabel(forecloseloan) {
        this.elements.lblForecloseLoan().should('have.text',forecloseloan)
    }
    verifyPrincipleOutstandingLabel(principleOutstanding) {
        this.elements.lblPrincipleOustanding().should('have.text',principleOutstanding)
    }
    verifyInterestOutstandingLabel(InterestOutstanding) {
        this.elements.lblInterstOutstanding().should('have.text',InterestOutstanding)
    }
    verifyLoanFeesRefundLabel(LoanFeesRefund) {
        this.elements.lblLoanFeesRefund().should('have.text',LoanFeesRefund)
    }
    verifyLoanTotalLabel(Total) {
        this.elements.lblTotal().should('have.text',Total)
    }
    verifyLoanForeCloseLoanText(text) {
        this.elements.txtForecloseLoan().should('have.text',text)
    }  
    verifyPageTitle(pageTitle){
        this.elements.pageTitle().should('have.text',pageTitle)
    }
}
export const forecloseLoanPage = new ForeCloseLoanPage