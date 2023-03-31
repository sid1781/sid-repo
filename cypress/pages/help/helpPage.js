/// <reference types = "cypress" />

export class Help {
    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.ContactUs.header_title_text"]'),
        lblWhatCanWeHelp: () => cy.get('[data-cy="app.components.ContactUs.what_can_you_title"]'),
        iconCreditLineEnhancement: () => cy.get('[]'),
        lblCreditLimitEnhancement: () => cy.get('[data-cy="title_0"]'),
        iconLoanProductEnquiry: () => cy.get('[]'),
        lblLoanProductEnquiry: () => cy.get('[data-cy="title_1"]'),
        iconLoanRepayment: () => cy.get('[]'),
        lblLoanRepayment: () => cy.get('[data-cy="title_2"]'),
        iconLoanDisbursal: () => cy.get('[]'),
        lblLoanDisbursal: () => cy.get('[data-cy="title_3"]'),
        iconProfileVerification: () => cy.get('[]'),
        lblProfileVerification: () => cy.get('[data-cy="title_4"]'),
        iconDidntFindYourQuery: () => cy.get('[]'),
        lblDidntFindYourQuery: () => cy.get('[data-cy="title_5"]'),
        txtStillNeedHelp: () => cy.get('[data-cy="app.components.ContactUs.still_need_help"]'),
        btnContactUs: () => cy.get('[data-cy="app.components.ContactUs.contact_us_msg"]'),
        txtKeyWords: () => cy.get('[data-cy="app.components.ContactUs.key_words_msg"]'),
        rbDocuments: () => cy.get('[data-cy="label_0"]'),
        rbTechnicalIssues: () => cy.get('[data-cy="label_1"]'),
        rbRepayment: () => cy.get('[data-cy="label_2"]'),
        rbRescheduleEMI: () => cy.get('[data-cy="label_3"]'),
        rbPaymentNotUpdated: () => cy.get('[data-cy="label_4"]'),
        rbInterestRate: () => cy.get('[data-cy="label_5"]'),
        rbProcessingFees: () => cy.get('[data-cy="label_6"]'),
        rbPenalty: () => cy.get('[data-cy="label_7"]'),
        rbKreditbeePoints: () => cy.get('[data-cy="label_8"]'),
        rbEvoucher: () => cy.get('[data-cy="label_9"]'),
        rbMultipleLoans: () => cy.get('[data-cy="label_10"]'),
        rb24kGold: () => cy.get('[data-cy="label_11"]'),
        lblFrequentlyAskedQuestion: () => cy.get('[data-cy="app.components.ContactUs.frequently_asked_msg"]'),
        lblAboutKreditbee: () => cy.get('[id="about"]'),
        txtWhatIsKreditbee: () => cy.get('[data-cy="question_0.0"]'),
        subtxtWhatIsKreditbee: () => cy.get('[data-cy="answer"]'),
        txtWhoCanApplyForLoan: () => cy.get('[data-cy="question_0.1"]'),
        subtxtWhoCanApplyForLoan: () => cy.get('[data-cy="answer"]'),
        txtHowKreditbeeWorks: () => cy.get('[data-cy="question_0.2"]'),
        subtxtHowKreditbeeWorks: () => cy.get('[data-cy="answer"]'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    } 

    verifyCreditLimitEnhancementLabel(){
        this.elements.lblCreditLimitEnhancement().should('be.visible')
    }
    verifyLoanProductEnquiryLabel(){
        this.elements.lblLoanProductEnquiry().should('be.visible')
    }
    verifyLoanRepaymentText(name){
        this.elements.lblLoanRepayment().should('have.text', name)
    }
    verifyLoanDisbursalLabel(){
        this.elements.lblLoanDisbursal().should('be.visible')
    }
    verifyProfileVerificationLabel(profileverification){
        this.elements.lblProfileVerification().should('contain.text',profileverification)
    }
    clickOnCreditLimitEnhancementLabel(){
        this.elements.lblCreditLimitEnhancement().click()
    }
    clickOnProfileVerificationLabel(){
        this.elements.lblProfileVerification().click()
    }
    clickOnLoanDisbursalLabel(){
        this.elements.lblLoanDisbursal().click()
    }
    verifyContactUsButton(){
        this.elements.btnContactUs().should('be.visible')
    }

    clickContactUsButton(){
        this.elements.btnContactUs().click()
    }

}

export const help = new Help()