/// <reference types = "cypress" />

export class ReferencesPage {

    details = {
        zeplin: () => 'https://zpl.io/5E6DJMe',
        zeplin_variation: () => 'https://zpl.io/p1zGvQo',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=d68bf83d'
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.containers.Bprofile.references_txt"]'),
        iconFamilyReference: () => cy.get('[]'),
        inpContactReference: () => cy.get('[]'),
        lblFatherName: () => cy.get('[data-cy="label_app.components.EmergencyContacts.ec_father_name_placeholder"]'),
        inpFatherName: () => cy.get('[data-cy="input_app.components.EmergencyContacts.ec_father_name_placeholder"]'),
        msgFatherName: () => cy.get('[]'),
        lblMotherName: () => cy.get('[class="sc-brqgnP jvYbhI"]'),
        inpMotherName: () => cy.get('[data-cy="input_motherName"]'),
        msgMotherName: () => cy.get('[]'),
        lblSpouseName: () => cy.get('[class="typography-content sc-kEYyzF eseTtJ"]'),
        inpSpouseName: () => cy.get('[]'),
        msgSpouseName: () => cy.get('[]'),
        lblContactReference: () => cy.get('[data-cy="app.components.EmergencyContacts.ec_familymem_name_placeholder"]'),
        iconContactReference: () => cy.get('[]'),
        rbFather: () => cy.get('[data-cy="app.components.Common.familymem_data_label_father"]'),
        rbMother: () => cy.get('[data-cy="app.components.Common.familymem_data_label_mother"]'),
        rbSpouse: () => cy.get('[data-cy="app.components.Common.familymem_data_label_spouse"]'),
        iconFamilyMobileNumber: () => cy.get('[]'),
        inpFamilyMobileNumber: () => cy.get('[data-cy="input_app.components.EmergencyContacts.mob_num_placeholder"]'),
        lblFriendReference: () => cy.get('[data-cy="app.containers.Bprofile.emcontact_title"]'),
        iconFriendReferenceName: () => cy.get('[]'),
        inpFriendReferenceName: () => cy.get('[data-cy="input_app.components.EmergencyContacts.ec_friend_name_placeholder"]'),
        msgFriendReferenceName: () => cy.get('[]'),
        iconFriendReferenceMobileNumber: () => cy.get('[]'),
        inpFriendReferenceMobileNumber: () => cy.get('[data-cy="input_app.components.EmergencyContacts.mob_num_placeholder_references"]'),
        iconInfo: () => cy.get('[]'),
        txtInfo: () => cy.get('[data-cy="label_referenceAlert"]'),
        btnContinue: () => cy.get('[data-cy="app.components.Common.continue_btn_caps"]'),
        txtinvalidFatherName: () => cy.get('[class="typography-content sc-kEYyzF hoohnm"]')
    }

        verifyPageTitle( References) {
            this.elements.pageTitle().eq(1).should('have.text', References)
        }

        verifyFamilyReferenceIcon() {
            this.elements.iconFamilyReference()
        }

        EnterReferenceContact() {
            this.elements.inpContactReference()
        }

        verifyFatherNameLabel() {
            this.elements.lblFatherName()
        }

        EnterFatherName(FatherName) {
            this.elements.inpFatherName().type(FatherName)
        }

        EnterMaxCharactersFatherNametext(FatherName) {
            this.elements.inpFatherName().type(FatherName)
        }

        EnterMinCharactersFatherNametext(FatherName) {
            this.elements.inpFatherName().type(FatherName)
        }

        EnterInvalidFatherName1() {
            this.elements.inpFatherName().clear()
        }

        verifyErrorFatherNameMessage() {
            this.elements.txtinvalidFatherName()
        }

        verifyMotherNameLabel() {
            this.elements.lblMotherName()
        }

        EnterMotherName(MotherName) {
            this.elements.inpMotherName().type(MotherName)
        }
      
        verifymotherNameMessage() {
            this.elements.msgMotherName()
        }

        verifySpouseNameLabel(SpousesName) {
            this.elements.lblSpouseName()
        }

        EnterSpouseName() {
            this.elements.inpSpouseName()
        }
       
        verifySpouseNameMessage() {
            this.elements.msgSpouseName()
        }

        verifyReferenceContactLabel() {
            this.elements.lblContactReference()
        }

        verifyReferenceContactIcon() {
            this.elements.iconContactReference()
        }

        verifyFatherRadioButton(FATHER) {
            this.elements.rbFather().should('have.text', FATHER)
        }

        clickFatherRadioButton() {
            this.elements.rbFather().click()
        }
 
        verifyMotherRadioButton(MOTHER) {
            this.elements.rbMother().should('have.text', MOTHER)
        }

        clickMotherRadioButton() {
            this.elements.rbMother().click({force:true})
        }
        
        verifySpouseRadioButton(SPOUSE) {
            this.elements.rbSpouse().should('have.text', SPOUSE)            
        }

        clickSpouseRadioButton() {
            this.elements.rbSpouse().click()           
        }

        verifyFamilyMobileNumberIcon() {
            this.elements.iconFamilyMobileNumber()
        }

        EnterFamilyMobileNumber(MobileNumber) {
            this.elements.inpFamilyMobileNumber().eq(0).type(MobileNumber)
        }
      
        verifyFriendReferenceLabel() {
            this.elements.lblFriendReference()
        }

        EnterReferenceName(FriendName) {
            this.elements.inpFriendReferenceName().type(FriendName)
        }

        verifyReferenceMobileNumberIcon() {
            this.elements.iconFriendReferenceMobileNumber()
        }

        EnterReferenceMobileNumber(FriendNumber) {
            this.elements.inpFriendReferenceMobileNumber().type(FriendNumber)
        }
       
        verifyFriendReferenceMessage() {
            this.elements.msgFriendReferenceName()
        }

        verifyInfoText() {
            this.elements.txtInfo()
        }

        verifyContinueButton(Continue) {
            this.elements.btnContinue().should('have.text', Continue)
        }
        clickContinueButton() {
            this.elements.btnContinue().click({force:true})
        }   
        
        verifyMotherRadioButtonSelected() {
            this.elements.rbMother().should('not.be.selected')
        }

        verifySpouseRadioButtonSelected() {
            this.elements.rbSpouse().should('not.be.selected')  
        }

        verifyFatherRadioButtonSelected() {
            this.elements.rbMother().should('not.be.selected')
        }

        VerifyFatherNameContainOnlyChars(OnlyChar) {
            this.elements.inpFatherName().should('have.value',OnlyChar)
        }

        verifyFatherNameInpBox(){
            this.elements.inpFatherName().should('be.enabled')
        }


}

export const referencesPage = new ReferencesPage()