/// <reference types = "cypress" />

export class GSTVerificationFailedPage {

    details = {
        zeplin: () => 'https://zpl.io/p1Qv83r',
        overflow: () => 'https://overflow.io/s/3IH4JZ6J/?node=b7e5d24f',
    }

    elements = {
        pagetitle: () => cy.get('[data-cy="app.components.extraDetails.gst_verification_failed"]'),
        iconGSTFailed: () => cy.get('[]'),
        txtGSTDetails: () => cy.get('[data-cy="bInfoDesc"]'),
        txtRetry: () => cy.get('[]'),
        btnOK: () => cy.get('[data-cy="app.components.Common.ok_btn_uc"]')
    }

    verifyPageTitle(title) {
        this.elements.pagetitle().should('have.text', title)
    }

    verifyGSTFailedIcon() {
        this.elements.iconGSTFailed().should('be.visible')
    }

    verifyGSTDetailsText(detailstext) {
        this.elements.txtGSTDetails().should('have.text', detailstext)
    }

    verifyRetryText(retry) {
        this.elements.txtRetry().should('have.text', retry)
    }

    verifyOkButton(ok) {
        this.elements.btnOK().should('have.text', ok)
    }

    clickOkButton() {
        this.elements.btnOK().click()
    }
}

export const gstVerificationFailedPage = new GSTVerificationFailedPage()