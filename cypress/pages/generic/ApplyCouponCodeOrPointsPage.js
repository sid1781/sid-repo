/// <reference types = "cypress" />

class ApplyCouponCodeOrPointsPage {

    details = {
        zeplin: () => 'https://zpl.io/o1REDjW',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=23ce703c',
    }

    elements = {
        //data-cy elements belong to both Coupon code and CSR page - need to confirm with dev as page is same for both 
        pageTitle: () => cy.get('[data-cy="app.components.BDiscount.apply_coupon"]'),
        lblCouponCode: () => cy.get('[data-cy="app.components.BDiscount.coupon_code"]'),
        inpEnterCouponCode: () => cy.get('[data-cy="app.components.BDiscount.code_entry"]'),
        inpCSRCouponCode: () => cy.get('[data-cy="app.components.CreditScore.csr_cc_placeholder"]'),
        placeHolderEnterCouponCode: () => cy.get('[]'),
        btnApply: () => cy.get('[data-cy="app.components.BDiscount.bd_apply"]'),
        iconHelp: () => cy.get('[data-cy="helpImg"]'),
        lblUseKreditbeePoints: () => cy.get('[data-cy="app.components.BDiscount.kb_points"]'),
        lblMaxUsablePoints : () => cy.get('[data-cy="app.components.BDiscount.max_points"]'),
        btnApplyPoints : () => cy.get('[data-cy="app.components.BDiscount.apply_points"]'),
        txtKreditbeePointsCalculation : () => cy.get('[data-cy="simpleInfoMsg"]'),
        lblTotalAvailablePoints : () => cy.get('[data-cy="app.components.BDiscount.total_points"]'),
        lblOR: () => cy.get('[data-cy="app.components.BDiscount.orr"]'),
        iconHelp: () => cy.get('[data-cy="helpIcon"]'),
        lblCouponCodeExpired : () => cy.contains('p','Coupon has Expired'),
        btnRemove : () => cy.contains('span','Remove'),
        btnApply_1: () => cy.get('[data-cy="app.components.CreditScore.csr_apply_coupon_btn"]'),
        btnApplyPointsCSR: () => cy.contains('button', 'Use'),
        txtTotalavailablePoints: () => cy.get('[data-cy="app.components.BDiscount.total_points"]'),
        iconHelp: () => cy.get('img').eq(2),   
        btnApplyPoints30: () =>cy.contains('Use 30 points'),
        btnApplyPoints50: () =>cy.contains('Use 50 points')
    }
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    verifyUseKreditBeePoints(){
        this.elements.lblUseKreditbeePoints().should('be.visible')
    }
    verifyUseKreditbeePointsIsDisabled(){
        this.elements.lblUseKreditbeePoints().should('not.exist')
    }
    clickApplyPointsBtn(){
        this.elements.btnApplyPoints().click()
    }
    verifyTotalAvailablePointsLabel(){
        this.elements.lblTotalAvailablePoints().should('be.visible')
    }
    enterCuponCodeInput(code) {
        this.elements.inpEnterCouponCode().type(code)
    }
    clickApplyBtn() {
        this.elements.btnApply().click()
    }
    clickApplyPointsButton() {
        this.elements.btnApplyPoints().click()
    }
    verifyCouponCodeExpiredLabel(){
        this.elements.lblCouponCodeExpired().should('be.visible')
    }
    // lblCouponCode
    verifyCouponCodeLabel(lblCouponCode) {
        this.elements.lblCouponCode().should('have.text', lblCouponCode)
    }
    // inpEnterCouponCode
    // enterCuponCodeInput(code) {
    //     
    //     lblOR: () => cy.get('[data-cy="app.components.BDiscount.orr"]'),
        
    //     lblMaxUsablePoints100: () => cy.get('[data-cy="app.components.BDiscount.max_points"]'),
    //     btnApplyPoints: () => cy.contains('button','Use'),
    //     txtTotalavailablePoints100: () => cy.get('[data-cy="app.components.BDiscount.total_points"]'),
    //     iconHelp: () => cy.get('[data-cy="helpIcon"]'),
    //     lblErrorMessage: () => cy.get('[data-cy="error_msg"]'),
    //     btnOK: () => cy.get('[data-cy="app.components.Common.ok_btn_uc"]'),
    //     lblCSRCouponExpired: () => cy.get('[data-cy="error_string"]'),
    //     lblRemoveCoupon: () => cy.get('[data-cy="app.components.LoanDetails.placeOrderRmvcoup"]'),
    //     btnRemove: () => cy.get('[data-cy="app.components.BDiscount.bd_remove"]'),
    //     btnkeepIt: () => cy.get('[data-cy="app.components.BDiscount.bd_keep"]')
    // }

