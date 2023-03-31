///<reference types="cypress" />

export class CSRComparePage{

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5e8b33c1e75119b93cab714c',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
       PageTitle:()=>cy.get('[data-cy="app.components.CreditScore.csr_change_same_title"]'),
       cancelButton:()=>cy.get('[]'),
       btnOK:()=>cy.get('[data-cy="app.components.CreditScore.csr_pvnl_con_ok"]'),

    }
    verifyPageTitle(title){
        this.elements.PageTitle().should('contain.text',title)

    }
    clickCancelButton(){
        this.elements.cancelButton().click()
    }
    clickOkButton(){
        this.elements.btnOK().click()
    }

}
export const csrComparePage=new CSRComparePage;