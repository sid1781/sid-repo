/// <reference types = "cypress" />

export class ActiveLoanStatusWebPage {

    details = {
        zeplin_link: () => '',
        overflow_link: () => 'https://overflow.io/s/0XIF6E58/?node=2cf1bff8',
    }

    elements = {
        iconActiveLoan: () => cy.getIframeBody().find('img').first(),
        lblActiveLoan: () => cy.getIframeBody().find('[data-cy="title"]'),
        txtRepayLoan: () => cy.getIframeBody().find('[data-cy="bInfoDesc"]'),
        txtContactCustomerConsent: () => cy.getIframeBody().find('[data-cy="label_app.components.AccountDeletion.deactivate_blable_text"]'),
        btnOk: () => cy.getIframeBody().find('button'),
    }

    // iconActiveLoan 
    verifyActiveLoanIcon(iconActiveLoan) {
        this.elements.iconActiveLoan().should('have.attr', 'src', iconActiveLoan)
    }

    //lblActiveLoan
    verifyActiveLoanLabel(lblActiveLoan) {
        this.elements.lblActiveLoan().should('have.text', lblActiveLoan)
    }

    // lblRepayLoan 
    verifyRepayLoanText(txtRepayLoan) {
        this.elements.txtRepayLoan().should('have.text', txtRepayLoan)
    }
    // txtContactCustomerConsent 
    verifyContactCustomerConsentText(txtContactCustomerConsent) {
        this.elements.txtContactCustomerConsent().should('have.text', txtContactCustomerConsent)
    }
    // btnOk 
    verifyOKText(btnOk) {
        this.elements.btnOk().should('have.text', btnOk)
    }

    clickOkBtn() {
        this.elements.btnOk().click()
    }
}

export const activeLoanStatusWebPage = new ActiveLoanStatusWebPage()