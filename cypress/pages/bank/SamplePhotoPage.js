/// <reference types = "cypress" />

export class SamplePhotoPage {

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
        lblCancelledCheque : () =>  cy.get('[class="skins__SamplePhotos-sc-1wm9eot-3 jtCELw"]'),
        lblPassbook : () =>  cy.get('[class="skins__SamplePhotos-sc-1wm9eot-3 jtCELw"]'),
        imgCancelledCheque : () =>  cy.get('[src="https://ik.imagekit.io/kreditbee/app-static/bank/Sample_Cancelled_Cheque.jpg"]'),
        imgPassbook : () =>  cy.get('[src="https://ik.imagekit.io/kreditbee/app-static/bank/Sample_Passbook.jpg"]'),
    }

    verifyPageTitle(SamplePhoto) {
        this.elements.pageTitle().should('have.text', SamplePhoto)
    }

    verifyCancelledChequeLabel() {
        this.elements.lblCancelledCheque().should('be.visible')
    }

    verifyPassbookLabel() {
        this.elements.lblPassbook().should('be.visible')
    }

    verifyCancelledChequeImage() {
        this.elements.imgCancelledCheque().should('be.visible')
    }

    verifyPassbookImage() {
        this.elements.imgPassbook().should('be.visible')
    }

    


}

export const samplePhotoPage = new SamplePhotoPage