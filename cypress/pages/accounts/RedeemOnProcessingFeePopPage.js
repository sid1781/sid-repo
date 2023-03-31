/// <reference types = "cypress" />

class RedeemOnProcessingFeePopPage{
    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.ReferAndEarn.redeem_on_processing_fees"]'),
        txtRedeemKBPoints: () => cy.get('[data-cy="app.components.ReferAndEarn.redeem_on_processing_fees_description"]'),
        btnOk: () => cy.get('[data-cy="okBtn"]') 
    }
    verifypageTile(title){
        this.elements.pageTitle().should('have.text',title)
    }
    verifyRedeemKBPointsText(redeemPoints){
        this.elements.txtRedeemKBPoints().should('have.text',redeemPoints)
    }
    clickOKButton(){
        this.elements.btnOk().click()
    }
    verifyOkButton(ok){
        this.elements.btnOk().should('have.text',ok)
    }
}

export const redeemonProcessingFeePage = new RedeemOnProcessingFeePopPage()