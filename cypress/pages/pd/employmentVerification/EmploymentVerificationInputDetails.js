/// <reference types = "cypress" />

export class EmploymentVerificationInputDetails {

    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        imgKreditbee:()=>cy.get('[]'),
        pageTitle:()=>cy.get('[]'),
        txtCompany:()=>cy.get('[]'),
        inpCompanyName:()=>cy.get('input[id="combo-box-options"]').eq(0),
        txtHR:()=>cy.get('[]'),
        inpHR:()=>cy.get('input[id="combo-box-options"]').eq(1),
        subtxtExample:()=>cy.get('[]'),
        descEmployment:()=>cy.get('[]'),
        btnCancel:()=>cy.get('[]'),
        btnNext:()=>cy.get('[type="submit"]'),    
    }
    EnterComapnyName(name){
        this.elements.inpCompanyName().type(name)
    }
    EnterHr(hr){
        this.elements.inpHR().type(hr)
    }
    clickNext(){
        this.elements.btnNext().click()
    }
}
export const employmentVerificationInputDetails= new EmploymentVerificationInputDetails