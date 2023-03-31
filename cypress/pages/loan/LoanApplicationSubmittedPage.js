/// <reference types = "cypress" />

class LoanApplicationSubmittedPage{

    details = {
        zeplin: () => '', //TODO Link 
        overflow: () => '',//TOOD Link
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.containers.BbankAccount.loan_success_title"]'),
        lblLoanAmount: () => cy.get('[data-cy="app.containers.BbankAccount.loan_amt_txt"]'),
        iconRupee: () => cy.get('[data-cy="app.components.Common.rupee_symbol"]'),
        txtLoanAmount: () => cy.get('[data-cy="loanAmt_6200"]'),
        imgBank: () => cy.get('[data-cy="iconBank1"]'),
        txtAccountNo: () => cy.get('[data-cy="app.containers.BbankAccount.masked_txt"]'), 
        //TODO
        txtAccountNoLastDigits: () => cy.get('[data-cy="accountLastFourDigit_7802"]')  ,
        lblBankName: () => cy.get('[data-cy="refinedBankName"]'),
        lblLoanProcessed: () => cy.get('[data-cy="app.containers.BbankAccount.processing_msg_without_auto_debit"]'),
        txtCompleteVKYC: () => cy.get('[data-cy="app.containers.BbankAccount.CompleteVkyctxt"]'),
        lblCompleteVKYCinSecs: () => cy.get('[data-cy="app.containers.BbankAccount.CompleteVkycBtn"]'),
        btnCompleteVKYCinSecs: () => cy.get('[data-cy="app.containers.BbankAccount.CompleteVkycBtn"]'),
        lblContinue: () => cy.get('[data-cy="app.containers.BbankAccount.continue"]'),
        btnContinue: () => cy.get('[data-cy="app.containers.BbankAccount.continue"]') 
    }

    verifypageTitle(loanapplicationsubmitted){
        this.elements.pageTitle().eq(0).should('have.text',loanapplicationsubmitted)
    }
    verifyLoanAmountLabel(loanamount){
        this.elements.lblLoanAmount().should('have.text',loanamount)
    }
    verifyRupeeIcon(rupee){
        this.elements.iconRupee().should('have.text',rupee)
    }
    verifyLoanAmountText(loanamount){
        this.elements.txtLoanAmount().should('have.text',loanamount)
    }
    verifyBankImage(bank){
        this.elements.imgBank().should('have.text',bank)
    }
    verifyAccountNoText(accountNo){
        this.elements.txtAccountNo().should('have.text',accountNo)
    }
    verifyBankNameLabel(bankname){
        this.elements.lblBankName().should('have.text',bankname)
    }
    verifyLoanProcessedLabel(loanprocessed){
        this.elements.lblLoanProcessed().should('have.text',loanprocessed)
    }
    verifyCompleteVKYCText(VKYC){
        this.elements.txtCompleteVKYC().should('have.text',VKYC)
    }
    verifyCompleteVKYCinSecsLabel(VKYC){
        this.elements.lblCompleteVKYCinSecs().should('have.text',VKYC)
    }
    verifyContinueLabel(cont){
        this.elements.lblContinue().should('have.text',cont)
    }
    clickCompleteVKYCinSecsButton(){
        this.elements.btnCompleteVKYCinSecs().click({timeout:2000})
    }
    clickContinueButton(){
        this.elements.btnContinue().click({timeout:2000})
    }
}
export const loanApplicationSubmittedPage = new LoanApplicationSubmittedPage()