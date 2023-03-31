/// <reference types = "cypress" />
export class BankAccountsPage {

    details = {
        zeplin: () => '',//TODO
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=d68bf83d',
    }

    elements = {
        pageTitle:()=>cy.get('[data-cy="app.components.BloanRecord.bank_account_title"]'),
        txtAccountNo:()=>cy.get('[data-cy="accNo"]'),
        txtBank:()=>cy.get('[data-cy="bank"]'),
    }
    verifyPageTitle(title){
        this.elements.pageTitle().should('contain.text',title)
    }
    verifyAccountNumberValue(value){
        this.elements.txtAccountNo().should('contain',value)
    }   
}
export const bankAccountsPage = new BankAccountsPage()
