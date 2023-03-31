/// <reference types = "cypress" />

export class GeneralInformationPage {

    details = {
        zeplin: () => 'https://zpl.io/Am6mqEB',
        zeplin_uploadAddress: () => 'https://zpl.io/qyAyEYN',
        zeplin_adddressPrefilled: () => 'https://zpl.io/MdQdqpr',
        zeplin_pincode: () => 'https://zpl.io/MdQdqpr',
        zeplin_gender: () => 'https://zpl.io/ewBJnzN',
        zeplin_addressLine1AndAddressLine2: () => 'https://zpl.io/ewBJnzN',
        overflow: () => 'https://overflow.io/s/UCDTKU1H/?node=d68bf83d',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="basicInfo"]'),
        lblDOB: () => cy.contains('label', 'Date of Birth'),
        iconDOB: () => cy.get('i'),
        ddDate: () => cy.get('[id="selectDay"]'),
        ddlDate: () => cy.get('[]'),
        ddMonth: () => cy.get('[id="selectMonth"]'),
        ddlMonth: () => cy.get('[]'),
        ddYear: () => cy.get('[id="selectYear"]'),
        ddlYear: () => cy.get('[]'),
        lblGender: () => cy.contains('div', 'Gender'),
        iconGender: () => cy.get('[]'),
        rbMale: () => cy.get('[data-cy="male"]'),
        rbFemale: () => cy.get('[data-cy="female"]'),
        rbTransgender: () => cy.get('[data-cy="transgender"]'),
        lblMartialStatus: () => cy.get('[data-cy="app.components.PersonalInfoLayout.martial_status_placeholder"]'),
        iconMartialStatus: () => cy.get('[]'),
        rbMarried: () => cy.get('[data-cy="app.components.Common.materital_data_label1"]'),
        rbSingle: () => cy.get('[data-cy="app.components.Common.materital_data_label2"]'),
        rbDivorced: () => cy.get('[data-cy="app.components.Common.materital_data_label3"]'),
        lblEducation: () => cy.get('[data-cy="label_app.components.PersonalInfoLayout.education_label"]'),
        iconEducation: () => cy.get('[data-cy="icon_app.components.PersonalInfoLayout.education_label"]'),
        ddEducation: () => cy.get('[id="react-select-2-placeholder"]'),
        ddlEducation: () => cy.get('[id="react-select-2-option-1"]'),
        lblProfessionOrOccupation: () => cy.get('[data-cy="label_app.components.PersonalInfoLayout.profession_label"]'),
        iconProfessionOrOccupation: () => cy.get('[data-cy="icon_app.components.PersonalInfoLayout.profession_label"]'),
        inpProfessionOrOccupation: () => cy.get('[]'),
        ddProfesionOrOccupation: () => cy.get('[id="react-select-3-placeholder"]'),
        ddlProfessionOrOccupation: () => cy.get('[id="react-select-3-option-2"]'),
        lblCommunicationAddress: () => cy.get('[data-cy="currentAddr"]'),
        lnkView: () => cy.get('[data-cy="app.components.PersonalInfoLayout.view_text"]'),
        lnkHide: () => cy.get('[data-cy="app.components.PersonalInfoLayout.hide_text"]'),
        chkBoxSameAsKYCDocument: () => cy.get('[data-cy="check_icon"]'),
        txtSameAsKYCDocument: () => cy.get('[data-cy="checkboxText"]'),
        lblPincodeOrZipcode: () => cy.get('label').eq(4),
        iconPincodeOrZipcode: () => cy.get('[data-cy="img_app.components.PersonalInfoLayout.pincode_placeholder"]'),
        inpPincodeOrZipcode: () => cy.get('[data-cy="input_app.components.PersonalInfoLayout.pincode_placeholder"]'),
        msgPincodeOrZipcode: () => cy.contains('div', 'Invalid Pincode'),
        tagCity: () => cy.contains('span', 'Bengaluru'),
        tagState: () => cy.contains('span', 'KARNATAKA'),
        lblAddressLine1: () => cy.contains('div', 'Address line 1'),
        iconAddressLine1: () => cy.get('[]'),
        inpAddressLine1: () => cy.get('[data-cy="input_app.components.PersonalInfoLayout.address1_label"]'),
        infoAddressLine1: () => cy.get('[]'),
        lblAddressLine2: () => cy.contains('div', 'Address line 2'),
        iconAddressLine2: () => cy.get('[]'),
        inpAddressLine2: () => cy.get('[data-cy="input_app.components.PersonalInfoLayout.address2_label"]'),
        infoAddressLine2: () => cy.get('[]'),
        lblTypeOfResidence: () => cy.get('[data-cy="label_app.components.PersonalInfoLayout.residence_type_label"]'),
        iconTypeOfResidence: () => cy.get('[data-cy="icon_app.components.PersonalInfoLayout.residence_type_label"]'),
        ddTypeOfResidence: () => cy.get('[id="react-select-4-placeholder"]'),
        ddlTypeOfResidence: () => cy.get('[id="react-select-4-option-2"]'),
        lblAddress: () => cy.contains('span', 'Address'),
        iconAddress: () => cy.get('[]'),
        txtAddressPrefilled: () => cy.get('.BFlexDiv-y6mdwn-0'),
        lblUploadCurrentAddressProofDoc: () => cy.get('[data-cy="app.components.PersonalInfoLayout.upload_doc_optional"]'),
        iconUploadCurrentAddressProofDoc: () => cy.get('[]'),
        lnkUploadAnAddressProofDoc: () => cy.get('[data-cy="app.components.PersonalInfoLayout.upload_doc"]'),
        btnContinue: () => cy.get('[data-cy="continueBtn"]'),
        ddlOccupationList : () => cy.get('[id="react-select-2--value"]'),
        selectoneoption : () => cy.get('[role="option"]'),
        ddlTypeResidenceSA : ()=> cy.get('[role="combobox"]'),
        selectResidence : () => cy.get('[role="combobox"]'),
        //EnterEmail
        inpEmail:()=>cy.get('[data-cy="input_email"]'),
        btnSubmit:()=>cy.get('[data-cy="submit"]'),
        txtInvalidEmail:()=>cy.get('[data-cy="errorMessage_email"]')
    }

    verifyPageTitle(GeneralInformation) {
        this.elements.pageTitle().should('have.text', GeneralInformation)
    }

    verifyDOBLabel() {
        this.elements.lblDOB()
    }

    verifyDOBIcon() {
        this.elements.iconDOB()
    }

    verifyDateDropDown() {
        this.elements.ddMonth()
    }

    // ddDate
    selectDateDropDown(date) {
        this.elements.ddDate().select(date)
            .invoke('val')
            .should('deep.equal', date)
    }

    verifyDateDropDownList() {
        this.elements.ddlDate()
    }

    verifyMonthDropDown() {
        this.elements.ddMonth()
    }

    // ddMonth
    selectMonthDropDown(month) {
        this.elements.ddMonth().select(month)
            .invoke('val')
            .should('deep.equal', month)
    }

    verifyMonthDropDownList() {
        this.elements.ddlMonth()
    }

    verifyYearDropDown() {
        this.elements.ddYear()
    }

    // ddYear
    selectYearDropDown(date) {
        this.elements.ddYear().select(date)
            .invoke('val')
            .should('deep.equal', date)
    }

    verifyYearDropDownList() {
        this.elements.ddlYear()
    }

    verifyGenderLabel() {
        this.elements.lblGender()
    }

    verifyGenderIcon() {
        this.elements.iconGender()
    }

    verifyMaleRadioButton() {
        this.elements.rbMale()
    }

    verifyFemaleRadioButton() {
        this.elements.rbFemale()
    }

    verifyTransGenderRadioButon() {
        this.elements.rbTransgender()
    }

    clickTransGenderButton() {
        this.elements.rbTransgender().click()
    }

    verifyMartialStatusLabel(MaritalStatus) {
        this.elements.lblMartialStatus().should('have.text', MaritalStatus)
    }

    verifyMartialStatusIcon() {
        this.elements.iconMartialStatus()
    }

    verifySingleRadioButton() {
        this.elements.rbSingle()
    }

    clickSingleRadioButton() {
        this.elements.rbSingle().eq(1).click()
    }

    verifyMarriedRadioButton() {
        this.elements.rbMarried()
    }

    clickMarriedRadioButton() {
        this.elements.rbMarried().click()
    }

    verifyDivorcedRadioButton() {
        this.elements.rbDivorced()
    }

    clickDivorcedRadioButton() {
        this.elements.rbDivorced().click()
    }

    verifyEducationLabel(Education) {
        this.elements.lblEducation().should('have.text', Education)
    }

    verifyEducationIcon() {
        this.elements.iconEducation()
    }

    verifyEducationDropDown() {
        this.elements.ddEducation()
    }

    clickEducationDropDown() {
        this.elements.ddEducation().click({force:true})
    }

    verifyEducationDropDownList() {
        this.elements.ddlEducation()
    }

    clickEducationDropDownList() {
        this.elements.ddlEducation().click({force:true})
    }

    verifyProfessionOrOccupationLabel(ProfessionOrOccupation) {
        this.elements.lblProfessionOrOccupation().should('have.text', ProfessionOrOccupation)
    }

    verifyProfessionOrOccupationIcon() {
        this.elements.iconProfessionOrOccupation()
    }

    verifyprofessionOrOccupationDropDown() {
        this.elements.ddProfesionOrOccupation()
    }

    clickprofessionOrOccupationDropDown() {
        this.elements.ddProfesionOrOccupation().click({force:true})
    }

    verifyProfessionOrOccupationDropDownLabel() {
        this.elements.ddlProfessionOrOccupation()
    }

    clickProfessionOrOccupationDropDownList() {
        this.elements.ddlProfessionOrOccupation().click({force:true})
    }

    verifyCommunicationAddressLabel(COMMUNICATIONADDRESS) {
        this.elements.lblCommunicationAddress().should('have.text', COMMUNICATIONADDRESS)
    }

    verifyViewLink(VIEW) {
        this.elements.lnkView().should('have.text', VIEW)
    }

    clickViewLink(VIEW) {
        this.elements.lnkView().click()
    }

    verifyHideLink(HIDE) {
        this.elements.lnkHide().should('have.text', HIDE)
    }

    clickHideLink() {
        this.elements.lnkHide().click()
    }

    verifySameAsKYCDocumentCheckBox() {
        this.elements.chkBoxSameAsKYCDocument()
    }

    clickSameAsKYCDocumentCheckBox() {
        this.elements.chkBoxSameAsKYCDocument().click()
    }

    verifySameAsKYCDocumentText(SameasKYCdocument) {
        this.elements.txtSameAsKYCDocument().should('have.text', SameasKYCdocument)
    }

    verifyPincodeOrZipcodeLabel(PincodeOrZipcode) {
        this.elements.lblPincodeOrZipcode().should('have.text', PincodeOrZipcode)
    }

    verifyPincodeOrZipcodeIcon() {
        this.elements.iconPincodeOrZipcode()
    }

    verifyPincodeOrZipcodeInput(pincode) {
        this.elements.inpPincodeOrZipcode().should('have.value', pincode)
    }

    valdiatePincodeOrZipcodeInput(pincode) {
        this.elements.inpPincodeOrZipcode().should('have.value', pincode).then(() => {
            this.elements.inpPincodeOrZipcode().clear()
            this.elements.inpPincodeOrZipcode().type(pincode)
        })
    }

    verifyCityTag(city) {
        this.elements.tagCity().should('have.text', city)
    }

    verifyStateTag(state) {
        this.elements.tagState().should('have.text', state)
    }

    verifyAddressline1Label(address1) {
        this.elements.lblAddressLine1().should('contain.text', address1)
    }

    verifyAddressLine1Icon() {
        this.elements.iconAddressLine1()
    }

    verifyAddressLine1Input() {
        this.elements.inpAddressLine1().should('not.contain.value')
    }

    verifyAddressLine2Label(address2) {
        this.elements.lblAddressLine2().should('contain.text', address2)
    }

    verifyAddressLine2Icon() {
        this.elements.iconAddressLine2()
    }

    verifyAddressLine2Input() {
        this.elements.inpAddressLine2().should('not.contain.value')
    }

    verifyTypeofResidenceLabel(Typeofresidence) {
        this.elements.lblTypeOfResidence().should('have.text', Typeofresidence)
    }

    verifyTypeOfResidencyIcon() {
        this.elements.iconTypeOfResidence()
    }

    verifyTypeOfResidenceDropDown() {
        this.elements.ddTypeOfResidence()
    }

    clickTypeOfResidenceDropDown() {
        this.elements.ddTypeOfResidence().click({force:true})
    }

    verifyTypeOfResidenceDropDownList() {
        this.elements.ddlTypeOfResidence()
    }

    clickTypeOfResidenceDropDownList() {
        this.elements.ddlTypeOfResidence().click({force:true})
    }

    verifyAddressLabel() {
        this.elements.lblAddress()
    }

    verifyAddressIcon() {
        this.elements.iconAddress()
    }

    verifyAddressPrefilledText(prefilled) {
        this.elements.txtAddressPrefilled().should('contain.text', prefilled)
    }

    verifyUploadCurrentAddressProofDocLabel() {
        this.elements.lblUploadCurrentAddressProofDoc()
    }

    verifyUploadCurrentAddressProofDocIcon() {
        this.elements.iconUploadCurrentAddressProofDoc()
    }

    verifyUploadAnAddressProofDocLink() {
        this.elements.lnkUploadAnAddressProofDoc()
    }

    validateUploadAnAddressProofDocLink(uploadLink) {
        if (this.clickSameAsKYCDocumentCheckBox()) {
            this.elements.lnkUploadAnAddressProofDoc().should('have.text', uploadLink)
        } else {
            this.elements.lnkUploadAnAddressProofDoc().should('not.exist')
        }
    }

    // msgPincodeOrZipcode
    verifyPincodeOrZipcodeMessage(errorMessage) {
        this.elements.msgPincodeOrZipcode().should('have.text', errorMessage)
    }

    clickUploadAnAddressProofDocLink() {
        this.elements.lnkUploadAnAddressProofDoc().click()
    }

    verifyContinuebutton(Continue) {
        this.elements.btnContinue().should('have.text', Continue)
    }

    validateContinueButton(date, month, year) {
        this.elements.ddDate().select(date).invoke('val').should('deep.equal', '')
        this.elements.ddMonth().select(month).invoke('val').should('deep.equal', '')
        this.elements.ddYear().select(year).invoke('val').should('deep.equal', '')
        this.elements.rbMale().should('have.value', '')
        this.elements.rbFemale().should('have.value', '')
        this.elements.rbTransgender().should('have.value', '')
        this.elements.rbMarried().should('have.value', '')
        this.elements.rbSingle().should('have.value', '')
        this.elements.rbDivorced().should('have.value', '')
        this.elements.ddEducation().contains('Please select')
        this.elements.ddProfesionOrOccupation().contains('Please select')
        this.elements.ddTypeOfResidence().contains('Please select')
        this.elements.chkBoxSameAsKYCDocument().click()
            .then(() => {
                this.elements.btnContinue().should('be.disabled')
            })
    }

    clickContinuebutton() {
        this.elements.btnContinue().click()
    }

    verifySameAsKYCDocumentCheckBoxSelected() {
        this.elements.chkBoxSameAsKYCDocument().should('have.attr', 'src').should('include', 'https://ik.imagekit.io/kreditbee/app-static/icons/C/ic-check-y.svg')
    }

    clickMaleRadioButton() {
        this.elements.rbMale().click()
    }

    verifyFemaleRadioButtonNotSelected() {
        this.elements.rbFemale().should('not.be.selected')
    }

    verifyTransGenderRadioButonNotSelected() {
        this.elements.rbTransgender().should('not.be.selected')
    }

    selectDateDropDown(day) {
        this.elements.ddDate().select(day)
    }

    selectMonthDropDown(month) {
        this.elements.ddMonth().select(month)
    }

    selectYearDropDown(year) {
        this.elements.ddYear().select(year)
    }

    selectprofessionOrOccupationDropDown(profession) {
        this.elements.ddProfesionOrOccupation().click().type(profession).click()
    }
    clickDateDropDown(){
        this.elements.ddDate().select('5')
    }
    clickMonthDropDown(){
        this.elements.ddMonth().select('Jan')
    }
    clickYearDropDown(){
        this.elements.ddYear().select('2000')
    }
    //for professinaloroccupation
    selectOccupationDropDownList(){
        cy.wait(1000)
        this.elements.ddlOccupationList().click({force: true})
    }
    selectOptionOne(){
        this.elements.selectoneoption().eq(0).click({force: true})
    }
    //for residence
    selectTypeResidenceDropDownList(){
        this.elements.ddlTypeResidenceSA().eq(1).click({force: true})
    }
    selectResidenceOption(txt){
        this.elements.selectResidence().eq(1).type(txt).click({force:true})
    }
    //EnterEmail
    enterEmailInput(text){
        this.elements.inpEmail().type(text)
    }
    clickButtonSubmit(){
        this.elements.btnSubmit().click()
    }
    VerifyInvaildEmailText(error){
        this.elements.txtInvalidEmail().should('contain',error)
    }

}

export const generalInformationPage = new GeneralInformationPage()
