//loan flow
import { homePage } from "../../pages/home/HomePage"
import { fplPage } from "../../pages/loan/fpl/FPLPage"
import { fplLoanAmountDetailsPage } from "../../pages/loan/fpl/FPLLoanAmountDetailsPage"
import { fplLoanAmountTenurePage } from "../../pages/loan/fpl/FPLLoanAmountTenurePage"
import { repaymentSchedulePage } from "../../pages/loan/RepaymentSchedulePage"
import { loanPurposePage } from "../../pages/loan/LoanPurposePage"
import { selectBankAccountPage } from "../../pages/bank/SelectBankAccountPage"
import { signLoanDocumentPage } from "../../pages/loan/SignLoanDocumentPage"
import { kfsSanctionLetterPage } from "../../pages/loan/KFSSanctionLetterPage"
import { signDocumentPage } from "../../pages/loan/SignDocumentPage"

import { footerPage } from "../../pages/generic/FooterPage"
import { accountsPage } from "../../pages/accounts/AccountsPage"
import { settingsPage } from "../../pages/generic/SettingsPage"
import { headerPage } from "../../pages/generic/HeaderPage"
import { enterYourNewEmailAddressPage } from "../../pages/accounts/enterYourNewEmailAddressPage"
import { grievanceRedressalPolicyInfoPage } from "../../pages/generic/GrievanceRedressalPolicyInfoPage"
import { repaymentPage } from "../../pages/repayments/RepaymentPage"
import { paymentHistoryPage } from "../../pages/repayments/PaymentHistoryPage"
import { lendingPartnerBanksPage } from "../../pages/settings/LendingPartnerBanksPage"

import { goldBuyPage } from "../../pages/gold/GoldBuyPage"
import { goldHomePage } from "../../pages/gold/GoldHomePage"
import { cooldownPeriodPage } from "../../pages/loan/fpl/FPL-CooldownPeriodPage"
import { goldSellPage } from "../../pages/gold/GoldSellPage";
import { goldSellSummaryPage } from "../../pages/gold/GoldSellSummaryPage";
import { goldSellSucessfulPage } from "../../pages/gold/GoldSellSucessfulPage";
import { help } from "../../pages/help/helpPage"
import { paymentOptionPage } from "../../pages/payments/PaymentOptionPage"

