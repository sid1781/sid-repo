/// <reference types = "cypress" />

export class RatingsPopUpSuccessPage {

    details = {
        zeplin : () => 'https://zpl.io/a7p55XM',
        overflow : () => '', // TODO: overFLow Link
    }

    elements ={
        pageTitle: () => cy.get('[]'),
        iconClose: () => cy.get('[]'),
        txtRateUs: () => cy.get('[]'),
        iconRatedStar: () => cy.get('[]'),
        iconKreditbee: () => cy.get('[]'),
        txtGoingToPlaystore: () => cy.get('[]'),
        valTimerInSeconds: () => cy.get('[]'),
        txtTimerInSeconds: () => cy.get('[]')
    }

}

export const ratingsPopUpSuccessPage = new RatingsPopUpSuccessPage
