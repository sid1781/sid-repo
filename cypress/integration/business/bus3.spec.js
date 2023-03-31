// //loan flow
// import { homePage } from "../../pages/home/HomePage"
// import { fplPage } from "../../pages/loan/fpl/FPLPage"
// import { fplLoanAmountDetailsPage } from "../../pages/loan/fpl/FPLLoanAmountDetailsPage"
// import { fplLoanAmountTenurePage } from "../../pages/loan/fpl/FPLLoanAmountTenurePage"
// import { repaymentSchedulePage } from "../../pages/loan/RepaymentSchedulePage"
// import { loanPurposePage } from "../../pages/loan/LoanPurposePage"
// import { selectBankAccountPage } from "../../pages/bank/SelectBankAccountPage"
// import { signLoanDocumentPage } from "../../pages/loan/SignLoanDocumentPage"
// import { kfsSanctionLetterPage } from "../../pages/loan/KFSSanctionLetterPage"
// import { signDocumentPage } from "../../pages/loan/SignDocumentPage"
// import { signServicePage } from "../../pages/loan/SignServicePage"
// import { signServiceOTPInputPage } from "../../pages/loan/SignServiceOTPInputPage"
// import { loanApplicationSubmittedPage } from "../../pages/loan/sa/LoanApplicationSubmittedPage"


// import { footerPage } from "../../pages/generic/FooterPage"
// import { accountsPage } from "../../pages/accounts/AccountsPage"

// //account
// import { settingsPage } from "../../pages/generic/SettingsPage"
// import { headerPage } from "../../pages/generic/HeaderPage"
// import { referAndEarn } from "../../pages/accounts/referAndEarn"
// import { kbPointsPage } from "../../pages/accounts/KBPointsPage"
// import { repaymentPage } from "../../pages/repayments/RepaymentPage"


// import { forecloseLoanPage } from "../../pages/repayments/ForecloseLoanPage";
// import { offersHomePage } from "../../pages/offers/OffersHomePage"
// import { goldHomePage } from "../../pages/gold/GoldHomePage"
// import { help } from "../../pages/help/helpPage"
// import { paymentOptionPage } from "../../pages/payments/PaymentOptionPage"

// describe('RepaymentPage , My AccountPage , OffersPage ,SignServiceOTPPage', () => {
//     it('Login With Mobile Number', () => {

//         const DBurl = "https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";
//         const mobilenum = "9611290254"
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

//         //SELECT otp from yp_user_otp  WHERE sentTo =9611290254  order by id desc limit 10
//         var payload = { "query": "SELECT otp from `yp_user_otp` WHERE `sentTo` ='9611290254' order by id desc limit 1", "db_ip": "10.105.60.156" };
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
//     it('1.KB-T21697 Verify Repayment through through billdesk Net Banking in app', () => {

//         cy.intercept('**/home', { fixture: 'home/repaymentPage-wallets-HomePage.json' })
//         cy.intercept('**/me/loans', { fixture: 'loan/repayment/repaymentPage-wallets-Loans.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: 'loan/repayment/repaymentPage-wallets-Loanid.json' })
//         cy.intercept('**/me/payment?v=sp3&reqId=**', { fixture: 'loan/repayment/repaymentPage-paymentPage.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.verifyPayNowText('PAY NOW')
//         footerPage.clickRepaymentIcon()
//         repaymentPage.clickPayNowBtn()
//         paymentOptionPage.clickNetBankingBlock()
//         paymentOptionPage.clickSBIBankText()
//     })

//     it('2.KB-T21697 Verify Repayment through through billdesk Net Banking in app', () => {

//         cy.intercept('**/home', { fixture: 'home/repaymentPage-InstallmentClosed-HomePage.json' })
//         cy.intercept('**/me/loans', { fixture: 'loan/repayment/repaymentPage-InstallmentClosed-Loan.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: 'loan/repayment/repaymentPage-InstallmentClosed-LoanID.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.verifyPayNowText('PAY NOW')
//         footerPage.clickRepaymentIcon()
//         repaymentPage.verifyPaidInstallmentText('Paid')
//     })

//     it('KB-T61281 (1.0)Check coolOff Fee Refund and Fee applicable calculation when user tried to do CoolOff on Disbursal Date', () => {
//         cy.intercept('**/home', { fixture: '/loan/repayment/homepage-RepaymentPage3CoolOff.json' })
//         cy.intercept('**/me/loans', { fixture: '/loan/repayment/repaymentsLoans.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: '/loan/repayment/RepaymentsId3CoolOff.json' })
//         cy.intercept('**/loan/foreclosure/event', { fixture: '/loan/repayment/repayments-PaymentOptionPage.json' })

