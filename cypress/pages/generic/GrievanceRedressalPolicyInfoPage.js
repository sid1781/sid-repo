/// <reference types = "cypress" />

export class GrievanceRedressalPolicyInfoPage {

    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'There is No VD Screen For This Page',
    }

    elements = {
        
        pageTitle : () => cy.get('[data-cy="app.components.Store.grp_text"]'),
        infoGrievancePolicy : () => cy.get('[]'),
        lblPurpose : () => cy.contains('p','Purpose'),
        infoPurpose : () => cy.get('[]'),
        lblGrievancePrinciples : () => cy.get('..'),
        txtGrievancePrinciple1 : () => cy.get('..'),
        txtGrievancePrinciple2 : () => cy.get('..'),  
        txtGrievancePrinciple3 : () => cy.get('..'),
        lblInternalCustomerComplaints : () => cy.get('..'),
        infopara1InternalCustomerComplaints : () => cy.get('..'),
        infopara2InternalCustomerComplaints : () => cy.get('..'),
       
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().eq(0).should('have.text', title)
    }

    verifyPurposeLabel(label) {
        this.elements.lblPurpose().should('have.text', label)
    }

}

export const grievanceRedressalPolicyInfoPage = new GrievanceRedressalPolicyInfoPage