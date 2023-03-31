/// <reference types = "cypress" />

export class SelectBankAccountPage {

    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/616cf2a95d02201145592e65',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pagetitle: () => cy.get('[data-cy="selectBankAccount"]').first(),
        pageTitle: () => cy.get('[data-cy="chooseBankTtl"]').first(),
        btnBack: () => cy.get('[]'),
        iconHelp: () => cy.get('[]'),
        txtMaskedAadhar: () => cy.get('[]'),
        lblBankVerified: () => cy.get('[class="skins__SubTxt-sc-1w7icmd-64 kHGSEM"]'),
        iconBank: () => cy.get('[]'),
        btnContinue: () => cy.get('[data-cy="chooseBankContinueBtn"]'),
        btnAddSavingsBankAccount: () => cy.get('[data-cy="addBankSavingsBank"]'),
        lblBank: () => cy.get('[]'),
        lblBranch: () => cy.get('[]'),
        lblIFSC: () => cy.get('[]'),
        txtBankName: () => cy.get('[]'),
        txtBranchName: () => cy.get('[]'),
        txtBankIFSC: () => cy.get('[]'),
        lblSelected: () => cy.contains('SELECTED'),
        btnVerify: () => cy.get('[data-cy="app.components.BbankAccount.choose_bank_verify"]'),
        lblBankSelected: () => cy.get('[class="skins__ImgSpan2-sc-1w7icmd-224 iLOSnZ"]'),
        lblVerifyBankStatusRefresh: () => cy.get('[data-cy="refreshBtnCaps"]'),
        lblVerifyBankStatusVerify: () => cy.get('[data-cy="app.components.BbankAccount.choose_bank_verify"]'),
        txtBlock1AddedBankIFSC: () => cy.get('[data-cy="ifscCode_0"]'),
        txtBlock2AddedBankIFSC: () => cy.get('[data-cy="ifscCode_1"]'),
        lblVerified: () => cy.contains('p', 'Verified'),
        btnSelectMode: () => cy.get('[data-cy="app.components.BbankAccount.select_mode"]'),
        lblVerifyBankStatusEdit:()=>cy.get('[data-cy="BankRejected"]'),
        txtVerified:()=>cy.contains('p','Verified'),
        txtAddBank: () => cy.get('[data-cy="addBankText"]'),
        subTxtAddBank: () => cy.get('[data-cy="addBankWePrim"]'),
    }

    clickContinueBtn() {
        this.elements.btnContinue().click()
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
    clickSelectModeButton() {
        this.elements.btnSelectMode().click()
    }
    clickSelect() {
        this.elements.lblSelected().click()
    }
    clickBankStatusEdit(){
        this.elements.lblVerifyBankStatusEdit().click()
    }
    verifyVerifiedText(text){
        this.elements.txtVerified().should('have.text',text)
    }
    verifyAddBankText(text){
        this.elements.txtAddBank().should('contain.text',text)
    }
    verifyAddBankSubText(subtext){
        this.elements.subTxtAddBank().should('contain.text',subtext)
    }

}

export const selectBankAccountPage = new SelectBankAccountPage