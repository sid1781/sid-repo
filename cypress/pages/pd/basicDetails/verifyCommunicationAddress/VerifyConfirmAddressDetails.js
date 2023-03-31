/// <reference types = "cypress" />

export class VerifyConfirmAddressDetails {

    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
          lblBack: () => cy.get('[]'),
          txtPageTittle: () => cy.get('[]'),
          iconHelp: () => cy.get('[]'),
          txtPErmanentAddress: () => cy.get('[]'),
          iconMap: () => cy.get('[]'),
          txtAddress: () => cy.get('[]'),
          txtCommunicationAddress: () => cy.get('[]'),
          lblView: () => cy.get('[]'),
          chkSameAddress: () => cy.get('[]'),
          txtSameAddress: () => cy.get('[]'),
          lblTypeOfResidence: () => cy.get('[id="react-select-2-placeholder"]'),
          icontypeAddress: () => cy.get('[]'),
          selectTypeOfAddress: () => cy.get('[id="react-select-2--value"]'),
          selectowned: () => cy.get('[id="react-select-2--option-1"]'),
          btncontinue: () => cy.get('[data-cy="continueBtn"]'),
          selectResidencePG: () => cy.get('[id="react-select-2-option-2"]'),
    }
    clickTypeOfAddress(){
        this.elements.selectTypeOfAddress().click()
    }
    selectTypeOfAddress(){
        this.elements.selectowned().click()
    }
    clickContinue(){
        this.elements.btncontinue().click()
    }
    selectTypeOfResidence(){
        this.elements.lblTypeOfResidence().click({force: true})
    }
    selectResidencePG(){
        this.elements.selectResidencePG().click({force: true})
    }
}

export const verifyConfirmAddressDetails =new VerifyConfirmAddressDetails