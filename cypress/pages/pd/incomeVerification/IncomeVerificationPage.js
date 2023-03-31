
/// <reference types = "cypress" />

export class IncomeVerificationPage {

    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5df329785bbb034c1175d911',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="pd_off_secl_title"]'),
        imgIncomeVerification: () => cy.get('[]'),
        lblVerifyIncome: () => cy.get('[]'),
        subTextVerifyIncome: () => cy.get('[]'),
        iconVerifyIncome: () => cy.get('[]'),
        infoTextVerifyIncome: () => cy.get('[]'),
        lblUploadForm16: () => cy.get('[data-cy="form16"]'),
        subTextUploadForm16: () => cy.get('[]'),
        iconUploadForm16: () => cy.get('[]'),
        infoTextUploadForm16: () => cy.get('[]'),
        lblITRV: () => cy.get('[data-cy="itrv"]'),
        subTxtITRV: () => cy.get('[data-cy="substr_itrv"]'),
        iconITRV: () => cy.get('[]'),
        infoTextITRV: () => cy.get('[]'),
        lblSalarySlipUpload: () => cy.get('[]'),
        subTextSalarySlipUpload: () => cy.get('[]'),
        iconSalarySlipUpload: () => cy.get('[]'),
        infoTextSalarySlipUpload: () => cy.get('[]'),
        btnContinue: () => cy.contains('button','Continue'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyITRVLabel(itrv) {
        this.elements.lblITRV().should('have.text', itrv)
    }

    clickITRVLabel() {
        this.elements.lblITRV().click()
    }

    clickContinueButton() {
        this.elements.btnContinue().click({force:true})
    }
 
    verifyITRVSubText(subtext) {
        this.elements.subTxtITRV().should('have.text', subtext)
    }

    clickUploadForm16Label() {
        this.elements.lblUploadForm16().click()
    }
}

export const incomeVerificationPage = new IncomeVerificationPage()