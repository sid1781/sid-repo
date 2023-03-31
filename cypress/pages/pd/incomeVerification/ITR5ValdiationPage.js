
/// <reference types = "cypress" />

export class ITRvValdiationPage {

    details = {
        zeplin: () => 'https://zpl.io/Z0y81Yw',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.offer_name_itrv_title"]'),
        iconPDF: () => cy.get('[]'),
        btnUploadLatestITRV: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.itrv_add_tit"]'),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        // btnConfirmAndContinue: () => cy.get('[data-cy="confAndCont"]'),
        btnConfirmAndContinue: () => cy.contains('button','Confirm and Continue')
    }

    clickContinueButton() {
        this.elements.btnConfirmAndContinue().click({force:true})
    }

}

export const itrvValdiationPage = new ITRvValdiationPage()