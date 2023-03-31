/// <reference types = "cypress" />

export class GoldDeliveryPage {

    details = {
        zeplin: () => 'https://zpl.io/vMqY8oj',
        overflow: () => 'https://overflow.io/s/W0E7DPNH/?node=1e4ba720',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblPincode: () => cy.get('[data-cy="label_picncode_checks"]'),
        iconPincode: () => cy.get('[]'),
        inpPincode: () => cy.get('[data-cy="input_picncode_checks"]'),
        chkCoin: () => cy.get('[]'),
        chkBar: () => cy.get('[]'),
        iconMenu: () => cy.get('[]'),
        menuOption0: () => cy.get('[]'),
        menuOption1: () => cy.get('[]'),
        menuOption2: () => cy.get('[]'),
        menuOption3: () => cy.get('[]'),
        iconGoldCoin: () => cy.get('[data-cy="productImage"]'),
        lbl1gmSafeGoldCoin: () => cy.get('[]'),
        valGoldCoin1gm: () => cy.get('[data-cy="productPrice"]'),
        lbl1gm: () => cy.get('[]'),
        val1gm: () => cy.get('[data-cy="productPrice"]'),
        lbl2gmSafeGoldCoin: () => cy.get('[]'),
        valGoldCoin2gm: () => cy.get('[data-cy="productPrice"]'),
        lbl30gm: () => cy.get('[]'),
        val30gm: () => cy.get('[data-cy="productPrice"]'),
        lbl5gmSafeGoldCoin: () => cy.get('[]'),
        valGoldCoin5gm: () => cy.get('[data-cy="productPrice"]'),
        lbl10GramSafeGoldCoin: () => cy.get('[]'),
        valGoldCoin10gm: () => cy.get('[data-cy="productPrice"]'),
        iconGoldBar: () => cy.get('[data-cy="productImage"]'),
        lbl5gmSafeGoldBar: () => cy.get('[]'),
        valGoldBar5gm: () => cy.get('[data-cy="productPrice"]'),
        lbl10gmSafeGoldBar: () => cy.get('[]'),
        valGoldBar10gm: () => cy.get('[data-cy="productPrice"]'),
        lbl20gmSafeGoldBar: () => cy.get('[]'),
        valGoldBar20gm: () => cy.get('[data-cy="productPrice"]'),
        lbl22gm: () => cy.get('[]'),
        valGoldBar22gm: () => cy.get('[data-cy="productPrice"]'),
        errmsgMaximumTransactionReach: () => cy.contains('span', 'Maximum transactions limit reached for the day.'),
        lblerrorMsg: () => cy.contains('span', 'Service temporarily not available'),
    }
    verifyPageTitle(text) {
        this.elements.pageTitle().should('have.text', text)
    }
    verifyPincodeLabel(text) {
        this.elements.lblPincode().should('have.text', text)
    }
    verifyPinCodeIcon() {
        this.elements.iconPincode().should('be.visible')
    }
    enterPinCodeInput() {
        this.elements.inpPincode().clear().type('560017')
    }
    clickCoinCheckBox() {
        this.elements.chkCoin().click()
    }
    clickBarCheckBox() {
        this.elements.chkBar().click()
    }
    verifyMenuIcon() {
        this.elements.iconMenu().should('be.visible')
    }
    clickMenuIcon() {
        this.elements.iconMenu().click()
    }
    clickOption0Menu() {
        this.elements.menuOption0().click()
    }
    clickOption1Menu() {
        this.elements.menuOption1().click()
    }
    clickOption2Menu() {
        this.elements.menuOption2().click()
    }
    clickOption3Menu() {
        this.elements.menuOption3().click()
    }
    verifyGoldCoinIcon() {
        this.elements.iconGoldCoin().should('be.visible')
    }
    verify1gmSafeGoldCoinLabel() {
        this.elements.lbl1gmSafeGoldCoin().should('be.visible')
    }
    verifyGoldCoin1gmValue() {
        this.elements.valGoldCoin1gm().should('be.visible')
    }
    verify1gmLabel() {
        this.elements.lbl1gm().should('be.visible')
    }
    verify1gmValue() {
        this.elements.val1gm().should('be.visible')
    }
    verify2gmSafeGoldCoinLabel() {
        this.elements.lbl2gmSafeGoldCoin().should('be.visible')
    }
    verifyGoldCoin2gmValue() {
        this.elements.valGoldCoin2gm().should('be.visible')
    }
    verify30gmLabel() {
        this.elements.lbl30gm().should('be.visible')
    }
    verify30gmValue() {
        this.elements.val30gm().should('be.visible')
    }
    verify5gmSafeGoldCoinLabel() {
        this.elements.lbl5gmSafeGoldCoin().should('be.visible')
    }
    verifyGoldCoin5gmValue() {
        this.elements.valGoldCoin5gm().should('be.visible')
    }
    verify10GramSafeGoldCoinLabel() {
        this.elements.lbl10GramSafeGoldCoin().should('be.visible')
    }
    verifyGoldCoin10gmValue() {
        this.elements.valGoldCoin10gm().should('be.visible')
    }
    verifyGoldBarIcon() {
        this.elements.iconGoldBar().should('be.visible')
    }
    verify5gmSafeGoldBarLabel() {
        this.elements.lbl5gmSafeGoldBar().should('be.visible')
    }
    verifyGoldBar5gmValue() {
        this.elements.valGoldBar5gm().should('be.visible')
    }
    verify10gmSafeGoldBarLabel() {
        this.elements.lbl10gmSafeGoldBar().should('be.visible')
    }
    verifyGoldBar10gmValue() {
        this.elements.valGoldBar10gm().should('be.visible')
    }
    verify20gmSafeGoldBarLabel(text) {
        this.elements.lbl20gmSafeGoldBar().should('have.text', text)
    }
    verifyGoldBar20gmValue() {
        this.elements.valGoldBar20gm().should('be.visible')
    }
    verify22gmLabel() {
        this.elements.lbl22gm().should('be.visible')
    }
    verifyGoldBar22gmValue() {
        this.elements.valGoldBar22gm().should('be.visible')
    }
    clickGoldCoinIcon() {
        this.elements.iconGoldCoin().eq(0).click()
    }
    verifyMaximumTransactionReachErrorMessage(errmsg) {
        this.elements.errmsgMaximumTransactionReach().should('have.text', errmsg)
    }
    verifyErrorMessageNotVisible() {
        this.elements.errmsgMaximumTransactionReach().should('not.exist')
    }
    verifyErrorMessageLabel() {
        this.elements.lblerrorMsg().should('be.visible')
    }
}

export const goldDeliveryPage = new GoldDeliveryPage()