export class NoConnectionPage {

    details = {
        zeplin : () => 'https://zpl.io/jZolKEq',
        overflow : () => 'https://overflow.io/s/24CP2JIV/?node=18740a43',
    }
 
     elements = {
         imagNoConnection: () => cy.get('[]'),
         lblNoConnection: () => cy.get('[]'),
         subTxtNoConnection: () => cy.get('[]'),
         btnRefresh: () => cy.get('[]'),
         
     }
  }
 
 export const noConnectionPage = new NoConnectionPage
