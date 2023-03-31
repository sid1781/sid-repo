export class AnalyzingMessagesPage {

    details = {
        zeplin : () => 'zpl.io/W4Wxd9j',
        overflow : () => 'https://overflow.io/s/24CP2JIV/?node=18740a43',
    }
 
     elements = {
         iconPleaseWait : () => cy.get('[]'),
         lblPleaseWait: () => cy.get('[]'),
         subTxtPleaseWait : () => cy.get('[]'),
         
     }
  }
 
 export const analyzingMessagesPage  = new AnalyzingMessagesPage
