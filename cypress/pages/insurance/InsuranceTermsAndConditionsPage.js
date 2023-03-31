/// <reference types = "cypress" />

export class InsuranceTermsAndConditionsPage {

    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }

    elements ={
    
        pageTitle : () => cy.getIframeBody().contains('span','Terms & Conditions'),
        btnBack : () => cy.getIframeBody().find('[class="icic_back typography__BIcon-z7jdzb-17 kIaxlt"]'),

    }

    verifyInsuranceTermsAndConditionsPageTitle(insuranceTitle) {
        this.elements.pageTitle().should('have.text', insuranceTitle)
    }

    clickInsuranceTermsAndConditionsPageBackButton() {
        this.elements.btnBack().click()
    }

}

export const insuranceTermsAndConditionsPage = new InsuranceTermsAndConditionsPage