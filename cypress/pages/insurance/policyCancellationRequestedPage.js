/// <reference types = "cypress" />

export class PolicyCancellationRequestedPage {

    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }

    elements ={
    
        pageTitle : () => cy.getIframeBody().contains('h2','Cancellation Requested'),
        lblPolicyIssued : () => cy.getIframeBody().contains('p','Issued'),
        btnMyPolicies : () => cy.getIframeBody().contains('button','My Policies'),
        lnkCancelPolicy : () => cy.getIframeBody().contains('div','Cancel Policy'),

    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    }

    verifyPolicyIssuedLabel(title) {
        this.elements.lblPolicyIssued().should('contain.text', title)
    }

    verifyRaiseClaimButton(title) {
        this.elements.btnRaiseClaim().should('contain.text', title)
    }

    clickMyPoliciesButton() {
        this.elements.btnMyPolicies().click()
    }

}

export const policyCancellationRequestedPage = new PolicyCancellationRequestedPage