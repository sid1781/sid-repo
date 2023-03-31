/// <reference types = "cypress" />

export class UploadGSTR3BConfirmationPage {

    details = {
        zeplin: () => 'https://zpl.io/llvO9QX',
        overflow: () => 'https://overflow.io/s/3IH4JZ6J/?node=b7e5d24f&prototype',
    }

    elements = {
        pageTitle : () => cy.get(),
        btnClose : () => cy.get(),
        txtUploadConfirmation : () => cy.get(),
        valUploadCofirmationMonth : () => cy.get(),
        btnConfirm : () => cy.get(),
        btnUploadMore : () => cy.get(),
    }

    verifypageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyCloseButton(close) {
        this.elements.btnClose().should('have.text', close)
    }

    clickCloseButton() {
        this.elements.btnClose().click()
    }

    verifyUploadConfirmationText(confirmation) {
        this.elements.txtUploadConfirmation().should('have.text', confirmation)
    }

    EnterUploadConfirmationMonthValue() {
        this.elements.valUploadCofirmationMonth().should('be.visible')
    }

    verifyConfirmButton(confirm) {
        this.elements.btnConfirm().should('have.text', confirm)
    }

    clickConfirmButton() {
        this.elements.btnConfirm().click()
    }
    
    verifyUploadMoreButton(uploadmore) {
        this.elements.btnUploadMore().should('have.text', uploadmore)
    }

    clickUploadMoreButton() {
        this.elements.btnUploadMore().click()
    }
}

export const uploadGSTR3BConfirmationPage = new UploadGSTR3BConfirmationPage ()
