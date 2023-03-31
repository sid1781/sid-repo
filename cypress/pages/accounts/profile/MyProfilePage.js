/// <reference types = "cypress" />

export class MyProfilePage {

    details = {
        zeplin: () => 'https://zpl.io/anjxyDO', // TODO ZEPLIN
        overflow: () => '', // TODO OVERFLOW
    }

    elements = {

        pageTitle : () => cy.get('[data-cy="app.components.BloanRecord.my_profile_title"]'),
        imgProfile : () => cy.get('[]'),
        lblProfileName : () => cy.get('[data-cy="profileName"]'),
        lblProfileEmail : () => cy.get('[data-cy="profileEmail"]'),
        valMobileNumber : () => cy.get('[data-cy="profileMobile"]'),
        iconDOB : () => cy.get('[]'),
        lblDOB : () => cy.get('[data-cy="app.components.BloanRecord.dob_txt"]'),
        valDate : () => cy.get('[]'),
        lblMonth : () => cy.get('[]'),
        valYear : () => cy.get('[]'),
        iconGender : () => cy.get('[]'),
        lblGender : () => cy.get('[data-cy="app.components.BloanRecord.gender_txt"]'),
        lblGenderValue : () => cy.get('[]'),
        iconPANNumber : () => cy.get('[]'),
        lblPANNumber : () => cy.get('[data-cy="app.components.BloanRecord.pan_num_txt"]'),
        valPANNumber : () => cy.get('[]'),
        iconEmploymentType : () => cy.get('[]'),
        lblEmploymentType : () => cy.get('[data-cy="app.components.BloanRecord.emp_type_txt"]'),
        lblEmploymentTypevalue : () => cy.get('[]'),
        iconMonthlySalary : () => cy.get('[]'),
        lblMonthlySalary : () => cy.get('[data-cy="app.components.BloanRecord.monthly_sal_txt"]'),
        iconRupee : () => cy.get('[]'),
        valMonthlySalary : () => cy.get('[]'),
        iconKYCDocument : () => cy.get('[]'),
        lblKYCDocument : () => cy.get('[data-cy="app.components.BloanRecord.kyc_doc_txt"]'),
        lblKYCDocumentValue : () => cy.get('[]'),
        iconEducation : () => cy.get('[]'),
        lblEducation : () => cy.get('[data-cy="app.components.BloanRecord.education_txt"]'),
        lblEducationValue : () => cy.get('[]'),
        iconMartialStatus : () => cy.get('[]'),
        lblMaritalStatus : () => cy.get('[data-cy="app.components.BloanRecord.marital_status_txt"]'),
        lblMaritalStatusValue : () => cy.get('[]'),
        iconAddress : () => cy.get('[]'),
        lblCommunicationAddress : () => cy.get('[data-cy="app.components.BloanRecord.curr_addr_txt"]'),
        lblCommunicationAddressValue : () => cy.get('[]'),
        lblPermananentAddress : () => cy.get('[data-cy="app.components.BloanRecord.perm_addr_txt"]'),
        lblPermanentAddressValue : () => cy.get('[]'),
        iconReferenceContacts : () => cy.get('[]'),
        lblReferenceContacts : () => cy.get('[data-cy="app.components.BloanRecord.ref_contacts_txt"]'),
        lblFamilyName : () => cy.get('[]'),
        valFamilyNumber : () => cy.get('[]'),
        lblReferenceName : () => cy.get('[]'),
        valReferenceNumber : () => cy.get('[]'),
        btnBack : () => cy.get('[data-cy="app.components.Common.back_btn"]'),
    }

    verifyPageTitle(ProfileInformation) {
        this.elements.pageTitle().should('contain.text', ProfileInformation)
    }

    verifyProfileNameLabel() {
        this.elements.lblProfileName()
    }

    verifyProfileEmaillabel() {
        this.elements.lblProfileEmail()
    }

    verifyProfileNumberValue() {
        this.elements.valMobileNumber()
    }

    verifyDOBLabel() {
        this.elements.lblDOB()
    }

    verifyGenderLabel() {
        this.elements.lblGender()
    }

    verifyPANNumberLabel() {
        this.elements.lblPANNumber()
    }

    verifyEmploymentTypeLabel() {
        this.elements.lblEmploymentType()
    }

    verifyKYCDocumentsLabel() {
        this.elements.lblKYCDocument()
    }

    verifyEducationLabel() {
        this.elements.lblEducation()
    }

    verifyMaritalStatusLabel() {
        this.elements.lblMaritalStatus()
    }

    verifyCommunicationAddressLabel() {
        this.elements.lblCommunicationAddress()
    }

    verifypermanentAddressLabel() {
        this.elements.lblPermananentAddress()
    }

    verifyBackButton() {
        this.elements.btnBack()
    }

    clickBackButton() {
        this.elements.btnBack().click()
    }
}

export const myprofilepage = new MyProfilePage()
