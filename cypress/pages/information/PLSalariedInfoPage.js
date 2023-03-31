/// <reference types="cypress" />

export class PLSalariedInfoPage {

    details = {
        zeplin: () => '', // TODO: Zeplin Link
        overflow: () => '', // TODO: overFLow Link
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="templateTitle"]'),
        txtPLDescription: () => cy.get('[data-cy="templateContMsg"]'),
        iconDocuments: () => cy.get('[data-cy="tSubTopicImg_1"]'),
        lblDocuments: () => cy.get('[data-cy="tSubTopic_1"]'),
        txtPanCard: () => cy.get('[data-cy="templateContentType_10"]'),
        txtAddressProof: () => cy.get('[data-cy="templateContentType_11"]'),
        iconEligibilityCriteria: () => cy.get('[data-cy="tSubTopicImg_2"]'),
        lblEligibilityCriteria: () => cy.get('[data-cy="tSubTopic_2"]'),
        txtCriteria1: () => cy.get('[data-cy="templateContentType_20"]'),
        txtCriteria2: () => cy.get('[data-cy="templateContentType_21"]'),
        txtCriteria3: () => cy.get('[data-cy="templateContentType_22"]'),
        txtCriteria4: () => cy.get('[data-cy="templateContentType_23"]'),
        iconLoanAmount: () => cy.get('[data-cy="tSubTopicImg_3"]'),
        lblLoanAmount: () => cy.get('[data-cy="tSubTopic_3"]'),
        txtAmountRange: () => cy.get('[data-cy="templateContentTypeMsg.30"]'),
        iconTenure: () => cy.get('[data-cy="tSubTopicImg_4"]'),
        lblTenure: () => cy.get('[data-cy="tSubTopic_4"]'),
        txtTenureRange: () => cy.get('[data-cy="templateContentTypeMsg.40"]'),
        iconInterest: () => cy.get('[data-cy="tSubTopicImg_5"]'),
        lblInterest: () => cy.get('[data-cy="tSubTopic_5"]'),
        txtInterest: () => cy.get('[data-cy="templateContentTypeMsg.50"]'),
        iconProcessingFee: () => cy.get('[data-cy="tSubTopicImg_6"]'),
        lblProcessingFee: () => cy.get('[data-cy="tSubTopic_6"]'),
        txtProcessingFee: () => cy.get('[data-cy="templateContentTypeMsg.60"]'),
        btnBack: () => cy.get('button').eq(0),
        btnLoginWithMobile: () => cy.get('button').eq(1),
    }

    // pageTitle 
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // txtPLDescription 
    verifyPLDescriptionText(plDescription) {
        this.elements.txtPLDescription().should('have.text', plDescription)
    }
    // iconDocuments 
    verifyDocumentsIcon(iconDocuments) {
        this.elements.iconDocuments().should('have.attr', 'src', iconDocuments)
    }
    // lblDocuments 
    verifyDocumentsLabel(document) {
        this.elements.lblDocuments().should('have.text', document)
    }
    // txtPanCard 
    verifyPanCardText(pancardText) {
        this.elements.txtPanCard().should('have.text', pancardText)
    }
    // txtAddressProof 
    verifyAddressProofText(addressproof) {
        this.elements.txtAddressProof().should('have.text', addressproof)
    }
    // iconEligibilityCriteria 
    verifyEligibilityCriteriaIcon(iconEligibilityCriteria) {
        this.elements.iconEligibilityCriteria().should('have.attr', 'src', iconEligibilityCriteria)
    }
    // lblEligibilityCriteria 
    verifyEligibilityCriteriaLabel(eligibilityCriteria) {
        this.elements.lblEligibilityCriteria().should('have.text', eligibilityCriteria)
    }
    // txtCriteria1 
    verifyCriteria1Text(criteria1) {
        this.elements.txtCriteria1().should('have.text', criteria1)
    }
    // txtCriteria2
    verifyCriteria2Text(criteria2) {
        this.elements.txtCriteria2().should('have.text', criteria2)
    }
    // txtCriteria3 
    verifyCriteria3Text(criteria3) {
        this.elements.txtCriteria3().should('have.text', criteria3)
    }
    // txtCriteria4 
    verifyCriteria4Text(criteria4) {
        this.elements.txtCriteria4().should('have.text', criteria4)
    }
    // iconLoanAmount 
    verifyLoanAmountIcon(loanAmountIcon) {
        this.elements.iconLoanAmount().should('have.attr', 'src', loanAmountIcon)
    }
    // lblLoanAmount 
    verifyLoanAmountLabel(loanAmountLabel) {
        this.elements.lblLoanAmount().should('have.text', loanAmountLabel)
    }
    // txtAmountRange
    verifyAmountRangeText(amountRange) {
        this.elements.txtAmountRange().should('have.text', amountRange)
    }
    // iconTenure 
    verifyTenureIcon(iconTenure) {
        this.elements.iconTenure().should('have.attr', 'src', iconTenure)
    }
    // lblTenure
    verifyTenureLabel(tenureLabel) {
        this.elements.lblTenure().should('have.text', tenureLabel)
    }
    // txtTenureRange 
    verifyTenureRangeText(tenureRange) {
        this.elements.txtTenureRange().should('have.text', tenureRange)
    }
    // iconInterest 
    verifyInterestIcon(iconInterest) {
        this.elements.iconInterest().should('have.attr', 'src', iconInterest)
    }
    // lblInterest 
    verifyInterestLabel(interestLabel) {
        this.elements.lblInterest().should('have.text', interestLabel)
    }
    // txtInterest
    verifyInterestText(interestText) {
        this.elements.txtInterest().should('have.text', interestText)
    }
    // iconProcessingFee 
    verifyProcessingFeeIcon(iconProcessingFee) {
        this.elements.iconProcessingFee().should('have.attr', 'src', iconProcessingFee)
    }
    // lblProcessingFee 
    verifyProcessingFeeLabel(processingFeeLabel) {
        this.elements.lblProcessingFee().should('have.text', processingFeeLabel)
    }
    // txtProcessingFee 
    verifyProccessingFeeText(proccessingFeeText) {
        this.elements.txtProcessingFee().should('have.text', proccessingFeeText)
    }
    // btnBack 
    verifyBackText(backText) {
        this.elements.btnBack().should('have.text', backText)
    }

    clickBackBtn() {
        this.elements.btnBack().click()
    }
    // btnLoginWithMobile 
    verifyLoginWithMobileText(loginWithMobile) {
        this.elements.btnLoginWithMobile().should('have.text', loginWithMobile)
    }

    clickLoginWithMobileBtn() {
        this.elements.btnLoginWithMobile().click()
    }

}
export const plSalariedInfoPage = new PLSalariedInfoPage()