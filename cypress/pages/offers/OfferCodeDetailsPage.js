/// <reference types = "cypress" />

export class OfferCodeDetailsPage {

    details = {
        zeplin: () => 'https://zpl.io/b6mMEDK',
        overflow: () => '',//TODO: overFlow Link
    }

    elements ={   
        lblUseCode : () => cy.get('[]'),
        iconScissor : () => cy.get() ,
        lblCode : () => cy.get('[]'),
        iconCopy : () => cy.get('[]'),
        lblCopy : () => cy.get('[]'),
        iconWhatsInside : () => cy.get('[]'),
        lblWhatsInside : () => cy.get('[]'),
        subTxtWhatsInside : () => cy.get('[]'),
        iconExpiry : () => cy.get('[]'),
        lblExpiry : () => cy.get('[]'),
        valExpiry : () => cy.get('[]'),
        btnVisitOfferProvider : () => cy.get('[]'),    
    }

}

export const offerCodeDetailsPage = new OfferCodeDetailsPage