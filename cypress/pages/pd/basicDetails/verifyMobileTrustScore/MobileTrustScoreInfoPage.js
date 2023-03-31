
/// <reference types = "cypress" />

export class MobileTrustScoreInfoPage {

    details = {
        //zeplin screen and actual screen may differ
        zeplin: () => 'https://zpl.io/amJwQw9',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        imgMobileTrustScore: () => cy.get('[]'),
        infoSubText: () => cy.get(),
        lblSteps: () => cy.get(),
        SubTextOfSteps: () => cy.get(),
        lblRegisteredMobileNumber: () => cy.get(),
        lblOfferValidFor: () => cy.get(),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        btnContinue: () => cy.contains('Continue'),
    }
    clickContinuebtn(){
        this.elements.btnContinue().click()
    }

}

export const mobileTrustScoreInfoPage = new MobileTrustScoreInfoPage