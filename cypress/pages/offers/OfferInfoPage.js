/// <reference types = "cypress" />

export class OfferInfoPage {

    details = {
        zeplin: () => 'https://zpl.io/p1QvRZy',
        overflow: () => '',//TODO: overFlow Link
    }

    elements ={   
        imgOfferProvider : () => cy.get('[]'),
        lblOfferProvider : () => cy.get('[]'),
        txtOfferProvider : () => cy.get('[]'),
        btnGetThis : () => cy.get('[data-cy="getThisText"]'),    
        btnDetails : () => cy.get('[data-cy="detailsText"]'),
    }
 
    verifyOfferProviderImage() {
        this.elements.imgOfferProvider()
    }

    verifyOfferProviderLabel(offers) {
        this.elements.lblOfferProvider().should('have.text', offers)
    }
    
    verifyOfferProviderSubText(subtext) {
        this.elements.txtOfferProvider().should('have.text', subtext)
    }

    verifyGetThisButton(getthis) {
        this.elements.btnGetThis().should('have.text', getthis)
    }

    clickGetThisButton() {
        this.elements.btnGetThis().click()
    }
   
    verifyDetailsButton(details) {
        this.elements.btnDetails().should('have.text', details)
    }

    clickDetailsButton() {
        this.elements.btnDetails().click()
    }
}

export const offerInfoPage = new OfferInfoPage()