/// <reference types = "cypress" />

export class VerifyAccountPage {

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
        lnkViewSamplePhoto : () => cy.get('[data-cy="app.components.Bcheque.sample_Photo"]'),
    }

    verifyPageTitle(VerifyAccount) {
        this.elements.pageTitle().should('have.text', VerifyAccount)
    }

    clickViewSamplePhotoLink() {
        this.elements.lnkViewSamplePhoto().click()
    }


}

export const verifyAccountPage = new VerifyAccountPage