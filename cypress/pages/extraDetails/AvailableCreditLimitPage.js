/// <reference types = "cypress" />

export class AvailableCreditLimitPage {

    details = {
        Zeplin: () => '',//Need to add 
        Overflow: () => '',//need to add
    }

    elements = {
        imgCreditLimit:()=>cy.get('[]'),
        pageTitle:()=>cy.get('[]'),
        subTxtHigherLimit:()=>cy.get('[]'),
        btnSkipForLater:()=>cy.contains('span','Skip for Later'),
        btnContinue:()=>cy.get('button').eq(1),      
    }
    clickContinueButton(){
        this.elements.btnContinue().click()
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyHigherLimitSubText(subtext) {
        this.elements.subTxtHigherLimit().should('have.text', subtext)
    }

    verifySkipForLater(skip) {
        this.elements.btnSkipForLater().should('have.text', skip)
    }

    clickSkipForLaterButton() {
        this.elements.btnSkipForLater().click()
    }
}
export const availableCreditLimitPage = new AvailableCreditLimitPage()