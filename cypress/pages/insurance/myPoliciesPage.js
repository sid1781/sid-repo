/// <reference types = "cypress" />

export class MyPoliciesPage {

    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }

    elements ={
    
        pageTitle : () => cy.getIframeBody().contains('span','My Policies'),
        lblPolicyIssued : () => cy.getIframeBody().contains('p','Issued'),
        btnRaiseClaim : () => cy.getIframeBody().contains('button','Raise Claim'),
        lnkCancelPolicy : () => cy.getIframeBody().contains('div','Cancel Policy'),
        lblPolicyRefundedInitiated : () => cy.getIframeBody().contains('p','Refund initiated'),
        txtPolicyRefundedAndCancelled : () => cy.getIframeBody().contains('p','Your policy has been cancelled and your refund is in progress. We will notify you once the refund is processed.'),
        lblPolicyName:()=>cy.getIframeBody().find('[class="skins__Label-sc-8bxqrs-4 blxQlP"]').eq(0).should('have.text','Policy Name'),
        lblPolicyNumber:()=>cy.getIframeBody().find('[class="skins__Label-sc-8bxqrs-4 blxQlP"]').eq(1).should('contain','Policy Number'),
        lblTotalPaid:()=>cy.getIframeBody().contains('p','Total Paid: '),
        lblCoverUpto:()=>cy.getIframeBody().contains('p','Cover Upto: '),
        lblPeriod:()=>cy.getIframeBody().contains('p','Period: '),
        txtCancelPolicy:()=>cy.getIframeBody().find('[class="typography__P-z7jdzb-0 typography__F10-z7jdzb-13 skins__Message-sc-8bxqrs-7 bykyUA"]'),
        btnDownloadPolicy:()=>cy.getIframeBody().contains('button','Download Policy'),
        iconAckoLogo:()=>cy.getIframeBody().find('[class="skins__Logo-sc-8bxqrs-1 eaBQit"]'),
        txtPolicyCancelled:()=>cy.getIframeBody().contains('p','* Your policy has been cancelled and the refund has been processed.'),
        lblPolicyRequested : () => cy.getIframeBody().contains('p','Requested'),
        lblPolicyCancellationRequested : () => cy.getIframeBody().contains('p','Cancellation Requested'),
        txtPolicyCancellationInformation : () => cy.getIframeBody().contains('p','Awaiting policy cancellation information from Acko General Insurance Limited. We will notify you when the policy is cancelled.'),
        txtPolicyCouldNotBeIssuedAndRefundInitiated:()=>cy.getIframeBody().contains('p','Policy could not be issued. Your refund is in progress. We will notify you once the refund is processed.'),
        lblRefunded:()=>cy.getIframeBody().contains('div','Refunded')

    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    }

    verifyPolicyIssuedLabel(title) {
        this.elements.lblPolicyIssued().should('contain.text', title)
    }

    verifyRaiseClaimButton(title) {
        this.elements.btnRaiseClaim().should('contain.text', title)
    }

    clickCancelPolicyLink() {
        this.elements.lnkCancelPolicy().click()
    }

    verifyPolicyRefundInitiatedLabel(title) {
        this.elements.lblPolicyRefundedInitiated().should('contain.text', title)
    }

    verifyPolicyCancelledAndRefundedText(title) {
        this.elements.txtPolicyRefundedAndCancelled().should('contain.text', title)
    }
    verifyPolicyNameLabel(label) {
        this.elements.lblPolicyName().should('contain.text', label)
    }
    verifyPolicyNumberLabel(label){
        this.elements.lblPolicyNumber().should('contain.text', label)
    }
    verifyTotalPaidLabel(label){
        this.elements.lblTotalPaid().should('contain.text', label)
    }
    verifyPeriodLabel(period){
        this.elements.lblPeriod()
    }
    verifyCoverUptoLabel(cover){
        this.elements.lblCoverUpto()
    }
    verifyDownloadPolicyButton(){
        this.elements.btnDownloadPolicy().should('be.visible')
    }
    verifyBtnCancelPolicy(lnkcancel){
        this.elements.lnkCancelPolicy().should('have.text',lnkcancel)
    }
    verifyCancelPolicyText(txtcancel){
        this.elements.txtCancelPolicy()
       .invoke('text').then((text) => {
          expect(text.replace(/\u00a0/g, ' ')).equal(txtcancel)
      });
      }
      verifyAckoLogo(){
          this.elements.iconAckoLogo().should('be.visible')
      }

      verifyPolicyCancelledText(txt){
        this.elements.txtPolicyCancelled().should('have.text',txt)
      }
      verifyPolicyRequestedLabel(title) {
        this.elements.lblPolicyRequested().should('contain.text', title)
    }

    verifyPolicyCancellationRequestedLabel(title) {
        this.elements.lblPolicyCancellationRequested().should('contain.text', title)
    }

    verifyPolicyCancellationInformationText(title) {
        this.elements.txtPolicyCancellationInformation().should('contain.text', title)
    }

    verifyPolicyCouldNotBeIssuedAndRefundInitiatedText(title) {
        this.elements.txtPolicyCouldNotBeIssuedAndRefundInitiated().should('contain.text', title)
    }

    verifyCancelPolicyLink(cancelbtn){
        this.elements.lnkCancelPolicy().should('have.text',cancelbtn)
    }
    verifyCancelPolicyLinkNotVisible(){
        this.elements.lnkCancelPolicy().should('not.exist')
    }
    // verifyPolicyTextCancelled(txt){
    //     this.elements.txtPolicyCancelled().should('have.text',txt)
    // }
    verifyRaiseCliamButtonNotVisible(){
        this.elements.btnRaiseClaim().should('not.exist')
    }
    clickRaiseClaimButton() {
        this.elements.btnRaiseClaim().click()
    }
    verifyRefundedLabel(label){
        this.elements.lblRefunded().should('have.text',label)
    }

    verifyPolicyCancelledText(txtcancel){
        this.elements.txtPolicyCancelled()
       .invoke('text').then((text) => {
          expect(text.replace(/\u00a0/g, ' ')).equal(txtcancel)
      });
      }

    






}

export const myPoliciesPage = new MyPoliciesPage