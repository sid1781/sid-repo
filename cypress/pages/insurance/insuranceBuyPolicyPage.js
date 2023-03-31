/// <reference types = "cypress" />

export class InsuranceBuyPolicyPage {

    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }

    elements = {
        iframeInsuance: () => cy.get('[data-cy="insurance"]', { timeout: 9000 }).should('be.visible'),
        pageTitle: () => cy.getIframeBody().find('[class="typography__F27-z7jdzb-2 skins__SectionTitle-nwn5q5-7 xGdJh"]'),
        lblSelectAPlan: () => cy.getIframeBody().find('[class="typography__Span-z7jdzb-1 typography__F14-z7jdzb-5 skins__SelectPlan-sc-11gf29z-15 iCXOkI"]'),
        lblBuyPolicyCard1Cover: () => cy.get('[]'),
        valBuyPolicyCard1Cover: () => cy.get('[]'),
        lblBuyPolicyCard1PolicyPeriod: () => cy.get('[]'),
        valBuyPolicyCard1PolicyPeriod: () => cy.get('[]'),
        lblBuyPolicyCard1OneTimePremium : () => cy.getIframeBody().contains('One time Premium'),
        valBuyPolicyCard1OneTimePremium : () => cy.getIframeBody().contains('₹354 '),
        lblBuyPolicyCard2Cover: () => cy.get('[]'),
        valBuyPolicyCard2Cover: () => cy.get('[]'),
        lblBuyPolicyCard2PolicyPeriod: () => cy.get('[]'),
        valBuyPolicyCard2PolicyPeriod: () => cy.get('[]'),
        lblBuyPolicyCard2OneTimePremium: () => cy.get('[]'),
        valBuyPolicyCard2OneTimePremium: () => cy.get('[]'),
        lblBuyPolicyCard3Cover: () => cy.get('[]'),
        valBuyPolicyCard3Cover: () => cy.get('[]'),
        lblBuyPolicyCard3PolicyPeriod: () => cy.get('[]'),
        valBuyPolicyCard3PolicyPeriod: () => cy.get('[]'),
        lblBuyPolicyCard3OneTimePremium: () => cy.get('[]'),
        valBuyPolicyCard3OneTimePremium: () => cy.get('[]'),
        lblBuyPolicyCard4Cover: () => cy.get('[]'),
        valBuyPolicyCard4Cover: () => cy.get('[]'),
        lblBuyPolicyCard4PolicyPeriod: () => cy.get('[]'),
        valBuyPolicyCard4PolicyPeriod: () => cy.get('[]'),
        lblBuyPolicyCard4OneTimePremium: () => cy.get('[]'),
        valBuyPolicyCard4OneTimePremium: () => cy.get('[]'),
        lblBuyPolicyCard5Cover: () => cy.get('[]'),
        valBuyPolicyCard5Cover: () => cy.get('[]'),
        lblBuyPolicyCard5PolicyPeriod: () => cy.get('[]'),
        valBuyPolicyCard5PolicyPeriod: () => cy.get('[]'),
        lblBuyPolicyCard5OneTimePremium: () => cy.get('[]'),
        valBuyPolicyCard5OneTimePremium: () => cy.get('[]'),
        lblCustomerInformation: () => cy.getIframeBody().find('[class="typography__Span-z7jdzb-1 typography__F14-z7jdzb-5 skins__Title-sc-11gf29z-10 XUMIb"]'),
        lblName: () => cy.get('[]'),
        txtName: () => cy.get('[]'),
        lblDOB: () => cy.get('[]'),
        txtDOB: () => cy.get('[]'),
        lblGender: () => cy.get('[]'),
        txtGender: () => cy.get('[]'),
        lblMobile: () => cy.get('[]'),
        txtMobile: () => cy.get('[]'),
        lblEmail: () => cy.get('[]'),
        txtEmail: () => cy.get('[]'),
        lblAddress: () => cy.get('[]'),
        txtAddress: () => cy.get('[]'),
        lblEmail: () => cy.get('[]'),
        txtEmail: () => cy.get('[]'),
        iconEdit: () => cy.getIframeBody().find('[class="icic_edit typography__BIcon-z7jdzb-17 cjWFKx"]'),
        lblAddANomineeOptional: () => cy.getIframeBody().find('[class="skins__NomineeTitle-sc-11gf29z-20 jJxfqA"]'),
        ddAddANomineeOptional: () => cy.getIframeBody().find('[class="icic_right typography__BIcon-z7jdzb-17 cjWFKx"]'),
        lblIAgreeToTermsAndConditions: () => cy.getIframeBody().contains('p','I agree to Terms & Conditions'), 
        btnContinue: () => cy.getIframeBody().find('[data-cy="btn"]'),
        inpAddress: () => cy.getIframeBody().find('input').eq(1),
        lblNomineeName: () => cy.getIframeBody().contains('p','Nominee Name'),
        lblDOB: () => cy.getIframeBody().contains('p','DOB'),  
        lblGender: () => cy.getIframeBody().contains('label','Gender'),
        lblNomineesRelationshipWithYou: () => cy.getIframeBody().contains("p","Nominee’s Relationship with You"),
        lblPhoneNumber: () => cy.getIframeBody().contains('p','Phone Number'),
        inpDOB: () => cy.getIframeBody().find('[data-cy="dob"]'),
        inpNomineeName: () => cy.getIframeBody().find('[data-cy="name"]'),
        inpPhoneNumber: () => cy.getIframeBody().find('[data-cy="phone"]'),
        iconCalendar: () => cy.getIframeBody().find('[data-cy="dob"]'),
        inpRelationshipWithNominee: () => cy.getIframeBody().find('[data-cy="relationship"]'),
        rbSelectAPlan: () => cy.getIframeBody().find('[data-cy="selectPremium"]').eq(0),
        chkBoxIAgreeToTermsAndConditions: () => cy.getIframeBody().find('[data-cy="checkbox"]'),
        txtInfo:()=>cy.getIframeBody().find('[data-cy="infoTxt"]'),
        btnGetNow:()=>cy.getIframeBody().find('[data-cy="viewDetails"]'),
        btnProceed:()=>cy.getIframeBody().contains('button','Proceed')


    }

    clickGetNowBtn(forInsurance) {
        this.elements.iframeInsuance().then($iframe => {
            const iframeElement = $iframe.contents().find('body')
            cy.wait(1000)
            let element = cy.wrap(iframeElement)
            element.contains('div', forInsurance).parent('div').parent('div').children().contains('GET NOW').click()
        })
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifySelectAPlanLabel(title) {
        this.elements.lblSelectAPlan().should('have.text', title)
    }

    verifyCustomerInformationLabel(title) {
        this.elements.lblCustomerInformation().should('have.text', title)
    }

    verifyAddANomineeOptionalLabel(title) {
        this.elements.lblAddANomineeOptional().should('have.text', title)
    }

    verifyIAgreeToTermsAndConditionsLabel(title) {
        this.elements.lblIAgreeToTermsAndConditions().should('have.text', title)
    }

    verifyContinueButton(Continue) {
        this.elements.btnContinue().should('have.text', Continue)
    }

    clickAddressEditIcon() {
        this.elements.iconEdit().click()
    }

    enterAddress(address) {
        this.elements.inpAddress().clear().type(address)
    }

    clickIAgreeToTermsAndConditionsLabel() {
        this.elements.lblIAgreeToTermsAndConditions().click()
    }

    clickAddANomineeOptionalDropDown() {
        this.elements.ddAddANomineeOptional().click()
    }

    verifyNomineeNameLabel(title) {
        this.elements.lblNomineeName().should('have.text', title)
    }

    verifyDOBLabel(title) {
        this.elements.lblDOB().should('have.text', title)
    }

    verifyGenderLabel(title) {
        this.elements.lblGender().should('have.text', title)
    }

    verifyNomineesRelationshipWithYouLabel(title) {
        this.elements.lblNomineesRelationshipWithYou().should('have.text', title)
    }

    verifyPhoneNumberLabel(title) {
        this.elements.lblPhoneNumber().should('have.text', title)
    }

    clickAddressEditIcon() {
        this.elements.iconEdit().click()
    }

    enterAddress(address) {
        this.elements.inpAddress().clear().type(address)
    }

    clickIAgreeToTermsAndConditionsLabel() {
        this.elements.lblIAgreeToTermsAndConditions().click()
    }

    clickDOBCalendarIcon() {
        this.elements.iconCalendar().click()
    }

    enterRelationshipWithNominee(Relationship) {
        this.elements.inpRelationshipWithNominee().select(Relationship)
    }

    verifyAddressEditIcon() {
        this.elements.iconEdit().should('be.visible')
    }

    verifyAddANomineeOptionalDropDown() {
        this.elements.ddAddANomineeOptional().should('be.visible')
    }

    clickSelectAPlanRadioButton() {
        this.elements.rbSelectAPlan().click()
    }

    clickIAgreeToTermsAndConditionsCheckbox() {
        this.elements.chkBoxIAgreeToTermsAndConditions().click({force:true})
    }

    clickContinueButton() {
        this.elements.btnContinue().click()
    }

    VerifyBuyPolicyCard1OneTimePremiumLabel(label) {
        this.elements.lblBuyPolicyCard1OneTimePremium().should('have.text', label)
    }

    verifyBuyPolicyCard1OneTimePremiumValue(val) {
        this.elements.valBuyPolicyCard1OneTimePremium().should('have.text', val)
    }
}

export const insuranceBuyPolicyPage = new InsuranceBuyPolicyPage()