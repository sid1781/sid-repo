export class PreLoanCongratulationsPage {

    details = {
        zeplin : () => 'https://zpl.io/VQPjWNA',
        overflow : () => 'https://overflow.io/s/YMXFLVXS',
    }
 
     elements = {
         imagePreLoanCongratulations: () => cy.get('[]'),
         lblPreLoanCongratulations: () => cy.get('[]'),
         subTxtPreLoanCongratulations: () => cy.get('[]'),
         btnOk: () => cy.get('[]'),
         
     }
  }
 
 export const preLoanCongratulationspage = new PreLoanCongratulationsPage