//         cy.visitURL('/newhome')
//         homePage.verifyPayNowText('PAY NOW')
//         footerPage.clickRepaymentIcon()
//         repaymentPage.clickPayNowForClouserButton()
//         forecloseLoanPage.verifyPageTitle('Foreclose Loan')
//     })
////////////need to be comme
    // it('KB-T45327 (1.0)[Refer & Earn] Verify the redirection when the existing user is clicked on 24K Gold Investment tab in Kreditbee Points page', function () {
    //     cy.intercept('**/home', { fixture: 'home/homePage-referAndEarn.json' })
    //     cy.intercept('**/myaccount', { fixture: 'accounts/accountPage-ReferAndEarn.json' })
    //     cy.intercept('**/me/offers', { fixture: 'accounts/Refer-Earn-24kgoldInvestment.json' })
    //     cy.intercept('**/ecom/offers?type=goldHomeBanner', { fixture: 'gold/goldHomePage-banners.json' })
    //     cy.intercept('**/vasgold/digitalgold/home', { fixture: 'gold/goldHomePage-NoNugde.json' })
    //     cy.intercept('**/vasgold/digitalgold/investment/details', { fixture: 'gold/goldHomePage-Delivery.json' })
    //     cy.intercept('**/vasgold/digitalgold/transaction/eligibility', { fixture: 'gold/goldHomePage-eligibility.json' })

    //     cy.visitURL('/newhome')

    //     homePage.clickMyAccountIcon()
    //     accountsPage.verifyReferandEarnText('Refer & Earn')
    //     accountsPage.clickReferAndEarnText()
    //     referAndEarn.clickRedeemPointsLabel()
    //     kbPointsPage.click24KGoldInvestmentLabel()
    //     kbPointsPage.clickContinueBtn()
    //     goldHomePage.verifyPageTitle('24K Gold')

    // })

//     it('KB-T21673 (1.0) Verify the offers added from admin panel and are refelcted in the app', () => {

//         cy.intercept('**/home', { fixture: 'home/homepage-SAEnabled-NoActiveLoan' })
//         cy.intercept('**/membership/city?user_id=**', { fixture: 'offers/offers-membership.json' })
//         cy.intercept('**/membership/coupon/available?role=ROLE_USER&user_id=**', { fixture: 'offers/offers-membership-availableCoupon.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//         footerPage.clickOffersLabel()
//         offersHomePage.verifyOffersLabel('Offers')
//         offersHomePage.verifyElectronicsRadioButton()
//         offersHomePage.clickElectronicsRadioButton()
//         offersHomePage.verifyFoodAndBeveragesRadioButton()
//         offersHomePage.clickFoodAndBeveragesRadioButton()
//         offersHomePage.verifyHealthCareRadioButton()
//         offersHomePage.clickHealthCareRadioButton()
//         offersHomePage.verifyTravelRadioButton()
//         offersHomePage.clickTravelRadioButton()
//         offersHomePage.verifyOthersRadioButton()
//     })


//     it('1.KB-T21703 Verify the Repayments through Billdesk wallet', () => {

//         cy.intercept('**/home', { fixture: 'home/repaymentPage-wallets-HomePage.json' })
//         cy.intercept('**/me/loans', { fixture: 'loan/repayment/repaymentPage-wallets-Loans.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: 'loan/repayment/repaymentPage-wallets-Loanid.json' })
//         cy.intercept('**/me/payment?v=sp3&reqId=**', { fixture: 'loan/repayment/repaymentPage-paymentPage.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.verifyPayNowText('PAY NOW')
//         footerPage.clickRepaymentIcon()
//         repaymentPage.clickPayNowBtn()
//         paymentOptionPage.clickBlockWalletsBlock()
//         paymentOptionPage.clickPayTMText()
//     })

//     it('2.KB-T21703 Verify the Repayments through Billdesk wallet', () => {

//         cy.intercept('**/home', { fixture: 'home/repaymentPage-InstallmentClosed-HomePage.json' })
//         cy.intercept('**/me/loans', { fixture: 'loan/repayment/repaymentPage-InstallmentClosed-Loan.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: 'loan/repayment/repaymentPage-InstallmentClosed-LoanID.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.verifyPayNowText('PAY NOW')
//         footerPage.clickRepaymentIcon()
//         repaymentPage.verifyPaidInstallmentText('Paid')
//     })

