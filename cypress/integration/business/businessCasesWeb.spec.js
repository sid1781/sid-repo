// import { activeLoanStatusPage } from "../../pages/accounts/activeLoanStatusPage"
// import { homePage } from "../../pages/home/HomePage"
// import { homePageIframe } from "../../pages-website/home/HomePageIframe"
// import { csrInfoPageWeb } from "../../pages/WebsitePages/creditScoreReport/CSRInfoPageWeb"
// import { csrOTPInputWebPage } from "../../pages/WebsitePages/creditScoreReport/CSROTPInputWebPage"
// import { csrPaymentOptionsWebPage } from "../../pages/WebsitePages/creditScoreReport/CSRPaymentOptionsWebPage"
// import { homePageWeb } from "../../pages/WebsitePages/HomePageWeb"
// import { paymentOptionWebPage } from "../../pages/WebsitePages/PaymentOptionWebPage"
// import { payViaUpiPage } from "../../pages/WebsitePages/PayViaUpiPage"
// import { insuranceBuyPolicyListPage } from "../../pages-website/insurance/InsuranceBuyPolicyListPage"
// import { insurancePolicyDetailsPage } from "../..//pages-website/insurance/InsurancePolicyDetailsPage"
// import { insuranceBuyPolicyPage } from "../../pages-website/insurance/insuranceBuyPolicyPage"
// import { insurancePolicyPaymentPage } from "../../pages-website/insurance/InsurancePolicyPaymentPage";
// // import { paymentOptionPage } from "../../pages-website/paymentOptionPage"
// import { paymentOptionPage } from "../../pages/payments/PaymentOptionPage"
// import { insuranceTermsAndConditionsPage } from "../../pages/insurance/InsuranceTermsAndConditionsPage"
// import { myPoliciesPage } from "../../pages/insurance/myPoliciesPage"

// describe('BusinessCases IOS', () => {
//     const WebURL = "https://kbuatauto2mix-pwa-app-web.kreditbee.dev/newhome"
//     const WebIframeURL ="https://kbuatauto2mix-pwa-web.kreditbee.dev/signin"

//     it('KB-T55737 (1.0)Check Checkout Finance Card, when user is having active EWA loan', () => {
//         cy.intercept('**/home', { fixture: 'home/homePage-EWADisbursed.json' })
//         cy.visit(WebURL, { failOnStatusCode: false })
//         homePage.verifylockedButton('LOCKED')
//         homePage.verifyPurchaseLoanValue('60,000')
//         homePage.clickLockedButton()
//         //activeLoanStatusPage.verifyActiveLoanIcon('https://ik.imagekit.io/kreditbee/app-static/loan/ic_loanblock_es.svg')
//         activeLoanStatusPage.verifyActiveLoanLabel('Active Loan')
//     })
    
//     it('KB-T60165 (1.0)Verify Confirmed User is able to Generate the CSR Report with UPI mode', () => {
//         cy.intercept('**/home', { fixture: '/crediscoreReport-Web/homePage.json' })
//         cy.intercept('**/me/creditreport', { fixture: '/crediscoreReport-Web/creditscoreReportPayAndGet.json' })
//         cy.intercept('**/me/tnc/csr', { fixture: '/crediscoreReport-Web/CSR.json' })
//         cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Page.json' })
//         cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Success.json' })
//         cy.intercept('**/me/payment?v=sp3&reqId=7078117&type=csr&amount=**', { fixture: '/crediscoreReport-Web/CSRPaymentOptionPage.json' })

//         cy.visit(WebURL, { failOnStatusCode: false })

//         homePageWeb.clickcreditScoreIcon()
//         csrInfoPageWeb.clickPayAndGetReportButton()
//         csrOTPInputWebPage.enterOTP('123456')
//         csrOTPInputWebPage.checkConsentBox()
//         csrOTPInputWebPage.clickSubmitBtn()
//         csrPaymentOptionsWebPage.verifyPayNowButton()
//         csrPaymentOptionsWebPage.verifyPayWithCouponCodeBtn()
//         csrPaymentOptionsWebPage.clickPayNowButton()
//         paymentOptionWebPage.verifyUPIQRLabel('UPI/QR')
//         paymentOptionWebPage.verifyDebitCardText('Debit Card')
//         paymentOptionWebPage.verifyNetBankingBlock()
//         paymentOptionWebPage.clickUPIQRLabel()
//         paymentOptionWebPage.clickPayWithUPIQR()
//         payViaUpiPage.enterUPIID('9491281456@ybl')
//         payViaUpiPage.clickContinueMakePaymentButton()