describe('Business cases ,Digi Gold', () => {
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

    it('KB-T8427 (1.0)Check that Users should get an error message when invalid domain variants are entered in the Change email page.', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-changeEmail.json' })
        cy.intercept('**/myaccount', { fixture: 'accounts/accountPage-changeEmail.json' })
        cy.intercept('**/me/tnc/emailChange', { fixture: 'onBoarding/profile/enterYourNewEmailAddressPage.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickMyAccountIcon()
        accountsPage.clickSettingsBtn()
        settingsPage.clickChangeEmailText()
        enterYourNewEmailAddressPage.enterEmailAddress('username@123xyz.cam')
        enterYourNewEmailAddressPage.clickEmailAddressConfirmationCheckBox()
        enterYourNewEmailAddressPage.clickSendOTPButton()
        enterYourNewEmailAddressPage.verifyInvalidEmailAddressText('Invalid Email address')
    })

    it('KB-T39815 (1.0)[Digital Gold Sell] Validate "Sell Gold Successfull" screen is displayed when Safe golds transaction and bank transfer are in success state', function () {
            cy.intercept('**/home', { fixture: 'home/homePage-Gold-CouponPoints.json' })
            cy.intercept('**/ecom/offers?type=goldHomeBanner', { fixture: 'gold/goldHomePage-banners.json' })
            cy.intercept('**/vasgold/digitalgold/home', { fixture: 'gold/goldHomePage-CouponCode.json' })
            cy.intercept('**/vasgold/digitalgold/investment/details', { fixture: 'gold/goldHomePage-Delivery.json' })
            cy.intercept('**/vasgold/digitalgold/transaction/eligibility', { fixture: 'gold/goldHomePage-eligibility.json' })
            cy.intercept('**/vasgold/digitalgold/calculator', { fixture: 'gold/goldSellPage-enteramount101.json' })
            cy.intercept('**/vasgold/digitalgold/transaction/sell/verify', { fixture: 'gold/goldPurchasePage-verifysell.json' })
            cy.intercept('**/me/bank?source=vas', { fixture: 'gold/goldPurchasePage-banksource.json' })
            cy.intercept('**/me/tnc/gold_sale', { fixture: 'gold/goldPurchasePage-goldsale.json' })
            cy.intercept('**/vasgold/digitalgold/transaction/sell/confirm', { fixture: 'gold/goldSellSucessfull-confrm.json' })
            cy.intercept('**/vas/me/tnc/gold_sale', { fixture: 'gold/goldSucessfull-SellComplte.json' })
            cy.intercept('**/vasgold/digitalgold/transaction/******?getBankStatus=*', { fixture: 'gold/goldSucessfull-CompltedStatus.json' })

            cy.visit('/newhome', { failOnStatusCode: false });
            homePage.clickGoldIcon()
            goldHomePage.verifyPageTitle('24K Gold')
            goldHomePage.clickSell24KGoldButton()
            goldSellPage.enterRupeeFieldInput('101')
            goldSellPage.clickSellButton()
            goldSellSummaryPage.verifyPageTitle('Sell Summary')
            goldSellSummaryPage.clickContinueButton()
            goldSellSucessfulPage.verifySellGoldSucessfullLabel('Sell Gold Successful')
        })

    it('KB-T42692 (1.0)[Digital Gold Homepage] Verify clicking on FAQ button is redirecting to help page', function () {
        cy.intercept('**/home', { fixture: 'home/homePage-gold-ConfirmUser.json' })
        cy.intercept('**/ecom/offers?type=goldHomeBanner', { fixture: 'gold/goldHomePage-banners.json' })
        cy.intercept('**/vasgold/digitalgold/home', { fixture: 'gold/goldHomePage-NoNugde.json' })
        cy.intercept('**/vasgold/digitalgold/investment/details', { fixture: 'gold/goldHomePage-Delivery.json' })
        cy.intercept('**/vasgold/digitalgold/transaction/eligibility', { fixture: 'gold/goldHomePage-eligibility.json' })

        cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickGoldIcon()
        goldHomePage.verifyPageTitle('24K Gold')
        goldHomePage.clickFAQLabel()
        help.verifyPageTitle('Help')
    })

    it('KB-T48765 (1.0)[Digital Gold Phase 4.5] :Check whether " Gold Banner" is display between "Invest in 24K Gold Starting from Just ₹1 " i.e Invest ₹1 section and "Sell 24K Gold " when User register for first time in 24K Gold (Confirmed State )', function () {
        cy.intercept('**/home', { fixture: 'home/homePage-gold-ConfirmUser.json' })
        cy.intercept('**/ecom/offers?type=goldHomeBanner', { fixture: 'gold/goldHomePage-banners.json' })
        cy.intercept('**/vasgold/digitalgold/home', { fixture: 'gold/goldHomePage-NoNugde.json' })
        cy.intercept('**/vasgold/digitalgold/investment/details', { fixture: 'gold/goldHomePage-Delivery.json' })
        cy.intercept('**/vasgold/digitalgold/transaction/eligibility', { fixture: 'gold/goldHomePage-eligibility.json' })

        cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickGoldIcon()
        goldHomePage.verifyPageTitle('24K Gold')
        goldHomePage.verifyBannersImage()
        goldHomePage.verifySell24KGoldLabel()
    })



    it('KB-T39373 (1.0)[Digital Gold Sell] Verify the conversion of entered grams to rupees in sell tab', function () {
        cy.intercept('**/home', { fixture: 'home/goldHomePage-SellGold.json' })
        cy.intercept('**/vasgold/digitalgold/home', { fixture: 'gold/goldHomePage-Home.json' })
        cy.intercept('**/ecom/offers?type=goldHomeBanner', { fixture: 'gold/goldHomePage-Offers.json' })
        cy.intercept('**/vasgold/digitalgold/investment/details', { fixture: 'gold/goldHomePage-GoldDetails.json' })
        cy.intercept('**/vasgold/digitalgold/transaction/eligibility', { fixture: 'gold/goldHomePage-GoldEligibility.json' })
        cy.intercept('**/vasgold/digitalgold/calculator', { fixture: 'gold/goldSellPage-Calculator.json' })
        cy.intercept('**/vasgold/digitalgold/calculator', { fixture: 'gold/goldSellPage-GramsToRupees.json' })
        cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickGoldIcon()
        goldHomePage.clickSell24KGoldBtn()
        goldSellPage.enterGramsFieldInput('0.0090')
        goldSellPage.verifySellGoldGramsConvertedToRupeesValue('47.09')
    })

    it('KB-T39372 (1.0)[Digital Gold Sell] Verify the conversion of entered rupees to grams in sell tab', function () {
        cy.intercept('**/home', { fixture: 'home/goldHomePage-SellGold.json' })
        cy.intercept('**/vasgold/digitalgold/home', { fixture: 'gold/goldHomePage-Home.json' })
        cy.intercept('**/ecom/offers?type=goldHomeBanner', { fixture: 'gold/goldHomePage-Offers.json' })
        cy.intercept('**/vasgold/digitalgold/investment/details', { fixture: 'gold/goldHomePage-GoldDetails.json' })
        cy.intercept('**/vasgold/digitalgold/transaction/eligibility', { fixture: 'gold/goldHomePage-GoldEligibility.json' })
        cy.intercept('**/vasgold/digitalgold/calculator', { fixture: 'gold/goldSellPage-Calculator.json' })
        cy.intercept('**/vasgold/digitalgold/calculator', { fixture: 'gold/goldSellPage-RupeesToGrams.json' })
        cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickGoldIcon()
        goldHomePage.clickSell24KGoldBtn()
        goldSellPage.enterRupeeFieldInput('45')
        goldSellPage.verifySellGoldRupeesConvertedToGramsValue('0.0086')
    })

    it('KB-T49301 (1.0)Check if Grievance Redressal Policy page is displayed proper', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-changeEmail.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        headerPage.clickSettingBtn()
        settingsPage.clickGrevanceRedressalPolicyBtn()
        grievanceRedressalPolicyInfoPage.verifyPageTitle('Grievance Redressal Policy')
        grievanceRedressalPolicyInfoPage.verifyPurposeLabel('Purpose')
    })

    it('KB-T49302 (1.0)Check if Lending Partners page is displayed proper', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-changeEmail.json' })
        cy.intercept('**/lendingpartners', { fixture: 'lendingPartners/lendingPartnerBanksPage.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        headerPage.clickSettingBtn()
        settingsPage.clickLendingPartnersBtn()
        lendingPartnerBanksPage.verifyPageTitle('Lending Partners')
        lendingPartnerBanksPage.verifyServicedByPartnerBankKisetsuSaisonFinancelabel('Kisetsu Saison Finance (India) Private Limited (KSF)')
        lendingPartnerBanksPage.verifyServicedByPartnerBankKrazybeeServicesPrivateLimitedlabel('Krazybee Services Private Limited')
        lendingPartnerBanksPage.verifyServicedByPartnerBankIIFLFinanceLimitedlabel('IIFL Finance Limited')
    })

    it('KB-T38626 (1.0)[Digital Gold Buy]Verify the conversion of entered Grams to rupees is displaying in 24K Gold page', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-gold-ConfirmUser.json' })
        cy.intercept('**/vasgold/digitalgold/investment/details', { fixture: 'gold/goldHomePage-rejectuser.json' })
        cy.intercept('**/vasgold/digitalgold/home', { fixture: 'gold/goldHomePage-rejecteduser1.json' })
        cy.intercept('**/ecom/offers?type=goldHomeBanner', { fixture: 'gold/goldHomePage-banners.json' })
        cy.intercept('**vasgold/digitalgold/calculator', { fixture: 'gold/goldBuyPage-DecimalGramsPrefilled.json' })

        cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickGoldIcon()
        goldHomePage.verifyPageTitle('24K Gold')
        goldHomePage.verifyGoldCoinsImage()
        goldHomePage.verifyGoldBalanceLabel('GOLD BALANCE')
        goldHomePage.clickInvestNowButton()
        goldBuyPage.enterGramsFieldInput()
        goldBuyPage.verifyAmountInRupeesPrefilled()
    })

    it('KB-T40229 (1.0)[Digital Gold Homepage] Verify by default Gold live buy price is displaying in gold homepage', function () {
        cy.intercept('**/home', { fixture: 'home/homePage-gold-ConfirmUser.json' })
        cy.intercept('**/vasgold/digitalgold/registrationDetails', { fixture: 'gold/goldHomePage-rejectuser.json' })
        cy.intercept('**/vasgold/digitalgold/home', { fixture: 'gold/goldHomePage-rejecteduser1.json' })
        cy.intercept('**/vasgold/digitalgold/transaction/eligibility', { fixture: 'gold/goldHomePage-eligibility.json' })

        cy.visit('/newhome', { failOnStatusCode: false });
        // cy.wait(3000)
        // cy.reload()
        homePage.clickGoldIcon()

        // cy.wait(8000)
        goldHomePage.verifyPageTitle('24K Gold')
        goldHomePage.verifyBuyPricePerGramLabel('Buy Price per gram:')
    })

    it('KB-T17154 (1.0)Check if payment history page is displayed', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-PendingLoan-FirstInstallmentPaid.json' })
        cy.intercept('**/me/loans', { fixture: 'repayments/repaymentPage-FirstInstallmentPaid.json' })
        cy.intercept('**/me/loan?id=**', { fixture: 'repayments/repaymentPage-LoanID-FirstInstallmentPaid.json' })
        cy.intercept('**/pg/me/payment/history?requestId=**', { fixture: 'repayments/paymentHistoryPage-InstallmentPaid.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        footerPage.clickRepaymentText()
        repaymentPage.clickPaymentHistoryLabel()
        paymentHistoryPage.verifyPageTitle('Payment history')
    })

    it('KB-T8398 (1.0)Check whether user is being redirected to DC page', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-PendingFPLLoan.json' })
        cy.intercept('**/me/loans', { fixture: 'repayments/repaymentPage-FPL.json' })
        cy.intercept('**/me/loan?id=KBST230209SZF', { fixture: 'repayments/repaymentPage-FPLLoan.json' })
        cy.intercept('**/pg/me/payment?v=sp3&reqId=31989669&type=', { fixture: 'payments/paymentOptionsPage-FPL.json' })
        cy.intercept('**/pg/me/payment/order?type=', { fixtutre: 'payments/paymentOptionsPage-DC.json' })
        cy.intercept('https://api.razorpay.com/v1/standard_checkout/preferences?session_token=**', { fixtutre: 'payments/debitCardDetailsPage-RazorPay.json' })
        cy.intercept('https://api.razorpay.com/v1/standard_checkout/checkout/rewards?session_token=**', { fixtutre: 'payments/debitCardDetailsPage-FPL.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        footerPage.clickRepaymentText()
        repaymentPage.clickPayNowBtn()
        paymentOptionPage.clickPayWithDebitCard()
    })

    it('KB-T13830 (1.0)Check if the fee and charges are highlighted and are as per the loan amount taken', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-MLASILVER.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fpl6.2KPage-Passport.json' })
        cy.intercept('**/preloanre?productId=**', { fixture: 'loan/sa/SA-Amount15k-Tenure6.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/sa/SA-Amount15k-Tenure6-MLA2-SubbandGood-APR-Enabled.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
        cy.intercept('**/ins/policies/details?premium_id=**', { fixture: 'insurance/premiumDetailsPage-ICICI.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/sa/signLoanDocumentPage.json' })
        cy.intercept('**/loan/la?type=kb&productid=**', { fixture: 'loan/sa/sanctionLetterPage.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/sa/loanSanctionLetterPage.json' })
       cy.intercept('**/me/tnc/loanSignService', { fixture: 'loan/sa/signServicePage.json' })
       cy.intercept('**/me?source=session', { fixture: 'loan/sa/loanApplicationSubmittedPage.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.verifyPageTitle('Sign Loan Document')
        signLoanDocumentPage.clickContinueBtn()
        kfsSanctionLetterPage.verifyPageTitle('KFS & Sanction letter')
        kfsSanctionLetterPage.verifyDetailsOfFeeAndChargesPageImage('https://kimaginary.buynsta.com/path//f4Ea5VsssAWGpObJ90IlHSU8GUH3/docs/KBST230102VWE/SANC73f81c68-c5a1-9a2b-78f6-7a64e156b4ca.pdf?page=1')
        kfsSanctionLetterPage.selectBoxSanctionLetter('Continue to Sign Loan Document')
        kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
    })

    it('KB-T20934 (1.0)check preloan RE call is not happening when user is in cooldown period', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-CooldownPeriod.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-Cooldown.json' })
        cy.intercept('**/me/lacd?productId=14&loanProductType=cash', { fixture: 'loan/fpl/loanTenurePage-Cooldown.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickFPLGetNowBtn()
        fplPage.clickFPL4KGetNowBtn()
        cooldownPeriodPage.verifyYouNeedToWaitTillLabel('You need to wait till')
        cooldownPeriodPage.verifyYouNeedToWaitTillDateValue('01 Mar 2023')
        cooldownPeriodPage.verifyRetryToApplyForLoanText('Due to delays in repayment, you need to wait for a while to apply for a loan. Please retry again on the above mentioned date to apply.')
    })

    it('KB-T11613 (1.0)Check whether the Passport front and back is displaying in LFA page or not while taking loan.', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-Passport.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fpl6.2KPage-Passport.json' })
        cy.intercept('**/preloanre?productId=**', { fixture: 'loan/sa/SA-Amount15k-Tenure6.json' })
        // cy.intercept('**/products?productId=**', { fixture: 'loan/sa/SA-Amount15k-Tenure6-MLA2-SubbandGood-APR-Enabled.json' })
        cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/viewSummayAndChargesPage.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
        cy.intercept('**/ins/policies/details?premium_id=**', { fixture: 'insurance/premiumDetailsPage-ICICI.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/sa/signLoanDocumentPage.json' })
        cy.intercept('**/loan/la?type=kb&productid=**', { fixture: 'loan/fpl/loanSanctionLetterPage-Passport-LFA.json' })
        //      cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/fpl/loanSanctionLetterPage-LFA-Passport.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/fpl/loanSanctionLetterPage-Passport.json' })
        cy.intercept('**/me/tnc/loanSignService', { fixture: 'loan/sa/signServicePage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otpPage-SignService.json' })
        cy.intercept('**/me?source=session', { fixture: 'loan/sa/loanApplicationSubmittedPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'loan/sa/otpPage-otpsubmit.json' })
        cy.intercept('**/me/loan', { fixture: 'loan/sa/LoanApplicationSubmittedPage-applSubmitted.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.verifyPageTitle('Sign Loan Document')
        signLoanDocumentPage.clickDigitalSignButton()
       // signLoanDocumentPage.clickContinueBtn()
        kfsSanctionLetterPage.verifypageTitle('KFS & Sanction letter')
        kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
        kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
        signDocumentPage.verifyPageTitle('Sign Document')
        cy.get('[data-lazyload-listened="32"]').scrollTo('bottom', { ensureScrollable: false })
        signDocumentPage.verifyPassportFrontAndBackImage()
        signDocumentPage.verifySelfieImage()
        signDocumentPage.verifyContinueText('Continue')
    })
})