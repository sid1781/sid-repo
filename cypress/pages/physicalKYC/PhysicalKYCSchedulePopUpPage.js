/// <reference types = "cypress" />
export class PhysicalKYCSchedulePopUpPage{
    
    details = {
        zeplin: () => '',
        overflow: () => '',
    }
elements={
      
    pageTtile:()=>cy.get('span').should('contain','Are you sure you want to go cancel appointment?'),
    iconCancel:()=>cy.get('[]'),
    subtxtCancelDecription:()=>cy.get('[]'),
    btnYesAndCancel:()=>cy.get('button').should('contain','Yes, Cancel').eq(2),
    btnNo:()=>cy.get('span').should('contain','No'),


}
verifyPageTittle(){
    this.elements.pageTtile().should('be.visible')
}
clickCancelIcon(){
    this.elements.iconCancel().click()
}
verifyCancelDecription(){
    this.elements.subtxtCancelDecription().should('be.visible')
}
clickYesAndCancelButton(){
    this.elements.btnYesAndCancel().click()
}
clickNoButton(){
    this.elements.btnNo().click()
}
}
export const physicalKYCSchedulePopUpPage=new PhysicalKYCSchedulePopUpPage;
