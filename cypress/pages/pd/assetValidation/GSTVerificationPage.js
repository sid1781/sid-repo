/// <reference types = "cypress" />

export class GSTVerificationPage {

    details = {
        zeplin: () => 'no VD found',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        inpGSTNumber: () => cy.get('[]'),
        imgOfGSTNumber: () => cy.get('[]'),
        infoSmallSubText: () => cy.get('[]'),
        btnSubmit: () => cy.get('[]')
    }

}

export const gstVerificationPage = new GSTVerificationPage