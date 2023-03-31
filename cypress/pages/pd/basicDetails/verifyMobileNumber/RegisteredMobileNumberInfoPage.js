
/// <reference types = "cypress" />

export class RegisteredMobileNumberInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/amJwQw9',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.offName_basic_mob_auth_1"]'),
        imgRegisteredMobileNumber: () => cy.get('[data-cy="titleImg"]'),
        infoSubText: () => cy.get('[data-cy="eventDesc"]'),
        lblSteps: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.steps"]'),
        SubTextOfSteps: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.common_mobauth_step"]'),
        lblRegisteredMobileNumber: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.registered_string"]'),
        lblOfferValidFor: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.offer_valid_till"]'),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        btnContinue: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.off_info_con"]'),
    }
    verifyPageTitle(pageTitle) {
        this.elements.pageTitle().should('have.text', pageTitle)
    }
    verifyInfoSubtext(infosubtext) {
        this.elements.infoSubText().should('contain.text',infosubtext)
    }
    verifyStepsLabel(steps) {
        this.elements.lblSteps().should('contain.text',steps)
    }
    verifySubTextOfSteps(substeps) {
        this.elements.SubTextOfSteps().should('contain.text',substeps)
    }
    verifyRegisteredMobileNumberLabel(Registeredmobile) {
        this.elements.lblRegisteredMobileNumber().should('contain.text',Registeredmobile)
    }
    verifyOfferValidForLabel(offervalidfor) {
        this.elements.lblOfferValidFor().should('contain.text',offervalidfor)
    }
    clickOnContinueBtn(){
        this.elements.btnContinue().click()
    }


}

export const registeredMobileNumberInfoPage = new RegisteredMobileNumberInfoPage