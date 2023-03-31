/// <reference types = "cypress" />

export class AddressProofPage {

    details = {
        zeplin: () => 'https://zpl.io/2jymAX4',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=e1a89290',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.Bdocs.doc_up_opt_title"]').first(),
        lblAadhaar: () => cy.get('[data-cy="item_undefined"]'),
    }

    verifyPageTitle(EmailAddress) {
        this.elements.pageTitle().should('have.text', EmailAddress)
    }

    clickAadhaarLabel() {
        this.elements.lblAadhaar().click()
    }

    
}

export const addressProofPage = new AddressProofPage()