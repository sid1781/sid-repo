/// <reference types = "cypress" />

export class GoldOrderExpired {

    details = {
        zeplin: () => 'https://zpl.io/r1y0DOe',
        overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=1e4ba720',    
    }

    elements ={
        lblKreditBee : () => cy.get('[]'),
        iconKreditBee : () => cy.get('[data-cy="kreditbeeLogo"]'),
        lblOrderExpired : () => cy.get('[data-cy="app.components.DigitalGold.order_expired_header"]'),
        subTxtOrderExpired : () => cy.get('[data-cy="app.components.DigitalGold.order_expired_sub_header"]'),
        btnRetry : () => cy.get('[data-cy="orderExpire"]'),
    }
    verifyKreditBeeLabel(){
        this.elements.lblKreditBee().should('be.visible')
    }
    verifyKreditBeeIcon(){
        this.elements.iconKreditBee().should('be.visible')
    }
    verifyOrderExpiredLabel(orderexpr){
        this.elements.lblOrderExpired().should('have.text', orderexpr)
    }
    verifyOrderExpiredSubText(){
        this.elements.subTxtOrderExpired().should('be.visible')
    }
    clickRetryButton(){
        this.elements.btnRetry().click()
    }
    verifyRetryButton(btnretry){
        this.elements.btnRetry().should('have.text', btnretry)
    }
}

export const goldOrderExpired = new GoldOrderExpired()