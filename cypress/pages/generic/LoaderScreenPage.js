/// <reference types = "cypress" />

export class LoaderScreenPage {

    details = {
        zeplin: () => '', // TODO ZEPLIN LINK
        overflow: () => '', // TODO OVERFLOW LINK
    }

    elements = {
        lblPleaseWait: () => cy.get('[data-cy="app.components.Eligibility.please_wait_text"]'),
        subtextPleaseWait: () => cy.get('[data-cy="app.components.Eligibility.take_up_to_a_minute"]')
    }

    verifyPleaseWaitLabel(Pleasewait) {
        this.elements.lblPleaseWait().should('have.text', Pleasewait)
    }

    verifyPleaseWaitSubtext(Thismaytakeuptoaminute) {
        this.elements.subtextPleaseWait().should('have.text', Thismaytakeuptoaminute)
    }
}

export const loaderScreenPage = new LoaderScreenPage()