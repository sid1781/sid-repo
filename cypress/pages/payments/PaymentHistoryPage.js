
export class PaymentHistoryPage{
    elements={
        pageTitle: () => cy.get('[data-cy="app.components.RepaymentScreen.payment_history"]'),
        lblHelp: () => cy.get('[data-cy="app.components.RepaymentScreen.help_txt"]'),
        lblViewFrequentlyAskedQuestion: () => cy.get('[data-cy="app.components.RepaymentScreen.frqntly_ask_que"]'),
        lnkViewFrequentlyAskedQuestion: () => cy.get('[data-cy="app.components.RepaymentScreen.frqntly_ask_que"]'),
        lblHowToRepay: () => cy.get('[data-cy="app.components.RepaymentScreen.howto_repay"]'),
        lnkHowToRepay: () => cy.get('[data-cy="app.components.RepaymentScreen.howto_repay"]'),
        lblReportAnIssue: () => cy.get('[data-cy="app.components.RepaymentScreen.report_an_issue"]'),
        lnkReportAnIssue: () => cy.get('[data-cy="app.components.RepaymentScreen.report_an_issue"]'),
        btnBack: () => cy.get('[data-cy="app.components.Common.back_btn"]'),
        lblNoPaymentsFound:()=>cy.get('[data-cy="app.components.RepaymentScreen.no_payments_found"]'),
        valProcessing: () => cy.get('[data-cy="dataCyTxnStatus"]').eq(0),
        valSuccess: () => cy.get('[data-cy="dataCyTxnStatus"]').eq(1),
        valFailed: () => cy.get('[data-cy="dataCyTxnStatus"]').eq(2),
        lblProcessingStatus: () => cy.get('[data-cy="dataCyStatusDesc"]'),
        lblOlderHistory: () => cy.get('[data-cy="app.components.RepaymentScreen.view_old_payment"]'),
        lblRecentTransaction: () => cy.get('[data-cy="repHistoryAmountTxn"]'),
        btnViewOlderPayments: () => cy.get('[]'),
        valAmount  : () => cy.get('[]'),
        valPaymentDate: () => cy.get('[]'),
        valPaymentmode : () =>  cy.get('[]'),
    }
    verifyPageTitle(title) {
        this.elements.pageTitle().eq(0).should('have.text', title)
    }
    verifyHelpLabel(text){
        this.elements.lblHelp().should('have.text',text)
    }
    verifyViewFrequentlyAskedQuestionLabel(text){
        this.elements.lblViewFrequentlyAskedQuestion().should('have.text',text)
    }
    clickViewFrequentlyAskedQuestionLink(){
        this.elements.lnkViewFrequentlyAskedQuestion().click()
    }
    verifyHowToRepayLabel(text){
        this.elements.lblHowToRepay().should('have.text',text)
    }
     clickHowToRepayLink(){
        this.elements.lnkHowToRepay().click()
    }
    verifyReportAnIssueLabel(text){
        this.elements.lblReportAnIssue().should('have.text',text)
    }
    clickReportAnIssueLink(text){
        this.elements.lnkReportAnIssue().click()
    }
    clickBackButton(){
        this.elements.btnBack().click()
    }
    verifyNoPaymentsFoundLabel(text){
        this.elements.lblNoPaymentsFound().should('have.text',text)
    }
    
    verifyPaymentHistory() {
        this.elements.valProcessing().should('be.visible')
        this.elements.lblProcessingStatus().should('be.visible')
        this.elements.valFailed().should('be.visible')
        this.elements.valSuccess().should('be.visible')
        this.elements.lblHelp().should('be.visible')
        this.elements.lblViewFrequentlyAskedQuestion().should('be.visible')
        this.elements.lblHowToRepay().should('be.visible')
        this.elements.lblReportAnIssue().should('be.visible')
        this.elements.lblOlderHistory().should('be.visible')
    }
    verifySucessLabel() {
        this.elements.lblSuccess().should('be.visible')
    }

    verifyRecentTransactionlabel() {
        this.elements.lblRecentTransaction().should('be.visible')
    }
 }
 export const paymentHistoryPage= new PaymentHistoryPage()
