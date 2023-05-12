//loan flow
import { homePage } from "../../pages/home/HomePage"
import { fplPage } from "../../pages/loan/fpl/FPLPage"
import { fplLoanAmountDetailsPage } from "../../pages/loan/fpl/FPLLoanAmountDetailsPage"
import { fplLoanAmountTenurePage } from "../../pages/loan/fpl/FPLLoanAmountTenurePage"
import { repaymentSchedulePage } from "../../pages/loan/RepaymentSchedulePage"
import { loanPurposePage } from "../../pages/loan/LoanPurposePage"
import { selectBankAccountPage } from "../../pages/bank/SelectBankAccountPage"
import { addBankAccountPage } from "../../pages/bank/AddBankAccountPage"
import { bankAccountVerificationPage } from "../../pages/bank/BankAccountVerificationPage"
import { footerPage } from "../../pages/generic/FooterPage"
import { accountsPage } from "../../pages/accounts/AccountsPage"
//account
import { settingsPage } from "../../pages/generic/SettingsPage"
import { headerPage } from "../../pages/generic/HeaderPage"
import { deleteAccountPage } from "../../pages/accounts/deleteAccountPage"
import { otpInputPage } from "../../pages/onboarding/general/OTPInputPage"
import { repaymentPage } from "../../pages/repayments/RepaymentPage"

import { loginPage } from "../../pages/onboarding/general/LoginPage"
import { mobileInputPage } from "../../pages/onboarding/general/MobileInputPage"
import { otpMaximumAttemptsReachedPage } from "../../pages/onboarding/general/OTPMaximumAttemptsReachedPage"

import { bankAccountDetailsPage } from "../../pages/bank/BankAccountDetailsPage"
import { findIFSCPage } from "../../pages/bank/FindIFSCPage"

import { help } from "../../pages/help/helpPage"

import { knowAboutProductPage } from "../../pages/onboarding/general/KnowAboutProductPage"

describe('Login', () => {
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

    it('KB-T21751 (1.0) Check on clicking Login and Logout', () => {

        cy.intercept('https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyB8sVCUx2de592MmSgwrgM5NCTuYXdGuRM', { fixture: 'login/lgetaccinfo.json' })
        cy.intercept('https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyB8sVCUx2de592MmSgwrgM5NCTuYXdGuRM', { fixture: 'login/lverifycustoken.json' })
        cy.intercept('**/me/otp?reason=loginOrRegister&mobile=**', { fixture: 'login/t1otp.json' })
        cy.intercept('**/me/otp?reason=loginOrRegister', { fixture: 'login/t1loginormob.json' })
        cy.intercept('**/me?source=login', { fixture: 'login/loginme.json' })
        cy.intercept('**/me/tnc/login', { fixture: 'login/loginsuccess.json' })
        cy.intercept('https://firestore.googleapis.com/v1/projects/kreditbee-stage/databases/(default)/documents/ypuserlocales/**', { fixture: 'login/ypuserlocal.json' })
        cy.intercept('**/home', { fixture: 'home/homePage-MLASILVER.json' })

        cy.visit('/login', { failOnStatusCode: false });
        cy.wait(1000)
        cy.contains('Login/Signup with Mobile', { timeout: 7000 }).should('be.visible')
        cy.contains('Login/Signup with Mobile').click({ force: true });
        cy.url().should('include', '/loginwithmob/mobileform', { timeout: 7000 });
        cy.get('input')
            .should('be.visible')
            // .and('be.focused')
            .and('have.attr', 'placeholder', '10 digit mobile number')
            .and('have.attr', 'maxlength', '10')
            .next()
            .prev()
            .type("9071581718");
        cy.get('[data-cy="checkboxText"]').click()
        cy.get('button')
            .should('have.text', 'Continue')
            .and('be.enabled').click();
        cy.get('input', { timeout: 7000 }).should('not.be.disabled')
            .and('have.attr', 'placeholder', 'Enter OTP Here')
            .and('have.attr', 'maxlength', '6')
            .and('have.attr', 'autocomplete', 'new-password')
            .click()
            .type("123456");
        cy.wait(4000)
        cy.visit('/newhome', { failOnStatusCode: false });
        cy.wait(3000)
    })
})

