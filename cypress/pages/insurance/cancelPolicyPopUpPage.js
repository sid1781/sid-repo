/// <reference types = "cypress" />

export class CancelPolicyPopUpPage {

    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }

    elements ={
    
        pageTitle : () => cy.getIframeBody().contains('p','Are you sure you want to cancel the policy'),
        lblPolicyIssued : () => cy.getIframeBody().contains('p','Issued'),
        btnYesCancelPolicy : () => cy.getIframeBody().contains('button','Yes, Cancel'),
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

    clickYesCancelPolicyButton() {
        this.elements.btnYesCancelPolicy().click()
    }

}

export const cancelPolicyPopUpPage = new CancelPolicyPopUpPage