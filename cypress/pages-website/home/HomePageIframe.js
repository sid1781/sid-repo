/// <reference types = "cypress" />
export class HomePageIframe {
    details = {
        zeplin: () => 'https://zpl.io/3XZXj0x',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=e40e434b',
    }

    elements = {
        /**
        TODO - Dev need to proivde data-cy for GET NOW for FPL, SA, E-Comm 
        WORKAROUND - As of now we are using index i.e (0) to locate the element 
        */
        lblBankTransferUpto: () => cy.getIframeBody().find('[data-cy="app.components.NewHomePage.nhp_upto_text"]'),
        lblPersonalLoanSalaried: () => cy.getIframeBody().find('[data-cy="sa-pl"]'),
        iconPersonalLoanSalaried: () => cy.getIframeBody().find('[]'),
        valPersonalLoanSalaried: () => cy.getIframeBody().find('[]'),
        lnkHigherTenureLowerChargesAndInterest: () => cy.getIframeBody().find('[data-cy="app.components.NewHomePage.higher_tenure"]'),
        btnApplyNow: () => cy.getIframeBody().find('[data-cy="applyNow"]'),
        lblFlexiPersonalLoan: () => cy.getIframeBody().find('[data-cy="app.components.NewHomePage.flexi_personal_loan_text"]'),
        lblrejectedHomepage_FlexiPersonalLoan: () => cy.getIframeBody().find('[data-cy="app.components.NewHomePageflexi_personal_loan_text"'),
        iconFlexiPersonalLoan: () => cy.getIframeBody().find('[]'),
        valFlexiPersonalLoan: () => cy.getIframeBody().find('[]'),
        btnFpl8KGetNow: () => cy.getIframeBody().find('[data-cy="app.components.NewHomePage.flexi_personal_loan_text"]', { timeout: 9000 }).parent('div').children('button'),
        btnGetNow: () => cy.getIframeBody().find('[data-cy="getNow"]', { timeout: 7000 }),
        txtTenureUptoMonths: () => cy.getIframeBody().find('[data-cy="nHPTenureUpto"]'),
        lblPurchaseOnEMI: () => cy.getIframeBody().find('[]'),
        lblPurchaseLoan: () => cy.getIframeBody().find('[]'),
        iconPurchaseLoan: () => cy.getIframeBody().find('[]'),
        valPurchaseLoan: () => cy.getIframeBody().find('[]'),
        btnPurchaseLoanGetnow: () => cy.getIframeBody().find('[]'),  /*when we create method it will be used as clickPurchaseLoanGetNowBtn */
        lblHigherLinitLowerCharges: () => cy.getIframeBody().find('[]'),
        txtCompleteKYCviaVideoCall: () => cy.getIframeBody().find('[]'),
        lnkCompleteKYCviaVideoCall: () => cy.getIframeBody().find('[]'),
        subTxtCompleteKYCviaVideoCall: () => cy.getIframeBody().find('[]'),
        iconInsurance: () => cy.getIframeBody().find('img', { timeout: 9000 }),
        lblInsurance: () => cy.getIframeBody().contains('Insurance'),          /*tab -- when we click insurance, it is navigating to other page so used the tab */
        iconCreditReport: () => cy.getIframeBody().find('[data-cy="csr"]', { timeout: 15000 }),
        lblCreditReport: () => cy.getIframeBody().find('[data-cy="csr_title"]'),
        iconRefer: () => cy.getIframeBody().find('[]'),
        lblRefer: () => cy.getIframeBody().find('[]'),
        iconGold: () => cy.getIframeBody().find('[data-cy="gold_img"]'),
        lblDgitalGold: () => cy.getIframeBody().find('[]'),
        iconCreditLimitAndDiscount: () => cy.getIframeBody().find('[]'),
        txtCreditLimitAndDiscount: () => cy.getIframeBody().contains('Credit Report'),
        txtIncreaseYourCreditAndReducePricingForYourLoans: () => cy.getIframeBody().find('[]'),
        txtKnowMore: () => cy.getIframeBody().find('[]'),
        lnkKnowMore: () => cy.getIframeBody().find('[]'),
        btnContinueApplication: () => cy.getIframeBody().find('[data-cy="app.components.NewHomePage.continue_app_btn_text"]', { timeout: 12000 }),

        //Adding blocks
        block1: () => cy.getIframeBody().find('[data-cy="itemHandlePdt"]'),
        block2: () => cy.getIframeBody().find('[data-cy="item_1"]'),
        blockFPLGetnow: () => cy.getIframeBody().find('[data-cy="getNow"]', { timeout: 8000 }),
        //PAYNOW block
        iconLoanActive: () => cy.getIframeBody().find('[]'),
        txtLoanActiveCount: () => cy.getIframeBody().find('[data-cy="activeLoanTitle_activeLoanCount"]'),
        txtLoanActive: () => cy.getIframeBody().find('[data-cy="activeLoanDesc_activeLoanCount"]'),
        iconOverdueLoans: () => cy.contains('div', 'https://ik.imagekit.io/kreditbee/app-static/icons/C/ic-cal-tenure2.svg'),
        txtOverdueLoan: () => cy.getIframeBody().find('[data-cy="activeLoanTitle_overDueCount"]'),
        txtOverdueCount: () => cy.getIframeBody().find('[data-cy="activeLoanDesc_overDueCount"]'),
        txtNextDueDate: () => cy.getIframeBody().find('[data-cy="nextDueTitle"]'),
        txtDueDate: () => cy.getIframeBody().find('[data-cy="nextDueDesc"]'),
        btnPayNow: () => cy.getIframeBody().find('[data-cy="repayNow"]'),
        //State rejected Warning Block
        iconUnableToProcessLoan: () => cy.getIframeBody().find('[data-cy="img_app.components.NewHomePage.user_rejection_label"]'),
        txtUnableToProcessLoan: () => cy.getIframeBody().contains('We are unable to process your loan at this time either due to certain anomalies in your profile or due to bad repayment behaviour.'),
        lblReverifyIncome: () => cy.getIframeBody().find('[data-cy="app.components.BloanHome.reverify_banner_title"]'),
        cardReverifyIncome: () => cy.getIframeBody().find('[data-cy="reVerifycBanner"]'),
        btnLocked: () => cy.getIframeBody().find('[data-cy="lockedBtn"]', { timeout: 8000 }),
        btnVerifyingApplication: () => cy.getIframeBody().find('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_pending"]'),
        btnSA20KGetNow: () => cy.getIframeBody().find('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]', { timeout: 9000 }).parent('div').children('button'),

        //SME block

        lblWorikingWithCaptialLoan: () => cy.getIframeBody().find('[data-cy="smeb"]', { timeout: 8000 }),
        amtForSME: () => cy.getIframeBody().find('[data-cy="10000"]', { timeout: 8000 }),
    }

