/// <reference types = "cypress" />

export class AddBankAccountPage {

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/616cf26c6e724217ec150f4a',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle : () => cy.get('[data-cy="app.containers.BbankAccount.title"]'),
        btnBack : () => cy.get('[]'),
        iconHelp : () => cy.get('[]'),
        lblBankIFSC : () => cy.get('[]'),
        iconBank : () => cy.get('[]'),
        inpIFSC : () =>  cy.get('[data-cy="input_app.components.BbankAccount.acc_detail_ifsc_code"]',  {timeout : 2000} ),
        lnkFindIFSC : () => cy.get('[data-cy="accDetailFindIfsc"]'),
        infoDisplayIFSC : () => cy.get('[data-cy="informationLabel"]'),
        lblAccountNumber : () => cy.get('[]'),
        lblConfirmAccountNumber : () => cy.get('[]'),
        iconAccountNumber : () => cy.get('[]'), 
        iconConfirmAccountNumber : () => cy.get('[]'),
        inpAccountNumber : () =>  cy.get('[data-cy="input_app.components.BbankAccount.acc_detail_account_number"]'),
        inpConfirmAccountNubmer : () =>  cy.get('[data-cy="input_app.components.BbankAccount.acc_detail_confirm_account_number"]'), 
        chkBoxConfirmingAccountDetails : () => cy.get('[class="check-box-con BCheck__CheckBox-fg83z-2 gEvpLm"]'),
        txtConfirmingAccountDetails : () => cy.get('[]'),
        lblAccountHolderName : () =>  cy.get('[]'),  
        lblBankName : () =>  cy.get('[]'), 
        lblBranchName : () =>  cy.get('[]'),
        txtAccountHolderName : () =>  cy.get('[]'),  
        txtBankName : () =>  cy.get('[]'), 
        txtBranchName : () =>  cy.get('[]'),
        btnAddAccount : () =>  cy.get('[data-cy="accDetailAddAccount"]'),
        txtBankIFSCBlacklistMsg : () =>  cy.get('[data-cy="informationLabel"]'),
    }

    enterIFSC(ifsc) {
       this.elements.inpIFSC().type(ifsc)
    }

    verifyInformationDisplayIFSC(infoText) {
        this.elements.infoDisplayIFSC().should('have.text', infoText)
    }

    enterAccountNumber(accountNumber) {
        this.elements.inpAccountNumber().type(accountNumber)
    }

    enterConfirmAccountNumber(confirmAccountNumber) {
        this.elements.inpConfirmAccountNubmer().type(confirmAccountNumber)
    }

    clickAddAccountBtn() {
        this.elements.btnAddAccount().click()
    }

    addBankAccount(ifsc, accountNubmer) {
        enterIFSC(ifsc)
        enterAccountNumber(accountNubmer)
        enterConfirmAccountNumber(accountNubmer)
        clickAddAccountBtn()
    }

    clickFindIFSCLink() {
        this.elements.lnkFindIFSC().click()
    }

    verifyPageTitle(AddBankAccount) {
        this.elements.pageTitle().should('have.text', AddBankAccount)
    }

    verifyConsentCheckBoxIsSelected() {
        this.elements.chkBoxConfirmingAccountDetails().should('have.attr','data-value','checked')
    }

    verifyAddAccountBtnIsEnabled() {
        this.elements.btnAddAccount().should('be.enabled')
    }

    verifyBankIFSCBlacklistMessageText(ErrorMessage) {
        this.elements.txtBankIFSCBlacklistMsg().should('have.text', ErrorMessage)
    }

}

export const addBankAccountPage = new AddBankAccountPage