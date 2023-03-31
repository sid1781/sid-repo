/// <reference types = "cypress" />

export class AssessingLoanEligibilityPage {

    details = {
        zeplin: () => 'https://zpl.io/Z09ZZwd',
        overflow: () => '' //TODO :overflow Link
    }

    elements = {
        iconAssessingLoanEligibilty: () => cy.get('[]'),
        pageTitle: () => cy.contains('p','We are assessing your Loan eligibility',{timeout:10000}),
        txtAssessingLoanEligibilty: () => cy.get('[data-cy="app.components.Eligibility.under_ver_desc"]'),
        btnRefresh: () => cy.contains('button', 'Refresh', {timeout:20000}),
    }
    // iconAssessingLoan
    verifyAssessingLoanEligibiltyIcon() {
        this.elements.iconAssessingLoanEligibilty().should('be.visible')
    }
    // pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // txtAssessingLoanEligibilty
    verifyAssessingLoanEligibiltyText(notifyDescription) {
        this.elements.txtAssessingLoanEligibilty().should('have.text', notifyDescription)
    }
    // btnRefresh
    verifyRefreshBtn(refresh) {
        this.elements.btnRefresh().should('have.text', refresh)
    }
    clickRefreshBtn() {
        this.elements.btnRefresh().click()
    }

}

export const assessingLoanEligibilityPage = new AssessingLoanEligibilityPage()