describe('Bank', { retries: 1 }, () => {

    it('KB-T21471 (1.0) Check whether Bank is added successfully in App', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-8k.json' })
        cy.intercept('**/category?name=fpl*', { fixture: 'loan/fpl/fplPage-8k.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountDetailPage-8k.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
        cy.intercept('**/me/bank', { fixture: 'bank/bankAccountVerificationPage-NoBankAdded.json' })
        cy.intercept('**/misc/bank?ifsc=**', { fixture: 'bank/bankAccountVerificationPage-IFSCSearchResult.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickFPL8KGetNow();
        fplPage.clickFPL4KGetNowBtn();
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentPage.clickContinueBtn()
        loanPurposePage.clickSelectLoanPurposeDD()
        loanPurposePage.selectPurposeFromDDL('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickAddSavingBankAccount()
        addBankAccountPage.enterIFSC('CBIN0283979')
        addBankAccountPage.enterAccountNumber('3379955585')
        addBankAccountPage.enterConfirmAccountNumber('3379955585')
        addBankAccountPage.clickAddAccountBtn()
        bankAccountVerificationPage.verifyPageTitle('Account verification')
    })

    it('KB-T35467 (1.0)Check if the error string is displayed when user bank is facing down time issues in Add Bank Account Page', function () {
        cy.intercept('**/home', { fixture: 'home/homePage-8k.json' })
        cy.intercept('**/category?name=fpl*', { fixture: 'loan/fpl/fplPage-8k.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountDetailPage-8k.json' })
        cy.intercept('**/misc/bank?bank=hdfc_bank', { fixture: 'bank/bankAccountVerificationPage-BankDowntime.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickFPL8KGetNow();
        fplPage.clickFPL4KGetNowBtn();
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentPage.clickContinueBtn()
        loanPurposePage.clickSelectLoanPurposeDD()
        loanPurposePage.selectPurposeFromDDL('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickAddSavingBankAccount()
        addBankAccountPage.clickFindIFSCLink()
        findIFSCPage.verifyPageTitle('Find IFSC')
        findIFSCPage.enterBankName('HDFC')
        findIFSCPage.clickSuggestedBank()
        findIFSCPage.verifyBankNameErrorMessageText('This bank is currently facing technical difficulties. Bank verification may be delayed by a few hours. Please add another bank account for faster verification.')
      })

    it('KB-T35579 (1.0) Check if the soft and Hard back buttons are working in Select Bank Account page', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-8k.json' })
        cy.intercept('**/category?name=fpl*', { fixture: 'loan/fpl/fplPage-8k.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountDetailPage-8k.json' })
        cy.intercept('**/me/bank', { fixture: 'bank/bankAccountVerificationPage-NoBankAdded.json' })
        cy.intercept('**/misc/bank?ifsc=**', { fixture: 'bank/bankAccountVerificationPage-IFSCSearchResult.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickFPL8KGetNow();
        fplPage.clickFPL4KGetNowBtn();
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentPage.clickContinueBtn()
        loanPurposePage.clickSelectLoanPurposeDD()
        loanPurposePage.selectPurposeFromDDL('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.verifyPageTitle('Select Bank Account')
        cy.go('back')
        loanPurposePage.clickSelectLoanPurposeDD()
        loanPurposePage.clickLoanPurposeWedding('Wedding expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.verifyPageTitle('Select Bank Account')
        headerPage.clickBackBtn()
        loanPurposePage.clickSelectLoanPurposeDD()
        loanPurposePage.clickLoanPurposePersonalReason('Personal reason')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.verifyPageTitle('Select Bank Account')
    })

    it('KB-T35583 (1.0) Check if Select Bank Account page is as per VD when Bank is in new State', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-8k.json' })
        cy.intercept('**/category?name=fpl*', { fixture: 'loan/fpl/fplPage-8k.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountDetailPage-8k.json' })
        cy.intercept('**/me/bank', { fixture: 'bank/bankAccountVerificationPage-NoBankAdded.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-VerifyBank.json' })
        cy.intercept('**/me/bank?id=**', { fixture: 'bank/bankAccountDetailsPage-EditIFSC.json' })
        cy.intercept('**/misc/bank?ifsc=**', { fixture: 'bank/bankAccountVerificationPage-IFSCSearchResult.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankAddedSuccessfully.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickFPL8KGetNow();
        fplPage.clickFPL4KGetNowBtn();
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentPage.clickContinueBtn()
        loanPurposePage.clickSelectLoanPurposeDD()
        loanPurposePage.selectPurposeFromDDL('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.verifyPageTitle('Select Bank Account')
        selectBankAccountPage.clickVerifyBtn()
        bankAccountDetailsPage.verifyPageTitle('Bank Account Details')
        bankAccountDetailsPage.clickAddSavingsBankAccountBtn()
        addBankAccountPage.enterIFSC('HDFC0009286')
        addBankAccountPage.enterAccountNumber('50100278181960')
        addBankAccountPage.enterConfirmAccountNumber('50100278181960')
        addBankAccountPage.clickAddAccountBtn()
        bankAccountVerificationPage.clickContinueBtn()
        selectBankAccountPage.verifyPageTitle('Select Bank Account')
        selectBankAccountPage.verifyVerifiedBankStatus('Verified')
    })

    it('KB-T35479 (1.0) Check if the Flow is going to Find IFSC page on clicking edit option from Bank Account details page [EDIT]', () => {
        cy.intercept('**/home', { fixture: 'home/homePage.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fpl8kPage.json' })
        cy.intercept('**/preloanre?productId=**', { fixture: 'loan/fpl/fpl8KPreloanREPage.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountDetailPage-8k.json' })
        cy.intercept('**/me/bank?id=**', { fixture: 'bank/bankAccountDetailsPage-EditIFSC.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/bankAccountDetailsPage-VerifyButton.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickFPL8KGetNow()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentPage.clickContinueBtn()
        loanPurposePage.clickSelectLoanPurposeDD()
        loanPurposePage.selectPurposeFromDDL('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.verifyPageTitle('Select Bank Account')
        selectBankAccountPage.clickVerifyBtn()
        bankAccountDetailsPage.verifyPageTitle('Bank Account Details')
        bankAccountDetailsPage.clickEditIFSCLink()
        findIFSCPage.verifyPageTitle('Find IFSC')
        findIFSCPage.verifyBankNameLabel('Bank Name')
    })

    it('KB-T4828 (1.0) Check whether No Bank Accounts added screen is dispplayed in Bank Accounts page', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-8k.json' })
        cy.intercept('**/category?name=fpl*', { fixture: 'loan/fpl/fplPage-8k.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountDetailPage-8k.json' })
        cy.intercept('**/bank?productid=**', { fixture: 'bank/bankAccountVerificationPage-NoBankAdded.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickFPL8KGetNow();
        fplPage.clickFPL4KGetNowBtn();
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentPage.clickContinueBtn()
        loanPurposePage.clickSelectLoanPurposeDD()
        loanPurposePage.selectPurposeFromDDL('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.verifyPageTitle('Select Bank Account')
        selectBankAccountPage.verifyAddBankText('We need your Bank Account to disburse the Loan')
        selectBankAccountPage.verifyAddBankSubText('You should be the primary account holder for the Bank Account')
    })

    it('KB-T32655 (1.0) Verify the help Icon from home page and its working.', () => {
        cy.intercept('**/main/home', { fixture: 'home/homepage-Notransaction.json' })
        cy.intercept('**/main/myaccount', { fixture: 'accounts/accountPage-Notransction.json' })
        cy.intercept('**/contactus/rule?categoryId=r_faq', { fixture: 'help/helpPage.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        headerPage.clickHelpBtn()
        help.verifyPageTitle('Help')
        help.verifyCreditLimitEnhancementLabel()
        help.verifyProfileVerificationLabel('Profile Verification')
    })

    it('KB-T32677 (1.0) Check the homepage loan block when loan is overdue', () => {
        cy.intercept('**/home', { fixture: 'home/repaymentPage-overdueIntrest-HomePage.json' })
        cy.intercept('**/me/loans', { fixture: 'loan/repayment/repaymentPage-FPLOverDue-Loan.json' })
        cy.intercept('**/me/loan?id=**', { fixture: 'loan/repayment/repaymentPage-FPLOverDue-LoanId.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.verifyPayNowText('PAY NOW')
        homePage.verifyGoldIconVisible()
        homePage.verifyNextDueDateRedText('rgb(238, 82, 113)')
        footerPage.clickRepaymentIcon()
        repaymentPage.verifyLoanIcon()
        repaymentPage.verifyPaymentHistoryLabel('Payment history')
        repaymentPage.verifyHowToRepayLabel('How to Repay?')
        repaymentPage.clickViewDetailsLink()
        repaymentSchedulePage.verifyPageTitle('Repayment Schedule')
        repaymentSchedulePage.verifyOverdueInterestText('Overdue interest at an annualized interest rate of 29.95% p.a. will be applicable per day on principal overdue')
        repaymentSchedulePage.verifyConsentRoundToRupeeText('*round to nearest rupee')
    })
})

describe('Account Deactivation', () => {

    it('KB-T46423 Verify account deactivation for user which is deactivated from admin', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-gold.json' })
        cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage.json' })
        cy.intercept('**/main/me/delete', { fixture: 'accounts/deleteAccount-NoStatus.json' })
        cy.intercept('**/main/me/otp?reason=deleteAccount', { fixture: 'otp/otp-deleteAccountPage.json' })
        cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickMyAccountIcon()
        accountsPage.verifySettingsText('Settings')
        accountsPage.clickSettingsBtn()
        settingsPage.verifyPageTitle('Settings')
        settingsPage.verifyDeleteAccountText('Delete Account')
        settingsPage.clickDeleteAccountBtn()
        deleteAccountPage.verifyContinueDeleteText('Continue to delete')
        deleteAccountPage.clickContinueToDeleteButton()
        deleteAccountPage.clickDeleteAccountButton()
        deleteAccountPage.clickContinueToDeleteButton()
        otpInputPage.enterDeleteAccountOTP('111111')
        otpInputPage.verifySubmitBtnText('Submit')
        otpInputPage.clickSubmitBtn()
        loginPage.clickLoginOrSignupWithMobileBtn()
    })
})
describe('Login max reached', () => {
    before(() => {
        cy.clock();
        cy.visitURL('/login')
    })


    it('KB-T44914 (1.0) Ensure "Maximum attempts Reached" page is displaying while signup, when user exceeded the maximum try.', () => {
        cy.intercept('**/me/otp?reason=loginOrRegister&mobile=**', { fixture: 'tokensForLogin/loginOrRegister-mobilenumber.json' })
        cy.intercept('**/me/otp?reason=loginOrRegister', { fixture: 'otp/otp-invalid.json' })
        loginPage.verifyLoginFlow(0, 'Know more about our products') //know more about our products - does not exist when value is 0 
        loginPage.clickLoginOrSignupWithMobileBtn()
        mobileInputPage.bkPerformLogin('9611991897')
        otpInputPage.verifyPageTitle('Verify mobile')
        otpInputPage.verifyEnterSixDigitOTPText('Enter the 6 digit OTP received on your mobile ')
        otpInputPage.verifyChangeMobeileNumberLink('change?')
        otpInputPage.verifyOTPLabel('OTP')
        otpInputPage.enterOTP('111111')
        cy.tick(30000)
        otpInputPage.verifyResendOTPLink('  Resend ?')
        otpInputPage.clickResendOTPLink()
        otpInputPage.enterOTP('111112')
        cy.tick(30000)
        otpInputPage.verifyGetOTPOnCallText('Get OTP on call')
        otpInputPage.enterOTP('111113')
        otpInputPage.verifyOTPInputMessage('Invalid OTP')
        otpInputPage.enterOTP('111114')
        cy.visitURL('/loginwithmob/maxtries?otpRetryExpiry=300')
        otpMaximumAttemptsReachedPage.verifyPageTitle('Maximum attempts reached')
        otpMaximumAttemptsReachedPage.verifyRetryText('Please retry after 5 minutes')
        otpMaximumAttemptsReachedPage.verifyOKText('OK')
        otpMaximumAttemptsReachedPage.clickOKBtn()
    })

    it('KB-T49500 Check whether new screen with all product details displayed in welcome screen when preLoginFlowVersion config is set as 2', function () {
        cy.visitURL('/login')
        knowAboutProductPage.verifyPageTitle('Welcome to KreditBee')
        knowAboutProductPage.verifyKreditBeeIcon()
        knowAboutProductPage.verifyBackgroundIcon()
        knowAboutProductPage.verifyGetInstantPersonalLoanUpto('Get instant Personal Loan upto')
        knowAboutProductPage.verifyLoanAmountRupees('Lakhs')
        //PLSalaried
        knowAboutProductPage.verifyPLSalariedLabel('PERSONAL LOAN - SALARIED')
        // knowAboutProductPage.verifyPLSalariedUptoText('UPTO')
        //knowAboutProductPage.verifyPLSalariedValue('3,00,000')
        knowAboutProductPage.verifyPLSalariedIcon()
        knowAboutProductPage.verifyPLSalariedKnowmoreLink('KNOW MORE')
        knowAboutProductPage.verifyPLSalariedTenureUptoSubText('Tenure upto ')
        //lblFPL
        knowAboutProductPage.verifyFPLLabel('FLEXI PERSONAL LOAN ')
        knowAboutProductPage.verifyFPLUptoText('UPTO')
        //  knowAboutProductPage.verifyFPLValue('50,000')
        knowAboutProductPage.verifyFPLIcon()
        knowAboutProductPage.verifyFPLKnowmoreLink('KNOW MORE')
        knowAboutProductPage.verifyFPLTenureUptoSubText('Tenure upto ')
        //Purchase Loan
        knowAboutProductPage.verifyPurchaseLoanLabel('PURCHASE LOAN')
        knowAboutProductPage.verifyPurchaseLoanUptoText('UPTO')
        // knowAboutProductPage.verifyPurchaseLoanAmountValue('1,00,000')
        knowAboutProductPage.verifyPurchaseLoanIcon()
        knowAboutProductPage.verifyPurchaseLoanKnowmoreLink('KNOW MORE')
        knowAboutProductPage.verifyPurchaseLoanTenureUptoSubText('Tenure upto ')
        //VAS Section
        knowAboutProductPage.verifyCreditReportIcon()
        knowAboutProductPage.verifyCreditReportText('Credit Report')
        knowAboutProductPage.verify24kGoldIcon()
        knowAboutProductPage.verify24kGoldText('24K Gold')
        knowAboutProductPage.verifyMyExpensesIcon()
        knowAboutProductPage.verifyMyExpensesText('My Expense')
        //Login Button
        knowAboutProductPage.verifyLoginOrSignupWithMobileText('Login/Signup with Mobile')
    })

})