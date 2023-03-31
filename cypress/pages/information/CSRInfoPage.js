/// <reference types = "cypress" />

class CSRInfoPage {

    details = {
        zeplin: () => '', // TODO: Zeplin Link
        overflow: () => '', // TODO: overFLow Link
    }

    elements = {
        pageTitle: () => cy.contains('span', 'Credit Score & Report'),
        imgCheckCreditScore: () => cy.get('img').eq(1),
        txtDescription: () => cy.contains('span', 'Instantly check your credit score using Kreditbee registered mobile no. and get comprehensive report on your credit/loan accounts with your credit score.'),
        iconGetBetterLoan: () => cy.get('img').eq(2),
        txtGetBetterLoan: () => cy.contains('p', 'Get better loan rates '),
        iconEyeOnCreditHealth: () => cy.get('img').eq(3),
        txtEyeOnCreditHealth: () => cy.contains('p', 'Keep an eye on your credit health'),
        iconViewKeyInsights: () => cy.get('img').eq(4),
        txtViewKeyInsights: () => cy.contains('p', 'View key insights'),
        iconImprovefinancialDecision: () => cy.get('img').eq(5),
        txtImprovefinancialDecision: () => cy.contains('p', 'Improve your financial decision'),
        btnLoginWithMobile: () => cy.get('button'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyCheckCreditScoreImage(imgCheckCreditScore) {
        this.elements.imgCheckCreditScore().should('have.attr', 'src', imgCheckCreditScore)
    }

    verifyDescriptionText(desc) {
        this.elements.txtDescription().should('have.text', desc)
    }

    verifyGetBetterLoanIcon(iconGetBetterLoan) {
        this.elements.iconGetBetterLoan().should('have.attr', 'src', iconGetBetterLoan)
    }

    verifyGetBetterLoanText(getBetterLoan) {
        this.elements.txtGetBetterLoan().should('have.text', getBetterLoan)
    }

    verifyEyeOnCreditHealthIcon(creditHealthIcon) {
        this.elements.iconEyeOnCreditHealth().should('have.attr', 'src', creditHealthIcon)
    }

    verifyEyeOnCreditHealthText(creditHealthText) {
        this.elements.txtEyeOnCreditHealth().should('have.text', creditHealthText)
    }

    verifyViewKeyInsightsIcon(viewKeyInsightsIcon) {
        this.elements.iconViewKeyInsights().should('have.attr', 'src', viewKeyInsightsIcon)
    }

    verifyViewKeyInsightsText(viewKeyInsightsText) {
        this.elements.txtViewKeyInsights().should('have.text', viewKeyInsightsText)
    }

    verifyImproveFinanctialDecisionIcon(impFinancialDecisionIcon) {
        this.elements.iconImprovefinancialDecision().should('have.attr', 'src', impFinancialDecisionIcon)
    }

    verifyImproveFinanctialDecisionText(impFinancialDecisionText) {
        this.elements.txtImprovefinancialDecision().should('have.text', impFinancialDecisionText)
    }

    verifyLoginWithMobileText(loginWithMobileText) {
        this.elements.btnLoginWithMobile().should('have.text', loginWithMobileText)
    }

    clickLoginWithMobileBtn() {
        this.elements.btnLoginWithMobile().click()
    }
}

export const csrInfoPage = new CSRInfoPage()