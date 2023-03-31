/// <reference types = "cypress" />


export class EWALoanTenurePage {

    details = {
        // zeplin: () => 'https://zpl.io/mDzL7j9',//TODO
        // overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',//TODO
    }

    elements = {
        pagitle:()=>cy.get('[data-cy="placeFixedLoanAmt"]'),
        btnViewRepaymentAndCharges:()=>cy.get('[data-cy="placeVariableBtntxt"]')

    }
    clickviewRepaymentAndChargesButton(){
        this.elements.btnViewRepaymentAndCharges().click()
    }
   

}

export const ewaLoanTenurePage = new EWALoanTenurePage()
