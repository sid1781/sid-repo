// //loan flow
// import { homePage } from "../../pages/home/HomePage"
// import { fplPage } from "../../pages/loan/fpl/FPLPage"
// import { fplLoanAmountDetailsPage } from "../../pages/loan/fpl/FPLLoanAmountDetailsPage"
// import { fplLoanAmountTenurePage } from "../../pages/loan/fpl/FPLLoanAmountTenurePage"
// import { applyCouponCodeOrPointsPage } from "../../pages/generic/ApplyCouponCodeOrPointsPage"
// import { repaymentSchedulePage } from "../../pages/loan/RepaymentSchedulePage"
// import { loanPurposePage } from "../../pages/loan/LoanPurposePage"
// import { selectBankAccountPage } from "../../pages/bank/SelectBankAccountPage"
// import { signLoanDocumentPage } from "../../pages/loan/SignLoanDocumentPage"
// import { kfsSanctionLetterPage } from "../../pages/loan/KFSSanctionLetterPage"
// import { signDocumentPage } from "../../pages/loan/SignDocumentPage"
// import { signServicePage } from "../../pages/loan/SignServicePage"
// import { signServiceOTPInputPage } from "../../pages/loan/SignServiceOTPInputPage"
// import { loanApplicationSubmittedPage } from "../../pages/loan/sa/LoanApplicationSubmittedPage"

// // SA loan
// import { saLoanAmountTenurePage } from "../../pages/loan/sa/SALoanAmountTenurePage"
// import { saLoanAmountDetailsPage } from "../../pages/loan/sa/SALoanAmountDetailsPage"

// import { footerPage } from "../../pages/generic/FooterPage"
// import { accountsPage } from "../../pages/accounts/AccountsPage"

// import { panInputPage } from "../../pages/onboarding/eligibility/PanInputPage";
// import { loaderScreenPage } from "../../pages/generic/LoaderScreenPage";


// //account
// import { settingsPage } from "../../pages/generic/SettingsPage"
// import { headerPage } from "../../pages/generic/HeaderPage"
// import { referAndEarn } from "../../pages/accounts/referAndEarn"
// import { repaymentPage } from "../../pages/repayments/RepaymentPage"
// //repayments
// import { changeLanguage } from "../../pages/generic/ChangeLanguage"
// import { referalPopupPage } from "../../pages/onboarding/general/ReferralCodePopUpPage"
// import { saProductDetailsPage } from "../../pages/loan/sa/SAProductDetailsPage"
// import { saEmpDetailsPage } from "../../pages/loan/sa/SAEmpDetailsPage"
// import { paymentOptionPage } from "../../pages/payments/PaymentOptionPage"

// //PD
// import { pdPage} from "../../pages/pd/PDPage"

// describe('Account , Settings , Loan , SA', () => {
//     it('Login With Mobile Number', () => {

//         const DBurl = "https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";
//         const mobilenum = "8073874189"
//         const dbip = "10.105.60.156"
//         cy.visit('/login', { failOnStatusCode: false });
//         cy.log('navigated to login page');
//         cy.contains('span','Login/Signup with Mobile').click({ force: true });
//         cy.url().should('include', '/loginwithmob/mobileform');
//         cy.get('input')
//             .should('be.visible')
//             .and('have.attr', 'placeholder', '10 digit mobile number')
//             .and('have.attr', 'maxlength', '10')
//             .next()
//             .prev()
//             .type(mobilenum);
//         cy.get('[data-cy="checkboxText"]').click()
//         cy.wait(1000);
//         cy.get('[data-cy="app.components.Common.continue_btn_caps"]')
//             .click();
//         cy.wait(4000);
//         cy.url().should('include', '/loginwithmob/otpvalidation');

//         cy.log("DBurl :" + DBurl);
//         cy.log("mobilenum :" + mobilenum);
//         cy.log("dbip :" + dbip);

