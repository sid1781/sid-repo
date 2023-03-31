/// <reference types = "cypress" />


export  class ReportAnIssueSuccessfullPage{
    elements={
      lblSuccess:()=>cy.get('[data-cy="app.components.RepaymentScreen.success_txt"]'),
      subtxtSuccess:()=>cy.get('[data-cy="app.components.RepaymentScreen.issue_reported_desc"]'),
      btnOk:()=>cy.get('[data-cy="app.components.Common.ok_btn_uc"]'),
    }
    verifySuccessLabel(text){
      this.elements.lblSuccess().should('have.text',text)
    }
    verifySuccesssubText(text){
      this.elements.subtxtSuccess().should('have.text',text)
    }
    clickOkButton(){
      this.elements.btnOk().click
    }
    verifyOkButton(text){
      this.elements.btnOk().should('have.text',text)
    }
  
  }
  export const reportAnIssueSuccessfullPage=new ReportAnIssueSuccessfullPage()