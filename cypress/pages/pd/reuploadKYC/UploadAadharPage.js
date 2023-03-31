
/// <reference types = "cypress" />

export class UploadAadharPage {

    details = {
        zeplin : () => '', // TODO: Zeplin Link
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=da2950e8',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        iconUploadAadhaar: () => cy.get('[]'),
        infoSubText: () => cy.get(),
        lblSteps: () => cy.get(),
        SubTextOfSteps: () => cy.get(),
        lblPaperlessAadhaar: () => cy.get('[]'),
        lblDigiLocker: () => cy.get('[]'),
        lblUploadMaskedEAadhaar: () => cy.get('[]'),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        btnContinue: () => cy.get('[]'),
    }

}

export const uploadAadharPage = new UploadAadharPage