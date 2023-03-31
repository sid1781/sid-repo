/// <reference types = "cypress" />

export class BusinessDetailsGSTDetailsVerification{
    details = {
    zeplin: () => 'https://zpl.io/Q0xvPN5',
    zeplinGSTDetailVerfication : () => 'https://zpl.io/g8yQx30',
    overflow: () => 'https://overflow.io/s/3IH4JZ6J/?node=b7e5d24f&prototype'
}

    elements ={
        pageTitle: () => cy.get('[data-cy="pd_off_secl_title"]'),
        iconBusinessDetails: () => cy.get('[src="https://ik.imagekit.io/kreditbee/app-static/pd/New_Set/ic_pd-business-gst.svg"]'),
        txtGSTNumberVerification: () => cy.get('[data-cy="cardItemTitle"]'),
        subTextGSTNumberVerification: () => cy.get('[data-cy="cardItemSub"]'),
        iconGSTNumberVerification: () => cy.get('#app > div > div > div > div > div.BPage__BodyCon-y2uowf-5.hVKgml > div > div.skins__StyledPDSeleFixed-sc-1xw0zye-105.dPqach > div > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td.skins__OCardThirdTd-sc-14eqbyx-115.isKMEF > div > div > div > svg'),
        txtUploadGSTR: () => cy.get(),
        subTextUplodaGSTR: () => cy.get(),
        iconUploadGSTR : () => cy.get(),
        txtGSTDetailVerification: () => cy.get('[data-cy="cardItemTitle_2"]'),
        subTextGSTDetailVerification: () => cy.get('[data-cy="cardItemSub_2"'),
        iconGSTDetailVerification: () => cy.get('[xmlns="http://www.w3.org/2000/svg"]'),
        btnContinue: () => cy.get('[data-cy="continueTxt"]'),
        lblGSTDetailVerification: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.gst_details_ver"]'),
        txtGSTINNumber: () => cy.get ('[data-cy="app.components.ProcessingFeeReduction.pd_off_gst_desc"]'),

    }
    // pageTitle
    verifyPageTitle(businessdetail){
        this.elements.pageTitle().should('contain.text',businessdetail)
    }
    // iconBusinessDetails
    verifyBusinessDetailIcon(){
        this.elements.iconBusinessDetails().find('img').should('be.visible')
    }
    // txtGSTNumberVerification
    verifyGSTNumberVerificationText(gstnumber){
        this.elements.iconGSTDetailVerification().should('contain.text',gstnumber)
    }
    // subTextGSTNumberVerfication
    verifyGSTNumberVerificationSubText(get){
        this.elements.subTextGSTNumberVerification().should('contain.text',get)
    }
    // iconGSTNumberVerification
    verifyGSTNumberVerificationImage(){
        this.elements.iconGSTNumberVerification().find('img').should('be.visible')
    }
    // txtUploadGSTR
    verifyUploadGSTRText(GSTR){
        this.elements.txtUploadGSTR().should('contain.text',GSTR)
    }
    // subTextUplodaGSTR
    verifyUploadGSTRSubText(){
        this.elements.subTextUplodaGSTR().should('contain.text',get)
    }
    // iconUploadGSTR
    verifyUploadGSTRImage(){
        this.elements.iconUploadGSTR().find('img').should('be.visible')
    }
    // txtGSTDetailVerification
    verifyGSTDetailsVerificationText(Details){
        this.elements.txtGSTDetailVerification().should('contain.text',Details)
    }
    // subTextGSTDetailVerification
    verifyGSTDetailVerificationSubText(get){
        this.elements.subTextGSTDetailVerification().should('contain.text',get)
    }
    // iconGSTDetailVerification
    verifyGSTDetailVerificationImage()
    {
        this.elements.iconGSTDetailVerification().find('img').should('be.visible')        
    }
    // btnContinue
    verifyContinueButton(Continue){
        this.elements.btnContinue().should('contain.text',Continue)
    }
    // btnContinue
    clickOnContinue(Continue){
        this.elements.btnContinue().should('contain.text',Continue).click()
    }

    // lblGSTDetailVerfication
    verifyGSTDetailVerificationLabel(){
        this.elements.lblGSTDetailVerification().find('img').should('be.visible')
    }
    // txtGSTINNumber
    verifyGSTINNumberText(GSTIN)
    {
        this.elements.txtGSTINNumber().should('contain.text',GSTIN)
    }
}

export const businessDetailsGSTDetailsVerification = BusinessDetailsGSTDetailsVerification ()