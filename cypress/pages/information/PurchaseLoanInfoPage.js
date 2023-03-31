/// <reference types="cypress" />

export class PurchaseLoanInfoPage {

    details = {
        zeplin: () => '', // TODO: Zeplin Link
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=e576c778', // TODO: overFLow Link
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="templateTitle"]'),
        txtPurchaseLoanDescription: () => cy.get('[data-cy="templateCont_0"]'),
        lblStep1: () => cy.get('strong'),
        subtxtStep1: () => cy.get('[data-cy="templatedt_0"]'),
        lblStep2: () => cy.get('strong'),
        subtxtStep2: () => cy.get('[data-cy="templatedt_1"]'),
        lblStep3: () => cy.get('strong'),
        subtxtStep3: () => cy.get('[data-cy="templatedt_2"]'),
        iconDocuments: () => cy.get('[data-cy="tSubTopicImg_2"]'),
        lblDocuments: () => cy.get('[data-cy="tSubTopic_2"]'),
        txtPANCard: () => cy.get('[data-cy="templateContentType_20"]'),
        txtAddressProof: () => cy.get('[data-cy="templateContentType_21"]'),
        iconEligibilityCriteria: () => cy.get('[data-cy="tSubTopicImg_3"]'),
        lblEligibilityCriteria: () => cy.get('[data-cy="tSubTopic_3"]'),
        subtxtCriteria1: () => cy.get('[data-cy="templateContentType_30"]'),
        subtxtCriteria2: () => cy.get('[data-cy="templateContentType_31"]'),
        subtxtCriteria3: () => cy.get('[data-cy="templateContentType_32"]'),
        subtxtCriteria4: () => cy.get('[data-cy="templateContentType_33"]'),
        iconLoanAmount: () => cy.get('[data-cy="tSubTopicImg_4"]'),
        lblLoanAmount: () => cy.get('[data-cy="tSubTopic_4"]'),
        txtAmountRange: () => cy.get('[data-cy="templateContentTypeMsg.40"]'),
        iconTenure: () => cy.get('[data-cy="tSubTopicImg_5"]'),
        lblTenure: () => cy.get('[data-cy="tSubTopic_5"]'),
        txtTenureRange: () => cy.get('[data-cy="templateContentTypeMsg.50"]'),
        iconInterest: () => cy.get('[data-cy="tSubTopicImg_6"]'),
        lblInterest: () => cy.get('[data-cy="tSubTopic_6"]'),
        txtInterestRange: () => cy.get('[data-cy="templateContentTypeMsg.60"]'),
        iconProcessingFee: () => cy.get('[data-cy="tSubTopicImg_7"]'),
        lblProcessingFee: () => cy.get('[data-cy="tSubTopic_7"]'),
        txtProcessingFeeRange: () => cy.get('[data-cy="templateContentTypeMsg.70"]'),
        iconPartners: () => cy.get('div'),
        lblPartners: () => cy.contains('p', 'Our Partners'),
        subtxtPartner: () => cy.contains('p', 'Avail E-voucher for any of the below partners on KreditBee'),
        imgFlipkart: () => cy.get('[data-cy="0_partenerImg"]'),
        imgAmazon: () => cy.get('[data-cy="1_partenerImg"]'),
        imgMyntra: () => cy.get('[data-cy="2_partenerImg"]'),
        imgJabong: () => cy.get('[data-cy="3_partenerImg"]'),
        imgMakeMyTrip: () => cy.get('[data-cy="4_partenerImg"]'),
        imgUrbanLadder: () => cy.get('[data-cy="5_partenerImg"]'),
        imgPepperFry: () => cy.get('[data-cy="6_partenerImg"]'),
        imgClearTrip: () => cy.get('[data-cy="7_partenerImg"]'),
        imgNykaa: () => cy.get('[data-cy="8_partenerImg"]'),
        imgStopperStop: () => cy.get('[data-cy="9_partenerImg"]'),
        imgLifestyle: () => cy.get('[data-cy="10_partenerImg"]'),
        imgCliq: () => cy.get('[data-cy="11_partenerImg"]'),
        btnBack: () => cy.get('button').eq(0),
        btnLoginWithMobile: () => cy.get('button').eq(1),
    }

    // pageTitle: () => cy.get('[data-cy="templateTitle"]'),
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // txtPurchaseLoanDescription: () => cy.get('[data-cy="templateContMsg"]'),
    verifyPurchaseLoanDescriptionText(purchaseLoanDescription) {
        this.elements.txtPurchaseLoanDescription().should('have.text', purchaseLoanDescription)
    }
    // iconDocuments: () => cy.get('[data-cy="tSubTopicImg_1"]'),
    verifyDocumentsIcon(iconDocuments) {
        this.elements.iconDocuments().should('have.attr', 'src', iconDocuments)
    }
    // lblDocuments: () => cy.get('[data-cy="tSubTopic_1"]'),
    verifyDocumentsLabel(document) {
        this.elements.lblDocuments().should('have.text', document)
    }
    // txtPANCard: () => cy.get('[data-cy="templateContentType_10"]'),
    verifyPanCardText(pancardText) {
        this.elements.txtPANCard().should('have.text', pancardText)
    }
    // txtAddressProof: () => cy.get('[data-cy="templateContentType_11"]'),
    verifyAddressProofText(addressproof) {
        this.elements.txtAddressProof().should('have.text', addressproof)
    }
    // iconEligibilityCriteria: () => cy.get('[data-cy="tSubTopicImg_2"]'),
    verifyEligibilityCriteriaIcon(iconEligibilityCriteria) {
        this.elements.iconEligibilityCriteria().should('have.attr', 'src', iconEligibilityCriteria)
    }
    // lblEligibilityCriteria: () => cy.get('[data-cy="tSubTopic_2"]'),
    verifyEligibilityCriteriaLabel(eligibilityCriteria) {
        this.elements.lblEligibilityCriteria().should('have.text', eligibilityCriteria)
    }
    // txtCriteria1 
    verifyCriteria1Text(criteria1) {
        this.elements.subtxtCriteria1().should('have.text', criteria1)
    }
    // txtCriteria2
    verifyCriteria2Text(criteria2) {
        this.elements.subtxtCriteria2().should('have.text', criteria2)
    }
    // txtCriteria3 
    verifyCriteria3Text(criteria3) {
        this.elements.subtxtCriteria3().should('have.text', criteria3)
    }
    // txtCriteria4 
    verifyCriteria4Text(criteria4) {
        this.elements.subtxtCriteria4().should('have.text', criteria4)
    }
    // iconLoanAmount 
    verifyLoanAmountIcon(loanAmountIcon) {
        this.elements.iconLoanAmount().should('have.attr', 'src', loanAmountIcon)
    }
    // lblLoanAmount 
    verifyLoanAmountLabel(loanAmountLabel) {
        this.elements.lblLoanAmount().should('have.text', loanAmountLabel)
    }
    // txtAmountRange: () => cy.get('[data-cy="templateContentTypeMsg.30"]'),
    // txtAmountRange
    verifyAmountRangeText(amountRange) {
        this.elements.txtAmountRange().should('have.text', amountRange)
    }
    // iconTenure: () => cy.get('[data-cy="tSubTopicImg_4"]'),
    // iconTenure 
    verifyTenureIcon(iconTenure) {
        this.elements.iconTenure().should('have.attr', 'src', iconTenure)
    }
    // lblTenure: () => cy.get('[data-cy="tSubTopic_4"]'),
    verifyTenureLabel(tenureLabel) {
        this.elements.lblTenure().should('have.text', tenureLabel)
    }
    // txtTenureRange: () => cy.get('[data-cy="templateContentTypeMsg.40"]'),
    verifyTenureRangeText(tenureRange) {
        this.elements.txtTenureRange().should('have.text', tenureRange)
    }
    // iconInterest: () => cy.get('[data-cy="tSubTopicImg_5"]'),
    verifyInterestIcon(iconInterest) {
        this.elements.iconInterest().should('have.attr', 'src', iconInterest)
    }
    // lblInterest: () => cy.get('[data-cy="tSubTopic_5"]'),
    verifyInterestLabel(interestLabel) {
        this.elements.lblInterest().should('have.text', interestLabel)
    }
    // txtInterest: () => cy.get('[data-cy="templateContentTypeMsg.50"]'),
    verifyInterestText(interestText) {
        this.elements.txtInterestRange().should('have.text', interestText)
    }
    // iconProcessingFee: () => cy.get('[data-cy="tSubTopicImg_6"]'),
    verifyProcessingFeeIcon(iconProcessingFee) {
        this.elements.iconProcessingFee().should('have.attr', 'src', iconProcessingFee)
    }
    // lblProcessingFee: () => cy.get('[data-cy="tSubTopic_6"]'),
    verifyProcessingFeeLabel(processingFeeLabel) {
        this.elements.lblProcessingFee().should('have.text', processingFeeLabel)
    }
    // txtProcessingFee: () => cy.get('[data-cy="templateContentTypeMsg.60"]'),
    verifyProccessingFeeText(proccessingFeeText) {
        this.elements.txtProcessingFeeRange().should('have.text', proccessingFeeText)
    }
    // lblPartners
    verifyParntersLabel(partners) {
        this.elements.lblPartners().should('have.text', partners)
    }
    //subtxtPartner
    verifyPartnerSubText(partnerSubText) {
        this.elements.subtxtPartner().should('have.text', partnerSubText)
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
export const purchaseLoanInfoPage = new PurchaseLoanInfoPage()
