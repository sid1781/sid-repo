/// <reference types = "cypress" />

export class AutoDebitViaOptionsCustomerInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/jZoeJrq',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        imgOfPageTitle: () => cy.get('[]'),
        lblCustomerInformation: () => cy.get('[]'),
        txtName: () => cy.get('[]'),
        lblCorporateInformation: () => cy.get('[]'),
        txtCorporateName: () => cy.get('[]'),
        txtCorporateId: () => cy.get('[]'),
        chkBoxOfHerebyAuthorize: () => cy.get('[type="checkbox"]'),
        btnProceed: () => cy.get('[type="btn"]').eq(0),
        btnCancel: () => cy.get('[]')
    }
    clickHerebyAuthorizeCheckBox(){
        this.elements.chkBoxOfHerebyAuthorize().click()
    }
     clickProceedbtn(){
        this.elements.btnProceed().click()
     }


}

export const autoDebitViaOptionsCustomerInfoPage = new AutoDebitViaOptionsCustomerInfoPage