//         //SELECT otp from yp_user_otp  WHERE sentTo =8073874189  order by id desc limit 10
//         var payload = { "query": "SELECT otp from `yp_user_otp` WHERE `sentTo` ='8073874189' order by id desc limit 1", "db_ip": "10.105.60.156" };
//         cy.log(payload)
//         cy.wait(3000)
//         cy.request('POST', 'https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest', payload).then((resp) => {
//             cy.wait(4000)
//             cy.log(resp.status)
//             cy.log(resp.body['body'])
//             cy.wait(1000)
//             const sixdigitotp = resp.body['body'];
//             var rx = "\\d{6}"
//             var otp = parseInt(sixdigitotp.match(rx))
//             cy.log("OTP :" + otp)
//             cy.get('input')
//                 .should('be.enabled')
//                 .and('have.attr', 'placeholder', 'Enter OTP Here')
//                 .click()
//                 .type(otp);
//         })
//         cy.wait(2000);
//     })

//     it('KB-T45408 (1.0) [Login] Check "Referral code" screen is displayed', () => {
//         cy.visit('/home/referral', { failOnStatusCode: false });
//         referalPopupPage.verifyPageTitle('Do you have a Referral Code ?')
//     })

//     it('KB-T41396 Verify that loan getting disburse with intermediate amount (3.5k) for FPL product',()=>{
//         cy.intercept('**/home', { fixture: 'home/homePage-MLASILVER.json' })
//         cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-5k.json' })
//         cy.intercept('**/preloanre?productId=14&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash',
//             { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
//         cy.intercept('**/products?productId=14', { fixture: 'loan/fpl/fplLoanAmountTenurePage-productID14.json' })
//         cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
//         cy.intercept('**/me/bank?productid=14', { fixture: 'bank/bankAccountVerifiedPage.json' })
//         cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
//         cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-INCRED.json' })
//         cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
//         cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'otp/otpSignServicePage.json' })
//         cy.intercept('**/me/loan', { fixture: 'otp/loanApplicationPage-Submitted.json' })
//         cy.intercept('**/me?source=session', { fixture: 'otp/loanApplicationPage-InsSubmit.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.clickBlock2Btn()
//         fplPage.clickFPL4KGetNowBtn()
//         fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
//         fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
//         repaymentSchedulePage.clickContinueBtn()
//         loanPurposePage.selectLoanPurpose('Medical expenses')
//         loanPurposePage.clickContinueBtn()
//         selectBankAccountPage.clickContinueBtn()
//         signLoanDocumentPage.clickDigitalSignButton()
//         signLoanDocumentPage.clickContinueBtn()
//         //kfs sanction letter - validation
//         kfsSanctionLetterPage.verifyPageTitle('Sanction letter')
//         kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
//         kfsSanctionLetterPage.verifyLenderNameText('Visu Leasing and Finance Private Limited.')
//         kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
//         kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
//         //sanction letter -validation
//         signDocumentPage.verifyPageTitle('Sign Document')
//         signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
//         signDocumentPage.verifyContinueText('Continue')
//         signDocumentPage.clickContinueButton()
//         //signServicePage - validation
//         signServicePage.verifyPageTitle('Sign Service')
//         signServicePage.verifyTransactionIDLabel('Transaction ID:')
//         signServicePage.verifyTransactionIDValue('KBDID202203161WMdPiEj8o811837')
//         signServicePage.verifyDateAndTimeLabel('Date & Time:')
//         signServicePage.verifyDeviceIDLabel('Device ID:')
//         signServicePage.verifyDeviceIDValue('')
//         signServicePage.verifyIPAddressLabel('IP Address:')
//         signServicePage.verifyIPAddressValue('122.185.107.110')
//         signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
//         signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
//         signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
//         signServicePage.selectConsent()
//         signServicePage.verifyContinueButtonText('Continue ')
//         signServicePage.clickContinueButton()
//         // //OTP service validation
//         signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx') //number changes w.r.t user logged in
//         signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
//         signServiceOTPInputPage.enterOTP('123456')
//         loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
//     })

