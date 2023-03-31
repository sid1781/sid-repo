/// <reference types = "cypress" />

export class BusinessDetailsGSTRUploadSucess {

    details = {
        zeplin: () => 'https://zpl.io/noNBx5x',
        overflow: () => 'https://overflow.io/s/3ih4jz6j/?node=b7e5d24f&prototype',
    }

    elements = {
        iconGSTRSucess: () => cy.get('[]'),
        txtGSTRVerificationSucess: () => cy.get('[]'),
        btnOk: () => cy.get('[]')
    }

    verifyGSTRSucessIcon() {
        this.elements.iconGSTRSucess().should('be.visible')
    }

    verifyGSTRVerificationSucessText(SucessText) {
        this.elements.txtGSTRVerificationSucess().should('have.text', SucessText)
    }

    verifyOkButton(ok) {
        this.elements.btnOk().should('have.text', ok)
    }

    clickOkButton() {
        this.elements.btnOk().click()
    }
}

export const businessDetailsGSTRUploadSucess = new BusinessDetailsGSTRUploadSucess()