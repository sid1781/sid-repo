// <reference types = "cypress" />

export class SyncShoppingVerifyWorkEmail {

    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        lblBack:()=>cy.get(['']),
        pageTitle: () => cy.get('[]'),
        iconHelp: () => cy.get('[]'),
        txtEnterWorkEmail:()=>cy.get(['']),
        iconEmail:()=>cy.get(['']),
        inpWorkEmail:()=>cy.get('[data-cy="app.components.ProcessingFeeReduction.flipkart_user_id"]'),
        btnSendOTP:()=>cy.get(['']),
    }
    EnterEnterWorkEmail(Email){
        this.elements.inpWorkEmail().type(Email)
    }
    clickSendOTPbtn(){
        this.elements.btnSendOTP().click()
    }
}
export const syncShoppingVerifyWorkEmail=new SyncShoppingVerifyWorkEmail