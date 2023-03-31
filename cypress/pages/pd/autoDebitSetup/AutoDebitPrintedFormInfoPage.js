/// <reference types = "cypress" />

export class AutoDebitPrintedFormInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/vMqdZL5',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        lblSteps: () => cy.get('[]'),
        subTextOfSteps1: () => cy.get('[]'),
        subTextOfSteps2: () => cy.get('[]'),
        subTextOfSteps3: () => cy.get('[]'),
        imgOfPrintedForm: () => cy.get('[]'),
        btnDownload: () => cy.get('[]'),
        btnContinueToUpload: () => cy.get('[]')

    }

}

export const autoDebitPrintedFormInfoPage = new AutoDebitPrintedFormInfoPage