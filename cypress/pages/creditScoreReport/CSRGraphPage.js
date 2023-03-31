///<reference types="cypress" />

export class CSRGraphPage{

    details = {
        zeplin : () => '',
        overflow : () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2&prototype',
    }

    elements ={
    
        //Header
        lnkBack:()=>cy.get('[data-cy="goBackBtn"]'),
        pageTittle:()=>cy.get('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
        iconHelp:()=>cy.get('[data-cy="helpImg"]'),


        //Your Score Remain changed
        txtReaminCahnge:()=>cy.get('[data-cy="app.components.CreditScore.csr_unchange_tag"]'),

        //percentage of the webpage


        
        txtOntimePayments:()=>cy.get('[]'),
        valOntimePaymentsPercentge:()=>cy.get('[]'),
        txtCreditUsage:()=>cy.get('[]'),
        valCreditUsage:()=>cy.get('[]'),
        txtOldestAccountAge:()=>cy.get('[]'),
        valOldestAccountAge:()=>cy.get('[]'),
        txtNumberOfAccounts:()=>cy.get('[]'),
        valNumberOfAccounts:()=>cy.get('[]'),

         //descrtiption
        iconDescription:()=>cy.get('[]'),
        txtDescription:()=>cy.get('[]'),

    }
      clickBackButton(){
        this.elements.lnkBack().click()

      }
      verifyPageTittle(txt){
        this.elements.pageTittle().should('have.text',txt)
      }
      


}
export const csrGraphPage=new CSRGraphPage;