/// <reference types = "cypress" />

export class InsurancePolicyDetailsPage {

    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }

    elements = {
        iframeInsuance: () => cy.get('[data-cy="insurance"]'),
        iconAcko: () => cy.get('[]'),
        lblInsurance: () => cy.get('[]'),
        imgInsurance: () => cy.get('[]'),
        iconPolicyPeriod: () => cy.get('[]'),
        lblPolicyPeriod: () => cy.getIframeBody().find('[class="typography__P-z7jdzb-0 typography__F9-z7jdzb-15 skins__PolicyInfoItemTitle-kp4f8d-39 huvhbl"]').first(),
        txtPolicyPeriod: () => cy.get('[]'),
        iconCoverageUpto: () => cy.get('[]'),
        lblCoverageUpto: () => cy.getIframeBody().find('[class="typography__P-z7jdzb-0 typography__F9-z7jdzb-15 skins__PolicyInfoItemTitle-kp4f8d-39 huvhbl"]').eq(1),
        valCoverageUpto: () => cy.get('[]'),
        iconPremiumStartsAt: () => cy.get('[]'),
        lblPremiumStartsAt: () => cy.getIframeBody().find('[class="typography__P-z7jdzb-0 typography__F9-z7jdzb-15 skins__PolicyInfoItemTitle-kp4f8d-39 huvhbl"]').eq(2),
        valPremiumStartsAt: () => cy.get('[]'),
        lblWhatsCovered: () => cy.getIframeBody().find('[class="typography__Span-z7jdzb-1 typography__F14-z7jdzb-5 skins__CoveredSectionTitle-kp4f8d-42 kLhCss"]'),
        iconAccidentalDeath: () => cy.get('[]'),
        lblAccidentalDeath: () => cy.get('[]'),
        subTxtAccidentalDeath: () => cy.get('[]'),
        iconPermanentTotalOrPartialDisability: () => cy.get('[]'),
        lblPermanentTotalOrPartialDisability: () => cy.get('[]'),
        subTxtPermanentTotalOrPartialDisability: () => cy.get('[]'),
        iconChildEducation: () => cy.get('[]'),
        lblChildEducation: () => cy.get('[]'),
        subTxtChildEducation: () => cy.get('[]'),
        iconHospitalExpensePayout: () => cy.get('[]'),
        lblHospitalExpensePayout: () => cy.get('[]'),
        subTxtHospitalExpensePayout: () => cy.get('[]'),
        txtViewAll: () => cy.get('[]'),
        lnkTermsAndCondtions: () => cy.getIframeBody().find('[class="skins__HyperLink-kp4f8d-21 bPNnnW"]').eq(0),
        iconFrequentlyAskedQuestions: () => cy.get('[]'),
        lblFrequentlyAskedQuestions: () => cy.getIframeBody().contains('span', 'Frequently asked questions'),
        ddFrequentlyAskedQuestions: () => cy.getIframeBody().find('[class="icic_drop_down typography__BIcon-z7jdzb-17 dhGyNp"]'),
        lblInsuranceQuestion1: () => cy.getIframeBody().find('[class="typography__P-z7jdzb-0 typography__F12-z7jdzb-8 skins__Question-kp4f8d-22 fKFGmE"]').eq(0),
        txtInsuranceQuestion1: () => cy.getIframeBody().find('[class="typography__P-z7jdzb-0 typography__F12-z7jdzb-8 skins__Question-kp4f8d-22 skins__Answer-kp4f8d-23 lnOwCc"]').eq(0),
        lblInsuranceQuestion2: () => cy.getIframeBody().find('[class="typography__P-z7jdzb-0 typography__F12-z7jdzb-8 skins__Question-kp4f8d-22 fKFGmE"]').eq(1),
        txtInsuranceQuestion2: () => cy.getIframeBody().find('[class="typography__P-z7jdzb-0 typography__F12-z7jdzb-8 skins__Question-kp4f8d-22 skins__Answer-kp4f8d-23 lnOwCc"]').eq(1),
        lblInsuranceQuestion3: () => cy.get('[]'),
        txtInsuranceQuestion3: () => cy.get('[]'),
        lblInsuranceQuestion4: () => cy.get('[]'),
        txtInsuranceQuestion4: () => cy.get('[]'),
        txtForMreFAQsPleaseClick: () => cy.get('[]'),
        lnkHere: () => cy.getIframeBody().find('[class="skins__HyperLink-kp4f8d-21 bPNnnW"]').eq(1),
        infoTextInsurance: () => cy.get('[]'),
        btnInsuranceGetInsured: () => cy.getIframeBody().find('[data-cy="btn"]'),
        lblInsuranceName: () => cy.getIframeBody().contains('p', 'Personal Accident + Hospicash (Reimbursement of Rs. 500 per day)'),


    }
    verifyInsurancePolicyDetailTitle(insuranceTitle) {
        this.elements.iframeInsuance().then($iframe => {
            const iframeElement = $iframe.contents().find('body')
            let element = cy.wrap(iframeElement)
            element.contains('p', insuranceTitle).should('exist')
        })
    }

    verifyPolicyPeriodLabel(title) {
        this.elements.lblPolicyPeriod().should('have.text', title)
    }

    verifyCoverageUptoLabel(title) {
        this.elements.lblCoverageUpto().should('have.text', title)
    }

    verifyPremiumStartsAtLabel(title) {
        this.elements.lblPremiumStartsAt().should('have.text', title)
    }

    verifyWhatsCoveredLabel(title) {
        this.elements.lblWhatsCovered().should('have.text', title)
    }

    clickTermsAndConditionsLink() {
        this.elements.lnkTermsAndCondtions().click()
    }

    clickFrequentlyAskedQuestionsDropDown() {
        this.elements.ddFrequentlyAskedQuestions().click()
    }

    verifyFirstFrequentlyAskedInsuranceQuestion(title) {
        this.elements.lblInsuranceQuestion1().should('have.text', title)
    }

    clickGetInsuredInJust5MinutesButton() {
        this.elements.btnInsuranceGetInsured().click()
    }

    verifyMoreFAQsLink(title) {
        this.elements.lnkHere().should('have.text', title)
    }

    verifyFrequentlyAskedQuestionsLabel(title) {
        this.elements.lblFrequentlyAskedQuestions().should('have.text', title)
    }
    verifyTermsAndConditionsLink() {
        this.elements.lnkTermsAndCondtions().should('be.visible')
    }

    verifyLblInsuranceQuestion1(question1) {
        this.elements.lblInsuranceQuestion1().should('have.text', question1)
    }
    verifyInsuranceAnswer1(answer1) {
        this.elements.txtInsuranceQuestion1().should('have.text', answer1)
    }
    verifyLblInsuranceQuestion2(question2) {
        this.elements.lblInsuranceQuestion2().should('have.text', question2)
    }
    verifyInsuranceAnswer2(answer2) {
        this.elements.txtInsuranceQuestion2().should('have.text', answer2)
    }
    verifyGetInsuredButton(text) {
        this.elements.btnInsuranceGetInsured().should('have.text', text)
    }
    verifyInsuranceNameLabel(title) {
        this.elements.lblInsuranceName().should('have.text', title)
    }

}

export const insurancePolicyDetailsPage = new InsurancePolicyDetailsPage