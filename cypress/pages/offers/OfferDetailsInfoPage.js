/// <reference types = "cypress" />

export class OfferDetailsInfoPage {

    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/6205f669643f52b0804e55b8',
        overflow: () => '',//TODO: oferFlow Link
    }

    elements ={   
        pageTitle : () => cy.get('[]'),
        iconWhatsInside : () => cy.get('[]'),
        lblWhatsInside : () => cy.get('[]'),
        subTxtWhatsInside : () => cy.get('[]'),
        iconAbout : () => cy.get('[]'),
        lblAboutOfferProvider : () => cy.get('[]'),
        subTextAboutOfferProvider : () => cy.get('[]'),
        iconWebsite : () => cy.get('[]'),
        lblWebsite : () => cy.get('[]'),
        lnkWebsite : () => cy.get('[]'),    
        iconHowToRedeem : () => cy.get('[]'),
        lblHowToRedeem : () => cy.get('[]'),
        infoTxt1HowToRedeem : () => cy.get('[]'),
        infoTxt2HowToRedeem : () => cy.get('[]'),
        infoTxt3HowToRedeem : () => cy.get('[]'),
        infoTxt4HowToRedeem : () => cy.get('[]'),
        infoTxt5HowToRedeem : () => cy.get('[]'),
        iconTermsAndConditions : () => cy.get('[]'),
        lblTermsAndConditions : () => cy.get('[]'),
        infoTxt1TermsAndConditions : () => cy.get('[]'),
        infoTxt2TermsAndConditions : () => cy.get('[]'),
        infoTxt3TermsAndConditions : () => cy.get('[]'),
        infoTxt4TermsAndConditions : () => cy.get('[]'),
        infoTxt5TermsAndConditions : () => cy.get('[]'),
        infoTxt6TermsAndConditions : () => cy.get('[]'),
        iconVoucherExpiry : () => cy.get('[]'),
        lblVoucherExpiry : () => cy.get('[]'),
        valVoucherExpiry : () => cy.get('[]'),
    }

}

export const offerDetailsInfoPage = new OfferDetailsInfoPage
