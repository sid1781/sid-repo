
/// <reference types = "cypress" />

export class AddressProofPage {

    details = {
        zeplin: () => 'VD Not found',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=da2950e8',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        infoSubText: () => cy.get(),
        lblAadhaar: () => cy.get(),
        lblDrivingLicense: () => cy.get(),
        lnkAadhaar: () => cy.get(),
        lnkDrivingLicense: () => cy.get(),
    }

}

export const addressProofPage = new AddressProofPage