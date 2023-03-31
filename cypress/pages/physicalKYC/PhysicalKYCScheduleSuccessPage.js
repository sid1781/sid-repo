/// <reference types = "cypress" />

import { eq } from "lodash"

export class PhysicalKYCScheduleSuccessPage{
    
    details = {
        zeplin: () => '',
        overflow: () => '',
    }
elements={

    lblBack:()=>cy.get('[]'),
    iconHelp:()=>cy.get('[]'),
    imgSuccess:()=>cy.get('[]'),
    PageTittle:()=>cy.contains('Physical KYC appointment scheduled successfully '),
    txtDateAndTime:()=>cy.get('[]'),
    txtAddress:()=>cy.get('[]'),
    txtPorcess:()=>cy.get('[]'),
    subtxtPKYC:()=>cy.get('[]'),
    btnCancelAppoinment:()=>cy.get('button').should('contain','Cancel Appointment').eq(0),
    btnOK:()=>cy.get('span').contains('have.text','OK'),
}

      clickBackButton(){
        this.elements.lblBack().click()
      }
      verifyPageTittle(){
        this.elements.PageTittle().should('be.visible')
      }
      clickCancelButton(){
        this.elements.btnCancelAppoinment().click({force:true})
      }
      verifyCancelButton(){
        this.elements.btnCancelAppoinment().should('be.visible')
      }
      clickOKButton(){
        this.elements.btnOK().click()
      }
}
export const physicalKYCScheduleSuccessPage=new PhysicalKYCScheduleSuccessPage;