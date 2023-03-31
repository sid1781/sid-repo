/// <reference types = "cypress" />

export class  PhysicalKYCIntroPage{

    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements ={
        lblBackButton:()=>cy.get('[]'),
        pageTittle:()=>cy.contains('How to perform Physical KYC?'),
        subtxtPhysicalKYC1:()=>cy.get('[]'),
        subtxtPhysicalKYC2:()=>cy.get('[]'),
        subtxtPhysicalKYC3:()=>cy.get('[]'),
        subtxtPhysicalKYC4:()=>cy.get('[]'),
        subtxtPhysicalKYC5:()=>cy.get('[]'),
        btnContinue:()=>cy.contains('Continue'),
       //btnContinue:()=>cy.get('[class="skins__StyledFixedBtnCon-sc-1vwqwtq-4 csMUvi"]')



    }
    clickContinue(){
        this.elements.btnContinue().click()
    }
    verifyPageTittle(){
        this.elements.pageTittle().should('be.visible')
    }
}
export const physicalKYCIntroPage=new PhysicalKYCIntroPage;