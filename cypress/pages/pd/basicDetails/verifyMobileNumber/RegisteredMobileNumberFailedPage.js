
/// <reference types = "cypress" />

export class RegisteredMobileNumberFailedPage {

    details = {
        zeplin: () => 'no VD found',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        imgUnableToSendOTP: () => cy.get('[]'),
        lblUnableToSendOTP: () => cy.get('[]'),
        infoSubText: () => cy.get(),
        btnOK: () => cy.get('[]'),
    }

}

export const registeredMobileNumberFailedPage = new RegisteredMobileNumberFailedPage