//     it('1.KB-T38588 Verify Repayment through Debit Card via Payu Payment Gateway', () => {

//         cy.intercept('**/home', { fixture: 'home/repaymentPage-wallets-HomePage.json' })
//         cy.intercept('**/me/loans', { fixture: 'loan/repayment/repaymentPage-wallets-Loans.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: 'loan/repayment/repaymentPage-wallets-Loanid.json' })
//         cy.intercept('**/me/payment?v=sp3&reqId=**', { fixture: 'loan/repayment/repaymentPage-paymentPage.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.verifyPayNowText('PAY NOW')
//         footerPage.clickRepaymentIcon()
//         repaymentPage.clickPayNowBtn()
//         paymentOptionPage.clickDebitCardBlock()
//     })


//     it('2.KB-T38588 Verify Repayment through Debit Card via Payu Payment Gateway', () => {

//         cy.intercept('**/home', { fixture: 'home/repaymentPage-InstallmentClosed-HomePage.json' })
//         cy.intercept('**/me/loans', { fixture: 'loan/repayment/repaymentPage-InstallmentClosed-Loan.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: 'loan/repayment/repaymentPage-InstallmentClosed-LoanID.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.verifyPayNowText('PAY NOW')
//         footerPage.clickRepaymentIcon()
//         repaymentPage.verifyPaidInstallmentText('Paid')
//     })

//     it('KB-T2933 Check whether Help field is displayed at 11th position in My accounts page', () => {
//         cy.intercept('**/home', { fixture: 'home/homePage-gold.json' })
//         cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.clickMyAccountIcon()
//         accountsPage.verifyHelpText('Help')
//     })

//     it('KB-T21690 (1.0) check the csr option present in my accounts page', () => {
//         cy.intercept('**/main/home', { fixture: 'home/homepage-Notransaction.json' })
//         cy.intercept('**/main/myaccount', { fixture: 'accounts/accountPage-Notransction.json' })

//        cy.visit('/newhome', { failOnStatusCode: false });
//         footerPage.clickAccountIcon()
//         accountsPage.verifyCreditScoreLink('https://ik.imagekit.io/kreditbee/app-static/icons/C/ic-chevron-right.svg')
//         cy.wait(500)
//         accountsPage.verifyCreditScoreIcon('https://ik.imagekit.io/kreditbee/app-static/icons/C/ic-credit-meter.svg')
//         accountsPage.verifyCreditScoreText('Credit Score')
//     })

//     it('KB-T21694 (1.0) check help icon in homepage and settings option present in my accounts page', () => {
//         cy.intercept('**/main/home', { fixture: 'home/homepage-Notransaction.json' })
//         cy.intercept('**/main/myaccount', { fixture: 'accounts/accountPage-Notransction.json' })
//         cy.intercept('**/contactus/rule?categoryId=r_faq', { fixture: 'help/helpPage.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//         headerPage.clickHelpBtn()
//         help.verifyPageTitle('Help')
//         help.verifyCreditLimitEnhancementLabel()
//         help.verifyProfileVerificationLabel('Profile Verification')
//         cy.go('back')
//         footerPage.clickAccountIcon()
//         accountsPage.verifySettingsText('Settings')
//         headerPage.clickSettingBtn()
//         settingsPage.verifyDeleteAccountText('Delete Account')
//         settingsPage.verifyChangeEmailText('Change email')
//     })

//     it('KB-T46294 Ensure Delete Button is displaying for the confirmed users', () => {
//         cy.intercept('**/main/home', { fixture: 'home/homepage-Notransaction.json' })
//         cy.intercept('**/main/myaccount', { fixture: 'accounts/accountPage-Notransction.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//         footerPage.clickAccountIcon()
//         accountsPage.verifySettingsText('Settings')
//         accountsPage.clickSettingsBtn()
//         settingsPage.verifyDeleteAccountText('Delete Account')
//     })

