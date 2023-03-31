/// <reference types = "cypress" />
export class CalculatingCreditLimitPage{
    details = {
        Zeplin: () => '',//Need to add 
        Overflow: () => '',//need to add
    }

    elements = {
        pageTitle: () => cy.contains('span','Calculating Credit Limit'),
        lblCalculatingCreditLimit: () => cy.contains('span','Please wait while we calculate your credit limit. This may take a few seconds.'),
        btnRefresh: () => cy.contains('button','REFRESH ')
    }

    verifypageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyCalculatingCreditLimitLabel(label) {
        this.elements.lblCalculatingCreditLimit().should('have.text', label)
    }

    verifyRefreshButton(refresh) {
        this.elements.btnRefresh().should('have.text', refresh)
    }

    clickRefreshButton() {
        this.elements.btnRefresh().click()
    }
}

export const calculatingCreditLimitPage= new CalculatingCreditLimitPage()