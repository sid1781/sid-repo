/// <reference types = "cypress" />


export class SAApplicationSubmittedApprovalPage {

    details = {
        zeplin: () => '',
        overflow: () => '', //TODO Link
    }
    elements = {
        iconApplicationSubmitted : () => cy.get('[]'),
        lblApplicationSubmitted: () => cy.get('[data-cy="app.components.Bprofile.punder_ver_title"]'),
        infoApplicationSubmitted : () => cy.get('[data-cy="app.components.Bprofile.punder_ver_desc"]'),
        btnRefresh : () => cy.get('[data-cy="app.components.Common.refresh_btn_caps"]'),
    }
    verifyApplicationSubmittedLabel(txt){
        this.elements.lblApplicationSubmitted().should('have.text', txt)
    }
    verifyRefreshBtn(){
        this.elements.btnRefresh().should('be.visible')
    }

}

export const saApplicationSubmittedApprovalPage = new SAApplicationSubmittedApprovalPage()   