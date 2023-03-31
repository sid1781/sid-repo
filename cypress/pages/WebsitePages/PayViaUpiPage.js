export class PayViaUpiPage{
    elements={
        lblBack:()=>cy.getIframeBodyWebsite().find('[data-cy="goBackBtn"]'),
        pageTitle:()=>cy.find('[data-cy="BTxtInheritedTitle"]'),
        iconHelp:()=>cy.getIframeBodyWebsite().find('[data-cy="helpImg"]'),
        textAmountPaid:()=>cy.getIframeBodyWebsite().find('[]'),
        valAmountPaid:()=>cy.getIframeBodyWebsite().find('[]'),
        textUPIID:()=>cy.getIframeBodyWebsite().find('[]'),
        inpUPIID:()=>cy.get('[data-cy="vpa"]'),
        btnContinueMakePayment:()=>cy.contains('Continue to make payment'),
        textUPIQR:()=>cy.getIframeBodyWebsite().find('[]'),
        textScanQR:()=>cy.getIframeBodyWebsite().find('[]'),
        iconGPay:()=>cy.getIframeBodyWebsite().find('[class="skins__AppImg-sc-3oi8u3-15 hLVVwp"]'),
        iconponepay:()=>cy.getIframeBodyWebsite().find('[]'),
        iconPaytm:()=>cy.getIframeBodyWebsite().find('[]'),
        iconBhim:()=>cy.getIframeBodyWebsite().find('[]'),
        btnGenerateQR:()=>cy.getIframeBodyWebsite().find('[]'),
    }
    clickBackLabel(){
        this.elements.lblBack().click()
    }
    verifyPageTitle(){
        this.elements.pageTitle().should('be.visible')
    }
    enterUPIID(otp){
        this.elements.inpUPIID().type(otp)
    }
    clickContinueMakePaymentButton(){
        this.elements.btnContinueMakePayment().click()
    }
    clickGpayIcon(){
        this.elements.iconGPay().click()
    }
}
export const  payViaUpiPage= new PayViaUpiPage()