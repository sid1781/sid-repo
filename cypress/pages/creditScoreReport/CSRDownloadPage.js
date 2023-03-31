///<reference types="cypress" />

export class CSRDownloadPage{

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5e8b33c1e75119b93cab714c',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
          txtPageTitle:()=>cy.get('[data-cy="app.components.CreditScore.ks_download_pdf_btn"]'),
          txtCsrProfileDetails:()=>cy.get('[data-cy="label_app.components.CreditScore.ks_download_text_info"]'),
          imgDownloadCSR:()=>cy.get('[class="skins__BtnImg-smhxoy-23"]'),
          btnDownloadCSRReport:()=>cy.get('[data-cy="ksDownloadPdf"]'),
          imgEmailCreditReport:()=>cy.get('[class="skins__BtnImg-smhxoy-23"]'),
          btnEmailCreditReport:()=>cy.get('[data-cy="app.components.CreditScore.ks_email_pdf_btn"]'),
          subtxtDownloadCSR:()=>cy.get('[data-cy="app.components.CreditScore.ks_email_info"]'),
          btnBackDownloadCSRReport:()=>cy.get('[data-cy="app.components.CreditScore.ks_email_info"]'),

          
    }
    clickDownloadCSRReportButton(){
        this.elements.btnDownloadCSRReport().click()
    }
    clickEmailCreditReportButton(){
        this.elements.btnEmailCreditReport().click()
    }

   
}
export const csrDownloadPage=new CSRDownloadPage;