/// <reference types = "cypress" />

export class CreditLimitIncreasedPage {

    details = {
        zeplin: () => '', //TODO Link
        overflow: () => '', //TODO Link
    }

    elements = {
        imgCreditLimitIncreased: () => cy.get('img').eq(2),
        pageTitle: () => cy.contains('p', 'Credit limit increased!'),
        subTextCreditLimitIncreased: () => cy.contains('p', 'Your Credit limit has been increased to'),
        txtCreditAmount: () => cy.get('span').should('be.visible').eq(2),
        chkboxConsent: () => cy.get('[data-cy="check_icon"]'),
        txtConsentInfo: () => cy.get('[data-cy="checkboxText"]'),
        btnContinue: () => cy.get('button'),
    }

    // imgCreditLimitIncreased
    verifyCreditLimitIncreasedImage(imgCreditLimitIncreased) {
        this.elements.imgCreditLimitIncreased().should('have.attr', 'src', imgCreditLimitIncreased).and('be.visible')
    }
    // pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // subTextCreditLimitIncreased 
    verifyCreditLimitIncreasedSubText(subTextCreditLimitIncreased) {
        this.elements.subTextCreditLimitIncreased().should('have.text', subTextCreditLimitIncreased)
    }
    // txtCreditAmount
    verifyCreditAmount(txtCreditAmount) {
        this.elements.txtCreditAmount().should('have.text', txtCreditAmount)
    }
    // chkboxConsent
    clickChkBoxConsent() {
        this.elements.chkboxConsent().click()
    }
    // txtConsentInfo
    verifyConsentInfo(txtConsentInfo) {
        this.elements.txtConsentInfo().should('have.text', txtConsentInfo)
    }
    // btnContinue 
    verifyContinueBtn(btnContinue) {
        this.elements.btnContinue().should('have.text', btnContinue)
    }

    clickContinueBtn() {
        this.elements.btnContinue().click()
    }

    selectContinue() {
        this.clickChkBoxConsent()
        this.clickContinueBtn()
    }
}
export const creditLimitIncreasedPage = new CreditLimitIncreasedPage()