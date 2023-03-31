/// <reference types = "cypress" />


export class SAEmploymentDetailsPage {

    details = {
        zeplin: () => '',
        overflow: () => '', //TODO Link
    }
    elements = {
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]',{timeout:30000}),
        lblPincode : () => cy.get('[data-cy="label_undefined"]'),
        inpPincode : () => cy.get('[data-cy="input_undefined"]'),
        lblEmploymentType: () => cy.get('[]'),
        iconEmploymentType: () => cy.get('[]'),
        rbSalaried: () => cy.get('[]',{timeout:15000}),
        rbSelfEmployed: () => cy.get('[data-cy="self-employed"]'),
        lblSelectCompany : () => cy.get('[]'),
        lnkSearchCompanyFromList : () =>cy.get('[data-cy="subtext_app.components.EmploymentSummary.select_company"]'),
        lblModeOfSalary : () => cy.get('[]'),
        ddtModeOfSalary : () => cy.get('[]'),
        lblMonthlySalaryOrIncome: () => cy.get('[data-cy="label_app.components.Eligibility.elg_salary_placeholder"]'),
        iconMonthlySalaryOrIncome: () => cy.get('[]'),
        inpSalaryOrIncome: () => cy.get('[data-cy="input_undefined"]'),
        lblSelectCompanyName: () => cy.get('[data-cy="input_app.components.Eligibility.sel_cf2"]').eq(0),
        chkBoxMyMonthlySalary: () => cy.get('[data-cy="check_icon"]'),
        txtMyMonthlySalary: () => cy.get('[data-cy="checkboxText_app.components.Eligibility.min_income"]'),
        btnSubmit: () => cy.contains('span','Submit'),
        iconSelectCompanyName: () => cy.get('[]'),
        inpCompanyName: () => cy.get('[data-cy="input_undefined"]'), 
        lnkRequestToAdd : () => cy.get('[data-cy="requestToAdd"]'),
    }
    verifyPageTitle(txt){
        this.elements.pageTitle().should('have.text', txt)
    }
    enterCompanyName(){
        this.elements.inpCompanyName().type('lkjh')
    }
    clickRequestedToAddLink(){
        this.elements.lnkRequestToAdd().click()
    }
    selectSelfEmployed(){
        this.elements.rbSelfEmployed().click()
    }
    enterSalaryOrIncome(amount){
        this.elements.inpSalaryOrIncome().clear().eq(1).type(amount)
    }
    clickchkBoxMyMonthlySalary(){
        this.elements.chkBoxMyMonthlySalary().click({force: true})
    }
    clickSubmitBtn(){
        this.elements.btnSubmit().click({force: true})
    }
    enterPincode(pincode){
        this.elements.inpPincode().eq(0).type(pincode)
    }
    clickSearchCompanyfromlistLink(){
        this.elements.lnkSearchCompanyFromList().click()
    }
}

export const saEmploymentDetailsPage = new SAEmploymentDetailsPage()   