/// <reference types = "cypress" />

export class SettingsPage {

    details = {
        zeplin: () => 'https://zpl.io/O0q1oEP',
        zeplin_variation: () => 'https://zpl.io/B19ZjAK',
        overflow: () => '', //TODO : overflow Link
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.containers.Bsettings.header"]'),
        //Help section
        iconHelp: () => cy.get('.sc-bxivhb').eq(0),
        txtHelp: () => cy.get('[data-cy="app.components.BSettings.help_text"]'),
        lnkHelp: () => cy.get('[data-cy="featureTabImg1_0"]'),
        //About Us
        iconAboutUs: () => cy.get('.sc-bxivhb').eq(1),
        txtAboutUs: () => cy.get('[data-cy="app.components.BSettings.about_us_text"]'),
        lnkAboutUs: () => cy.get('[data-cy="featureTabImg1_1"]'),
        //change email
        iconChangeEmail: () => cy.get('.sc-bxivhb').eq(5),
        txtChangeEmail: () => cy.get('[data-cy="app.components.BSettings.change_email_text"]'),
        lnkChangeEmail: () => cy.get('[]'),
        //24K GOld
        icon24KGold: () => cy.get('.sc-bxivhb').eq(7),
        txt24KGold: () => cy.get('[data-cy="app.components.BSettings.24k_Gold"]'),
        lblInvestNow: () => cy.get('[]'),
        lnk24KGold: () => cy.get('[]'),
        //Credit Score
        iconCreditScore: () => cy.get('.sc-bxivhb').eq(9),
        txtCreditScore: () => cy.get('[]'),
        lblGetDiscount: () => cy.get('[]'),
        lnkCreditScore: () => cy.get('[]'),
        //Legal 
        iconLegal: () => cy.get('img'),
        txtLegal: () => cy.get('[data-cy="app.components.BSettings.legal_text"]'),
        lnkLegal: () => cy.get('[data-cy="featureTabImg1_5"]'),
        //GrevanceRedressalPolicy
        iconGrevanceRedressalPolicy: () => cy.get('[data-cy="featureTabImg0_6"]'),
        txtGrevanceRedressalPolicy: () => cy.get('[data-cy="app.components.Store.grp_text"]'),
        lnkGrevanceRedressalPolicy: () => cy.get('[data-cy="featureTabImg1_6"]'),
        //LendingPartners
        iconLendingPartners: () => cy.get('img'),
        txtLendingPartners: () => cy.get('[data-cy="app.components.Store.partners_text"]'),
        lnkLendingPartners: () => cy.get('[data-cy="featureTabImg1_7"]'),
        //App version
        iconAppVersion: () => cy.get('img'),
        txtAppVersion: () => cy.get('[data-cy="app.components.BSettings.app_version_text"]'),
        txtAppVersionNumber: () => cy.get('[]'),
        // Change Language
        iconChangeLanguage: () => cy.get('img'),
        txtChangeLanguage: () => cy.get('[data-cy="app.components.Common.change_lang_text"]'),
        lnkChangeLanguage: () => cy.get('[data-cy="featureTabImg1_9"]'),
        //Delete Account
        iconDeleteAccount: () => cy.get('img'),
        txtDeleteAccount: () => cy.get('[data-cy="app.components.BSettings.deactivate_account_text"]'),
        //Logout
        iconLogout: () => cy.get('img'),
        txtLogout: () => cy.get('[data-cy="app.components.BSettings.logout_text"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    //Help section
    verifyHelpIcon(iconHelp) {
        this.elements.iconHelp().should('have.attr', 'src', iconHelp)
    }

    verifyHelpText(txtHelp) {
        this.elements.txtHelp().should('have.text', txtHelp)
    }

    clickHelpBtn() {
        this.elements.lnkHelp().click()
    }

    //About Us
    verifyAboutUsIcon(iconAboutUs) {
        this.elements.iconAboutUs().should('have.attr', 'src', iconAboutUs)
    }

    verifyAboutUsText(txtAboutUs) {
        this.elements.txtAboutUs().should('have.text', txtAboutUs)
    }

    clickAboutUsBtn() {
        this.elements.lnkAboutUs().click()
    }
    //change email
    verifyChangeEmailIcon(iconChangeEmail) {
        this.elements.iconChangeEmail().should('have.attr', 'src', iconChangeEmail)
    }

    verifyChangeEmailText(txtChangeEmail) {
        this.elements.txtChangeEmail().should('have.text', txtChangeEmail)
    }

    clickChangeEmailBtn() {
        this.elements.lnkChangeEmail().click()
    }

    //24K GOld
    verify24KGoldIcon(icon24KGold) {
        this.elements.icon24KGold().should('have.attr', 'src', icon24KGold)
    }

    verify24KGoldText(txt24KGold) {
        this.elements.txt24KGold().should('have.text', txt24KGold)
    }
    verify24kGoldNotExist(){
        this.elements.txt24KGold().should('not.exist')
    }
    verifyInvestNowLabel(lblInvestNow) {
        this.elements.lblInvestNow().should('have.text', lblInvestNow)
    }

    click24KGoldBtn() {
        this.elements.lnk24KGold().click()
    }

    //Credit Score
    verifyCreditScoreIcon(iconCreditScore) {
        this.elements.iconCreditScore().should('have.attr', 'src', iconCreditScore)
    }

    verifyCreditScoreText(txtCreditScore) {
        this.elements.txtCreditScore().should('have.text', txtCreditScore)
    }

    verifyGetDiscountLabel(lblGetDiscount) {
        this.elements.lblGetDiscount().should('have.text', lblGetDiscount)
    }

    clickCreditsScoreBtn() {
        this.elements.lnkCreditScore().click()
    }

    //Legal 
    verifyLegalIcon(iconLegal) {
        this.elements.iconLegal().should('have.attr', 'src', iconLegal)
    }

    verifyLegalText(txtLegal) {
        this.elements.txtLegal().should('have.text', txtLegal)
    }

    clickLegalBtn() {
        this.elements.lnkLegal().click()
    }

    //GrevanceRedressalPolicy
    verifyGrevanceRedressalPolicyIcon(iconGrevanceRedressalPolicy) {
        this.elements.iconGrevanceRedressalPolicy().should('have.attr', 'src', iconGrevanceRedressalPolicy)
    }

    verifyGrevanceRedressalPolicyText(txtGrevanceRedressalPolicy) {
        this.elements.txtGrevanceRedressalPolicy().should('have.text', txtGrevanceRedressalPolicy)
    }

    clickGrevanceRedressalPolicyBtn() {
        this.elements.lnkGrevanceRedressalPolicy().click()
    }

    //LendingPartners
    verifyLendingPartnersIcon(iconLendingPartners) {
        this.elements.iconLendingPartners().should('have.attr', 'src', iconLendingPartners)
    }

    verifyLendingPartnersText(txtLendingPartners) {
        this.elements.txtLendingPartners().should('have.text', txtLendingPartners)
    }

    clickLendingPartnersBtn() {
        this.elements.lnkLendingPartners().click()
    }

    //App version
    verifyAppVersionIcon(iconAppVersion) {
        this.elements.iconAppVersion().should('have.attr', 'src', iconAppVersion)
    }

    verifyAppVersionText(txtAppVersion) {
        this.elements.txtAppVersion().should('have.text', txtAppVersion)
    }

    verifyAppVersionNumber(txtAppVersionNumber) {
        this.elements.txtAppVersionNumber().should('have.text', txtAppVersionNumber)
    }

    // Change Language
    verifyChangeLanguageIcon(iconChangeLanguage) {
        this.elements.iconChangeLanguage().should('have.attr', iconChangeLanguage)
    }

    verifyChangeLanguageText(txtChangeLanguage) {
        this.elements.txtChangeLanguage().should('have.text', txtChangeLanguage)
    }

    clickChangeLanguageBtn() {
        this.elements.lnkChangeLanguage().click()
    }

    //Delete Account
    verifyDeleteAccountIcon(iconDeleteAccount) {
        this.elements.iconDeleteAccount().should('have.attr', 'src', iconDeleteAccount)
    }

    verifyDeleteAccountText(txtDeleteAccount) {
        this.elements.txtDeleteAccount().should('have.text', txtDeleteAccount)
    }

    clickDeleteAccountBtn() {
        this.elements.txtDeleteAccount().click()
    }

    //Logout
    verifyLogoutIcon(iconLogout) {
        this.elements.iconLogout().should('have.attr', 'src', iconLogout)
    }

    verifyLogoutText(txtLogout) {
        this.elements.txtLogout().should('have.text', txtLogout)
    }

    clickLogoutBtn() {
        this.elements.txtLogout().click()
    }

    clickChangeEmailText(){
        this.elements.txtChangeEmail().click()
    }

}

export const settingsPage = new SettingsPage()