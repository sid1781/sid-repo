///<reference types="cypress" />

export class CSRCreditEnquiriesPage{

    details = {
        zeplin : () => '',
        overflow : () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2',
    }

    elements = {
      pageTitle : () => cy.get('[]'),
      lblCreditEnquiries : () => cy.get('[]'),
      lblImpactStatus : () => cy.get('[]'),
      valLast30Days : () => cy.get('[]'),
      lblLast30Days : () => cy.get('[]'),
      valLast12Months : () => cy.get('[]'),
      lblLast12Months : () => cy.get('[]'),
      lblLast12MonthsEnquiries : () => cy.get('[]'),
      iconBank : () => cy.get('[]'),
      lblPartnerName : () => cy.get('[]'),
      lblLoans: () => cy.get('[]'),
      lblEnquiredOn : () => cy.get('[]'),
      iconNoEnquiries   : () => cy.get('[]'),
      txtNoEnquiries  : () => cy.get('[]'),
      btnBack : () => cy.get('[]'),
      
    }
    verifyPageTitle(pagetitle){
        this.elements.pageTitle().should('have.text', pagetitle)
    }
    verifyCreditEnquiriesLabel(){
        this.elements.lblCreditEnquiries().should('be.visible')
    }
    verifyImpactStatusLabel(){
        this.elements.lblImpactStatus().should('be.visible')
    }
    verifyLast30DaysValue(){
        this.elements.valLast30Days().should('be.visible')
    } 
    verifyLast30DaysLabel(){
        this.elements.lblLast30Days().should('be.visible')
    }
    verifyLast12MonthsValue(){
        this.elements.valLast12Months().should('be.visible')
    } 
    verifyLast12MonthsLabel(){
        this.elements.lblLast12Months().should('be.visible')
    }
    verifylast12MonthsEnquiriesLabel(){
        this.elements.lblLast12Months().should('be.visible')
    }
    verifyBankIcon(){
        this.elements.iconBank().should('be.visible')
    }
    verifyPartnerNameLabel(){
        this.elements.lblPartnerName().should('be.visible')
    }
    verifyLoansLabel(loansname){
        this.elements.lblLoans().should('have.text', loansname)
    }
    verifyEnquiredOnLabel(){
        this.elements.lblEnquiredOn().should('be.visible')
    }
    veirifynoEnquiriesIcon(){
        this.elements.iconNoEnquiries().should('be.visible')
    }
    verifyNoEnquiriesText(){
        this.elements.txtNoEnquiries().should('be.visible')
    } 
    clickBackButton(){
        this.elements.btnBack().click()
    }
}

export const  csrCreditEnquiriesPage = new CSRCreditEnquiriesPage