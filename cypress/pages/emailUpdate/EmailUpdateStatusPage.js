///<reference types="cypress" />

export class EmailUpdateStatusPage{

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5df388e94802b449b83d18e8',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        //Email sending page
        imgSuccessfull:()=>cy.get('[]'),
        txtEmailUpadated:()=>cy.get('[data-cy="app.components.EmailChange.email_change_success_title"]'),
        txtChangeEmailAddress:()=>cy.get('[data-cy="app.components.EmailChange.email_change_success_description"]'),
        btnOkEmailUpadate:()=>cy.get('[data-cy="app.components.Common.ok_btn_uc"]'),


        //Email sent successfullly page
        imgSuccessfull:()=>cy.get('[]'),
        txtUpadateDeclaration:()=>cy.get('[data-cy="app.components.CreditScore.csrDeclaration"]'),
        txtEmailSentMessage:()=>cy.get('[data-cy="app.components.CreditScore.ks_email_sent_desc"]'),
        txtMailId:()=>cy.get('[data-cy="bInfoDesc2"]'),
        btnOK:()=>cy.get('[data-cy="app.components.Common.ok_btn_uc"]')
    }

    emailUpadatedStatus(text){
        this.elements.txtEmailUpadated().should('have.text',text)
    }
    clickOkEmailUpadateButton(){
    this.elements.btnOkEmailUpadate().click()
    }
    verifyupadateDeclarationText(text){
        this.elements.txtUpadateDeclaration().should('have.text',text)
    }
    clickOKButton(){
        this.elements.btnOK().click()
    }

   

}
export const emailUpdateStatusPage=new EmailUpdateStatusPage;