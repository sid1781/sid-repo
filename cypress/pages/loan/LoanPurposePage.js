/// <reference types = "cypress" />

export class LoanPurposePage {

    details = {
        zeplin: () => 'https://zpl.io/EmvQk1D',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        PageTitle: () => cy.get('....'),
        ddSelectLoanPurpose: () => cy.get('[data-cy="text_app.components.LoanPurpose.select_loan_purpose"]'),
        ddSelectLoanPurpose: () => cy.get('[data-cy="text_app.components.LoanPurpose.select_loan_purpose"]'),
        ddSelectedOption: () => cy.get('.Select-value-label', { timeout: 2000 }),
        iconLoanPurpose: () => cy.get('[]'),
        chkAgreeHouseHoldIncome: () => cy.get('[data-value="checked"]'),
        lblAgreeHouseHoldIncome: () => cy.get('[data-cy="checkboxText_app.components.LoanPurpose.min_income"]'),
        btnContinue: () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]', { timeout: 2000 }),
        ddlLoanPupose: () => cy.get('[id="react-select-2-option-0"]'),
        ddlLoanPurposeWedding: () => cy.get('[id="react-select-3-option-2"]'),
        ddlLoanPurposePersonalReason: () => cy.get('[id="react-select-4-option-6"]'),
    }

    clickContinueBtn() {
        this.elements.btnContinue().click()
    }

    clickSelectLoanPurposeDD() {
        this.elements.ddSelectLoanPurpose().click()
    }

    selectPurposeFromDDL(loanPurpose) {
        this.elements.ddlLoanPupose().contains(loanPurpose).click()
    }

    verifySelectedOption(selectedOption) {
        this.elements.ddSelectedOption().should('have.text', selectedOption)
    }

    selectLoanPurpose(loanPurpose) {
        this.clickSelectLoanPurposeDD()
        this.selectPurposeFromDDL(loanPurpose)
    }

    verifyAgreeHouseHoldIncomeCheckBox(chkAgreeHouseHoldIncome) {
        this.elements.chkAgreeHouseHoldIncome().should('have.text', chkAgreeHouseHoldIncome).click()
    }

    verifyAgreeHouseHoldIncomeCheckBox(state) {
        if (state == 'unchecked') {
            this.elements.chkAgreeHouseHoldIncome().should('have.attr', 'data-value', 'unchecked')
        } else {
            this.elements.chkAgreeHouseHoldIncome().should('have.attr', 'data-value', 'checked')
        }
    }

    verifyAgreeHouseHoldIncomeLabel(title) {
        this.elements.lblAgreeHouseHoldIncome().should('have.text', title)
    }

    clickLoanPurposeWedding() {
        this.elements.ddlLoanPurposeWedding().click()
    }

    clickLoanPurposePersonalReason() {
        this.elements.ddlLoanPurposePersonalReason().click()
    }

}

export const loanPurposePage = new LoanPurposePage