/// <reference types = "cypress" />

export class LoanDisbursalPage {
    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="conatctUsActive"]'),
        lblRecentIssueQuestion: () => cy.get('[data-cy="app.components.ContactUs.recent_issues_msg"]'),
        txtAddedBankAccountNotverified: () => cy.get('[data-cy="recentIssueQuestion_0"]'),
        txtUnableToSignLoanAgreement: () => cy.get('[data-cy="recentIssueQuestion_1"]'),
        txtLoanNotYetDisbursed: () => cy.get('[data-cy="recentIssueQuestion_2"]'),
        txtIDontHaveMobileNumberLinkedWithAadhar: () => cy.get('[data-cy="recentIssueQuestion_3"]'),
        btnDidntFindYourQuery: () => cy.get('[data-cy="app.components.ContactUs.dint_find_query_msg"]'),
        //I applied for a loan but the loan is not yet disbursed
        subtxtLoanNotyetDisbursed: () => cy.get('[data-cy="ques_string"]'),
        txtInfoLoanNotyetDisbursed: () => cy.get('[data-cy="ans_string"]'),
        btnOK: () => cy.get('[data-cy="app.components.ContactUs.ok_msg"]'),
        rbSelectBank: () => cy.get('[data-val="9975345"]'),
        txtSelectBank: () => cy.get('[data-cy="bradioListLabel1_0"]'),
        btnSubmit: () => cy.get('[data-cy="app.components.ContactUs.submit_msg"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    } 
    verifyRecentIssueQuestionLabel(RecentIssueQuestion){
        this.elements.lblRecentIssueQuestion().should('contain.text', RecentIssueQuestion)
    }
    verifyAddedBankAccountNotVerified(BankAccountNotVerified){
        this.elements.txtAddedBankAccountNotverified().should('contain.text', BankAccountNotVerified)
    }
    verifyUnableToSignLoanAgreementText(SignLoanAgreement){
        this.elements.txtUnableToSignLoanAgreement().should('have.text', SignLoanAgreement)
    }
    verifyLoanNotyetDisbursedText(LoanNotYetDisbursed){
        this.elements.txtLoanNotYetDisbursed().should('contain.text', LoanNotYetDisbursed)
    }
    verifyIDontHaveMobileNumberLinkedWithAadharText(MobileNumberLinkedAadhar){
        this.elements.txtIDontHaveMobileNumberLinkedWithAadhar().should('contain.text', MobileNumberLinkedAadhar)
    }
    verifyDidntFindYourQueryButton(QueryButton){
        this.elements.btnDidntFindYourQuery().should('contain.text', QueryButton)
    }
    ClickOnAppliedLoanNotYetDisbursed(){
        this.elements.txtLoanNotYetDisbursed().eq(0).click()
    }
    clickOnDidntFindYourQueryButton(){
        this.elements.btnDidntFindYourQuery().click()
    }
    verifysubtxtAppliedLoanNotYetDisbursed(question){
        this.elements.subtxtLoanNotyetDisbursed().should('contain.text',question)
    }
    verifytxtInfoAppliedLoanNotYetDisbursed(answer){
        this.elements.txtInfoLoanNotyetDisbursed().should('contain.text',answer)
    }
    verifyBtnOK(ok){
        this.elements.btnOK().should('contain.text',ok)
    }
    clickOnAddedBankAccountNotverifiedText(){
        this.elements.txtAddedBankAccountNotverified().eq(0).click()
    }
    clickOnSubmitButton(){
        this.elements.btnSubmit().click()
    }
    clickOnSelectBankRB(){
        this.elements.rbSelectBank().eq(1).click()
    }


}

export const loanDisbursalPage = new LoanDisbursalPage