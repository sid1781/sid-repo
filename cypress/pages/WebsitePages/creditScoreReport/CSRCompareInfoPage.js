///<reference types="cypress" />

export class CSRCompareInfoPage{

    details = {
        zeplin : () => '',
        overflow : () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2&prototype',
    }

    elements ={
        lnkBackButton:()=>cy.get('[data-cy="goBackBtn"]'),
        pageTitile:()=>cy.get('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
        HelpIcon:()=>cy.get('[data-cy="helpImg"]'),

        imgEmptyBox:()=>cy.get('[id="es_noloan_state"]'),
        txtNoPriousReport:()=>cy.get('[data-cy="app.components.CreditScore.no_previous_report"]'),
        txtGetLatestReport:()=>cy.get('[data-cy="app.components.CreditScore.get_report_in_x_days"]'),

        btnGetLatestReport:()=>cy.get('[data-cy="app.components.CreditScore.csr_regen_button"]'),
        btnBack:()=>cy.get('[data-cy="app.components.CreditScore.back_button_text"]'),



    }
    clickBackButton(){
        this.elements.lnkBackButton().click({force:true})
    }
     verifyPageTitle(text){
        this.elements.pageTitile().should('have.text',text)
     }
     clickHelpIcon(){
        this.elements.HelpIcon().click({force:ture})
     }
     verifyImgEmaptyBox(){
        this.elements.imgEmptyBox().should('be.visible')
     }
     verifyNoPriviousReportText(text){
        this.elements.txtNoPriousReport().should('have.text',text)
     }
     verifyGetLatestReport(text){
        this.elements.txtGetLatestReport().should('have.text',text)
     }
     clickGetLatestReportButton(){
        this.elements.btnGetLatestReport().click({force:true})
     }
     clickBackButtonLink(){
        this.elements.btnBack().click()
     }




}
export const csrCompareInfoPage=new CSRCompareInfoPage;