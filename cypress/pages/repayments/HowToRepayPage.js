/// <reference types = "cypress" />

 export class HowToRepay{
     elements={
        pageTitle:()=>cy.get('[data-cy="app.components.RepaymentScreen.howto_repay"]'),
        lblKreditbeeApp:()=>cy.get('[]'),
        iconYoutube:()=>cy.get('[]'),
        lblHowCanIRepay:()=>cy.get('[]'),
        iconDebitCard:()=>cy.get('[]'),
        lblDebitCard:()=>cy.get('[data-cy="PM1_paymentModesAvailable"]'),
        iconUPI:()=>cy.get('[]'),
        lblUPI:()=>cy.get('[data-cy="PM2_paymentModesAvailable"]'),
        iconNetBanking:()=>cy.get('[]'),
        lblNetBanking:()=>cy.get('[data-cy="PM3_paymentModesAvailable"]'),
        iconBankTransfer:()=>cy.get('[]'),
        lblBankTransfer:()=>cy.get('[data-cy="PM4_paymentModesAvailable"]'),
        iconWallets:()=>cy.get('[]'),
        lblWallets:()=>cy.get('[data-cy="PM5_paymentModesAvailable"]'),
        iconCash:()=>cy.get('[]'),
        lblCash:()=>cy.get('[data-cy="UPM1_unavailablePaymentModes"]'),
        iconCheque:()=>cy.get('[]'),
        lblCheque:()=>cy.get('[data-cy="UPM2_unavailablePaymentModes"]'),
        iconCreditCard:()=>cy.get('[]'),
        lblCreditCard:()=>cy.get('[data-cy="UPM3_unavailablePaymentModes"]'),
        txtKreditbeeBiller:()=>cy.get('[]'),
        txtOfficialUPIID:()=>cy.get('[]'),
        btnOk:()=>cy.get('[]'),
     }
     verifyPageTitle(title){
        this.elements.pageTitle().eq(1).should('have.text',title)
     }
     verifyDebitCardLabel(text){
        this.elements.lblDebitCard().should('have.text',text)
     }
     verifyUPILabel(text){
        this.elements.lblUPI().should('have.text',text)
     }
     verifyNetBankingLabel(text){
        this.elements.lblNetBanking().should('have.text',text)
     }
     verifyWalletsLabel(text){
        this.elements.lblWallets().should('have.text',text)
     }
     verifyChequeLabel(text){
        this.elements.lblCheque().should('have.text',text)
     }
     verifyCashLabel(text){
        this.elements.lblCash().should('have.text',text)
     }
     verifyCreditCardLabel(text){
        this.elements.lblCreditCard().should('have.text',text)
     }
     
 }
 
 export const howToRepayPage = new HowToRepay()

