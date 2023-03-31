
/// <reference types = "cypress" />

export class MobileTrustScoreFailedPage {

    details = {
        zeplin: () => 'https://zpl.io/Vqr5p5Y',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        imgMobileAuthenticationFailed: () => cy.get('[]'),
        lblMobileAuthenticationFailed: () => cy.get('[]'),
        infoSubText: () => cy.get(),
        btnOK: () => cy.get('[]'),
    }

}

export const mobileTrustScoreFailedPage = new MobileTrustScoreFailedPage