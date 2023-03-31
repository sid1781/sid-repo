/// <reference types = "cypress" />

export class LenderDetailsPage {

    details = {
        zeplin: () => 'https://zpl.io/bAglxZp',
        overflow: () => '',//TODO: oferFlow Link
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="lenderDetails"]'),
        iconClose : () => cy.get('[]'),
        lblservicedByPartnerBank: () => cy.get('[data-cy="app.components.RepaymentScreen.loan_serviced"]'),
        subTxtClickOnPartnerToViewGrievancePolicy: () => cy.get('[data-cy="app.components.RepaymentScreen.view_grp"]'),
        lnkLenderName: () => cy.get('[data-cy="kbPvtLtd"]'),
        btnViewGrievancePolicy: () => cy.get('[data-cy="app.components.RepaymentScreen.grievance_policy"]'),
        btnOk: () => cy.get('[]'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyCloseIcon(icon) {
        this.elements.iconClose().should('have.text', icon)
    }

    clickCloseIcon() {
        this.elements.iconClose().click()
    }

    verifyServicedByPartnerBanklabel(partnerbank) {
        this.elements.lblservicedByPartnerBank().should('have.text', partnerbank)
    }

    verifyClickOnPartnerToViewGrievancePolicySubText(subtext) {
        this.elements.subTxtClickOnPartnerToViewGrievancePolicy().should('have.text', subtext)
    }
    
    verifyLenderNameLink(link) {
        this.elements.lnkLenderName().should('have.text', link)
    }

    clickLenderNameLink() {
        this.elements.lnkLenderName().click()
    }
    
    verifyViewGrievancePolicyButton(grievance) {
        this.elements.btnViewGrievancePolicy().should('have.text', grievance)
    }

    clickViewGrievancePolicyButton() {
        this.elements.btnViewGrievancePolicy().click()
    }
    
    verifyOkButton(ok) {
        this.elements.btnOk().should('have.text', ok)
    }
 
    clickOkButton() {
        this.elements.btnOk().click()
    }
}

export const lenderDetailsPage = new LenderDetailsPage()