    //lblFlexiPersonalLoan
    verifyFlexiPersonalLoanLabel(lblFlexiPersonalLoan) {
        this.elements.lblFlexiPersonalLoan().should('have.text', lblFlexiPersonalLoan)
    }

    verifyRejectedHomepage_FlexiPersonalLoanLabel(lblrejectedHomepage_FlexiPersonalLoan) {
        this.elements.lblrejectedHomepage_FlexiPersonalLoan().should('have.text', lblrejectedHomepage_FlexiPersonalLoan)
    }

    clickFPLGetNowBtn() {
        this.elements.btnFpl8KGetNow().should('be.visible').click()
    }
    clickFPL8KGetNow() {
        this.elements.btnFpl8KGetNow().should('be.visible').click()
    }
    clickIconInsurance() {
        this.elements.iconInsurance().click()
    }
    clickGoldIcon() {
        this.elements.iconGold().click()
    }
    verifyGoldIconDisabled() {
        this.elements.iconGold().should('not.exist');
    }
    verifyGoldIconVisible() {
        this.elements.iconGold().should('be.visible');
    }
    clickContinueApplicationBtn() {
        this.elements.btnContinueApplication().click()
    }
    clickBlock1Btn() {
        this.elements.block1().find('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]').click()
    }
    //SME
    verifyWorkingWithCaptialLoan(lblWorikingWithCaptialLoan) {
        this.elements.lblWorikingWithCaptialLoan().should('have.text', lblWorikingWithCaptialLoan)
    }

    verifyWorkingWithCaptialLoanRejectedProfile(lblWorikingWithCaptialLoan) {
        this.elements.lblWorikingWithCaptialLoan().should('not.exist', lblWorikingWithCaptialLoan)
    }

    verififyMaxLimitSME(amtForSME) {
        this.elements.amtForSME().should('have.text', amtForSME)
    }


    clickBlock2Btn() {
        this.elements.block2().find('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]').click()
    }

    clickBlockFPLGetNow() {
        this.elements.blockFPLGetnow().click()
    }

