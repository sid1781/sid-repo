/// <reference types = "cypress" />

export class RetryPaymentPage {

    details = {
        zeplin: () => 'https://zpl.io/XYrpZpx',
        overflow: () => 'https://overflow.io/s/U8LET1UN/?node=DA199021',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        iconError: () => cy.get('[]'),
        lblError: () => cy.get('[]'),
        txtErrorInfo: () => cy.get('[]'),
        btnChangePaymentOption: () => cy.get('[]'),
        btnRetryPayment: () => cy.get('[]')
    }
}

export const retryPaymentPage = new RetryPaymentPage