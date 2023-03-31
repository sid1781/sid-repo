/// <reference types = "cypress" />
export class VerifyHouseholdIncomePage {

    details = {
        zeplin: () => '', // TODO: Zeplin need to be updated by UI/UX 
        overflow: () => '', // TODO: Overflow need to be updated
    }

    elements = {
        pageTitle: () => cy.get('[]'),
        lblEarningMembers: () => cy.get('[data-cy="app.components.extraDetails.earning_members"]'),
        iconMembers: () => cy.get('[]'),
        btnMember4: () => cy.get('[data-cy="4"]'),
        btnMember3: () => cy.get('[data-cy="3"]'),
        btnMember2: () => cy.get('[data-cy="2"]'),
        btnMember1: () => cy.get('[data-cy="1"]'),
        lblMyMonthlyIncome: () => cy.get('[data-cy="label_app.components.extraDetails.verify_monthly_income"]'),
        iconMyMonthlyIncome: () => cy.get('[]'),
        iconRupee: () => cy.get('[]'),
        inpMyMonthlyIncome: () => cy.get('[data-cy="rupee_input_app.components.extraDetails.verify_monthly_income"]'),
        lblFamilyMembersIncome: () => cy.get('[data-cy="label_app.components.extraDetails.total_monthly_income"]'),
        iconFamilyMembersIncome: () => cy.get('[]'),
        inpFamilyMembersIncome: () => cy.get('[data-cy="rupee_input_app.components.extraDetails.total_monthly_income"]'),
        lblOtherModesOfIncome: () => cy.contains('span', 'OTHER MODES OF INCOME'),
        lblRent: () => cy.get('[data-cy="checkboxText"]').eq(0),
        chkBoxRent: () => cy.get('[data-cy="checkboxText"]'),
        inpRent: () => cy.get('[data-cy="rupee_input_app.components.extraDetails.rent_source_income"]'),
        lblPension: () => cy.get('[data-cy="checkboxText"]').eq(1),
        chkBoxPension: () => cy.get('[data-cy="checkboxText"]').eq(1),
        inpPension: () => cy.get('[data-cy="rupee_input_app.components.extraDetails.pension_source_income"]'),
        lblOther: () => cy.get('[data-cy="checkboxText"]').eq(2),
        chkBoxOther: () => cy.get('[data-cy="checkboxText"]').eq(2),
        inpOther: () => cy.get('[data-cy="rupee_input_app.components.extraDetails.name_other_source"]'),
        iconHigherCreditLimit: () => cy.get('[]'),
        txtHigherCreditLimit: () => cy.get('[]'),
        btnContinue: () => cy.contains('button', 'Continue'),
        lblAssetsOwned: () => cy.contains('span', 'ASSETS OWNED'),
        lblLand: () => cy.get('[data-cy="checkboxText"]'),
        chkBoxLand: () => cy.get('[]'),
        lblHouseOrApartment: () => cy.get('[data-cy="checkboxText"]'),
        chkBoxHouseorApartment: () => cy.get('[]'),
        lblGold: () => cy.get('[data-cy="checkboxText"]'),
        chkBoxGold: () => cy.get('[]'),
        lbl2Wheeler: () => cy.get('[data-cy="checkboxText"]'),
        chkBox2Wheeler: () => cy.get('[]'),
        lbl3Wheeler: () => cy.get('[data-cy="checkboxText"]'),
        chkBox3Wheeler: () => cy.get('[]'),
        lbl4Wheeler: () => cy.get('[data-cy="checkboxText"]'),
        chkBox4Wheeler: () => cy.get('[]'),
        lblCommercialVehicle: () => cy.get('[data-cy="checkboxText"]'),
        lblItemsOwned: () => cy.contains('span', 'HOUSEHOLD ITEMS OWNED'),
        lblSelectAll: () => cy.get('[data-cy="checkboxText"]'),
        chkBoxSelectAll: () => cy.get('[]'),
        lblTV: () => cy.get('[data-cy="checkboxText"]'),
        chkBoxTV: () => cy.get('[]'),
        lblFridge: () => cy.get('[data-cy="checkboxText"]'),
        chkBoxFridge: () => cy.get('[]'),
        lblWashingMachine: () => cy.get('[data-cy="checkboxText"]'),
        chkBoxWashingMachine: () => cy.get('[]'),
        lblFurniture: () => cy.get('[data-cy="checkboxText"]'),
        chkBoxFurniture: () => cy.get('[]'),
        lblAirConditioner: () => cy.get('[data-cy="checkboxText"]'),
        chkBoxAirConditioner: () => cy.get('[]'),
        btnSubmit: () => cy.contains('button', 'Submit'),
        lblMonthlyIncomeErrorMsg: () => cy.contains('Income cannot be blank'),
        lblOtherNameErrorMsg: () => cy.contains('Name cannot be blank'),
        lblOtherIncomeErrorMsg: () => cy.contains('Income cannot be blank'),
        inpNameOfTheOtherSourceIncome: () => cy.get('[data-cy="rupee_input_app.components.extraDetails.name_other_source"]'),
        inpIncomeEarnedFromOtherSource: () => cy.get('[data-cy="rupee_input_app.components.extraDetails.other_source_income"]'),
        inpPension: () => cy.get('[data-cy="rupee_input_app.components.extraDetails.pension_source_income"]'),
        inpRent: () => cy.get('[data-cy="rupee_input_app.components.extraDetails.rent_source_income"]'),
        lblWarningMsg: () => cy.get('[data-cy="app.components.extraDetails.income_info"]'),
        btnRefresh: () => cy.contains('span','REFRESH ')
    }

