///<reference types="cypress" />

export class CSRAnalysisPage{

    details = {
        zeplin : () => 'https://zpl.io/mDzDyxA',
        overflow : () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2',
    }

    elements = {
        pageTitle : () => cy.get('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
        btnDownloadCreditReport:()=>cy.get('[data-cy="app.components.CreditScore.ks_download_pdf_btn"]'),
        btnDownloadLatestCreditReport:()=>cy.get('[data-cy="app.components.CreditScore.csr_regen_button"]'),
        iconrefreshScore:()=>cy.get('[]'),
        txtrefreshSckore:()=>cy.get('[]'),
        TxtOnTimePayments : () => cy.get('[]'),
        valOnTimePayments : () => cy.get('[]'),
        TxtCreditUsage : () => cy.get('[]'),
        valCreditUsage : () => cy.get('[]'),
        TxtOldestAccountAge : () => cy.get('[]'),
        valOldestAccountAge : () => cy.get('[]'),
        TxtNumberOfAccounts : () => cy.get('[]'),
        valNumberOfAccounts : () => cy.get('[]'),
        iconCreditReport : () => cy.get('[]'),
        TxtCreditReport : () => cy.get('[]'),
        txtCreditStatus: () => cy.get('[data-cy="app.components.CreditScore.ks_credit_status_text"]'),
         //comparing csr report
         iconComparingPriviousReport:()=>cy.get('[data-cy="icon_app.components.CreditScore.compare_with_prev_report"]'),
         lblComparingPriviousReport:()=>cy.get('[data-cy="app.components.CreditScore.compare_with_prev_report"]'),
         lnkComparingPriviousReport:()=>cy.get('[data-cy="right-icon"]'),
 
         //CSR Accounts and History
         iconAccountsAndHistory:()=>cy.get('[data-cy="icon_app.components.CreditScore.credit_account_and_history"]'),
         lblAccountsAndHistory:()=>cy.get('[data-cy="app.components.CreditScore.credit_account_and_history"]'),
         lnkAccountsAndHistory:()=>cy.get('[data-cy="right-icon"]'),
         
         //CSR payments and history
         iconPaymentsHistory:()=>cy.get('[data-cy="icon_app.components.CreditScore.credit_payment_history"]'),
         lblCreditPaymentsHistory:()=>cy.get('[data-cy="app.components.CreditScore.credit_payment_history"]'),
         lnkPaymentsHistory:()=>cy.get('[data-cy="right-icon"]'),
         
         // CSR checking your credits
         iconCheckCreditsEnquires:()=>cy.get('[data-cy="icon_app.components.CreditScore.check_your_credit_enquiry"]'),
         lblCheckCreditsEnquires:()=>cy.get('[data-cy="app.components.CreditScore.check_your_credit_enquiry"]'),
         lnkCheckCreditsEnquires:()=>cy.get('[data-cy="right-icon"]'),
         
         //CSR credit Key Factors
         txtCreditfactor:()=>cy.get('[data-cy="app.components.CreditScore.credit_key_factors"]'),
        lblCSRComparingPriviousReport:()=>cy.get('[data-cy="app.components.CreditScore.csr_status_change"]'),
        text30DaysEnquiry: () => cy.get('[data-cy="app.components.CreditScore.ks_no_of_accounts"]'),
        val30DaysEnquiry: () => cy.get('[data-cy="value_4"]')
    }
    verifyPageTitle(){
        this.elements.pageTitle().should('be.visible')
    }
    verifyOnTimePaymentsText(){
        this.elements.TxtOnTimePayments.should('be.visible')
    }
    verifyOnTimePaymentsValue (){
        this.elements.valOnTimePayments().should('be.visible')
    }
    verifyCreditUsageText(){
        this.elements.TxtCreditReport().should('be.visible')
    }
    verifyCreditUsageValue(){
        this.elements.valCreditUsage().should('be.visible')
    }
    verifyOldestAccountAgeText(){
        this.elements.TxtOldestAccountAge().should('be.visible')
    } 
    verifyOldestAccountAgeValue(){
        this.elements.valOldestAccountAge().should('be.visible')
    }
    verifyNumberOfAccountsText(){
        this.elements.TxtNumberOfAccounts().should('be.visible')
    } 
    verifyNumberOfAccountsValue(){
        this.elements.valNumberOfAccounts().should('be.visible')
    }
    verifyCreditReportIcon(){
        this.elements.iconCreditReport().should('be.visible')
    }
    verifyCreditReportText(){
        this.elements.TxtCreditReport().should('be.visible')
    }
    clickdownloadCreditReportButton(){
        this.elements.btnDownloadCreditReport().click({force:true})
    }
    verifyCreditStatusText(text){
        this.elements.txtCreditStatus().should('have.text',text)
    }
     clickCSRComparingPriviousReportLabel(){
        this.elements.lblCSRComparingPriviousReport().click()
     }
     clickDownloadLatestCreditReportButton(){
        this.elements.btnDownloadLatestCreditReport().click()
     }
     //methods i am created 15
    
    verifyComparingPriviousReport(){
        this.elements.lblComparingPriviousReport().should('be.visible')
    }
     clickComparingPriviousReport(){
        this.elements.lblComparingPriviousReport().click({force:true})
     }
     clickCreditPaymentsHistory(){
        this.elements.lblCreditPaymentsHistory().click({force:true})
     }
     
     verify30DaysEnquiryText(txt){
        this.elements.text30DaysEnquiry().should('have.text',txt)
     }
     click30DaysEnquiry(){
        this.elements.text30DaysEnquiry().click()
     }
     verifyCrediAccountAndHistory(){
        this.elements.lblAccountsAndHistory().should('be.visible')
     }
     clickCreditAccountAndHistory(){
        this.elements.lblAccountsAndHistory().click()
     }
     verifyCreditPaymentHistory(){
        this.elements.lblCreditPaymentsHistory().should('be.visible')
     }
     clickPaymentsHistory(){
        this.elements.lblCreditPaymentsHistory().click()
     }

     verifyCheckCreditsEnquires(){
        this.elements.lblCheckCreditsEnquires().should('be.visible')
     }
     clickCheckCreditsEnquires(){
        this.elements.lblCheckCreditsEnquires().click()
     }
}

export const  csrAnalysisPage = new CSRAnalysisPage