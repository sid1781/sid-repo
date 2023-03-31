/// <reference types = "cypress" />

export class ProfileStatusPage {

    details = {
        zeplin: () => '',//TODO - zeplin link 
        overflow: () => '', //TODO - overflow link 
    }

    elements = {
        iconWaiting: () => cy.get('[]'),
        pageTitle: () => cy.get('[data-cy="app.components.Bprofile.punder_ver_title"]'),
        txtNotifyUserBySMS: () => cy.get('[data-cy="app.components.Bprofile.punder_ver_desc"]'),
        btnRefresh: () => cy.get('[data-cy="app.components.Common.refresh_btn_caps"]'),
    }

    // iconWaiting
    verifyWaitingIcon() {
        this.elements.iconWaiting().find('img').should('be.visible')
    }
    // pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // txtNotifyUserBySMS
    verifyNotifyUserBySMSText(notifyDescription) {
        this.elements.txtNotifyUserBySMS().should('have.text', notifyDescription)
    }
    // btnRefresh
    clickRefreshBtn() {
        this.elements.btnRefresh().click()
    }

    verifyRefreshText(refersh) {
        this.elements.btnRefresh().should('have.text', refersh)
    }

}

export const profileStatusPage = new ProfileStatusPage()