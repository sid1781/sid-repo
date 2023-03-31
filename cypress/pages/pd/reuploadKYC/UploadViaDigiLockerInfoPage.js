
/// <reference types = "cypress" />

export class UploadViaDigiLockerInfoPage {

    details = {
        zeplin : () => '', // TODO: Zeplin Link
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=da2950e8',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        imgDigilocker: () => cy.get('[]'),
        infoSubText: () => cy.get(),
        SubTextOfSteps1: () => cy.get(),
        SubTextOfSteps2: () => cy.get(),
        SubTextOfSteps3: () => cy.get(),
        lnkSignupNow: () => cy.get('[]'),
        txtCheckBox: () => cy.get('[]'),
        btnSignInDigilocker: () => cy.get('[]'),
    }

}

export const uploadViaDigiLockerInfoPage = new UploadViaDigiLockerInfoPage