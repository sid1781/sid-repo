/// <reference types = "cypress" />

export class LendingPartnerBanksPage {

    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'There is No VD Screen For This Page',
    }

    elements = {
        
        pageTitle : () => cy.get('[data-cy="app.components.Store.partners_text"]'),
        lblServicedByPartnerBankKisetsuSaisonFinance : () => cy.contains('p','Kisetsu Saison Finance (India) Private Limited (KSF)'),
        lblServicedByPartnerBankKrazybeeServicesPrivateLimited : () => cy.contains('p','Krazybee Services Private Limited'),
        lblServicedByPartnerBankIIFLFinanceLimited : () => cy.contains('p','IIFL Finance Limited'),
       
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().eq(0).should('have.text', title)
    }

    verifyServicedByPartnerBankKisetsuSaisonFinancelabel(partnerbank) {
        this.elements.lblServicedByPartnerBankKisetsuSaisonFinance().should('have.text', partnerbank)
    }

    verifyServicedByPartnerBankKrazybeeServicesPrivateLimitedlabel(partnerbank) {
        this.elements.lblServicedByPartnerBankKrazybeeServicesPrivateLimited().should('have.text', partnerbank)
    }

    verifyServicedByPartnerBankIIFLFinanceLimitedlabel(partnerbank) {
        this.elements.lblServicedByPartnerBankIIFLFinanceLimited().should('have.text', partnerbank)
    }

}

export const lendingPartnerBanksPage = new LendingPartnerBanksPage