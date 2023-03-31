/// <reference types="cypress" />

export class LoginPage {

    details = {
        zeplin: () => '',//TODO: Zeplin Link
        overflow_onboarding_Phase_2: () => 'https://overflow.io/s/UCDTKU1H/?node=d68bf83d'
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.MobileSignin.welcome_to_txt"]'),
        iconKreditBee: () => cy.get('img'),
        iconBackground: () => cy.get('div'),
        lblGetInstantPersonalLoanUpto: () => cy.get('[data-cy="app.components.MobileSignin.get_personal_upto"]'),
        txtPersonalLoanAmountRupees: () => cy.get('[data-cy="max_loan_amount"]'),
        lblLoginOrCreateAnAccount: () => cy.get('[data-cy="app.components.MobileSignin.login_to_account"]'),
        btnLoginOrSignupWithMobile: () => cy.get('[data-cy="app.components.MobileSignin.login_message"]'),
        lnkKnowAboutYourProducts: () => cy.get('[data-cy="app.components.MobileSignin.pdt_know_more"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    }

    verifyKreditBeeIcon() {
        this.elements.iconKreditBee()
            .should('have.attr', 'alt').should('include', 'brand-logo')
    }

    verifyBackgroundIcon() {
        this.elements.iconBackground().should('have.css', 'background-image')
    }

    verifyGetInstantPersonalLoanUptoText(instantTenureUpto) {
        this.elements.lblGetInstantPersonalLoanUpto().should('have.text', instantTenureUpto)
    }

    verifyLoanAmountRupees(amtrupees) {
        this.elements.txtPersonalLoanAmountRupees().should('have.text', amtrupees)
    }

    verifyLoginOrCreateAccountLabel(createAccountLabel) {
        this.elements.lblLoginOrCreateAnAccount().should('have.text', createAccountLabel)
    }

    verifyLoginOrSignupWithMobileText(loginOrSignupText) {
        this.elements.btnLoginOrSignupWithMobile().should('have.text', loginOrSignupText)
    }

    clickLoginOrSignupWithMobileBtn() {
        this.elements.btnLoginOrSignupWithMobile().click()
    }

    verifyKnowAboutLink(knowAboutProductLink) {
        this.elements.lnkKnowAboutYourProducts().should('have.text', knowAboutProductLink)
    }

    clickKnowAboutYourProductsLink() {
        this.elements.lnkKnowAboutYourProducts().click()
    }

    verifyLoginFlow(config, linkText) {
        if (config == 0) {
            this.elements.lnkKnowAboutYourProducts().should('not.exist') //no link
        } else if (config == 1) {
            this.elements.lnkKnowAboutYourProducts().should('have.text', linkText).then(() => {
                this.clickKnowAboutYourProductsLink()
            })
        }
    }

}

export const loginPage = new LoginPage()