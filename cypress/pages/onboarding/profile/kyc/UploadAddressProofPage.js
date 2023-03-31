///<reference types="cypress"/>

class UploadAddressProofPage {

    details = {
        zeplin: () => '', //TODO : Zeplin Link
        overflow: () => '',//TODO :Overflow Link
    }

    elements = {
        
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        lblSelectOneMethod: () => cy.contains('span', 'Select ONE method'),
        //PaperlessAadhaar
        lblPaperlessAadhaar: () => cy.contains('span', 'Paperless Aadhaar'),
        iconAadhaar: () => cy.get(''),
        iconFaster: () => cy.get(''),
        txtFasterProcess: () => cy.get('[data-cy="app.components.Bdocs.faster_process"]'),
        txtRequiresAadhaarLinkedMobileNumber: () => cy.contains('span', 'Requires Aadhaar linked mobile number'),
        lnkPaperlessAadhaar: () => cy.get(''),
        txt100Points: () => cy.contains('span', '100 Points'),
        //DigiLocker
        lblDigiLocker: () => cy.contains('span', 'Verify via DigiLocker'),
        lnkDigiLocker: () => cy.get(''),
        txt75Points: () => cy.contains('span', '75 Points'),
        //UploadPassport
        lblUploadPassport: () => cy.contains('span', 'Upload Passport'),
        txtAddtheFrontAndBackPicturesofPassport: () => cy.contains('span', 'Add the Front & Back pictures of Passport'),
        lnkUploadPassport: () => cy.get(''),
        txt25Points: () => cy.contains('span', '25 Points'),
        //ScanAadhaar
        lblScanAadhaar: () => cy.contains('span', 'Scan Aadhaar'),
        txtAddtheFrontAndBackpicturesofAadhaar: () => cy.contains('span', 'Add the Front & Back pictures of Aadhaar'),
        lnkScanAadhaar: () => cy.get(''),
        //subText
        subtxtKreditbeePointsAreRewardPoints: () => cy.get('[data-cy="app.components.Bdocs.kb_points_info"]')
    }
    //pageTitle
    verifypageTitle(uploadaddessproof) {
        this.elements.pageTitle().should('have.text', uploadaddessproof)
    }
    //selectOneMethod
    verifySelectOneMethodLabel(selectonemethod) {
        this.elements.lblSelectOneMethod().should('have.text', selectonemethod)
    }
    //PaperlessAadhaar
    verifyPaperlessAadharLabel(paperlessaadhaar) {
        this.elements.lblPaperlessAadhaar().should('have.text', paperlessaadhaar)
    }
    //Disabled PaperlessAadhaar
    verifyDisabledPaperlessAadharLabel(config, linkText) {
        if (config == 0) {
            this.elements.lblPaperlessAadhaar().should('not.exist') //no link
        } else if (config == 1) {
            this.elements.lblPaperlessAadhaar().should('have.text', linkText).then(() => {
                this. clickPaperlessAadhaar()
            })
        }
    }
    //PaperlessAadhaar clicked
    clickPaperlessAadhaar() {
        this.elements.lblPaperlessAadhaar().click({ timeout: 2000 })
    }
    //FasterProcess
    verifyFasterProcessText(fasterprocess) {
        this.elements.txtFasterProcess().eq(0).should('have.text', fasterprocess)
    }
    //clicked FasterProcess
    clickPaperlessAadhaarFasterProcess() {
        this.elements.txtFasterProcess().eq(0).click({ timeout: 2000 })
    }
    //RequiresAadhaarLinkedMobileNumber
    verifyRequiresAadhaarLinkedMobileNumberText(requiresaadhaarlinkedmobilenumber) {
        this.elements.txtRequiresAadhaarLinkedMobileNumber().should('have.text', requiresaadhaarlinkedmobilenumber)
    }
    //PaperlessAadhaar
    clickPaperlessAadhaarLink() {
        this.elements.lnkPaperlessAadhaar().click({ timeout: 2000 })
    }
    //100Points
    verify100PointsText(points) {
        this.elements.txt100Points().should('have.text', points)
    }
    //DigiLocker
    verifyDigiLockerLabel(digilocker) {
        this.elements.lblDigiLocker().should('have.text', digilocker)
    }
    //Disabled DigiLocker
    verifyDisabledDigiLockerLabel(config, linkText) {
        if (config == 0) {
            this.elements.lblDigiLocker().should('not.exist') //no link
        } else if (config == 1) {
            this.elements.lblDigiLocker().should('have.text', linkText).then(() => {
                this. clickDigiLocker()
            })
        }
    }
    //clicked FasterProcess
    clickDigilockerFasterProcess() {
        this.elements.txtFasterProcess().eq(1).click({ timeout: 2000 })
    }
    //DigiLocker clicked
    clickDigiLocker() {
        this.elements.lblDigiLocker().click({ timeout: 2000 })
    }
    //DigiLocker
    clickDigiLockerLink() {
        this.elements.lnkDigiLocker().click({ timeout: 2000 })
    }
    //75Points
    verify75PointsText(points) {
        this.elements.txt75Points().should('have.text', points)
    }
    //UploadPassport
    verifyUploadPassportLabel(uploadpassport) {
        this.elements.lblUploadPassport().should('have.text', uploadpassport)
    }
    //Disabled UploadPassport
    verifyDisabledUploadPassportLabel(config, linkText) {
        if (config == 0) {
            this.elements.lblUploadPassport().should('not.exist') //no link
        } else if (config == 1) {
            this.elements.lblUploadPassport().should('have.text', linkText).then(() => {
                this.clickUploadPassportLabel()
            })
        }
    }
    //UploadPassport clicked
    clickUploadPassportLabel() {
        this.elements.lblUploadPassport().click({ timeout: 2000 })
    }
    //AddtheFrontAndBackpicturesofPassport
    verifyAddtheFrontAndBackPicturesofPassportText(pictureofPassport) {
        this.elements.txtAddtheFrontAndBackPicturesofPassport().should('have.text', pictureofPassport)
    }
    //UploadPassport
    clickUploadPassportLink() {
        this.elements.lnkUploadPassport().click({ timeout: 2000 })
    }
    //25Points
    verify25PointsText(points) {
        this.elements.txt25Points().should('have.text', points)
    }
    //ScanAadhaar
    verifyScanAadhaarLabel(scanaadhaar) {
        this.elements.lblScanAadhaar().should('have.text', scanaadhaar)
    }
    //Disabled ScanAadhaar
    verifyDisabledScanAadhaarLabel(config, linkText) {
        if (config == 0) {
            this.elements.lblScanAadhaar().should('not.exist') //no link
        } else if (config == 1) {
            this.elements.lblScanAadhaar().should('have.text', linkText).then(() => {
                this.clickScanAadhaar()
            })
        }
    }
    //ScanAadhaar clicked
    clickScanAadhaar() {
        this.elements.lblScanAadhaar().click({ timeout: 2000 })
    }
    //AddtheFrontAndBackpicturesofAadhaar
    verifyAddtheFrontAndBackPicturesofAadhaarText(frontandbackpicturesofaadhaar) {
        this.elements.txtAddtheFrontAndBackpicturesofAadhaar().should('have.text', frontandbackpicturesofaadhaar)
    }
    //ScanAadhaar
    clickScanAadhaarLink() {
        this.elements.lnkScanAadhaar().click({ timeout: 2000 })
    }
    //KreditbeePointsAreRewardPoints
    verifyKreditbeePointsAreRewardPointsSubText(kreditbeepoints) {
        this.elements.subtxtKreditbeePointsAreRewardPoints().should('have.text', kreditbeepoints)
    }
}

export const uploadAddressProofPage = new UploadAddressProofPage()