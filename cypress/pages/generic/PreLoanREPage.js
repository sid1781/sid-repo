/// <reference types = "cypress" />

export class PreLoanREPage {

    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/60599f4ba0376d1541f925b2',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=23ce703c',
    }

    elements = {
        
        lblAssessingCreditProfile : () => cy.get('...'),
        subTextAssessingCreditProfile : () => cy.get('...'),
        bannerFraudAlert : () => cy.get('...'),

    }

}

export const preLoanREPage = new PreLoanREPage