class DigitalGoldInfoPage {

    details = {
        zeplin: () => '', // TODO: Zeplin Link
        overflow: () => '', // TODO: overFLow Link
    }

    elements = {
        pageTitle: () => cy.contains('span', 'Buy 24K Digital Gold'),
        imgGoldBanner: () => cy.get('img').eq(1),
        subTxtDescription: () => cy.contains('span', 'Buy and sell 24K digital gold of 99.99% purity, BIS certified Gold at live market prices and get money transfered to your bank account.'),
        iconBuyGold: () => cy.get('img').eq(2),
        txtBuyGold: () => cy.contains('p', 'Buy Gold'),
        iconSellGold: () => cy.get('img').eq(3),
        txtSellGold: () => cy.contains('p', 'Sell Gold'),
        iconGoldDelivery: () => cy.get('img').eq(4),
        txtGoldDelivery: () => cy.contains('p', '24K Gold Delivery'),
        iconSecure: () => cy.get('img').eq(5),
        txtSecure: () => cy.contains('p', '100% Secure'),
        btnLoginWithMobile: () => cy.get('button'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyGoldBannerImage(goldbannerImage) {
        this.elements.imgGoldBanner().should('have.attr', 'src', goldbannerImage)
    }

    verifyDescriptionSubText(desc) {
        this.elements.subTxtDescription().should('have.text', desc)
    }

    verifyBuyGoldIcon(iconBuyGold) {
        this.elements.iconBuyGold().should('have.attr', 'src', iconBuyGold)
    }

    verifyBuyGoldText(buyGold) {
        this.elements.txtBuyGold().should('have.text', buyGold)
    }

    verifySellGoldIcon(iconSellGold) {
        this.elements.iconSellGold().should('have.attr', 'src', iconSellGold)
    }

    verifySellGoldText(sellGold) {
        this.elements.txtSellGold().should('have.text', sellGold)
    }

    verifyGoldDelivertIcon(iconGoldDelivery) {
        this.elements.iconGoldDelivery().should('have.attr', 'src', iconGoldDelivery)
    }

    verifyGoldDeliveryText(txtGoldDelivery) {
        this.elements.txtGoldDelivery().should('have.text', txtGoldDelivery)
    }

    verifySecureIcon(iconSecure) {
        this.elements.iconSecure().should('have.attr', 'src', iconSecure)
    }

    verifySecureText(txtSecure) {
        this.elements.txtSecure().should('have.text', txtSecure)
    }

    verifyLoginWithMobileText(loginWithMobileText) {
        this.elements.btnLoginWithMobile().should('have.text', loginWithMobileText)
    }

    clickLoginWithMobileBtn() {
        this.elements.btnLoginWithMobile().click()
    }
}
export const digitalGoldInfoPage = new DigitalGoldInfoPage()