/// <reference types = "cypress" />
 
export class ReportAnIssuePage{
    elements={
        pageTitle: () => cy.get('[data-cy="app.components.RepaymentScreen.report_an_issue_txt"]'),
        lblExplainYourIssue: () => cy.get('[data-cy="label_app.components.RepaymentScreen.explain_issue_txt"]'),
        inpExplainYourIssueBox: () => cy.get('[data-cy="app.components.RepaymentScreen.explain_issue_txt"]'),
        btnSubmit:()=>cy.get('[data-cy="app.components.Common.submit_btn_caps"]')
    
    }
    verifyPageTitle(title) {
        this.elements.pageTitle().eq(0).should('have.text', title)
    }
    verifylExplainYourIssueLabel(text){
        this.elements.lblExplainYourIssue().should('have.text', text)
    }
    verifyExplainYourIssueBoxInput(){
        this.elements.inpExplainYourIssueBox().should('be.visible')
    }
    verifyExplainYourIssueBoxInput(){
        this.elements.inpExplainYourIssueBox().type('i am not getting paymentPage its loading only')
    }
    clickSubmitButton(){
        this.elements.btnSubmit().click()
    }
}
export const reportAnIssuePage=new ReportAnIssuePage()