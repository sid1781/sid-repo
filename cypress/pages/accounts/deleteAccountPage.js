/// <reference types = "cypress" />

export class DeleteAccountPage {

    details = {
        zeplin: () => 'https://zpl.io/xmDLdrm',
        zeplinvariation: () => 'https://zpl.io/Dl6BZWr',
        overflow: () => 'https://overflow.io/s/0XIF6E58/?node=2cf1bff8',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="header"]'),
        iconClose: () => cy.get('img').eq(1),
        iconDeleteAccount: () => cy.get('.sc-bxivhb'),
        txtLoseAccess: () => cy.contains('p', 'Do you really want to delete your KreditBee Account? On deleting your account you will lose the access and benefits of Instant Financing, Digital Gold, Insurance & Credit Score Report.'),
        btnContinueToDelete: () => cy.get('button').eq(0),
        btnBack: () => cy.get('button').eq(1),
        iconKreditBee: () => cy.get('.sc-bxivhb'),
        txtContactCustomerSupport: () => cy.contains('p', 'If you are dissatisfied with our service or have queries and concerns, please connect with our customer support team.'),
        btnDeleteAccount: () => cy.get('button').eq(0),
        btnContactUs: () => cy.get('button').eq(1),
        txtLoseData: () => cy.contains('p', 'On deleting your account, your data will be removed from Kreditbee account. However due to regulatory and compliance purposes, some data and KYC information will be retained by our partner NBFCs as well as KreditBee for any transactions or services that may have been availed in the past.'),
    }

    // pageTitle 
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // iconClose 
    verifyCloseIcon(iconClose) {
        this.elements.iconClose().should('have.attr', 'src', iconClose)
    }

    clickCloseIconButton() {
        this.elements.iconClose().click()
    }
    // iconDeleteAccount 
    verifyDeleteAccountIcon(iconDeleteAccount) {
        this.elements.iconDeleteAccount().should('have.attr', 'src', iconDeleteAccount)
    }
    // txtLoseAccess 
    verifyLoseAccessText(txtLoseAccess) {
        this.elements.txtLoseAccess().should('have.text', txtLoseAccess)
    }
    // btnContinueToDelete 
    verifyContinueDeleteText(btnContinueToDelete) {
        this.elements.btnContinueToDelete().should('have.text', btnContinueToDelete)
    }

    clickContinueToDeleteButton() {
        this.elements.btnContinueToDelete().click()
    }
    // btnBack 
    verifyBackText(btnBack) {
        this.elements.btnBack().should('have.text', btnBack)
    }

    clickBackButton() {
        this.elements.btnBack().click()
    }
    // iconKreditBee 
    verifyKreditBeeIcon(iconKreditBee) {
        this.elements.iconKreditBee().should('have.attr', 'src', iconKreditBee)
    }
    // txtContactCustomerSupport 
    verifyContactCustomerSupportText(txtContactCustomerSupport) {
        this.elements.txtContactCustomerSupport().should('have.text', txtContactCustomerSupport)
    }
    // btnDeleteAccount 
    verifyDeleteAccountText(btnDeleteAccount) {
        this.elements.btnDeleteAccount().should('have.text', btnDeleteAccount)
    }

    clickDeleteAccountButton() {
        this.elements.btnDeleteAccount().click()
    }
    // btnContactUs 
    verifyContactUsText(btnContactUs) {
        this.elements.btnContactUs().should('have.text', btnContactUs)
    }

    clickContactUsButton() {
        this.elements.btnContactUs().click()
    }
    // txtLoseData 
    verifyLoseDataText(txtLoseData) {
        this.elements.txtLoseData().should('have.text', txtLoseData)
    }
}

export const deleteAccountPage = new DeleteAccountPage()