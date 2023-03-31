/// <reference types = "cypress" />

export class SelectBankAccountWebPage {

    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/616cf2a95d02201145592e65',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pagetitle: () => cy.getIframeBody().find('[data-cy="selectBankAccount"]').first(),
        pageTitle: () => cy.getIframeBody().find('[data-cy="chooseBankTtl"]').first(),
        btnBack: () => cy.getIframeBody().find('[]'),
        iconHelp: () => cy.getIframeBody().find('[]'),
        txtMaskedAadhar: () => cy.getIframeBody().find('[]'),
        lblBankVerified: () => cy.getIframeBody().contains('Verified'),
        iconBank: () => cy.getIframeBody().find('[]'),
        chkContinue:()=> cy.getIframeBody().find('[data-cy="chooseBankConfirmAcc"]'),
        btnContinue: () => cy.getIframeBody().find('[data-cy="chooseBankContinueBtn"]'),
        btnAddSavingsBankAccount: () => cy.getIframeBody().find('button'),
        lblBank: () => cy.getIframeBody().find('[]'),
        lblBranch: () => cy.getIframeBody().find('[]'),
        lblIFSC: () => cy.getIframeBody().find('[]'),
        txtBankName: () => cy.getIframeBody().find('[]'),
        txtBranchName: () => cy.getIframeBody().find('[]'),
        txtBankIFSC: () => cy.getIframeBody().find('[]'),
        lblSelected: () => cy.getIframeBody().find('[]'),
        btnVerify: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.choose_bank_verify"]'),
        lblBankSelected: () => cy.getIframeBody().find('[class="skins__ImgSpan2-sc-1w7icmd-224 iLOSnZ"]'),
        lblVerifyBankStatusRefresh: () => cy.getIframeBody().find('[data-cy="refreshBtnCaps"]'),
        lblVerifyBankStatusVerify: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.choose_bank_verify"]'),
        txtBlock1AddedBankIFSC: () => cy.getIframeBody().find('[class="skins__SubTxt-sc-1w7icmd-70 rMMkS"]').eq(0),
        txtBlock2AddedBankIFSC: () => cy.getIframeBody().find('[class="skins__SubTxt-sc-1w7icmd-70 rMMkS"]').eq(1),
        lblVerified: () => cy.contains('p', 'Verified'),
        btnConsent: () => cy.getIframeBody().find('[data-cy="chooseBankConfirmAcc"]')
    }

    clickContinueBtn() {
        this.elements.btnContinue().click({force:true})
    }

    clickAddSavingBankAccount() {
        this.elements.btnAddSavingsBankAccount().click()
    }

    verifyBankVerificationStatus(status) {
        this.elements.lblBankVerified().should('contain', status)
    }

    clickVerifyBtn() {
        this.elements.btnVerify().click()
    }

    verifyPageTitle(SelectBankAccount) {
        this.elements.pageTitle().should('have.text', SelectBankAccount)
    }

    verifyBankSelectionStatus(status) {
        this.elements.lblBankSelected().should('contain', status)
    }

    verifyBankStatusRefresh() {
        this.elements.lblVerifyBankStatusRefresh().should('be.visible')
    }

    verifyBankStatusVerify() {
        this.elements.lblVerifyBankStatusVerify().should('be.visible')
    }

    verifyBlock1AddedBankIFSCIsDisplayed(BankIFSC) {
        this.elements.txtBlock1AddedBankIFSC().invoke('text').then((text) => {
            expect(text.replace(/\u00a0/g, ' ')).equal(BankIFSC)
        })
    }

    clickAddSavingsBankAccountBtn() {
        this.elements.btnAddSavingsBankAccount().click()
    }

    verifyPagetitle(SelectBankAccount) {
        this.elements.pagetitle().should('have.text', SelectBankAccount)
    }

    verifyBlock2AddedBankIFSCIsDisplayed(BankIFSC) {
        this.elements.txtBlock2AddedBankIFSC().invoke('text').then((text) => {
            expect(text.replace(/\u00a0/g, ' ')).equal(BankIFSC)
        })
    }

    verifyVerifiedBankStatus(Verified) {
        this.elements.lblVerified().should('have.text', Verified)
    }

    // btnConsent
    clickBtnConsent() {
        this.elements.btnConsent().click()
    }

}

export const selectBankAccountWebPage = new SelectBankAccountWebPage