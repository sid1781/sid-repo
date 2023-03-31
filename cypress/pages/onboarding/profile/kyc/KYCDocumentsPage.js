/// <reference types = "cypress" />

export class KYCDocumentsPage {

    details = {
        zeplin: () => 'https://zpl.io/MdkLjvo',
        zeplin_variation: () => 'https://zpl.io/2E70Zgg', //TODO add elements and methods 
        zeplin_variation1: () => 'https://zpl.io/PqzrDmk',//TODO add elements and methods 
        zeplin_variation2: () => 'https://zpl.io/GENJldY',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=6d85b16b',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.containers.Bdocs.bdoc_title"]'),
        //Address Proof Section
        iconAddressProof: () => cy.get('[]'),
        lblAddressProof: () => cy.get('[]'),
        txtAddressMandatory: () => cy.get('[]'),
        btnUploadAddressProof: () => cy.get('[]'),
        iconMsgAddressProof: () => cy.get('[]'),
        msgAddressProof: () => cy.get('[]'),
        //Aadhar Uploaded , Completed
        iconAadharUploaded: () => cy.get('[svg]'),
        txtAadharUploaded: () => cy.get('[data-cy="app.components.Bdocs.ul_aadhaar_title"]'),
        iconAadharCompleted: () => cy.get('[]'),
        txtAadharCompleted: () => cy.get('[]'),
        lblAadharCard: () => cy.get('[data-cy="app.components.Bdocs.ul_aadhaar_title"]'),
        txtAadharMandatory: () => cy.get('[data-cy="app.components.Bdocs.ap_mandatory_txt"]'),
        btnUploadAddressProof: () => cy.get('[data-cy="app.components.Bdocs.ap_upload_txt"]'),
        //PAN Card Section
        iconPANCard: () => cy.get('[]'),
        lblPANCard: () => cy.get('[data-cy="app.components.Bdocs.ul_pan_title"]', { timeout: 2000 }),
        txtPANMandatory: () => cy.get('[]'),
        btnUploadPANCard: () => cy.get('[]'),
        iconMsgUploadPANCard: () => cy.get('[]'),
        msgUploadPANCard: () => cy.get('[]'),
        //PAN Completed
        txtPANCompleted: () => cy.get('[]'),
        //Selfie Section
        iconSelfie: () => cy.get('[]'),
        lblSelfie: () => cy.get('[data-cy="app.components.Bdocs.ul_selfie_title"]'),
        txtSelfieMandatory: () => cy.get('[data-cy="app.components.Bdocs.ap_mandatory_txt"]'),
        btnCaptureSelfie: () => cy.get('[]'),
        //Selfie Completed
        txtSelfieCompleted: () => cy.get('[]'),
        lnkSelfieReupload: () => cy.get('[]'),
        //Video KYC Section
        iconVideoKYC: () => cy.get('[]'),
        lblVideoKYC: () => cy.get('[]'),
        txtVideoKYCMandatory: () => cy.get('[]'),
        btnRestartVideoKYC: () => cy.get('[]'),
        iconMsgVideoKYC: () => cy.get('[]'),
        msgVideoKYC: () => cy.get('[]'),
        //VideoKYC Completed
        txtSelfieCompleted: () => cy.get('[]'),
        lnkSelfieReupload: () => cy.get('[]'),
        //How to upload documents
        iconHowToUploadKYCDocuments: () => cy.get('[]'),
        lnkHowToUploadKYCDocuments: () => cy.get('[]'),
        iconEnsureToTakeClearPhoto: () => cy.get('[]'),
        txtEnsureToTakeClearPhoto: () => cy.get('[]'),
        btnSubmit: () => cy.get('[data-cy="app.components.Common.submit_btn_caps"]'),
    }
    // pageTitle 
    verifyPageTitle(pagetitle) {
        this.elements.pageTitle().should('have.text', pagetitle)
    }
    //Address Proof Section
    // iconAddressProof 
    verifyAddressProofIcon() {
        this.elements.iconAddressProof()
    }
    // lblAddressProof 
    // txtAddressMandatory 
    // btnUploadAddressProof 
    // iconMsgAddressProof 
    // txtMsgAddressProof 
    //Aadhar Uploaded , Completed
    // iconAadharUploaded 
    verifyiconAadharUploaded() {
        this.elements.iconAadharUploaded().should('be.visible')
    }
    // txtAadharUploaded 
    verfyAadharUploadedText(Aadhartxt) {
        this.elements.txtAadharUploaded().should('have.text', Aadhartxt)
    }
    verifyAadharCardLabel(Aadharcadlbl) {
        this.elements.lblAadharCard().should('have.text', Aadharcadlbl)
    }
    verifyAadharMandatoryText() {
        this.elements.txtAddressMandatory().should('be.visible')
    }
    clickUploadAddressProofButton() {
        this.elements.btnUploadAddressProof().click()
    }
    //PAN Card Section
    // iconAadharCompleted 
    // txtAadharCompleted 
    //PAN Card Section
    // iconPANCard 
    // lblPANCard 
    verifyPANCardLabelDisabled() {
        this.elements.lblPANCard().should('not.exist')
    }
    verifyPANCardLabel(pancard) {
        this.elements.lblPANCard().should('have.text', pancard)
    }
    // txtPANMandatory 
    // btnUploadPANCard 
    // iconMsgUploadPANCard 
    // txtMsgUploadPANCard 
    //PAN Completed
    // txtPANCompleted 
    //Selfie Section
    // iconSelfie 
    verifySelfieIcon() {
        this.elements.iconSelfie().should('be.visible')
    }
    // lblSelfie 
    verifySelfieLabel() {
        this.elements.lblSelfie().should('be.visible')
    }
    // txtSelfieMandatory 
    verifySelfieMandatoryText() {
        this.elements.txtSelfieMandatory().should('be.visible')
    }
    // btnCaptureSelfie 
    clickCaptureSelfieButton() {
        this.elements.btnCaptureSelfie().click()
    }
    //Selfie Completed
    // txtSelfieCompleted 
    // lnkSelfieReupload 
    //Video KYC Section
    // iconVideoKYC 
    // lblVideoKYC 
    // txtVideoKYCMandatory 
    // btnRestartVideoKYC 
    // iconMsgVideoKYC 
    // txtMsgVideoKYC 
    //VideoKYC Completed
    // txtSelfieCompleted 
    // lnkSelfieReupload 
    //How to upload documents
    // iconHowToUploadKYCDocuments 
    // lnkHowToUploadKYCDocuments 
    // iconEnsureToTakeClearPhoto 
    // txtEnsureToTakeClearPhoto 
    // btnSubmit 

    verifySubmitButton() {
        this.elements.btnSubmit()
    }
    clickSubmitButton() {
        this.elements.btnSubmit().click()
    }
}

export const kycDocumentsPage = new KYCDocumentsPage()