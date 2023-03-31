
///<reference types="cypress" />

export class CSRCreditEnquiriesPage{

    details = {
        zeplin : () => 'https://zpl.io/mDzDyxA',
        overflow : () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2',
    }

    elements = {
                 //Header
                 backButton  :  ()  =>  cy.get  ('[data-cy="goBackBtn"]'),
                 pageTittle :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
                 iconHelp:  ()  =>  cy.get ('[data-cy="helpImg"]'),
                 
                 txtCreditEnquiries:()=>cy.get('[data-cy="app.components.CreditScore.credit_enquiries"]'),
                 lblLowImpact:()=>cy.get('[data-cy="app.components.CreditScore.low_impact"]'),
                 valLast30Days:()=>cy.get('[data-cy="0"]'),
                 valLast12Motnths:()=>cy.get('[data-cy="7"]'),
                 txtLast30Days:()=>cy.get('[data-cy="app.components.CreditScore.last_30_days"]'),
                 txtLast12Moths:()=>cy.get('[data-cy="app.components.CreditScore.last_12_months"]'),
        
                 //Last 12 months Enquiries
                 txt12MonthsEnquiries:()=>cy.get('[data-cy="app.components.CreditScore.last_Months_Credit_Enquiry"]'),
        
                 //Banks
                 iconHDFCBank:()=>cy.get('[]'),
                 txtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
        
                 iconHDFCBank:()=>cy.get('[]'),
                 txtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
        
                 iconHDFCBank:()=>cy.get('[]'),
                 txtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
                 
                 iconHDFCBank:()=>cy.get('[]'),
                 txtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
                 
                 iconHDFCBank:()=>cy.get('[]'),
                 txtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
        
                 iconIndusindBank:()=>cy.get('[]'),
                 txtIndusindBank:()=>cy.get('[]'),
                 subTxtIndusindBank:()=>cy.get('[]'),
                 subTxtIndusindBank:()=>cy.get('[]'),
        
                 
                 iconHDFCBank:()=>cy.get('[]'),
                 txtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
        
                 iconHDFCBank:()=>cy.get('[]'),
                 txtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
                 subTxtHDFCBank:()=>cy.get('[]'),
        
            }
            clickBackButton(){
                this.elements.backButton().click({force:stop})
            }
            verifyPageTittle(){
                this.elements.pageTittle().should('be.visible')
            }
            clickHeliIcon(){
                this.elements.iconHelp().click()
            }
            verifyCreditEnquiries(){
                this.elements.txtCreditEnquiries().should('be.visible')
            }
            verifyLowImpactText(){
                this.elements.lblLowImpact().should('be.visible')
            }
            verifyLast30DaysValue(){
                this.elements.txtLast30Days().should('be.visible')
            }
            verifyLast30DaysText(){
                this.elements.txtLast30Days().should('be.visible')
            }
            verifyLast12MonthsValue(){
                this.elements.valLast12Motnths().should('be.visible')
            }
            verifyLast12MonthsText(){
                this.elements.txt12MonthsEnquiries().should('be.visible')
            }
            verifyLast12MonthsEnquiries(){
                this.elements.txt12MonthsEnquiries().should('be.visible')
            }
        
        }
        
 

export const  csrCreditEnquiriesPage = new CSRCreditEnquiriesPage