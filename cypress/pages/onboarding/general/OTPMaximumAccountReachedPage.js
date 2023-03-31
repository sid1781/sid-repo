export class OTPMaximumAccountReached {

    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/62f5e77b7546cd6d57579a8d',
    }

    elements = {
        iconMaxreached: () => cy.get('[]'),
        lblMaximumAccountReached: () => cy.get('[]'),
        txtRetry: () => cy.get('[]'),
        btnOK: () => cy.get('[]')
    }

    // iconMaxreached
    verifyMaxreachedIcon() {
        this.elements.iconMaxreached().find('img').should('be.visible')
    }
    // lblMaximumAccountReached
    verifyMaximumAccountReachedLabel(maxreachedText) {
        this.elements.lblMaximumAccountReached().should('have.text', maxreachedText)
    }
    // txtRetry
    verifyRetryText(txtRetry) {
        this.elements.txtRetry().should('have.text', txtRetry)
    }
    // btnOK
    verifyOKText(textOK) {
        this.elements.btnOK().should('have.text', textOK)
    }

    clickOkBtn() {
        this.elements.btnOK().click()
    }
}

export const OTPMaximumAccountReached = new OTPMaximumAccountReached()