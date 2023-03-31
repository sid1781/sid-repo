/// <reference types = "cypress" />

export class RepaymentSchedulePage {

    details = {
        zeplin: () => 'https://zpl.io/adeYWgE',
        zeplin_variation: () => ' https://zpl.io/no0mdlJ',
        zeplin_variation1: () => 'https://zpl.io/09nLr7w',
        overflow: () => '', //TODO Link
    }
    // design the page
    elements = {
        pageTitle: () => cy.get('[data-cy="repaySchedule"]'),
        iconId: () => cy.get('[data-cy="installmentSummaryID"]'),
        lblPrincipal: () => cy.get('[data-cy="app.components.Common.store_principal"]'),
        lblInterest: () => cy.get('[data-cy="app.components.Common.store_interest"]'),
        lblDueDate: () => cy.get('[data-cy="app.components.Common.store_duedate"]'),
        lblRepayableAmount: () => cy.get('[data-cy="app.components.Common.store_repay_amt"]'),
        iconRupee: () => cy.get('[data-cy="app.components.Common.rupee_symbol"]'),

        txtOne: () => cy.get('[data-cy="rowItemID"]'),
        txtPrincipalAmount: () => cy.get('[data-cy="rowItemPrinciple"]'),
        txtInterestAmount: () => cy.get('[data-cy="rowItemInterest"]'),
        txtDueDate: () => cy.get('[data-cy="rowItemManipulatedDueDate"]'),
        txtRepayableAmount: () => cy.get('[data-cy="rowItemRepayableInstAmte"]'),

        txtTwo: () => cy.get('[data-cy="1"]'),
        txtPrincipalAmount: () => cy.get('[data-cy="principle_1"]'),
        txtInterestAmount: () => cy.get('[data-cy="interest_1"]'),
        txtDueDate: () => cy.get('[data-cy="manipulatedDueDate_1"]'),
        txtRepayableAmount: () => cy.get('[data-cy="repayableInstAmt_1"]'),

        txtThree: () => cy.get(''),
        txtPrincipalAmount: () => cy.get(''),
        txtInterestAmount: () => cy.get(''),
        txtDueDate: () => cy.get(''),
        txtRepayableAmount: () => cy.get(''),

        txtFour: () => cy.get(''),
        txtPrincipalAmount: () => cy.get(''),
        txtInterestAmount: () => cy.get(''),
        txtDueDate: () => cy.get(''),
        txtRepayableAmount: () => cy.get(''),

        lblPanaltyChargesAndOverdue: () => cy.get('[data-cy="app.components.InstallmentSummary.overdue_charges_title_msg"]'),
        txtFirstOverdue: () => cy.get('[data-cy="app.components.InstallmentSummary.penalty_first_od"]'),
        txtFirstOverdueAmount: () => cy.get('[data-cy="app.components.InstallmentSummary.penalty_of_princi0"]'),
        txtPenaltyCharges: () => cy.get('[data-cy="app.components.InstallmentSummary.penalty_from_and_to_date"]').eq(0),
        txtPenaltyCharges1: () => cy.get('[data-cy="app.components.InstallmentSummary.penalty_from_and_to_date"]').eq(1),
        valPenaltyCharges: () => cy.get('[data-cy="app.components.InstallmentSummary.penalty_of_princi1"]'),
        valPenaltyCharges1: () => cy.get('[data-cy="app.components.InstallmentSummary.penalty_of_princi2"]'),
        txtOverdueInterest: () => cy.get('[data-cy="app.components.InstallmentSummary.overdue_interest_info"]'),
        txtForeclosureCharges: () => cy.get('[data-cy="app.components.InstallmentSummary.overdue_interest_info"]'),
        txtConsentRoundToRupee: () => cy.get('[data-cy="app.components.InstallmentSummary.repay_schedule_nearest_rupee"]'),
        btnContinue: () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]'),
        lblSelectLoanAmount: () => cy.get('[data-cy="app.components.BbankAccount.place_variable_slctlamnt"]'),
        lblPenalty:()=>cy.get('[data-cy="app.components.InstallmentSummary.penaltyText"]'),
        valPenalty:()=>cy.get('[data-cy="rowItemPenalty"]'),
        lblOverDueInterest:()=>cy.get('[data-cy="app.components.InstallmentSummary.overdueInterestText"]'),
        valOverDueInterest:()=>cy.get('[data-cy="rowItemOverdueInterest"]'),
    }
    //pagetitle
    verifyPageTitle(title){
        this.elements.pageTitle().eq(0).should('have.text',title)
    }
    //Principal
    verifyPrincipalLabel(principal){
        this.elements.lblPrincipal().should('have.text',principal)
    }
    //Interest
    verifyInterestLabel(interest){
        this.elements.lblInterest().should('have.text',interest)
    }
    //DueDate
    verifyDueDateLabel(duedate){
        this.elements.lblDueDate().should('have.text',duedate)
    }
    //RepayableAmount
    verifyRepayableAmountLabel(repayableamount){
        this.elements.lblRepayableAmount().should('have.text',repayableamount)
    }

    clickContinueBtn() {
        this.elements.btnContinue().click()
    }

    verifySelectLoanAmountLabel() {
        this.elements.lblSelectLoanAmount().should('not.exist')
    }
    //Sandhya Add method
    verifyForeclosureChargesText(text){
        this.elements.txtForeclosureCharges().should('have.text',text)
    }
    //Sandhya Added method
    verifyNOForeclosureChargesText(){
        this.elements.txtForeclosureCharges().should('not.exist')
    }
    verifyPenaltyLabel(text){
        this.elements.lblPenalty().should('have.text',text)
    }
    verifyPenaltyValue(value){
        this.elements.valPenalty().should('have.text',value)

    }
    verifyOverdueInterestText(text){
        this.elements.txtOverdueInterest().eq(0).should('have.text',text)
    }
    verifyConsentRoundToRupeeText(text){
        this.elements.txtConsentRoundToRupee().should('have.text',text)
    }
    verifyOverDueInterestLabel(text){
        this.elements.lblOverDueInterest().should('have.text',text)
    }
    verifyOverDueInterestValue(value){
        this.elements.valOverDueInterest().should('have.text',value)
    }
    verifyForeclosureChargesText(text) {
        this.elements.txtForeclosureCharges().should('have.text', text)
    }

    //Sandhya Added method
    verifyNOForeclosureChargesText() {
        this.elements.txtForeclosureCharges().should('not.exist')
    }

    verifyFirstOverDuePenaltyText(text) {
        this.elements.txtFirstOverdue().should('have.text', text)
    }

    verifyFirstPenaltyChargesText(text) {
        this.elements.txtPenaltyCharges().should('have.text', text)
    }

    verifyFirstPenaltyCharges1Text(text) {
        this.elements.txtPenaltyCharges1().should('have.text', text)
    }

    verifyPenaltyChargesValue(value) {
        this.elements.valPenaltyCharges().should('have.text', value)
    }

    verifyPenaltyCharges1Value(value) {
        this.elements.valPenaltyCharges1().should('have.text', value)
    }
}

export const repaymentSchedulePage = new RepaymentSchedulePage()