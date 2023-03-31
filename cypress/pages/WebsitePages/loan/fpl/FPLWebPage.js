/// <reference types = "cypress" />

export class FPLWebPage {

    details = {
        zeplin: () => 'https://zpl.io/VDgD5yg',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        lblFPLPageHeader: () => cy.getIframeBody().find('[data-layer="Content"]'),
        pageTitle: () => cy.getIframeBody().find('[]'),
        lblFPLCard1: () => cy.getIframeBody().find('[]'),
        iconFPLCard1: () => cy.getIframeBody().find('[]'),
        valFPLCard1: () => cy.getIframeBody().find('[]'),
        subTxtFPLCard1: () => cy.getIframeBody().find('[]'),
        // btnFplGetNowCard1: () => cy.getIframeBody().find('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]'),
        btnFplGetNowCard1: () => cy.getIframeBody().find('[data-cy="getNow"]'),

        lblFPLCard2: () => cy.getIframeBody().find('[]'),
        iconFPLCard2: () => cy.getIframeBody().find('[]'),
        valFPLCard2: () => cy.getIframeBody().find('[]'),
        subTxtFPLCard2: () => cy.getIframeBody().find('[]'),
        btnFplLockedCard2: () => cy.getIframeBody().find('[]'),
        lblBoostCredit: () => cy.getIframeBody().find('[]'),
        btnFpl4KGetNow: () => cy.getIframeBody().find('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]'),
    }                              
    clickFPL4KGetNowBtn() {
        this.elements.btnFpl4KGetNow().click({timeout:2000})
    }
    verifyPageTitle(title){
        this.elements.pageTitle().should('have.text', title)
    }  verifyBankTransferUptoLabel(card2){
        this.elements.lblBankTransferUpto().should('have.text',card2)
    }
    verifyFPLLockedButton(locked){
        this.elements.btnFPLockedCard2().should('have.text',locked)
    }
    clickFPLLockedButton(){
        this.elements.btnFPLockedCard2().should('not.be.disabled')
    }
    verifyFPLCard1Value(value){
        this.elements.valFPLCard1().should('have.text',value)
    }
    clickFplGetNowCard1Button(){
        this.elements.btnFplGetNowCard1().click()
    }
    verifyBankTransferUptoLabel(card2){
        this.elements.lblBankTransferUpto().should('have.text',card2)
    }
    verifyFPLLockedButton(locked){
        this.elements.btnFPLockedCard2().should('have.text',locked)
    }
    clickFPLLockedButton2(){
        this.elements.btnFPLockedCard2().click()
    }
    verifyFPLCard1Value(value){
        this.elements.valFPLCard1().should('have.text',value)
    }

}

export const fplWebPage = new FPLWebPage()