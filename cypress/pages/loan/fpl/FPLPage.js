/// <reference types = "cypress" />

export class FPLPage {

    details = {
        zeplin: () => 'https://zpl.io/VDgD5yg',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements ={
        lblFPLPageHeader : () => cy.get('[data-layer="Content"]'),
        pageTitle : () => cy.get('[data-cy="app.components.NewHomePage.fpl_title"]'),
        lblFPLCard1 : () => cy.get('[]'),
        iconFPLCard1 : () => cy.get('[]'),
        valFPLCard1 : () => cy.get('[data-cy="maxAmt"]'),
        subTxtFPLCard1 : () => cy.get('[]'),
        lblBankTransferUpto : () => cy.get('[data-cy="app.components.NewHomePage.nhp_upto_text1"]'),
        btnFplGetNowCard1 : () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]'),
        lblFPLCard2 : () => cy.get('[]'),
        iconFPLCard2 : () => cy.get('[]'),
        valFPLCard2 : () => cy.get('[]'),
        subTxtFPLCard2 : () => cy.get('[]'),
        btnFPLockedCard2 : () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_locked"]'),
        lblBoostCredit : () => cy.get('[]'),
        btnFpl4KGetNow : () =>  cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]'),
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

export const fplPage = new FPLPage