/// <reference types = "cypress" />

export class SAEmpDetailsPage {

    details = {
        zeplin: () => '',
        overflow: () => '', //TODO Link
    }
    elements = {
        pageTitle : () => cy.get('[data-cy="app.components.EmploymentSummary.employment_details"]'),
        lblFillWorkPlaceDetails : () => cy.get('[data-cy="app.containers.EmploymentSummary.summary_data_title1"]'),
        txtcurrentlyemployed : () => cy.get('[]'),
        lblVerifyIncome : () => cy.get('[data-cy="app.containers.Bprofile.verify_income_title"]'),
        txtHigherCredit : () => cy.get('[]'),
        txtNeedHelp : () => cy.get('[data-cy="app.components.EmploymentSummary.need_help_call"]'),
        txtCustomerTiming : () => cy.get('[data-cy="app.components.EmploymentSummary.call_now_time_text"]'),
        btnCallNow : () => cy.get('[data-cy="app.components.EmploymentSummary.need_help_call_now"]'),
        iconInfomationForSalaried : () => cy.get('[]'),
        txtInfomationForSalaried : () => cy.get('[]'),
        btnConfirmAndContinue : () => cy.get('[]'),
        tabEmployment :() => cy.get('[data-cy="app.containers.EmploymentSummary.verify_employment"]'),
    }
    verifyPageTitle(txt){
        this.elements.pageTitle().should('have.text', txt)
    }
    verifyCallNowButtonBtn(){
        this.elements.btnCallNow().should('be.visible')
    }
    verifyFillWorkPlaceDetailsLabel(){
        this.elements.lblFillWorkPlaceDetails().should('be.visible')
    }
    verifyVerifyIncomeLabel(){
        this.elements.lblVerifyIncome().should('be.visible')
    }
    clickEmploymentTab(){
        this.elements.tabEmployment().click()
    }

}

export const saEmpDetailsPage = new SAEmpDetailsPage() 