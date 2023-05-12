/// <reference types = "cypress" />

export class PaymentOptionPage {
    elements = {
        pageTitle: () => cy.getIframeBody().find('[data-cy="app.components.SeamlessPG.payment_option_title"]', { wait: 8000 }).eq(0),
        btnPayWithDebitCard: () => cy.getIframeBody().find('[data-cy="payment_btn_0"]'),
        txtPayWithUPIOrQR: () => cy.getIframeBody().find('button'),
        btnPayWithQR:()=>cy.getIframeBody().contains('button','Pay with UPI/QR')
    }
    verifyTitlePaymentOptionPage(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    clickPayWithDebitCardButton() {
        this.elements.btnPayWithDebitCard().click()
    }

    verifyPayWithUPIOrQRText(txtPayWithUPIOrQR) {
        this.elements.txtPayWithUPIOrQR().should('have.text', txtPayWithUPIOrQR)
    }
    verifyPayWithUPIOrQRTextNotVisible(){
        this.elements.btnPayWithQR().should('not.exist')
    }
    clickPayWithUPIOrQRbutton(){
        this.elements.btnPayWithQR().click()
    }

}

export const paymentOptionPage = new PaymentOptionPage