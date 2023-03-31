/// <reference types = "cypress" />

export class VerifyWorkEmailInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/mDEzZJA',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        lblBack: () => cy.get('[data-cy="goBackBtn"]'),
        pageTitle: () => cy.get('[data-cy="app.components.extraDetails.offName_verify_work_email_address"]'),
        imgWorkEmail: () => cy.get('[]'),
        infoSubText: () => cy.get(),
        lblSteps: () => cy.get(),
        SubTextOfSteps1: () => cy.get(),
        SubTextOfSteps2: () => cy.get(),
        SubTextOfSteps3: () => cy.get(),
        txtAlertInfo: () => cy.get(),
        lblTermsAndCondition: () => cy.get('[]'),
        iconTermsAndCondition: () => cy.get('[]'),
        btnContinue: () => cy.get('[data-cy="app.components.extraDetails.off_info_con"]'),
    }
    verifyBackLabel(){
        this.elements.lblBack().should('be.visible')
    }
    clickBackLabel(){
        this.elements.lblBack().click()
    }
    verifyPageTitle(pagetitle){
        this.elements.pageTitle().should('have.text',pagetitle)
    }
    clickContinueButton(){
        this.elements.btnContinue().click()
    }

}

export const verifyWorkEmailInfoPage = new VerifyWorkEmailInfoPage()
