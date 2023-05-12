/// <reference types = "cypress" />

export class ProfileReverificationPage {

    details = {
        zeplin: () => '', //Need to Add
        overflow: () => '',//Need to Add
    }

    elements = {
        lblBack:()=>cy.get('[]'),
        txtPageTitle:()=>cy.get('[data-cy="BTxtInheritedTitle"]'),
        iconHelp:()=>cy.get('[]'),
        iconCreditLimit:()=>cy.get('[]'),
        txtCreditlimit:()=>cy.get('[]'),
        valCreditlimit:()=>cy.get('[]'),
        subtxtCreditlimit:()=>cy.get('[]'),
        txtSelectAnyStep:()=>cy.get('[]'),
        lblVerifyMobileTrustScore:()=>cy.contains('p','Verify Mobile Trust Score'),
        lblVerifyHouseholdIncome:()=>cy.contains('p','Verify Household Income'),
        lblSalarySlip:()=>cy.contains('p','Salary Slip Upload'),
        btnSkipForLater:()=>cy.contains('button','Skip for Later'),
        lblMobileRigiterNumber:()=>cy.contains('Verify Registered Mobile Number'),
        btnContinue:()=>cy.contains('button','Continue'),
        lblNoVKYC: () => cy.contains('span', '​Video Verification'),
        lblNoFasterProcessing: () => cy.contains('span', 'Faster processing'),
        lblSetupAutoDebit: () => cy.contains('p','Setup Auto Debit'),
        lblMobileTrustScore: () => cy.contains('p','Verify Mobile Trust Score'),
    }

    verifyPageTitle(){
        this.elements.txtPageTitle().should('be.visible')
    }
    verifyMobileTrustScoreLabel(){
        this.elements.lblVerifyMobileTrustScore().should('be.visible')
    }

    verifyVerifyIncome(){
        this.elements.lblVerifyHouseholdIncome().should('not.be.disabled')
    }

    clickVerifyHouseHoldIncomeLabel() {
        this.elements.lblVerifyHouseholdIncome().click()
    }
    verifySalarySlipUpload(){
        this.elements.lblSalarySlip().should('not.be.disabled')
    }
    VerifyMobileRigiterNumber(){
        this.elements.lblMobileRigiterNumber().should('be.visible')
    }
    clickMobileRigiterNumber(){
        this.elements.lblMobileRigiterNumber().click({force:true})
    }
    clickContinueButton(){
        this.elements.btnContinue().click()
    }    
    verifySkipForLaterButton(btnSkipForLater){
        this.elements.btnSkipForLater().should('have.text',btnSkipForLater)
    }
    clickSkipForLaterButton(){
        this.elements.btnSkipForLater().click()
    }
    verifyHouseHoldIncomeLabel(text) {
        this.elements.lblVerifyHouseholdIncome().should('have.text', text)
    }
    
    verifyNoVKYCLabel() {
        this.elements.lblNoVKYC().should('not.exist')
    }

    verifyNoFasterProcessingLabel() {
        this.elements.lblNoFasterProcessing().should('not.exist')
    }

    verifyAutoDebitSetupLabel(autodebit) {
        this.elements.lblSetupAutoDebit().should('have.text', autodebit)
    }

    clickAutoDebitSetupLabel() {
        this.elements.lblSetupAutoDebit().click()
    }

    clickMobileTrustScore(){
        this.elements.lblMobileTrustScore().click()
    }
}
export const profileReverificationPage =new ProfileReverificationPage()