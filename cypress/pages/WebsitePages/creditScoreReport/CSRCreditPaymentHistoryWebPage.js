///<reference types="cypress" />
export class CSRCreditPaymentHistoryWebPage{

    details = {
        zeplin : () => '',
        overflow : () => 'https://overflow.io/s/P0U9UZ/?node=2e5733f2&prototype',
    }

    elements ={
        //Header
        backButton  :  ()  =>  cy.getIframeBodyWebsite().find  ('[data-cy="goBackBtn"]'),
        pageTittle :  ()  =>  cy.getIframeBodyWebsite().find ('[data-cy="app.components.CreditScore.ks_kb_page_title"]'),
        iconHelp:  ()  =>  cy.getIframeBodyWebsite().find ('[data-cy="helpImg"]'),

        //payment History
        txtPamentHistory:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.payment_history"]'),
        txtLastUdated:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.last_updated_on"]'),
        valpaymentHistoryMissedPayment:()=>cy.getIframeBodyWebsite().find('[data-cy="5"]'),
        valpaymentHistoryMonthlyPayableAmount:()=>cy.getIframeBodyWebsite().find('[data-cy="178023"]'),
        txtpaymentHistoryMissedPayment:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.missed_payment"]'),
        txtpaymentHistoryMonthlyPayableAmount:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.monthlyPayableAmount"]'),

        //Payment tracker
        txtPaymentTraker:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.payment_tracker"]'),

        valOnTimePayment:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.ontime_payment"]'),
        valDelayedPayment:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.delayed_payment"]'),



        //Missed Payments
        txtMissedPayments:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.missed_payment"]'),
        lblMissedPaymentAll:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.view_all"]').eq(0),
        txtMissedPaymentsNone:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.none"]'),
        iconNoMissedPayments:()=>cy.getIframeBodyWebsite().find('[data-cy="icon_no_paymentapp.components.CreditScore.no_missed_payment"]'),
        txtNoMissedPayments:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.no_missed_payment"]'), 
        //Missed Payments Accounts
        iconIDFCBank:()=>cy.getIframeBodyWebsite().find('[]'),
        lblIDFCBank:()=>cy.getIframeBodyWebsite().find('[]'),
        txtBankMissedPayments:()=>cy.getIframeBodyWebsite().find('[]'),
        subtxtIDFCBank:()=>cy.getIframeBodyWebsite().find('[]'),
        txtmissed:()=>cy.getIframeBodyWebsite().find('[]'),

        iconAxisBank:()=>cy.getIframeBodyWebsite().find('[]'),
        lblAxisBank:()=>cy.getIframeBodyWebsite().find('[]'),
        txtBankMissedPayments:()=>cy.getIframeBodyWebsite().find('[]'),
        subtxtAxisBank:()=>cy.getIframeBodyWebsite().find('[]'),
        txtmissed:()=>cy.getIframeBodyWebsite().find('[]'),


        //OnTime Payments
        txtOnTimePayment:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.ontime_payment"]'),
        lblOnTimeViewAll:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.view_all"]').eq(1),

        //Accounts
        iconSBICardsAndPayments:()=>cy.getIframeBodyWebsite().find('[]'),
        lblSBICardsAndPayments:()=>cy.getIframeBodyWebsite().find('[]'),
        txtBankMissedPayments:()=>cy.getIframeBodyWebsite().find('[]'),
        subtxtSBICreditCards:()=>cy.getIframeBodyWebsite().find('[]'),
        txtPaidDate:()=>cy.getIframeBodyWebsite().find('[]'),



        iconQuadrillionFinance:()=>cy.getIframeBodyWebsite().find('[]'),
        lblQuadrillionFinance:()=>cy.getIframeBodyWebsite().find('[]'),
        txtBankMissedPayments:()=>cy.getIframeBodyWebsite().find('[]'),
        subtxtQuadrillionFinance:()=>cy.getIframeBodyWebsite().find('[]'),
        txtPaidDate:()=>cy.getIframeBodyWebsite().find('[]'),

        //Delayed Payments

        txtDelayedPayments:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.delayed_payment"]').eq(1),
        lblDelayedPaymentsViewAll:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.view_all"]').eq(2),
        lblDelayedPaymentsNone:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.none"]'),
        iconDelayedPaymentsNone:()=>cy.getIframeBodyWebsite().find('[data-cy="icon_no_paymentapp.components.CreditScore.no_delayed_payment"]'),
        subtxtDelayedPaymentsNone:()=>cy.getIframeBodyWebsite().find('[data-cy="app.components.CreditScore.no_delayed_payment"]'),

        //Accounts
        iconFedaralBank:()=>cy.getIframeBodyWebsite().find('[]'),
        lblFedaralBank:()=>cy.getIframeBodyWebsite().find('[]'),
        txtBankMissedPayments:()=>cy.getIframeBodyWebsite().find('[]'),
        subtxtFedaralBank:()=>cy.getIframeBodyWebsite().find('[]'),
        txtPaidDate:()=>cy.getIframeBodyWebsite().find('[]'),

        imgNoMissedPayments:()=>cy.getIframeBodyWebsite().find('[]'),
        subtxtNoMissedPayments:()=>cy.getIframeBodyWebsite().find('[]'),
           
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
export const csrCreditPaymentHistoryWebPage=new CSRCreditPaymentHistoryWebPage;