    verifyEarningMemberslabel(earningmembers) {
        this.elements.lblEarningMembers().should('have.text', earningmembers)
    }

    verifyMonthlyIncomeLabel(text) {
        this.elements.lblMyMonthlyIncome().should('have.text', text)
    }

    verifyOtherModesOfSalarylabel(label) {
        this.elements.lblOtherModesOfIncome().should('have.text', label)
    }

    verifyContinueButton(button) {
        this.elements.btnContinue().should('have.text', button)
    }

    clickMember3Button() {
        this.elements.btnMember3().click()
    }

    EnterFamilyMemberIncome() {
        this.elements.inpFamilyMembersIncome().type('25000')
    }

    clickRentCheckBox() {
        this.elements.lblRent().eq(0).click({ force: true })
    }

    EnterRentInput() {
        this.elements.inpRent().type('25000')
    }

    clickContinueButton() {
        this.elements.btnContinue().click()
    }

    clickLandLabel() {
        this.elements.lblLand().eq(0).click()
    }

    clickSelectAllLabel() {
        this.elements.lblSelectAll().eq(7).click()
    }

    clickSubmitButton() {
        this.elements.btnSubmit().click()
    }
    verifyAssetsOwnedLabel(text) {
        this.elements.lblAssetsOwned().should('have.text', text)
    }
    verifyLandLabel(text) {
        this.elements.lblLand().eq(0).should('have.text', text)
    }
    verifyHouseOrApartmentLabel(text) {
        this.elements.lblHouseOrApartment().eq(1).should('have.text', text)
    }
    verifyGoldLabel(text) {
        this.elements.lblGold().eq(2).should('have.text', text)
    }
    verify2WheelerLabel(text) {
        this.elements.lbl2Wheeler().eq(3).should('have.text', text)
    }

    click2WheelerLabel() {
        this.elements.lbl2Wheeler().click()
    }
    verify3WheelerLabel(text) {
        this.elements.lbl3Wheeler().eq(4).should('have.text', text)
    }
    verify4WheelerLabel(text) {
        this.elements.lbl4Wheeler().eq(5).should('have.text', text)
    }
    verifyCommercialVehicleLabel(text) {
        this.elements.lblCommercialVehicle().eq(6).should('have.text', text)
    }
    verifyItemsOwnedLabel(text) {
        this.elements.lblItemsOwned().should('have.text', text)
    }
    verifySelectAllLabel(text) {
        this.elements.lblSelectAll().eq(7).should('have.text', text)
    }
    verifyTVLabel(text) {
        this.elements.lblTV().eq(8).should('have.text', text)
    }
    verifyFridgeLabel(text) {
        this.elements.lblFridge().eq(9).should('have.text', text)
    }
    verifyWashingMachineLabel(text) {
        this.elements.lblWashingMachine().eq(10).should('have.text', text)
    }
    verifyFurnitureLabel(text) {
        this.elements.lblFurniture().eq(11).should('have.text', text)
    }
    verifyAirConditionerLabel(text) {
        this.elements.lblAirConditioner().eq(12).should('have.text', text)
    }
    verifyMonthlyIncomeErrorMessageLabel(text) {
        this.elements.lblMonthlyIncomeErrorMsg().should('have.text', text)
    }
    clickOtherCheckBox() {
        this.elements.chkBoxOther().click()
    }

    verifyOtherNameErrorMessageLabel(text) {
        this.elements.lblOtherNameErrorMsg().should('have.text', text)
    }
    verifyOtherIncomeErrorMessageLabel(text) {
        this.elements.lblOtherIncomeErrorMsg().should('have.text', text)
    }
    verifyNameOfTheOtherSourceIncomeInput() {
        this.elements.inpNameOfTheOtherSourceIncome().should('be.visible')
    }
    verifyIncomeEarnedFromOtherSourceInput() {
        this.elements.inpIncomeEarnedFromOtherSource().should('be.visible')
    }
    clickPensionrCheckBox() {
        this.elements.chkBoxPension().click()
    }
    verifyPensionInput() {
        this.elements.inpPension().should('be.visible')
    }
    verifyRentInput() {
        this.elements.inpRent().should('be.visible')
    }
    verifyWarningMsgLabel(text) {
        this.elements.lblWarningMsg().should('have.text', text)
    }
    verifyRentLabel(text) {
        this.elements.lblRent().should('have.text', text)
    }
    verifyPensionLabel(text) {
        this.elements.lblPension().should('have.text', text)
    }
    verifyOtherLabel(text) {
        this.elements.lblOther().should('have.text', text)
    }
    verifyFamilyMembersIncomeLabel(text) {
        this.elements.lblFamilyMembersIncome().should('have.text', text)
    }
    verifyMember4Button() {
        this.elements.btnMember4().should('be.visible')
    }
    verifyMember3Button() {
        this.elements.btnMember3().should('be.visible')
    }
    verifyMember2Button() {
        this.elements.btnMember2().should('be.visible')
    }
    verifyMember1Button() {
        this.elements.btnMember1().should('be.visible')
    }

    EnterMyMonthlyIncomeInput(val) {
        this.elements.inpMyMonthlyIncome().should('have.value', val)
    }

    clickRefreshButton() {
        this.elements.btnRefresh().click()
    }
}

export const verifyHouseholdIncomePage = new VerifyHouseholdIncomePage()