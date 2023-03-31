/// <reference types = "cypress" />

export class EmailVerifyingDetailsPage {

    details = {
        zeplin: () => '',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        iconPageTitle:()=>cy.get('[data-cy="image"]'),
        PageTitle:()=>cy.get('[data-cy="app.components.extraDetails.verify_your_details"]'),
        subtxtVerifyingDetails:()=>cy.get('[data-cy="app.components.extraDetails.verify_work_email_details_desc"]'),
        btnRefresh:()=>cy.get('[data-cy="app.components.extraDetails.refresh"]')
    }   

    verifyPageTitleIcon(img) {
        this.elements.iconPageTitle().should('have.attr','src').should('include',img)
    }
    verifyPageTitleText(){
        this.elements.PageTitle().should('be.visible')
    }
    verifySubTextOfVerifyingDetails(subtext) {
        this.elements.subtxtVerifyingDetails().should('contain.text',subtext)
    }
    verifyRefreshbtn(){
        this.elements.btnRefresh().should('be.visible')
    }
    clickRefreshBtn(){
        this.elements.btnRefresh().click()
    }

}

export const emailVerifyingDetailsPage = new EmailVerifyingDetailsPage