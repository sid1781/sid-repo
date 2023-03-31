/// <reference types = "cypress" />

export class PDVerifyingDetailsPage {

    details = {
        zeplin: () => 'https://zpl.io/V4jd8dJ',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        iconVerifyingDetails: () => cy.get('.skins__UnlockedImg-sc-1xw0zye-88 flLZel'),
        pageTitle: () => cy.contains('Verifying details'),
        subTextOfVerifyingDetails: () => cy.contains('We are verifying the provided information.'),
        btnOK: () => cy.get('[data-cy="app.components.Common.ok_btn_uc"]'),
        btnRefresh : () => cy.contains('button','REFRESH '),
    }

    verifyPageTitle(){
        this.elements.pageTitle().should('be.visible')
    }
    verifySubTextOfVerifyingDetails(subtext) {
        this.elements.subTextOfVerifyingDetails().should('be.visible')
    }
    verifyVerifyingDetailsImg(img) {
        this.elements.iconVerifyingDetails().should('have.attr','src').should('include',img)
    }
    verifyOKBtn(button){
        this.elements.btnOK().should('contain.text',button)
    }
    clickOKButton(){
        this.elements.btnOK().click()
    }
    verifyRefreshButton(){
        this.elements.btnRefresh().should('be.visible')
    }
}

export const pdVerifyingDetailsPage = new PDVerifyingDetailsPage()