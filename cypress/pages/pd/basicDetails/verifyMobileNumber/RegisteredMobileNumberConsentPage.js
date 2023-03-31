
/// <reference types = "cypress" />

export class RegisteredMobileNumberConsentPage {

    details = {
        zeplin: () => 'https://zpl.io/amJwQw9',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.letter_of_consent"]'),
        infoSubText: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.consent_letter_desc"]'),
        btnAcceptContinue: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.accept_and_continue"]'),
    }
    verifyPageTitle(pageTitle) {
        this.elements.pageTitle().should('have.text', pageTitle)
    }
    verifyInfoSubtext(subtext) {
        this.elements.infoSubText().should('contain.text',subtext)
    }
    verifyAcceptContinueBtn(continueTxt) {
        this.elements.btnAcceptContinue().should('contain.text',continueTxt)
    }
    clickOnAcceptContinueBtn() {
        this.elements.btnAcceptContinue().click()
    }

}

export const registeredMobileNumberConsentPage = new RegisteredMobileNumberConsentPage