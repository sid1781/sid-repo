/// <reference types = "cypress" />

export class InsuranceDetailsPage {
    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/6094c67ef4365d37ecc44d08',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }

    elements ={
    
        pageTitle : () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblPolicy : () => cy.get('[]'),
        txtPolicy : () => cy.get('[]'),
        lblInsurer: () => cy.get('[]'),
        txtInsurer : () => cy.get('[data-cy="insurerName"]'),
        iconPolicyPeriod : () => cy.get('[]'),
        lblPolicyPeriod : () => cy.get('[data-cy="app.components.Insurance.policyPeriod_txt"]'),
        valPolicyPeriod : () => cy.get('[]'),
        iconCoverageUpto : () => cy.get('[]'),
        lblCoverageUpto : () => cy.get('[data-cy="app.components.Insurance.coverage_txt"]'),
        valCoverageUpto : () => cy.get('[data-cy="apiData_1"]'),
        iconOneTimePremium : () => cy.get('[]'),
        lblOneTimePremium : () => cy.get('[data-cy="app.components.Insurance.onetime_premium"]'),
        valOneTimePremium : () => cy.get('[data-cy="apiData_2"]'),
        lblSteps : () => cy.get('[]'),
        subTxtInfo1 : () => cy.get('[]'),
        subTxtInfo2 : () => cy.get('[]'),
        subTxtInfo3 : () => cy.get('[]'),
        lblWhatsCovered : () => cy.get('[]'),
        iconAccidentalDeath : () => cy.get('[]'),
        lblAccidentalDeath : () => cy.get('[]'),
        txtAccidentalDeath : () => cy.get('[]'),
        iconEMIProtection : () => cy.get('[]'),
        lblEMIProtection : () => cy.get('[]'),
        txtEMIProtection : () => cy.get('[]'),
        iconCriticalIllness : () => cy.get('[]'),
        lblCriticalIllness : () => cy.get('[]'),
        txtCriticalIllness : () => cy.get('[]'),
        txtViewAll : () => cy.get('[]'),
        lnkTermsAndCondtions : () => cy.get('[]'),
        btnOk : () => cy.get('[data-cy="app.components.Insurance.okBtn"]'),
        
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyPolicyPeriodLabel(title) {
        this.elements.lblPolicyPeriod().should('have.text', title)
    }

    verifyCoverageUptoLabel(title) {
        this.elements.lblCoverageUpto().should('have.text', title)
    }

    verifyOneTimePremiumLabel(title) {
        this.elements.lblOneTimePremium().should('have.text', title)
    }

    verifyInsuranceCoverageValue(value) {
        this.elements.valCoverageUpto().should('have.text', value)
    }

    verifyOneTimePremiumValue(value) {
        this.elements.valOneTimePremium().should('have.text', value)
    }

    clickOkBtn() {
        this.elements.btnOk().should('be.visible').click()
    }

    verifyInsurerText(value) {
        this.elements.txtInsurer().should('have.text', value)
    }

    
}
export const insuranceDetailsPage = new InsuranceDetailsPage