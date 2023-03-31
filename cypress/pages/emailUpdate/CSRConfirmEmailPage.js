///<reference types="cypress" />

export class CSRConfirmEmailPage{

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5e8b33c1e75119b93cab714c',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        imgconfirmEmailId:()=>cy.get('[class="skins__ChConimg-sc-1w7icmd-129"]'),
        txtConfirmEmailID:()=>cy.get('[data-cy="app.components.CreditScore.ks_confirm_email"]'),
        subtxtConfirmEmailID:()=>cy.get('[data-cy="app.components.CreditScore.ks_email_confirm_desc"]'),
        
        btnChangeEmailAddress:()=>cy.get('[data-cy="app.components.CreditScore.ks_change_email_text"]'),
         btnContinue:()=>cy.get('[data-cy="app.components.Common.continue_btn_caps"]'),

    }
    clickChangeEmailAddress(){
        this.elements.btnChangeEmailAddress().click()
    }
clickContinueButton(){
    this.elements.btnContinue().click({force:true})
}

}
export const csrConfirmEmailPage=new CSRConfirmEmailPage;