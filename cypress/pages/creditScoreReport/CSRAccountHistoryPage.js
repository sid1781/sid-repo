///<reference types="cypress" />

import { thistle } from "color-name";

export class CSRAccountHistoryPage{

    details = {
        zeplin : () => '',
        overflow : () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2&prototype',
    }

    elements ={
        //Header
        backButton  :  ()  =>  cy.get  ('[data-cy="goBackBtn"]'),
        pageTittle :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
        iconHelp:  ()  =>  cy.get ('[]'),

        //Number Of accounts
        txtNumberOfAccounts :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.number_of_accounts_for_accounts_history"]'),
        valNUmberOfAccounts :  ()  =>  cy.get ('[]'),
        imgCreditCards :  ()  =>  cy.get ('[]'),
        valCreditCards :  ()  =>  cy.get ('[]'),
        txtCreditCards :  ()  =>  cy.get ('[data-cy="account_type_Credit Cards"]'),
        imgHouseLoan :  ()  =>  cy.get ('[]'),
        valHouseLoan :  ()  =>  cy.get ('[]'),
        txtHouseLoan :  ()  =>  cy.get ('[data-cy="account_type_Housing Loans"]'),
        imgPersonalLoan :  ()  =>  cy.get ('[]'),
        valPersonalLoan :  ()  =>  cy.get ('[]'),
        txtPersonalLoan :  ()  =>  cy.get ('[data-cy="account_type_Personal Loans"]'),
        imgOtherLoan :  ()  =>  cy.get ('[]'),
        valOtherLoans :  ()  =>  cy.get ('[]'),
        TxtOtherLoans :  ()  =>  cy.get ('[data-cy="account_type_Other Loans"]'),

        //status Report
        txtStatus :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.status"]'),
        txtStatusImapct :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.low_impact"]'),
        valtActiveAccounts :  ()  =>  cy.get ('[data-cy="6"]'),
        txtActiveAccounts :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.active_accounts"]'),
        valInactiveAccounts :  ()  =>  cy.get ('[data-cy="12"]'),
        txtInactiveAccounts :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.inactiveAccounts"]'),


        //Active Accounts
        txtActiveAccounts :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.active_accounts"]').eq(1),
        lblActiveAccountViewAll :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.view_all"]').eq(0).first('span','View all'),


        //accounts 
        iconBank :  ()  =>  cy.get ('[]'),
        lblFedaralBankname :  ()  =>  cy.get ('[data-cy="active_account_name"]'),
        //subtxtFedaralBank :  ()  =>  cy.contains('Federal Bank Ltd.'),
        subtxtFedaralBank :  ()  =>  cy.get ('[data-cy="active_account_type"]'),
        valMonths :  ()  =>  cy.get ('[data-cy="active_account_age"]'),
        lnkBankAccounts :  ()  =>  cy.get ('[data-cy="active_icon-right"]'),
        
        //KisetsuSaisonFinance
        iconBankKisetsuSaisonFinance :  ()  =>  cy.get ('[]'),
        lblKisetsuSaisonFinance :  ()  =>  cy.get ('[]'),
        subtxtKisetsuSaisonFinance :  ()  =>  cy.get ('[]'),
        valMonths :  ()  =>  cy.get ('[]'),
        lnkKisetsuSaisonFinance :  ()  =>  cy.get ('[]]'),
        
        //SBI Cards and Payment Services Ltd
        iconSBICardsAndPayment :  ()  =>  cy.get ('[]'),
        lblSBICardsAndPayment :  ()  =>  cy.get ('[data-cy="active_account_name"]').eq(2),
        subtxtSBICardsAndPayment :  ()  =>  cy.get ('[data-cy="active_account_type"]'),
        valMonths :  ()  =>  cy.get ('[]'),
        lnkSBICardsAndPayment :  ()  =>  cy.get ('[]]'),

       //InActive cases
       txtInactiveAccounts  :  ()  =>  cy.get  ('[data-cy="app.components.CreditScore.inactiveAccounts"]').eq(1),
       lblInActiveAccountViewAll :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.active_accounts"]').first('span','View all')
    }

     clickBackButton(){
        this.elements.backButton().click()
     }
     verifyPageTitle(txt){
        this.elements.pageTittle().should('have.text',txt)
     }
     clickHelpIcon(){
        this.elements.iconHelp().click()
     }



     verifyNumberOfAccounts(){
        this.elements.txtNumberOfAccounts().should('be.visible')
     }
     verifyCreditCardstext(){
        this.elements.txtCreditCards().should('be.visible')
     }
     verifyHousingLoansText(){
        this.elements.txtHouseLoan().should('be.visible')
     }
     verifyPersonalLoansText(){
        this.elements.txtPersonalLoan().should('be.visible')
     }
     verifyOtherLoansText(){
        this.elements.TxtOtherLoans().should('be.visible')
     }
    
    verifyStatusText(){
        this.elements.txtStatus().should('be.visible')
    }
    verifyStatusImapctText(txt){
        this.elements.txtStatusImapct().should('have.text',txt)
    }
    verifyActiveAccounts(){
        this.elements.txtActiveAccounts().should('be.visible')
    }
    clickActiveAccountViewAll(){
        this.elements.lblActiveAccountViewAll().click({force:true})
     }

    clickFedaralBankname(){
        this.elements.lblFedaralBankname().eq(0).click()  
      }

   clickSBICardsAndPayment(){
      this.elements.lblSBICardsAndPayment().click()
   }




    verifyInactiveAccounts(){
        this.elements.txtInactiveAccounts().should('be.visible')
    }
    clickInActiveAccountsViewAll(){
        this.elements.lblInActiveAccountViewAll().click()
    }






    

}
export const csrAccountHistoryPage=new CSRAccountHistoryPage;