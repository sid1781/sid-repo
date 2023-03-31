/// <reference types = "cypress" />

export class PaymentHistoryPage {

    details = {
        zeplin: () => 'https://zpl.io/Q0LGRKm',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.RepaymentScreen.payment_history"]').eq(0),
        lblInsurancePremiumRefund: () => cy.get('[data-cy="repHistorytxnMode_undefined"]').eq(0),
        valInsurancePremiumRefund: () => cy.get('[data-cy="repHistoryAmountTxn"]').eq(0),
        
    }

    verifyPageTitle(pagetitle){
        this.elements.pageTitle().should('have.text', pagetitle)
    }

    verifyInsurancePremiumRefundedLabel(label){
        this.elements.lblInsurancePremiumRefund().should('have.text', label)
    }

    verifyInsurancePremiumRefundedValue(value){
        this.elements.valInsurancePremiumRefund().should('have.text', value)
    }
}

export const paymentHistoryPage = new PaymentHistoryPage