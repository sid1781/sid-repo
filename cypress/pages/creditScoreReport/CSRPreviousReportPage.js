///<reference types="cypress" />

export class CSRPreviousReportPage{

    details = {
        zeplin : () => 'https://zpl.io/Am0OEK8',
        overflow : () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2',
    }

    elements = {
      pageTitle : () => cy.get('[]'),
      iconNoPreviousReport : () => cy.get('[]'),
      lblNoPreviousReport : () => cy.get('[]'),
      txtGetYourLatestCreditReport : () => cy.get('[]'),
      btnBack : () => cy.get('[]'),
      btnGetLatestCreditReport : () => cy.get('[]'),
    }
    verifyPageTitle(pagetitle){
        this.elements.pageTitle().should('have.text', pagetitle)    
    }
    verifyNoPreviousReportIcon(){
        this.elements.iconNoPreviousReport().should('be.visible')
    }
    verifyNoPreviousReportLabel(){
        this.elements.lblNoPreviousReport().should('be.visible')
    }
    verifyGetYourLatestCreditReportText(){
        this.elements.txtGetYourLatestCreditReport().should('be.visible')
    }
    clickBackButton(){
        this.elements.btnBack().click()
    }
    clickGetLatestCreditReportButton(){
        this.elements.btnGetLatestCreditReport().should('be.visible')
    }
}

export const  csrPreviousReportPage = new CSRPreviousReportPage