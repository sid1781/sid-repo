///<reference types="cypress" />

export class CSRNumberAccountsPage {

    details = {
        zeplin : () => 'https://zpl.io/L4p4xo6',
        overflow : () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2',
    }

    elements = {
        pageTitle : () => cy.get('[]'),
        lblNumberOfAccounts : () => cy.get('[]'),
        valNumberOfAccounts : () => cy.get('[]'),
        iconCreditCards : () => cy.get('[]'),
        lblCreditCards : () => cy.get('[]'),
        iconHouseLoan : () => cy.get('[]'),
        lblHouseLoan : () => cy.get('[]'),
        iconAutoLoan : () => cy.get('[]'),
        lblAutoLoan : () => cy.get('[]'),
        iconOtherLoans : () => cy.get('[]'),
        lblStatus : () => cy.get('[]'),
        lblLowImpact : () => cy.get('[]'),
        valActiveAccounts : () => cy.get('[]'),
        lblActiveAccounts : () => cy.get('[]'),
        valInactiveAccounts : () => cy.get('[]'),
        lblInactiveAccounts : () => cy.get('[]'),
        lnkviewAll : () => cy.get('[]'),
        iconKrazybeeServicePvtLtd : () => cy.get('[]'),
        lblKrazybeeServicePvtLtd : () => cy.get('[]'),
        lnkKrazybeeServicePvtLtd : () => cy.get('[]'),
        lblConsumerLoan : () => cy.get('[]'),
        iconAmazonPayICICI : () => cy.get('[]'),
        lblAmazonPayICICI  : () => cy.get('[]'),
        lnkAmazonPayICICI  : () => cy.get('[]'),
        lblCreditCard : () => cy.get('[]'),
    }
    verifyPageTitle(pagetitle){
        this.elements.pageTitle().should('have.text', pagetitle)    
    }
        verifyNumberOfAccountsLabel(){
            this.elements.lblNumberOfAccounts().should('be.visible')
        }
        verifyNumberOfAccountsValue(){
            this.elements.valNumberOfAccounts().should('be.visible')
        } 
        verifyCreditCardsIcon(){
            this.elements.iconCreditCards().should('be.visible')
        }
        verifyCreditCardsLabel(){
            this.elements.lblCreditCards().should('be.visible')
        }
        verifyHouseLoanIcon(){
            this.elements.iconHouseLoan().should('be.visible')
        }
        verifyHouseLoanLabel(){
            this.elements.lblHouseLoan().should('be.visible')
        } 
        verifyAutoLoanIcon(){
            this.elements.iconAutoLoan().should('be.visible')
        }
        verifyAutoLoanLabel(){

        }
        verifyOtherLoansIcon(){
            this.elements.iconOtherLoans().should('be.visible')
        }
        verifyStatusLabel(){
            this.elements.lblStatus().should('be.visible')
        }
        verifyLowImpactLabel(){
            this.elements.lblLowImpact().should('be.visible')
        }  
        verifyActiveAccountsValue(){
            this.elements.valActiveAccounts().should('be.visible')
        } 
        verifyActiveAccountsLabel(){
            this.elements.lblActiveAccounts().should('be.visible')
        }  
        verifyInactiveAccountsValue(){
            this.elements.valInactiveAccounts().should('be.visible')
        } 
        verifyInactiveAccountsLabel(){
            this.elements.lblInactiveAccounts().should('be.visible')
        }  
        clickViewAllLink(){
            this.elements.lnkviewAll().click()
        } 
        verifyKrazybeeServicePvtLtdIcon(){
            this.elements.iconKrazybeeServicePvtLtd().should('be.visible')
        }
        verifyKrazybeeServicePvtLtdLabelLabel(){
            this.elements.lblKrazybeeServicePvtLtd().should('be.visible')
        }  
        clickKrazybeeServicePvtLtdLink(){
            this.elements.lnkKrazybeeServicePvtLtd().should('be.visible')
        } 
        verifyConsumerLoanLabel(){
            this.elements.lblConsumerLoan().should('be.visible')
        }  
        verifyAmazonPayICICIIcon(){
            this.elements.iconAmazonPayICICI().should('be.visible')
        } 
        verifyAmazonPayICICILabel(){
            this.elements.lblAmazonPayICICI().should('be.visible')
        }   
        clickAmazonPayICICIIcon(){
            this.elements.iconAmazonPayICICI().should('be.visible')
        }  
        verifyCreditCardLabel(){
            this.elements.lblCreditCard().should('be.visible')
        }  
}

export const  csrNumberAccountsPage = new CSRNumberAccountsPage()