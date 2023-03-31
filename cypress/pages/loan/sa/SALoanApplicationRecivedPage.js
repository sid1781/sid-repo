/// <reference types = "cypress" />

export class SALoanApplicationRecivedPage {

    details = {
        zeplin: () => '', 
        overflow: () => '', //TODO Link
    }

    elements = {
        icontimer : () => '',
        txtSuccessfullyReceived : () => cy.get('[data-cy="app.components.NewHomePage.sa_application_inprogress"]'),
        subTextSuccessfullyReceived :()=> cy.get('[data-cy="app.components.NewHomePage.sa_application_inprogress_desc"]'),
        txtNeedHelp : () => cy.get('[data-cy="app.components.EmploymentSummary.need_help_call"]'),
        txtCustomerTiming : () => cy.get('[data-cy="app.components.EmploymentSummary.call_now_time_text"]'),
        btnCallNow : () => cy.get('[data-cy="app.components.EmploymentSummary.need_help_call_now"]'),
        btnRefresh : () => cy.get('[data-cy="app.components.NewHomePage.sa_application_status_refresh"]'),
    }
    verifySuccessfullyReceivedText(txt){
        this.elements.txtSuccessfullyReceived().should('have.text', txt)
    }
    verifySuccessfullyReceivedSubText(subtxt){
        this.elements.subTextSuccessfullyReceived().should('have.text', subtxt)
    }
}
export const saLoanApplicationRecivedPage = new SALoanApplicationRecivedPage()