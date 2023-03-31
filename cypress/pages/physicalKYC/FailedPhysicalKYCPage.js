/// <reference types = "cypress" />

export class FailedPhysicalKYCPage{

    details = {
        zeplin: () => '',
        overflow: () => '',
    }
    elements={
      imgFailedPhysicalKY:()=>cy.get('[]'),
      txtSorry:()=>cy.get('[data-cy="bInfoTitle"]'),
      subtxtFailedPhysicalKYC:()=>cy.get('[]'),
      btnOk:()=>cy.get('[]'),
    }
    verifySorryText(){
        this.elements.txtSorry().should('be.visible')
    }
    verifySubtext(){
        this.elements.subtxtFailedPhysicalKYC().should('be.visible')
    }
    clickOkButton(){

        this.elements.btnOk().click({force:true})
    }
}
export const failedPhysicalKYCPage=new FailedPhysicalKYCPage;