//     it('KB-T37708 To Verify offers', () => {
//         cy.intercept('**/home', { fixture: 'home/homepage-SAEnabled-NoActiveLoan' })
//         cy.intercept('**/membership/city?user_id=**', { fixture: 'offers/offers-membership.json' })
//         cy.intercept('**/membership/coupon/available?role=ROLE_USER&user_id=**', { fixture: 'offers/offers-membership-availableCoupon.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//        footerPage.clickOffersLabel()
//         offersHomePage.verifyOffersLabel('Offers')
//         offersHomePage.verifyElectronicsRadioButton()
//         offersHomePage.clickElectronicsRadioButton()
//         offersHomePage.verifyFoodAndBeveragesRadioButton()
//         offersHomePage.clickFoodAndBeveragesRadioButton()
//         offersHomePage.verifyHealthCareRadioButton()
//         offersHomePage.clickHealthCareRadioButton()
//         offersHomePage.verifyTravelRadioButton()
//         offersHomePage.clickTravelRadioButton()
//         offersHomePage.verifyOthersRadioButton()
//     })

//     it('1-KB-T8264 Verify the repayment config 5 for 3 tenure products',()=>{
//         cy.intercept('**/home', { fixture: 'home/homePage-MLA20-subBandGood.json' })
//         cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-15k.json' })
//         cy.intercept('**/preloanre?productId=14&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash', { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
//         cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-productID14.json' })
//         cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
//         cy.intercept('**/me/bank?productid=**', { fixture: 'bank/bankAccountVerifiedPage.json' })
//         cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
//         cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-WC.json' })
//         cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
//         cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'otp/otpSignServicePage.json' })
//         cy.intercept('**/me/loan', { fixture: 'otp/loanApplicationPage-Submitted.json' })
//         cy.intercept('**/me?source=session', { fixture: 'otp/loanApplicationPage-InsSubmit.json' })
//         cy.visitURL('/newhome')
//         homePage.clickBlock2Btn()
//         fplPage.clickFPL4KGetNowBtn()
//         fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
//         fplLoanAmountDetailsPage.verifyTotalIntrestLabel('Total Interest')
//         fplLoanAmountDetailsPage.verifyFeeAndchargesLabel('Fees & Charges')
//         fplLoanAmountDetailsPage.verifyGSTlbl('GST @ 18%')
//         fplLoanAmountDetailsPage.verifyRepaymentShedulePageButton()
//         fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
//         repaymentSchedulePage.verifyPrincipalLabel('Principal')
//         repaymentSchedulePage.clickContinueBtn()
//         loanPurposePage.selectLoanPurpose('Medical expenses')
//         loanPurposePage.clickContinueBtn()
//         selectBankAccountPage.clickContinueBtn()
//         signLoanDocumentPage.clickDigitalSignButton()
//         signLoanDocumentPage.clickContinueBtn()
//         kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
//         signDocumentPage.clickContinueButton()
//         //signServicePage - validation
//         signServicePage.verifyPageTitle('Sign Service')
//         signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
//         signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
//         signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
//         signServicePage.selectConsent()
//         signServicePage.verifyContinueButtonText('Continue ')
//         signServicePage.clickContinueButton()
//         //OTP service validation
//         cy.clock()
//         signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx896') //number changes w.r.t user logged in
//         signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
//         signServiceOTPInputPage.enterOTP('123456')
//         cy.tick(4000)
//         loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
//     })

//     it('2-KB-T8264 Verify the repayment config 5 for 3 tenure products', () => {
//         cy.intercept('**/home', { fixture: 'home/repaymentPage-HomePage.json' })
//         cy.intercept('**/me/loans', { fixture: 'repayments/repaymentPage-loan.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: 'repayments/repaymentPage-loanID-cash.json' })
//         cy.visitURL('/newhome')
//         homePage.verifyNextDueDateText('Pay now to avoid impact on Cibil score')
//         footerPage.clickRepaymentIcon()
//         repaymentPage.verifyLoanDueDateValue('01 Jan 2023')
//     })

