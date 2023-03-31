/// <reference types = "cypress" />

export class ForeclosureReasonPage {

    details = {
        zeplin: () => 'https://zpl.io/EmvQk1D',
        overflow: () => '', //TODO Link
    }

    elements = {
        PageTitle: () => cy.get('....'),
        ddSelectForecloseReason: () => cy.get('[id="react-select-2-placeholder"]'),
        ddSelectForecloseReason: () => cy.get('[id="react-select-2-placeholder"]'),
        ddSelectedOption: () => cy.get('.Select-value-label', { timeout: 2000 }),
        iconForecloseReason: () => cy.get('[]'),
        btnContinue: () => cy.contains('button','Continue'),
        ddlForecloseReason: () => cy.get('[id="react-select-2-option-1"]'),
        ddSelect:()=>cy.get('[id="react-select-2-option-3"]')

    }

    clickContinueBtn() {
        this.elements.btnContinue().click()
    }

    clickSelecForecloseReasontDD() {
        this.elements.ddSelectForecloseReason().click({force: true})
    }

    selectReasonFromDDL(ForecloseReason) {
        this.elements.ddlForecloseReason().contains(ForecloseReason).click({force:true})
    }

    verifySelectedOption(selectedOption) {
        this.elements.ddSelectedOption().should('have.text', selectedOption)
    }

    selectForecloseReason(ForecloseReason) {
        this.clickSelecForecloseReasontDD()
        this.selectReasonFromDDL(ForecloseReason)
    }
    clickSelectDropDownOption(){
        this.elements.ddSelect().click({force: true})
    }

}

export const foreclosureReasonPage = new ForeclosureReasonPage