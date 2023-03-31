/// <reference types = "cypress" />

export class BasicDetailsPage {

    details = {
        zeplin: () => 'https://zpl.io/boGdWwk',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        imgBasicDetails: () => cy.get('[]'),
        lblSyncGmailAccount: () => cy.get('[]'),
        subTextSyncGmailAccount: () => cy.get('[]'),
        iconSyncGmailAccount: () => cy.get('[]'),
        infoTextSyncGmail: () => cy.get('[]'),
        lblVerifyWorkEmail: () => cy.get('[data-cy="emailValidation"]'),
        subTextVerifyWorkEmail: () => cy.get('[]'),
        iconVerifyWorkEmail: () => cy.get('[]'),
        infoTextVerifyWorkEmail: () => cy.get('[]'),
        lblVerifyMobileTrustScore: () => cy.get('[data-cy="basicMobAuth"]'),
        subTextMobileTrustScore: () => cy.get('[]'),
        iconMobileTrustScore: () => cy.get('[]'),
        lblVerifyRegisteredMobileNumber: () => cy.contains('p','Verify Registered Mobile Number'),
        subTextRegisteredMobileNumber: () => cy.get('[]'),
        iconRegisteredMobileNumber: () => cy.get('[]'),
        infoTextMobileTrustScore: () => cy.get('[]'),
        lblSyncWalletDetails: () => cy.get('[]'),
        subTextSyncWalletDetails: () => cy.get('[]'),
        iconSyncWalletDetails: () => cy.get('[]'),
        infoTextSyncWalletDetails: () => cy.get('[]'),
        lblSyncShoppingDetails: () => cy.get('[data-cy="ecommScrapping"]'),
        subTextSyncShoppingDetails: () => cy.get('[]'),
        iconSyncShoppingDetails: () => cy.get('[]'),
        infoTextSyncShoppingDetails: () => cy.get('[]'),
        lblVerifyCommunicationAddress: () => cy.get('[data-cy="currentAddrProof"]'),
        subVerifyCommunicationAddress: () => cy.get('[]'),
        iconVerifyCommunicationAddress: () => cy.get('[]'),
        infoVerifyCommunicationAddress: () => cy.get('[]'),
        btnContinue: () => cy.contains('button','Continue')

    }
    verifyPageTitle(pageTitle) {
        this.elements.pageTitle().should('have.text', pageTitle)
    }
    verifySyncGmailAccountLabel(syncgmail) {
        this.elements.lblSyncGmailAccount().should('contain.text',syncgmail)
    }
    verifyWorkEmailLabel(workemail) {
        this.elements.lblVerifyWorkEmail().should('contain.text',workemail)
    }
    verifyMobileTrustScoreLabel(mobiletrustscore) {
        this.elements.lblVerifyMobileTrustScore().should('contain.text',mobiletrustscore)
    }
    verifyRegisteredMobileNumberLabel(Registeredmobile) {
        this.elements.lblVerifyRegisteredMobileNumber().should('contain.text',Registeredmobile)
    }
    verifySyncWalletDetailsLabel(syncwallet) {
        this.elements.lblSyncWalletDetails().should('contain.text',syncwallet)
  }
    verifySyncShoppingDetailsLabel(syncshopping) {
        this.elements.lblSyncShoppingDetails().should('contain.text',syncshopping)
  }
    clickOnSyncGmailAccountLabel() {
        this.elements.lblSyncGmailAccount().click()
    }
    clickOnWorkEmailLabel() {
        this.elements.lblVerifyWorkEmail().click()
    }
    clickOnMobileTrustScoreLabel() {
        this.elements.lblVerifyMobileTrustScore().click()
    }
    clickOnRegisteredMobileNumberLabel() {
        this.elements.lblVerifyRegisteredMobileNumber().click()
    }
    clickOnSyncWalletDetailsLabel() {
        this.elements.lblSyncWalletDetails().click()
    }
    clickOnSyncShoppingDetailsLabel() {
        this.elements.lblSyncShoppingDetails().click()
    }
    clickContinueButton(){
        this.elements.btnContinue().click({force : true})
    }
    clickVerifyWorkEmail(){
        this.elements.lblVerifyWorkEmail().click()
    }
    clickContinue(){
        this.elements.btnContinue().click({force:true})
    }

    clickVerifyCommunicationAddress(){
        this.elements.lblVerifyCommunicationAddress().click()
    }
    clickSyncShoppingDetails(){
        this.elements.lblSyncShoppingDetails().click()
    }
}

export const basicDetailsPage = new BasicDetailsPage()