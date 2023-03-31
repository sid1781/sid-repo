/// <reference types = "cypress" />

export class KFSSanctionLetterWebPage {

    details = {
        zeplin: () => 'https://zpl.io/VYv6gXL',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {

        PageTitle: () => cy.getIframeBody().find('[data-cy="lenderInfoTitle"]',{timeout:8000}).eq(0),
        lblLoanSanctionedBy: () => cy.getIframeBody().find('[data-cy="lenderInfoTxt"]'),
        lblLenderName: () => cy.getIframeBody().find('[data-cy="assignedFund"]', { timeout: 2000 }),
        txtConsentSanctionLetter: () => cy.getIframeBody().find('[class="skins__ConsentText-r1kr7v-114 kaSKoD"]'),
        chkBoxSantionLetter: () => cy.getIframeBody().find('[class="BCheck__CheckBoxDiv-fg83z-8 cyMhcJ"]', { timeout: 2000 }),
        btnContinueToSignLoanDocument: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.lender_info_btn"]')

    }

    // PageTitle 
    verifyPageTitle(title) {
        this.elements.PageTitle().should('have.text', title)
    }
    // lblLoanSanctionedBy 
    verifyLoanSanctionedByLabel(lblLoanSanctionedBy) {
        this.elements.lblLoanSanctionedBy().should('have.text', lblLoanSanctionedBy)
    }
    // lblLenderName
    verifyLenderNameText(lblLenderName) {
        this.elements.lblLenderName().should('have.text', lblLenderName)
    }
    // txtConsentSanctionLetter 
    verifyConsentSanctionLetterText(txtConsentSanctionLetter) {
        this.elements.txtConsentSanctionLetter().should('have.text', txtConsentSanctionLetter)
    }
    // chkBoxSantionLetter
    selectBoxSanctionLetter(btnContinueToSignLoanDocument) {
        if (this.elements.chkBoxSantionLetter()) {
            this.verifyContinueToSignLoanDocumentText(btnContinueToSignLoanDocument)
        }
        else {
            this.elements.chkBoxSantionLetter().click()
        }
    }
    // btnContinueToSignLoanDocument 
    verifyContinueToSignLoanDocumentText(btnContinueToSignLoanDocument) {
        this.elements.btnContinueToSignLoanDocument().should('have.text', btnContinueToSignLoanDocument)
    }

    clickContinueToSignLoanDocumentButton() {
        this.elements.btnContinueToSignLoanDocument().click()
    }

    verifypageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
}

export const kfsSanctionLetterWebPage = new KFSSanctionLetterWebPage