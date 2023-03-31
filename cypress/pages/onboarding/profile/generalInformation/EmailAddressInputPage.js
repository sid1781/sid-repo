/// <reference types = "cypress" />

export class EmailAddressInputPage {

    details = {
        zeplin: () => 'https://zpl.io/2jymAX4',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=e1a89290',
    }

    elements = {
        lblBack: () => cy.get('[data-cy="goBackBtn"]'),
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]',{timeout : 10000}),
        lblSelectAnyOneStep: () => cy.get('[data-cy="select"]'),
        rbFetchEmailFromGmail: () => cy.get('[]'),
        lblFetchEmailFromGmail: () => cy.get('[]'),
        iconFetchEmailFromGmail: () => cy.get('[]'),
        btnContinue: () => cy.get('[]'),
        rbEnterEmailAddress: () => cy.get('[data-cy="option"]'),
        lblEnterEmailAddress: () => cy.get('[class="skins__TitleTd-sc-19au09r-35 gkQfHE"]'),
        iconAtTheRate: () => cy.get('[]'),
        iconEnterEmailAddress: () => cy.get('[]'),
        inpEnterEmailAddress: () => cy.get('[data-cy="input_email"]'),
        placeHolderEnterEmailAddress: () => cy.get('[data-cy="input_undefined"]'),
        ddlDidYouMean: () => cy.get('[data-cy="app.components.Common.did_you_mean"]'),
        colEmailSuggestion: () => cy.get('[]'),
        msgEnterEmailAddress: () => cy.get('[]'),
        btnSubmit: () => cy.get('[data-cy="submit"]'),
    }
    verifyBackLabel(){
        this.elements.lblBack().should('be.visible')
    }
    clickBackLabel(){
        this.elements.lblBack().click()
    }
    verifyPageTitle(EmailAddress) {
        this.elements.pageTitle().should('have.text', EmailAddress)
    }

    verifySelectAnyOneStepLabel(SelectANYONEStep) {
        this.elements.lblSelectAnyOneStep().should('have.text', SelectANYONEStep)
    }

    verifyFetchEmailFromGmailRadioButton() {
        this.elements.rbFetchEmailFromGmail()
    }

    verifyFetchEmailFromGmailLabel() {
        this.elements.lblFetchEmailFromGmail()
    }

    verifyFetchEmailFromGmailIcon() {
        this.elements.iconFetchEmailFromGmail()
    }

    verifyContinueBtn() {
        this.elements.btnContinue()
    }

    verifyEnterEmailaddressRadioButton() {
        this.elements.rbEnterEmailAddress()
    }

    verifyEnterEmailAddressLabel(Enteremailaddress) {
        this.elements.lblEnterEmailAddress().should('have.text', Enteremailaddress)
    }

    clickEnterEmailAddressLabel() {
        this.elements.lblEnterEmailAddress().click()
    }

    verifyAtTheRateIcon() {
        this.elements.iconAtTheRate()
    }

    verifyEnterEmailAddressIcon() {
        this.elements.iconEnterEmailAddress()
    }

    verifyEnterEmailAddressInput() {
        this.elements.inpEnterEmailAddress()
    }

    enterEmailAddress(emailID) {
        this.elements.inpEnterEmailAddress().eq(0).type(emailID)
    }

    verifyEnterEmailAddressPlaceHolder() {
        this.elements.placeHolderEnterEmailAddress()
    }

    verifyDidYouMeanDropDownList() {
        this.elements.ddlDidYouMean()
    }

    verifyEmailSuggestionCollections() {
        this.elements.colEmailSuggestion()
    }

    verifyEnterEmailAddressMessage() {
        this.elements.msgEnterEmailAddress()
    }

    verifySubmitButton(Submit) {
        this.elements.btnSubmit().should('have.text', Submit)
    }

    clickSubmitButton() {
        this.elements.btnSubmit().click()
    }
}

export const emailAddressInputPage = new EmailAddressInputPage()
