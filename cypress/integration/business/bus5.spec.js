//loan flow
import { homePage } from "../../pages/home/HomePage"
import { fplPage } from "../../pages/loan/fpl/FPLPage"
import { fplLoanAmountDetailsPage } from "../../pages/loan/fpl/FPLLoanAmountDetailsPage"
import { fplLoanAmountTenurePage } from "../../pages/loan/fpl/FPLLoanAmountTenurePage"
import { applyCouponCodeOrPointsPage } from "../../pages/generic/ApplyCouponCodeOrPointsPage"
import { repaymentSchedulePage } from "../../pages/loan/RepaymentSchedulePage"
import { loanPurposePage } from "../../pages/loan/LoanPurposePage"
import { selectBankAccountPage } from "../../pages/bank/SelectBankAccountPage"
import { signLoanDocumentPage } from "../../pages/loan/SignLoanDocumentPage"
import { kfsSanctionLetterPage } from "../../pages/loan/KFSSanctionLetterPage"
import { signDocumentPage } from "../../pages/loan/SignDocumentPage"
import { signServicePage } from "../../pages/loan/SignServicePage"
import { signServiceOTPInputPage } from "../../pages/loan/SignServiceOTPInputPage"
import { loanApplicationSubmittedPage } from "../../pages/loan/sa/LoanApplicationSubmittedPage"

// SA loan

import { footerPage } from "../../pages/generic/FooterPage"
import { accountsPage } from "../../pages/accounts/AccountsPage"

import { insuranceDetailsPage } from "../../pages/insurance/InsuranceDetailsPage"


//Profile status

import { repaymentPage } from "../../pages/repayments/RepaymentPage"


//csr
import { csrInfoPage } from "../../pages/creditScoreReport/CSRInfoPage"
import { csrProfileInformationPage } from "../../pages/creditScoreReport/CSRProfileInformationPage"
import { csrOTPInputPage } from "../../pages/creditScoreReport/CSROTPInputPage"
import { csrPaymentOptionsPage } from "../../pages/creditScoreReport/CSRPaymentOptionsPage"
import { csrAnalysisPage } from "../../pages/creditScoreReport/CSRAnalysisPage"
import { csrAccountHistoryPage } from "../../pages/creditScoreReport/CSRAccountHistoryPage";
import { csrCompareInfoPage } from "../../pages/creditScoreReport/CSRCompareInfoPage";
import { paymentOptionPage } from "../../pages/payments/PaymentOptionPage"


