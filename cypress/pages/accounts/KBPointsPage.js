/// <reference types = "cypress" />

class KBPointsPage{
    elements = {
        pageTitle : () => cy.get('[data-cy="app.components.ReferAndEarn.kb_points"]'),
        txtRedeemPoints: () => cy.get('[data-cy="app.components.ReferAndEarn.avail_loan"]'),
        lblViewPointsHistory: () => cy.get('[data-cy="app.components.ReferAndEarn.usage_hist"]'),
        txtKBPoints: () => cy.get('[data-cy="availablePoints"]'),
        lblKBPoints: () => cy.get('[data-cy="app.components.ReferAndEarn.kb_points"]'),
        lbl24KGoldInvestment: () => cy.contains('span','24K Gold Investment'),
        txt24KGold: () => cy.get('[]'),
        lblProcessingFee: () => cy.contains('span','Processing Fees'),
        txtGetDiscount: () => cy.get('[]'),
        lblCashInBankAccount: () => cy.contains('span','Cash in Bank Account'),
        txtGetCashCreatedInBankAccount: () => cy.get('[]') ,
        btncontinue:() => cy.get('[data-cy="continueBtn"]'),  
    }
    verifypageTitle(KBPoints){
        this.elements.pageTitle().should('have.text',KBPoints)
    }
    verifyRedeemPointsText(redeempoints){
        this.elements.txtRedeemPoints().should('have.text',redeempoints)
    }
    verifyViewPointsHistoryLabel(viewpointshistory){
        this.elements.lblViewPointsHistory().should('have.text',viewpointshistory)
    }
    ClickViewPointsHistoryLabel(){
        this.elements.lblViewPointsHistory().click()
    }
    verifyKBPointsText(kbpoints){
        this.elements.txtKBPoints().should('have.text',kbpoints)
    }
    verifyKBPointsLabel(kbpoints){
        this.elements.lblKBPoints().should('have.text',kbpoints)
    }
    verify24KGoldInvestmentLabel(goldinvestment){
        this.elements.lbl24KGoldInvestment().should('have.text',goldinvestment)
    }
    click24KGoldInvestmentLabel(){
        this.elements.lbl24KGoldInvestment().click()
    }
    verifyProcessingFeeLabel(goldinvestment){
        this.elements.lblProcessingFee().should('have.text',goldinvestment)
    }
    clickProcessingFeeLabel(){
        this.elements.lblProcessingFee().click()
    }
    verifyCashInBankAccountLabel(goldinvestment){
        this.elements.lblCashInBankAccount().should('have.text',goldinvestment)
    }
    clickCashInBankAccountLabel(){
        this.elements.lblCashInBankAccount().click()
    }

    clickContinueBtn(){
         this.elements.btncontinue().click()
    }
       
}
export const kbPointsPage = new KBPointsPage()