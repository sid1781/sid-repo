/// <reference types = "cypress" />

export class FooterPage {

    details = {
        zeplin: () => 'https://zpl.io/3XZXj0x',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=e40e434b',
    }

    elements = {
        iconHome: () => cy.get('[class="sc-hSdWYo fSIVUD"]').eq(0),
        lblHome: () => cy.get('[data-cy="app.components.NewHomePage.nhppdt_page_icon_home"]'),
        iconRepayment: () => cy.get('[data-cy="app.components.NewHomePage.nhppdt_page_icon_repay"]'),
        lblRepayment: () => cy.get('[data-cy="app.components.NewHomePage.nhppdt_page_icon_repay"]'),
        iconOffers: () => cy.get('[class="sc-hSdWYo fSIVUD"]').eq(2),
        lblOffers: () => cy.get('[data-cy="app.components.NewHomePage.nhppdt_page_icon_offer"]'),
        iconAccount: () => cy.get('[data-cy="app.components.NewHomePage.nhppdt_page_icon_acc"]',{timeout : 10000}),
        lblAccount: () => cy.get('[data-cy="loanRecordImg"]'),
        txtRepayment: () => cy.get('[data-cy="app.components.NewHomePage.nhppdt_page_icon_repay"]'),
    }

    clickHomeIcon() {
        this.elements.iconHome().click()
    }

    clickRepaymentIcon() {
        this.elements.iconRepayment().click()
    }

    clickOffersIcon() {
        this.elements.iconOffers().click()
    }

    clickOffersLabel() {
        this.elements.lblOffers().click()
    }

    clickAccountIcon() {
        this.elements.iconAccount().click()
    }
    clickAccountLabel() {
        this.elements.lblAccount().click()
    }

    clickRepaymentText() {
        this.elements.txtRepayment().click()
    }

}

export const footerPage = new FooterPage