/// <reference types = "cypress" />
export class InsurancePolicyPaymentPage {

    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }

    elements ={
        pageTitle: () => cy.getIframeBody().contains('span','Payment'),
        iconHelp : () => cy.get('[]'),
        lblPolicy : () => cy.get('[]'),
        txtPolicy : () => cy.get('[]'),
        lblSumInsured: () => cy.get('[]'),
        valSumInsured : () => cy.get('[]'),
        lblInsurer : () => cy.get('[]'),
        txtInsurer : () => cy.get('[]'),
        lblPolicyPeriod : () => cy.get('[]'),
        valPolicyPeriod : () => cy.get('[]'),
        iconPayment : () => cy.get('[]'),
        lblPremiumAmount : () => cy.get('[]'),
        lblPremiumAmount : () => cy.getIframeBody().contains('Premium Amount :'),
        valPremiumAmount :() => cy.getIframeBody().contains('₹ 300'),
        lblGST : () => cy.getIframeBody().contains('p','GST(18% on premium) :'),
        valGST : () => cy.getIframeBody().contains('p','₹ 54'),
        lblTotalAmount : () => cy.getIframeBody().contains('p','Total Amount :'),
        valTotalAmount : () => cy.getIframeBody().contains('p','₹ 354'),
        btnConfirmAndPay : () => cy.getIframeBody().contains('button','Confirm and Pay'),
        lblGST : () => cy.getIframeBody().contains('p','GST(18% on premium) :',{timeout:1000}),
        valGST : () => cy.getIframeBody().contains('p','₹ '),
        lblTotalAmount : () => cy.getIframeBody().contains('p','Total Amount :'),
        valTotalAmount : () => cy.getIframeBody().contains('p','₹ 354'),
        iconInfo : () => cy.get('[]'),
        txtInfoPayment : () => cy.get('[]'),
        btnConfirmAndPay : () => cy.getIframeBody().contains('button','Confirm and Pay',{Timeout:5000}).should('be.visible'),
        btnConfirmPay:()=>cy.getIframeBody().find('[data-cy="btn"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyGSTAmountLabel(GST) {
        this.elements.lblGST().should('have.text', GST)
    }

    verifyGSTAmountValue(VALUE) {
        this.elements.valGST().should('have.text', VALUE)
    }

    verifyTotalAmountLabel(Total) {
        this.elements.lblTotalAmount().should('have.text', Total)
    }

    verifyTotalAmountValue(VALUE) {
        this.elements.valTotalAmount().should('have.text', VALUE)
    }

    verifyConfirmAndPayButton(confirmandpay) {
        this.elements.btnConfirmAndPay().should('be.visible').should('have.text', confirmandpay)
    }

    verifyGSTLabel(text){
        this.elements.lblGST().should('have.text',text)
    }

    verifyGSTValue(value){
        this.elements.valGST().should('have.text',value)
    }

    clickConfirmAndPayButton(){
        this.elements.btnConfirmAndPay().click()
    }

    verifyPremiumAmountLabel(text){
        this.elements.lblPremiumAmount().should('have.text',text)
    }
    verifyPremiumAmountValue(amount){
        this.elements.valPremiumAmount().should('have.text',amount)        
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyGSTAmountLabel(GST) {
        this.elements.lblGST().should('have.text', GST)
    }

    verifyGSTAmountValue(VALUE) {
        this.elements.valGST().should('have.text', VALUE)
    }

    verifyTotalAmountLabel(Total) {
        this.elements.lblTotalAmount().should('have.text', Total)
    }

    verifyTotalAmountValue(VALUE) {
        this.elements.valTotalAmount().should('have.text', VALUE)
    }

    verifyConfirmAndPayButton(confirmandpay) {
        this.elements.btnConfirmAndPay().should('be.visible').should('have.text', confirmandpay)
    }


    clickConfirmAndPayButton(){
        this.elements.btnConfirmAndPay().click()
    }

    verifyPremiumAmountLabel(text){
        this.elements.lblPremiumAmount().should('have.text',text)
    }
    verifyPremiumAmountValue(amount){
        this.elements.valPremiumAmount().should('have.text',amount)        
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyGSTAmountLabel(GST) {
        this.elements.lblGST().should('have.text', GST)
    }

    verifyGSTAmountValue(VALUE) {
        this.elements.valGST().should('have.text', VALUE)
    }

    verifyTotalAmountLabel(Total) {
        this.elements.lblTotalAmount().should('have.text', Total)
    }

    verifyTotalAmountValue(VALUE) {
        this.elements.valTotalAmount().should('have.text', VALUE)
    }

    verifyConfirmAndPayButton(confirmandpay) {
        this.elements.btnConfirmAndPay().should('be.visible').should('have.text', confirmandpay)
    }
}

export const insurancePolicyPaymentPage = new InsurancePolicyPaymentPage()