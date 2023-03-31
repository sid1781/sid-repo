/// <reference types = "cypress" />

export class InsuranceFAQPage {
    
    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }


    elements ={
    
        pageTitle : () => cy.get('[]'),

    }

}

export const insuranceFAQPage = new InsuranceFAQPage