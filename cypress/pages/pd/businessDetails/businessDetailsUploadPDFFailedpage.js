/// <reference types = "cypress" />

export class BusinessDetailsGSTRUploadFailedPage {

    details = {
        zeplin: () => 'https://zpl.io/O0qrj7L',
        overflow: () => 'https://overflow.io/s/3IH4JZ6J/?node=b7e5d24f&prototype',
    }

    elements = {
        iconGSTR3BPDFUploadFailed : () => cy.get(),
        txtUploadFailed : () => cy.get(),
        txtUploadFileSize : () => cy.get(),
        valUploadFileSize : () => cy.get(),
        btnReupload : () => cy.get()
    }

    verifyGSTR3BPDFUploadFailedIcon() {
        this.elements.iconGSTR3BPDFUploadFailed().find('img').should('be.visible')
    }

    verifyUploadFailedText(uploadfailed) {
        this.elements.txtUploadFailed().should('contain.text', uploadfailed)
    }

    verifyUploadFileSizeText(MB) {
        this.elements.txtUploadFileSize().should('contain.text',MB)
    }

    verifyUploadFileSizeValue(value){
        this.elements.valUploadFileSize().should('contain.value',value)
    }

    verifyReuploadButton(Reupload){
        this.elements.btnReupload().should('contain.text',Reupload)
    }
    
    clickOnReuplod(Reupload){
        this.elements.btnReupload().should('contain.text',Reupload).click()
    }
}
export const businessDetailsGSTRUploadFailedPage = new BusinessDetailsGSTRUploadFailedPage()