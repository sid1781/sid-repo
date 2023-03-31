/// <reference types = "cypress" />
export class GoldInvestAndWinMorePage {

    details = {
        zeplin: () => '',
        overflow: () => '',
    }
    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.DigitalGold.milestone_page_title"]'),
        txtKeepInvesting: () => cy.get('[data-cy="app.components.DigitalGold.milestone_page_sub_title"]'),
        iconNextMilestone: () => cy.get('[data-cy="app.components.DigitalGold.next_milestone_title"]'),
        btnBuy: () => cy.get('[data-cy="app.components.DigitalGold.milestone_nudge_txt"]'),
        lblScratchCards : () => cy.get('[data-cy="slider_lable_0"]')


    }
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    verifyBuyBtn(){
        this.elements.btnBuy().should('be.visible')
    }
    verifyScratchCardsLabel(){
        this.elements.lblScratchCards().should('be.visible')
    }

}
export const goldInvestAndWinMorePage  = new GoldInvestAndWinMorePage()