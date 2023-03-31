/// <reference types = "cypress" />

export class PDPage {

    details = {
        zeplin: () => 'https://zpl.io/g8DyJpN',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.discover_your_credit"]'),
        subTextOfDiscountAndCredit: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.kb_works_on"]'),
        lnkKnowMore: () => cy.get('[data-cy="app.components.ProcessingFeeReduction.kb_know_more"]'),
        lblBasicDetails: () => cy.get('[data-cy="eventItemTitle_app.components.ProcessingFeeReduction.pd_off_basic_title"]'),
        lblIncomeVerification: () => cy.get('[data-cy="eventItemTitle_app.components.ProcessingFeeReduction.pd_off_income_title"]'),
        lblAutoDebitSetup: () => cy.get('[data-cy="eventItemTitle_app.components.ProcessingFeeReduction.pd_off_mandate_title"]'),
        lblAssetValidation: () => cy.contains('p','Asset Validation'),
        lblReuploadKYCDocuments: () => cy.get('[]'),
        lblKYC: () => cy.get('[data-cy="eventItemTitle_app.components.ProcessingFeeReduction.video_kyc_title"]'),
        subTextOfKYC: () => cy.get('[data-cy="offerDesc_app.components.ProcessingFeeReduction.video_kyc_title"]'),
        lblBusinessDetails: () => cy.get('[data-cy="eventItemTitle_app.components.ProcessingFeeReduction.pdOffBusinessTitle"]'),
        lblEmploymentVerification: () => cy.get('[data-cy="eventItemTitle_app.components.ProcessingFeeReduction.emp_ver_title"]'),
        subTextOfEmploymentVerification: () => cy.get('[data-cy="offerDesc_app.components.ProcessingFeeReduction.emp_ver_title"]'),  
        lblSchedulePhysicalKYC: () => cy.get('[data-cy="group_app.components.ProcessingFeeReduction.pkycTitle"]'),   
        btnBack: () => cy.get('[class="skins__GoBack-sc-1xw0zye-18 jvDDTP"]')
    }

    verifyPageTitle(DiscoveryourCreditandPricing) {
        this.elements.pageTitle().should('have.text', DiscoveryourCreditandPricing)
    }
    verifyDiscountAndCreditSubText() {
        this.elements.subTextOfDiscountAndCredit().should('be.visible')
    }
    verifyKnowMoreLink() {
        this.elements.lnkKnowMore().should('be.visible')
    }
    clickKnowMoreLink() {
        this.elements.lnkKnowMore().click()
    }
    verifyBasicDetailsLabel(basicDetails) {
        this.elements.lblBasicDetails().should('have.text', basicDetails)
    }
    clickBasicDetailsLabel() {
        this.elements.lblBasicDetails().click()
    }
    verifyIncomeVerificationLabel(incomverification) {
        this.elements.lblIncomeVerification().should('have.text', incomverification)
    }
    clickIncomeVerificationLabel() {
        this.elements.lblIncomeVerification().click()
    }
    verifyAutoDebitSetupLabel(txt) {
        this.elements.lblAutoDebitSetup().should('have.text', txt)
    }
    clickAutoDebitSetupLabel() {
        this.elements.lblAutoDebitSetup().click()
    }
    verifyAssestvalidationLabel(assestval) {
        this.elements.lblAssetValidation().should('have.text', assestval)
    }
    clickAssestValidationLabel() {
        this.elements.lblAssetValidation().click()
    }
    verifyReuploadKYCLabel(reupload) {
        this.elements.lblReuploadKYCDocuments().should('have.text', reupload)
    }
    clickReuploadKYCLabel() {
        this.elements.lblReuploadKYCDocuments().click()
    }
    verifyKYCLabel(kyc) {
        this.elements.lblKYC().should('have.text', kyc)
    }
    clickKYCLabel() {
        this.elements.lblKYC().click()
    }
    verifyKYCSubText(subtext) {
        this.elements.subTextOfKYC().should('have.text', subtext)
    }
    verifyBuinessDetailsLabel() {
        this.elements.lblBusinessDetails().should('be.visible')
    }
    verifyBuinessDetailsLabelDisabled() {
        this.elements.lblBusinessDetails().should('not.exist')
    }

    verifyNoBuinessDetailsLabel() {
        this.elements.lblBusinessDetails().should('not.exist')
    }

    clickBusinessDetailsLabel() {
        this.elements.lblBusinessDetails().click()
    }
    verifyEmploymentVerificationlabel(EmploymentVerification){
        this.elements.lblEmploymentVerification().should('have.text',EmploymentVerification)
    }
    clickOnEmploymentVerificationlabel(){
        this.elements.lblEmploymentVerification().click()
    }
    verifyEmploymentVerificationDisabled(){
        this.elements.lblEmploymentVerification().should('not.exist')
    }
    clickSchedulePhysicalKYC(){
        this.elements.lblSchedulePhysicalKYC().click({force:true})
    }
    clickBackBtn(){
        this.elements.btnBack().click()
    }
}

export const pdPage = new PDPage()