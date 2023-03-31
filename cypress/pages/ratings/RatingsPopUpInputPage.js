/// <reference types = "cypress" />

export class RatingsPopUpInputPage {

    details = {
        zeplin : () => 'https://zpl.io/29doorB',
        zeplinFeedbackInput : () => 'https://zpl.io/VqQKKDN',
        overflow : () => '', // TODO: overFLow Link
    }

    elements ={
        pageTitle: () => cy.get('[]'),
        iconClose: () => cy.get('[]'),
        txtFeedback: () => cy.get('[]'),
        iconRatingStar: () => cy.get('[]'),
        inpFeedback: () => cy.get('[]'),
        inpRatingStarComment: () => cy.get('[]'),   
        btnSkip: () => cy.get('[]'),   
        btnNotNow: () => cy.get('[]'),
        btnSubmit: () => cy.get('[]')
    }
}

export const ratingsPopUpInputPage = new RatingsPopUpInputPage