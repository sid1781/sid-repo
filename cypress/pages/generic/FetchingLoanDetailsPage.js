/// <reference types = "cypress" />

class FetchingLoanDetailsPage {

    details = {
        zeplin: () => 'https://drive.google.com/drive/folders/1RQfy8a64hU1Qg7A4Mz-zZjm6WDjL38Hn',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=23ce703c',
    }

    elements = {

        lblFetchingYourLoanDetails: () => cy.get('[data-cy="app.components.BbankAccount.fetching_your_pdt_details_text"]'),
        subTextFetchingYourLoanDetails: () => cy.get('[]'),
    }
    verifyFetchingYourLoanDetailsLabel(fetchingLoanDetailsPage){
        this.elements.lblFetchingYourLoanDetails().should('have.text',fetchingLoanDetailsPage)
    }
}
export const fetchingLoanDetailsPage = new FetchingLoanDetailsPage