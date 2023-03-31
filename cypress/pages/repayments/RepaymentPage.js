/// <reference types = "cypress" />

export class RepaymentPage {

    details = {
        zeplin: () => 'https://zpl.io/Q0LGRKm',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        btnPayNow: () => cy.get('[data-cy="app.components.RepaymentScreen.pay_now"]',{timeout:2000}).first(),
        btnPayNowSA: () => cy.get('[data-cy="app.components.NewHomePage.pay_now"]'),
        iconKreditbee: () => cy.get('[]'),
        iconSettings: () => cy.get('[]'),
        iconHelp: () => cy.get('[]'),
        iconLoan: () => cy.get('[class="sc-htoDjs epKcjW"]'),
        lblRupee: () => cy.get('[]'),
        lblLoanID: () => cy.get('[data-cy="friendlyLoanId"]'),
        valLoanAmount: () => cy.get('[data-cy="loanAmt"]'),
        valLoanDueDate: () => cy.get('[data-cy="dueDate_app.components.RepaymentScreen.due_on"]').eq(0),
        lblLoanDueOn: () => cy.get('[data-cy="app.components.RepaymentScreen.due_on"]'),
        txtPaid: () => cy.get('[data-cy="app.components.RepaymentScreen.installment_paidinactive_0"]'),
        lblPaymentHistory: () => cy.get('[data-cy="app.components.RepaymentScreen.payment_history"]'),
        lnkPaymentHistory: () => cy.get('[]'),
        lblHowToRepay: () => cy.get('[data-cy="app.components.RepaymentScreen.howto_repay"]'),
        lnkHowToRepay: () => cy.get('[data-cy="img_app.components.RepaymentScreen.howto_repay"]'),
        lblLenderDetails: () => cy.get('[]'),
        lnkViewDetails: () => cy.get('[data-cy="app.components.RepaymentScreen.view_details"]'),
        lblForecloseLoan: () => cy.contains('p','Foreclose Loan',{timeout:5000}),
        lblForecloseLoanDisabled:()=>cy.contains('p','Full Payment',{timeout:5000}),
        btnForeclosePaynow: () => cy.get('[data-cy="app.components.RepaymentScreen.pay_now"]').eq(1),
        iconLoanInstallmentAmount: () => cy.get('[]'),
        iconLoanInstallmentDueDate: () => cy.get('[]'),
        valLoanInstallmentAmount: () => cy.get('[data-cy="instAmtActive_active_0"]'),
        valLoanInstallmentDueDate: () => cy.get('[data-cy="activeInstDate"]'),
        lnkLenderDetails: () => cy.get('[data-cy="img_app.components.RepaymentScreen.lender_details"]'),
        lblOverDueSince: () => cy.get('[data-cy="app.components.RepaymentScreen.overdue_since"]'),
        OverDueSinceDate:()=>cy.get('[data-cy="dueDate_app.components.RepaymentScreen.overdue_since"]'),
        txtPaid: () => cy.get('[data-cy="app.components.RepaymentScreen.installment_paidinactive_0"]'),
        installment1Amount:()=>cy.get('[data-cy="instAmtActive_active_0"]'),
        installment2Amount:()=>cy.get('[data-cy="installmentAmt"]').eq(0),
        installment3Amount:()=>cy.get('[data-cy="installmentAmt"]').eq(1),
        installment1Date:()=>cy.get('[data-cy="activeInstDate"]'),
        installment2Date:()=>cy.get('[data-cy="instDate_inactive_1"]'),
        installment3Date:()=>cy.get('[data-cy="instDate_inactive_2"]'),
        btnContinue: () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]'),
        btnContinue : () =>  cy.get('[data-cy="app.components.Common.continue_btn_caps"]'),
        lblConvienceFee : () => cy.get('[data-cy="app.components.SeamlessPG.convenience_fee_text"]'),
        lblGST: () => cy.get('[data-cy="app.components.SeamlessPG.gst_on_conv_fee_text"]'),
       //Repayment approval status page
        txtRepaymentStatusInformation : () =>  cy.get('[data-cy="app.components.RepaymentScreen.checkoutProductInfoTxt1"]'),
        lblPurchase: () => cy.get('[data-cy="app.components.RepaymentScreen.checkoutProductInfoTxt1"]'),
        valLoanID1: () => cy.contains('p','KBST211118KYB'),
        valLoanID2: () => cy.contains('p','KBST220512IOT'),
        txtRepaymentStatusInformation1 : () =>  cy.get('[data-cy="app.components.RepaymentScreen.checkoutProductInfoTxt3"]'),
        lblWaitingForApproval:()=>cy.get('[data-cy="step1"]'),
        lblProcessingBankTransfer:()=>cy.get('[data-cy="step2"]'),
        txtRepaymentDescription: () => cy.get('[data-cy="label_undefined"]'),
        btnRefresh: () => cy.get('[data-cy="cashRefreshBtn"]'),
        btnPayNowForClouser: () => cy.get('[data-cy="app.components.RepaymentScreen.pay_now"]').eq(1),



    }

    clickContinueBtn() {
        this.elements.btnContinue().click()
    }

    verifyLoanIDLabel(lblLoanID) {
        this.elements.lblLoanID().should('have.text', lblLoanID)
    }

    verifyViewDetailsText(lnkViewDetails) {
        this.elements.lnkViewDetails().should('have.text', lnkViewDetails)
    }

    clickViewDetailsLink() {
        this.elements.lnkViewDetails().click({ timeout: 4000 })
    }

    verifyPayNowButton(btnPayNow) {
        this.elements.btnPayNow().should('have.text', btnPayNow)
    }

    verifyForecloseTitle(lblForecloseLoan) {
        this.elements.lblForecloseLoan().should('have.text', lblForecloseLoan)
    }

    verifyForecloseDisabledTitle(lblForecloseLoanDisabled){
        this.elements.lblForecloseLoanDisabled().should('have.text',lblForecloseLoanDisabled)
    }
    
    clickForeclosePaynow() {
        this.elements.btnForeclosePaynow().click()
    }

    clickPayNowBtn() {
        this.elements.btnPayNow().click()
    }

    verifyLoanIcon(){
        this.elements.iconLoan().should('be.exist')
    }

    verifyPaymentHistoryLabel(text){
        this.elements.lblPaymentHistory().should('have.text',text)
    }

    verifyHowToRepayLabel(text){
        this.elements.lblHowToRepay().should('have.text',text)
    }

    verifyLoanAmountValue(amount){
        this.elements.valLoanAmount().should('have.text',amount)
    }

    clickHowToRepayLink(){
        this.elements.lnkHowToRepay().click()
    }

    verifyLoanDueOnLabel(text){
        this.elements.lblLoanDueOn().should('have.text',text)
    }

    verifyLoanDueDateValue(Date){
        this.elements.valLoanDueDate().should('have.text',Date)
    }

    clickLenderDetailsLink(){
        this.elements.lnkLenderDetails().click()
    }

    clickViewDetailsLink(){
        this.elements.lnkViewDetails().click()
    }

    verifyOverDueSinceLabel(text){
        this.elements.lblOverDueSince().should('have.text',text)
    }
    verifyOverDueSinceDate(){
        this.elements.OverDueSinceDate().should('be.visible')
    }
    verifyPaidInstallmentText(text) {
        this.elements.txtPaid().should('have.text', text)
    }

    clickPaymentHistoryLabel(){
        this.elements.lblPaymentHistory().click()
    }

    verifyinstallment1Amount(value){
        this.elements.installment1Amount().should('have.text',value)
    }
    verifyinstallment2Amount(value){
        this.elements.installment2Amount().should('have.text',value)
    }
    verifyinstallment3Amount(value){
        this.elements.installment3Amount().should('have.text',value)
    }
    verifyinstallment1Date(value){
        this.elements.installment1Date().should('have.text',value)
    }
    verifyinstallment2Date(value){
        this.elements.installment2Date().should('have.text',value)
    }
    verifyinstallment3Date(value){
        this.elements.installment3Date().should('have.text',value)
    }
    clickPayNowBtnSA() {
        this.elements.btnPayNowSA().click()
    }
    
    verifyPaymentHistoryLabel(text){
        this.elements.lblPaymentHistory().should('have.text',text)
    }

    verifyPaidInstallmentText(text) {
        this.elements.txtPaid().should('have.text', text)
    }

    verifyConvienceFeeText(text) {
        this.elements.lblConvienceFee().should('have.text', text)
    }

    verifyGSTText(GST) {
        this.elements.lblGST().should('have.text', GST)
    }

    verifyNoConvienceFeeText() {
        this.elements.lblConvienceFee().should('not.exist')
    }

    verifyNoGSTText() {
        this.elements.lblGST().should('not.exist')
    }

    verifyGreaterThan5GSTText(GST) {
        this.elements.lblGST().should('have.text', GST)
    }

    verifyGreaterThan5ConvienceFeeText(ConvienceFee) {
        this.elements.lblConvienceFee().should('have.text', ConvienceFee)
    }

    verifyRepaymentStatusText(repaymentStatusInformation) {
        this.elements.txtRepaymentStatusInformation().should('have.text', repaymentStatusInformation)
    }

    verifyCheckoutPurchaseLabelIsNotVisible() {
        this.elements.lblPurchase().should('not.exist')
    }

    verifyLoanID1IsVisible(valLoanID1) {
        this.elements.valLoanID1().should('have.text',valLoanID1)
    }

    verifyPaymentHistorylabel(paymentHistory) {
        this.elements.lblPaymentHistory().should('have.text',paymentHistory)
    }

    verifyLoanID2IsVisible(valLoanID2) {
        this.elements.valLoanID2().should('have.text',valLoanID2)
    }

    verifyLoanInstallmentAmount(installmentAmount) {
        this.elements.valLoanInstallmentAmount().should('have.text',installmentAmount)
    }

    verifyLoanInstallmentDueDate(installmentDueDate) {
        this.elements.valLoanInstallmentDueDate().should('have.text',installmentDueDate)
    }

    verifyRepaymentStatusText1(repaymentStatusInformation1) {
        this.elements.txtRepaymentStatusInformation1().should('have.text', repaymentStatusInformation1)
    }

    verifyWaitingForApprovalLabel(text){
        this.elements.lblWaitingForApproval().should('contain',text)
    }

    verifyProcessingBankTransferLabel(text){
        this.elements.lblProcessingBankTransfer().should('contain',text)
    }
    verifyRepaymentDescriptionText(Discription){
        this.elements.txtRepaymentDescription().should('have.text',Discription)
    }
    verifyRefreshButton(refresh){
        this.elements.btnRefresh().should('have.text',refresh)
    }
    clickRefreshButton(){
        this.elements.btnRefresh().click()
    }
    clickPayNowForClouserButton(){
        this.elements.btnPayNowForClouser().click()
    }
}

export const repaymentPage = new RepaymentPage()