//     })
//     it('KB-T60162 (1.0)Ensure Rejected user is able to Generate the CSR Report with UPI mode',()=>{
//         cy.intercept('**/home', { fixture: '/crediscoreReport-Web/csrHomePageRejectUser' })
//         cy.intercept('**/me/creditreport', { fixture: '/crediscoreReport-Web/creditscoreReportPayAndGet.json' })
//         cy.intercept('**/me/tnc/csr', { fixture: '/crediscoreReport-Web/CSR.json' })
//         cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Page.json' })
//         cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Success.json' })
//         cy.intercept('**/me/payment?v=sp3&reqId=7078117&type=csr&amount=**', { fixture: '/crediscoreReport-Web/CSRPaymentOptionPage.json' })

//         cy.visit(WebURL, { failOnStatusCode: false })
//         homePageWeb.clickcreditScoreIcon()
//         csrInfoPageWeb.clickPayAndGetReportButton()
//         csrOTPInputWebPage.enterOTP('123456')
//         csrOTPInputWebPage.checkConsentBox()
//         csrOTPInputWebPage.clickSubmitBtn()
//         csrPaymentOptionsWebPage.verifyPayNowButton()
//         csrPaymentOptionsWebPage.verifyPayWithCouponCodeBtn()
//         csrPaymentOptionsWebPage.clickPayNowButton()
//         paymentOptionWebPage.verifyUPIQRLabel('UPI/QR')
//         paymentOptionWebPage.verifyDebitCardText('Debit Card')
//         paymentOptionWebPage.verifyNetBankingBlock()
//         paymentOptionWebPage.clickUPIQRLabel()
//         paymentOptionWebPage.clickPayWithUPIQR()
//         payViaUpiPage.enterUPIID('9491281456@ybl')
//         payViaUpiPage.clickContinueMakePaymentButton()

//     })

//     it('KB-T60164 (1.0) Ensure Rejected user is able to Generate the CSR Report with UPI intent mode',()=>{
//         cy.intercept('**/home', { fixture: '/crediscoreReport-Web/csrHomePageRejectUser' })
//         cy.intercept('**/me/creditreport', { fixture: '/crediscoreReport-Web/creditscoreReportPayAndGet.json' })
//         cy.intercept('**/me/tnc/csr', { fixture: '/crediscoreReport-Web/CSR.json' })
//         cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Page.json' })
//         cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Success.json' })
//         cy.intercept('**/me/payment?v=sp3&reqId=7078117&type=csr&amount=**', { fixture: '/crediscoreReport-Web/CSRPaymentOptionPage.json' })

//         cy.visit(WebURL, { failOnStatusCode: false })
//         homePageWeb.clickcreditScoreIcon()
//         csrInfoPageWeb.clickPayAndGetReportButton()
//         csrOTPInputWebPage.enterOTP('123456')
//         csrOTPInputWebPage.checkConsentBox()
//         csrOTPInputWebPage.clickSubmitBtn()
//         csrPaymentOptionsWebPage.verifyPayNowButton()
//         csrPaymentOptionsWebPage.verifyPayWithCouponCodeBtn()
//         csrPaymentOptionsWebPage.clickPayNowButton()
//         paymentOptionWebPage.verifyUPIQRLabel('UPI/QR')
//         paymentOptionWebPage.verifyDebitCardText('Debit Card')
//         paymentOptionWebPage.verifyNetBankingBlock()
//         paymentOptionWebPage.clickUPIQRLabel()
//         paymentOptionWebPage.clickPayWithUPIQR()
//         // payViaUpiPage.enterUPIID('9491281456@ybl')
//         payViaUpiPage.clickGpayIcon
//     })