//     it('1-KB-T8282 Verify the interest calculation for monthly product when interest calculation type is 3(more than 3 months SA product)',()=>{
//         cy.intercept('**/home', { fixture: 'home/homePage-MLA20-subBandGood.json' })
//         cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-15k.json' })
//         cy.intercept('**/preloanre?productId=14&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash', { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
//         cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-productID14.json' })
//         cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
//         cy.intercept('**/me/bank?productid=**', { fixture: 'bank/bankAccountVerifiedPage.json' })
//         cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
//         cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-WC.json' })
//         cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
//         cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'otp/otpSignServicePage.json' })
//         cy.intercept('**/me/loan', { fixture: 'otp/loanApplicationPage-Submitted.json' })
//         cy.intercept('**/me?source=session', { fixture: 'otp/loanApplicationPage-InsSubmit.json' })
//         cy.visitURL('/newhome')
//         homePage.clickBlock2Btn()
//         fplPage.clickFPL4KGetNowBtn()
//         fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
//         fplLoanAmountDetailsPage.verifyTotalIntrestLabel('Total Interest')
//         fplLoanAmountDetailsPage.verifyFeeAndchargesLabel('Fees & Charges')
//         fplLoanAmountDetailsPage.verifyGSTlbl('GST @ 18%')
//         fplLoanAmountDetailsPage.verifyRepaymentShedulePageButton()
//         fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
//         repaymentSchedulePage.verifyPrincipalLabel('Principal')
//         repaymentSchedulePage.clickContinueBtn()
//         loanPurposePage.selectLoanPurpose('Medical expenses')
//         loanPurposePage.clickContinueBtn()
//         selectBankAccountPage.clickContinueBtn()
//         signLoanDocumentPage.clickDigitalSignButton()
//         signLoanDocumentPage.clickContinueBtn()
//         kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
//         signDocumentPage.clickContinueButton()
//         //signServicePage - validation
//         signServicePage.verifyPageTitle('Sign Service')
//         signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
//         signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
//         signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
//         signServicePage.selectConsent()
//         signServicePage.verifyContinueButtonText('Continue ')
//         signServicePage.clickContinueButton()
//         //OTP service validation
//         cy.clock()
//         signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx896') //number changes w.r.t user logged in
//         signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
//         signServiceOTPInputPage.enterOTP('123456')
//         cy.tick(4000)
//         loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
//     })

//     it('2-KB-T8282 Verify the interest calculation for monthly product when interest calculation type is 3(more than 3 months SA product)', () => {
//         cy.intercept('**/home', { fixture: 'home/repaymentPage-HomePage.json' })
//         cy.intercept('**/me/loans', { fixture: 'repayments/repaymentPage-loan.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: 'repayments/repaymentPage-loanID-cash.json' })
//         cy.visitURL('/newhome')
//         homePage.verifyNextDueDateText('Pay now to avoid impact on Cibil score')
//         footerPage.clickRepaymentIcon()
//         repaymentPage.verifyLoanDueDateValue('01 Jan 2023')
//     })

//     it('1-KB-T8284 Verify the interest calculation for monthly product when interest calculation type is 4 for 619 band and 8 subband',()=>{
//         cy.intercept('**/home', { fixture: 'home/homePage-MLA20-subBandGood.json' })
//         cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-15k.json' })
//         cy.intercept('**/preloanre?productId=14&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash', { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
//         cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-productID14.json' })
//         cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
//         cy.intercept('**/me/bank?productid=**', { fixture: 'bank/bankAccountVerifiedPage.json' })
//         cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
//         cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-WC.json' })
//         cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
//         cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'otp/otpSignServicePage.json' })
//         cy.intercept('**/me/loan', { fixture: 'otp/loanApplicationPage-Submitted.json' })
//         cy.intercept('**/me?source=session', { fixture: 'otp/loanApplicationPage-InsSubmit.json' })
//         cy.visitURL('/newhome')
//         homePage.clickBlock2Btn()
//         fplPage.clickFPL4KGetNowBtn()
//         fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
//         fplLoanAmountDetailsPage.verifyTotalIntrestLabel('Total Interest')
//         fplLoanAmountDetailsPage.verifyFeeAndchargesLabel('Fees & Charges')
//         fplLoanAmountDetailsPage.verifyGSTlbl('GST @ 18%')
//         fplLoanAmountDetailsPage.verifyRepaymentShedulePageButton()
//         fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
//         repaymentSchedulePage.verifyPrincipalLabel('Principal')
//         repaymentSchedulePage.clickContinueBtn()
//         loanPurposePage.selectLoanPurpose('Medical expenses')
//         loanPurposePage.clickContinueBtn()
//         selectBankAccountPage.clickContinueBtn()
//         signLoanDocumentPage.clickDigitalSignButton()
//         signLoanDocumentPage.clickContinueBtn()
//         kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
//         signDocumentPage.clickContinueButton()
//         //signServicePage - validation
//         signServicePage.verifyPageTitle('Sign Service')
//         signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
//         signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
//         signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
//         signServicePage.selectConsent()
//         signServicePage.verifyContinueButtonText('Continue ')
//         signServicePage.clickContinueButton()
//         //OTP service validation
//         cy.clock()
//        // signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx896') //number changes w.r.t user logged in
//         signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
//         signServiceOTPInputPage.enterOTP('123456')
//         cy.tick(4000)
//         loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
//     })

