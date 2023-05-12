import { activeLoanStatusPage } from "../../pages/accounts/activeLoanStatusPage"
import { homePage } from "../../pages/home/HomePage"
import { activeLoanStatusWebPage } from "../../pages/WebsitePages/activeLoanStatusWebPage"
import { selectBankAccountWebPage } from "../../pages/WebsitePages/bank/SelectBankAccountWebPage"
import { csrInfoPageWeb } from "../../pages/WebsitePages/creditScoreReport/CSRInfoPageWeb"
import { csrOTPInputWebPage } from "../../pages/WebsitePages/creditScoreReport/CSROTPInputWebPage"
import { csrPaymentOptionsWebPage } from "../../pages/WebsitePages/creditScoreReport/CSRPaymentOptionsWebPage"
import { homePageWeb } from "../../pages/WebsitePages/HomePageWeb"
import { fplLoanAmountDetailsWebPage } from "../../pages/WebsitePages/loan/fpl/FPLLoanAmountDetailsWebPage"
import { fplLoanAmountTenureWebPage } from "../../pages/WebsitePages/loan/fpl/FPLLoanAmountTenureWebPage"
import { fplWebPage } from "../../pages/WebsitePages/loan/fpl/FPLWebPage"
import { kfsSanctionLetterWebPage } from "../../pages/WebsitePages/loan/KFSSanctionLetterWebPage"
import { loanApplicationSubmittedWebPage } from "../../pages/WebsitePages/loan/LoanApplicationSubmittedWebPage"
import { loanPurposeWebPage } from "../../pages/WebsitePages/loan/LoanPurposeWebPage"
import { repaymentScheduleWebPage } from "../../pages/WebsitePages/loan/RepaymentScheduleWebPage"
import { signDocumentWebPage } from "../../pages/WebsitePages/loan/SignDocumentWebPage"
import { signLoanDocumentWebPage } from "../../pages/WebsitePages/loan/SignLoanDocumentWebPage"
import { signServiceOTPInputWebPage } from "../../pages/WebsitePages/loan/SignServiceOTPInputWebPage"
import { signServiceWebPage } from "../../pages/WebsitePages/loan/SignServiceWebPage"
import { paymentOptionWebPage } from "../../pages/WebsitePages/PaymentOptionWebPage"
import { payViaUpiPage } from "../../pages/WebsitePages/PayViaUpiPage"
const WebURL = "https://kbuatman215mix-pwa-web.buynsta.com/signin"
describe('BusinessCases IOS', () => {


    it('KB-T55737 (1.0)Check Checkout Finance Card, when user is having active EWA loan', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-EWADisbursed.json' })
        cy.visit(WebURL, { failOnStatusCode: false })
        homePageWeb.verifylockedButton('LOCKED')
        homePageWeb.verifyPurchaseLoanValue('60,000')
        homePageWeb.clickLockedButton()
        //activeLoanStatusPage.verifyActiveLoanIcon('https://ik.imagekit.io/kreditbee/app-static/loan/ic_loanblock_es.svg')
        activeLoanStatusWebPage.verifyActiveLoanLabel('Active Loan')

    })
    it('KB-T60165 (1.0)Verify Confirmed User is able to Generate the CSR Report with UPI mode', () => {
        cy.intercept('**/home', { fixture: '/crediscoreReport-Web/homePage.json' })
        cy.intercept('**/me/creditreport', { fixture: '/crediscoreReport-Web/creditscoreReportPayAndGet.json' })
        cy.intercept('**/me/tnc/csr', { fixture: '/crediscoreReport-Web/CSR.json' })
        cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Page.json' })
        cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Success.json' })
        cy.intercept('**/me/payment?v=sp3&reqId=7078117&type=csr&amount=**', { fixture: '/crediscoreReport-Web/CSRPaymentOptionPage.json' })

        cy.visit(WebURL, { failOnStatusCode: false })

        homePageWeb.clickcreditScoreIcon()
        csrInfoPageWeb.clickPayAndGetReportButton()
        csrOTPInputWebPage.enterOTP('123456')
        csrOTPInputWebPage.checkConsentBox()
        csrOTPInputWebPage.clickSubmitBtn()
        csrPaymentOptionsWebPage.verifyPayNowButton()
        csrPaymentOptionsWebPage.verifyPayWithCouponCodeBtn()
        csrPaymentOptionsWebPage.clickPayNowButton()
        paymentOptionWebPage.verifyUPIQRLabel('UPI/QR')
        paymentOptionWebPage.verifyDebitCardText('Debit Card')
        paymentOptionWebPage.verifyNetBankingBlock()
        paymentOptionWebPage.clickUPIQRLabel()
        paymentOptionWebPage.clickPayWithUPIQR()
        payViaUpiPage.enterUPIID('9491281456@ybl')
        payViaUpiPage.clickContinueMakePaymentButton()

    })
    it('KB-T60162 (1.0)Ensure Rejected user is able to Generate the CSR Report with UPI mode', () => {
        cy.intercept('**/home', { fixture: '/crediscoreReport-Web/csrHomePageRejectUser' })
        cy.intercept('**/me/creditreport', { fixture: '/crediscoreReport-Web/creditscoreReportPayAndGet.json' })
        cy.intercept('**/me/tnc/csr', { fixture: '/crediscoreReport-Web/CSR.json' })
        cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Page.json' })
        cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Success.json' })
        cy.intercept('**/me/payment?v=sp3&reqId=7078117&type=csr&amount=**', { fixture: '/crediscoreReport-Web/CSRPaymentOptionPage.json' })

        cy.visit(WebURL, { failOnStatusCode: false })
        homePageWeb.clickcreditScoreIcon()
        csrInfoPageWeb.clickPayAndGetReportButton()
        csrOTPInputWebPage.enterOTP('123456')
        csrOTPInputWebPage.checkConsentBox()
        csrOTPInputWebPage.clickSubmitBtn()
        csrPaymentOptionsWebPage.verifyPayNowButton()
        csrPaymentOptionsWebPage.verifyPayWithCouponCodeBtn()
        csrPaymentOptionsWebPage.clickPayNowButton()
        paymentOptionWebPage.verifyUPIQRLabel('UPI/QR')
        paymentOptionWebPage.verifyDebitCardText('Debit Card')
        paymentOptionWebPage.verifyNetBankingBlock()
        paymentOptionWebPage.clickUPIQRLabel()
        paymentOptionWebPage.clickPayWithUPIQR()
        payViaUpiPage.enterUPIID('9491281456@ybl')
        payViaUpiPage.clickContinueMakePaymentButton()

    })

    it('KB-T60164 (1.0) Ensure Rejected user is able to Generate the CSR Report with UPI intent mode', () => {
        cy.intercept('**/home', { fixture: '/crediscoreReport-Web/csrHomePageRejectUser' })
        cy.intercept('**/me/creditreport', { fixture: '/crediscoreReport-Web/creditscoreReportPayAndGet.json' })
        cy.intercept('**/me/tnc/csr', { fixture: '/crediscoreReport-Web/CSR.json' })
        cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Page.json' })
        cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Success.json' })
        cy.intercept('**/me/payment?v=sp3&reqId=7078117&type=csr&amount=**', { fixture: '/crediscoreReport-Web/CSRPaymentOptionPage.json' })

        cy.visit(WebURL, { failOnStatusCode: false })
        homePageWeb.clickcreditScoreIcon()
        csrInfoPageWeb.clickPayAndGetReportButton()
        csrOTPInputWebPage.enterOTP('123456')
        csrOTPInputWebPage.checkConsentBox()
        csrOTPInputWebPage.clickSubmitBtn()
        csrPaymentOptionsWebPage.verifyPayNowButton()
        csrPaymentOptionsWebPage.verifyPayWithCouponCodeBtn()
        csrPaymentOptionsWebPage.clickPayNowButton()
        paymentOptionWebPage.verifyUPIQRLabel('UPI/QR')
        paymentOptionWebPage.verifyDebitCardText('Debit Card')
        paymentOptionWebPage.verifyNetBankingBlock()
        paymentOptionWebPage.clickUPIQRLabel()
        paymentOptionWebPage.clickPayWithUPIQR()
        // payViaUpiPage.enterUPIID('9491281456@ybl')
        payViaUpiPage.clickGpayIcon
    })

    it('KB-T60163 (1.0)Ensure Confirmed user is able to Generate the CSR Report with UPI mode', () => {
        cy.intercept('**/home', { fixture: '/crediscoreReport-Web/homePage.json' })
        cy.intercept('**/me/creditreport', { fixture: '/crediscoreReport-Web/creditscoreReportPayAndGet.json' })
        cy.intercept('**/me/tnc/csr', { fixture: '/crediscoreReport-Web/CSR.json' })
        cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Page.json' })
        cy.intercept('**/me/otp?reason=creditreport', { fixture: '/crediscoreReport-Web/CSR-OTP-Success.json' })
        cy.intercept('**/me/payment?v=sp3&reqId=7078117&type=csr&amount=**', { fixture: '/crediscoreReport-Web/CSRPaymentOptionPage.json' })

        cy.visit(WebURL, { failOnStatusCode: false })
        homePageWeb.clickcreditScoreIcon()
        csrInfoPageWeb.clickPayAndGetReportButton()
        csrOTPInputWebPage.enterOTP('123456')
        csrOTPInputWebPage.checkConsentBox()
        csrOTPInputWebPage.clickSubmitBtn()
        csrPaymentOptionsWebPage.verifyPayNowButton()
        csrPaymentOptionsWebPage.verifyPayWithCouponCodeBtn()
        csrPaymentOptionsWebPage.clickPayNowButton()
        paymentOptionWebPage.verifyUPIQRLabel('UPI/QR')
        paymentOptionWebPage.verifyDebitCardText('Debit Card')
        paymentOptionWebPage.verifyNetBankingBlock()
        paymentOptionWebPage.clickUPIQRLabel()
        paymentOptionWebPage.clickPayWithUPIQR()
        payViaUpiPage.enterUPIID('9491281456@ybl')
        payViaUpiPage.clickContinueMakePaymentButton()
    })

})

