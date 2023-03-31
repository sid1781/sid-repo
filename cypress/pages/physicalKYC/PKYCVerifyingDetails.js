/// <reference types = "cypress" />



export class PKYCVerifyingDetails{
    
    details = {
        zeplin: () => '',
        overflow: () => '',
    }
elements={

    lblBackButton:()=>cy.get('[data-cy="goBackBtn"]'),
    imgRefresh:()=>cy.get('[]'),
    pageTittle:()=>cy.get('[data-cy="app.components.extraDetails.verify_your_details"]'),
    subtxtVerifyingDetails:()=>cy.get('[data-cy="bInfoDesc"]'),
    btnRefresh:()=>cy.get('[data-cy="app.components.extraDetails.refresh"]'),

}
clickBackButton(){
    this.elements.lblBackButton().click()
}
verifyImage(){
    this.elements.imgRefresh().should('be.visible')
}
verifyPageTittle(){
    this.elements.pageTittle().should('be.visible')
}
verifyVerifyDetailsSubtext(){
    this.elements.subtxtVerifyingDetails().should('be.visible')
}
clickRefreshButton(){
    this.elements.btnRefresh().click()
}
}
export const pKYCVerifyingDetails=new PKYCVerifyingDetails;
