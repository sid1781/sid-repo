/// <reference types = "cypress" />

export class VerifyCommunicationAddressSteps {

    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        lblBack: () => cy.get('[]'),
        iconHelp: () => cy.get('[]'),
        imgVerifyCommunication: () => cy.get('[]'),
        txtVerifyCommunication: () => cy.get('[]'),
        sutxtVerifyCommunicati9on: () => cy.get('[]'),
        txtSteps: () => cy.get('[]'),
        subTxtSteps: () => cy.get('[]'),
        btnContinue: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.off_info_con"]'),
    }
    clickContinuebtn(){
        this.elements.btnContinue().click()
    }
}
export const verifyCommunicationAddressSteps=new VerifyCommunicationAddressSteps;