//     it('KB-T60163 (1.0)Ensure Confirmed user is able to Generate the CSR Report with UPI mode',()=>{
//         cy.intercept('**/home', { fixture: '/crediscoreReport-Web/homePage.json' })
//         cy.intercept('**/me/creditreport', { fixture: '/crediscoreReport-Web/creditscoreReportPayAndGet.json' })
//         cy.intercept('**/me/tnc/csr', { fixture: '/crediscoreReport-Web/CSR.json' })
//         cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Page.json' })
//         cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Success.json' })
//         cy.intercept('**/me/payment?v=sp3&reqId=7078117&type=csr&amount=**', { fixture: '/crediscoreReport-Web/CSRPaymentOptionPage.json' })

//         cy.visit(WebURL, { failOnStatusCode: false })
//         homePageWeb.clickcreditScoreIcon()
//         csrInfoPageWeb.clickPayAndGetReportButton()
//         csrOTPInputWebPage.enterOTP('123456')
//         csrOTPInputWebPage.checkConsentBox()
//         csrOTPInputWebPage.clickSubmitBtn()
//         csrPaymentOptionsWebPage.verifyPayNowButton()
//         csrPaymentOptionsWebPage.verifyPayWithCouponCodeBtn()
//         csrPaymentOptionsWebPage.clickPayNowButton()
//         paymentOptionWebPage.verifyUPIQRLabel('UPI/QR')
//         paymentOptionWebPage.verifyDebitCardText('Debit Card')
//         paymentOptionWebPage.verifyNetBankingBlock()
//         paymentOptionWebPage.clickUPIQRLabel()
//         paymentOptionWebPage.clickPayWithUPIQR()
//         payViaUpiPage.enterUPIID('9491281456@ybl')
//         payViaUpiPage.clickContinueMakePaymentButton()
//     })

//     it.only('KB-T45876 (1.0)[Insurance] Check the payment is successful for the insurance with ICICIUPIQR', {
//         "retries": 1
//       },
      
