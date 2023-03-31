/// <reference types = "cypress" />

export class BankAccountDetailsPage {

    details = {
        zeplin : () => '',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements ={
        pageTitle : () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        btnBack : () => cy.get('[]'),
        iconHelp : () => cy.get('[]'),
        txtMaskedAadhar : () => cy.get('[]'),
        lblVerified : () => cy.get('[width="75%"] > .skins__SubTxt-sc-1w7icmd-65'),
        iconBank : () => cy.get('[]'), 
        btnContinue : () => 	cy.get('[data-cy="chooseBankContinueBtn"]'),
        btnAddSavingsBankAccount : () =>  cy.get('[data-cy="addBankSavingsBank"]'), 
        lblBank : () =>  cy.get('[]'), 
        lblBranch : () =>  cy.get('[]'),
        lblIFSC : () =>  cy.get('[]'),
        txtBankName : () =>  cy.get('[]'), 
        txtBranchName : () =>  cy.get('[]'),
        txtBankIFSC : () =>  cy.get('[]'),
        lblSelected : () =>  cy.get('[]'),
        btnVerify : () =>  cy.get('[data-cy="app.components.BbankAccount.choose_bank_verify"]'), 
        lnkEditIFSC : () => cy.get('[data-cy="EditIfscOnce"] > :nth-child(1)'),
        btnVerifyAccount : () =>  cy.get('[data-cy="accDetailVerifyAccount"]'),
        txtError:()=>cy.get('[data-cy="informationLabel"]')

    }

    verifyPageTitle(BankAccountDetails) {
        this.elements.pageTitle().should('have.text', BankAccountDetails)
    }

    clickAddSavingsBankAccountBtn() {
        this.elements.btnAddSavingsBankAccount().click()
    }

    verifyEditIFSCLink(Edit) {
        this.elements.lnkEditIFSC().should('have.text', Edit)
    }

    clickEditIFSCLink() {
        this.elements.lnkEditIFSC().click()
    }

    clickVerifyAccountBtn() {
        this.elements.btnVerifyAccount().click()
    }
    verifyErrorMsg(errormsg){
        this.elements.txtError().should('have.text',errormsg)
    }

}

export const bankAccountDetailsPage = new BankAccountDetailsPage