//     it('KB-T45618 (1.0) [Login] Check by default "No; i dont have referral code" option is highlighted in referral code', function () {
//         cy.intercept('**/referralCode', { fixture: 'referalcodePopUp/referalcodePopUp-skipped.json' }).as('referralPopupSkipped')
//         cy.intercept('**/eligible', { fixture: 'home/homePage-eligibleVerification.json' }).as('homeEligibleVerification')
//         cy.intercept('**/me/pan', { fixture: 'pan/panInpPage-processingStatePending.json' }).as('panProcessingStatePending')

//         cy.visitURL('/home/referral')

//         referalPopupPage.verifyPageTitle('Do you have a Referral Code ?')
//         referalPopupPage.verifyNoIDontHaveReferalCodeText("No; I don't have a referral code")
//         referalPopupPage.verifySubmitTextGreyedOut()
//     })

//     it('KB-T45409 (1.0) [Login] Check "Referral code" is optional/skippable and is navigate to PAN page', function () {
//         cy.intercept('**/referralCode', { fixture: 'referalcodePopUp/referalcodePopUp-skipped.json' }).as('referralPopupSkipped')
//         cy.intercept('**/eligible', { fixture: 'home/homePage-eligibleVerification.json' }).as('homeEligibleVerification')
//         cy.intercept('**/me/pan', { fixture: 'pan/panInpPage-processingStatePending.json' }).as('panProcessingStatePending')

//         cy.visitURL('/home/referral')

//         referalPopupPage.verifyPageTitle('Do you have a Referral Code ?')
//         referalPopupPage.verifyNoIDontHaveReferalCodeText("No; I don't have a referral code")
//         referalPopupPage.verifySubmitTextGreyedOut()
//         referalPopupPage.verifyCloseIcon()
//         referalPopupPage.clickCloseIconBtn()
//         panInputPage.verifyPageTitle('PAN')
//     })

//     it('KB-T45411 (1.0) [Login] Verify after submitting the referral code is navigating to PAN page', function () {
//         cy.intercept('**/referralCode', { fixture: 'referalcodePopUp/referalcodePopUp-skipped.json' }).as('referralPopupSkipped')
//         cy.intercept('**/eligible', { fixture: 'home/homePage-eligibleVerification.json' }).as('homeEligibleVerification')
//         cy.intercept('**/me/pan', { fixture: 'pan/panInpPage-processingStatePending.json' }).as('panProcessingStatePending')

//         cy.visitURL('/home/referral')

//         referalPopupPage.verifyPageTitle('Do you have a Referral Code ?')
//         referalPopupPage.verifyNoIDontHaveReferalCodeText("No; I don't have a referral code")
//         referalPopupPage.verifySubmitTextGreyedOut()
//         referalPopupPage.enterReferalCode('rgsid123')
//         referalPopupPage.verifySubmitText('Submit')
//         referalPopupPage.clickSubmitBtn()
//         panInputPage.verifyPageTitle('PAN')
//     })

//     it('KB-T45249 [PAN] Check "Please Wait" Loading screen is displayed after submitting the PAN number', () => {

//         cy.intercept('**/me/pan', { fixture: 'onBoarding/eligibility/eligibility-PANInput.json' })
//         cy.intercept('**/me/pan/status', { fixture: 'onBoarding/eligibility/incomeDetailsPage-status.json' })

//         cy.visit('/eligibility/pan', { failOnStatusCode: false });     
//         panInputPage.verifyPageTitle('PAN')
//         panInputPage.verifyEnterYourPANLabel('Enter your PAN')
//         panInputPage.enterPan('DCFPM0646N')
//         panInputPage.clickSubmitBtn()
//         loaderScreenPage.verifyPleaseWaitLabel('Please wait')
//         loaderScreenPage.verifyPleaseWaitSubtext('This may take up to a minute')
//     })

//     it('KB-T45243 [PAN] Check for Duplicate PAN screen', () => {

//         cy.intercept('**/me/eligible', { fixture: 'onBoarding/eligibility/PANPage-EligiblityPan.json' })
//         cy.intercept('**/me/pan', { fixture: 'onBoarding/eligibility/PANPage-DuplicatePan.json' })

