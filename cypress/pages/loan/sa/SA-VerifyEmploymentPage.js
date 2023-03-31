/// <reference types = "cypress" />


export class SAVerifyEmploymentPage {

    details = {
        zeplin: () => '',
        overflow: () => '', //TODO Link
    }
    elements = {
        lblBack: () => cy.get('[data-cy="goBackBtn"]'),
        PageTitle: () => cy.get('[data-cy="app.containers.EmploymentSummary.verify_employment"]'),
        lblWorkEmail: () => cy.get('[data-cy="docEventTitle"]'),
        txtCurrentWorkPlace: () => cy.get('[data-cy="docEventDesc"]'),
        btnVerifyEmail: () => cy.get('[data-cy="uploadBtnContainer"]'),
        lblEmailVerified: () => cy.get('[data-cy="uploadTxtContainer"]'),
        lblOfferLetter: () => cy.get('[]'),
        btnofferLetter: () => cy.get('[]'),
        lblSalarySlip: () => cy.get('[]'),
        lblOfficeIDCard: () => cy.get('[]'),
        btnConfirmAndContinue: () => cy.get('[data-cy="app.components.Common.confirm_and_continue"]'),
    }
    verifyBackLabel(){
        this.elements.lblBack().should('be.visible')
    }
    clickBackLabel(){
        this.elements.lblBack().click()
    }
    verifyPageTitle(txt) {
        this.elements.PageTitle().should('have.text', txt)
    }
    verifyWorkEmailLabel(txt) {
        this.elements.lblWorkEmail().should('have.text', txt)
    }
    clickVerifyEmailButton(txt) {
        this.elements.btnVerifyEmail().click()
    }
    verfiyEmailVerified(txt) {
        this.elements.lblEmailVerified().should('have.text',txt)
    } 
    verfiyConfirmAndContinueButton(txt) {
        this.elements.btnConfirmAndContinue().should('have.text',txt)
    }
    clickConfirmAndContinueButton() {
        this.elements.btnConfirmAndContinue().click()
    }
}

export const saVerifyEmploymentPage = new SAVerifyEmploymentPage()   