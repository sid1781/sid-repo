/// <reference types = "cypress" />

export class GoldBasicDetailsPage{
    elements={
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblNameAsPerPAN: () => cy.get('[data-cy="label_app.components.DigitalGold.name_placeholder"]'),
        iconNameAsPerPAN: () => cy.get('[]'),
        inpNameAsPerPAN: () => cy.get('[data-cy="input_app.components.DigitalGold.name_placeholder"]'),
        lblEmailID: () => cy.get('[data-cy="label_app.components.DigitalGold.user_email_placeholder"]'),
        iconEmailID: () => cy.get('[]'),
        inpEmailID: () => cy.get('[data-cy="input_app.components.DigitalGold.user_email_placeholder"]'),
        lblPincode: () => cy.get('[data-cy="label_app.components.DigitalGold.pincode_placeholder"]'),
        iconPincode: () => cy.get('[]'),
        inpPincode: () => cy.get('[data-cy="input_app.components.DigitalGold.pincode_placeholder"]'),
        btnSubmitDetails: () => cy.get('[data-cy="app.components.DigitalGold.submit_address_details"]'),
        lblSubmitDetails: () => cy.get('[data-cy="app.components.DigitalGold.submit_address_details"]'),
    }
    verifyPageTitle(title){
       this.elements.pageTitle().should('have.text',title)
    }
    verifyNameAsPerPANLabel(text){
       this.elements.lblNameAsPerPAN().should('have.text',text)
    }
    verifyNameAsPerPANIcon(){
       this.elements.iconNameAsPerPAN().should('be.visible')
    }
   //  verifyNameAsPerPANInput(){
   //     this.elements.inpNameAsPerPAN().should('be.visible')
   //  } 
    verifyNameAsPerPANInput(){
       this.elements.inpNameAsPerPAN().type('Roja')
    }
    verifyEmailIDLabel(text){
       this.elements.lblEmailID().should('have.text',text)
    }
    verifyEmailIDIcon(){
       this.elements.iconEmailID().should('be.visible')
    }
   //  verifyEmailIDInput(){
   //     this.elements.inpEmailID().should('be.visible')
   //  }
    verifyEmailIDInput(){
       this.elements.inpEmailID().type('rojagowd0916@gmail.com')
    }
    verifyPincodeLabel(text){
       this.elements.lblPincode().should('have.text',text)
    }
    verifyPincodeIcon(){
       this.elements.iconPincode().should('be.visible')
    }
   //  verifyPincodeInput(){
   //     this.elements.inpPincode().should('be.visible')
   //  }
    verifyPincodeInput(){
       this.elements.inpPincode().type('515301')
    }
    clickSubmitDetailsButton(){
       this.elements.btnSubmitDetails().click({timeout:3000})
    }
   
}

export const goldBasicDetailsPage=new GoldBasicDetailsPage()