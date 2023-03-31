
/// <reference types = "cypress" />

export class ReuploadKYCInfoPage {

    details = {
        zeplin: () => 'VD Not found',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=da2950e8',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        iconKYCDocument: () => cy.get('[]'),
        infoSubText: () => cy.get(),
        lblSteps: () => cy.get(),
        SubTextOfSteps: () => cy.get(),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        btnContinue: () => cy.get('[]'),
    }

}

export const reuploadKYCInfoPage = new ReuploadKYCInfoPage