/// <reference types = "cypress" />

export class VerifyIncomePage {

    details = {
        zeplin: () => '',
        overflow_onboarding_2_5: () => 'https://overflow.io/s/1NS0Y7J3/?node=b7438b70',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.containers.Bprofile.verify_income_title"]'),
        iconIncomeVerification: () => cy.get('[data-cy="VIImg"]'),
        lblIncomeVerificationRequired: () => cy.get('[data-cy="app.components.BVerifyincome.verify_info_title"]'),
        subTxtIncomeVerificationRequired: () => cy.get('[data-cy="app.components.BVerifyincome.verify_info_desc"]'),
        lnkHowToVerifyYourIncome: () => cy.get('[]'),
        btnSkipForNow: () => cy.get('[data-cy="app.components.BVerifyincome.verify_income_later_text"]'),
        btnContinueToVerify: () => cy.get('[data-cy="app.components.BVerifyincome.continue_to_verify"]'),
        btnGoBack:()=>cy.get('[data-cy="goBackBtn"]'),
    }
   
    verifyPageTitle(verifyIncome) {
        this.elements.pageTitle().should('contain.text', verifyIncome)
    }

    verifyIncomeVerificationIcon() {
        this.elements.iconIncomeVerification().find('img').should('be.visible')
    }
    
    verifyIncomeVerificationRequiredLabel(incomeVerificationRequired) {
        this.elements.lblIncomeVerificationRequired().should('contain.text', incomeVerificationRequired)
    }

    verifyIncomeVerificationRequiredSubTxt(thisWillHelpYouGetHigherCredit) {
        this.elements.subTxtIncomeVerificationRequired().should('contain.text', thisWillHelpYouGetHigherCredit)
    }

    clickHowToVerifyYourIncomeLink() {
        this.elements.lnkHowToVerifyYourIncome().click()
    }

    verifySkipForNowText(skipForNow) {
        this.elements.btnSkipForNow().should('have.text', skipForNow)
    }

    verifySkipForNowTextDoesNotExist() {
        this.elements.btnSkipForNow().should('not.exist')
    }

    clickSkipForNowBtn() {
        this.elements.btnSkipForNow().click()
    }

    clickContinueToVerifyBtn() {
        this.elements.btnContinueToVerify().click()
    }
    verifyContinuToVerifyText(ContinuetoVerify) {
        this.elements.btnContinueToVerify().should('have.text', ContinuetoVerify)
    }
    clickGoBackButton(){
        this.elements.btnGoBack().click()
    }

}

export const verfiyIncomePage = new VerifyIncomePage