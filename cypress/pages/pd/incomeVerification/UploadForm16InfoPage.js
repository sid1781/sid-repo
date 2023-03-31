
/// <reference types = "cypress" />

export class UploadForm16InfoPage {

    details = {
        zeplin: () => 'https://zpl.io/bPwlxNm',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=3c1d1767',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        iconUploadForm16: () => cy.get('[]'),
        infoSubText: () => cy.get(),
        lblSteps: () => cy.get(),
        SubTextOfSteps1: () => cy.get(),
        SubTextOfSteps2: () => cy.get(),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        btnContinue: () => cy.get('[]'),
    }

}

export const uploadForm16InfoPage = new UploadForm16InfoPage