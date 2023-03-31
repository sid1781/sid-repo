export class ForeclosureSummaryPage {

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/62d96e20f25bf1434bed49f6',
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
         lblLatePaymentChargesOutstanding: () => cy.get('[]'),
         txtLatePaymentChargesOutstanding: () => cy.get('[]'),
         iconLatePaymentChargesOutstandingRupee: () => cy.get('[]'),
         valLatePaymentChargesOutstanding: () => cy.get('[]'),
         lblForeclosureCharges: () => cy.get('[]'),
         txtForeclosureCharges: () => cy.get('[]'),
         iconForeclosureChargesRupee: () => cy.get('[]'),
         valForeclosureCharges: () => cy.get('[]'),
         lblTotal: () => cy.get('[]'),
         iconTotalRupee: () => cy.get('[]'),
         valTotal: () => cy.get('[]'),
         btnPay: () => cy.get('[]'),
         iconPayRupee: () => cy.get('[]'),
         valPay: () => cy.get('[]'),

     }
  }
 
 export const foreclosureSummaryPage = new ForeclosureSummaryPage
