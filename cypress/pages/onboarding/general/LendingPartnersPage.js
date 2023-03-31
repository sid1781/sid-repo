/// <reference types = "cypress" />

export class LendingPartnersPage {

    details = {
        zeplin: () => 'https://zpl.io/brdKALe',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=94262e27'
    }

    elements = {
        logoKreditBee: () => cy.get('img'),
        txtKreditBeeInfo: () => cy.get('[data-cy="lendingPartnersDesc"]'),
        pageTitle: () => cy.get('[data-cy="app.components.lendingPartners.lending_partners_title"]'),
        lblLendingPartners: () => cy.get('[data-cy="app.components.lendingPartners.lending_partners_title"]'), // no need of this locator , pageTitle is used instead 
        colLendingPartner: () => cy.get('.skins__ScrollableDiv-iuscd9-2'),
        chkBoxConsentToShare: () => cy.get('[data-value]'),
        txtConsentToShare: () => cy.get('[data-cy="checkboxText_lendingPartnersConsentText"]'),
        btnContinue: () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]')
    }

    verifyKreditBeeLogo(logo) {
        this.elements.logoKreditBee().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/store/logo.svg')
    }

    verifyKreditInfo(txtKreditBeeInfo) {
        this.elements.txtKreditBeeInfo().should('contain.text', txtKreditBeeInfo)
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyLendingPartnersLabel(lendingpartnerlabel) {
        this.elements.lblLendingPartners().should('have.text', lendingpartnerlabel)
    }

    verifyLendingPartnerCollection(partners) {
        let lendingPartnerArray = Array.from(partners)
        this.elements.colLendingPartner()
            .each(($el, index) => {
                cy.get($el)
                    .should('contain.text', lendingPartnerArray[index])
            })
    }

    uncheckConsentToShare() {
        this.elements.chkBoxConsentToShare().should('have.attr', 'data-id', 'checkBox')
    }

    verifyConsentToShareText(consentToShare) {
        this.elements.txtConsentToShare().should('have.text', consentToShare)
    }

    verifyContinueBtn(continuetext) {
        this.elements.btnContinue().should('have.text', continuetext)
    }

    clickContinueBtn() {
        this.elements.btnContinue().click({force:true})
    }

}

export const lendingPartnersPage = new LendingPartnersPage()