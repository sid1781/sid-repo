class InsuranceBuyPolicyListPage {

    details = {
        zeplin: () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/6229fa9d1de756bb7492ffd0',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }

    elements = {

        btnMyPolicies: () => cy.get('[]'),
        pageTitle: () => cy.getIframeBody().contains('div', 'Buy Policy').eq(0),
        /*TODO-Data-cy is not added for this lable */
        lblInsuranceCard1: () => cy.getIframeBody().contains('span', 'Personal Accident + Hospicash (Reimbursement of Rs. 1000 per day)'),
        imgInsuranceCard1: () => cy.get('[]'),
        lblInsuranceCoverageUptoCard1: () => cy.getIframeBody().contains('p', 'Coverage upto').first(),
        valInsuranceCard1: () => cy.getIframeBody().contains('span', '₹11,30,000'),
        lnkGetNowInsuranceCard1: () => cy.getIframeBody().find('[data-cy="viewDetails"]',{timeout:5000}).eq(1).should('be.visible'),
        iconAckoInsuranceCard1: () => cy.get('[]'),
        lblInsuranceCard2: () => cy.getIframeBody().contains('span', 'Personal Accident + Hospicash (Reimbursement of Rs. 500 per day)'),
        imgInsuranceCard2: () => cy.get('[]'),
        lblInsuranceCoverageUptoCard2: () => cy.getIframeBody().contains('p', 'Coverage upto'),
        valInsuranceCard2: () => cy.getIframeBody().contains('span', '₹3,75,000'),
        lnkGetNowInsuranceCard2: () => cy.get('[]'),
        iconAckoInsuranceCard2: () => cy.get('[]'),
        lblInsuranceCard3: () => cy.getIframeBody().contains('span', 'Personal Accident + Hospicash (Reimbursement of Rs. 500 per day)'),
        imgInsuranceCard3: () => cy.get('[]'),
        lblInsuranceCoverageUptoCard3: () => cy.getIframeBody().contains('p', 'Coverage upto'),
        valInsuranceCard3: () => cy.getIframeBody().contains('span', '₹3,60,000'),
        lnkGetNowInsuranceCard3: () => cy.get('[]'),
        iconAckoInsuranceCard3: () => cy.get('[]'),
        txtNoPolicyAvailable: () => cy.getIframeBody().contains('p', 'No policies available right now. Please check again after sometime.'),
        lnkMyPolicies: () => cy.getIframeBody().contains('div','My Policies'),
    }

    clickGetNowBtn(forInsurance) {
        this.elements.lnkGetNowInsuranceCard1().click()
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().first().should('have.text', title)
    }

    verifyNoPolicyAvailableText(title) {
        this.elements.txtNoPolicyAvailable().should('have.text', title)
    }

    verifyInsuranceCard1DescriptionLabel(title) {
        this.elements.lblInsuranceCard1().should('have.text', title)
    }

    verifyInsuranceCard2DescriptionLabel(title) {
        this.elements.lblInsuranceCard2().should('have.text', title)
    }

    verifyInsuranceCard3DescriptionLabel(title) {
        this.elements.lblInsuranceCard3().should('have.text', title)
    }

    verifyInsuranceCoverageUptoCard1label(title) {
        this.elements.lblInsuranceCoverageUptoCard1().should('have.text', title)
    }

    verifyInsuranceCoverageUptoCard2abel(title) {
        this.elements.lblInsuranceCoverageUptoCard2().should('have.text', title)
    }

    verifyInsuranceCoverageUptoCard3label(title) {
        this.elements.lblInsuranceCoverageUptoCard3().should('have.text', title)
    }

    verifyCard1InsuranceCoverageValue(value) {
        this.elements.valInsuranceCard1().should('have.text', value)
    }

    verifyCard2InsuranceCoverageValue(value) {
        this.elements.valInsuranceCard2().should('have.text', value)
    }

    verifyCard3InsuranceCoverageValue(value) {
        this.elements.valInsuranceCard3().should('have.text', value)
    }

    clickMyPoliciesLink() {
        this.elements.lnkMyPolicies().click({force:true})
    }
}
export const insuranceBuyPolicyListPage = new InsuranceBuyPolicyListPage