    verifyPageTitle(text){
        this.elements.pageTitle().should('have.text',text)
    }
    
    enterCouponCodeInput(code) {
        this.elements.inpEnterCouponCode().type(code)
    }
    // placeHolderEnterCouponCode
    verifyPlaceHolderEnterCouponCode(placeHolderEnterCouponCode) {
        this.elements.placeHolderEnterCouponCode()
            .invoke('attr', 'placeholder').should('contain', placeHolderEnterCouponCode)
    }
    // btnApply
    verifyApplyText(btnApply) {
        this.elements.btnApply().should('have.text', btnApply)
    }

    clickApplyBtn() {
        this.elements.btnApply().click()
    }
    // lblOR
    verifyORLabel(lblOR) {
        this.elements.lblOR().should('have.text', lblOR)
    }
    // lblUseKreditbeePoints
    verifyUseKreditBeePointsLabel(lblUseKreditbeePoints) {
        this.elements.lblUseKreditbeePoints().should('have.text', lblUseKreditbeePoints)
    }
    // lblMaxUsablePoints
    verifyMaxUsablePointsLabel(lblMaxUsablePoints) {
        this.elements.lblMaxUsablePoints().should('have.text', lblMaxUsablePoints)
    }
    // btnApplyPoints
    verifyApplyPointsText(btnApplyPoints) {
        this.elements.btnApplyPoints().should('have.text', btnApplyPoints)
    }

    clickApplyPointsBtn() {
        this.elements.btnApplyPoints().click()
    }
    // txtTotalavailablePoints
    verifyTotalAvailablePointsText(txtTotalavailablePoints) {
        this.elements.txtTotalavailablePoints().should('have.text', txtTotalavailablePoints)
    }
    // iconHelp
    verifyHelpIcon(iconHelp) {
        this.elements.iconHelp().should('have.attr', 'src', iconHelp)
    }

    //CSR methods
    clickApplyPointsCSRBtn() {
        this.elements.btnApplyPointsCSR().click()
    }
    clickApplyPoints30(){
        this.elements.btnApplyPoints30().click()
    }
    clickApplyPoints50(){
        this.elements.btnApplyPoints50().click()
    }
    clickApplyCodeBtn() {
        this.elements.btnApply_1().click()
    }

    enterCSRCouponCode(csrcoupon) {
        this.elements.inpCSRCouponCode().type(csrcoupon)
    }

    verifyInvalidProductCouponCodeLabel(text) {
        this.elements.lblErrorMessage().should('have.text', text)
    }

    verifyInvalidCouponCodeLabel() {
        this.elements.lblErrorMessage()
    }

    verifyExpiredCouponLabel(expired) {
        this.elements.lblErrorMessage().should('have.text', expired)
    }

    verifyOkButton(ok) {
        this.elements.btnOK().should('have.text', ok)
    }

    enterCSRCouponCodeInput(code) {
        this.elements.inpCSRCouponCode().type(code)
    }

    clickCSRApplyButton() {
        this.elements.btnApplyPoints().click()
    }

    verifyCSRExpiredLabel(couponexpired) {
        this.elements.lblCSRCouponExpired().should('have.text', couponexpired)
    }

    verifyRemoveCouponlabel(msg) {
        this.elements.lblRemoveCoupon().should('have.text', msg)
    }

    verifyRemoveButton(remove) {
        this.elements.btnRemove().should('have.text', remove)
    }

    clickRemoveButton() {
        this.elements.btnRemove().click()
    }

    verifyKeepItButton(keep) {
        this.elements.btnkeepIt().should('have.text', keep)
    }

    clickNoKeepItButton() {
        this.elements.btnkeepIt().click()
    }

    verifyApplyPoints30(points30){
        this.elements.btnApplyPoints30().should('have.text',points30)
    }

}
export const applyCouponCodeOrPointsPage = new ApplyCouponCodeOrPointsPage()