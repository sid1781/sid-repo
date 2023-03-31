/// <reference types = "cypress" />

export class IncomeDetailsPage {

    details = {
        zeplin: () => 'https://zpl.io/RMDDqJp',
        zeplin_variation: () => 'https://zpl.io/z899MEE',
        overflow_onboarding_2_5: () => 'https://overflow.io/s/UCDTKU1H/?node=6d85b16b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]', { timeout: 30000 }),
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]', { timeout: 30000 }),
        lblEmploymentType: () => cy.get('[data-cy="app.components.Eligibility.elg_emp_type_placeholder"]'),
        iconEmploymentType: () => cy.get('[]'),
        rbSalaried: () => cy.get('[data-cy="app.components.Common.salary_data_label1"]', { timeout: 15000 }),
        rbSalaried: () => cy.get('[data-cy="app.components.Common.salary_data_label1"]', { timeout: 15000 }),
        rbSelfEmployed: () => cy.get('[data-cy="app.components.Common.salary_data_label2"]'),
        lblMonthlySalaryOrIncome: () => cy.contains('div', 'Monthly Salary or Income'),
        iconMonthlySalaryOrIncome: () => cy.get('[]'),
        inpSalaryOrIncome: () => cy.get('[data-cy="input_app.components.Eligibility.elg_salary_placeholder"]'),
        lblIncomecannotbelessthanRs5000: () => cy.contains('div', 'Income cannot be less than Rs. 5000'),
        //added elements
        lblIncomecannotexceedthanRs300000: () => cy.contains('div', 'Income cannot exceed Rs. 300000'),  //verify less then 5000
        lblIncomecannotbelessthanRs5000: () => cy.contains('div', 'Income cannot be less than Rs. 5000'),
        //added elements
        lblIncomecannotexceedthanRs300000: () => cy.contains('div', 'Income cannot exceed Rs. 300000'),  //verify less then 5000
        lblSelectCompanyName: () => cy.get('[data-cy="input_app.components.Eligibility.sel_cf2"]').eq(0),
        arrIconSelectCompanyName: () => cy.get('[]'),
        lnkSelectEmploymentCompany: () => cy.get('[data-cy="subtext_app.components.Eligibility.sel_cf2"]'),
        chkBoxConsentHouseholdIncome: () => cy.get('[data-id="checkBox"]'),
        txtConsentHouseholdIncome: () => cy.get('[data-cy="checkboxText_app.components.Eligibility.min_income"]'),
        btnSubmit: () => cy.get('[data-cy="nextBtn"]'),
        iconSelectCompanyName: () => cy.get('[]'),
        valCompanyNamePrefilled: () => cy.get('[]'), // same locator can be used in inpSalaryOrIncome // element type valCompanyNamePrefilled not needed
        lnkEditEmploymentCompanyName: () => cy.get('[class="skins__EditImgCom-s5k7yb-26 bktTFA"]'),
        lnkSearchCompanyfromlist: () => cy.contains('span', 'Search Company from the list'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyEmployementTypeLabel(employeeType) {
        this.elements.lblEmploymentType().should('have.text', employeeType)
    }

    verifyEmploymentTypeIcon() {
        this.elements.iconEmploymentType().find('img').should('be.visible')
    }

    verifySalariedText(salaried) {
        this.elements.rbSalaried().should('have.text', salaried)
    }

    selectSalariedRb() {
        this.elements.rbSalaried().eq(0).dblclick()
    }

    verifySelfEmployedText(selfemployed) {
        this.elements.rbSelfEmployed().should('have.text', selfemployed)
    }

    selectSelfEmployed() {
        this.elements.rbSelfEmployed().click({ force: true })
    }
    // lblMonthlySalaryOrIncome
    verifyMonthlySalaryOrIncomeLabel(monthlyincome) {
        this.elements.lblMonthlySalaryOrIncome().should('have.text', monthlyincome)
    }
    // iconMonthlySalaryOrIncome
    verifyMonthlySalaryOrIncomeIcon() {
        this.elements.iconEmploymentType().find('img').should('be.visible')
    }
    // inpSalaryOrIncome
    enterSalaryOrIncome(salOrIncome) {
        this.elements.inpSalaryOrIncome().type(salOrIncome)
    }
    enterMaxSalaryOrIncome() {
        this.elements.inpSalaryOrIncome().clear()
    }
    clickSalaryOrIncome() {
        this.elements.inpSalaryOrIncome().click()
    }
    clearSalaryOrIncome() {
        this.elements.inpSalaryOrIncome().clear()
    }

    verifyPrefilledSalaryOrIncomeValue(MonthlySalaryOrIncomeValue) {
        this.elements.inpSalaryOrIncome().should('have.value', MonthlySalaryOrIncomeValue)
    }

    verifyPlaceholderForMonthlyOrSalayIncome(MonthlySalaryOrIncome) {
        this.elements.inpSalaryOrIncome().should('have.text', MonthlySalaryOrIncome)
    }

    verifyIncomeCannotLessThen5000(min_income) {
        this.elements.lblIncomecannotbelessthanRs5000().should('have.text', min_income)
    }
    //verify less then 300000
    verifyIncomeCannotLessThen300000(max_income) {
        this.elements.lblIncomecannotexceedthanRs300000().should('have.text', max_income)
    }

    verifyIncomeCannotLessThen5000(min_income) {
        this.elements.lblIncomecannotbelessthanRs5000().should('have.text', min_income)
    }
    //verify less then 300000
    verifyIncomeCannotLessThen300000(max_income) {
        this.elements.lblIncomecannotexceedthanRs300000().should('have.text', max_income)
    }
    // lblSelectCompanyName
    verifySelectCompanyNameLabel(SelectCompayName) {
        this.elements.lblSelectCompanyName().should('have.text', SelectCompayName)
    }
    // iconCompanyName
    verifyCompanyNameIcon() {
        this.elements.iconCompanyName().find('img').should('be.visible')
    }

    verifySelectEmploymentCompanyLink() {
        this.elements.lnkSelectEmploymentCompany().should('exist')
    }
    // lnkSelectEmploymentCompany,
    clickSelectEmploymentCompany() {
        this.elements.lnkSelectEmploymentCompany().click({ force: true })
    }

    verifySelectEmploymentCompanyLink() {
        this.elements.lnkSelectEmploymentCompany().should('be.visible')
    }
    verifySelectEmploymentCompanyLinkDisabled() {
        this.elements.lnkSelectEmploymentCompany().should('not.exist')
    }

    verifyCompanyNamePrefilledValue(companynameprefilled) {
        this.elements.lnkSelectEmploymentCompany().should('have.value', companynameprefilled)
    }

    verifySelectEmploymentCompanyLabel(employmentcompany) {
        this.elements.lnkSelectEmploymentCompany().should('have.text', employmentcompany)
    }
    // iconSelectCompanyName
    verifySelectCompanyNameIcon() {
        this.elements.iconSelectCompanyName().find('img').should('be.visible')
    }

    clickSelectCompanyNameIcon() {
        this.elements.iconSelectCompanyName().click()
    }
    // chkBoxConsentHouseholdIncome
    verifyConsentHouseHoldIncomeChkBox() {
        this.elements.chkBoxConsentHouseholdIncome().should('be.checked')
    }
    // txtConsentHouseholdIncome
    verifyConsentHouseHoldIncomeText(houseHoldIncome) {
        this.elements.txtConsentHouseholdIncome().should('have.text', houseHoldIncome)
    }
    // btnSubmit
    verifySumitText(submit) {
        this.elements.btnSubmit().should('have.text', submit)
    }

    clickSubmitBtn() {
        this.elements.btnSubmit().click({ force: true })
    }

    verifylnkSelectEmploymentCompanyNotExist() {
        this.elements.lnkSelectEmploymentCompany().should('not.exist')
    }

    clickConsentHouseHoldIncomeText() {
        this.elements.txtConsentHouseholdIncome().click()
    }

    verifySubmitBtnDisabled() {
        this.elements.btnSubmit().should('be.disabled')
    }

    verifySubmitBtnEnabled() {
        this.elements.btnSubmit().should('be.enabled')
    }
    clickEditCompanyNameLink() {
        this.elements.lnkEditEmploymentCompanyName().click({ force: true })
    }
    clickSearchCompanyfromlistLink(){
        this.elements.lnkSearchCompanyfromlist().click({force:true})
    }
}

export const incomeDetailsPage = new IncomeDetailsPage()
