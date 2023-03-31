/// <reference types = "cypress" />

export class AutoDebitOptionsInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/vMqdZre',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="titleSection"]'),
        imgOfSetupAutoDebit: () => cy.get('[]'),
        lblSteps: () => cy.get('[data-cy="app.components.extraDetails.steps"]'),
        subTextOfSteps1: () => cy.get('[data-cy="desc2_0"]'),
        iconOfsubTextOfSteps1: () => cy.get('[]'),
        subTextOfSteps2: () => cy.get('[]'),
        iconOfsubTextOfSteps2: () => cy.get('[]'),
        subTextOfSteps3: () => cy.get('[]'),
        iconOfsubTextOfSteps3: () => cy.get('[]'),
        infoSubTextBox: () => cy.get('[]'),
        btnContinue: () => cy.contains('button','Continue'),

    }

    verifyPageTitle(pageTitle){
        this.elements.pageTitle().should('contain.text',pageTitle)
    }
    verifyStepsLabel(steps){
        this.elements.lblSteps().should('contain.text',steps)
    }
    verifyNetbankingSubSteps(infoSubText){
        this.elements.subTextOfSteps1().should('contain.text',infoSubText)
    }
    clickContinuebtn(){
        this.elements.btnContinue().click({force:true})
    }

}

export const autoDebitOptionsInfoPage = new AutoDebitOptionsInfoPage