export class KnowAboutProductPage {

    details = {
        zeplin: () => '',//TODO: Zeplin Link
        overflow_onboarding_Phase2_75: () => 'https://overflow.io/s/UCDTKU1H/?node=e576c778'
    }

    elements = {
        // Welcome Section
        pageTitle: () => cy.get('[data-cy="app.components.MobileSignin.welcome_to_txt"]'),
        iconKreditBee: () => cy.get('img'),
        iconBackground: () => cy.get('div'),
        lblGetInstantPersonalLoanUpto: () => cy.get('[data-cy="app.components.MobileSignin.get_personal_upto"]').contains('Get instant Personal Loan upto '),
        txtPersonalLoanAmountRupees: () => cy.get('[data-cy="max_loan_amount"]'),

        // Personal Loan - Salaried
        lblPLSalaried: () => cy.get('.sc-gPEVay').first(),
        txtPLSalariedUpto: () => cy.get('.sc-jDwBTQ').first(),
        valPLSalaried: () => cy.get('[data-cy="300000"]'),
        iconPLSalaried: () => cy.get('.sc-hMqMXs').first(),
        lnkPLSalariedKnowmore: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_know_more"]'),
        subTextPLSalariedTenureUpto: () => cy.get('[data-cy="nHPTenureUpto"]').first(),

        // Flexi Personal Loan
        lblFPL: () => cy.get('[data-cy="app.components.NewHomePage.flexi_personal_loan_text"]'),
        txtFPLUpto: () => cy.get('[data-cy="app.components.NewHomePage.nhp_upto_text"]'),
        valFPL: () => cy.get('[data-cy="50000"]'),
        iconFPL: () => cy.get('.sc-hMqMXs').eq(1),
        lnkFPLKnowmore: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_know_more"]').eq(1),
        subTxtFPLTenureUpto: () => cy.get('[data-cy="nHPTenureUpto"]').eq(1),

        // Purchase Loan
        lblPurchaseLoan: () => cy.get('[data-cy="app.components.NewHomePage.checkout_purchase_loan_text"]'),
        txtPurchaseLoanUpto: () => cy.get('[data-cy="app.components.NewHomePage.nhp_upto_text"]').eq(2),
        valPurchaseLoanAmount: () => cy.get('[data-cy="100000"]'),
        iconPurchaseLoan: () => cy.get('.sc-hMqMXs').eq(2),
        lnkPurchaseLoanKnowmore: () => cy.get('[data-cy="app.components.NewHomePage.nhp_pdt_item_btn_know_more"]').eq(2),
        subTxtPurchaseLoanTenureUpto: () => cy.get('[data-cy="nHPTenureUpto"]').eq(2),

        // VAS Section
        iconCreditReport: () => cy.get('[data-cy="csr_img"]'),
        txtCreditReport: () => cy.get('[data-cy="csr_productName"]'),
        icon24kGold: () => cy.get('[data-cy="gold_img"]'),
        txt24kGold: () => cy.get('[data-cy="gold_productName"]'),
        iconMyExpenses: () => cy.get('[data-cy="em_img"]'),
        txtMyExpenses: () => cy.get('[data-cy="em_productName"]'),
        btnLoginOrSignupWithMobile: () => cy.get('[data-cy="app.components.MobileSignin.login_message"]'),
    }
    //NOTE: There was a bulk Edit In Element Locators Please Make Respective Changes in Methods.
    // pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    }
    // iconKreditBee
    verifyKreditBeeIcon() {
        this.elements.iconKreditBee()
            .should('have.attr', 'alt').should('include', 'brand-logo')
    }
    // iconBackground
    verifyBackgroundIcon() {
        this.elements.iconBackground().should('have.css', 'background-image')
    }
    // lblGetInstantPersonalLoanUpto
    verifyGetInstantPersonalLoanUpto(instantTenureUpto) {
        this.elements.lblGetInstantPersonalLoanUpto().should('contain.text', instantTenureUpto)
    }
    //TODO methods
    // txtPersonalLoanAmountRupees
    verifyLoanAmountRupees(amtrupees) {
        this.elements.txtPersonalLoanAmountRupees().should('contains.text', amtrupees)
    }

    // Personal Loan - Salaried
    // lblPLSalaried 
    verifyPLSalariedLabel(plsalaried) {
        this.elements.lblPLSalaried().should('contain.text', plsalaried)
    }
    // txtPLSalariedUpto 
    verifyPLSalariedUptoText(plsalariedupto) {
        this.elements.txtPLSalariedUpto().should('contain.text', plsalariedupto)
    }
    // valPLSalaried 
    verifyPLSalariedValue(valSalaried) {
        this.elements.valPLSalaried().should('be.visible')
    }
    // iconPLSalaried 
    verifyPLSalariedIcon() {
        this.elements.iconPLSalaried().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/Login/ic-wallet.svg')
    }
    // lnkPLSalariedKnowmore 
    verifyPLSalariedKnowmoreLink(knowmoreLinktext) {
        this.elements.lnkPLSalariedKnowmore().should('contain.text', knowmoreLinktext)
    }

