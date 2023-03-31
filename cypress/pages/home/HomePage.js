/// <reference types = "cypress" />
export class HomePage {
    details = {
        zeplin: () => 'https://zpl.io/3XZXj0x',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=e40e434b',
    }

    elements = {
        /**
        TODO - Dev need to proivde data-cy for GET NOW for FPL, SA, E-Comm 
        WORKAROUND - As of now we are using index i.e (0) to locate the element 
        */
        lblBankTransferUpto: () => cy.get('[data-cy="app.components.NewHomePage.nhp_upto_text"]'),
        lblPersonalLoanSalariedForRejectedUser: () => cy.get('[data-cy="app.components.NewHomePagepersonal_loan_salaried_text"]'),
        lblPersonalLoanSalaried: () => cy.get('[data-cy="app.components.NewHomePage.personal_loan_salaried_text"]'),
        iconPersonalLoanSalaried: () => cy.get('[]'),
        valPersonalLoanSalaried: () => cy.get('[]'),
        lblHigherTenureLowerChargesAndInterest: () => cy.get('[]'),
        btnApplyNow: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_apply_now"]'),
        //rejected user                     
        lblFPLRejected: () => cy.get('[data-cy="app.components.NewHomePageflexi_personal_loan_text"]'),
        lblPersonalLoanSalaried: () => cy.get('[data-cy="app.components.NewHomePage.personal_loan_salaried_text"]'),
        iconPersonalLoanSalaried: () => cy.get('[]'),
        valPersonalLoanSalaried: () => cy.get('[]'),
        lnkHigherTenureLowerChargesAndInterest: () => cy.get('[data-cy="app.components.NewHomePage.higher_tenure"]'),
        btnApplyNow: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_apply_now"]'),
        lblFlexiPersonalLoan: () => cy.get('[data-cy="app.components.NewHomePage.flexi_personal_loan_text"]'),
        lblrejectedHomepage_FlexiPersonalLoan: () => cy.get('[data-cy="app.components.NewHomePageflexi_personal_loan_text"'),
        iconFlexiPersonalLoan: () => cy.get('[]'),
        valFlexiPersonalLoan: () => cy.get('[]'),
        btnFpl8KGetNow: () => cy.get('[data-cy="app.components.NewHomePage.flexi_personal_loan_text"]', { timeout: 9000 }).parent('div').children('button'),
        btnGetNow: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]', { timeout: 7000 }),
        txtTenureUptoMonths: () => cy.get('[data-cy="nHPTenureUpto"]'),
        lblPurchaseOnEMI: () => cy.get('[]'),
        lblPurchaseLoan: () => cy.get('[data-cy="app.components.NewHomePagecheckout_purchase_loan_text"]'),
        iconPurchaseLoan: () => cy.get('[]'),
        valPurchaseLoan: () => cy.get('[]'),
        btnPurchaseLoanGetnow: () => cy.get('[]'),  /*when we create method it will be used as clickPurchaseLoanGetNowBtn */
        lblHigherLinitLowerCharges: () => cy.get('[]'),
        txtCompleteKYCviaVideoCall: () => cy.get('[]'),
        lnkCompleteKYCviaVideoCall: () => cy.get('[]'),
        subTxtCompleteKYCviaVideoCall: () => cy.get('[]'),
        iconInsurance: () => cy.get('[data-cy="insurance_img"]', { timeout: 9000 }),
        lblInsurance: () => cy.get('[]'),          /*tab -- when we click insurance, it is navigating to other page so used the tab */
        iconCreditReport: () => cy.get('[data-cy="csr_img"]'),
        lblCreditReport: () => cy.get('[data-cy="csr_title"]'),
        iconRefer: () => cy.get('[data-cy="refer_img"]'),
        lblRefer: () => cy.get('[data-cy="refer_title"]'),
        lblInsurance: () => cy.get('[data-cy="insurance_title"]'),          /*tab -- when we click insurance, it is navigating to other page so used the tab */
        iconCreditReportWeb: () => cy.get('[data-cy="csr"]'),
        lblCreditReport: () => cy.get('[data-cy="csr_title"]'),
        iconGold: () => cy.get('[data-cy="gold_img"]'),
        lblDgitalGold: () => cy.get('[]'),
        iconCreditLimitAndDiscount: () => cy.get('[]'),
        txtCreditLimitAndDiscount: () => cy.get('[data-cy="app.components.BloanHome.discover_pf"]'),
        txtIncreaseYourCreditAndReducePricingForYourLoans: () => cy.get('[]'),
        txtKnowMore: () => cy.get('[]'),
        lnkKnowMore: () => cy.get('[]'),
        btnContinueApplication: () => cy.get('[data-cy="app.components.NewHomePage.continue_app_btn_text"]', { timeout: 12000 }),

