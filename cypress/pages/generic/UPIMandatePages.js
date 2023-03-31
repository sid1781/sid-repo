/// <reference types = "cypress" />

export class UPIMandatePage {

    details = {
        zeplin: () => 'https://zpl.io/YYNKrmp',
        overflow: () => 'https://overflow.io/s/FLHDF787/?node=672b5af0',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        txtStartDate: () => cy.get('[]'),
        valStartDate: () => cy.get('[]'),
        txtFrequency: () => cy.get('[]'),
        valFrequency: () => cy.get('[]'),
        txtAmount: () => cy.get('[]'),
        iconRupees: () => cy.get('[]'),
        valAmount: () => cy.get('[]'),
        iconInfo: () => cy.get('[]'),
        txtAutodebitOneRupee: () => cy.get('[]'),
        lblUPIID: () => cy.get('[]'),
        inputUPIID: () => cy.get('[]'),
        txtEnterUPIID: () => cy.get('[]'),
        btnVerify: () => cy.get('[]'),
        iconTickMark: () => cy.get('[]'),
        btnContinue: () => cy.get('[]'),        
        lblUPIApp: () => cy.get('[]'),
        btnViewAllUPIApps: () => cy.get('[]') 

    }

}

export const UPIMandatePage = new UPIMandatePage