    clickPLSalariedKnowmoreLink() {
        this.elements.lnkPLSalariedKnowmore().click()
    }
    // subTextPLSalariedTenureUpto 
    verifyPLSalariedTenureUptoSubText(plsalariedtenure) {
        this.elements.subTextPLSalariedTenureUpto().should('contain.text', plsalariedtenure)
    }
    // Flexi Personal Loan
    // lblFPL 
    verifyFPLLabel(fplloan) {
        this.elements.lblFPL().should('contain.text', fplloan)
    }
    // txtFPLUpto 
    verifyFPLUptoText(fplupto) {
        this.elements.txtFPLUpto().should('contain.text', fplupto)
    }
    // valFPL 
    verifyFPLValue(valFPL) {
        this.elements.valFPL().should('contain.text', valFPL)
    }
    // iconFPL 
    verifyFPLIcon() {
        this.elements.iconFPL().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/Login/ic-wallet.svg')
    }
    // lnkFPLKnowmore 
    verifyFPLKnowmoreLink(knowmorefplLinktext) {
        this.elements.lnkFPLKnowmore().should('contain.text', knowmorefplLinktext)
    }

    clickFPLFPLKnowmoreLink() {
        this.elements.lnkFPLKnowmore().click()
    }
    // subTxtFPLTenureUpto 
    verifyFPLTenureUptoSubText(FPLtenure) {
        this.elements.subTxtFPLTenureUpto().should('contain.text', FPLtenure)
    }
    // Purchase Loan
    // lblPurchaseLoan 
    verifyPurchaseLoanLabel(Purchaseloan) {
        this.elements.lblPurchaseLoan().should('contain.text', Purchaseloan)
    }
    // txtPurchaseLoanUpto 
    verifyPurchaseLoanUptoText(purchaseLoanUpto) {
        this.elements.txtPurchaseLoanUpto().should('contain.text', purchaseLoanUpto)
    }
    // valPurchaseLoanAmount 
    verifyPurchaseLoanAmountValue(valPurchaseLoanAmount) {
        this.elements.valPurchaseLoanAmount().should('have.text', valPurchaseLoanAmount)
    }
    // iconPurchaseLoan 
    verifyPurchaseLoanIcon() {
        this.elements.iconPurchaseLoan().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/Login/ic-cart.svg')
    }
    // lnkPurchaseLoanKnowmore 
    verifyPurchaseLoanKnowmoreLink(knowmorePurchaseLoanLinktext) {
        this.elements.lnkPurchaseLoanKnowmore().should('contain.text', knowmorePurchaseLoanLinktext)
    }

    clickPurchaseLoanKnowmoreLink() {
        this.elements.lnkPurchaseLoanKnowmore().click()
    }
    // subTxtPurchaseLoanTenureUpto 
    verifyPurchaseLoanTenureUptoSubText(PurchaseLoantenure) {
        this.elements.subTxtPurchaseLoanTenureUpto().should('contain.text', PurchaseLoantenure)
    }
    // VAS Section
    // iconCreditReport 
    verifyCreditReportIcon() {
        this.elements.iconCreditReport().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/misc/ic_credit_report.svg')
    }
    // txtCreditReport 
    verifyCreditReportText(creditReport) {
        this.elements.txtCreditReport().should('have.text', creditReport)
    }

    clickCreditReportBtn() {
        this.elements.txtCreditReport().click()
    }
    // icon24kGold
    verify24kGoldIcon() {
        this.elements.icon24kGold().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/24kGold/ic_24KGold_gold-home2.svg')
    }
    // txt24kGold 
    verify24kGoldText(twentyfourKgold) {
        this.elements.txt24kGold().should('have.text', twentyfourKgold)
    }

    click24kGoldBtn() {
        this.elements.txt24kGold().click()
    }
    // iconMyExpenses 
    verifyMyExpensesIcon() {
        this.elements.iconMyExpenses().should('have.attr', 'src', 'https://ik.imagekit.io/kreditbee/app-static/expense_manager/ic-my-expenses2.svg')
    }
    // txtMyExpenses 
    verifyMyExpensesText(myExpenses) {
        this.elements.txtMyExpenses().should('contain.text', myExpenses)
    }

    clickMyExpensesBtn() {
        this.elements.txtMyExpenses().click()
    }
    // btnLoginOrSignupWithMobile 

    verifyLoginOrSignupWithMobileText(loginorsignuptext) {
        this.elements.btnLoginOrSignupWithMobile().should('have.text', loginorsignuptext)
    }

    clickLoginOrSignupWithMobileBtn() {
        this.elements.btnLoginOrSignupWithMobile().click()
    }

    verifyLoginFlow(config, twentyfourKgold) {
        if (config == 0) {
            this.elements.txt24kGold().should('not.exist')
            cy.get('[data-cy="app.components.MobileSignin.pdt_know_more"]')
                .and('not.exist') //no link
        } else if (config == 1) {
            cy.get('[data-cy="app.components.MobileSignin.pdt_know_more"]')
                .should('have.text', 'Know more about our products') // Link
            this.elements.txt24kGold().should('not.exist')
        }
        else {
            this.verify24kGoldText(twentyfourKgold) // new flow 
        }
    }
}

export const knowAboutProductPage = new KnowAboutProductPage()
