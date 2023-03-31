/// <reference types = "cypress" />

export class PayViaBankTransferPage {

    details = {
        Zeplin: () => '',
        Overflow: () => ''
    }

    elements = {
        pageTitile: () => cy.get('[data-cy="app.components.Ecollect.payable_amount"]'),
        valAmount: () => cy.get('[]'),
        txtEmiPayment: () => cy.get('[data-cy="app.components.Ecollect.repay_emi"]'),
        lblBeneficiaryName: () => cy.get('[data-cy="app.components.Ecollect.beneficiary_name"]'),
        valBeneficiarName: () => cy.get('[]'),
        lnkCopy: () => cy.get('[data-cy="app.components.Common.copy_btn_caps_undefined"]'),
        lblBeneficiaryAccountNumber: () => cy.get('[data-cy="app.components.Ecollect.beneficiary_acc_no"]'),
        valBeneficiaryAccountNumber1Block: () => cy.get('[data-cy="repayContent_0"]'),
        valBeneficiaryAccountNumber2Block: () => cy.get('[data-cy="repayContent_1"]'),
        valBeneficiaryAccountNumber3Block: () => cy.get('[data-cy="repayContent_2"]'),
        valBeneficiaryAccountNumber4Block: () => cy.get('[data-cy="repayContent_3"]'),
        lblIFSCCode: () => cy.get('[data-cy="app.components.Ecollect.ifsc_code"]'),
        lblIFSCNumber: () => cy.get('[data-cy="app.components.Ecollect.number_zero_string_undefined"]'),
        valIFSC1: () => cy.get('[data-cy="repayContent_0"]'),
        valIFSC2: () => cy.get('[data-cy="repayContent_1"]'),
        valIFSC3: () => cy.get('[data-cy="repayContent_2"]'),
        valIFSC4: () => cy.get('[data-cy="repayContent_3"]'),
        valIFSC5: () => cy.get('[data-cy="repayContent_4"]'),
        valIFSC6: () => cy.get('[data-cy="repayContent_5"]'),
        valIFSC7: () => cy.get('[data-cy="repayContent_6"]'),
        valIFSC8: () => cy.get('[data-cy="repayContent_7"]'),
        valIFSC9: () => cy.get('[data-cy="repayContent_8"]'),
        valIFSC10: () => cy.get('[data-cy="repayContent_9"]'),
        lblAlphabet: () => cy.get('[data-cy="app.components.Ecollect.alphabet_omn_string_undefined"]'),
        lblRemarks: () => cy.get('[data-cy="app.components.Ecollect.remarks"]'),
        valRemarks: () => cy.get('[]'),
        lnkPayViaNetbanking: () => cy.get('[data-cy="app.components.Ecollect.net_banking_link"]'),
        lnkPayViaPhonepe: () => cy.get('[data-cy="app.components.Ecollect.phonepe_link"]'),
        lnkPayViaGooglePay: () => cy.get('[data-cy="app.components.Ecollect.google_pay_link"]'),
        txtAccountRejection: () => cy.get('[data-cy="label_app.components.Ecollect.emi_payment_note"]'),
        txtRepayTime: () => cy.get('[data-cy="app.components.Ecollect.please_wait_upto"]'),
        btnBackToRepayments: () => cy.get('[]')
    }

    verifypageTitle(title) {
        this.elements.pageTitile().should('have.text', title)
    }

    verifyEMIBeneficinaryLabel(text) {
        this.elements.lblBeneficiaryName().should('have.text', text)
    }

    verifyIFSC() {
        this.elements.valIFSC1()
        this.elements.valIFSC2()
        this.elements.valIFSC3()
        this.elements.valIFSC4()
        this.elements.valIFSC5()
        this.elements.valIFSC6()
    }

    verifybeneficiaryAccountNumbervalue() {
        this.elements.valBeneficiaryAccountNumber1Block()
        this.elements.valBeneficiaryAccountNumber2Block()
        this.elements.valBeneficiaryAccountNumber3Block()
        this.elements.valBeneficiaryAccountNumber4Block()
    }
}

export const payViaBankTransferPage= new PayViaBankTransferPage