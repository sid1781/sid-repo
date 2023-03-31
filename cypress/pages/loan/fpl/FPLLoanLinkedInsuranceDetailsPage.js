/// <reference types = "cypress" />

export class FPLLoanLinkedInsuranceDetailsPage {

    details = {
        zeplin: () => '',//TODO: Zeplin Link
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }

    elements ={   
        pageTitle : () => cy.get('[]'),
        lblPolicy : () => cy.get('[]'),
        txtPolicy : () => cy.get('[]'),
        lblInsurer: () => cy.get('[]'),
        txtInsurer : () => cy.get('[]'),
        iconPolicyPeriod : () => cy.get('[]'),
        lblPolicyPeriod : () => cy.get('[]'),
        valPolicyPeriod : () => cy.get('[]'),
        iconCoverageUpto : () => cy.get('[]'),
        lblCoverageUpto : () => cy.get('[]'),
        valCoverageUpto : () => cy.get('[]'),
        iconOneTimePremium : () => cy.get('[]'),
        lblOneTimePremium : () => cy.get('[]'),
        valOneTimePremium : () => cy.get('[]'),
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
        btnOk : () => cy.get('[]'),
    }
    verifyInsurancePolicyDetailTitle(insuranceTitle) {
        this.elements.iframeInsuance().then($iframe => {
            const iframeElement = $iframe.contents().find('body')
            let element= cy.wrap(iframeElement)
            element.contains('p', insuranceTitle).should('exist')
        })
    }
}

export const fPLLoanLinkedInsuranceDetailsPage = new FPLLoanLinkedInsuranceDetailsPage