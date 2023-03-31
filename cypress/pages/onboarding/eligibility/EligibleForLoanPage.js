export class EligibleForLoanPage {

    details = {
        zeplin: () => 'https://zpl.io/1yrG86J',
        overflow: () => '',//TODO: Overflow Link
    }

    elements = {
        pageTitle: () => cy.contains('span','Congratulations'),
        txtUsername: () => cy.contains('p','Mock'),
        txtEligibleForALoan: () => cy.contains('span','You are eligible for a loan'),
        valEligibleLoanAmount: () => cy.get(),
        // txtEligibleAsterisk: () => cy.contains(''),
        subTxtSubjectToDocumentationApproval: () => cy.contains('span','*subject to documentation approval'),
        // iconBackgroundFlare: () => cy.contains(''),
        lblLoanEligibility: () => cy.contains('span','Loan Eligibility'),
        lblLoanApplication: () => cy.contains('span','Loan Application'),
        lblLoanAgreement: () => cy.contains('span','Loan Agreement'),
        lblLoanDisbursement: () => cy.contains('span','Loan Disbursement'),
        btnContinueToApply: () => cy.contains('span','Continue to Apply')
    }

    // pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // txtUsername
    verifyUserNameText(username) {
        this.elements.txtUsername().should('have.text', username)
    }
    // txtEligibleForALoan
    verifyEligibleForLoanText(eligibleForLoanUptoRupees) {
        this.elements.txtEligibleForALoan().should('have.text', eligibleForLoanUptoRupees)
    }
    // subTxtSubjectToDocumentationApproval
    verifySubjectToDocumentationApprovalText(docApprovalText) {
        this.elements.subTxtSubjectToDocumentationApproval().should('have.text', docApprovalText)
    }
    // iconBackgroundFlare
    verifyBackgroundFlareIcon(backgroundFlare) {
        this.elements.iconBackgroundFlare().should('have.text', backgroundFlare)
    }
    // lblLoanEligibility
    verifyLoanEligibilityLabel(loanEligibility) {
        this.elements.lblLoanEligibility().should('have.text', loanEligibility)
    }
    //lblLoanApplication
    verifyLoanApplicationLabel(loanApplication) {
        this.elements.lblLoanApplication().should('have.text', loanApplication)
    }
    //lblLoanAgreement
    verifyLoanAgreementLabel(loanAgreement) {
        this.elements.lblLoanAgreement().should('have.text', loanAgreement)
    }
    //lblLoanDisbursement
    verifyLoanDisbursementLabel(loanDisbursement) {
        this.elements.lblLoanDisbursement().should('have.text', loanDisbursement)
    }
    // btnContinueToApply
    verifyContinueApplyBtn(continueApplication) {
        this.elements.btnContinueToApply().should('have.text', continueApplication)
    }

    clickContinueToApplyBtn() {
        this.elements.btnContinueToApply().click()
    }

}

export const eligibleForLoanPage = new EligibleForLoanPage()
