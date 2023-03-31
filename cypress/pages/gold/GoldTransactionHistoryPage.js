/// <reference types = "cypress" />
export class GoldTransactionHistoryPage{
    elements={
        pageTitle:()=>cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblSuccess:()=>cy.contains('Success'),
        lnkSuccess:()=>cy.get('[]'),
        lblGoldPurchase:()=>cy.get('[]'),
        valGoldPurchase:()=>cy.get('[]'),
        lblProcessing:()=>cy.get('[]'),
        lnkProcessing:()=>cy.get('[]'),
        iconGoldPurchase:()=>cy.get('[]'),

    }
    verifyPageTitle(pageTitle){
        this.elements.pageTitle().should('have.text', pageTitle)
    }
    verifySuccessText(text){
        this.elements.lblSuccess().should('be.visible')
    }
    clickSuccessText(){
        this.elements.lblSuccess().click()
    }
} 

export const goldTransactionHistoryPage = new GoldTransactionHistoryPage