//         cy.visit('/eligibility/pan', { failOnStatusCode: false });
//         panInputPage.verifyPageTitle('PAN')
//         panInputPage.verifyEnterYourPANLabel('Enter your PAN')
//         panInputPage.enterPan('DCFPM0646N')
//         panInputPage.clickSubmitBtn()
//         panInputPage.verifyLogoutButton()
//         cy.contains('span','This PAN exists with a different profile having mobile number XXXXXX6336. Please login using the correct mobile number').should('be.extensible')
//     })

//     it('KB-T41412 (1.0) Verify SA Product loan creation with coupon code', () => {
//         cy.intercept('**/home', { fixture: 'home/homePage-MLASILVER.json' })
//         cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-5k.json' })
//         cy.intercept('**/preloanre?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
//         cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/viewSummayAndChargesPage.json' })
//         cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
//         cy.intercept('**/products/verifycoupon?productid=**', { fixture: 'loan/repaymentSchedulePage/verifyCouponcode.json' })
//         cy.intercept('**/me/bank?couponCode=**', { fixture: 'bank/bankAccountVerificationPage-CouponCode.json' })
//         cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
//         cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-KreditBeePVTLTD.json' })
//         cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/loanSanctionLetterPage.json' })
//         cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.clickBlock2Btn()
//         fplPage.clickFPL4KGetNowBtn()
//         fplLoanAmountTenurePage.scrollSliderselectLoanAmount()
//         fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
//         fplLoanAmountDetailsPage.clickApplyCouponCodeLabel()
//         applyCouponCodeOrPointsPage.enterCouponCodeInput('TEST11')
//         applyCouponCodeOrPointsPage.clickApplyBtn()
//         fplLoanAmountDetailsPage.verifyCouponAppliedLabel('applied successfully !')
//         fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
//         repaymentSchedulePage.clickContinueBtn()
//         loanPurposePage.selectLoanPurpose('Medical expenses')
//         loanPurposePage.clickContinueBtn()
//         selectBankAccountPage.clickContinueBtn()
//         signLoanDocumentPage.clickDigitalSignButton()
//         signLoanDocumentPage.clickContinueBtn()
//         kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
//         signDocumentPage.verifyContinueText('Continue')
//         signDocumentPage.clickContinueButton()
//         signServicePage.verifyIPAddressValue('122.185.107.110')
//         signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
//         signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
//         signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
//         signServicePage.selectConsent()
//         signServicePage.verifyContinueButtonText('Continue ')
//         signServicePage.clickContinueButton()
//         cy.clock()
//         signServiceOTPInputPage.enterOTP('123456')
//         cy.tick(4000)
//         signServiceOTPInputPage.verifyTimerValue('(00:26)')
//     })

//     it('KB-T46196 (1.0)Verify Call now option displaying only for SA loan product application', function() {
//         cy.intercept('**/home', { fixture: 'home/homePage-SA-ApplyNow.json' })
//         cy.intercept('**/products?productId=*', { fixture: 'loan/sa/SA-ProductDetailsPage-applynow.json' })
//         cy.intercept('**/me?type=employment&productid=**', { fixture: 'loan/sa/SA-EmpDetailsPage-callnowbtn.json' })

//         cy.visit('/newhome', { failOnStatusCode: false })
//         homePage.verifyPersonalLoanSalariedLabel('PERSONAL LOAN - SALARIED')
//         homePage.clickApplyNowBtn()
//         saProductDetailsPage.verifyLoanAmountUptoLabel('Loan amount up to')
//         saProductDetailsPage.clickApplyNowBtn()
//         saEmpDetailsPage.verifyPageTitle('Employment details')
//         saEmpDetailsPage.verifyCallNowButtonBtn()
//     })

