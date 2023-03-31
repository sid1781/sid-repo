///<reference types="cypress" />

export class CSREnterEmailPage{

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5e8b33c1e75119b93cab714c',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {

        txtEnterNewEmailAddress:()=>cy.get('[data-cy="app.components.EmailChange.change_email_header"]'),
        imgEmailAddress:()=>cy.get('[]'),
        inpEmailAddress:()=>cy.get('[data-cy="input_app.components.EmailChange.email_placeholder"]'),
        chkBoxConsent:()=>cy.get('[data-cy="icon_app.components.EmailChange.email_check_label"]'),
        subtxtConfirm:()=>cy.get('[data-cy="checkboxText_app.components.EmailChange.email_check_label"]'),
        btnSendOTP:()=>cy.get('[data-cy="app.components.EmailChange.email_submit_btn"]'),


    }
       enterEmailAddress(email){
        this.elements.inpEmailAddress().type(email)
       }
       checkConsentBox() {
        this.elements.chkBoxConsent().click()
    }

       clickSendOtpButton(){
        this.elements.btnSendOTP().click({force:true})
       }
    
}
export const csrEnterEmailPage=new CSREnterEmailPage;