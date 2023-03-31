export class ApplicationStatusPage {

    details = {
        zeplin: () => 'https://zpl.io/vMgwQRY',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=984debf2'
    }

    elements = {
        iconCircularProgress: () => cy.get('[]'),
        valPercentageCompleted: () => cy.get('[data-cy="percentage_0"]'),
        lblPercentageSymbol: () => cy.get('[data-cy="loanStepsPercentageSymbol"]'),
        txtComplete: () => cy.get('[data-cy="loanStepsCompleteTxt"]'),
        lblApplicationStatus: () => cy.get('[data-cy="stepTitle_APPLICATION STATUS :"]'),
        iconCheckEligibility: () => cy.get('[]'),
        txtCheckEligibility: () => cy.get('[data-cy="step0"]'),
        iconKYC: () => cy.get('[]'),
        txtKYC: () => cy.get('[data-cy="step1"]'),
        iconProfileDetails: () => cy.get('[]'),
        txtProfileDetails: () => cy.get('[data-cy="step2"]'),
        iconReferenceDetails: () => cy.get('[]'),
        txtReferenceDetails: () => cy.get('[data-cy="step3"]'),
        // FPL Section
        iconFPL: () => cy.get('[]'),
        lblFPLBankTransferUpto: () => cy.get('[data-cy="app.components.NewHomePage.nhp_upto_text"]'),
        iconFPLRupee: () => cy.get('[]'),
        valFPL: () => cy.get('[]'),
        txtFPLTenureUpto: () => cy.get('[data-cy="nHPTenureUpto"]'),
        lblFPL: () => cy.get('[data-cy="app.components.NewHomePageflexi_personal_loan_text"]'),
        lnkFPLKnowMore: () => cy.get('[]'),
        arrLinkFPLKnowMore: () => cy.get('[]'),
        // PL Salaried
        iconPLSalaried: () => cy.get('[]'),
        lblPLSalariedBankTransferUpto: () => cy.get('[data-cy="app.components.NewHomePage.nhp_upto_text"]'),
        iconPLSalariedRupee: () => cy.get('[]'),
        valPLSalaried: () => cy.get('[]'),
        txtPLSalariedTenureUpto: () => cy.get('[data-cy="nHPTenureUpto"]'),
        lblPLSalaried: () => cy.get('[data-cy="app.components.NewHomePage.personal_loan_salaried_text"]'),
        lnkPLSalariedKnowMore: () => cy.get('[]'),
        arrLinkPLSalariedKnowMore: () => cy.get('[]'),
        // Purchase Loan
        iconPurchaseLoan: () => cy.get('[]'),
        lblEVoucherUpto: () => cy.get('[data-cy="app.components.NewHomePage.nhp_evoucher_upto_text"]'),
        iconPurchaseLoanRupee: () => cy.get('[]'),
        valPurchaseLoan: () => cy.get('[]'),
        txtPurchaseLoanTenureUpto: () => cy.get('[data-cy="nHPTenureUpto"]'),
        lblPurchaseLoan: () => cy.get('[data-cy="app.components.NewHomePage.online_purchase_loan_text"]'),
        lnkPurchaseLoanKnowMore: () => cy.get('[]'),
        arrLinkPurchaseLoanKnowmore: () => cy.get('[]'),
        btnCheckEligibility: () => cy.get('[data-cy="app.components.NewHomePage.check_eligibility_btn_text"]'),
        btnContinueApplication: () => cy.get('[data-cy="app.components.NewHomePage.continue_app_btn_text"]',{timeout : 10000})
    }                 
    verifyCircularProgressIcon() {
        this.elements.iconCircularProgress()
    }

   
    verifyPercentageCompletedValue() {
        this.elements.valPercentageCompleted()
    }

    verifyPercentageSymbolLabel() {
        this.elements.PercentageSymbol()
    }

    verifyCompleteText(Complete) {
        this.elements.txtComplete().should('have.text', Complete)
    }
    verifyApplicationStatusLabel() {

        this.elements.lblApplicationStatus().should('be.visible')
    }
    //           {
    //     this.elements.lblApplicationStatus()   //this method someone removed

    // }   
    verifyCheckEligibilityIcon() {
        this.elements.verifyCheckEligibilityIcon()
    }

    verifyCheckEligibilityText(Eligibility) {
        this.elements.txtCheckEligibility().should('have.text', Eligibility)
    }

    verifyKYCIcon() {
        this.elements.iconKYC()
    }

    verifyKYCText(KYC) {
        this.elements.txtKYC().should('have.text', KYC)
    }

    verifyProfileDetailsIcon() {
        this.elements.iconProfileDetails()
    }

    verifyProfileDetailsText(ProfileDetails) {
        this.elements.txtProfileDetails().should('have.text', ProfileDetails)
    }

    verifyReferenceDetailsIcon() {
        this.elements.iconReferenceDetails()
    }

    verifyReferenceDetailsText(ReferenceDetails) {
        this.elements.txtReferenceDetails().should('have.text', ReferenceDetails)
    }

    verifyFPLIcon() {
        this.elements.iconFPL()
    }

    verifyFPLBankTransferUptoLabel() {
        this.elements.lblFPLBankTransferUpto()
    }

    verifyFPLRupeeicon() {
        this.elements.iconFPLRupee()
    }

    verifyFPLValue() {
        this.elements.valFPL()
    }

    verifyFPLTenureUptoText() {
        this.elements.txtFPLTenureUpto()
    }

    verifyFPLLabel(FLEXIPERSONALLOAN) {
        this.elements.lblFPL().should('have.text', FLEXIPERSONALLOAN)
    }

    clickFPLLabel() {
        this.elements.lblFPL().click({ timeout: 2000 })
    }

    verifyFPLKnowMoreLink() {
        this.elements.lnkFPLKnowMore()
    }

    verifyLinkFPLKnowMoreArrow() {
        this.elements.arrLinkFPLKnowMore()
    }

    verifyPLSalariedIcon() {
        this.elements.iconPLSalaried()
    }

    verifyPLSalariedBankTransferUptoLabel() {
        this.elements.lblPLSalariedBankTransferUpto()
    }

    verifyPLSalariedRupeeIcon() {
        this.elements.iconPLSalariedRupee()
    }

    verifyPLSalariedValue() {
        this.elements.valPLSalaried()
    }

    verifyPLSalariedTenureUptoText() {
        this.elements.txtPLSalariedTenureUpto()
    }

    verifyPLSalariedLabel(PERSONALLOANSALARIED) {
        this.elements.lblPLSalaried().should('have.text', PERSONALLOANSALARIED)
    }

    verifyPLSalariedKnowMoreLink() {
        this.elements.lnkPLSalariedKnowMore()
    }

    verifyLinkPLSalariedKnowMoreArrow() {
        this.elements.arrLinkPLSalariedKnowMore()
    }

    verifyPurchaseLoanIcon() {
        this.elements.iconPurchaseLoan()
    }

    verifypurchaseOnEMILabel() {
        this.elements.lblEVoucherUpto()
    }

    verifyPurchaseLoanRupeeIcon() {
        this.elements.iconPurchaseLoanRupee()
    }

    verifyPurchaseLoanValue() {
        this.elements.valPurchaseLoan()
    }

    verifyPurchaseLoanTenureUptoText() {
        this.elements.txtPurchaseLoanTenureUpto()
    }

    verifyPurchaseLoanLabel(PURCHASELOAN) {
        this.elements.lblPurchaseLoan().should('have.text', PURCHASELOAN)
    }

    verifyPurchaseLoanKnowMoreLink() {
        this.elements.lnkPurchaseLoanKnowMore()
    }

    verifyLinkPurchaseLoanKnowMore() {
        this.elements.arrLinkPurchaseLoanKnowmore()
    }

    verifyCheckEligibilityButton() {
        this.elements.btnCheckEligibility().should('be.visible')
    }

    clickCheckEligibilityButton() {
        this.elements.btnCheckEligibility().click()
    }

    verifyContinueApplicationButton(ContinueApplication) {
        this.elements.btnContinueApplication().should('have.text', ContinueApplication)
    }

    clickContinueApplicationButton() {
        this.elements.btnContinueApplication().click({ force: true })
    }
}

export const applicationStatusPage = new ApplicationStatusPage()