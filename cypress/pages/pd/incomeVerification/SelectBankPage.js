/// <reference types = "cypress" />

export class SelectYourBankPage {

    details = {
        zeplin: () => 'https://zpl.io/b6ELw3R',
        overflow: () => 'https://overflow.io/s/MTERYG',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        lblSelectYourBank: () => cy.get('[]'),
        iconBank: () => cy.get('[]'),
        txtSelectOrEnterBankName: () => cy.get('[]'),
        inpEnterBankName: () => cy.get('[]'),
        iconSearch: () => cy.get('[]'),
        valBankName: () => cy.get('[]'),        
        btnContinue: () => cy.get('[]')      
    }
}
export const SelectYourBankPage = new SelectYourBankPage