//       () => {
//         cy.intercept('**/ecom/offers?type=insuranceHomeBanner', { fixture: 'insurance/buyPolicyPage-Banner.json' })
//         cy.intercept('**/home', { fixture: 'home/homePage-Insurance.json' }).as('homePage')
//         cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage-Insurance.json' })
//         cy.intercept('**/vasins/policies/details?policy_id=**', { fixture: 'insurance/policyDetailsPage.json' }).as('policyDetailsPage')
//         cy.intercept('**/vasins/policies/userpremium?policy_id=**', { fixture: 'insurance/buyInsurancePremiumPolicyPage.json' })
//         cy.intercept('**/vasins/policies/states', { fixture: 'insurance/buyInsurancePolicyPage.json' })
//         cy.intercept('**/vas/me/tnc/insurance', { fixture: 'insurance/insurancePolicyDetailsPage-tnc.json' })
//         cy.intercept('**/vas/me/tnc/insurance', { fixture: 'insurance/insurancePoilcyDetailsPage-TNC.json' })
//         cy.intercept('**/vas/policies/paymentdetails?policy_Id=**&premium_Id=**', { fixture: 'insurance/policyPaymentDetailsPage.json' }).as('paymentPage')
//         cy.intercept('**/vasins/policies/insurancereport?user_policy_id=**', { fixture: "insurance/PaymentOptionPage-ins.json" })
//         cy.intercept('**/vasins/policies/order',{fixture:'insurance/paymentOptionPage-Order.json'})
//         cy.intercept('**/vaspg/me/payment?v=****', { fixture: 'insurance/PaymentOptionPage-UPIQR-enable.json' })
//         cy.visit( WebURL, { failOnStatusCode: false })
//         cy.wait('@homePage')
//         // homePage.clickInsuranceLabel()
//         cy.contains('span','Insurance').click({ multiple: true })
//         // homePageIframe.clickInsuranceLabel()
//         // cy.wait(3000)
//         // insuranceBuyPolicyListPage.clickGetNowBtn()
//         // cy.wait(3000)
//         // insurancePolicyDetailsPage.clickGetInsuredInJust5MinutesButton()
//         // insuranceBuyPolicyPage.verifySelectAPlanLabel('Select a Plan')
//         // insuranceBuyPolicyPage.clickSelectAPlanRadioButton()
//         // insuranceBuyPolicyPage.clickIAgreeToTermsAndConditionsCheckbox()
//         // insuranceBuyPolicyPage.clickContinueButton()
//         // insurancePolicyPaymentPage.verifyPageTitle('Payment')
//         // insurancePolicyPaymentPage.verifyConfirmAndPayButton('Confirm and Pay')
//         // insurancePolicyPaymentPage.clickConfirmAndPayButton()
//         // cy.wait(3000)
//         // paymentOptionPage.verifyTitlePaymentOptionPage('Payment Option')
//         // paymentOptionPage.clickPayWithUPIOrQRbutton()
//         insuranceBuyPolicyListPage.clickGetNowBtn('Personal Accident + Hospicash (Reimbursement of Rs. 1000 per day)')
//         insurancePolicyDetailsPage.verifyPolicyPeriodLabel('POLICY PERIOD')
//         insurancePolicyDetailsPage.verifyCoverageUptoLabel('COVERAGE UPTO')
//         insurancePolicyDetailsPage.verifyPremiumStartsAtLabel('PREMIUM STARTS AT')
//         insurancePolicyDetailsPage.verifyWhatsCoveredLabel("What's Covered")
//        // insurancePolicyDetailsPage.clickTermsAndConditionsLink()
//        // insuranceTermsAndConditionsPage.clickInsuranceTermsAndConditionsPageBackButton()
//         insurancePolicyDetailsPage.clickGetInsuredInJust5MinutesButton()
//         insuranceBuyPolicyPage.verifySelectAPlanLabel('Select a Plan')
//         insuranceBuyPolicyPage.verifyCustomerInformationLabel('Customer Information')
//       //  insuranceBuyPolicyPage.verifyAddressEditIcon()
//         insuranceBuyPolicyPage.verifyAddANomineeOptionalLabel('Add a nominee')
//         insuranceBuyPolicyPage.clickSelectAPlanRadioButton()
//         insuranceBuyPolicyPage.clickIAgreeToTermsAndConditionsCheckbox()
//         insuranceBuyPolicyPage.clickContinueButton()
//         insurancePolicyPaymentPage.verifyPageTitle('Payment')
//         insurancePolicyPaymentPage.verifyConfirmAndPayButton('Confirm and Pay')
//         insurancePolicyPaymentPage.clickConfirmAndPayButton()
//         // paymentOptionPage.clickPayWithUPIOrQRbutton()
//         paymentOptionPage.clickPayWithUPIOrQRbutton()
//         payViaUpiPage.verifyPageTitle('Pay via UPI')
//        // paymentOptionPage.verifyPageT('Payment Option')
//     })
//     it.only('KB-T45876 (1.0)[Insurance] Check the payment is successful for the insurance with ICICIUPIQR',{
//         "retries": 1
//       },()=>{
//         cy.intercept('**/home', { fixture: 'home/homePage-Insurance.json' }).as('homePage')
//         cy.intercept('**/vasins/policies',{fixture:'insurance/buyPolicyPage-Insurance-Issued.json'})
//         cy.intercept('**/vasins/policies/userpolicy',{fixture:'insurance/myPoliciesPage-Issued.json'})
//         cy.visit( WebURL, { failOnStatusCode: false })
//         cy.wait('@homePage')
//         cy.contains('span','Insurance').click({ multiple: true })
//         insuranceBuyPolicyListPage.clickMyPoliciesLink()
//         myPoliciesPage.verifyPolicyIssuedLabel('Issued')
//         // homePageIframe.clickInsuranceLabel()
//         // cy.wait(3000)
//         // insuranceBuyPolicyListPage.clickMyPoliciesLink()
//         // myPoliciesPage.verifyPolicyIssuedLabel('Issued')
//     })

// })