    //PAYNOW block
    // iconLoanActive
    verifyLoanActiveIcon(iconLoanActive) {
        this.elements.iconLoanActive().should('have.attr', 'src', iconLoanActive)
    }
    // txtLoanActiveCount
    verifyLoanActiveCountText(txtLoanActiveCount) {
        this.elements.txtLoanActiveCount().should('have.text', txtLoanActiveCount)
    }
    // txtLoanActive
    verifyLoanActiveText(txtLoanActive) {
        this.elements.txtLoanActive().should('have.text', txtLoanActive)
    }
    // iconOverdueLoans
    verifyOverdueLoanIcon(iconOverdueLoans) {
        this.elements.iconOverdueLoans().should('have.attr', 'src', iconOverdueLoans)
    }
    // txtOverdueLoan 
    verifyOverdueLoanText(txtOverdueLoan) {
        this.elements.txtOverdueLoan().should('have.text', txtOverdueLoan)
    }
    // txtOverdueCount 
    verifyOverdueCountText(txtOverdueLoan) {
        this.elements.txtOverdueCount().should('have.text', txtOverdueLoan)
    }
    // txtNextDueDate 
    verifyNextDueDateText(txtNextDueDate) {
        this.elements.txtNextDueDate().should('have.text', txtNextDueDate)
    }
    // txtDueDate 
    verifyDueDateText(txtDueDate) {
        this.elements.txtDueDate().should('have.text', txtDueDate)
    }
    // btnPayNow 
    verifyPayNowText(btnPayNow) {
        this.elements.btnPayNow().should('have.text', btnPayNow)
    }

    clickPayNowButton() {
        this.elements.btnPayNow().click()
    }

    // iconUnableToProcessLoan
    verifyUnableToProcessLoanIcon(iconUnableToProcessLoan) {
        this.elements.iconUnableToProcessLoan().should('have.attr', 'src', iconUnableToProcessLoan)
    }
    // txtUnableToProcessLoan
    verifyUnableToProcessLoanText(txtUnableToProcessLoan) {
        this.elements.txtUnableToProcessLoan().should('have.text', txtUnableToProcessLoan)
    }
    verifyCreditLimitAndDiscountText(creditlimitandDiscount) {
        this.elements.txtCreditLimitAndDiscount().should('have.text', creditlimitandDiscount)
    }
    clickCreditLimitAndDiscountText() {
        this.elements.txtCreditLimitAndDiscount().click()
    }
    clickcreditScoreIcon() {
        this.elements.iconCreditReport().eq(1).click()
    }
    verifyCreditReportLabel(labeltext) {
        this.elements.lblCreditReport().should('have.text', labeltext)
    }
    verifyBankTransferUptoLabel(txt) {
        this.elements.lblBankTransferUpto().eq(0).should('have.text', txt)
    }
    verifyPersonalLoanSalariedLabel(lblname) {
        this.elements.lblPersonalLoanSalaried().should('have.text', lblname)
    }
    verifyHigherTenureLowerChargesAndInterestLink(name) {
        this.elements.lnkHigherTenureLowerChargesAndInterest().should('have.text', name)
    }
    verifyApplyNowButton(btn) {
        this.elements.btnApplyNow().should('have.text', btn)
    }
    clickApplyNowBtn() {
        this.elements.btnApplyNow().click()
    }
    verifyLoanActiveTextNotVisible() {
        this.elements.txtLoanActive().should('not.exist')
    }
    verifyTenureUptoMonthsText(txt) {
        this.elements.txtTenureUptoMonths().eq(1).should('have.text', txt)
    }
    verifyTenureUptoMonthsTextforFPL(txt) {
        this.elements.txtTenureUptoMonths().eq(0).should('have.text', txt)
    }
    verifyReverifyIncomeCard() {
        this.elements.cardReverifyIncome().should('be.visible')
    }
    veifyReverifyIncomeCardNotVisible() {
        this.elements.cardReverifyIncome().should('not.exist')
    }
    verifyReverifyIncomeLabel(lbl) {
        this.elements.lblReverifyIncome().should('have.text', lbl)
    }
    verifyReverifyIncomeLabelNotVisible() {
        this.elements.lblReverifyIncome().should('not.exist')
    }
    verifyTenureUptoMonthsTextforSA(txt) {
        this.elements.txtTenureUptoMonths().eq(1).should('have.text', txt)
    }
    verifyGetNowBtn(btn) {
        this.elements.btnGetNow().should('have.text', btn)
    }
    verifylockedBtn() {
        this.elements.btnLocked().should('be.visible')
    }
    verifyGetNowBtnNotVisible() {
        this.elements.btnGetNow().should('not.exist')
    }
    verifyVerifyingApplicationBtnIsVisible() {
        this.elements.btnVerifyingApplication().should('be.visible')
    }
    clickVerifyingApplicationBtn() {
        this.elements.btnVerifyingApplication().click()
    }
    clickLockedBtn() {
        this.elements.btnLocked().click()
    }

    clickSA20KGetNowBtn() {
        this.elements.btnSA20KGetNow().should('be.visible').click()
    }
    verifyInsuranceLabelNotVisible() {
        this.elements.lblInsurance().should('not.exist')
    }
    verifyInsuranceIconNotVisible() {
        this.elements.iconInsurance().should('not.exist')
    }
    verifyInsuranceLabel(label) {
        this.elements.lblInsurance().should('have.text', label)
    }
    clickInsuranceLabel() {
        this.elements.lblInsurance().click()
    }
}

export const homePageIframe = new HomePageIframe()