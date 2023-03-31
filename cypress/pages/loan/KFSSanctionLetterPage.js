/// <reference types = "cypress" />

export class KFSSanctionLetterPage {

    details = {
        zeplin: () => 'https://zpl.io/VYv6gXL',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {

        PageTitle: () => cy.get('[data-cy="app.components.BbankAccount.lender_info_Title"]').eq(0),
        pageTitle: () => cy.get('[data-cy="app.components.BbankAccount.lender_info_Title"]').eq(0),
        lblLoanSanctionedBy: () => cy.get('[data-cy="app.components.BbankAccount.lender_info_label"]'),
        lblLenderName: () => cy.get('[data-cy="kbsPvtLtd"]', { timeout: 2000 }),
        txtConsentSanctionLetter: () => cy.get('[data-cy="checkboxText_app.components.BbankAccount.lender_info_checkbox_info"]'),
        chkBoxSantionLetter: () => cy.get('[data-cy="icon_app.components.BbankAccount.lender_info_checkbox_info"]', { timeout: 2000 }),
        btnContinueToSignLoanDocument: () => cy.get('[data-cy="app.components.BbankAccount.lender_info_btn"]'),
        imgDetailsOfFeeAndChargesPage: () => cy.get('[data-cy="pinchZoomPanImg_0"]'),
        imgSanctionLetter:()=>cy.get('[data-cy="pinchZoomPanImg_0"]')

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
        if (this.elements.chkBoxSantionLetter().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/icons/C/ic-check-y.svg')) {
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
        this.elements.PageTitle().should('have.text', title)
    }

    verifyDetailsOfFeeAndChargesPageImage(img) {
        this.elements.imgDetailsOfFeeAndChargesPage().should('have.attr','src',img)
    }
    verifyScanctionLetterImage(){
        this.elements.imgSanctionLetter().should('be.visible')
    }
}

export const kfsSanctionLetterPage = new KFSSanctionLetterPage()