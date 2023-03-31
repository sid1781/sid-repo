/// <reference types = "cypress" />

export class TransactionStatusPage {

    details = {
        zeplin: () => '',
        zeplinvariation: () => '',
        overflow: () => 'https://overflow.io/s/0XIF6E58/?node=2cf1bff8',
    }

    elements = {
        iconWarning: () => cy.get('[]'),
        pageTitle: () => cy.get('[data-cy="bInfoTitle"]'),
        txtLoseAccessConsent: () => cy.get('[data-cy="bInfoDesc"]'),
        btnContinueToDelete: () => cy.get('button').eq(0),
        btnBack: () => cy.get('button').eq(1)
    }

    // iconWarning
    verifyWarningIcon(iconWarning) {
        this.elements.iconWarning().should('have.attr', 'src', iconWarning)
    }
    // pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // txtLoseAccessConsent
    verifyLoseAccessConsentText(txtLoseAccessConsent) {
        this.elements.txtLoseAccessConsent().should('have.text', txtLoseAccessConsent)
    }
    // btnContinueToDelete
    verifyContinueToDeleteText(btnContinueToDelete) {
        this.elements.btnContinueToDelete().should('have.text', btnContinueToDelete)
    }

    clickContinueToDeleteBtn() {
        this.elements.btnContinueToDelete().click()
    }
    // btnBack
    verifyBackText(btnBack) {
        this.elements.btnBack().should('have.text', btnBack)
    }

    clickBackBtn() {
        this.elements.btnBack().click()
    }

}

export const transactionStatusPage = new TransactionStatusPage()