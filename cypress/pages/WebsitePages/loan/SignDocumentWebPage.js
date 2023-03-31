/// <reference types = "cypress" />

export class SignDocumentWebPage {

    details = {
        zeplin: () => 'https://zpl.io/aMlKMdR',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {

        PageTitle: () => cy.getIframeBody().find('[data-cy="loanPdfPageTitle"]',{timeout:8000}).first(),
        SAPageTitle: () => cy.getIframeBody().find('[data-cy="BTxtInheritedTitle"]'),
        txtinfoSignDocument: () => cy.getIframeBody().find('[data-cy="app.containers.BbankAccount.loan_pdf_agree_msg"]'),
        btnContinue: () => cy.getIframeBody().find('[data-cy="app.containers.BbankAccount.continue"]',),
        btnContinueSA: () => cy.getIframeBody().find('[data-cy="app.components.Signbee.continue_txt"]')

    }
    // PageTitle 
    verifyPageTitle(title) {
        this.elements.PageTitle().should('have.text', title)
    }
    // PageTitleSA 
    verifyPageTitleSA(titlesign) {
        this.elements.SAPageTitle().should('have.text', titlesign)
    }
    // txtinfoSignDocument 
    verifyInfoSignDocumentText(txtinfoSignDocument) {
        this.elements.txtinfoSignDocument().should('have.text', txtinfoSignDocument)
    }
    // btnContinue 

    verifyContinueText(btnContinue) {
        this.elements.btnContinue().should('have.text', btnContinue)
    }

    verifyContinueTextSA(Continue) {
        this.elements.btnContinueSA().should('have.text', Continue)
    }

    clickContinueButton() {
        this.elements.btnContinue().click({ timeout: 5000 })
    }
    //
    clickContinueSAButton() {
        this.elements.btnContinueSA().click()
    }
}

export const signDocumentWebPage = new SignDocumentWebPage