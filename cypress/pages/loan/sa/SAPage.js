/// <reference types = "cypress" />

export class SAPage {

    details = {
        zeplin: () => 'https://zpl.io/VDgD5yg',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements ={
        lblSAPageHeader : () => cy.get('[data-layer="Content"]'),
        pageTitle : () => cy.get('[]'),
        lblSACard1 : () => cy.get('[]'),
        iconSACard1 : () => cy.get('[]'),
        valSACard1 : () => cy.get('[]'),
        subTxtSACard1 : () => cy.get('[]'),
        btnSAGetNowCard1 : () => cy.get('[]'),
        lblSACard2 : () => cy.get('[]'),
        iconSACard2 : () => cy.get('[]'),
        valSACard2 : () => cy.get('[]'),
        subTxtSACard2 : () => cy.get('[]'),
        btnSALockedCard2 : () => cy.get('[]'),
        lblBoostCredit : () => cy.get('[]'),
        btnSAGetNow : () =>  cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]'),
    }

    clickSAGetNowBtn() {
        this.elements.btnSAGetNow().click({timeout:2000})
    }

}

export const saPage = new SAPage