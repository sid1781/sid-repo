/// <reference types = "cypress" />

export class LoanPurposeWebPage {

    details = {
        zeplin: () => 'https://zpl.io/EmvQk1D',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=269911de',
    }

    elements = {
        PageTitle: () => cy.getIframeBody().find('....'),
        ddSelectLoanPurpose: () => cy.getIframeBody().find('.Select-placeholder'),
        ddSelectedOption: () => cy.getIframeBody().find('.Select-value-label', { timeout: 2000 }),
        iconLoanPurpose: () => cy.getIframeBody().find('[]'),
        chkAgreeHouseHoldIncome: () => cy.getIframeBody().find('[data-value="checked"]'),
        lblAgreeHouseHoldIncome: () => cy.getIframeBody().find('[data-cy="checkboxText_app.components.LoanPurpose.min_income"]'),
        btnContinue: () => cy.getIframeBody().find('[data-cy="app.components.Common.continue_btn_caps"]', { timeout: 2000 }),
        ddlLoanPupose: () => cy.getIframeBody().find('.Select-menu').children('.Select-option')
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

}

export const loanPurposeWebPage = new LoanPurposeWebPage