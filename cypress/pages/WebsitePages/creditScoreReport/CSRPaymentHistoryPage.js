///<reference types="cypress" />

export class CSRPaymentHistoryPage{

    details = {
        zeplin : () => '',//ToDO
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        pageTitle : () => cy.get('[]'),           
        lblPaymentHistory : () => cy.get('[]'),
        lblLastUpdated : () => cy.get('[]'),
        valMissedPayment : () => cy.get('[]'),
        lblMissedPayment : () => cy.get('[]'),
        valMonthlyPayableAmount : () => cy.get('[]'),
        lblMonthlyPayableAmount : () => cy.get('[]'),
        lblPaymentTracker : () => cy.get('[]'),
        lblOnTimePayments : () => cy.get('[]'),
        lblDelayedPayments : () => cy.get('[]'),
        lblMissedPayments : () => cy.get('[]'),
        lnkViewAll : () => cy.get('[]'),
        iconBank : () => cy.get('[]'),
        lblPartnerName1 : () => cy.get('[]'),
        lblConsumerLoan : () => cy.get('[]'),
        lblLoanAmount : () => cy.get('[]'),
        lblMissed : () => cy.get('[]'),
        lblOnTimePayment : () => cy.get('[]'),
        lnkViewAll1 : () => cy.get('[]'),
        lblPaidOn : () => cy.get('[]'),
        lblDelayedPayment : () => cy.get('[]'),
    }
    verifyPageTitle(pagetitle){
        this.elements.pageTitle().should('have.text', pagetitle)
    }  
    verifyPaymentHistoryLabel(){
        this.elements.lblPaymentHistory().should('be.visible')
    } 
    verifyLastUpdated(){
        this.elements.lblLastUpdated().should('be.visible')
    }         
    verifyMissedPaymentValue(){
        this.elements.valMissedPayment().should('be.visible')
    }
    verifyMissedPaymentLabel(){
        this.elements.lblMissedPayment().should('be.visible')
    }
    verifyMonthlyPayableAmountValue(){
        this.elements.valMonthlyPayableAmount().should('be.visible')
    } 
    verifyMonthlyPayableAmountLabel(){
        this.elements.lblMonthlyPayableAmount().should('be.visible')
    } 
    verifypaymentTrackerLabel(){
        this.elements.lblPaymentHistory().should('be.visible')
    }
    verifyOnTimePayments(){
        this.elements.lblOnTimePayments().should('be.visible')
    }
    verifyDelayedPaymentsLabel(){
        this.elements.lblDelayedPayments().should('be.visible')
    } 
    verifyMissedPaymentsLabel(){
        this.elements.lblMissedPayments().should('be.visible')
    }
    clickViewAllLink(){
        this.elements.lnkViewAll().click()
    }
    verifyBankIcon(){
        this.elements.iconBank().should('be.visible')
    }
    verifyPartnerName1Label(){
        this.elements.lblPartnerName1().should('be.visible')
    } 
    verifyConsumerLoanLabel(){
        this.elements.lblConsumerLoan().should('be.visible')
    } 
    verifyLoanAmountLabel(){
        this.elements.lblLoanAmount().should('be.visible')
    }
    verifyMissedLabel(){
        this.elements.lblMissed().should('be.visible')
    }
    verifyOnTimePaymentLabel(){
        this.elements.lblOnTimePayment().should('be.visible')
    }
    clickViewAll1Link(){
        this.elements.lnkViewAll1().click()
    }
    verifyPaidOn(){
        this.elements.lblPaidOn().should('be.visible')
    }
    verifyDelayedPaymentLabel(){
        this.elements.lblDelayedPayment().should('be.visible')
    }
}

export const  csrPaymentHistoryPage = new CSRPaymentHistoryPage()