/// <reference types = "cypress" />
export class ThankYouFeedBackPage {

    details = {
        zeplin: () => 'https://zpl.io/llRq1qz',
        zeplin_variation: () => 'https://zpl.io/Am0J6lo',
        overflow: () => '', //TODO overflow Link 
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.PlaystoreRating.thank_you_feedback_text"]'),
        iconPageTitle: () => cy.get('img').eq(1),
        iconClose: () => cy.get('[data-id="closeBtn"]'),
        lblSeconds:()=>cy.get('[data-cy="remainingTime_section"]'),
        btnRateUsOnPlayStore: () => cy.get('[data-cy="app.components.PlaystoreRating.rate_on_playstore_text"]'),
        btnClose: () => cy.get('[data-cy="app.components.Common.close_btn_caps"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyPageTitleIcon(iconPageTitle) {
        this.elements.iconPageTitle().should('have.attr', 'src', iconPageTitle)
    }

    clickCloseIcon() {
        this.elements.iconClose().click()
    }

    verifyRateUsonPlayStoreText(btnRateUsOnPlayStore) {
        this.elements.btnRateUsOnPlayStore().should('have.text', btnRateUsOnPlayStore)
    }

    clickRateUsonPlayStoreButton() {
        this.elements.btnRateUsOnPlayStore().click()
    }

    verifySecondsLabel(){
        this.elements.lblSeconds().should('be.visible')
    }

    verifyCloseButton(btnClose) {
        this.elements.btnClose().should("have.text", btnClose)
    }

    clickCloseButton() {
        this.elements.btnClose().click()
    }

}

export const thankYouFeedBackPage = new ThankYouFeedBackPage()