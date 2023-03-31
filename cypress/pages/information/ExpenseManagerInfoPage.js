class ExpenseManagerInfoPage {

    details = {
        zeplin: () => '', // TODO: Zeplin Link
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=e576c778',
    }

    elements = {
        pageTitle: () => cy.contains('span', 'KreditBee Expense Manager'),
        imgExpenseManager: () => cy.get('img').eq(1),
        subTxtDescription: () => cy.contains('span', 'KreditBee Expense Manager lets you track your income, expenses, bank account balances, credit card usage and loan repayments. '),
        iconExpenseTracking: () => cy.get('img').eq(2),
        txtExpenseTracking: () => cy.contains('p', 'Month-on-month expense tracking '),
        iconAutomaticCategorization: () => cy.get('img').eq(3),
        txtAutomaticCategorization: () => cy.contains('p', 'Automatic categorization'),
        iconKnowAccountBalance: () => cy.get('img').eq(4),
        txtKnowAccountBalances: () => cy.contains('p', 'Know your account balances'),
        iconFreeToUse: () => cy.get('img').eq(5),
        txtFreeToUse: () => cy.contains('p', 'Completely free to use!'),
        btnLoginWithMobile: () => cy.get('button'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyExpenseManagerImage(imgExpenseManager) {
        this.elements.imgExpenseManager().should('have.attr', 'src', imgExpenseManager)
    }

    verifyDescriptionSubText(desc) {
        this.elements.subTxtDescription().should('have.text', desc)
    }

    verifyExpenseTrackingIcon(iconExpenseTracking) {
        this.elements.iconExpenseTracking().should('have.attr', 'src', iconExpenseTracking)
    }

    verifyExpenseTrackingText(txtExpenseTracking) {
        this.elements.txtExpenseTracking().should('have.text', txtExpenseTracking)
    }

    verifyAutomaticCategorizationIcon(iconAutomaticCategorization) {
        this.elements.iconAutomaticCategorization().should('have.attr', 'src', iconAutomaticCategorization)
    }

    verifyAutomaticCategorizationText(txtAutomaticCategorization) {
        this.elements.txtAutomaticCategorization().should('have.text', txtAutomaticCategorization)
    }

    verifyKnowAccountBalanceIcon(iconKnowAccountBalance) {
        this.elements.iconKnowAccountBalance().should('have.attr', 'src', iconKnowAccountBalance)
    }

    verifyKnowAccountBalancesText(txtKnowAccountBalances) {
        this.elements.txtKnowAccountBalances().should('have.text', txtKnowAccountBalances)
    }

    verifyFreeToUseIcon(iconFreeToUse) {
        this.elements.iconFreeToUse().should('have.attr', 'src', iconFreeToUse)
    }

    verifyFreeToUseText(txtFreeToUse) {
        this.elements.txtFreeToUse().should('have.text', txtFreeToUse)
    }

    verifyLoginWithMobileText(loginWithMobileText) {
        this.elements.btnLoginWithMobile().should('have.text', loginWithMobileText)
    }

    clickLoginWithMobileBtn() {
        this.elements.btnLoginWithMobile().click()
    }

}
export const expenseManagerInfoPage = new ExpenseManagerInfoPage()
