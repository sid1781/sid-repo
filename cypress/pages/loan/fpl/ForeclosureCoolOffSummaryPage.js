export class ForeclosureCoolOffSummaryPage {

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/dashboard?tag=cooloff',
        overflow : () => 'https://overflow.io/s/9AQCOL/?node=97d00376',
    }
 
     elements = {
         lblForeclosureLoan: () => cy.get('[]'),
         lblPrincipleOutstanding: () => cy.get('[]'),
         iconPrincipleOutstandingRupee: () => cy.get('[]'),
         valPrincipleOutstanding: () => cy.get('[]'),
         lblInterestOutstanding: () => cy.get('[]'),
         iconInterestOutstandingRupee: () => cy.get('[]'),
         valInterestOutstanding: () => cy.get('[]'),
         lblFeeOutstanding: () => cy.get('[]'),
         txtFeeOutstanding: () => cy.get('[]'),
         iconFeeOutstandingRupee: () => cy.get('[]'),
         valFeeOutstanding: () => cy.get('[]'),
         lblLoanFeesRefund: () => cy.get('[]'),
         iconLoanFeesRefundRupee: () => cy.get('[]'),
         valLoanFeesRefund: () => cy.get('[]'),
         lblTotal: () => cy.get('[]'),
         iconTotalRupee: () => cy.get('[]'),
         valTotal: () => cy.get('[]'),
         msgProportionateFee: () => cy.get('[]'),
         btnPay: () => cy.get('[]'),
         iconPayRupee: () => cy.get('[]'),
         valPay: () => cy.get('[]'),
     }
  }
 export const foreclosureCoolOffSummaryPage = new ForeclosureCoolOffSummaryPage
