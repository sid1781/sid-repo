/// <reference types = "cypress" />

export class GoldProductDisplayPage {

    elements ={
        pageTitle : () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        imgGoldBanners : () =>  cy.get('[data-cy="bannerImg_3"]'),
        imgSafeGold : () => cy.get('[]'),
        lbl1GramSafeGoldCoin : () => cy.get('[]'),
        Val1GramSafeGoldCoin : () => cy.get('[]'), 
        txtAllChargesInclusive : () => cy.get('[]'),
        dropUp : () => cy.get('[]'),
        dropDown : () => cy.get('[]'),
        lblproductDeatils : () => cy.get('[]'),
        txtgoldWeight : () => cy.get('[]'),
        valGoldWeight : () => cy.get('[]'),
        txtmetalPurity : () => cy.get('[]'),
        valmetalPurity : () => cy.get('[]'),
        txtgoldModel : () => cy.get('[]'),
        valgoldModel : () => cy.get('[]'),
        txtPackaging : () => cy.get('[]'),
        txtTamperProofCerticard : () => cy.get('[]'),
        txtSeller : () => cy.get('[]'),
        valSeller : () => cy.get('[]'),
        txtRefundPolicy : () => cy.get('[]'),
        valRefundPolicy: () => cy.get('[]'),
        lblProductHighlights : () => cy.get('[]'),
        txtProductHighlights1 : () => cy.get('[]'),
        txtProductHighlights2 : () => cy.get('[]'),
        txtProductHighlights3 : () => cy.get('[]'),
        txtProductHighlights4 : () => cy.get('[]'),
        btnBuyNow : () => cy.get('[data-cy="buyNow"]'),
    }
    verifyPageTitle(title){
        this.elements.pageTitle().should('have.text',title)
    }
    verifyGoldBannersImage(){
        this.elements.imgGoldBanners().should('be.visible')
    }
    verifySafeGoldImage(){
        this.elements.imgSafeGold().should('be.visible')
    }
    verify1GramSafeGoldCoinLabel(text){
        this.elements.lbl1GramSafeGoldCoin().should('have.text',text)
    }
    verify1GramSafeGoldCoinValue(value){
        this.elements.Val1GramSafeGoldCoin().should('have.text',value)
    }
    verifyAllChargesInclusiveText(text){
        this.elements.txtAllChargesInclusive().should('have.text',text)
    }
    clickUpDropDown(){
        this.elements.dropUp().click()
    }
    clickDownDropDown(){
        this.elements.dropDown().click()
    }
    verifyProductDeatilsLabel(text){
        this.elements.lblproductDeatils().should('have.text',text)
    }
    clickProductDeatilsLabel(){
        this.elements.lblproductDeatils().click()
    }
    verifyGoldWeightText(text){
        this.elements.txtgoldWeight().should('have.text',text)
    }
    verifyGoldWeightValue(value){
        this.elements.valGoldWeight().should('have.text',value)
    }
    verifyGoldWeightText(text){
        this.elements.txtgoldWeight().should('have.text',text)
    }
    verifyGoldWeightValue(value){
        this.elements.valGoldWeight().should('have.text',value)
    }
    verifyMetalPurityText(text){
        this.elements.txtmetalPurity().should('have.text',text)
    }
    verifyMetalPurityValue(value){
        this.elements.valmetalPurity().should('have.text',value)
    }
    verifyGoldModelText(text){
        this.elements.txtgoldModel().should('have.text',text)
    }
    verifyGoldModelValue(value){
        this.elements.valgoldModel().should('have.text',value)
    }
    verifyPackagingText(text){
        this.elements.txtPackaging().should('have.text',text)
    }
    verifyTamperProofCerticardText(text){
        this.elements.txtTamperProofCerticard().should('have.text',text)
    }
    verifySellerText(text){
        this.elements.txtSeller().should('have.text',text)
    }
    verifySellerValue(value){
        this.elements.valSeller().should('have.text',value)
    }
    verifyRefundPolicyText(text){
        this.elements.txtRefundPolicy().should('have.text',text)
    }
    verifyRefundPolicyValue(value){
        this.elements.valRefundPolicy().should('have.text',value)
    }
    verifyProductHighlightsLabel(text){
        this.elements.lblProductHighlights().should('have.text',text)
    }
    clickProductHighlightsLabel(){
        this.elements.lblProductHighlights().click()
    }
    verifytProductHighlights1Text(text){
        this.elements.txtProductHighlights1().should('have.text',text)
    }
    verifytProductHighlights2Text(text){
        this.elements.txtProductHighlights2().should('have.text',text)
    }
    verifytProductHighlights3Text(text){
        this.elements.txtProductHighlights3().should('have.text',text)
    }
    verifytProductHighlights4Text(text){
        this.elements.txtProductHighlights4().should('have.text',text)
    }
    clickBuyNowButton(){
        this.elements.btnBuyNow().click()
    }
}

export const goldProductDisplayPage = new GoldProductDisplayPage()