//     it('1.KB-T21629 Test case to Verify the Loan disbursal and repayment for SA product', () => {
//         cy.intercept('**/home', { fixture: 'home/homePage-SA-NoProccessingFee.json' })
//         cy.intercept('**/preloanre?productId=**', { fixture: 'loan/sa/SA-Amount30k-TenurePage.json' })
//         cy.intercept('**/ecom/offers?type=preloanBanner', { fixture: '/loan/sa/SA-PreloanBaner-Offers.json' })
//         cy.intercept('**/products?productId=**', { fixture: 'loan/sa/viewRepaymentSchedulePage-SA30k.json' })
//         cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/sa/SA-LoanAmountTenurePage-feescalculationsProcessingFeesZero.json' })
//         cy.intercept('**/products/verifycoupon?productid=**', { fixture: '/loan/repaymentSchedulePage/RepaymentSchedule30k-Couponcode.json' })
//         cy.intercept('**/me/bank?couponCode=**', { fixture: 'bank/bankAccountVerificationPageProcessingFeesZero-CouponCode.json' })
//         cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
//         cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-KreditBeePVTLTD.json' })
//         cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/loanSanctionLetterPage.json' })
//         cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.clickBlock1Btn()
//         saLoanAmountTenurePage.verifySelectLoanAmountLabel()
//         saLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
//         // fplLoanAmountDetailsPage.verifyProcessingFee()
//         fplLoanAmountDetailsPage.verifyProcessingFeeText('₹ 1,315')
//         fplLoanAmountDetailsPage.verifyApplyCouponCodeLabel()
//         saLoanAmountDetailsPage.clickGetMyCSRCheckBox()
//         saLoanAmountDetailsPage.verifyApplyCouponCodeLabel()
//         applyCouponCodeOrPointsPage.enterCouponCodeInput('TEST11')
//         applyCouponCodeOrPointsPage.clickApplyBtn()
//         fplLoanAmountDetailsPage.verifyProcessingFee()
//         fplLoanAmountDetailsPage.verifyProcessingFeeText('₹ 0')
//         saLoanAmountDetailsPage.clickGetMyCSRCheckBox()
//         fplLoanAmountDetailsPage.verifyBuyEMIcheckBox()
//         fplLoanAmountDetailsPage.verifyGSTlbl('GST @ 18%')
//         fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
//         repaymentSchedulePage.clickContinueBtn()
//         loanPurposePage.selectLoanPurpose('Medical expenses')
//         loanPurposePage.clickContinueBtn()
//         selectBankAccountPage.clickContinueBtn()
//         signLoanDocumentPage.clickDigitalSignButton('Digital sign with Face ID')
//         signLoanDocumentPage.clickContinueBtn()
//         kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
//         signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
//         signDocumentPage.clickContinueButton()
//         signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
//         signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
//         signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
//         signServicePage.selectConsent()
//         signServicePage.clickContinueButton()
//         cy.clock()
//         signServiceOTPInputPage.enterOTP('123456')
//       })

//       it('2.KB-T21629 Test case to Verify the Loan disbursal and repayment for SA product', () => {

//         cy.intercept('**/home', { fixture: 'home/repaymentPage-wallets-HomePage.json' })
//         cy.intercept('**/me/loans', { fixture: 'loan/repayment/repaymentPage-wallets-Loans.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: 'loan/repayment/repaymentPage-wallets-Loanid.json' })
//         cy.intercept('**/me/payment?v=sp3&reqId=**', { fixture: 'loan/repayment/repaymentPage-paymentPage.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.clickPayNowButton()
//         repaymentPage.verifyLoanIcon()
//         repaymentPage.verifyPaymentHistoryLabel('Payment history')
//         repaymentPage.verifyHowToRepayLabel('How to Repay?')
//         repaymentPage.clickPayNowBtn()
//         paymentOptionPage.verifyDebitCardText('Debit Card')
//         paymentOptionPage.clickDebitCardBlock()
//     })

//     it('KB-T2885 (1.0) Check whether Bank Account field is displayed at top in My Accounts page', () => {
//         cy.intercept('**/home', { fixture: 'home/homepage-Notransaction.json' })
//         cy.intercept('**/myaccount', { fixture: 'accounts/accountPage-PDDisabled.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         footerPage.clickAccountIcon()
//         accountsPage.verifyBankAccountsLink('https://ik.imagekit.io/kreditbee/app-static/icons/C/ic-chevron-right.svg')
//         accountsPage.verifyBankAccountsIcon('https://ik.imagekit.io/kreditbee/app-static/icons/B/ic-bank1.svg')
//         accountsPage.verifyBankAccountsText('Bank Accounts')
//     })

