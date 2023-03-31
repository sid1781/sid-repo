//loan flow
import { homePage } from "../../../pages/home/HomePage"
import { fplPage } from "../../../pages/loan/fpl/FPLPage"
import { fplLoanAmountDetailsPage } from "../../../pages/loan/fpl/FPLLoanAmountDetailsPage"
import { fplLoanAmountTenurePage } from "../../../pages/loan/fpl/FPLLoanAmountTenurePage"

import { insuranceBuyPolicyListPage } from "../../../pages/insurance/InsuranceBuyPolicyListPage"
import { myPoliciesPage } from "../../../pages/insurance/myPoliciesPage";
import { cancelPolicyPage } from "../../../pages/insurance/cancelPolicyPage"
import { cancelPolicyPopUpPage } from "../../../pages/insurance/cancelPolicyPopUpPage"

//Profile status


describe('business - Insurance , Purchase Loan ', () => {
    it('Login With Mobile Number', () => {
        

       cy.viewport('samsung-s10')
        const DBurl = "https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";
        const mobilenum = "8073874189"
        const dbip = "10.115.60.4"
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
        var payload = { "query": "SELECT otp from `yp_user_otp` WHERE `sentTo` ='8073874189' order by id desc limit 1", "db_ip": "10.115.60.4" };
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
    it('KB-T51898 (1.0)ACKO CREDITSHIELD LOAN: Check if the user is eligible for insurance policy Premium then, user is able see the policy in loan amount page (cloned)', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-6.2kFPL.json' })
        cy.intercept('**/category?name=fpl*', { fixture: 'loan/fpl/fplPage-6.2k.json' })
        cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/viewSummayAndChargesPage.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
        // cy.intercept('**/ins/policies/details?premium_id=**', { fixture: 'insurance/premiumDetailsPage-ICICI.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickFPLGetNowBtn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.verifyInsurancePremiumLabel('Insurance Premium ')
        fplLoanAmountDetailsPage.verifyDeductedFromLoanText('Deducted from loan amount.Know More')
        fplLoanAmountDetailsPage.verifyBuyEMIText('Buy EMI Protect : ₹ 73')
    })

    // it('KB-T5994 Check if the user is able to raise a claim for Issued policy.',()=>{
    //     cy.intercept('**/home', { fixture: 'home/homePage-FPLInsurancePolicy.json' })
    //     cy.intercept('**/ecom/offers?type=insuranceHomeBanner', { fixture: 'insurance/buyPolicyPage-Banner.json' })
    //     cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage-MyPolicies.json' })
    //     cy.intercept('**/vasins/policies/userpolicy', { fixture: 'insurance/myPoliciesPage-RaiseCliam.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickIconInsurance()
    //     insuranceBuyPolicyListPage.clickMyPoliciesLink()
    //     myPoliciesPage.verifyPageTitle('My Policies')
    //     myPoliciesPage.verifyPolicyIssuedLabel('Issued')
    //     myPoliciesPage.verifyRaiseClaimButton('Raise Claim')
    //     myPoliciesPage.clickRaiseClaimButton()

    // })
    it('KB-T6003 Verify if pop up is displayed to confirm if the user wants to cancel the policy, when she/he clicks on "Cancel Policy" option for issued policy.',()=>{
            cy.intercept('**/home', { fixture: 'home/homePage-FPLInsurancePolicy.json' })
            cy.intercept('**/ecom/offers?type=insuranceHomeBanner', { fixture: 'insurance/buyPolicyPage-Banner.json' })
            cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage-MyPolicies.json' })
            cy.intercept('**/vasins/policies/userpolicy', { fixture: 'insurance/myPoliciesPage-CancelPolicy.json' })
            cy.intercept('**/vasins/policies/cancel', { fixture: '/insurance/policyPage-CancelPolicy.json' })
           cy.visit('/newhome', { failOnStatusCode: false });
            homePage.clickIconInsurance()
            insuranceBuyPolicyListPage.clickMyPoliciesLink()
            myPoliciesPage.verifyPageTitle('My Policies')
            myPoliciesPage.verifyPolicyIssuedLabel('Issued')
            myPoliciesPage.clickCancelPolicyLink()
            cancelPolicyPage.verifyPageTitle('Cancel Policy')
            cancelPolicyPage.clickSelectCancellationReasonLabel()
            cancelPolicyPage.clickIDontNeedThePolicyAnymoreText()
            cancelPolicyPage.clickCheckBox()
            cancelPolicyPage.clickCancelPolicyButton()
            cancelPolicyPopUpPage.verifyPageTitle('Are you sure you want to cancel the policy')
            cancelPolicyPopUpPage.clickYesCancelPolicyButton()
        })

    // it('KB-T23988 (1.0) VD: Check if insurance is displayed under My Policies after insurance Payment is Successful',()=>{
    //     cy.intercept('**/home', { fixture: 'home/homePage-FPLInsurancePolicy.json' })
    //     cy.intercept('**/ecom/offers?type=insuranceHomeBanner', { fixture: 'insurance/buyPolicyPage-Banner.json' })
    //     cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage-MyPolicies.json' })
    //     cy.intercept('**/vasins/policies/userpolicy', { fixture: 'insurance/myPoliciesPage-RaiseCliam.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickIconInsurance()
    //     insuranceBuyPolicyListPage.clickMyPoliciesLink()
    //     myPoliciesPage.verifyPageTitle('My Policies')
    //     myPoliciesPage.verifyPolicyIssuedLabel('Issued')
    // })

    // // it('KB-T28118 (1.0)MY ACCOUNTS: Check if the policy issued successfully with the first premium for the policy.',{
    // //     retries:1,
    // // }, () => {
    // //     cy.intercept('**/home', { fixture: 'home/homePage-Insurance.json' })
    // //     cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage-Insurance.json' })
    // //     cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage.json' })
    // //     cy.intercept('**/vasins/policies/details?policy_id=**', { fixture: 'insurance/policyDetailsPage.json' })
    // //     cy.intercept('**/vasins/policies/states', { fixture: 'insurance/buyInsurancePolicyPage.json' })
    // //     cy.intercept('**/vasins/policies/userpremium?policy_id=10', { fixture: 'insurance/buyInsurancePremiumPolicyPage.json' })
    // //     cy.intercept('**/vasins/policies/paymentdetails?policy_Id=**&premium_Id=**', { fixture: 'insurance/policyPaymentDetailsPage.json' })
    // //     cy.intercept('**/vasins/policies/order',{fixture:'insurance/PaymentOptionPage.json'})
    // //     cy.intercept('**/vasins/policies/insurancereport?user_policy_id=**', { fixture: '/payments/paymentOptionPage-Pay.json' })
    // //     cy.intercept('**/vasins/vaspolicies/paymentdetails?policy_Id=10&premium_Id=**', { fixture: '/insurance/paymentOptionPage-Ins.json' })
    // //     cy.intercept('**/vasins/vaspolicies/insurancereport?user_policy_id=**', { fixture: '/insurance/paymentOptionPage-Order.json' })

    // //     cy.visitURL('/newhome')
    // //     footerPage.clickAccountIcon()
    // //     accountsPage.clickInsuranceBtn()
    // //     insuranceBuyPolicyListPage.clickGetNowBtn('Personal Accident + Hospicash (Reimbursement of Rs. 1000 per day)')
    // //     insurancePolicyDetailsPage.verifyPolicyPeriodLabel('POLICY PERIOD')
    // //     insurancePolicyDetailsPage.verifyCoverageUptoLabel('COVERAGE UPTO')
    // //     insurancePolicyDetailsPage.verifyPremiumStartsAtLabel('PREMIUM STARTS AT')
    // //     insurancePolicyDetailsPage.verifyWhatsCoveredLabel("What's Covered")
    // //     insurancePolicyDetailsPage.clickTermsAndConditionsLink()
    // //     insuranceTermsAndConditionsPage.clickInsuranceTermsAndConditionsPageBackButton()
    // //     insurancePolicyDetailsPage.clickGetInsuredInJust5MinutesButton()
    // //     insuranceBuyPolicyPage.verifySelectAPlanLabel('Select a Plan')
    // //     insuranceBuyPolicyPage.verifyCustomerInformationLabel('Customer Information')
    // //     insuranceBuyPolicyPage.verifyAddANomineeOptionalLabel('Add a nominee')
    // //     insuranceBuyPolicyPage.clickSelectAPlanRadioButton()
    // //     insuranceBuyPolicyPage.clickIAgreeToTermsAndConditionsCheckbox()
    // //     insuranceBuyPolicyPage.clickContinueButton()
    // //     insurancePolicyPaymentPage.verifyPageTitle('Payment')
    // //     insurancePolicyPaymentPage.verifyConfirmAndPayButton('Confirm and Pay')
    // //     insurancePolicyPaymentPage.clickConfirmAndPayButton()
    // //     paymentOptionPage.verifyPageTitle('Payment Option')


    // // })

    // it('2.KB-T28118 (1.0)MY ACCOUNTS: Check if the policy issued successfully with the first premium for the policy.',()=>{
    //     cy.intercept('**/home', { fixture: 'home/homePage-FPLInsurancePolicy.json' })
    //     cy.intercept('**/ecom/offers?type=insuranceHomeBanner', { fixture: 'insurance/buyPolicyPage-Banner.json' })
    //     cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage-MyPolicies.json' })
    //     cy.intercept('**/vasins/policies/userpolicy', { fixture: 'insurance/myPoliciesPage-RaiseCliam.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickIconInsurance()
    //     insuranceBuyPolicyListPage.clickMyPoliciesLink()
    //     myPoliciesPage.verifyPageTitle('My Policies')
    //     myPoliciesPage.verifyPolicyIssuedLabel('Issued')
    // })

    // // it('KB-T15732 (1.0)Check if the payment via payu when the feeType is n for the policy',{
    // //     retries:1,
    // // }, () => {
    // //     cy.intercept('**/home', { fixture: 'home/homePage-Insurance.json' })
    // //     cy.intercept('**/myaccount', { fixture: 'accounts/myAccountPage.json' })
    // //     cy.intercept('**/vasins/policies', { fixture: 'insurance/BuyPolicyPage-INS.json' })
    // //     cy.intercept('**/vasins/policies/details?policy_id=**', { fixture: 'insurance/policyDetailsPage-Insurance.json' })
    // //     cy.intercept('**/vasins/policies/states', { fixture: 'insurance/buyInsurancePolicyPage.json' })
    // //     cy.intercept('**/vasins/policies/userpremium?policy_id=**', { fixture: 'insurance/buyInsurancePremiumPolicyPage.json' })
    // //     cy.intercept('**/me/tnc/insurance', { fixture: 'insurance/insurancePoilcyDetailsPage-TNC.json' })
    // //     cy.intercept('**/vasins/policies/paymentdetails?policy_Id=**&premium_Id=**', { fixture: 'insurance/policyPaymentDetailsPage.json' })
    // //     cy.intercept('**/vasins/policies/order',{fixture:'insurance/paymentOptionPage-Order.json'})
    // //     cy.intercept('**/vasins/policies/insurancereport?user_policy_id=**', { fixture: '/payments/paymentOptionPage-Pay.json' })
    // //         cy.intercept('**/vasins/vaspolicies/paymentdetails?policy_Id=10&premium_Id=**', { fixture: '/insurance/paymentOptionPage-Ins.json' })
    // //         cy.intercept('**/vasins/vaspolicies/insurancereport?user_policy_id=**', { fixture: '/insurance/paymentOptionPage-Order.json' })

    // //    cy.visit('/newhome', { failOnStatusCode: false });
    // //     footerPage.clickAccountIcon()
    // //     accountsPage.clickInsuranceBtn()
    // //     insuranceBuyPolicyListPage.clickGetNowBtn('Personal Accident + Hospicash (Reimbursement of Rs. 1000 per day)')
    // //     insurancePolicyDetailsPage.verifyPolicyPeriodLabel('POLICY PERIOD')
    // //     insurancePolicyDetailsPage.verifyCoverageUptoLabel('COVERAGE UPTO')
    // //     insurancePolicyDetailsPage.verifyPremiumStartsAtLabel('PREMIUM STARTS AT')
    // //     insurancePolicyDetailsPage.verifyWhatsCoveredLabel("What's Covered")
    // //     insurancePolicyDetailsPage.clickGetInsuredInJust5MinutesButton()
    // //     insuranceBuyPolicyPage.verifySelectAPlanLabel('Select a Plan')
    // //     insuranceBuyPolicyPage.verifyCustomerInformationLabel('Customer Information')
    // //     insuranceBuyPolicyPage.verifyAddANomineeOptionalLabel('Add a nominee')
    // //     insuranceBuyPolicyPage.clickSelectAPlanRadioButton()
    // //     insuranceBuyPolicyPage.clickIAgreeToTermsAndConditionsCheckbox()
    // //     insuranceBuyPolicyPage.clickContinueButton()
    // //     insurancePolicyPaymentPage.verifyPageTitle('Payment')
    // //     insurancePolicyPaymentPage.verifyConfirmAndPayButton('Confirm and Pay')
    // //     insurancePolicyPaymentPage.clickConfirmAndPayButton()
    // //     paymentOptionPage.verifyPageTitle('Payment Option')
    // // })

    // it('KB-T21042 (1.0)Check if the Cancel Button should only be visible from policy start date and time in my policies page', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-ICICIInsurancePolicy.json' })
    //     cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage-Insurance.json' })
    //     cy.intercept('**/ecom/offers?type=insuranceHomeBanner', { fixture: 'insurance/buyPolicyPage-BannerICICI.json' })
    //     cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage-MyPoliciesICICI.json' })
    //     cy.intercept('**/vasins/policies/userpolicy', { fixture: 'insurance/myPoliciesPage-ICICI-CancelPolicy.json' })
    //     cy.intercept('**/vasins/policies/cancel', { fixture: 'insurance/cancelPolicyPage-ICICI.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     footerPage.clickAccountIcon()
    //     accountsPage.clickInsuranceBtn()
    //     insuranceBuyPolicyListPage.clickMyPoliciesLink()
    //     myPoliciesPage.verifyCancelPolicyLink('Cancel Policy')
    // })

    // it('1.KB-T43105 (1.0)ACKO CREDITSHIELD DISBURSAL: Check if the Cover and premium amount is displayed correctly for the Insurance and loan disbursed successfully with PK-SA', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-20kSA.json' })
    //     cy.intercept('**/preloanre?productId=5&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash', { fixture: 'preLoanRE/preloanREPage-SA.json' })
    //     cy.intercept('**/products/calcfees?productid=**&loanamt=**&tenure=*', { fixture: 'loan/sa/loanAmountDetailsPage-WaitScreen.json' })
    //     cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/viewSummayAndChargesPage.json' })
    //     cy.intercept('**/ins/policies/details?premium_id=**', { fixture: 'insurance/premiumDetailsPage.json' })
    //     cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
    //     cy.intercept('**/loan/la?updateMFILimit=0&productid=5&pointType=&csrFee=2', { fixture: 'loan/sa/signLoanDocumentPage.json' })
    //     cy.intercept('**/loan/la?type=kb&productid=**', { fixture: 'loan/sa/sanctionLetterPage.json' })
    //     cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/sa/loanSanctionLetterPage.json' })
    //     cy.intercept('**/me/tnc/loanSignService', { fixture: 'loan/sa/signServicePage.json' })
    //     cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otpPage-SignService.json' })
    //     cy.intercept('**/me?source=session', { fixture: 'loan/sa/loanApplicationSubmittedPage.json' })
    //     cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'loan/sa/otpPage-otpsubmit.json' })
    //     cy.intercept('**/me/loan', { fixture: 'loan/sa/LoanApplicationSubmittedPage-applSubmitted.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickSA20KGetNowBtn()
    //     saLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
    //     saLoanAmountDetailsPage.clickKnowMoreLink()
    //     insuranceDetailsPage.verifyCoverageUptoLabel('COVERAGE UPTO')
    //     insuranceDetailsPage.verifyInsuranceCoverageValue('6,200')
    //     insuranceDetailsPage.verifyOneTimePremiumLabel('ONE TIME PREMIUM')
    //     insuranceDetailsPage.verifyOneTimePremiumValue('73')
    //     insuranceDetailsPage.clickOkBtn()
    //     saLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
    //     repaymentSchedulePage.clickContinueBtn()
    //     loanPurposePage.selectLoanPurpose('Medical expenses')
    //     loanPurposePage.clickContinueBtn()
    //     selectBankAccountPage.clickContinueBtn()
    //     signLoanDocumentPage.verifyPageTitle('Sign Loan Document')
    //     signLoanDocumentPage.clickContinueBtn()
    //     kfsSanctionLetterPage.verifypageTitle('KFS & Sanction letter')
    //     kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
    //     kfsSanctionLetterPage.verifyLenderNameText('Krazybee Services Private Limited.')
    //     kfsSanctionLetterPage.verifyConsentSanctionLetterText('I have read and understood the Key Fact Statement and Sanction Letter issued by the Lender(s) in respect of my loan application and I accept the same. I also understand and agree to continue receiving promotional communication from the Lenders and in respect of the value added services being offered by KreditBee.')
    //     kfsSanctionLetterPage.selectBoxSanctionLetter('Continue to Sign Loan Document')
    //     kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
    //     kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
    //     signDocumentPage.verifyPageTitle('Sign Document')
    //     signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
    //     signDocumentPage.verifyContinueText('Continue')
    //     signDocumentPage.clickContinueButton()
    //     signServicePage.clickConsentReadText()
    //     signServicePage.clickConsentUnderstoodText()
    //     signServicePage.clickConsentLegalAndBindingText()
    //     signServicePage.clickContinueButton()
    //     signServiceOTPInputPage.enterOTP('395389')
    //     loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
    // })

    // it('2.KB-T43105 (1.0)ACKO CREDITSHIELD DISBURSAL: Check if the Cover and premium amount is displayed correctly for the Insurance and loan disbursed successfully with PK-SA', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-SAInsurancePolicy.json' })
    //     cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage-MyPolicies.json' })
    //     cy.intercept('**/vasins/policies/userpolicy', { fixture: 'insurance/myPoliciesPage.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickIconInsurance()
    //     insuranceBuyPolicyListPage.clickMyPoliciesLink()
    //     myPoliciesPage.verifyPageTitle('My Policies')
    //     myPoliciesPage.verifyPolicyIssuedLabel('Issued')
    // })

    // // it('1-KB-T43013 ACKO CREDITSHIELD LOAN: Check if the policy is issued for Acko Creditshield policy',()=>{
    // //     cy.intercept('**/home', { fixture: 'home/homePage-6.2kFPL.json' })
    // //     cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-6.2k.json' })
    // //     cy.intercept('**/preloanre?productId=14&action=getNow&prIeLoanEvent=preLoanGetNowClick&src=cash', { fixture: 'loan/fpl/fpl6.2KPreloanREPage.json' })
    // //     cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/viewSummayAndChargesPage.json' })
    // //     cy.intercept('**/products/calcfees?productid=14&loanamt=6200&tenure=4', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
    // //     cy.intercept('**/ins/policies/details?premium_id=**', { fixture: 'insurance/premiumDetailsPage-FPL.json' })
    // //     cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
    // //     cy.intercept('**/loan/la?updateMFILimit=0&productid=5&pointType=&csrFee=2', { fixture: 'loan/sa/signLoanDocumentPage.json' })
    // //     cy.intercept('**/loan/la?type=kb&productid=**', { fixture: 'loan/sa/sanctionLetterPage.json' })
    // //     cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/sa/loanSanctionLetterPage.json' })
    // //     cy.intercept('**/me/tnc/loanSignService', { fixture: 'loan/sa/signServicePage.json' })
    // //     cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otpPage-SignService.json' })
    // //     cy.intercept('**/me?source=session', { fixture: 'loan/sa/loanApplicationSubmittedPage.json' })
    // //     cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'loan/sa/otpPage-otpsubmit.json' })
    // //     cy.intercept('**/me/loan', { fixture: 'loan/sa/LoanApplicationSubmittedPage-applSubmitted.json' })
    // //    cy.visit('/newhome', { failOnStatusCode: false });
    // //     homePage.clickBlock2Btn()
    // //     fplPage.clickFPL4KGetNowBtn()
    // //     fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
    // //     fplLoanAmountDetailsPage.clickInsuranceKnowMoreLink()
    // //     insuranceDetailsPage.verifyCoverageUptoLabel('COVERAGE UPTO')
    // //     insuranceDetailsPage.verifyInsuranceCoverageValue('6,200')
    // //     insuranceDetailsPage.verifyOneTimePremiumLabel('ONE TIME PREMIUM')
    // //     insuranceDetailsPage.verifyOneTimePremiumValue('73')
    // //     insuranceDetailsPage.clickOkBtn()
    // //     fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
    // //     repaymentSchedulePage.clickContinueBtn()
    // //     loanPurposePage.selectLoanPurpose('Medical expenses')
    // //     loanPurposePage.clickContinueBtn()
    // //     selectBankAccountPage.clickContinueBtn()
    // //     signLoanDocumentPage.verifyPageTitle('Sign Loan Document')
    // //     signLoanDocumentPage.clickContinueBtn()
    // //     kfsSanctionLetterPage.verifypageTitle('KFS & Sanction letter')
    // //     kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
    // //     kfsSanctionLetterPage.verifyLenderNameText('Krazybee Services Private Limited.')
    // //     kfsSanctionLetterPage.verifyConsentSanctionLetterText('I have read and understood the Key Fact Statement and Sanction Letter issued by the Lender(s) in respect of my loan application and I accept the same. I also understand and agree to continue receiving promotional communication from the Lenders and in respect of the value added services being offered by KreditBee.')
    // //     kfsSanctionLetterPage.selectBoxSanctionLetter('Continue to Sign Loan Document')
    // //     kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
    // //     kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
    // //     signDocumentPage.verifyPageTitle('Sign Document')
    // //     signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
    // //     signDocumentPage.verifyContinueText('Continue')
    // //     signDocumentPage.clickContinueButton()
    // //     signServicePage.clickConsentReadText()
    // //     signServicePage.clickConsentUnderstoodText()
    // //     signServicePage.clickConsentLegalAndBindingText()
    // //     signServicePage.clickContinueButton()
    // //     signServiceOTPInputPage.enterOTP('395389')
    // // })

    // it('2-KB-T43013 ACKO CREDITSHIELD LOAN: Check if the policy is issued for Acko Creditshield policy', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-FPLInsurancePolicy.json' })
    //     cy.intercept('**/ecom/offers?type=insuranceHomeBanner', { fixture: 'insurance/buyPolicyPage-Banner.json' })
    //     cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage-MyPolicies.json' })
    //     cy.intercept('**/vasins/policies/userpolicy', { fixture: 'insurance/myPoliciesPage-RaiseCliam.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickIconInsurance()
    //     insuranceBuyPolicyListPage.clickMyPoliciesLink()
    //     myPoliciesPage.verifyPageTitle('My Policies')
    //     myPoliciesPage.verifyPolicyIssuedLabel('Issued')
    //     myPoliciesPage.verifyRaiseClaimButton('Raise Claim')   
    // }) 

    // it('KB-T41146 (1.0)check flat type processing fee is applied for the loan, based on the loan amount', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-FPLMFIband.json' })
    //     cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-5k.json' })
    //     cy.intercept('**/preloanre?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
    //     cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/Amount6k-Tenure3-MLA-subbandGood.json' })
    //     cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickBlock2Btn()
    //     fplPage.verifyPageTitle('Flexi Personal Loan')
    //     fplPage.clickFPL4KGetNowBtn()
    //     fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
    //     fplLoanAmountDetailsPage.verifyRepaymentShedulePageButton()
    //     fplLoanAmountDetailsPage.verifyProcessingFee()

    // })

    // it('1.KB-T55764 (1.0) Ensure User can Activate Checkout from homepage when EWA loan is active', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-PurchaseLoan.json' })
    //     cy.intercept('**/checkout/topmerchants?onlineBannerCount=25&offlineBannerCount=25', { fixture: 'loan/purchaseLoan-Banner.json' })
    //     cy.intercept('**/me/bank?productid=**', { fixture: 'loan/purchaseLoanPage.json' })
    //     cy.intercept('**/main/me/tnc/loan_bank_add', { fixture: 'bank/addBankAccountPage-PurchaseLoan.json' })
    //     cy.intercept('**/me/bank', { fixture: 'bank/BankAccountVerificationPage-BankAdded.json' })
    //     //cy.intercept('**/misc/bank?ifsc=**', { fixture: 'bank/bankAccountVerificationPage-IFSCSearchResult.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickActiveNowButton()
    //     purchaseLoanPage.clickActiveNowButton()
    //     addBankAccountPage.enterIFSC('CBIN0283979')
    //     addBankAccountPage.enterAccountNumber('3379955585')
    //     addBankAccountPage.enterConfirmAccountNumber('3379955585')
    //     addBankAccountPage.clickAddAccountBtn()
    //     bankAccountVerificationPage.verifyPageTitle('Account verification')
    //     bankAccountVerificationPage.clickContinueBtn()
    // })

    // it('2.KB-T55764 (1.0)Ensure User can Activate Checkout from homepage when EWA loan is active', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-BankAdded.json' })
    //     cy.intercept('**/myaccount', { fixture: 'accounts/accountPage-BankAdded.json' })
    //     cy.intercept('**/bank', { fixture: 'bank/bankAccountPage-BankAdded.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.verifyProcessingText('PROCESSING')
    //     footerPage.clickAccountIcon()
    //     accountsPage.clickBankAccountsBtn()
    //     bankAccountsPage.verifyPageTitle('Bank Accounts')
    //     bankAccountsPage.verifyAccountNumberValue('XXXXXXX5585')
    // })

    // it('KB-T15712 (1.0)Check whether the Terms and Conditions hyperlink is present and working for I agree checkbox in Buy policy page', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-Insurance.json' })
    //     cy.intercept('**/myaccount', { fixture: 'accounts/myAccountPage.json' })
    //     cy.intercept('**/vasins/policies', { fixture: 'insurance/BuyPolicyPage-INS.json' })
    //     cy.intercept('**/vasins/policies/details?policy_id=**', { fixture: 'insurance/policyDetailsPage-Insurance.json' })
    //     cy.intercept('**/vasins/policies/states', { fixture: 'insurance/buyInsurancePolicyPage.json' })
    //     cy.intercept('**/vasins/policies/userpremium?policy_id=**', { fixture: 'insurance/buyInsurancePremiumPolicyPage.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     footerPage.clickAccountIcon()
    //     accountsPage.clickInsuranceBtn()
    //     insuranceBuyPolicyListPage.verifyPageTitle('Buy Policy')
    //     insuranceBuyPolicyListPage.clickGetNowBtn('Personal Accident + Hospicash (Reimbursement of Rs.')
    //     insurancePolicyDetailsPage.verifyInsurancePolicyDetailTitle('Personal Accident + Hospicash (Reimbursement of Rs. ')
    //     insurancePolicyDetailsPage.verifyPolicyPeriodLabel('POLICY PERIOD')
    //     insurancePolicyDetailsPage.verifyCoverageUptoLabel('COVERAGE UPTO')
    //     insurancePolicyDetailsPage.verifyPremiumStartsAtLabel('PREMIUM STARTS AT')
    //     insurancePolicyDetailsPage.verifyWhatsCoveredLabel("What's Covered")
    //     insurancePolicyDetailsPage.clickTermsAndConditionsLink()
    //     insuranceTermsAndConditionsPage.verifyInsuranceTermsAndConditionsPageTitle('Terms & Conditions')
    // })

    // // it('KB-T60522 (1.0)Check if the payment via Debit Card payment for the policy', () => {
    // //     cy.intercept('**/home', { fixture: 'home/homePage-Insurance.json' })
    // //     cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage-Insurance.json' })
    // //     cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage.json' })
    // //     cy.intercept('**/vasins/policies/details?policy_id=**', { fixture: 'insurance/policyDetailsPage.json' })
    // //     cy.intercept('**/vasins/policies/states', { fixture: 'insurance/buyInsurancePolicyPage.json' })
    // //     cy.intercept('**/vasins/policies/userpremium?policy_id=**', { fixture: 'insurance/buyInsurancePremiumPolicyPage.json' })
    // //     //  cy.intercept('**/vasme/tnc/insurance', { fixture: 'insurance/insurancePolicyDetailsPage-tnc.json' })
    // //     cy.intercept('**/vasins/policies/paymentdetails?policy_Id=**&premium_Id=**', { fixture: 'insurance/policyPaymentDetailsPage.json' })
    // //     cy.intercept('**/vasins/policies/order', { fixture: '/insurance/paymentOptionPage-Order.json' })
    // //     cy.intercept('**/vasins/policies/insurancereport?user_policy_id=**', { fixture: '/payments/paymentOptionPage-Pay.json' })
    // //     cy.intercept('**/vasins/vaspolicies/paymentdetails?policy_Id=10&premium_Id=**', { fixture: '/insurance/paymentOptionPage-Ins.json' })
    // //     cy.intercept('**/vasins/vaspolicies/insurancereport?user_policy_id=**', { fixture: '/insurance/paymentOptionPage-Order.json' })
    // //    cy.visit('/newhome', { failOnStatusCode: false });
    // //     footerPage.clickAccountIcon()
    // //     accountsPage.clickInsuranceBtn()
    // //     cy.wait(4000)
    // //     insuranceBuyPolicyPage.clickGetNowBtn('Personal Accident + Hospicash (Reimbursement of Rs. 1000 per day)')
    // //     insurancePolicyDetailsPage.clickGetInsuredInJust5MinutesButton()
    // //     insuranceBuyPolicyPage.clickSelectAPlanRadioButton()
    // //     insuranceBuyPolicyPage.clickIAgreeToTermsAndConditionsCheckbox()
    // //     insuranceBuyPolicyPage.clickContinueButton()
    // //     insurancePolicyPaymentPage.verifyPageTitle('Payment')
    // //     insurancePolicyPaymentPage.verifyConfirmAndPayButton('Confirm and Pay')
    // //     insurancePolicyPaymentPage.clickConfirmAndPayButton()
    // //     cy.wait(5000)
    // //     paymentOptionPage.clickPayWithDebitCard()
    // // })
    // // it('KB-T60522 (1.0)Check if the payment via Debit Card payment for the policy', () => {
    // //      cy.intercept('**/home', { fixture: 'home/homePage-FPLInsurancePolicy.json' })
    // //      cy.intercept('**/ecom/offers?type=insuranceHomeBanner', { fixture: 'insurance/buyPolicyPage-Banner.json' })
    // //      cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage-MyPolicies.json' })
    // //      cy.intercept('**/vasins/policies/userpolicy', { fixture: 'insurance/myPoliciesPage-Requested.json' })
    // //    cy.visit('/newhome', { failOnStatusCode: false });
    // //     homePage.clickIconInsurance()
    // //     insuranceBuyPolicyListPage.clickMyPoliciesLink()
    // //     myPoliciesPage.verifyPageTitle('My Policies')
    // //     myPoliciesPage.verifyPolicyRequestedLabel('Requested')
    // // })

    // // it('KB-T60523 (1.0)Check if the payment via Net Banking payment for the policy', () => {
    // //     cy.intercept('**/home', { fixture: 'home/homePage-Insurance.json' })
    // //     cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage-Insurance.json' })
    // //     cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage.json' })
    // //     cy.intercept('**/vasins/policies/details?policy_id=**', { fixture: 'insurance/policyDetailsPage.json' })
    // //     cy.intercept('**/vasins/policies/states', { fixture: 'insurance/buyInsurancePolicyPage.json' })
    // //     cy.intercept('**/vasins/policies/userpremium?policy_id=**', { fixture: 'insurance/buyInsurancePremiumPolicyPage.json' })
    // //     //  cy.intercept('**/vasme/tnc/insurance', { fixture: 'insurance/insurancePolicyDetailsPage-tnc.json' })
    // //     cy.intercept('**/vasins/policies/paymentdetails?policy_Id=**&premium_Id=**', { fixture: 'insurance/policyPaymentDetailsPage.json' })
    // //     cy.intercept('**/vasins/policies/order', { fixture: '/insurance/paymentOptionPage-Order.json' })
    // //     cy.intercept('**/vasins/policies/insurancereport?user_policy_id=**', { fixture: '/payments/paymentOptionPage-Pay.json' })
    // //     cy.intercept('**/vasins/vaspolicies/paymentdetails?policy_Id=10&premium_Id=**', { fixture: '/insurance/paymentOptionPage-Ins.json' })
    // //     cy.intercept('**/vasins/vaspolicies/insurancereport?user_policy_id=**', { fixture: '/insurance/paymentOptionPage-Order.json' })
    // //    cy.visit('/newhome', { failOnStatusCode: false });
    // //     footerPage.clickAccountIcon()
    // //     accountsPage.clickInsuranceBtn()
    // //     cy.wait(4000)
    // //     insuranceBuyPolicyPage.clickGetNowBtn('Personal Accident + Hospicash (Reimbursement of Rs. 1000 per day)')
    // //     insurancePolicyDetailsPage.clickGetInsuredInJust5MinutesButton()
    // //     insuranceBuyPolicyPage.clickSelectAPlanRadioButton()
    // //     insuranceBuyPolicyPage.clickIAgreeToTermsAndConditionsCheckbox()
    // //     insuranceBuyPolicyPage.clickContinueButton()
    // //     insurancePolicyPaymentPage.verifyPageTitle('Payment')
    // //     insurancePolicyPaymentPage.verifyConfirmAndPayButton('Confirm and Pay')
    // //     insurancePolicyPaymentPage.clickConfirmAndPayButton()
    // //     cy.wait(5000)
    // //     paymentOptionPage.clickPayWithDebitCard()
    // // })

    // // it('KB-T60523 (1.0)Check if the payment via Net Banking payment for the policy', () => {
    // //      cy.intercept('**/home', { fixture: 'home/homePage-FPLInsurancePolicy.json' })
    // //      cy.intercept('**/ecom/offers?type=insuranceHomeBanner', { fixture: 'insurance/buyPolicyPage-Banner.json' })
    // //      cy.intercept('**/vasins/policies', { fixture: 'insurance/buyPolicyPage-MyPolicies.json' })
    // //      cy.intercept('**/vasins/policies/userpolicy', { fixture: 'insurance/myPoliciesPage-Requested.json' })
    // //    cy.visit('/newhome', { failOnStatusCode: false });
    // //     homePage.clickIconInsurance()
    // //     insuranceBuyPolicyListPage.clickMyPoliciesLink()
    // //     myPoliciesPage.verifyPageTitle('My Policies')
    // //     myPoliciesPage.verifyPolicyRequestedLabel('Requested')
    // // })

    // it('KB-T42993 (1.0)ACKO CREDITSHIELD LOAN: Check if the user is eligible for insurance policy Premium then, user is able see the policy in loan amount page', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-InsuranceDetails.json' })
    //     cy.intercept('**/category?name=fpl*', { fixture: 'loan/fpl/fplPage-6.2k.json' })
    //     cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/viewSummayAndChargesPage.json' })
    //     cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
    //     cy.intercept('**/ins/policies/details?premium_id=**', { fixture: 'insurance/insuranceDetailsPage-ACKO.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickFPL8KGetNow()
    //     fplPage.clickFPL4KGetNowBtn()
    //     fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
    //     fplLoanAmountDetailsPage.clickInsuranceKnowMoreLink()
    //     insuranceDetailsPage.verifyPageTitle('Insurance details')
    //     insuranceDetailsPage.verifyInsurerText('Acko General Insurance Limited')
    //     insuranceDetailsPage.verifyPolicyPeriodLabel('POLICY PERIOD')
    //     insuranceDetailsPage.verifyCoverageUptoLabel('COVERAGE UPTO')
    //     insuranceDetailsPage.verifyOneTimePremiumLabel('ONE TIME PREMIUM')
    // })

    // it('KB-T44511 (1.0)When Profile is Rejected in Profile, ensure Reject String is shown in Homepage with Date = Reject Datetime + reapplyWindowForEligibilityProfileRejectUsers.', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-Rejected.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.verifyWarningLabel('We are unable to process your loan at this time either due to certain anomalies in your profile or due to bad repayment behaviour. We suggest you improve your credit profile and retry with us after 6 months')
    // })
    // it('KB-T44510 (1.0)When Profile is Rejected in Eligibility, ensure Reject String is shown in Homepage with Date = Reject Datetime + reapplyWindowForEligibilityProfileRejectUsers', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-Rejected.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.verifyWarningLabel('We are unable to process your loan at this time either due to certain anomalies in your profile or due to bad repayment behaviour. We suggest you improve your credit profile and retry with us after 6 months')
    // })
    // it('KB-T30863 (2.0)Check whether any error is displayed when user enters invalid email domain or emial user <5 character', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-50Percent.json' })
    //     cy.intercept('**/me', { fixture: 'onBoarding/profile/profileInformationPage-KYCCompleted.json' })
    //     cy.intercept('**/me/substateinfo', { fixture: 'onBoarding/profile/profileInformationPage-substateInfo.json' })
    //     cy.intercept('**/me?type=info', { fixture: 'onBoarding/profile/generalInformation-emailVerificationStatus-NotPresent.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickContinueApplicationBtn()
    //     profileInformationPage.clickGeneralInformation()
    //     generalInformationPage.enterEmailInput('x@xxx.com')
    //     generalInformationPage.clickButtonSubmit()
    //     generalInformationPage.VerifyInvaildEmailText('Invalid Email address')
    // })

    // // it('KB-T45816 Verify whether the address fields will be displayed when the user unselects the same as the KYC document checkbox in current addresss section', () => {
    // //     cy.intercept('**/main/misc/pincode?pincode=**', { fixture: 'onBoarding/profile/generalInformation-pincodeEnable.json' })
    // //     generalInformationPage.verifyPageTitle('General Information')
    // //     generalInformationPage.clickSameAsKYCDocumentCheckBox()
    // //     generalInformationPage.verifyUploadAnAddressProofDocLink()
    // //     generalInformationPage.verifyAddressLine1Input('')
    // //     generalInformationPage.verifyAddressLine1Input('')
    // // })

    // it('KB-T45365 [Profile Information] Check "verify Income" is enabled after submission of general information', () => {
    //     cy.intercept('**/main/home', { fixture: 'home/homepage-continueApplicationGeneralInfo-MailIDPresent.json' })
    //     cy.intercept('**/me/substateinfo', { fixture: 'onBoarding/profile/generalInformation-Substate-MailIDEnable.json' })
    //     cy.intercept('**/me', { fixture: 'onBoarding/profile/generalInformation-me-MailIDEnable.json' })
    //     cy.intercept('**/me?type=info', { fixture: 'onBoarding/profile/generalInformation-TypeInfo-personalInfo.json' })
    //     cy.intercept('**/misc/pincode?pincode=**', { fixture: 'onBoarding/profile/generalInformation-pincodeEnable.json' })

    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     applicationStatusPage.clickContinueApplicationButton()
    //     profileInformationPage.verifyGeneralInformationlabel('General Information')
    //     profileInformationPage.clickGeneralInformation()
    //     generalInformationPage.verifyprofessionOrOccupationDropDown()
    //     generalInformationPage.clickprofessionOrOccupationDropDown()
    //     generalInformationPage.verifyProfessionOrOccupationDropDownLabel()
    //     generalInformationPage.clickProfessionOrOccupationDropDownList()
    //     generalInformationPage.clickContinuebutton()
    //     cy.intercept('**/me/substateinfo', { fixture: 'onBoarding/profile/profileInformationPage-VerifyIncome-Substate1.json' })
    //     cy.intercept('**/me', { fixture: 'onBoarding/profile/profileInformationpage-VerifyIncome-Me1.json' })
    //     cy.visit('/profile/summary', { failOnStatusCode: false });
    //     profileInformationPage.verifyIncomeVerifyLabel('Verify Income')
    //     profileInformationPage.verifyIncomeVerificationEnabled()
    // })

    // it('KB-T12033 (1.0)Check whether the purpose field is as selected by the customer in Sanction letter', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-6.2kFPL.json' })
    //     cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-6.2k.json' })
    //     cy.intercept('**/preloanre?productId=14&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash', { fixture: 'loan/fpl/fpl6.2KPreloanREPage.json' })
    //     cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/viewSummayAndChargesPage.json' })
    //     cy.intercept('**/products/calcfees?productid=14&loanamt=6200&tenure=**', { fixture: 'loan/fpl/fplLoanAmountDetailsPage-FeesCalculation.json' })
    //     cy.intercept('**/me/bank?productid=**', { fixture: 'bank/selectBankAccountPage-BankSelected.json' })
    //     cy.intercept('**/loan/la?updateMFILimit=0&productid=5&pointType=&csrFee=**', { fixture: 'loan/sa/signLoanDocumentPage.json' })
    //     cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
    //     cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-CHOLA.json' })
    //     cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/sa/loanSanctionLetterPage.json' })
    //     cy.intercept('**/me?source=session', { fixture: 'loan/sa/loanApplicationSubmittedPage.json' })

    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickBlock2Btn()
    //     fplPage.clickFPL4KGetNowBtn()
    //     fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
    //     fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
    //     repaymentSchedulePage.clickContinueBtn()
    //     loanPurposePage.selectLoanPurpose('Medical expenses')
    //     loanPurposePage.clickContinueBtn()
    //     selectBankAccountPage.clickContinueBtn()
    //     signLoanDocumentPage.verifyPageTitle('Sign Loan Document')
    //     signLoanDocumentPage.clickDigitalSignButton()
    //     signLoanDocumentPage.clickContinueBtn()
    //     kfsSanctionLetterPage.verifypageTitle('KFS & Sanction letter')
    //     kfsSanctionLetterPage.verifyScanctionLetterImage()
    // })
    // it('KB-T39981 (1.0)Check whether list of all mandates are shown when clicked Auto Debit mandates in the account page', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-AutoDebit.json' })
    //     cy.intercept('**/accounts', { fixture: 'accounts/accountsPage.json' })
    //     cy.intercept('**/me/nachmandate', { fixture: 'accounts/autoDebits/autoDebitMandidatesPage.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     footerPage.clickAccountIcon()
    //     accountsPage.clickAutoDebitMandateBtn()
    //     autoDebitMandidatesPage.verifyPageTitle('Auto Debit Mandates')
    //     autoDebitMandidatesPage.verifyCancellationProcessText('Cancellation Processing')
    //     autoDebitMandidatesPage.verifyActiveText('Active')
    //     autoDebitMandidatesPage.verifyCancelledText('Cancelled')
    // })
})