describe('SME - Working Capital Loan Product', () => {

    it('KB-T61350 Verify SME Business loan is disbursing for MLA X band', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-SME-15K.json' }).as('home')
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/mlax/MLAXPage-15k.json' })
        // cy.intercept('**/ecom/offers?type=preloanBanner',{fixture:'loan/mlax/MLAX-Offertype.json'})
        cy.intercept('**/products?productId=6&action=getNow&preLoanEvent=preLoanGetNowClick', { fixture: 'loan/mlax/MLAX-ProductID-6.json' })
        cy.intercept('**/products?productId=6', { fixture: 'loan/mlax/MLAXAmount15K.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/mlax/mlaxLoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/bankAccountVerifiedPage.json' })
        cy.intercept('**/loan/la?updateMFILimit=0&productid=**', { fixture: 'loan/signLoanDocumentPage-DigFaceID.json' })
        cy.intercept('**/loan/la?type=kb&productid=6&loanamt=**', { fixture: 'loan/loanSanctionPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
        cy.intercept('**/me?source=session', { fixture: 'otp/loanApplicationPage-InsSubmit.json' })
        cy.visit(WebURL, { failOnStatusCode: false })
        cy.wait('@home')
        homePageWeb.clickBlockFPLGetNow()
        fplWebPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenureWebPage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsWebPage.clickViewRepaymentScheduleBtn()
        repaymentScheduleWebPage.verifyPermissionMissingContinueButton(1,'Continue')
        repaymentScheduleWebPage.clickContinueBtn()
        selectBankAccountWebPage.clickContinueBtn()
        signLoanDocumentWebPage.clickDigitalSignButton()
        signLoanDocumentWebPage.clickContinueBtn()
        kfsSanctionLetterWebPage.clickContinueToSignLoanDocumentButton()
        signDocumentWebPage.clickContinueButton()
        signServiceWebPage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
        signServiceWebPage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
        signServiceWebPage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
        signServiceWebPage.selectConsent()
        signServiceWebPage.verifyContinueButtonText('Continue ')
        signServiceWebPage.clickContinueButton()
        cy.clock()
        signServiceOTPInputWebPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx281') //number changes w.r.t user logged in
        signServiceOTPInputWebPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
        signServiceOTPInputWebPage.enterOTP('123456')
        cy.tick(4000)
    })
})