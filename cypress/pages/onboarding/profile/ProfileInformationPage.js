/// <reference types = "cypress" />

export class ProfileInformationPage {

    details = {
        zeplin: () => 'https://zpl.io/ykdv6Ww',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=d68bf83d',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        iconKYCDocuments: () => cy.get('[]'),
        lblKYCDocuments: () => cy.get('[data-cy="summaryItemTitle"]'),
        arrIconKYCDocuments: () => cy.get('[]'),
        lblVideoKYC: () => cy.get('[data-cy="summaryItemTitle"]'),
        iconKYCDocumentsComplete: () => cy.get('.skins__ProgressLine-n5g10o-7 ecldEA'),
        iconGeneralInformation: () => cy.get('[]'),
        lblGeneralInformation: () => cy.get('[data-cy="summaryItemTitle"]'),
        arrIconGeneralInformation: () => cy.get('[]'),
        iconGeneralInformationComplete: () => cy.get('[]'),
        iconVerifyIncome: () => cy.get('[]'),
        lblVerifyIncome: () => cy.get('[data-id="verifyincome"]'),
        arrIconVerifyIncome: () => cy.get('.sc-bxivhb'),
        arrIconReferences: () => cy.get('[]'),
        iconReferencesComplete: () => cy.get('[]'),
        lblReferences: () => cy.get('[data-cy="summaryItemTitle"]'),
        iconAdditionalInformation: () => cy.get('[]'),
        lblAdditionalInformation: () => cy.get('[data-cy="summaryItemTitle"]'),
        arrIconAdditionalInformation: () => cy.get('[]'),
        iconHowToUpload: () => cy.get('[]'),
        // lnkHowToUpload: () => cy.get('[]'),
        lnkHowToUpload: () => cy.contains('a', 'how to upload?'),
        iconInfo: () => cy.get('[]'),
        txtInfo: () => cy.get('[data-cy="app.components.Common.kreditbee_ver_info"]'),
        iconFooterDesign: () => cy.get('[]'),
        lblVideoKYC: () => cy.get('[data-cy="summaryItemTitle"]'),
    }

    verifyPagetitle(ProfileInformation) {
        this.elements.pageTitle().should('have.text', ProfileInformation)
    }

    verifyKYCDocumentsIcon() {
        this.elements.iconKYCDocuments()
    }

    verifyKYCDocumentsLabel(KYCDocuments) {
        this.elements.lblKYCDocuments().eq(0).should('have.text', KYCDocuments)
    }

    clickKYCDocumentsLabel() {
        this.elements.lblKYCDocuments().eq(0).click()
    }

    verifyKYCDocumentsArrowIcon() {
        this.elements.arrIconKYCDocuments()
    }

    verifyKYCDocumentsCompleteIcon() {
        this.elements.iconKYCDocumentsComplete()
    }

    verifyGeneralInformationICon() {
        this.elements.iconGeneralInformation()
    }

    verifyGeneralInformationlabel(GeneralInformation) {
        this.elements.lblGeneralInformation().eq(1).should('have.text', GeneralInformation)
    }

    clickGeneralInformationlabel() {
        this.elements.lblGeneralInformation().eq(1).should('be.visible').click()
    }
    verifyGeneralInformationlabelColour() {
        this.elements.lblGeneralInformation().eq(1).should('have.css', 'color', 'rgb(51, 51, 51)')
    }
    clickGeneralInformation() {
        this.elements.lblGeneralInformation().eq(1).should('be.visible').click()

    }
    verifyGeneralInformationArrowIcon() {
        this.elements.arrIconGeneralInformation()
    }

    verifyGeneralInformationCompleteIcon() {
        this.elements.iconGeneralInformationComplete()
    }

    verifyIncomeVerifyIcon() {
        this.elements.iconVerifyIncome()
    }

    verifyIncomeVerifyLabel(VerifyIncome) {
        this.elements.lblVerifyIncome().should('have.text', VerifyIncome)
    }

    clickIncomeVerifyLabel() {
        this.elements.lblVerifyIncome().should('be.visible').click()
    }

    verifyIncomeVerificationEnabled(){
        this.elements.lblVerifyIncome().should('not.be.disabled')
    }

    verifyIncomeVerifyArrowIcon() {
        this.elements.arrIconVerifyIncome()
    }

    verifyReferenceArrowIcon() {
        this.elements.arrIconReferences
    }

    verifyReferenceCompleteIcon() {
        this.elements.iconReferencesComplete()
    }

    verifyReferencesLabel(References) {
        this.elements.lblReferences().eq(4).should('have.text', References)
    }

    clickReferencesLabel() {
        this.elements.lblReferences().eq(4).should('be.visible').click()
    }

    verifyAdditionalinformationIcon() {
        this.elements.iconAdditionalInformation()
    }

    verifyAdditionalInformationLabel() {
        this.elements.lblAdditionalInformation()
    }

    clickAdditionalInformationLabel() {
        this.elements.lblAdditionalInformation().eq(4).click()
    }

    verifyAdditionalInformationArrowicon() {
        this.elements.arrIconAdditionalInformation()
    }

    verifyHowToUploadIcon() {
        this.elements.iconHowToUpload()
    }

    verifyHowToUploadLink(howtoupload) {
        this.elements.lnkHowToUpload().should('have.text', howtoupload)
    }

    verifyInfoIcon() {
        this.elements.iconInfo()
    }

    verifyInfoText() {
        this.elements.txtInfo()
    }

    verifyFooterDesignIcon() {
        this.elements.iconFooterDesign()
    }
    verifyTickArrowOfVerifyIncome() {
        this.elements.arrIconVerifyIncome().should('have.attr', 'src').should('include', 'https://ik.imagekit.io/kreditbee/app-static/icons/I/ic-id.svg')
    }
    verifyVideoKYCLabel(VideoKYC) {
        this.elements.lblVideoKYC().eq(1).should('have.text', VideoKYC)
    }
    validateVideoKYCLabelIsNotVisible() {
        this.elements.lblVideoKYC().eq(1).should('not.have.attr', 'data-id="videoKyc"')
    }

    clickGeneralInformationlabel() {
        this.elements.lblGeneralInformation().eq(1).should('be.visible').click()
    }
}

export const profileInformationPage = new ProfileInformationPage()
