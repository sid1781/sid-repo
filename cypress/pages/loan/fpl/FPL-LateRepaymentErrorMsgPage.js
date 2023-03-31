/// <reference types = "cypress" />

export class FPLLateRepaymentErrorMsgPage {

    details = {
        zeplin: () => '',//TODO
        overflow: () => '',
    }

    elements ={
        iconNeedToWait : () => cy.get('[]'),
        txtNeedToWait : () => cy.get('[data-cy="app.components.BloanHome.wait_time_text"]'),
        lblDate : () => cy.get('[data-cy="notificationDate"]'),
        txtDelayRepaymentsInfo : () => cy.get('[data-cy="app.components.BloanHome.retry_text"]'),
        iconRepayOnTime : () => cy.get('[data-cy="img_app.components.BloanHome.replay_warning_text"]'),
        txtRepayOnTime : () => cy.get('[data-cy="label_app.components.BloanHome.replay_warning_text"]'),
        btnOk : () => cy.get('[data-cy="button"]'),
    }                         
    verifyNeedToWaitText(txt){
        this.elements.txtNeedToWait().should('have.text', txt)
    }
    verifyDateLabel(){
        this.elements.lblDate().should('be.visible')
    }
    verifyDelayRepaymentsInfoText(txt){
        this.elements.txtDelayRepaymentsInfo().should('have.text', txt)
    }
    verifyOKBtn(){
        this.elements.btnOk().should('be.visible')
    }

}

export const fplLateRepaymentErrorMsgPage = new FPLLateRepaymentErrorMsgPage()