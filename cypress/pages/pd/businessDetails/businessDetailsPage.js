/// <reference types = "cypress" />

export class BusinessDetailsPage {

    details = {
        zeplin: () => 'https://zpl.io/g8DwkJQ',
        zeplin: () => 'https://zpl.io/Q0xvPN5',
        zeplinGSTDetailVerfication : () => 'https://zpl.io/g8yQx30',
        ZeplinGSTR3B : () => 'https://zpl.io/p1Kpg4y',
        overflow: () => 'https://overflow.io/s/3IH4JZ6J/?node=b7e5d24f&prototype',
    }

    elements = {
        pageTitle : () => cy.get('[data-cy="pd_off_secl_title"]'),
        iconBusinessDetails : () => cy.get('[data-cy="businessDetails"]'),
        rbGSTVerfication : () => cy.get('[data-cy="pgFirstTdcardItem1Img"]'),
        lblGSTVerfication : () => cy.get('[data-cy="gst"]'),
        txtGSTVerfication : () => cy.get('[data-cy="cardItemSub"]'),
        //lblGSTVerfication : () => cy.get('[data-cy="cardItemTitle"]'),We kept this line for our internal understanding
        txtGSTVerfication : () => cy.get('[data-cy="substr_gst"]'),
        iconGSTVerfication : () => cy.get('[data-cy="pgFirstTdcardItem3Img"]'),
        lblGSTVerficationinfo : () => cy.get('[data-cy="app.components.ProcessingFeeReduction.pd_off_gst_name"]'),
        txtGSTVerficationinfo : () => cy.get('[data-cy="app.components.ProcessingFeeReduction.pd_off_gst_desc"]'),
        rbUploadGSTR3B : () => cy.get('[data-cy="cardItem1Img_1"]'),
        lblUploadGSTR3B : () => cy.get('[data-cy="gstr3b"]'),
        lblUploadGSTR3B1 : () => cy.get('[data-cy="cardItemTitle_1"]'),
        txtUploadGSTR3B : () => cy.get('[data-cy="cardItemSub_1"]'),
        iconUploadGSTR3B : () => cy.get('[data-cy="cardItem3Img_1"]'),
        lblUploadGSTR3Binfo : () => cy.get('[data-cy="app.components.ProcessingFeeReduction.pd_off_gstr_name"]'),
        txtUploadGSTR3Binfo : () => cy.get('[data-cy="app.components.ProcessingFeeReduction.pd_off_gstr_desc"]'),
        rbGSTDetailVerification : () => cy.get('[data-cy="cardItem1Img_2"]'),
        txtGSTDetailVerification: () => cy.get('[data-cy="cardItemTitle_2"]'),
        subTextGSTDetailVerification: () => cy.get('[data-cy="cardItemSub_2"'),
        iconGSTDetailVerification: () => cy.get('[xmlns="http://www.w3.org/2000/svg"]'),
        lblGSTDetailVerification: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.gst_details_ver"]'),
        txtGSTINNumber: () => cy.get ('[data-cy="app.components.ProcessingFeeReduction.pd_off_gst_desc"]'),
        btnContinue : () => cy.contains('button','Continue'),
        lblRejected: () => cy.get('[data-cy="substr_gstr3b"]'),
        lblRetry: () => cy.get('[data-cy="substr_gstr3b"]'),
        lblApproved: () => cy.get('[data-cy="substr_gstr3b"]'),
        lblGSTNumberVerfication: () => cy.get('[data-cy="gst"]'),
    }

    verifyPageTitle(BusinessDetails) {
        this.elements.pageTitle().should('contain.text', BusinessDetails)
    }

    verifyGSTNumberVerificationLabel(GSTVerification) {
        this.elements.lblGSTNumberVerfication().should('have.text', GSTVerification)
    }

    verifyGSTVerificationSubText(Availdiscountupto10onProcessingFee) {
        this.elements.txtGSTVerfication().should('contain.text', Availdiscountupto10onProcessingFee)
    }

    verifyTitleGSTVerificationInfo(GSTVerification) {
        this.elements.lblGSTVerficationinfo().should('contain.text', GSTVerification)
    }

    verifySubTxtGSTVerificationInfo(ProvidetheGSTINnumberofyourbusinessShopforVerification) {
        this.elements.txtGSTVerficationinfo().should('contain.text', ProvidetheGSTINnumberofyourbusinessShopforVerification)
    }

    verifyUploadGSTText(UploadGSTR) {
        this.elements.lblUploadGSTR3B().should('have.text', UploadGSTR)
    }

    verifyNoUploadGSTText() {
        this.elements.lblUploadGSTR3B().should('not.exist')
    }

    verifyRejectedUploadGSTRText() {
        this.elements.lblUploadGSTR3B1().should('be.visible')
    }

    verifyUploadGSTSubText(Availdiscountupto10onProcessingFee) {
        this.elements.txtUploadGSTR3B().should('contain.text', Availdiscountupto10onProcessingFee)
    }

    verifyTitleUploadGSTInfo(UploadGSTR3B) {
        this.elements.lblUploadGSTR3Binfo().should('contain.text', UploadGSTR3B)
    }

    verifySubTxtUploadGSTInfo(UploadyourGSTR3Bformsofatleastlast8months) {
        this.elements.txtUploadGSTR3Binfo().should('contain.text', UploadyourGSTR3Bformsofatleastlast8months)
    }

    clickOnGSTVerification(GSTVerification){
        this.elements.lblGSTVerfication().should('have.text', GSTVerification).click()
    }

    clickOnUploadGSTR(){
        this.elements.lblUploadGSTR3B().click()
    }

    clickContinueButton(){
        this.elements.btnContinue().eq(0).click({force:true})
    }

    verifyRejectedlabel() {
        this.elements.lblRejected().should('be.visible')
    }

    verifyRetrylabel() {
        this.elements.lblRetry().should('be.visible')
    }

    verifyApprovedLabel() {
        this.elements.lblApproved().should('be.visible')
    }

    clickGSTNumberVerificationLabel() {
        this.elements.lblGSTNumberVerfication().click()
    }
}

export const businessDetailsPage = new BusinessDetailsPage()