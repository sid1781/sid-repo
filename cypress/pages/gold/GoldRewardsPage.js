/// <reference types = "cypress" />

export class GoldRewardPage{
    elements={
        pageTitle: () => cy.get('[data-cy="app.components.DigitalGold.rewards_title_txt"]'),
        subtxtRedeemScratchCards: () => cy.get('[data-cy="app.components.DigitalGold.rewards_sub_title_txt"]'),
        lblCollectNow : () => cy.get('[data-cy="unscratched"]'),
        lblCollected: () => cy.get('[data-cy="scratched"]'),
        lblExpired : () => cy.get('[data-cy="expired"]'),
        imgEmpty: () => cy.get('[data-cy="nothing_to_show_icon"]',{timeout:30000}),
        imgUnscratchedCards: () => cy.get('[data-cy="unscratched_card_0"]'),
        lblCardDate :()=> cy.get('[data-cy="unscratched_card_expiry_0"]'),
        imgScratchedCards :()=> cy.get('[data-cy="scratched_card_0"]')
    }
    verifyPageTitle(txt){
        this.elements.pageTitle().should('have.text', txt)
    }
    verifyRedeemScratchCardsSubtxt(subtxt){
        this.elements.subtxtRedeemScratchCards().should('have.text', subtxt)
    }
    clickCollectNowLabel(){
        this.elements.lblCollectNow().click()
    }
    clickCollectedLabel(){
        this.elements.lblCollected().click()
    }
    clickExpiredLabel(){
        this.elements.lblExpired().click()
    }
    verifyEmptyImage(){
        this.elements.imgEmpty().should('be.visible',{timeout : 2000})
    }
    verifyUnscratchedCardsVisible(){
        this.elements.imgUnscratchedCards().should('be.visible')
    }
    clickUnscratchedCards(){
        this.elements.imgUnscratchedCards().click()
    }
    verifyUnscratchedCardDateVisible(){
        this.elements.lblCardDate().should('be.visible')
    }
    verifyUnscratchedCardDateNotVisible(){
        this.elements.lblCardDate().should('not.exist')
    }
    verifyScratchedCardsVisible(){
        this.elements.imgScratchedCards().should('be.visible')
    }

}
export const goldRewardPage = new GoldRewardPage()