        //Adding blocks
        block1: () => cy.get('[data-cy="itemHandlePdt"]'),
        block2: () => cy.get('[data-cy="item_1"]'),
        //PAYNOW block
        iconLoanActive: () => cy.get('[]'),
        txtLoanActiveCount: () => cy.get('[data-cy="activeLoanTitle_activeLoanCount"]'),
        txtLoanActive: () => cy.get('[data-cy="activeLoanDesc_activeLoanCount"]'),
        iconOverdueLoans: () => cy.contains('div', 'https://ik.imagekit.io/kreditbee/app-static/icons/C/ic-cal-tenure2.svg'),
        txtOverdueLoan: () => cy.get('[data-cy="activeLoanTitle_overDueCount"]'),
        txtOverdueCount: () => cy.get('[data-cy="activeLoanDesc_overDueCount"]'),
        txtNextDueDate: () => cy.get('[data-cy="nextDueTitle"]'),
        txtDueDate: () => cy.get('[data-cy="nextDueDesc"]'),
        btnPayNow: () => cy.get('[data-cy="app.components.NewHomePage.pay_now"]', { timeout: 5000 }),
        //State rejected Warning Block
        iconUnableToProcessLoan: () => cy.get('[data-cy="img_app.components.NewHomePage.user_rejection_label"]'),
        txtUnableToProcessLoan: () => cy.get('[data-cy="label_app.components.NewHomePage.user_rejection_label"]'),
        btnPersonalLoanSalariedGetNow: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]'),
        iconMyAccount: () => cy.get('[data-cy="app.components.NewHomePage.nhppdt_page_icon_acc"]'),
        imgBanners: () => cy.get('[data-cy="offerBannerImg_0"]'),
        lblReverifyIncome: () => cy.get('[data-cy="app.components.BloanHome.reverify_banner_title"]'),
        cardReverifyIncome: () => cy.get('[data-cy="reVerifycBanner"]'),
        btnLocked: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_locked"]'),
        btnVerifyingApplication: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_pending"]'),
        txtCongratulation: () => cy.contains('span', 'Congratulations'),
        iconVKYC: () => cy.get('[data-cy="vkycBannerImg"]'),
        lblCKYC: () => cy.get('[data-cy="app.components.BloanHome.vKyc_banner_title"]'),
        subtxtVKYC: () => cy.get('[data-cy="vkycBannerDesc"]'),
        lnkCVKYC: () => cy.get('[data-cy="vkycBannerArrow"]'),
        btnActivateNow: () => cy.get('[data-cy="app.components.NewHomePage.activate_now_text"]'),
        txtprocessing: () => cy.get('[data-cy="app.components.NewHomePage.processing_text"]'),

        //Profile Rejected user
        lblWarning: () => cy.get('[data-cy="label_app.components.NewHomePage.application_retry_after"]'),
        txtQueries: () => cy.get('[data-cy="app.components.NewHomePage.reach_us_out"]'),
        txtKnowMoreFPL: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_know_more"]').eq(0),
        txtKnowMoreSA: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_know_more"]').eq(1),
        txtKnowMorePL: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_know_more"]').eq(2),

        //Ewa
        btnWithdraw:()=>cy.get('[data-cy="withdraw"]'),

        //PurchaseLoan
        btnLocked:()=>cy.get('[data-cy="lockedBtn"]').eq(3),
        valPurchaseLoan:()=>cy.get('[data-cy="60000"]')

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


    clickActiveNowButton() {
        this.elements.btnActivateNow().click()
    }
    verifyProcessingText(text) {
        this.elements.txtprocessing().should('contain', text)
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
    verifyContinueApplicationText(btnContinueApplication) {
        this.elements.btnContinueApplication().should('have.text', btnContinueApplication)
    }

    clickContinueApplicationBtn() {
        this.elements.btnContinueApplication().click()
    }
    clickBlock1Btn() {
        this.elements.block1().find('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]').click()
    }
    clickBlock2Btn() {
        this.elements.block2().find('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_getnow"]').click()
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
    verifyPayNowDisabled() {
        this.elements.btnPayNow().should('not.exist')
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
    verifyFPLForRejectedUser(txt) {
        this.elements.lblFPLRejected().should('have.text', txt)
    }
    verifyFPLLabel(txt) {
        this.elements.lblFlexiPersonalLoan().should('have.text', txt)
    }
    verifyPersonalLoanForRejectedUserLabel(txt) {
        this.elements.lblPersonalLoanSalariedForRejectedUser().should('have.text', txt)
    }
    verifyPersonalLoanLabel(txt) {
        this.elements.lblPersonalLoanSalaried().should('have.text', txt)
    }
    verifyPurchaseLoan(txt) {
        this.elements.lblPurchaseLoan().should('have.text', txt)
    }
    verifyBankTransferUptoLabel(text) {
        this.elements.lblBankTransferUpto().eq(0).should('have.text', text)
    }
    verifyPersonalLoanSalaried(text) {
        this.elements.lblPersonalLoanSalaried().should('have.text', text)
    }
    verifyFlexiPersonalLoanLabel(text) {
        this.elements.lblFlexiPersonalLoan().should('have.text', text)
    }
    clickMyAccountIcon() {
        this.elements.iconMyAccount().click()
    }
    verifyReferLabel(text) {
        this.elements.lblRefer().should('have.text', text)
    }
    verifyReferIcon() {
        this.elements.iconRefer().should('be.visible')
    }
    clickReferLabel() {
        this.elements.lblRefer().click()
    }
    verifyCreditReportLabel(text) {
        this.elements.lblCreditReport().should('have.text', text)
    }
    verifyCreditReportIcon() {
        this.elements.iconCreditReport().should('be.visible')
    }
    clickOnBanners() {
        this.elements.imgBanners().eq(0).click()
    }
    clickCreditLimitAndDiscountText() {
        this.elements.txtCreditLimitAndDiscount().click()
    }
    verifyCreditLimitAndDiscountText() {
        this.elements.txtCreditLimitAndDiscount().should('be.visible')
    }
    clickcreditScoreIcon() {
        this.elements.iconCreditReport().click()
    }
    clickcreditScoreWebIcon() {
        this.elements.iconCreditReportWeb().click({force:true})
    }
    verifyCreditReportLabel(labeltext) {
        this.elements.lblCreditReport().should('have.text', labeltext)
    }

    clickCreditReportLabel() {
        this.elements.lblCreditReport().click()
    }

    clickPersonalLoanSalariedGetNowButton() {
        this.elements.btnPersonalLoanSalariedGetNow().eq(0).click()
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
        this.elements.btnLocked().eq(1).click()
    }

    verifyCongratulationText(text) {
        this.elements.txtCongratulation().should('have.text', text)
    }
    verifyVKYCText() {
        this.elements.lblCKYC().should('be.visible')
    }
    clickVKYC() {
        this.elements.lblCKYC().click({ force: true })
    }
    clickGetNowBtn() {
        this.elements.btnGetNow().click()
    }
    clickSA20KGetNowBtn() {
        this.elements.btnGetNow().should('be.visible').click()
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

    //Profile Rejected user
    //   lblWarning
    verifyWarningLabel(lblWarning) {
        this.elements.lblWarning().should('have.text', lblWarning)
    }
    //   txtQueries
    verifyQueriesText(txtQueries) {
        this.elements.txtQueries().should('have.text', txtQueries)
    }
    //   txtKnowMoreFPL
    verifyKnowmoreFPL(txtKnowMoreFPL) {
        this.elements.txtKnowMoreFPL().should('have.text', txtKnowMoreFPL)
    }
    //   txtKnowMoreSA
    verifyKnowmoreSA(txtKnowMoreSA) {
        this.elements.txtKnowMoreSA().should('have.text', txtKnowMoreSA)
    }
    //   txtKnowMorePL
    verifyKnowmorePL(txtKnowMorePL) {
        this.elements.txtKnowMorePL().should('have.text', txtKnowMorePL)
    }
    // verifyNextDueDateRedText() {
    //     this.elements.txtNextDueDate().should('have.css', 'color','rgb(238, 82, 113)')
    // }
    verifyNextDueDateRedText(color) {
        this.elements.txtNextDueDate().should('have.css', 'color', color)
    }

    //EWA
    clickWithdrawEWAButton(){
        this.elements.btnWithdraw().click()
    }
    //PurcahseLoan
    clickLockedButton(){
        this.elements.btnLocked().click()
    }
    verifylockedButton(locked){
        this.elements.btnLocked().should('contain',locked)
    }
    verifyPurchaseLoanValue(value){
        this.elements.valPurchaseLoan().should('contain',value)
    }
}

export const homePage = new HomePage()