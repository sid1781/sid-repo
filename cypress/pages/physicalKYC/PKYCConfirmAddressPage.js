/// <reference types = "cypress" />
export class PKYCConfirmAddressPage{
    
    details = {
        zeplin: () => '',
        overflow: () => '',
    }
elements={
       lblBackButton:()=>cy.get('[data-cy="goBackBtn"]'),
       pageTittle:()=>cy.get('[data-cy="BTxtInheritedTitle"]'),
       iconHelp:()=>cy.get('[data-cy="helpImg"]'),
       txtMobileNumber:()=>cy.get('[data-cy="label_app.components.Common.mobile_number"]'),
       iconMobile:()=>cy.get('[]'),
       valMobileNumber:()=>cy.get('[data-cy="input_app.components.Common.mobile_number"]'),
       txtSelectAddress:()=>cy.get('[]'),
       iconHome:()=>cy.get('[]'),
       btnPermanent:()=>cy.get('[data-cy="permanent"]'),
       btnOthers:()=>cy.get('[data-cy="select_1"]'),
       //permeanent address
       txtDeliveryAddress:()=>cy.get('[]'),
       iconHomeDeliviryAddress:()=>cy.get('[]'),
       txtDeliveryAddress:()=>cy.get('[]'),

       //Others details
       txtPinCode:()=>cy.get('[]'),
       iconPincode:()=>cy.get('[]'),
       inpPincode:()=>cy.get('[data-cy="input_app.components.Common.pincode_label"]'),
       txtAddressLine1:()=>cy.get('[]'),
       iconAddressLine1:()=>cy.get('[]'),
       inpAddressLIne1:()=>cy.get('[data-cy="input_undefined"]').eq(0),
       txtAddressLine2:()=>cy.get('[]'),
       iconAddressLine2:()=>cy.get('[]'),
       inpAddressLIne2:()=>cy.get('[data-cy="input_undefined"]').eq(1),
       txtCity:()=>cy.get('[]'),
       iconCity:()=>cy.get('[]'),
       inpCity:()=>cy.get('[data-cy="input_undefined"]').eq(2),
       txtTypeOfAddress:()=>cy.get('[]'),
       iconTypeOfAddress:()=>cy.get('[]'),
       slectOffice:()=>cy.get('[data-cy="text_undefined"]'),//.children('have.text','Office'),
       
       btnSubmitDetails:()=>cy.get("button"),
       btnConfirmAddress:()=>cy.contains('Submit details'),


}
      clickBackButton(){
      this.elements.lblBackButton().click()
       }
       verifyPageTittle(){
        this.elements.pageTittle().should('be.visible')
       }
       clickHelpICon(){
        this.elements.iconHelp().click()
       }
       verifyMobileNumberText(){
        this.elements.txtMobileNumber().should('be.visible')
       }
       verifyMobileNumber(){
        this.elements.valMobileNumber().should('be.visible')
       }
       verifySelectPPKYCText(){
        this.elements.verifySelectPPKYCText().should('be.visible')
        }
        clickPermanentAddress(){
            this.elements.btnPermanent().click()
        }
        clickOthers(){
            this.elements.btnOthers().click()
        }
        clickSubmitDetails(){
            this.elements.btnSubmitDetails().click()
        }
         verifyPermanentAddressButton(){
            this.elements.btnPermanent().should('be.visible')
         }
         verifyOthersButton(){
            this.elements.btnOthers().should('be.visible')
         }
        //other details
        inputPincode(pincode){
            this.elements.inpPincode().type(pincode)
        }
        inputAddressLine1(line1){
            this.elements.inpAddressLIne1().type(line1)
        }
        inputAddressLine2(line2){
            this.elements.inpAddressLIne2().type(line2)
        }
        inputCity(city){
            this.elements.inpCity().type(city)
        }
        selectOffice(office){
            this.elements.slectOffice().type(office)
        }
        clickConfirmAddress(){
            this.elements.btnConfirmAddress().click()
        }
}
export const pKYCConfirmAddressPage=new PKYCConfirmAddressPage;