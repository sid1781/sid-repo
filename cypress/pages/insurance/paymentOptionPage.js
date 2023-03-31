/// <reference types = "cypress" />

export class PaymentOptionPage{
    elements={
        pageTitle:()=>cy.get('[data-cy="app.components.SeamlessPG.payment_option_title"]',{timeout:8000}).eq(0).should('be.visible'),
        btnPayWithDebitCard:()=>cy.get('[data-cy="payment_btn_0"]')
    }
    verifyTitlePaymentOptionPage(title){
        this.elements.pageTitle().should('have.text',title)
    }
    clickPayWithDebitCardButton(){
        this.elements.btnPayWithDebitCard().click()
    }

}

export const paymentOptionPage = new PaymentOptionPage