export class PreLoanRejectedPage {

    details = {
        zeplin : () => 'https://zpl.io/bPEzw6y',
        overflow : () => 'https://overflow.io/s/YMXFLVXS',
    }
 
     elements = {
         imagePreLoanRejected: () => cy.get('[]'),
         lblPreLoanRejected: () => cy.get('[]'),
         subTxtPreLoanRejected: () => cy.get('[]'),
         btnBack: () => cy.get('[]'),
         
     }
  }
 
 export const preLoanRejectedpage = new PreLoanRejectedPage
