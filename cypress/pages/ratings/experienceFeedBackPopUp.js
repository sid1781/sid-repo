/// <reference types = "cypress" />
export class ExperienceFeedBackPopUpPage {

    details = {
        zeplin_link: () => 'https://zpl.io/V1AzNRZ',
        zeplin_link_variation: () => 'https://zpl.io/VqQKKDN',
        overflow_link: () => '' //TODO link
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.PlaystoreRating.how_your_exp_head"]'),
        iconClose: () => cy.get('#app > div > div > div > span > div > article > div > div > div.BFlexDiv-y6mdwn-0.gOUBHh > div > div > div > svg'),
        lblHelpUsWithYourFeedback: () => cy.get('[data-cy="app.components.PlaystoreRating.how_your_exp_subhead"]'),
        iconRating: () => cy.get(':nth-child(3) > :nth-child(1) > .sc-dnqmqq > .lazyload-wrapper > .sc-htoDjs > svg')
            .invoke('css', 'display', 'inline-block'),
        btnNotNow: () => cy.get('[data-cy="app.components.PlaystoreRating.not_now_text"]'),
        btnSubmit: () => cy.get('[data-cy="app.components.Common.submit_btn_caps"]'),
        //Feedback comment section
        txtFeedBack: () => cy.get('[data-cy="app.components.PlaystoreRating.feedback_comment_placeholder"]'),
        btnSkip: () => cy.get('[data-cy="app.components.PlaystoreRating.skip_txt"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyCloseIcon(iconClose) {
        this.elements.iconClose().should('have.attr', iconClose)
    }
    // lblHelpUsWithYourFeedback
    verifyHelpUsWithYourFeedbackLabel(lblHelpUsWithYourFeedback) {
        this.elements.lblHelpUsWithYourFeedback().should('have.text', lblHelpUsWithYourFeedback)
    }

    verifyFeedBackText() {

    }
    // iconRating
    clickRatingsIcon() {
        this.elements.iconRating().eq(8).click({force:true})
    }
    clickRatingIconThreeStars() {
        this.elements.iconRating().eq(4).click({force:true})
    }
    // btnNotNow
    verifyNotNowText(btnNotNow) {
        this.elements.btnNotNow().should('have.text', btnNotNow)
    }

    clickNotNowButton() {
        this.elements.btnNotNow().click()
    }

    // btnSubmit
    verifySubmitText(btnSubmit) {
        this.elements.btnSubmit().should('have.text', btnSubmit)
    }

    clickSubmitButton() {
        this.elements.btnSubmit().click({force:true})
    }
    //txtFeedBack
    verifyFeedBackText(txtFeedBack) {
        this.elements.txtFeedBack()
            .should('have.attr', 'placeholder', 'Leave your feedback here (optional)')
            .type(txtFeedBack)
    }

    verifySkipText(btnSkip) {
        this.elements.btnSkip().should('have.text', btnSkip)
    }

    clickSkipBtn() {
        this.elements.btnSkip().click()
    }
    clickCloseIcon() {
        this.elements.iconClose().click()
    }

}

export const experienceFeedBackPopUp = new ExperienceFeedBackPopUpPage()