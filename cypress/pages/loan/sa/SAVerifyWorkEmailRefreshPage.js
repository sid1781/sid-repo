
/// <reference types = "cypress" />

export class SAVerifyWorkEmailRefreshPage {

    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        iconVerifyingDetails: () => cy.get('img').should('have.attr','scr','https://ik.imagekit.io/kreditbee/app-static/common/ic_hourglass.svg'),
        pageTitle: () => cy.get('[data-cy="app.components.EmploymentSummary.verify_emp_details"]'),
        subTextOfVerifyingDetails: () => cy.get('[data-cy="app.components.EmploymentSummary.verify_details_desc"]'),
        btnRefresh : () => cy.get('[data-cy="buttonTxt"]'),
    }

    verifyPageTitle(txt){
        this.elements.pageTitle().should('have.text',txt)
    }
    verifySubTextOfVerifyingDetails(subtext) {
        this.elements.subTextOfVerifyingDetails().should('have.text',subtext)
    }
    verifyVerifyingDetailsImg() {
        this.elements.iconVerifyingDetails().should('be.visible')
    }
    verifyRefreshButton(button){
        this.elements.btnRefresh().should('have.text',button)
    }
    clickRefreshButton(){
        this.elements.btnRefresh().click()
    }
}

export const saVerifyWorkEmailRefreshPage = new SAVerifyWorkEmailRefreshPage()