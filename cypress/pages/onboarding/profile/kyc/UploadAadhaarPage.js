/// <reference types = "cypress" />

export class UploadAadhaarPage {

    details = {
        zeplin: () => 'https://zpl.io/2jymAX4',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=e1a89290',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblScanAadhaar: () => cy.get('[data-cy="pgCardItemTitle_undefined"]').eq(3),
        btnContinue: () => cy.get('[class="BBtn-sc-19btvbw-0 jDbYbK"]'),
        lblFront: () => cy.get('[data-cy="docName2"]'),
        pageTitleUploadAadhaar: () => cy.get('[data-cy="app.components.Common.upload_text"]').first(),
        txtclickupload:()=>cy.get('[data-cy="app.components.Bdocs.ul_sel_doc_title"]'),
        imgFrontPage:()=>cy.get('[class="skins__ImgS-r1kr7v-1 hrMtnh"]').eq(0),
        imgBackPage:()=>cy.get('[class="skins__ImgS-r1kr7v-1 hrMtnh"]').eq(1),

        
    }

    verifyPageTitle(UploadAadhaar) {
        this.elements.pageTitle().should('have.text', UploadAadhaar)
    }

    clickScanAadhaarLabel() {
        this.elements.lblScanAadhaar().click()
    }

    clickContinueButton() {
        this.elements.btnContinue().click()
    }

    verifyAadhaarFrontPhotoLabel(Front) {
        this.elements.lblFront().should('be.visible')
    }

    verifyPageTitleUploadAadhaar(UploadAadhaar) {
        this.elements.pageTitleUploadAadhaar().should('have.text', UploadAadhaar)
    }

    verifyTxtClickUpload(txtupload){
        this.elements.txtclickupload().should('have.text',txtupload)
    }
    verifyImgFront(){
        this.elements.imgFrontPage().should('be.visible')
    }
    verifyImgBack(){
        this.elements.imgBackPage().should('be.visible')
    }

    
}

export const uploadAadhaarPage = new UploadAadhaarPage()