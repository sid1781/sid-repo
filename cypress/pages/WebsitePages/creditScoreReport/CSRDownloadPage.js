///<reference types="cypress" />

export class CSRDownloadPage {

    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5e8b33c1e75119b93cab714c',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        txtPageTitle: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_download_pdf_btn"]'),
        txtCsrProfileDetails: () => cy.getIframeBody().find('[data-cy="label_app.components.CreditScore.ks_download_text_info"]'),
        imgDownloadCSR: () => cy.getIframeBody().find('[class="skins__BtnImg-smhxoy-23"]'),
        btnDownloadCSRReport: () => cy.getIframeBody().find('[data-cy="ksDownloadPdf"]'),
        imgEmailCreditReport: () => cy.getIframeBody().find('[class="skins__BtnImg-smhxoy-23"]'),
        btnEmailCreditReport: () => cy.getIframeBody().find('[data-cy="emailCreditReport"]'),
        subtxtDownloadCSR: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_email_info"]'),
        btnBackDownloadCSRReport: () => cy.getIframeBody().find('[data-cy="app.components.CreditScore.ks_email_info"]'),


    }
    clickDownloadCSRReportButton() {
        this.elements.btnDownloadCSRReport().click()
    }
    clickEmailCreditReportButton() {
        this.elements.btnEmailCreditReport().click()
    }


}
export const csrDownloadPage = new CSRDownloadPage;