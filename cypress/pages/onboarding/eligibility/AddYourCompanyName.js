/// <reference types = "cypress" />

export class AddYourCompanyDetailsPage {

    details = {
        zeplin: () => 'https://zpl.io/RMDDqJp',
        zeplin_variation: () => 'https://zpl.io/z899MEE',
        overflow_onboarding_2_5: () => 'https://overflow.io/s/UCDTKU1H/?node=6d85b16b',
    }

    elements = {
        PageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        iconParentCompany: () => cy.get('[]'),
        inpParentCompany: () => cy.get('[data-cy="input_undefined"]'),
        iconCompanyAddress1 : () => cy.get('[]'),
        inpCompanyAddress1 : () => cy.get('[data-cy="input_undefined"]'),
        iconCompanyAddress2 : () => cy.get('[]'),
        inpCompanyAddress2 : () => cy.get('[data-cy="input_undefined"]'),
        iconCity : () => cy.get('[]'),
        inpcityname: () => cy.get('[]'),
        iconState : () => cy.get('[]'),
        inpStateName: () => cy.get('[]'),
        btnSubmit: () => cy.get('[type="submit"]'),
    }
    verifyPageTitle(txt){
        this.elements.PageTitle().should('have.text', txt)
    }
    EnterParentCompanyName(txt){
        this.elements.inpParentCompany().eq(0).type(txt)
    }
    EnterCompanyAddress1(txt){
        this.elements.inpCompanyAddress1().eq(1).type(txt)
    }
    EnterCompanyAddress2(txt){
        this.elements.inpCompanyAddress2().eq(2).type(txt)
    }
    clickSubmitBtn(){
        this.elements.btnSubmit().click()
    }
}
    export const addYourCompanyDetailsPage = new AddYourCompanyDetailsPage()
