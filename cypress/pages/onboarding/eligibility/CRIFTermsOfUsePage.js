/// <reference types = "cypress" />

export class CRIFTermsOfUsePage {

    details = {
        zeplin: () => 'https://zpl.io/8lz5v9X',
        overflow: () => '' //TODO: overflow link
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblCRIFHighMarkCreeditScore: () => cy.contains('span','CRIF High Mark Credit Score Terms of Use'),
        txtConsentToAcknowledgeAndAgree: () => cy.get('[]'),
        txtConsentToObtainInformation: () => cy.get('[]'),
        txtConsentNotHoldCICResponsible: () => cy.get('[]'),
        txtConsentAcknowledgeAndAccept: () => cy.get('[]'),
        txtConsentToRecord: () => cy.get('[]'),
        txtConsentToAuthorize: () => cy.get('[]'),
        txtConsentToAcceptInstructions: () => cy.get('[]'),
        txtConsentWarranty: () => cy.get('[]'),
        txtConsentNotSue: () => cy.get('[]'),
        txtConsentLawsDispute: () => cy.get('[]'),
    }
    // pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // lblCRIFHighMarkCreeditScore
    verifyCRIFHighMarkCreeditScoreText(highMarkCreditscore) {
        this.elements.lblCRIFHighMarkCreeditScore().should('have.text', highMarkCreditscore)
    }
    // txtConsentToAcknowledgeAndAgree
    verifyConsentToAcknowledgeAndAgreeText(acknowledgeAndAgree) {
        this.elements.txtConsentToAcknowledgeAndAgree().should('have.text', acknowledgeAndAgree)
    }
    // txtConsentToObtainInformation
    verifyConsentToObtainInformationText(obtainInformation) {
        this.elements.txtConsentToObtainInformation().should('have.text', obtainInformation)
    }
    // txtConsentNotHoldCICResponsible
    verifyConsentNotHoldCICResponsibleText(notToHoldCICResponsible) {
        this.elements.txtConsentNotHoldCICResponsible().should('have.text', notToHoldCICResponsible)
    }
    // txtConsentAcknowledgeAndAccept
    verifyConsentAcknowledgeAndAcceptText(acknowledgeAndAccept) {
        this.elements.txtConsentAcknowledgeAndAccept().should('have.text', acknowledgeAndAccept)
    }
    // txtConsentToRecord
    verifyConsentToRecordText(record) {
        this.elements.txtConsentToRecord().should('have.text', record)
    }
    // txtConsentToAuthorize
    verifyConsentToAuthorizeText(authorize) {
        this.elements.txtConsentToAuthorize().should('have.text', authorize)
    }
    // txtConsentToAcceptInstructions
    verifyConsentToAcceptInstructionsText(instructions) {
        this.elements.txtConsentToAcceptInstructions().should('have.text', instructions)
    }
    // txtConsentWarranty
    verifyConsentWarrantyText(warranty) {
        this.elements.txtConsentWarranty().should('have.text', warranty)
    }
    // txtConsentNotSue
    verifyConsentNotSueText(notToSue) {
        this.elements.txtConsentNotSue().should('have.text', notToSue)
    }
    // txtConsentLawsDispute
    verifyConsentLawsDisputeText(lawdispute) {
        this.elements.txtConsentLawsDispute().should('have.text', lawdispute)
    }

}

export const criftTermsOfUsePage = new CRIFTermsOfUsePage()