//     it('2-KB-T8284 Verify the interest calculation for monthly product when interest calculation type is 4 for 619 band and 8 subband', () => {
//         cy.intercept('**/home', { fixture: 'home/repaymentPage-HomePage.json' })
//         cy.intercept('**/me/loans', { fixture: 'repayments/repaymentPage-loan.json' })
//         cy.intercept('**/me/loan?id=**', { fixture: 'repayments/repaymentPage-loanID-cash.json' })
//         cy.visitURL('/newhome')
//         homePage.verifyNextDueDateText('Pay now to avoid impact on Cibil score')
//         footerPage.clickRepaymentIcon()
//         repaymentPage.verifyLoanDueDateValue('01 Jan 2023')
//     })
// })
// describe('Get OTP Call', { retries: 1 }, () => {

//need to be commented
//     it('KB-T44908 (1.0)Ensure "Get OTP on call" option is displaying for "clickwrap" vendor during loan esign, when "GetOTPOnCall config"=1 and "Enable Call OTP on resend count"=1.Save 1.0 ', () => {
//         cy.intercept('**/main/home', { fixture: '/home/homePage-MLASILVER.json' })
//         cy.intercept('**/category?name=fplfalse', { fixture: '/loan/fpl/fplPage-5k.json' })
//         cy.intercept('**/main/preloanre?productId=14&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash', { fixture: '/loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
//         cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/viewSummayAndChargesPage.json' })
//         cy.intercept('**/products/calcfees?productid=14&loanamt=6200&tenure=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
//         cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
//         cy.intercept('**/loan/la?updateMFILimit=**&productid=**', { fixture: 'loan/sa/signLoanDocumentPage.json' })
//         cy.intercept('**/loan/la?type=kb&productid=**', { fixture: 'loan/sa/sanctionLetterPage.json' })
//         cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/sa/loanSanctionLetterPage.json' })
//         cy.intercept('**/me/tnc/loanSignService', { fixture: 'loan/sa/signServicePage.json' })
//         cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otpPage-SignService.json' })
//         // cy.intercept('**/me/otp?reason=**',{ fixture: 'onBoarding/general/OTPInputPage-getOncall.json' })
//        cy.visit('/newhome', { failOnStatusCode: false });
//         homePage.clickBlock2Btn()
//         fplPage.clickFPL4KGetNowBtn()
//         fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
//         fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
//         repaymentSchedulePage.clickContinueBtn()
//         // cy.clock();
//         loanPurposePage.selectLoanPurpose('Medical expenses')
//         loanPurposePage.clickContinueBtn()
//         selectBankAccountPage.clickContinueBtn()
//         signLoanDocumentPage.verifyPageTitle('Sign Loan Document')
//         signLoanDocumentPage.clickContinueBtn()
//         kfsSanctionLetterPage.verifypageTitle('KFS & Sanction letter')
//         kfsSanctionLetterPage.selectBoxSanctionLetter('Continue to Sign Loan Document')
//         kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
//         kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
//         signDocumentPage.verifyPageTitle('Sign Document')
//         signDocumentPage.verifyContinueText('Continue')
//         signDocumentPage.clickContinueButton()
//         signServicePage.clickConsentReadText()
//         signServicePage.clickConsentUnderstoodText()
//         signServicePage.clickConsentLegalAndBindingText()
//         signServicePage.clickContinueButton()
//         cy.clock()
//         signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
//         cy.tick(30000)
//         signServiceOTPInputPage.verifyResentText(' Resend ?')
//     })

//     it('KB-T44908 (1.0)Ensure "Get OTP on call" option is displaying for "clickwrap" vendor during loan esign, when "GetOTPOnCall config"=1 and "Enable Call OTP on resend count"=1.Save 1.0 ', () => {
//         cy.clock()
//         cy.intercept('**/me/otp?reason=**', { fixture: 'onBoarding/general/OTPInputPage-getOncall.json' })
//         signServiceOTPInputPage.clickResentText()
//         cy.tick(30000)
//         signServiceOTPInputPage.verifyGetOTPOnCallIcon()
//         signServiceOTPInputPage.verifyGetOTPOnCallText('Get OTP on call')
//     })
// })