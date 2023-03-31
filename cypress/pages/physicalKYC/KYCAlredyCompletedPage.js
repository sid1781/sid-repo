/// <reference types = "cypress" />

export class KYCAlredyCompletedPage{

    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements ={
        lblBackButton:()=>cy.get('[data-cy="goBackBtn"]'),
        imgKYCCompleted:()=>cy.get('[]'),
        pageTittile:()=>cy.get('[data-cy="bInfoTitle"]'),
        txtInfoKYCAlreadyCompleted:()=>cy.get('[data-cy="bInfoDesc"]'),
        btnOk:()=>cy.get('[data-cy="dataCyBtnTxt"]'),

    }
    clickBackButton()
    {
        this.elements.lblBackButton().click()
    }
    verifyPageTittle(){
        this.elements.pageTittile().should('be.visible')
    }
    verifyInfoKYCAlreadyCompleted(){
        this.elements.txtInfoKYCAlreadyCompleted().should('be.visible')
    }
    clickOkButton(){
        this.elements.btnOk().click()
    }

}
export const kycAlredyCompletedPage=new KYCAlredyCompletedPage;