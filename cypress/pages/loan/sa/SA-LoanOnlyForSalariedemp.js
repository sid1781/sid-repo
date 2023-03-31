/// <reference types = "cypress" />


export class SALoanForSalariedEmp {

    details = {
        zeplin: () => '',
        overflow: () => '', //TODO Link
    }
    elements = {
        txtLoanForSalariedEmp : () => cy.get('[data-cy="app.components.EmploymentSummary.cooldown_msg"]'),
        btnOK : () => cy.get('[data-cy="app.components.Common.ok_btn_uc"]'),
    }
    verifyLoanForSalariedEmployText(txt){
        this.elements.txtLoanForSalariedEmp().should('have.text', txt)
    }
    verifyOKBtn(){
        this.elements.btnOK().should('be.visible')
    }
}

export const saLoanForSalariedEmp = new SALoanForSalariedEmp()   