/// <reference types = "cypress" />

export class ReferAndEarn {
    details = {
        zeplin: () => 'https://zpl.io/2pR784J',
        zeplin_variation: () => 'https://zpl.io/29GZqZp',
        zeplin_variation1: () => 'https://zpl.io/a7PkZQq',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.ReferAndEarn.ref_and_earn"]'),
        iconKBPoints: () => cy.get('[data-cy="kbPointsImg"]'),
        valKBPoints: () => cy.get('[data-cy="availablePoints"]'),
        lblKBPoints: () => cy.get('[data-cy="app.components.ReferAndEarn.kb_points"]'),
        lblYourReferralCode: () => cy.get('[data-cy="app.components.ReferAndEarn.your_ref_code"]'),
        valReferralCode: () => cy.get('[data-cy="referralCode"]'),
        btnClickToCopy: () => cy.get('[data-cy="app.components.ReferAndEarn.click_to_copy"]'),
        iconShare: () => cy.get('[data-cy="shareImgPath"]'),
        btnShare: () => cy.get('[data-cy="app.components.ReferAndEarn.re_share"]'),
        txtKnowMore: () => cy.get('[data-cy="app.components.ReferAndEarn.proc_disc"]'),
        lnkKnowMore: () => cy.get('[data-cy="app.components.ReferAndEarn.know_more"]'),
        lblShareVia: () => cy.get('[data-cy="app.components.ReferAndEarn.share_via"]'),
        iconWhatsapp: () => cy.get('[data-cy="shareOption"]'),
        iconMessenger: () => cy.get('[data-cy="shareOption"]'),
        iconInstagram: () => cy.get('[data-cy="shareOption"]'),
        iconMessage: () => cy.get('[data-cy="shareOption"]'),
        iconRedeemPoints: () => cy.get('[data-cy="redeemPtsImg"]'),
        lblRedeemPoints: () => cy.get('[data-cy="app.components.ReferAndEarn.redeemPoints"]'),
        txtMyReferrals: () => cy.get('[data-cy="referEarnBtnTxt"]'),
        arrMyReferrals: () => cy.get('[data-cy="ImgEnter_0"]'),
        txtMyPointsHistory: () => cy.get('[data-cy="referEarnBtnTxt"]'),
        arrMyPointsHistory: () => cy.get('[data-cy="ImgEnter_1"]'),
        txtHowToEarn: () => cy.get('[data-cy="referEarnBtnTxt"]'),
        arrHowToEarn: () => cy.get('[data-cy="ImgEnter_2"]'),

    }

    // pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    }

    // iconKBPoints
    verifyKBPointsIcon(iconKBPoints) {
        this.elements.iconKBPoints().should('have.attr', 'src', iconKBPoints)
    }
    // valKBPoints
    verifyKBPointsText(valKBPoints) {
        this.elements.valKBPoints().should('have.text', valKBPoints)
    }
    // lblKBPoints
    verifyKBPointsLabel(lblKBPoints) {
        this.elements.lblKBPoints().should('have.text', lblKBPoints)
    }
    // lblYourReferralCode
    verifyYourReferralCodeLabel(lblYourReferralCode) {
        this.elements.lblYourReferralCode().should('have.text', lblYourReferralCode)
    }
    // valReferralCode
    verifyReferralCodeText(valReferralCode) {
        this.elements.valReferralCode().should('have.text', valReferralCode)
    }
    // btnClickToCopy
    clickClickToCopyBtn() {
        this.elements.btnClickToCopy().click()
    }
    // iconShare
    verifyShareIcon1(iconShare) {
        this.elements.iconShare().should('have.attr', iconShare)
    }
    // btnShare
    clickShareBtn(btnShare) {
        this.elements.btnShare().click()
    }
    // txtKnowMore
    verifyKnowMoreText(txtKnowMore) {
        this.elements.txtKnowMore().should('have.text', txtKnowMore)
    }
    // lnkKnowMore
    verifyKnowMoreLink(lnkKnowMore) {
        this.elements.lnkKnowMore().should('have.text', lnkKnowMore)
    }
    // lblShareVia
    verifyShareVia(lblShareVia) {
        this.elements.lblShareVia().should('have.text', lblShareVia)
    }
    // iconWhatsapp
    verifyWhatsappIcon(iconWhatsapp) {
        this.elements.iconWhatsapp().should('have.attr', 'src', iconWhatsapp)
    }
    // iconMessenger
    verifyMessengerIcon(iconMessenger) {
        this.elements.iconMessenger().should('have.attr', iconMessenger)
    }
    // iconInstagram
    verifyInstagramIcon(iconInstagram) {
        this.elements.iconInstagram().should('have.attr', iconInstagram)
    }
    // iconMessage
    verifyMessageIcon(iconMessage) {
        this.elements.iconMessage().should('have.text', iconMessage)
    }
    // iconRedeemPoints
    verifuRedeemPoints(iconRedeemPoints) {
        this.elements.iconRedeemPoints().should('have.attr', 'src', iconRedeemPoints)
    }
    // txtMyReferrals
    verifyMyReferralsText(referral) {
        this.elements.txtMyReferrals().eq(0).should('contain.text', referral)
    }
    // arrMyReferrals
    clickMyRefferralLink() {
        this.elements.arrMyReferrals().click()
    }
    // txtMyPointsHistory
    verifyMyPointsHistoryText(MyPointsHistory) {
        this.elements.txtMyPointsHistory().eq(1).should('contain.text', MyPointsHistory)
    }
    // arrMyPointsHistory
    clickMyPointsHistoryText() {
        this.elements.arrMyPointsHistory().click()
    }
    // txtHowToEarn
    verifyHowToEarnText(HowToEarn) {
        this.elements.txtHowToEarn().eq(2).should('contain.text', HowToEarn)
    }
    // arrHowToEarn
    clickHowTOEarnLink() {
        this.elements.arrHowToEarn().click()
    }
    //RedeemPoints
    verifyRedeemPointsLabel(redeempoints){
        this.elements.lblRedeemPoints().should('have.text',redeempoints)
    }
    verifyRedeemPointsDesabledLabel(){
        this.elements.lblRedeemPoints().should('not.exist')
    }
    clickRedeemPointsLabel(){
        this.elements.lblRedeemPoints().click()
    }
}

export const referAndEarn = new ReferAndEarn