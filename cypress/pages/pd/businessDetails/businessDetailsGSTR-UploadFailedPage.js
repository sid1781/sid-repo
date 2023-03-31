/// <reference types = "cypress" />

export class BusinessDetailsGSTRUploadFailedPage {

    details = {
        zeplin: () => 'https://zpl.io/5E0zLQJ',
        Zeplin_reupload: () => 'https://zpl.io/9qAGLpz',
        overflow: () => 'https://overflow.io/s/3ih4jz6j/?node=b7e5d24f&prototype',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        iconGSTRFailed: () => cy.get('[]'),
        txtGSTRForm: () => cy.get('[]'),
        btnOk: () => cy.get('[]'),
        txtUploadedGSTRFile: () => cy.get('[]'),
        valUploadedFileMonths: () => cy.get('[]'),
        txtRetryUploadingGSTRFile: () => cy.get('[]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyGSTRFailedIcon() {
        this.elements.iconGSTRFailed().should('be.visible')
    }

    verifyGSTRFormText(GSTRForm) {
        this.elements.txtGSTRForm().should('have.text', GSTRForm)
    }

    verifyUploadedGSTRFileText(GSTRFile) {
        this.elements.txtUploadedGSTRFile().should('have.text', GSTRFile)
    }
    
    verifyUploadGSTRFileMonthsValue() {
        this.elements.valUploadedFileMonths().should('be.visible')
    }

    verifyRetryUploadingGSTRFileText() {
        this.elements.txtRetryUploadingGSTRFile().should('be.visible')
    }

    verifyOkButton(ok) {
        this.elements.btnOk().should('have.text', ok)
    }

    clickOkButton() {
        this.elements.btnOk().click()
    }
}
export const businessDetailsGSTRUploadFailedPage = new BusinessDetailsGSTRUploadFailedPage()
