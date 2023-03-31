/// <reference types = "cypress" />

export class SignDocumentPage {

    details = {
        zeplin: () => 'https://zpl.io/aMlKMdR',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        PageTitle: () => cy.get('[data-cy="app.containers.BbankAccount.loan_pdf_page_title"]').first(0),
        PageTitle: () => cy.get('[data-cy="app.containers.BbankAccount.loan_pdf_page_title"]').first(),
        SAPageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        txtinfoSignDocument: () => cy.get('[data-cy="app.containers.BbankAccount.loan_pdf_agree_msg"]'),
        btnContinue: () => cy.get('[data-cy="app.containers.BbankAccount.continue"]'),
        btnContinueSA: () => cy.get('[data-cy="app.components.Signbee.continue_txt"]'),
        lblSignDocument: () => cy.get('[data-cy="chooseEsignLoanAgrm"]'),
        imgpaperlessAdhar: () => cy.get('[data-cy="pinchZoomPanImg_30"]').scrollIntoView({ easing: 'linear' }),
        imgPassportFrontAndBack: () => cy.get('[data-cy="pinchZoomPanImg_30"]').scrollIntoView({ easing: 'linear' }),
        imgSelfie: () => cy.get('[data-cy="pinchZoomPanImg_31"]'),

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
    verifyPaperlessAdharImage() {
        this.elements.imgpaperlessAdhar().should("have.attr", 'src', "https://kimaginary.buynsta.com/path//PW3HqP2mV4R21kGxLUn4kVLqLOi1/docs/KBST230215ZXU/KBDID20230215UB9bZigo3Z811837.pdf?page=31")

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
    verifySignDocumentLabel(text) {
        this.elements.lblSignDocument().should('have.text', text)
    }
    verifycontinueEsignLoanButton() {
        this.elements.btncontinueEsignLoan().should('be.visible')
    }
    clickcontinueEsignLoanButton() {
        this.elements.btncontinueEsignLoan().click()
    }
    verifyPassportFrontAndBackImage() {
        this.elements.imgPassportFrontAndBack().should('have.attr', 'src', 'https://kimaginary.buynsta.com/path//f4Ea5VsssAWGpObJ90IlHSU8GUH3/docs/KBST230215AQY/KBDID20230215MWrqWSdwhU811837.pdf?page=31')
    }

    verifySelfieImage(img) {
        this.elements.imgSelfie().should('be.visible', img)
    }
}

export const signDocumentPage = new SignDocumentPage