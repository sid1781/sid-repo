/// <reference types = "cypress" />

export class RateYourExperiencePage {

    details = {
        zeplin: () => '', //TODO zeplin Link
        overflow: () => '', //TODO overflow Link 
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.PlaystoreRating.rate_your_exp_head"]'),
        iconClose: () => cy.get('[data-id="closeBtn"]'),
        logoKreditBee: () => cy.get('[class="logo"]'),
        lblRateUs: () => cy.get('[data-cy="app.components.PlaystoreRating.rate_your_exp_subhead"]'),
        iconRatings: () => cy.get('.icon'),
        inpComment: () => cy.get('[data-cy="inputBox"]'),
        msgInputComment: () => cy.get('[]'),
        btnMaybeLater: () => cy.get('[data-cy="app.components.Common.maybelater_btn_caps"]'),
        btnSubmit: () => cy.get('[data-cy="app.components.Common.submit_btn_caps"]'),
        msgInputComment: () => cy.get('[data-cy="app.components.PlaystoreRating.feedback_comment_placeholder"]'),
        btnMaybeLater: () => cy.get('[data-cy="app.components.Common.maybelater_btn_caps"]')
    }

    // pageTitle 
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // iconClose 
    verifyCloseIcon(iconClose) {
        this.elements.iconClose().should('have.attr', 'src', iconClose)
    }

    clickCloseIcon() {
        this.elements.iconClose().click()
    }
    // logoKreditBee 
    verifyKreditBeeLogo(logoKreditBee) {
        this.elements.logoKreditBee().should('have.attr', 'src', logoKreditBee)
    }
    // lblRateUs 
    verifyRateUsLabel(lblRateUs) {
        this.elements.lblRateUs().should('have.text', lblRateUs)
    }
    // iconRatings 
    verifyRatingsIcon(iconRatings) {
        this.elements.iconRatings().should('have.attr', 'src', iconRatings)
    }

    clickRatingsIcon() {
        this.elements.iconRatings().click({ multiple: true })
    }

    // inpComment 
    enterComment(inpComment) {
        this.elements.inpComment().type(inpComment).then(() => {
            this.elements.btnMaybeLater().should('not.exist')
        })
    }
    // btnMaybeLater 
    verifyMaybeLaterText(btnMaybeLater) {
        this.elements.btnMaybeLater().should('have.text', btnMaybeLater)
    }

    clickMaybeLater() {
        this.elements.btnMaybeLater().click()
    }
    // btnSubmit 
    verifySubmitText(btnSubmit) {
        this.elements.btnSubmit().should('have.text', btnSubmit)
    }

    clickSubmitButton() {
        this.elements.btnSubmit().click({force:true})
    }

    enterMessageComment() {
        this.elements.msgInputComment().type('app is good')
    }


}

export const rateYourExperiencePage = new RateYourExperiencePage()