///<reference types="cypress" />
export class CSRCreditPaymentHistoryPage{

    details = {
        zeplin : () => '',
        overflow : () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2&prototype',
    }

    elements ={
        //Header
        backButton  :  ()  =>  cy.get  ('[data-cy="goBackBtn"]'),
        pageTittle :  ()  =>  cy.get ('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
        iconHelp:  ()  =>  cy.get ('[data-cy="helpImg"]'),

        //payment History
        txtPamentHistory:()=>cy.get('[data-cy="app.components.CreditScore.payment_history"]'),
        txtLastUdated:()=>cy.get('[data-cy="app.components.CreditScore.last_updated_on"]'),
        valpaymentHistoryMissedPayment:()=>cy.get('[data-cy="5"]'),
        valpaymentHistoryMonthlyPayableAmount:()=>cy.get('[data-cy="178023"]'),
        txtpaymentHistoryMissedPayment:()=>cy.get('[data-cy="app.components.CreditScore.missed_payment"]'),
        txtpaymentHistoryMonthlyPayableAmount:()=>cy.get('[data-cy="app.components.CreditScore.monthlyPayableAmount"]'),

        //Payment tracker
        txtPaymentTraker:()=>cy.get('[data-cy="app.components.CreditScore.payment_tracker"]'),

        valOnTimePayment:()=>cy.get('[data-cy="app.components.CreditScore.ontime_payment"]'),
        valDelayedPayment:()=>cy.get('[data-cy="app.components.CreditScore.delayed_payment"]'),



        //Missed Payments
        txtMissedPayments:()=>cy.get('[data-cy="app.components.CreditScore.missed_payment"]'),
        lblMissedPaymentAll:()=>cy.get('[data-cy="app.components.CreditScore.view_all"]').eq(0),
        txtMissedPaymentsNone:()=>cy.get('[data-cy="app.components.CreditScore.none"]'),
        iconNoMissedPayments:()=>cy.get('[data-cy="icon_no_paymentapp.components.CreditScore.no_missed_payment"]'),
        txtNoMissedPayments:()=>cy.get('[data-cy="app.components.CreditScore.no_missed_payment"]'), 
        //Missed Payments Accounts
        iconIDFCBank:()=>cy.get('[]'),
        lblIDFCBank:()=>cy.get('[]'),
        txtBankMissedPayments:()=>cy.get('[]'),
        subtxtIDFCBank:()=>cy.get('[]'),
        txtmissed:()=>cy.get('[]'),

        iconAxisBank:()=>cy.get('[]'),
        lblAxisBank:()=>cy.get('[]'),
        txtBankMissedPayments:()=>cy.get('[]'),
        subtxtAxisBank:()=>cy.get('[]'),
        txtmissed:()=>cy.get('[]'),


        //OnTime Payments
        txtOnTimePayment:()=>cy.get('[data-cy="app.components.CreditScore.ontime_payment"]'),
        lblOnTimeViewAll:()=>cy.get('[data-cy="app.components.CreditScore.view_all"]').eq(1),

        //Accounts
        iconSBICardsAndPayments:()=>cy.get('[]'),
        lblSBICardsAndPayments:()=>cy.get('[]'),
        txtBankMissedPayments:()=>cy.get('[]'),
        subtxtSBICreditCards:()=>cy.get('[]'),
        txtPaidDate:()=>cy.get('[]'),



        iconQuadrillionFinance:()=>cy.get('[]'),
        lblQuadrillionFinance:()=>cy.get('[]'),
        txtBankMissedPayments:()=>cy.get('[]'),
        subtxtQuadrillionFinance:()=>cy.get('[]'),
        txtPaidDate:()=>cy.get('[]'),

        //Delayed Payments

        txtDelayedPayments:()=>cy.get('[data-cy="app.components.CreditScore.delayed_payment"]').eq(1),
        lblDelayedPaymentsViewAll:()=>cy.get('[data-cy="app.components.CreditScore.view_all"]').eq(2),
        lblDelayedPaymentsNone:()=>cy.get('[data-cy="app.components.CreditScore.none"]'),
        iconDelayedPaymentsNone:()=>cy.get('[data-cy="icon_no_paymentapp.components.CreditScore.no_delayed_payment"]'),
        subtxtDelayedPaymentsNone:()=>cy.get('[data-cy="app.components.CreditScore.no_delayed_payment"]'),

        //Accounts
        iconFedaralBank:()=>cy.get('[]'),
        lblFedaralBank:()=>cy.get('[]'),
        txtBankMissedPayments:()=>cy.get('[]'),
        subtxtFedaralBank:()=>cy.get('[]'),
        txtPaidDate:()=>cy.get('[]'),

        imgNoMissedPayments:()=>cy.get('[]'),
        subtxtNoMissedPayments:()=>cy.get('[]'),
           
    }

    clickBackButton(){
        this.elements.backButton().click({force:true})
    }
    verifyPageTittle(){
        this.elements.pageTittle().should('be.visible')
    }
    clickHelpIcon(){
        this.elements.iconHelp().click()
    }

    verifyPamentHisotryTxt(){
        this.elements.txtPamentHistory().should('be.visible')
    }
    verifyLastUpadate(){
        this.elements.txtLastUdated().should('be.visible')
    }
    verifyMissedPaymentHIstoryValue(){
        this.elements.valpaymentHistoryMissedPayment().should('be.visible')
    }
    verifyMotnthlyPayableHIstoryValue(){
        this.elements.valpaymentHistoryMonthlyPayableAmount().should('be.visible')
    }
    verifyMissedPaymentHIstory(){
        this.elements.txtpaymentHistoryMissedPayment().should('be.visible')
    }
    verifyMotnthlyPayableHIstorytxt(){
        this.elements.txtpaymentHistoryMonthlyPayableAmount().should('be.visible')
    }
    verifyPaymentTracker(){
        this.elements.txtPaymentTraker().should('be.visibble')
    }
    verifyOntimePaymentValue(){
        this.elements.valOnTimePayment().should('be.visible')
    }
    verifyDelayedPaymentValue(){
        this.elements.valDelayedPayment().should('be.visible')
    }
    verifyMissedPayment(){
         this.elements.txtMissedPayments().should('be.visible')
    }
    clickMissedPaymentViewAll(){
        this.elements.lblMissedPaymentAll().click()
    }
    verifyMissedPaymentsVewAll(){
        this.elements.lblMissedPaymentAll().should('be.visible')
    }
    verifyMissedPaymentsNone(){
        this.elements.txtMissedPaymentsNone().should('be.visible')
    }
    verifyNoMissedPaymentsIcon(){
        this.elements.iconNoMissedPayments().should('be.visible')
    }
    verifyNoMissedPayments(){
        this.elements.txtNoMissedPayments().should('be.visible')
    }
    verifyOnTimePaymentText(){
        this.elements.txtOnTimePayment().should('be.visible')
    }
    clickOnTimePaymentViewAll(){
        this.elements.lblOnTimeViewAll().click()
    }
    verifyOnTimePaymentViewAll(){
        this.elements.lblOnTimeViewAll().should('be.visible')
    }
    verifyDelayedPayment(){
        this.elements.txtDelayedPayments().should('be.visible')
    }
    clickDelayPaymentViewAll(){
        this.elements.lblDelayedPaymentsViewAll().click()
    }
    verifyDelayPaymentViewAll(){
        this.elements.lblDelayedPaymentsViewAll().should('be.visible')
    }
    verifyDelayPaymentNone(){
        this.elements.lblDelayedPaymentsNone().should('be.visible')
    }
    verifyDelayedPaymentsNoneIcon(){
        this.elements.iconDelayedPaymentsNone().should('be.visible')
    }
    verifyDelayPaymentNoneSubtext(){
        this.elements.subtxtDelayedPaymentsNone().should('be.visible')
    }
    


}
export const csrCreditPaymentHistoryPage=new CSRCreditPaymentHistoryPage;