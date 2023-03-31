export class PaymentOptionWebPage {

    details = {
        zeplin: () => '',//TODO: Zeplin Link
        overflow: () => ''//TODO: Zeplin Link
    }

    elements = {
        //Amount Section
        pageTitle: () => cy.getIframeBodyWebsite().find('[data-cy="app.components.SeamlessPG.payment_option_title"]').first(),
        lblAmount: () => cy.getIframeBodyWebsite().find('[data-cy="app.components.SeamlessPG.amount_text"]'),
        iconAmount: () => cy.getIframeBodyWebsite().find('img'),
        txtAmount: () => cy.getIframeBodyWebsite().find('[data-cy="app.components.SeamlessPG.amount_text_pay_amount"]'),
        txtAmountConsent: () => cy.getIframeBodyWebsite().find('[data-cy="convenienceFee1"]'),
        lnkKnowMore: () => cy.getIframeBodyWebsite().find('[data-cy="app.components.SeamlessPG.know_more_text"]'),
        //UPI/QR
        lblUPIQR: () => cy.contains('UPI/QR'),
        btnPayWithUPIQR: () => cy.contains('Pay with UPI/QR'),
        //Debit Card Section
        rbDebitCard: () => cy.getIframeBodyWebsite().find('[data-cy="payment_card_0"]'),
        txtDebitCard: () => cy.contains('Debit Card'),
        subTextDebitCard: () => cy.getIframeBodyWebsite().find('[data-cy="feeOption_0"]'),
        btnPayWithDebitCard: () => cy.getIframeBody().contains('Debit Card'),
        iconDebitCard: () => cy.getIframeBodyWebsite().find('img'),
        //NetBanking section
        rbNetBanking: () => cy.getIframeBodyWebsite().find('[data-cy="payment_card_1"] > table > tbody > :nth-child(1) > .skins__RadioBtnTd-sc-12tl2cf-6 > img'),
        txtNetBanking: () => cy.getIframeBodyWebsite().find('[data-cy="payment_method_1"]'),
        subTextNetBanking: () => cy.getIframeBodyWebsite().find('[data-cy="feeOption_1"]'),
        iconNetBanking: () => cy.getIframeBodyWebsite().find('img'),
        iconSBI: () => cy.getIframeBodyWebsite().find('[data-cy="channelDivImg_0"]'),
        txtSBI: () => cy.getIframeBodyWebsite().find('[data-cy="bankShortName_0"]'),
        iconICICI: () => cy.getIframeBodyWebsite().find('[data-cy="channelDivImg_1"]'),
        txtICICI: () => cy.getIframeBodyWebsite().find('[data-cy="bankShortName_1"]'),
        iconKOTAK: () => cy.getIframeBodyWebsite().find('[data-cy="channelDivImg_2"]'),
        txtKOTAK: () => cy.getIframeBodyWebsite().find('[data-cy="bankShortName_2"]'),
        iconAxis: () => cy.getIframeBodyWebsite().find('[data-cy="channelDivImg_3"]'),
        txtAXIS: () => cy.getIframeBodyWebsite().find('[data-cy="bankShortName_3"]'),
        iconYESBANK: () => cy.getIframeBodyWebsite().find('[data-cy="channelDivImg_4"]'),
        txtYESBANK: () => cy.getIframeBodyWebsite().find('[data-cy="bankShortName_4"]'),
        txtMoreBanks: () => cy.getIframeBodyWebsite().find('[data-cy="app.components.SeamlessPG.more_banks_text"]'),
        lnkMoreBanks: () => cy.getIframeBodyWebsite().find('[data-cy="app.components.SeamlessPG.more_banks_text"]'),
        //Bank Transfer Section
        rbBankTransfer: () => cy.getIframeBodyWebsite().find('[data-cy="payment_card_2"]'),
        textBankTransfer: () => cy.getIframeBodyWebsite().find('[data-cy="payment_method_2"]'),
        subTextBankTransfer: () => cy.getIframeBodyWebsite().find('[data-cy="feeOption_2"]'),
        btnTransferUsingIMPSOrNEFT: () => cy.getIframeBodyWebsite().find('[data-cy="payment_btn_2"]'),
        iconBankTransfer: () => cy.getIframeBodyWebsite().find('img'),
        //Wallet Section
        rbWallet: () => cy.getIframeBodyWebsite().find('[data-cy="payment_card_3"]'),
        txtWallet: () => cy.getIframeBodyWebsite().find('[data-cy="payment_method_3"]'),
        subTextWallet: () => cy.getIframeBodyWebsite().find('[data-cy="feeOption_3"]'),
        iconWallet: () => cy.getIframeBodyWebsite().find('img'),
        iconPAYTM: () => cy.getIframeBodyWebsite().find('[data-cy="channelDivImg_0"]'),
        txtPAYTM: () => cy.getIframeBodyWebsite().find('[data-cy="bankShortName_0"]'),
        iconMOBIKWIK: () => cy.getIframeBodyWebsite().find('[data-cy="channelDivImg_1"]'),
        txtMOBIKWIK: () => cy.getIframeBodyWebsite().find('[data-cy="bankShortName_1"]'),
        iconYESWALLET: () => cy.getIframeBodyWebsite().find('[data-cy="channelDivImg_2"]'),
        txtYESWALLET: () => cy.getIframeBodyWebsite().find('[data-cy="bankShortName_2"]'),
        iconICASH: () => cy.getIframeBodyWebsite().find('[data-cy="channelDivImg_3"]'),
        txtICASH: () => cy.getIframeBodyWebsite().find('[data-cy="bankShortName_3"]'),
        //Blocks
        blockDebitCard: () => cy.getIframeBodyWebsite().find('[data-cy="payment_card_0"]'),
        blockNetBanking: () => cy.contains('NetBanking'),
        blockBankTransfer: () => cy.getIframeBodyWebsite().find('[data-cy="payment_card_2"]'),
        blockWallets: () => cy.getIframeBodyWebsite().find('[data-cy="payment_card_3"]'),
    }

    //Block Debit Card
    clickDebitCardBlock() {
        this.elements.blockDebitCard().click()
    }
    //Block NetBanking
    verifyNetBankingBlock() {
        this.elements.blockNetBanking().should('be.visible')
    }
    clickNetBankingBlock() {
        this.elements.blockNetBanking().click()
    }
    //Block Bank Transfer
    clickBankTransferBlock() {
        this.elements.blockBankTransfer().click()
    }
    //Block Wallets
    clickBlockWalletsBlock() {
        this.elements.blockWallets().click()
    }

    // pageTitle 
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // lblAmount 
    verifyAmountLabel(lblAmount) {
        this.elements.lblAmount().should('have.text', lblAmount)
    }
    // iconAmount 
    verifyAmountRupeeIcon(iconAmount) {
        this.elements.iconAmount().should('have.attr', 'src', iconAmount)
    }
    // txtAmount 
    verifyAmountText(txtAmount) {
        this.elements.txtAmount().should('have.text', txtAmount)
    }
    // txtAmountConsent 
    verifyAmountConsent(txtAmountConsent) {
        this.elements.txtAmountConsent().should('have.text', txtAmountConsent)
    }
    // lnkKnowMore 
    verifyKowMoreLink(lnkKnowMore) {
        this.elements.lnkKnowMore().should('have.text', lnkKnowMore)
    }

    clickKnowMoreLink() {
        this.elements.lnkKnowMore().click()
    }

    verifyUPIQRLabel(lblUPIQR) {
        this.elements.lblUPIQR().should('have.text', lblUPIQR)
    }
    clickUPIQRLabel(lblUPIQR) {
        this.elements.lblUPIQR().click()
    }

    clickPayWithUPIQR() {
        this.elements.btnPayWithUPIQR().click()
    }

    //Debit Card Section
    // rbDebitCard 
    selectDebitCard() {
        this.elements.rbDebitCard().click()
    }
    // txtDebitCard 
    verifyDebitCardText(txtDebitCard) {
        this.elements.txtDebitCard().should('have.text', txtDebitCard)
    }
    // subTextDebitCard 
    verifyDebitCardSubText(subTextDebitCard) {
        this.elements.subTextDebitCard().should('have.text', subTextDebitCard)
    }
    // btnPayWithDebitCard 
    verifyPayWithDebitCardText(btnPayWithDebitCard) {
        this.elements.btnPayWithDebitCard().should('have.text', btnPayWithDebitCard)
    }

    clickPayWithDebitCard() {
        this.elements.btnPayWithDebitCard().click()
    }
    // iconDebitCard 
    verifyDebitCardIcon(iconDebitCard) {
        this.elements.iconDebitCard().should('have.attr', 'src', iconDebitCard)
    }
    //NetBanking section
    // rbNetBanking 
    selectNetBanking() {
        this.elements.rbNetBanking().click()
    }
    // txtNetBanking 
    verifyNetBankingText(txtNetBanking) {
        this.elements.txtNetBanking().should('have.text', txtNetBanking)
    }
    // subTextNetBanking 
    verifyNetBankingSubText(subTextNetBanking) {
        this.elements.subTextNetBanking().should('have.text', subTextNetBanking)
    }
    // iconNetBanking 
    verifyNetBankingIcon(iconNetBanking) {
        this.elements.iconNetBanking().should('have.attr', 'src', iconNetBanking)
    }
    // iconSBI 
    verifySBIBankIcon(iconSBI) {
        this.elements.iconSBI().should('have.attr', iconSBI)
    }
    // txtSBI 
    verifySBIBankText(txtSBI) {
        this.elements.txtSBI().should('have.text', txtSBI)
    }
    // iconICICI 
    verifyICICIBankIcon(iconICICI) {
        this.elements.iconICICI().should('have.text', iconICICI)
    }
    // txtICICI 
    verifyICICIBankText(txtICICI) {
        this.elements.txtICICI().should('have.text', txtICICI)
    }
    // iconKOTAK 
    verifyKOTAKBankICON(iconKOTAK) {
        this.elements.iconKOTAK().should('have.attr', 'src', iconKOTAK)
    }
    // txtKOTAK 
    verifyKOTAKBankText(txtKOTAK) {
        this.elements.txtKOTAK().should('have.text', txtKOTAK)
    }
    // iconAxis 
    verifyAxisIcon(iconAxis) {
        this.elements.iconAxis().should('have.attr', 'src', iconAxis)
    }
    // txtAXIS 
    verifyAXISBankText(txtAXIS) {
        this.elements.txtAXIS().should('have.text', txtAXIS)
    }
    // iconYESBANK 
    verifyYESBankIcon(iconYESBANK) {
        this.elements.iconYESBANK().should('have.text', iconYESBANK)
    }
    // txtYESBANK
    verifyYESBANKText(txtYESBANK) {
        this.elements.txtYESBANK().should('have.text', txtYESBANK)
    }
    // txtMoreBanks 
    verifyMoreBanksText(txtMoreBanks) {
        this.elements.txtMoreBanks().should('have.text', txtMoreBanks)
    }
    // lnkMoreBanks 
    clickMoreBanksBtn() {
        this.elements.txtMoreBanks().click()
    }
    //Bank Transfer Section
    // rbBankTransfer 
    selectBankTransfer() {
        this.elements.rbBankTransfer().click()
    }
    //textBankTransfer
    verifyBankTransferText() {
        this.elements.textBankTransfer().should('have.text', textBankTransfer)
    }

    // subTextBankTransfer 
    verifyBankTransferSubText(subTextBankTransfer) {
        this.elements.subTextBankTransfer().should('have.text', subTextBankTransfer)
    }
    // btnTransferUsingIMPSOrNEFT 
    verifyTransferUsingIMPSOrNEFTText(btnTransferUsingIMPSOrNEFT) {
        this.elements.btnTransferUsingIMPSOrNEFT().should('have.text', btnTransferUsingIMPSOrNEFT)
    }

    clickTransferUsingIMPSOrNEFT() {
        this.elements.btnTransferUsingIMPSOrNEFT().click()
    }
    // iconBankTransfer
    verifyBankTransferIcon(iconBankTransfer) {
        this.elements.iconBankTransfer().should('have.attr', 'src', iconBankTransfer)
    }
    //Wallet Section
    // rbWallet 
    selectWallet() {
        this.elements.rbWallet().click()
    }
    // txtWallet 
    verifyWalletText(txtWallet) {
        this.elements.txtWallet().should('have.text', txtWallet)
    }
    // subTextWallet 
    verifyWalletSubText(subTextWallet) {
        this.elements.subTextWallet().should('have.text', subTextWallet)
    }
    // iconWallet 
    verifyWalletIcon(iconWallet) {
        this.elements.iconWallet().should('have.attr', 'src', iconWallet)
    }
    // iconPAYTM 
    verifyPAYTMIcon(iconPAYTM) {
        this.elements.iconPAYTM().should('have.attr', 'src', iconPAYTM)
    }
    // txtPAYTM 
    verifyPAYTMText(txtPAYTM) {
        this.elements.txtPAYTM().should('have.text', txtPAYTM)
    }
    // iconMOBIKWIK 
    verifyMOBIKWIKIcon(iconMOBIKWIK) {
        this.elements.iconMOBIKWIK().should('have.attr', 'src', iconMOBIKWIK)
    }
    // txtMOBIKWIK 
    verifyMOBIKWIKText(txtMOBIKWIK) {
        this.elements.txtMOBIKWIK().should('have.text', txtMOBIKWIK)
    }
    // iconYESWALLET 
    verifyYESWALLETIcon(iconYESWALLET) {
        this.elements.iconYESWALLET().should('have.text', iconYESWALLET)
    }
    // txtYESWALLET 
    verifyYESWALLETText(txtYESWALLET) {
        this.elements.txtYESWALLET().should('have.text', txtYESWALLET)
    }
    // iconICASH 
    verifyICASHIcon(iconICASH) {
        this.elements.iconICASH().should('have.attr', 'src', iconICASH)
    }
    // txtICASH 
    verifyICASHText(txtICASH) {
        this.elements.txtICASH().should('have.text', txtICASH)
    }
}
export const paymentOptionWebPage = new PaymentOptionWebPage()
