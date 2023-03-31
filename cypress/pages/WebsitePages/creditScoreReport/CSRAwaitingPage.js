///<reference types="cypress" />

export class CSRAwaitingPage{

    details = {
        zeplin : () => 'https://zpl.io/O0gWx3Y',
        overflow : () => '',
    }

    elements = {
        pageTitle : () => cy.get('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
        imgWaiting : () => cy.get('[]'),
        lblAwaitingReport: () => cy.get('[data-cy="app.components.CreditScore.ks_pending_title"]'),
        txtAwaitingMessage:()=>cy.get('[data-cy="app.components.CreditScore.ks_pending_desc"]'),
        btnRefresh:()=>cy.get('[data-cy="app.components.Common.refresh_btn_caps"]'),
    }

    verifyPageTitle(pageTitle){
        this.elements.pageTitle().should('contain.text',pageTitle)
    }
    verifyAwaitingReportLabel(Text){
        this.elements.lblAwaitingReport().should('contain.text',Text)
    }
    verifyAwaitingMessageText(awaitingmessage){
        this.elements.txtAwaitingMessage().should('contain.text',awaitingmessage)
    }
    verifyRefreshButton(refresh){
        this.elements.btnRefresh().should('contain.text',refresh)
    }
    clickRefreshButton(){
        this.elements.btnRefresh().click()
    }

}

export const  csrAwaitingPage = new CSRAwaitingPage