describe('Business-csr-Loan suits', () => {
    it('Login With Mobile Number', () => {

        const DBurl = "https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";
        const mobilenum = "8073874189"
        const dbip = "10.105.60.156"
        cy.visit('/login', { failOnStatusCode: false });
        cy.log('navigated to login page');
        cy.contains('span','Login/Signup with Mobile').click({ force: true });
        cy.url().should('include', '/loginwithmob/mobileform');
        cy.get('input')
            .should('be.visible')
            .and('have.attr', 'placeholder', '10 digit mobile number')
            .and('have.attr', 'maxlength', '10')
            .next()
            .prev()
            .type(mobilenum);
        cy.get('[data-cy="checkboxText"]').click()
        cy.wait(1000);
        cy.get('[data-cy="app.components.Common.continue_btn_caps"]')
            .click();
        cy.wait(4000);
        cy.url().should('include', '/loginwithmob/otpvalidation');

        cy.log("DBurl :" + DBurl);
        cy.log("mobilenum :" + mobilenum);
        cy.log("dbip :" + dbip);

        //SELECT otp from yp_user_otp  WHERE sentTo =8073874189  order by id desc limit 10
        var payload = { "query": "SELECT otp from `yp_user_otp` WHERE `sentTo` ='8073874189' order by id desc limit 1", "db_ip": "10.105.60.156" };
        cy.log(payload)
        cy.wait(3000)
        cy.request('POST', 'https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest', payload).then((resp) => {
            cy.wait(4000)
            cy.log(resp.status)
            cy.log(resp.body['body'])
            cy.wait(1000)
            const sixdigitotp = resp.body['body'];
            var rx = "\\d{6}"
            var otp = parseInt(sixdigitotp.match(rx))
            cy.log("OTP :" + otp)
            cy.get('input')
                .should('be.enabled')
                .and('have.attr', 'placeholder', 'Enter OTP Here')
                .click()
                .type(otp);
        })
        cy.wait(2000);
    })

    it('KB-T57653 (1.0)Ensure GST is not charged for Agreement Fee (bangalore) and irrespective of agreementFeeGStExclusion config', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-MLA4-subBandDefault1.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/Amount21k-Tenure5-MLA4-subBandDefault1.json' })
        cy.intercept('**/preloanre?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/LoanAmountTenurePage/FPL-Amount21k-Tenure5.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: '/loan/fpl/fpl-LoanAmount-DocumnetFee30.json' })
        cy.intercept('**/ins/policies/details?premium_id=**', { fixture: '/insurance/premiumDetailsPage-ICICI.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
        cy.intercept('**/loan/la?updateMFILimit=0&productid=5&pointType=&csrFee=**', { fixture: 'loan/sa/signLoanDocumentPage.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-CHOLA.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/sa/loanSanctionLetterPage.json' })
        cy.intercept('**/me/tnc/loanSignService', { fixture: 'loan/sa/signServicePage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otpPage-SignService.json' })
        cy.intercept('**/me?source=session', { fixture: 'loan/sa/loanApplicationSubmittedPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'loan/sa/otpPage-otpsubmit.json' })
        cy.intercept('**/me/loan', { fixture: 'loan/sa/LoanApplicationSubmittedPage-applSubmitted.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.verifyFlexiPersonalLoanLabel('FLEXI PERSONAL LOAN')
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickSliderSelectLoanAmount()
        fplLoanAmountTenurePage.verifyLoanAmountValue('20,000')
        fplLoanAmountTenurePage.verifyViewSummaryAndChargesText('View Summary & charges')
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.verifyLoanDocumantSigningFee('Loan Document Fee')
        fplLoanAmountDetailsPage.verifyLoanDocumantSigningFeeValue('₹ 30')
        fplLoanAmountDetailsPage.verifyGSTlbl('GST @ 18%')
        fplLoanAmountDetailsPage.verifyGSTValue('₹ 247')
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentPage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        kfsSanctionLetterPage.verifypageTitle('KFS & Sanction letter')
        kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
        kfsSanctionLetterPage.verifyLenderNameText('Cholamandalam Investment and Finance Company Limited & Krazybee Services Private Limited.')
        kfsSanctionLetterPage.verifyConsentSanctionLetterText('I have read and understood the Key Fact Statement and Sanction Letter issued by the Lender(s) in respect of my loan application and I accept the same. I also understand and agree to continue receiving promotional communication from the Lenders and in respect of the value added services being offered by KreditBee.')
        kfsSanctionLetterPage.selectBoxSanctionLetter('Continue to Sign Loan Document')
        kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
        kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
        signDocumentPage.verifyPageTitle('Sign Document')
        signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
        signDocumentPage.verifyContinueText('Continue')
        signDocumentPage.clickContinueButton()
        signServicePage.clickConsentReadText()
        signServicePage.clickConsentUnderstoodText()
        signServicePage.clickConsentLegalAndBindingText()
        signServicePage.clickContinueButton()
        signServiceOTPInputPage.enterOTP('395389')
        loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
    })

    it('KB-T53860 (1.0)[CSR Enhancements]: Verify When user click "Credit account & History" It should redirect to Credit score & report page with Number of Account', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-8k.json' })
        cy.intercept('**/me/creditreport', { fixture: '/creditScoreReport/CSR-New-AnalyzePage.json' })
        cy.intercept('**/me/creditreport/creditAccountHistory', { fixture: '/creditScoreReport/CSRCreditAccountHistory.json' })


        cy.visitURL('/newhome')
        homePage.clickcreditScoreIcon()
        csrAnalysisPage.verifyCreditStatusText('Credit status')
        csrAnalysisPage.verifyComparingPriviousReport()
        csrAnalysisPage.verifyCrediAccountAndHistory()
        csrAnalysisPage.verifyCreditPaymentHistory()
        csrAnalysisPage.verifyCheckCreditsEnquires()
        csrAnalysisPage.clickCreditAccountAndHistory()
        csrAccountHistoryPage.verifyPageTitle('Credit Score & ReportCredit Score & Report')
    })

    it('KB-T60778 (1.0)[CSR] Verify Rejected User is able to apply the Points during the CSR Report Generation', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-CSRReject.json' })
        cy.intercept('**/me/creditreport', { fixture: '/creditScoreReport/CSRCreditReportDetails.json' })
        cy.intercept('**/misc/pincode?pincode=**', { fixture: '/creditScoreReport/CSRProfileInformation.json' })
        cy.intercept('**/creditreport/details', { fixture: '/creditScoreReport/CSROTPDetails.json' })
        cy.intercept('**/otp?reason=creditreport', { fixture: '/creditScoreReport/CSROTPInput.json' })
        cy.intercept('**/me/otp?reason=**', { fixture: '/creditScoreReport/CSRPaymentOptionsPoints.json' })
        cy.intercept('**/payment?v=**', { fixture: '/creditScoreReport/CSRPaymentOption-Debitcard.json' })

        cy.visitURL('/newhome')
        homePage.clickcreditScoreIcon()
        csrInfoPage.clickPayAndGetReportButton()
        csrProfileInformationPage.enterPan('FMHPM0640A')
        csrProfileInformationPage.enterDate('7')
        csrProfileInformationPage.enterMonth('Aug')
        csrProfileInformationPage.enterYear('1998')
        csrProfileInformationPage.enterFNameinput('mastan')
        csrProfileInformationPage.enterLastName('komodheen')
        csrProfileInformationPage.enterEmail('komodheen.mastan@krazybee.com')
        csrProfileInformationPage.clickAddressLine2Input('Madanapalli')
        csrProfileInformationPage.submitButton()
        csrOTPInputPage.enterOTP('123456')
        csrOTPInputPage.checkConsentBox()
        csrOTPInputPage.clickSubmitBtn()
        csrPaymentOptionsPage.verifyFeeAmount('30')
        csrPaymentOptionsPage.clickCouponOrpointsButton()
        applyCouponCodeOrPointsPage.verifyApplyPoints30('Use 30 points')
        applyCouponCodeOrPointsPage.clickApplyPoints30()
        csrPaymentOptionsPage.verifyCouponSuccessFullMeassage('applied successfully !')
        csrPaymentOptionsPage.clickContinueButton()
    })


    it('KB-T31143 (1.0) MLA-X loan creation when esign with signbee config is enabled', () => {
        cy.intercept('**/home', { fixture: 'home/homepage-MLAX.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/mlax/Amount15k-Tenure6-MLAX-SubbandGood.json' })
        cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/viewSummayAndChargesPage.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/bankAccountVerifiedPage.json' })
        cy.intercept('**/loan/la?updateMFILimit=0&productid=**', { fixture: 'loan/signLoanDocumentPage-DigFaceID.json' })
        cy.intercept('**/loan/la?type=kb&productid=6&loanamt=**', { fixture: 'loan/loanSanctionPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
        cy.visitURL('/newhome')
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.verifyTotalIntrestLabel('Total Interest')
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        signDocumentPage.clickContinueButton()
        signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
        signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
        signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
        signServicePage.selectConsent()
        signServicePage.verifyContinueButtonText('Continue ')
        signServicePage.clickContinueButton()
        signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx253') //number changes w.r.t user logged in
        signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
        signServiceOTPInputPage.enterOTP('123456')
        signServiceOTPInputPage.verifyTimerValue('(00:26)')
    })

    it('KB-T57650 (1.0) Ensure GST is not charged for Agreement Fee (chennai) and respective tables are updated', () => {
        cy.intercept('**/main/home', { fixture: '/home/homePage-MLASILVER.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: '/loan/fpl/fplPage-5k.json' })
        cy.intercept('**/main/preloanre?productId=14&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash', { fixture: '/loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
        cy.intercept('**/main/products?productId=**', { fixture: '/loan/fpl/fplLoanAmountTenurePage-productID14.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: '/loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/ins/policies/details?premium_id=**', { fixture: '/insurance/premiumDetailsPage-ICICI.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
        cy.intercept('**/loan/la?updateMFILimit=0&productid=5&pointType=&csrFee=**', { fixture: 'loan/sa/signLoanDocumentPage.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-CHOLA.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/sa/loanSanctionLetterPage.json' })
        cy.intercept('**/me/tnc/loanSignService', { fixture: 'loan/sa/signServicePage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otpPage-SignService.json' })
        cy.intercept('**/me?source=session', { fixture: 'loan/sa/loanApplicationSubmittedPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'loan/sa/otpPage-otpsubmit.json' })
        cy.intercept('**/me/loan', { fixture: 'loan/sa/LoanApplicationSubmittedPage-applSubmitted.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.verifyFlexiPersonalLoanLabel('FLEXI PERSONAL LOAN')
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.verifyLoanAmountValue('6,200')
        fplLoanAmountTenurePage.clickSliderSelectLoanAmount()
        fplLoanAmountTenurePage.verifyViewSummaryAndChargesText('View Summary & charges')
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.verifyLoanDocumantSigningFee('Loan Document Fee')
        fplLoanAmountDetailsPage.verifyLoanDocumantSigningFeeValue('₹ 20')
        fplLoanAmountDetailsPage.verifyGSTlbl('GST @ 18%')
        fplLoanAmountDetailsPage.verifyGSTValue('₹ 84')
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentPage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        kfsSanctionLetterPage.verifypageTitle('KFS & Sanction letter')
        kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
        kfsSanctionLetterPage.verifyLenderNameText('Cholamandalam Investment and Finance Company Limited & Krazybee Services Private Limited.')
        kfsSanctionLetterPage.verifyConsentSanctionLetterText('I have read and understood the Key Fact Statement and Sanction Letter issued by the Lender(s) in respect of my loan application and I accept the same. I also understand and agree to continue receiving promotional communication from the Lenders and in respect of the value added services being offered by KreditBee.')
        kfsSanctionLetterPage.selectBoxSanctionLetter('Continue to Sign Loan Document')
        kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
        kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
        signDocumentPage.verifyPageTitle('Sign Document')
        signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
        signDocumentPage.verifyContinueText('Continue')
        signDocumentPage.clickContinueButton()
        signServicePage.clickConsentReadText()
        signServicePage.clickConsentUnderstoodText()
        signServicePage.clickConsentLegalAndBindingText()
        signServicePage.clickContinueButton()
        signServiceOTPInputPage.enterOTP('395389')
        loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
    })

    it('KB-T47019 (1.0)Verify Confirmed user is able to Generate the CSR Report when config =1 for "credit/score/productConfig/confirmed in the yp_config table"', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-8k.json' })
        cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage.json' })
        cy.intercept('**/creditreport', { fixture: '/creditScoreReport/CSRPayAndGetOTP.json' })
        cy.intercept('**/otp?reason=**', { fixture: 'creditScoreReport/CSRPaymentOptionsPage.json' })
        cy.intercept('**/payment?v=**', { fixture: '/creditScoreReport/CSRPaymentOption-Debitcard.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        footerPage.clickAccountIcon()
        accountsPage.clickCreditScoreText()
        csrInfoPage.clickPayAndGetReportButton()
        csrOTPInputPage.enterOTP('123456')
        csrOTPInputPage.checkConsentBox()
        csrOTPInputPage.clickSubmitBtn()
        csrPaymentOptionsPage.clickPayNowButton()
        paymentOptionPage.clickPayWithDebitCard()
    })

    it('KB-T21452 Ensure user is able to apply the coupon or points during the CSR flow', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-8k.json' })
        cy.intercept('**/creditreport', { fixture: '/creditScoreReport/CSRPayAndGetOfterfilling.json' })
        cy.intercept('**/me/otp?reason=creditreport', { fixture: '/creditScoreReport/CSRPaymentOptionsPage.json' })
        cy.intercept('**/main/products/verifycoupon?couponType=**', { fixture: 'generic/applyCouponCodeSuccessfully-CSR123.json' })
        cy.intercept('**/payment?v=sp3&reqId=6279006&type=**', { fixture: 'creditScoreReport/CSRPaymentOption-Debitcard.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickcreditScoreIcon()
        csrInfoPage.clickPayAndGetReportButton()
        csrOTPInputPage.enterOTP('123456')
        csrOTPInputPage.checkConsentBox()
        csrOTPInputPage.clickSubmitBtn()
        csrPaymentOptionsPage.clickPayWithCouponCodeBtn()
        applyCouponCodeOrPointsPage.enterCSRCouponCode('CSR123')
        applyCouponCodeOrPointsPage.clickApplyCodeBtn()
        csrPaymentOptionsPage.verifyCouponSuccessFullMeassage(' applied successfully !')
        csrPaymentOptionsPage.clickPayNowButton()
        paymentOptionPage.clickPayWithDebitCard()
    })

    it('KB-T49001 CSR: Check if the Download Credit report option is working', () => {
        cy.intercept('**/home', { fixture: 'creditScoreReport/CSRConfirmedProfile.json' })
        cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage.json' })
        cy.intercept('**/creditreport', { fixture: '/creditScoreReport/CSRPayAndGetOfterfilling.json' })
        cy.intercept('**/me/otp?reason=creditreport', { fixture: 'creditScoreReport/CSROTPInput.json' })
        cy.intercept('**/otp?reason=creditreport', { fixture: 'creditScoreReport/CSRPaymentOptionsPage.json' })
        cy.intercept('**/payment?v=sp3&reqId=6279006&type=**', { fixture: 'creditScoreReport/CSRPaymentOption-Debitcard.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        footerPage.clickAccountIcon()
        accountsPage.clickCreditScoreText()
        csrInfoPage.clickPayAndGetReportButton()
        csrOTPInputPage.enterOTP('123456')
        csrOTPInputPage.checkConsentBox()
        csrOTPInputPage.clickSubmitBtn()
        csrPaymentOptionsPage.clickPayNowButton()
        paymentOptionPage.clickPayWithDebitCard()
    })

    it('1.KB-T24082 (1.0) [CSR Phase 3]:Check the CSR report is generated when the loan is disbursed',()=>{
        cy.intercept('**/home', { fixture: 'home/homePage-MLASILVER.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-5k.json' })
        cy.intercept('**/preloanre?productId=14&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash',
            { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
        cy.intercept('**/products?productId=14', { fixture: 'loan/fpl/fplLoanAmountTenurePage-productID14.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/me/bank?productid=14', { fixture: 'bank/bankAccountVerifiedPage.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-INCRED.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
        cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'otp/otpSignServicePage.json' })
        cy.intercept('**/me/loan', { fixture: 'otp/loanApplicationPage-Submitted.json' })
        cy.intercept('**/me?source=session', { fixture: 'otp/loanApplicationPage-InsSubmit.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickGetMyCSRCheckBox()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        //kfs sanction letter - validation
        kfsSanctionLetterPage.verifyPageTitle('Sanction letter')
        kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
        kfsSanctionLetterPage.verifyLenderNameText('Visu Leasing and Finance Private Limited.')
        kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
        kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
        //sanction letter -validation
        signDocumentPage.verifyPageTitle('Sign Document')
        signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
        signDocumentPage.verifyContinueText('Continue')
        signDocumentPage.clickContinueButton()
        //signServicePage - validation
        signServicePage.verifyPageTitle('Sign Service')
        signServicePage.verifyTransactionIDLabel('Transaction ID:')
        signServicePage.verifyTransactionIDValue('KBDID202203161WMdPiEj8o811837')
        signServicePage.verifyDateAndTimeLabel('Date & Time:')
        signServicePage.verifyDeviceIDLabel('Device ID:')
        signServicePage.verifyDeviceIDValue('')
        signServicePage.verifyIPAddressLabel('IP Address:')
        signServicePage.verifyIPAddressValue('122.185.107.110')
        signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
        signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
        signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
        signServicePage.selectConsent()
        signServicePage.verifyContinueButtonText('Continue ')
        signServicePage.clickContinueButton()
        // //OTP service validation
        signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx') //number changes w.r.t user logged in
        signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
        signServiceOTPInputPage.enterOTP('123456')
        loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
    })

    it('2.KB-T24082 (1.0) [CSR Phase 3]:Check the CSR report is generated when the loan is disbursed',()=>{
        cy.intercept('**/home', { fixture: '/home/homePage-8k.json' })
        cy.intercept('**/me/creditreport', { fixture: '/creditScoreReport/CSR-New-AnalyzePage.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickcreditScoreIcon()
        csrAnalysisPage.verifyPageTitle()
        csrAnalysisPage.verifyCreditStatusText('Credit status')
    })


    it('KB-T47026 (1.0)Check Weather Rejected user is able to generate the CSR Report when "credit/score/productConfig/Non Confirmed " is 1 in yp_config table', () => {

        cy.intercept('**/home', { fixture: 'home/homePage-CSRReject.json' })
        cy.intercept('**/me/creditreport', { fixture: '/creditScoreReport/CSRCreditReportDetails.json' })
        cy.intercept('**/misc/pincode?pincode=**', { fixture: '/creditScoreReport/CSRProfileInformation.json' })
        cy.intercept('**/creditreport/details', { fixture: '/creditScoreReport/CSROTPDetails.json' })
        cy.intercept('**/otp?reason=creditreport', { fixture: '/creditScoreReport/CSROTPInput.json' })
        cy.intercept('**/me/otp?reason=**', { fixture: 'creditScoreReport/CSRPaymentOptionsPage.json' })
        cy.intercept('**/payment?v=**', { fixture: '/creditScoreReport/CSRPaymentOption-Debitcard.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickcreditScoreIcon()
        csrInfoPage.clickPayAndGetReportButton()
        csrProfileInformationPage.enterPan('FMHPM0640A')
        csrProfileInformationPage.enterDate('7')
        csrProfileInformationPage.enterMonth('Aug')
        csrProfileInformationPage.enterYear('1998')

        csrProfileInformationPage.enterFNameinput('mastan')
        csrProfileInformationPage.enterLastName('komodheen')
        csrProfileInformationPage.enterEmail('komodheen.mastan@krazybee.com')
        csrProfileInformationPage.clickAddressLine2Input('Madanapalli')
        csrProfileInformationPage.submitButton()
        csrOTPInputPage.enterOTP('123456')


        csrOTPInputPage.checkConsentBox()
        csrOTPInputPage.clickSubmitBtn()
        csrPaymentOptionsPage.clickPayNowButton()
        paymentOptionPage.clickPayWithDebitCard()

    })

    it('KB-T57651 (1.0)Ensure GST is not charged for Agreement Fee (bangalore) and respective tables are updated', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-MLA4-subBandDefault1.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/Amount21k-Tenure5-MLA4-subBandDefault1.json' })
        cy.intercept('**/preloanre?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/LoanAmountTenurePage/FPL-Amount21k-Tenure5.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: '/loan/fpl/fpl-LoanAmountGSTNotApply.json' })
        cy.intercept('**/ins/policies/details?premium_id=**', { fixture: 'insurance/premiumDetailsPage-ICICI.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
        cy.intercept('**/loan/la?updateMFILimit=0&productid=5&pointType=&csrFee=**', { fixture: 'loan/sa/signLoanDocumentPage.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-CHOLA.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/sa/loanSanctionLetterPage.json' })
        cy.intercept('**/me/tnc/loanSignService', { fixture: 'loan/sa/signServicePage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otpPage-SignService.json' })
        cy.intercept('**/me?source=session', { fixture: 'loan/sa/loanApplicationSubmittedPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'loan/sa/otpPage-otpsubmit.json' })
        cy.intercept('**/me/loan', { fixture: 'loan/sa/LoanApplicationSubmittedPage-applSubmitted.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.verifyFlexiPersonalLoanLabel('FLEXI PERSONAL LOAN')
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickSliderSelectLoanAmount()
        fplLoanAmountTenurePage.verifyLoanAmountValue('20,000')
        fplLoanAmountTenurePage.verifyViewSummaryAndChargesText('View Summary & charges')
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.verifyLoanDocumantSigningFee('Loan Document Fee')
        fplLoanAmountDetailsPage.verifyLoanDocumantSigningFeeValue('₹ 30')
        fplLoanAmountDetailsPage.verifyGSTlbl('GST @ 18%')
        fplLoanAmountDetailsPage.verifyCSRText('Get my Credit Score Report : ₹ 50')
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentPage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        kfsSanctionLetterPage.verifypageTitle('KFS & Sanction letter')
        kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
        kfsSanctionLetterPage.verifyLenderNameText('Cholamandalam Investment and Finance Company Limited & Krazybee Services Private Limited.')
        kfsSanctionLetterPage.verifyConsentSanctionLetterText('I have read and understood the Key Fact Statement and Sanction Letter issued by the Lender(s) in respect of my loan application and I accept the same. I also understand and agree to continue receiving promotional communication from the Lenders and in respect of the value added services being offered by KreditBee.')
        kfsSanctionLetterPage.selectBoxSanctionLetter('Continue to Sign Loan Document')
        kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
        kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
        signDocumentPage.verifyPageTitle('Sign Document')
        signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
        signDocumentPage.verifyContinueText('Continue')
        signDocumentPage.clickContinueButton()
        signServicePage.clickConsentReadText()
        signServicePage.clickConsentUnderstoodText()
        signServicePage.clickConsentLegalAndBindingText()
        signServicePage.clickContinueButton()
        signServiceOTPInputPage.enterOTP('395389')
        loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
    })

    it('KB-T57652 (1.0) When agreementFeeGStExclusion config is set to 0, ensure GST is charged for Agreement Fee (chennai) and respective tables are updated', () => {
        cy.intercept('**/main/home', { fixture: 'home/homePage-MLASILVER.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-5k.json' })
        cy.intercept('**/main/preloanre?productId=14&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash', { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
        cy.intercept('**/main/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-productID14.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: '/loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/ins/policies/details?premium_id=**', { fixture: 'insurance/premiumDetailsPage-ICICI.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
        cy.intercept('**/loan/la?updateMFILimit=0&productid=5&pointType=&csrFee=**', { fixture: 'loan/sa/signLoanDocumentPage.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-CHOLA.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/sa/loanSanctionLetterPage.json' })
        cy.intercept('**/me/tnc/loanSignService', { fixture: 'loan/sa/signServicePage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otpPage-SignService.json' })
        cy.intercept('**/me?source=session', { fixture: 'loan/sa/loanApplicationSubmittedPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'loan/sa/otpPage-otpsubmit.json' })
        cy.intercept('**/me/loan', { fixture: 'loan/sa/LoanApplicationSubmittedPage-applSubmitted.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.verifyFlexiPersonalLoanLabel('FLEXI PERSONAL LOAN')
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.verifyLoanAmountValue('6,200')
        fplLoanAmountTenurePage.clickSliderSelectLoanAmount()
        fplLoanAmountTenurePage.verifyViewSummaryAndChargesText('View Summary & charges')
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.verifyLoanDocumantSigningFee('Loan Document Fee')
        fplLoanAmountDetailsPage.verifyLoanDocumantSigningFeeValue('₹ 20')
        fplLoanAmountDetailsPage.verifyGSTlbl('GST @ 18%')
        fplLoanAmountDetailsPage.verifyGSTValue('₹ 84')
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentPage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        kfsSanctionLetterPage.selectBoxSanctionLetter('Continue to Sign Loan Document')
        kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
        signDocumentPage.clickContinueButton()
        signServicePage.clickConsentReadText()
        signServicePage.clickConsentUnderstoodText()
        signServicePage.clickConsentLegalAndBindingText()
        signServicePage.clickContinueButton()
        signServiceOTPInputPage.enterOTP('395389')
        loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
    })

    it('KB-T41423 (1.0) Verify SA product loan creation with insurance fee', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-SA.json' })
        cy.intercept('**/preloanre?productId=**', { fixture: 'loan/sa/SA-Amount15k-Tenure6.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/sa/SA-Amount15k-Tenure6-MLA2-SubbandGood-APR-Enabled.json' })
        cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/viewSummayAndChargesPage.json' })
        cy.intercept('**/products/calcfees?productid=14&loanamt=6200&tenure=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
        cy.intercept('**/ins/policies/details?premium_id=**', { fixture: 'insurance/premiumDetailsPage-ICICI.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
        cy.intercept('**/loan/la?updateMFILimit=0&productid=5&pointType=&csrFee=**', { fixture: 'loan/sa/signLoanDocumentPage.json' })
        cy.intercept('**/loan/la?type=kb&productid=**', { fixture: 'loan/sa/sanctionLetterPage.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/sa/loanSanctionLetterPage.json' })
        cy.intercept('**/me/tnc/loanSignService', { fixture: 'loan/sa/signServicePage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otpPage-SignService.json' })
        cy.intercept('**/me?source=session', { fixture: 'loan/sa/loanApplicationSubmittedPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'loan/sa/otpPage-otpsubmit.json' })
        cy.intercept('**/me/loan', { fixture: 'loan/sa/LoanApplicationSubmittedPage-applSubmitted.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock1Btn()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickInsuranceKnowMoreLink()
        insuranceDetailsPage.verifyCoverageUptoLabel('COVERAGE UPTO')
        insuranceDetailsPage.verifyInsuranceCoverageValue('6,200')
        insuranceDetailsPage.verifyOneTimePremiumLabel('ONE TIME PREMIUM')
        insuranceDetailsPage.verifyOneTimePremiumValue('73')
        insuranceDetailsPage.clickOkBtn()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.verifyPageTitle('Sign Loan Document')
        signLoanDocumentPage.clickContinueBtn()
        kfsSanctionLetterPage.verifypageTitle('KFS & Sanction letter')
        kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
        kfsSanctionLetterPage.verifyLenderNameText('Krazybee Services Private Limited.')
        kfsSanctionLetterPage.verifyConsentSanctionLetterText('I have read and understood the Key Fact Statement and Sanction Letter issued by the Lender(s) in respect of my loan application and I accept the same. I also understand and agree to continue receiving promotional communication from the Lenders and in respect of the value added services being offered by KreditBee.')
        // kfsSanctionLetterPage.selectBoxSanctionLetter('Continue to Sign Loan Document')
        kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
        kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
        signDocumentPage.verifyPageTitle('Sign Document')
        signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
        signDocumentPage.verifyContinueText('Continue')
        signDocumentPage.clickContinueButton()
        signServicePage.clickConsentReadText()
        signServicePage.clickConsentUnderstoodText()
        signServicePage.clickConsentLegalAndBindingText()
        signServicePage.clickContinueButton()
        signServiceOTPInputPage.enterOTP('395389')
        loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
    })

    it('1-KB-T47145 (1.0) Verify Rejected User is able to apply the Partial Points during the CSR Report Generation', () => {

        cy.intercept('**/home', { fixture: 'home/homePage-CSRReject.json' })
        cy.intercept('**/me/creditreport', { fixture: '/creditScoreReport/CSRCreditReportDetails.json' })
        cy.intercept('**/misc/pincode?pincode=**', { fixture: '/creditScoreReport/CSRProfileInformation.json' })
        cy.intercept('**/creditreport/details', { fixture: '/creditScoreReport/CSROTPDetails.json' })
        cy.intercept('**/me/tnc/csr', { fixture: '/creditScoreReport/CSRPointsinputPage.json' })
        cy.intercept('**/otp?reason=creditreport', { fixture: 'creditScoreReport/CSROtpPointsInputPage.json' })
        cy.intercept('**/me/tnc/csr', { fixture: '/creditScoreReport/CSRPointsSuccessFull.json' })
        cy.intercept('**/payment?v=**', { fixture: '/creditScoreReport/CSRPaymentOption-Debitcard.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickcreditScoreIcon()
        csrInfoPage.clickPayAndGetReportButton()
        csrProfileInformationPage.enterPan('FMHPM0640A')
        csrProfileInformationPage.enterDate('7')
        csrProfileInformationPage.enterMonth('Aug')
        csrProfileInformationPage.enterYear('1998')
        csrProfileInformationPage.enterFNameinput('mastan')
        csrProfileInformationPage.enterLastName('komodheen')
        csrProfileInformationPage.enterEmail('komodheen.mastan@krazybee.com')
        csrProfileInformationPage.clickAddressLine2Input('Madanapalli')
        csrProfileInformationPage.submitButton()
        csrOTPInputPage.enterOTP('123456')
        //csrOTPInputPage.checkConsentBox()
        csrOTPInputPage.clickSubmitBtn()
        csrPaymentOptionsPage.verifyPayNowLabel('Pay Now')
        csrPaymentOptionsPage.verifyCouponOrpointsButton('Pay with Coupon Code or Points')
        csrPaymentOptionsPage.clickCouponOrpointsButton()
        applyCouponCodeOrPointsPage.clickApplyPoints30()
        csrPaymentOptionsPage.verifyCouponSuccessFullMeassage('applied successfully !')
        csrPaymentOptionsPage.clickPayNowButton()
        paymentOptionPage.verifyPayWithDebitCardText('Pay with Debit Card')
        paymentOptionPage.verifyNetBankingText('NetBanking')
        paymentOptionPage.clickPayWithDebitCard()
    })

    it('2-KB-T47145 (1.0) Verify Rejected User is able to apply the Partial Points during the CSR Report Generation', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-CSRReject.json' })
        cy.intercept('**/me/creditreport', { fixture: '/creditScoreReport/CSR-New-AnalyzePage.json' })
        cy.intercept('**/me/creditreport/fetchAnalyticsData', { fixture: '/creditScoreReport/CSRFetchAnalyticsDataSix.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickcreditScoreIcon()
        csrAnalysisPage.verifyCreditStatusText('Credit status')
    })

    it('KB-T53577 (1.0)[CSR Enhancements]: Verify When user click on "Compare with Previous Report" user is redirected to CSR Graph Page', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-8k.json' })
        cy.intercept('**/me/creditreport', { fixture: '/creditScoreReport/CSR-New-AnalyzePage.json' })
        cy.intercept('**/me/creditreport/fetchAnalyticsData', { fixture: '/creditScoreReport/CSRFetchAnalyticsDataSix.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickcreditScoreIcon()
        csrAnalysisPage.verifyCreditStatusText('Credit status')
        csrAnalysisPage.clickComparingPriviousReport()
        csrCompareInfoPage.verifyPageTitle('Credit Score & ReportCredit Score & Report')

    })

    it('KB-T60797 (1.0) Verify Credit Report (CSR) option is Displaying in the My Account Page for the Confirmed user', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-8k.json' })
        cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage.json' })

        cy.visitURL('/newhome')
        footerPage.clickAccountIcon()
        accountsPage.verifyCreditScoreText('Credit Score')
    })

    it('KB-T53827 (1.0)[CSR Enhancements]: Verify when user has only One CSR Report Generated and user Click on "Compare with previous report" Block CTA Message Page should display "No previous report. Get your latest credit report again after <x> days to compare"', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-8k.json' })
        cy.intercept('**/me/creditreport', { fixture: '/creditScoreReport/CSR-New-AnalyzePage.json' })
        cy.intercept('**/me/creditreport/creditAccountHistory', { fixture: '/creditScoreReport/CSRCreditAccountHistory.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickcreditScoreIcon()
        csrAnalysisPage.verifyCreditStatusText('Credit status')
        csrAnalysisPage.verifyComparingPriviousReport()
        csrAnalysisPage.verifyCrediAccountAndHistory()
        csrAnalysisPage.verifyCreditPaymentHistory()
        csrAnalysisPage.verifyCheckCreditsEnquires()
        csrAnalysisPage.clickCreditAccountAndHistory()
        csrAccountHistoryPage.verifyPageTitle('Credit Score & ReportCredit Score & Report')
    })

    it('KB-T47047 (1.0)Check when CSR Report is already generated Rejected User is able to redirect to Downloaded CSR Page', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-CSRReject.json' })
        cy.intercept('**/me/creditreport', { fixture: 'creditScoreReport/CSRGeneratedSuccessfully.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.verifyCreditReportLabel('Credit Report')
        homePage.clickcreditScoreIcon()
    })

    it('KB-T60166 (1.0) Ensure confirmed User is able to apply the Points during the CSR flow', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-8k.json' })
        cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage.json' })
        cy.intercept('**/me/creditreport', { fixture: '/creditScoreReport/CSRCouponCodePayandGet.json' })
        cy.intercept('**/me/credtreport', { fixture: '/creditScoreReport/CSRPaymentOptionsPage.json' })
        cy.intercept('**/main/products/verifycoupon?couponType=**', { fixture: 'generic/applyCouponCodeSuccessfully.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        footerPage.clickAccountIcon()
        accountsPage.clickCreditScoreText()
        csrInfoPage.clickPayAndGetReportButton()
        csrPaymentOptionsPage.verifyPayNowLabel('Pay Now')
        csrPaymentOptionsPage.verifyCouponOrpointsButton('Pay with Coupon Code or Points')
        csrPaymentOptionsPage.clickCouponOrpointsButton()
        applyCouponCodeOrPointsPage.clickApplyPoints50()
        csrPaymentOptionsPage.verifyCouponSuccessFullMeassage('applied successfully !')
        csrPaymentOptionsPage.clickContinueButton()
    })
})