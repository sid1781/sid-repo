/// <reference types = "cypress" />


export class RepaymentScheduleWebPage {

    details = {
        zeplin: () => 'https://zpl.io/adeYWgE',
        zeplin_variation: () => ' https://zpl.io/no0mdlJ',
        zeplin_variation1: () => 'https://zpl.io/09nLr7w',
        overflow: () => '', //TODO Link
    }
    // design the page
    elements = {
        pageTitle: () => cy.getIframeBody().find('[data-cy="repaySchedule"]'),
        iconId: () => cy.getIframeBody().find('[data-cy="installmentSummaryID"]'),
        lblPrincipal: () => cy.getIframeBody().find('[data-cy="app.components.Common.store_principal"]'),
        lblInterest: () => cy.getIframeBody().find('[data-cy="app.components.Common.store_interest"]'),
        lblDueDate: () => cy.getIframeBody().find('[data-cy="app.components.Common.store_duedate"]'),
        lblRepayableAmount: () => cy.getIframeBody().find('[data-cy="app.components.Common.store_repay_amt"]'),
        iconRupee: () => cy.getIframeBody().find('[data-cy="app.components.Common.rupee_symbol"]'),

        txtOne: () => cy.getIframeBody().find('[data-cy="rowItemID"]'),
        txtPrincipalAmount: () => cy.getIframeBody().find('[data-cy="rowItemPrinciple"]'),
        txtInterestAmount: () => cy.getIframeBody().find('[data-cy="rowItemInterest"]'),
        txtDueDate: () => cy.getIframeBody().find('[data-cy="rowItemManipulatedDueDate"]'),
        txtRepayableAmount: () => cy.getIframeBody().find('[data-cy="rowItemRepayableInstAmte"]'),

        txtTwo: () => cy.getIframeBody().find('[data-cy="1"]'),
        txtPrincipalAmount: () => cy.getIframeBody().find('[data-cy="principle_1"]'),
        txtInterestAmount: () => cy.getIframeBody().find('[data-cy="interest_1"]'),
        txtDueDate: () => cy.getIframeBody().find('[data-cy="manipulatedDueDate_1"]'),
        txtRepayableAmount: () => cy.getIframeBody().find('[data-cy="repayableInstAmt_1"]'),

        txtThree: () => cy.getIframeBody().find(''),
        txtPrincipalAmount: () => cy.getIframeBody().find(''),
        txtInterestAmount: () => cy.getIframeBody().find(''),
        txtDueDate: () => cy.getIframeBody().find(''),
        txtRepayableAmount: () => cy.getIframeBody().find(''),

        txtFour: () => cy.getIframeBody().find(''),
        txtPrincipalAmount: () => cy.getIframeBody().find(''),
        txtInterestAmount: () => cy.getIframeBody().find(''),
        txtDueDate: () => cy.getIframeBody().find(''),
        txtRepayableAmount: () => cy.getIframeBody().find(''),

        lblPanaltyChargesAndOverdue: () => cy.getIframeBody().find('[data-cy="app.components.InstallmentSummary.overdue_charges_title_msg"]'),
        txtFirstOverdue: () => cy.getIframeBody().find('[data-cy="app.components.InstallmentSummary.penalty_first_od"]'),
        txtFirstOverdueAmount: () => cy.getIframeBody().find('[data-cy="app.components.InstallmentSummary.penalty_of_princi0"]'),
        txtPenaltyCharges: () => cy.getIframeBody().find('[data-cy="app.components.InstallmentSummary.penalty_from_and_to_date"]'),
        valPenaltyCharges: () => cy.getIframeBody().find('[data-cy="app.components.InstallmentSummary.penalty_of_princi1"]'),

        txtOverdueInterest: () => cy.getIframeBody().find('[data-cy="app.components.InstallmentSummary.overdue_interest_info"]'),
        txtForeclosureCharges: () => cy.getIframeBody().find('[data-cy="app.components.InstallmentSummary.overdue_interest_info"]'),
        txtConsentRoundToRupee: () => cy.getIframeBody().find('[data-cy="app.components.InstallmentSummary.repay_schedule_nearest_rupee"]'),
        btnContinue: () => cy.getIframeBody().find('[data-cy="app.components.Common.continue_btn_caps"]'),
        lblSelectLoanAmount: () => cy.getIframeBody().find('[data-cy="app.components.BbankAccount.place_variable_slctlamnt"]'),
        btnPermissionMissingContinue: () => cy.getIframeBody().find('[data-cy="dataCyBtnTxt"]')
    }
    //pagetitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    //Principal
    verifyPrincipalLabel(principal) {
        this.elements.lblPrincipal().should('have.text', principal)
    }
    //Interest
    verifyInterestLabel(interest) {
        this.elements.lblInterest().should('have.text', interest)
    }
    //DueDate
    verifyDueDateLabel(duedate) {
        this.elements.lblDueDate().should('have.text', duedate)
    }
    //RepayableAmount
    verifyRepayableAmountLabel(repayableamount) {
        this.elements.lblRepayableAmount().should('have.text', repayableamount)
    }

    clickContinueBtn() {
        this.elements.btnContinue().click()
    }

    verifySelectLoanAmountLabel() {
        this.elements.lblSelectLoanAmount().should('not.exist')
    }

    verifyForeclosureChargesText(text) {
        this.elements.txtForeclosureCharges().should('have.text', text)
    }

    verifyNOForeclosureChargesText() {
        this.elements.txtForeclosureCharges().should('not.exist')
    }
    clickPermissionMissingContinueButton(){
        this.elements.btnPermissionMissingContinue().click()
    }
    verifyPermissionMissingContinueButton(config, linkText) {
        if (config == 0) {
            this.elements.btnPermissionMissingContinue().should('not.exist') //no link
        } else if (config == 1) {
            this.elements.btnPermissionMissingContinue().should('have.text',linkText).then(() => {
                this. clickPermissionMissingContinueButton()
            })
        }
    }
}

export const repaymentScheduleWebPage = new RepaymentScheduleWebPage()