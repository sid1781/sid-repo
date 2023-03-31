/// <reference types = "cypress" />

class UploadPassPortPage {

    elements = {

        pageTitle: () => cy.get('[data-cy="app.components.Common.upload_text"]'),
        txtUploadPassPort: () => cy.get('[data-cy="app.components.Bdocs.ul_sel_doc_title"]'),
        lblUploadPassPort: () => cy.get('[data-cy="app.components.Bdocs.img_txt_map_passport"]'),
        imgFrontPassPort: () => cy.get('[]'),
        imgBackPassPort: () => cy.get('[]'),
        lblFront: () => cy.get('[data-cy="docName2"]'),
        lblBack: () => cy.get('[data-cy="docName2_1"]'),
        iconInfo: () => cy.get('[data-cy="img_app.components.Common.doc_info_label"]'),
        txtClearPhotoOfOriginalDocuments: () => cy.get('[data-cy="label_app.components.Common.doc_info_label"]'),
        lblConfirmAndContinue: () => cy.get('[data-cy="app.components.Common.confirm_and_continue"]'),
        btnConfirmAndContinue: () => cy.get('[data-cy="app.components.Common.confirm_and_continue"]')
    }
    verifypageTitle(uploadpassport) {
        this.elements.pageTitle().should('have.text', uploadpassport)
    }
    verifyUploadPassPortText(uploadpassporttext) {
        this.elements.txtUploadPassPort().should('have.text', uploadpassporttext)
    }
    verifyUploadPassPortLabel(uploadpassport) {
        this.elements.lblUploadPassPort().should('have.text', uploadpassport)
    }
    verifyFrontPassportImage(front) {
        this.elements.imgFrontPassPort().should('have.attr', 'src', front)
    }
    verifyBackPassportImage(back) {
        this.elements.imgBackPassPort().should('have.attr', 'src', back)
    }
    verifyFrontLabel(front) {
        this.elements.lblFront().should('have.text', front)
    }
    verifyBackLabel(back) {
        this.elements.lblBack().should('have.text', back)
    }
    verifyClearPhotoOfOriginalDocumentsText(clearphoto) {
        this.elements.txtClearPhotoOfOriginalDocuments().should('have.text', clearphoto)
    }
    verifyConfirmAndContinueLabel(confirmandcontinue) {
        this.elements.lblConfirmAndContinue().should('have.text', confirmandcontinue)
    }
    clickConfirmAndContinueButton() {
        this.elements.btnConfirmAndContinue().click({ timeout: 2000 })
    }
}
export const uploadPassPortPage = new UploadPassPortPage()