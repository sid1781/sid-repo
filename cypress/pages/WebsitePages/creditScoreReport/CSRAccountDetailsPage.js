///<reference types="cypress" />

export class CSRAccountDetailsPage{

    details = {
        zeplin : () => '',
        overflow : () => '',
    }

    elements = {
        pageTitle : () => cy.get('[data-cy="app.components.CreditScore.account_details"]'),
        lblKrazybeeServicePvtLtd : () => cy.get('[]'),
        lblSBICreditCard:() =>cy.get('[data-cy="account_details_titleLeft"]'),
        lblCreditLimit:()=>cy.get('[data-cy="app.components.CreditScore.credit_limit_utilization"]'),
        lblActive : () => cy.get('[]'),
        lblConsumerLoan : () => cy.get('[]'),
        valConsumerLoan : () => cy.get('[]'),
        lblAmountOverdue : () => cy.get('[]'),
        lblHighestCredit : () => cy.get('[]'),
        valAmountOverdue : () => cy.get('[]'),
        valHighestCredit : () => cy.get('[]'),
        lblOnTimePayments : () => cy.get('[data-cy="app.components.CreditScore.on_time_payment"]'),
        lblDelayedPayment : () => cy.get('[data-cy="app.components.CreditScore.delayed_payment"]'),
        valOnTimePaymentsDate : () => cy.get('[]'),
        valDelayedPaymentDate : () => cy.get('[]'),
        lblAccountOpeningDate : () => cy.get('[]'),
        lblLastPaymentDate : () => cy.get('[]'),
        valAccountOpeningDate : () => cy.get('[]'),
        valLastPaymentDate : () => cy.get('[]'),
        lblPaymentHistory : () => cy.get('[data-cy="app.components.CreditScore.payment_history"]'),
        chkBox1 : () => cy.get('[]'),
        chkBox2 : () => cy.get('[]'),
        chkBox3 : () => cy.get('[]'),
        chkBox4 : () => cy.get('[]'),
        lblJan : () => cy.get('[]'),
        lblFeb : () => cy.get('[]'),
        lblMar : () => cy.get('[]'),
        lblApr : () => cy.get('[]'),
        lblMay : () => cy.get('[]'),
        lblJun : () => cy.get('[]'),
        lblJul : () => cy.get('[]'),
        lblAug : () => cy.get('[]'),
        lblSep : () => cy.get('[]'),
        lblOct : () => cy.get('[]'),
        lblNov : () => cy.get('[]'),
        lblDec : () => cy.get('[]'),
        lblMissedPayment : () => cy.get('[data-cy="app.components.CreditScore.missed_payment"]'),
    }
    verifyPageTitle(pagetitle){
        this.elements.pageTitle().should('have.text', pagetitle)
    }
    verifyKrazybeeServicePvtLtdLabel(){
        this.elements.lblKrazybeeServicePvtLtd().should('be.visible')
    }
    verifylblSBICreditCard(){
        this.elements.lblSBICreditCard().should('be.visible')
    }
    verifyActiveLabel(){
        this.elements.lblActive().should('be.visible')
    }
    verifyCreditLimit(){
        this.elements.lblCreditLimit().should('be.visible')
    }
    verifyConsumerLoanLabel(){
        this.elements.lblConsumerLoan().should('be.visible')
    }
    verifyConsumerLoanValue(){
        this.elements.valConsumerLoan().should('be.visible')
    }
    verifyAmountOverdueLabel(){
        this.elements.lblAmountOverdue().should('be.visible')
    }
    verifyHighestCreditLabel(){
        this.elements.lblHighestCredit().should('be.visible')
    }
    verifyAmountOverdueLabel(){
        this.elements.lblAmountOverdue().should('be.visible')
    }
    verifyHighestCreditLabel(){
        this.elements.lblHighestCredit().should('be.visible')
    }
    verifyAmountOverdueValue(){
        this.elements.valAmountOverdue().should('be.visible')
    }
    verifyHighestCreditValue(){
        this.elements.valHighestCredit().should('be.visible')
    }
    verifyOnTimePaymentsLabel(){
        this.elements.lblOnTimePayments().should('be.visible')
    }
    verifyDelayedPaymentLabel(){
        this.elements.lblDelayedPayment().should('be.visible')
    }
    verifyOnTimePaymentsDateValue(){
        this.elements.valOnTimePaymentsDate().should('be.visible')
    }
    verifyDelayedPaymentDateValue(){
        this.elements.valDelayedPaymentDate().should('be.visible')
    }
    verifyAccountOpeningDateLabel(){
        this.elements.lblAccountOpeningDate().should('be.visible')
    }
    verifyLastPaymentDateLabel(){
        this.elements.lblLastPaymentDate().should('be.visible')
    }
    verifyLastPaymentDateLabel(){
        this.elements.lblLastPaymentDate().should('be.visible')
    } 
    verifyAccountOpeningDateValue(){
        this.elements.valAccountOpeningDate().should('be.visible')
    }
    verifyLastPaymentDateValue(){
        this.elements.valLastPaymentDate().should('be.visible')
    }
    verifyPaymentHistoryLabel(){
        this.elements.lblPaymentHistory().should('be.visible')
    } 
    clickCheckBox1(){
        this.elements.chkBox1().click()
    } 
    clickCheckBox2(){
        this.elements.chkBox2().click()
    } 
    clickCheckBox3(){
        this.elements.chkBox3().click()
    } 
    clickCheckBox4(){
        this.elements.chkBox4().click()
    } 
    verifyJanLabel(){
        this.elements.lblJan().should('be.visible')
    } 
    verifyFebLabel(){
        this.elements.lblFeb().should('be.visible')
    }
    verifyMarLabel(){
        this.elements.lblMar().should('be.visible')
    } 
    verifyAprLabel(){
        this.elements.lblApr().should('be.visible')
    } 
    verifyMayLabel(){
        this.elements.lblMay().should('be.visible')
    }
    verifyJunLabel(){
        this.elements.lblJun().should('be.visible')
    } 
    verifyJulLabel(){
        this.elements.lblJul().should('be.visible')
    }
    verifyAugLabel(){
        this.elements.lblAug().should('be.visible')
    } 
    verifySepLabel(){
        this.elements.lblSep().should('be.visible')
    } 
    verifyOctLabel(){
        this.elements.lblOct().should('be.visible')
    }
    verifyNovLabel(){
        this.elements.lblNov().should('be.visible')
    } 
    verifyDecLabel(){
        this.elements.lblDec().should('be.visible')
    } 
    verifyMissedPaymentLabel(){
        this.elements.lblMissedPayment().should('be.visible')
    }
 
}

export const  csrAccountDetailsPage = new CSRAccountDetailsPage