//     it('KB-T52707 (1.0)Ensure SA Loan Creation is success when both PD Points and Coupon is applied and CSR is opted', () => {
//         cy.intercept('**/home', { fixture: 'home/homePage-SA.json' })
//         cy.intercept('**/preloanre?productId=**', { fixture: 'loan/sa/SA-Amount15k-Tenure6.json' })
//         cy.intercept('**/products?productId=**', { fixture: 'loan/sa/viewRepaymentSchedulePage-SA.json' })
//         cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/sa/SA-LoanAmountTenurePage-feescalculations.json' })
//         cy.intercept('**/products/verifycoupon?productid=**', { fixture: 'loan/repaymentSchedulePage/verifyCouponcode-Documentfees-0.json' })
//         cy.intercept('**/me/bank?couponCode=**', { fixture: 'bank/bankAccountVerificationPage-CouponCode.json' })
//         cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
//         cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-KreditBeePVTLTD.json' })
//         cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/loanSanctionLetterPage.json' })
//         cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.clickBlock1Btn()
//         saLoanAmountTenurePage.verifySelectLoanAmountLabel()
//         saLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
//         saLoanAmountDetailsPage.verifyAnnualPercentageRateLabel('Annual Percentage Rate')
//         saLoanAmountDetailsPage.verifyTotalIntrestLabel('Total Interest')
//         saLoanAmountDetailsPage.verifyFeeAndchargesLabel('Fees & Charges')
//         saLoanAmountDetailsPage.clickGetMyCSRCheckBox()
//         saLoanAmountDetailsPage.verifyApplyCouponCodeLabel()
//         applyCouponCodeOrPointsPage.enterCouponCodeInput('TEST11')
//         applyCouponCodeOrPointsPage.clickApplyBtn()
//         saLoanAmountDetailsPage.verifyAnnualPercentageRateValue()
//         fplLoanAmountDetailsPage.verifyCouponAppliedLabel('applied successfully !')
//         saLoanAmountDetailsPage.clickGetMyCSRLabel()
//         saLoanAmountDetailsPage.verifyCSRFeeLabel('Credit Score Report Fee')
//         fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
//         repaymentSchedulePage.verifyPrincipalLabel('Principal')
//         repaymentSchedulePage.verifyInterestLabel('Interest')
//         repaymentSchedulePage.verifyDueDateLabel('Due Date')
//         repaymentSchedulePage.verifyRepayableAmountLabel('Repayable Amount')
//         repaymentSchedulePage.clickContinueBtn()
//         loanPurposePage.selectLoanPurpose('Medical expenses')
//         loanPurposePage.clickContinueBtn()
//         selectBankAccountPage.clickContinueBtn()
//         signLoanDocumentPage.verifyESignText('E-sign with Aadhaar')
//         signLoanDocumentPage.verifyDigitalSignInText('Digital sign with Face IDRequires OTP + Face verification')
//         signLoanDocumentPage.clickDigitalSignButton('Digital sign with Face ID')
//         signLoanDocumentPage.clickContinueBtn()
//         kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
//         signDocumentPage.verifyContinueText('Continue')
//         signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
//         signDocumentPage.clickContinueButton()
//         signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
//         signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
//         signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
//         signServicePage.selectConsent()
//         signServicePage.verifyContinueButtonText('Continue ')
//         signServicePage.clickContinueButton()
//         cy.clock()
//         signServiceOTPInputPage.enterOTP('123456')
//         cy.tick(4000)
//         signServiceOTPInputPage.verifyTimerValue('(00:26)')
//     })

