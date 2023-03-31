/// <reference types = "cypress" />

export class PDInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/O0q9Gn8',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        titleOfDiscountAndCredit: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.discover_your_credit"]'),
        infoSubText1: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.kb_model_info1"]'),
        infoSubText2: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.kb_model_info2"]'),
        btnOK: () => cy.get('[data-cy="app.components.Common.ok_btn_uc"]'),
        iconKnowMore: () => cy.get('.skins__DIImg-sc-1xw0zye-23 gNZTYZ'),
    }

}

export const pdInfoPage = new PDInfoPage