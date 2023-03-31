/// <reference types = "cypress" />


export class PANInputPage {

    details = {
        zeplin: () => 'https://zpl.io/p1Kp8R8',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=d68bf83d',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblEnterYourPAN: () => cy.get('[data-cy="label_app.components.Eligibility.elg_pan_label"]'),
        iconEnterYourPAN: () => cy.get('[]'),
        inpPAN: () => cy.get('[data-cy="input_app.components.Eligibility.elg_pan_label"]'),
        txtConsentCKYCR: () => cy.get('[data-cy="checkboxText_app.components.Eligibility.elg_pan_agree_label"]'),
        chkBoxCKYCR: () => cy.get('[data-cy="icon_app.components.Eligibility.elg_pan_agree_label"]'),
        txtConsentCRIF: () => cy.get('[data-cy="checkboxText_app.components.Eligibility.elg_pan_agree_label_two"]'),
        chkBoxCRIF: () => cy.get('[data-cy="icon_app.components.Eligibility.elg_pan_agree_label_two"]'),
        lnkTermsOfUse: () => cy.get('[data-cy="app.components.Eligibility.terms_of_use"]'),
        btnSubmit: () => cy.get('[data-cy="app.components.Common.submit_btn_caps"]'),
        txtErrorMsg: () => cy.get('[data-cy="errorMessage_app.components.Eligibility.elg_pan_label"]'),
        btnLogout: () => cy.contains('button','Logout'),
        btnNext: () => cy.contains('div','Next'),
        txtError:()=>cy.contains('span','Please use personal PAN number')
    }

    verifyPageTitle(pan) {
        this.elements.pageTitle().should('contain.text', pan)
    }
    // lblEnterYourPAN
    verifyEnterYourPANLabel(enterPanLabel) {
        this.elements.lblEnterYourPAN().should('contain.text', enterPanLabel)
    }
    //iconEnterYourPAN
    verifyEnterPanIcon() {
        this.elements.iconEnterYourPAN().find('img').should('be.visible')
    }
    // inpPAN
    enterPan(pan) {
        let panArray = Array.from(pan)
        this.elements.inpPAN()
            .each(($el, index) => {
                cy.get($el)
                    .type(panArray[index])
            })
    }
    
    enterPanValidation(pan) {
        let panArray = Array.from(pan)
        this.elements.inpPAN()
            .each(($el, index) => {
                cy.get($el)
                    .type(panArray[1,0])
            })
    }

    clearPan(pan) {
        let panArray1 = Array.from(pan)
        this.elements.inpPAN()
            .each(($el, index) => {
                cy.get($el)
                    .type(panArray1[index]).clear()
            })
    }
    // txtConsentCKYCR
    verifyConsentCKYCR(ckycr) {
        this.elements.txtConsentCKYCR().should('have.text', ckycr)
    }
    // chkBoxCKYCR
    uncheckConsentCKYCRChkBox() {
        this.elements.chkBoxCKYCR().should('be.checked')
    }
    // txtConsentCRIF
    verifyConsentCRIF(crif) {
        this.elements.txtConsentCRIF().should('have.text', crif)
    }
    // chkBoxCRIF
    uncheckConsentCRIFChkBox() {
        this.elements.chkBoxCRIF().should('be.checked')
    }
    //  lnkTermsOfUse
    clickTermsAndUseLink() {
        this.elements.lnkTermsOfUse().click()
    }

    verifyTermsAndConditionsLink(termsAndConditions) {
        this.elements.lnkTermsAndConditions().should('have.text', termsAndConditions)
    }
    // btnSubmit
    verifyPanPageSubmitText(submit) {
        this.elements.btnSubmit().should('have.text', submit)
    }

    clickSubmitBtn() {
        this.elements.btnSubmit().click({force:true})
    }

    verifySubmitBtnDisabled() {
        this.elements.btnSubmit().should('be.disabled')
    }

    verifySubmitBtnEnabled() {
        this.elements.btnSubmit().should('be.enabled')
    }

    clickTextConsentCKYCR() {
        this.elements.txtConsentCKYCR().click()
    }

    clickTextConsentCRIF() {
        this.elements.txtConsentCRIF().click()
    }
    verifyErrorMessageText(){
        this.elements.txtErrorMsg().should('be.visible')
    }
    verifyLogoutButton(){
        this.elements.btnLogout().should('be.visible')
    }
    clickLogoutButton(){
        this.elements.btnLogout().click()
    }
    clickNextButton() {
        this.elements.btnNext().click({force:true})
    }
    verifyErrorText(error){
        this.elements.txtError().should('have.text',error)
    }
}
export const panInputPage = new PANInputPage()