//     it('KB-T21689 (1.0) check the refer and earn option present in my accounts page', () => {
//         cy.intercept('**/main/home', { fixture: 'home/homepage-Notransaction.json' })
//         cy.intercept('**/main/myaccount', { fixture: 'accounts/accountPage-Notransction.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         footerPage.clickAccountIcon()
//         accountsPage.verifyReferAndEarnLink('https://ik.imagekit.io/kreditbee/app-static/icons/C/ic-chevron-right.svg')
//         accountsPage.verifyReferAndEarnIcon('https://ik.imagekit.io/kreditbee/app-static/icons/R/ic-refer-new.svg')
//         accountsPage.verifyReferandEarnText('Refer & Earn')
//         accountsPage.clickReferAndEarnText()
//         referAndEarn.verifyPageTitle('Refer & Earn')
//         referAndEarn.verifyMyReferralsText('My Referrals')
//         referAndEarn.verifyHowToEarnText('How to Earn')
//         referAndEarn.verifyMyPointsHistoryText('My Points history')
//     })

//     it('KB-T21688 (1.0) check the VKYC option present in my accounts page', () => {
//         cy.intercept('**/main/home', { fixture: 'home/homepage-Notransaction.json' })
//         cy.intercept('**/main/myaccount', { fixture: 'accounts/accountPage-PDDisabled.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         footerPage.clickAccountIcon()
//         accountsPage.verifyVideoVerificationText('Video Verification')
//     })

//     it('KB-T37228 Check if PD option is shown in homepage and MyAccounts page when pd is enabled', () => {
//         cy.intercept('**/home', { fixture: 'home/homePage-VKYC.json' })
//         cy.intercept('**/me/pd?type=list', { fixture: 'pd/pdVKYCPage.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.clickCreditLimitAndDiscountText()
//         pdPage.verifyAssestvalidationLabel('Asset Validation')
//         pdPage.verifyBasicDetailsLabel('Basic Details')
//         cy.go(-1)
//         footerPage.clickAccountIcon()
//         accountsPage.clickDiscountAndCreditText()
//         pdPage.verifyAutoDebitSetupLabel('Auto Debit Setup')
//         pdPage.verifyKYCLabel('KYC')
//     })

//     it('KB-T38066 (1.0) To Verify change language option for english language', () => {
//         cy.intercept('**/home', { fixture: 'home/homePage-continueApplication.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.verifyContinueApplicationText('Continue Application')
//         headerPage.clickSettingBtn()
//         settingsPage.verifyChangeLanguageText('Change Language / भाषा बदलें')
//         settingsPage.clickChangeLanguageBtn()
//         changeLanguage.verifyPageTitle('Change Language / भाषा बदलें')
//         //English
//         changeLanguage.verifyEnglishLabel('English')
//         changeLanguage.clickEnglishChkBox()

//     })

//     it('KB-T32666 (1.0) Check the Homepage block display order is correct when Profile is Rejected', () => {
//         cy.intercept('**/home', { fixture: 'home/homePage-Rejected.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.verifyWarningLabel('We are unable to process your loan at this time either due to certain anomalies in your profile or due to bad repayment behaviour. We suggest you improve your credit profile and retry with us after 6 months')
//         homePage.verifyQueriesText('For any queries, reach out to us on')
//         homePage.verifyKnowmoreFPL('KNOW MORE')
//         homePage.verifyKnowmoreSA('KNOW MORE')
//         homePage.verifyKnowmorePL('KNOW MORE')
//     })
//     it('KB-T180 Check for About Us page in Settings', () => {
//         cy.intercept('**/home', { fixture: 'home/homePage-continueApplication.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.verifyContinueApplicationText('Continue Application')
//         headerPage.clickSettingBtn()
//         settingsPage.verifyAboutUsText('About Us')
//         settingsPage.clickAboutUsBtn()
//     })
//     it('KB-T21751 (1.0) Check on clicking Login and Logout', () => {
//         cy.intercept('**/home', { fixture: 'home/homePage-MLASILVER.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//         headerPage.clickSettingBtn()
//         settingsPage.verifyLogoutText('Logout')
//         settingsPage.clickLogoutBtn()
//     })
// })