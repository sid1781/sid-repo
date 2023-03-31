/// <reference types="cypress" />

export class ReferralCodePopUpPage {

    details = {
        zeplin: () => 'https://zpl.io/VQyelGW',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=d68bf83d'
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="header"]'),
        iconClose: () => cy.get('img').eq(1),
        lblReferralCodeOptional: () => cy.get('[data-cy="label_undefined"]'),
        iconEnterYourReferralCodeHere: () => cy.get('[]'),
        txtPEnterYourReferralCodeHere: () => cy.get('[data-cy="input_undefined"]'),
        inpEnterYourReferralCodeHere: () => cy.get('#input-refCode'),
        btnNoIDontHaveReferralCode: () => cy.get('[data-cy="noRefCode"]'),
        btnSubmit: () => cy.get('[data-cy="submit"]'),
        bgReferralPopUp: () => cy.get('.skins__ReferralPopup-sc-19au09r-25')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    }

    verifyCloseIcon() {
        this.elements.iconClose()
            .should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/loan/ic_close.svg').and('be.visible')
    }

    clickCloseIconBtn() {
        this.elements.iconClose().click()
    }

    verifyReferelCodeOptionalLabel(optional) {
        this.elements.lblReferralCodeOptional().should('contain.text', optional)
    }

    enterReferalCode(entercode) {
        this.elements.inpEnterYourReferralCodeHere().type(entercode)
    }

    verifyNoIDontHaveReferalCodeText() {
        this.elements.btnNoIDontHaveReferralCode().should('be.visible')
    }

    clickNoIDontHaveReferalCodeBtn() {
        this.elements.btnNoIDontHaveReferralCode().click()
    }

    verifySubmitText(submit) {
        this.elements.btnSubmit().should('contain.text', submit).and('be.visible')
    }

    verifySubmitTextGreyedOut(submitgreyout) {
        this.elements.btnSubmit().should('be.disabled', submitgreyout)
    }

    clickSubmitBtn() {
        this.elements.btnSubmit().click()
    }

    verifyReferralPopBackgroundColor() {
        this.elements.bgReferralPopUp().should('have.css', 'background-color', 'rgb(255, 255, 255)')
    }

    validateClickEvent(eventButton) {
        if (eventButton == 0) {
            this.clickCloseIconBtn()
        } else {
            this.clickNoIDontHaveReferalCodeBtn()
        }
    }

    validateSubmitButton(referalcodeEmpty) {
        if (referalcodeEmpty == 0) {
            this.elements.txtPEnterYourReferralCodeHere().should('be.empty').then(() => {
                this.verifySubmitTextGreyedOut()
            })
        }
    }
}

export const referalPopupPage = new ReferralCodePopUpPage