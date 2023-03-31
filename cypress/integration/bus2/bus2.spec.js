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
import { saLoanAmountTenurePage } from "../../pages/loan/sa/SALoanAmountTenurePage"
import { saLoanAmountDetailsPage } from "../../pages/loan/sa/SALoanAmountDetailsPage"

//insurance 
import { purchaseLoanPage } from "../../pages/loan/PurchaseLoanPage"
import { addBankAccountPage } from "../../pages/bank/AddBankAccountPage"
import { bankAccountVerificationPage } from "../../pages/bank/BankAccountVerificationPage"
import { footerPage } from "../../pages/generic/FooterPage"
import { accountsPage } from "../../pages/accounts/AccountsPage"


//Profile status
import { generalInformationPage } from "../../pages/onboarding/profile/generalInformation/GeneralInformationPage"
import { profileInformationPage } from "../../pages/onboarding/profile/ProfileInformationPage"
import { applicationStatusPage } from "../../pages/onboarding/profile/ApplicationStatusPage"
import { assessingLoanEligibilityPage } from "../../pages/onboarding/profile/AssessingLoanEligibilityPage";
import { searchCompanyNamePage } from "../../pages/onboarding/eligibility/SearchCompanyNamePage";
import { incomeDetailsPage } from "../../pages/onboarding/eligibility/IncomeDetailsPage";
import { panInputPage } from "../../pages/onboarding/eligibility/PanInputPage";
import { loaderScreenPage } from "../../pages/generic/LoaderScreenPage";
import { kycDocumentsPage } from "../../pages/onboarding/profile/kyc/KYCDocumentsPage";
import { referencesPage } from "../../pages/onboarding/profile/referenceContacts/ReferencesPage";
import { profileStatusPage } from "../../pages/onboarding/profile/ProfileStatusPage";

//account

import { headerPage } from "../../pages/generic/HeaderPage"
import { referAndEarn } from "../../pages/accounts/referAndEarn"
import { kbPointsPage } from "../../pages/accounts/KBPointsPage"
import { redeemonProcessingFeePage } from "../../pages/accounts/RedeemOnProcessingFeePopPage"
import { availableCreditLimitPage } from "../../pages/extraDetails/AvailableCreditLimitPage"
import { profileReverificationPage } from "../../pages/extraDetails/profile-ReverificationPage"
import { verifyHouseholdIncomePage } from "../../pages/extraDetails/verifyHouseholdIncomePage"
import { repaymentPage } from "../../pages/repayments/RepaymentPage"


//csr

import { bankAccountDetailsPage } from "../../pages/bank/BankAccountDetailsPage"


//header
import { help } from "../../pages/help/helpPage"
import { pdVerifyingDetailsPage } from "../../pages/pd/PDVerifyingDetailsPage"
import { paymentOptionPage } from "../../pages/payments/PaymentOptionPage"
import { verifyWorkEmailInfoPage } from "../../pages/pd/basicDetails/verifyWorkEmail/VerifyWorkEmailInfoPage"
import { verifyWorkEmailPage } from "../../pages/pd/basicDetails/verifyWorkEmail/verifyWorkEmailPage"
import { verifyWorkEmailOTPInputPage } from "../../pages/pd/basicDetails/verifyWorkEmail/VerifyWorkEmailOTPInputPage"
import { saVerifyWorkEmailRefreshPage } from "../../pages/loan/sa/SAVerifyWorkEmailRefreshPage"

//PD
import { pdPage, PDPage } from "../../pages/pd/PDPage"
import { businessDetailsPage } from "../../pages/pd/businessDetails/businessDetailsPage";
import { uploadGSTR3BPage } from "../../pages/pd/businessDetails/uploadGSTR3BPage";
import { assetValidationPage } from "../../pages/pd/assetValidation/AssetValidationPage"
import { selectServiceProviderPage } from "../../pages/pd/assetValidation/SelectServiceProviderPage"
import { verifyElectricityConnectionInfoPage } from "../../pages/pd/assetValidation/VerifyElectricityConnecitonInfoPage"
import { verifyElectricityConnectionPage } from "../../pages/pd/assetValidation/VerifyElectricityConnectionPage"
import { incomeVerificationPage } from "../../pages/pd/incomeVerification/IncomeVerificationPage"
import { itrvValiationInfoPage } from "../../pages/pd/incomeVerification/ITR5ValiationInfoPage"
import { itrvValdiationPage } from "../../pages/pd/incomeVerification/ITR5ValdiationPage"
import { basicDetailsPage } from "../../pages/pd/basicDetails/basicDetailsPage";
import { verifyCommunicationAddressSteps } from "../../pages/pd/basicDetails/verifyCommunicationAddress/VerifyCommunicationAddressSteps";
import { verifyConfirmAddressDetails } from "../../pages/pd/basicDetails/VerifyCommunicationAddress/VerifyConfirmAddressDetails";
import { mobileTrustScoreInfoPage } from "../../pages/pd/basicDetails/verifyMobileTrustScore/MobileTrustScoreInfoPage";
import { mobileLetterOfContext } from "../../pages/pd/basicDetails/verifyMobileTrustScore/MobileLetterOfContext";
import { mobileTrustOTPInputPage } from "../../pages/pd/basicDetails/verifyMobileTrustScore/MobileTrustScoreOTPInputPage";
import { emailVerifyingDetailsPage } from "../../pages/pd/basicDetails/verifyWorkEmail/emailVerifyingDetailsPage";
import { calculatingCreditLimitPage } from "../../pages/extraDetails/calculatingCreditLimitpage";
import { autoDebitSetupPage } from "../../pages/pd/autoDebitSetup/AutoDebitSetupPage";
import { autoDebitSetupInfoPage } from "../../pages/pd/autoDebitSetup/AutoDebitSetupInfoPage";
import { autoDebitOptionsInfoPage } from "../../pages/pd/autoDebitSetup/AutoDebitOptionsInfoPage";
import { nachAutoDebitSetupPage, NACHAutoDebitSetupPage } from "../../pages/pd/autoDebitSetup/NACHAutoDebitSetupPage"



//login
import { knowAboutProductPage } from "../../pages/onboarding/general/KnowAboutProductPage"

describe('ProcessingFee', { retries: 1 }, () => {
    it('Login With Mobile Number', () => {

        const DBurl = "https://gt1vbgrgml.execute-api.ap-south-1.amazonaws.com/Automation/qsometest";
        const mobilenum = "9611496051"
        const dbip = "10.105.60.186"
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

        //SELECT otp from yp_user_otp  WHERE sentTo =9611496051  order by id desc limit 10
        var payload = { "query": "SELECT otp from `yp_user_otp` WHERE `sentTo` ='9611496051' order by id desc limit 1", "db_ip": "10.105.60.186" };
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
    it('KB-T45184 [Refer & Earn] Verify the Redeem on Processing Fees popup page is redirected when the Processing Fees tab is clicked in Kreditbee points page', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-RedeemPoints.json' })
        cy.intercept('**/me/offers', { fixture: 'accounts/referAndEarnPage-Available-RedeemPoints.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickReferLabel()
        referAndEarn.clickRedeemPointsLabel()
        kbPointsPage.verifyProcessingFeeLabel('Processing Fees')
        // kbPointsPage.clickProcessingFeeLabel()
        // redeemonProcessingFeePage.verifypageTile('Redeem on Processing Fees')
        // redeemonProcessingFeePage.verifyRedeemKBPointsText('Redeem KreditBee points to get discount on processing fees while availing loan')
        // redeemonProcessingFeePage.verifyOkButton('OK')
    })

    it('KB-T45333 [Digital Gold Phase 3] Verify the Cash in Bank Account tab is not displayed in Kreditbee points page when redeem points config is disabled', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-Disbled-RedeemPoints.json' })
        cy.intercept('**/myaccount', { fixture: 'accounts/accountPage-RedeemPoints.json' })
        cy.intercept('**/me/offers', { fixture: 'accounts/referAndEarnPage-AvailablePointsZero.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickMyAccountIcon()
        accountsPage.verifyReferandEarnText('Refer & Earn')
        accountsPage.clickReferAndEarnText()
        referAndEarn.verifyRedeemPointsDesabledLabel()
    })
})

describe('Basic Details', () => {

    it('KB-T21858 Check on clicking the basic information in profile information page', () => {
        cy.intercept('**/main/home', { fixture: 'home/homePage-basicGeneralInformation.json' })
        cy.intercept('**/me/substateinfo', { fixture: 'onBoarding/profile/generalInformationPage-substateInfo.json' })
        cy.intercept('**/main/me', { fixture: 'onBoarding/profile/generalInformationPage-me.json' })
        cy.intercept('**/me?type=info', { fixture: 'onBoarding/profile/generalInformationPage-TypeInfo.json' })
        cy.intercept('**/main/misc/pincode?pincode=**', { fixture: 'onBoarding/profile/generalInformationPage-pinCode.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        applicationStatusPage.verifyContinueApplicationButton('Continue Application')
        applicationStatusPage.clickContinueApplicationButton()
        profileInformationPage.verifyGeneralInformationlabel('General Information')
        profileInformationPage.clickGeneralInformation()
        generalInformationPage.clickSingleRadioButton()
        generalInformationPage.verifyEducationDropDown()
        generalInformationPage.clickEducationDropDown()
        generalInformationPage.verifyEducationDropDownList()
        generalInformationPage.clickEducationDropDownList()
        generalInformationPage.verifyprofessionOrOccupationDropDown()
        generalInformationPage.clickprofessionOrOccupationDropDown()
        generalInformationPage.verifyProfessionOrOccupationDropDownLabel()
        generalInformationPage.clickProfessionOrOccupationDropDownList()
        generalInformationPage.verifyCommunicationAddressLabel('COMMUNICATION ADDRESS')
        generalInformationPage.verifySameAsKYCDocumentCheckBox()
        generalInformationPage.clickTypeOfResidenceDropDown()
        generalInformationPage.verifyTypeOfResidenceDropDownList()
        generalInformationPage.clickTypeOfResidenceDropDownList()
        generalInformationPage.verifyContinuebutton('Continue')

    })

    it('Verify whether the address fields will be displayed when the user unselects the same as the KYC document checkbox in current addresss section', () => {
        cy.intercept('**/main/misc/pincode?pincode=**', { fixture: 'onBoarding/profile/generalInformation-pincodeEnable.json' })
        generalInformationPage.verifyPageTitle('General Information')
        generalInformationPage.clickSameAsKYCDocumentCheckBox()
       // generalInformationPage.verifyUploadAnAddressProofDocLink()
        generalInformationPage.verifyAddressLine1Input('')
        generalInformationPage.verifyAddressLine1Input('')
    })

    it('KB-T45310 [Income Details] Check "we are accessing your eligibility" screen is displayed after submitting the income details', function () {

        cy.intercept('**/misc/companies?p=1&batchcount=100&q=finnovation%20', { fixture: 'onboarding/eligibility/SearchCompanyNamePage-CompanySearchResults.json' })
        cy.intercept('**/me/profile/eligible', { fixture: 'onboarding/profile/ApplicationStatusPage-LoanEligibilty.json' })
        cy.visit('/eligibility/city', { failOnStatusCode: false });
        incomeDetailsPage.selectSalariedRb()
        incomeDetailsPage.enterSalaryOrIncome(30000)
        incomeDetailsPage.clickSelectEmploymentCompany()
        searchCompanyNamePage.enterSearchCompanyName('FINNOVATION TECH SOLUTIONS PRIVATE LIMITED')
        searchCompanyNamePage.clickFirstCompanyNameLabel()
        incomeDetailsPage.clickSubmitBtn()
    })

    // it('KB-T45078 Check whether the user able to upload reference contacts and able to continue the flow', () => {

    //     cy.intercept('**/home', { fixture: 'home/homePage-continueApplicationReferences.json' })
    //     cy.intercept('**/me', { fixture: 'extraDetails/profileInformationPageReferences-me.json' })
    //     cy.intercept('**/me/substateinfo', { fixture: 'extraDetails/profileInformationPageReferences-subStateInfo.json' })
    //     cy.intercept('**/me/profile/reference', { fixture: 'applicationStatus/profileApprovalUnderProcessPage-references.json' })
    //     cy.intercept('**/me/fp/kb', { fixture: 'applicationStatus/profileApprovalUnderProcessPage-kb.json' })
    //     cy.visit('/newhome', { failOnStatusCode: false });
    //     applicationStatusPage.verifyApplicationStatusLabel("APPLICATION STATUS :")
    //     homePage.clickContinueApplicationBtn()
    //     profileInformationPage.verifyPagetitle("Profile Information")
    //     cy.get('[data-cy="summaryItemTitle"]').eq(3).click()
    //     // profileInformationPage.clickReferencesLabel()
    //     referencesPage.verifyPageTitle("References")
    //     referencesPage.EnterFatherName("Shekar")
    //     referencesPage.clickMotherRadioButton()
    //     referencesPage.EnterMotherName("Shivaleela")
    //     referencesPage.EnterReferenceMobileNumber("8073874129")
    //     referencesPage.EnterReferenceName("ABCDE")
    //     referencesPage.EnterFamilyMobileNumber("9110234440")
    //     referencesPage.clickContinueButton()
    //     profileStatusPage.verifyPageTitle("Application submitted for Approval")
    //     profileStatusPage.verifyNotifyUserBySMSText("This should only take a few minutes. We will notify you (via SMS) once we have verified your profile or you can click the Refresh button to check again")
    //     profileStatusPage.verifyRefreshText("REFRESH ")
    // })

        //old flow , so removing settings icon
    // it('KB-T36074 (1.0) Ensure that after clicking on Help option from Settings menu user is navigated to detailed Help page', () => {
    //     cy.intercept('**/home', { fixture: '/onBoarding/profile/ProfileInformationPage-GeneralInformation-GreyoutHomePage.json' })
    //     cy.intercept('**/me/substateinfo', { fixture: '/onBoarding/profile/profileInformationPage-GeneralInformation-GreyoutSubstate.json' })
    //     cy.intercept('**/me', { fixture: '//onBoarding/profile/ProfileinformationPage-GeneralInformation-GreyoutMe.json' })
    //     cy.intercept('**/contactus/rule?categoryId=r_faq', { fixture: 'help/helpPage.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     applicationStatusPage.clickContinueApplicationButton()
    //     profileInformationPage.clickKYCDocumentsLabel()
    //     kycDocumentsPage.verifyAadharCardLabel('Aadhaar Card')
    //     kycDocumentsPage.verifySelfieLabel('Selfie')
    //     //headerPage.clickSettingBtn()
    //     headerPage.clickHelpIcon()
    //     help.verifyPageTitle('Help')
    //     help.verifyCreditLimitEnhancementLabel()
    //     help.verifyProfileVerificationLabel('Profile Verification')
    // })

    it('KB-T49357 (1.0)Check whether the Father name field is displaying in references page when the Fathername_mandatory config = 0 in yp_config table', () => {

        cy.intercept('**/home', { fixture: 'onboarding/profile/referenceContacts-FatherNotPresentHomePage.json' })
        cy.intercept('**/me/substateinfo', { fixture: 'onboarding/profile/referenceContacts-FatherNotPresentSubstate.json' })
        cy.intercept('**/me', { fixture: 'onboarding/profile/referenceContacts-FatherNotPresentMe.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        applicationStatusPage.clickContinueApplicationButton()
        cy.get('[data-cy="summaryItemTitle"]').eq(3).click()
        cy.get('[data-cy="input_app.components.EmergencyContacts.ec_father_name_placeholder"]').should('not.exist')
    })

    it('KB-T49313 (1.0)Check user able to submit the eligibility when company input is enabled', function () {
        cy.intercept('**/me/eligible', { fixture: 'onBoarding/eligibility/eligibility.json' })
        cy.intercept('**/companies?p=**', { fixture: 'onBoarding/eligibility/searchcompany.json' })
        cy.intercept('**/misc/companies?p=1&batchcount=100&q=Finnovation', { fixture: 'onBoarding/eligibility/firstCompanyName.json' })
        cy.intercept('**/profile/eligible', { fixture: 'onBoarding/eligibility/eligiblePending.json' })
        cy.visit('/eligibility/city', { failOnStatusCode: false });
        incomeDetailsPage.selectSalariedRb()
        incomeDetailsPage.enterSalaryOrIncome('50000')
        incomeDetailsPage.clickSelectEmploymentCompany()
        searchCompanyNamePage.enterSearchCompanyName('FINNOVATION TECH SOLUTIONS PRIVATE')
        searchCompanyNamePage.clickFirstCompanyNameLabel()
        searchCompanyNamePage.clickNextBtn()
        assessingLoanEligibilityPage.verifyPageTitle('We are assessing your Loan eligibility')
    })

    it('KB-T49312 (1.0)Check user able to submit the eligibility when company input is disabled', function () {
        cy.visit('/eligibility/verification', { failOnStatusCode: false });
        assessingLoanEligibilityPage.verifyPageTitle('We are assessing your Loan eligibility')
        assessingLoanEligibilityPage.verifyAssessingLoanEligibiltyText('This should only take a few seconds We will notify you (via SMS) once we have assessed your eligibility or you can click the Refresh button to check again')
        assessingLoanEligibilityPage.verifyRefreshBtn('Refresh')
    })

    it('KB-T53008 Check Refrences screen displayed as per the VD when fatherNameMandatory config is set to 1', () => {

        cy.intercept('**/home', { fixture: 'onboarding/profile/referenceContacts-HomePage.json' })
        cy.intercept('**/me/substateinfo', { fixture: 'onboarding/profile/referenceContacts-SubState.json' })
        cy.intercept('**/me', { fixture: 'onboarding/profile/referenceContacts-me.json' })
        cy.intercept('**/me/profile/reference', { fixture: 'onboarding/profile/referenceContacts-references.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        applicationStatusPage.clickContinueApplicationButton()
        cy.get('[data-cy="summaryItemTitle"]').eq(3).click()
        referencesPage.verifyPageTitle("References")
        referencesPage.EnterFatherName("Shekar")
    })
})

describe('ED PD Cases', () => {

    // it('KB-T32380 Check ED screen when more than 1 ED offer is enabled and all enabled offers data is available and not expired and offerMode is Mandatory', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-ED.json' })
    //     cy.intercept('**/me/extradetails/loan', { fixture: 'extraDetails/ED-FPLLoan.json' })
    //     cy.intercept('**/me/extradetails/loan/householdincome', { fixture: 'extraDetails/extradetailspage-offer.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickBlock2Btn()
    //     availableCreditLimitPage.clickContinueButton()
    //     profileReverificationPage.verifyPageTitle('Profile re-verification required')
    //     profileReverificationPage.clickVerifyHouseHoldIncomeLabel()
    //     profileReverificationPage.clickContinue()
    //     verifyHouseholdIncomePage.clickMember3Button()
    //     verifyHouseholdIncomePage.EnterFamilyMemberIncome()
    //     verifyHouseholdIncomePage.clickRentCheckBox()
    //     verifyHouseholdIncomePage.EnterRentInput()
    //     verifyHouseholdIncomePage.clickContinueButton()
    //     verifyHouseholdIncomePage.clickLandLabel()
    //     verifyHouseholdIncomePage.clickSelectAllLabel()
    //     verifyHouseholdIncomePage.clickSubmitButton()
    //     cy.intercept('**/me/extradetails/loan', { fixture: 'extraDetails/offerSubmitted.json' })
    //     pdVerifyingDetailsPage.verifyPageTitle('Verifying Details')
    // })

    it('KB-T22484 (1.0) Test case to verify whether "Discover your Credit and Pricing" page is displayed in My Account page', () => {
        cy.intercept('**/main/home', { fixture: 'home/homepage-Notransaction.json' })
        cy.intercept('**/main/myaccount', { fixture: 'accounts/accountPage-Notransction.json' })
        cy.intercept('**/me/pd?type=list',{fixture:'pd/pdDetailsPage-OfferList.json'})

       cy.visit('/newhome', { failOnStatusCode: false });
        footerPage.clickAccountIcon()
        accountsPage.verifyDiscountAndCreditText('Discount & Credit')
        accountsPage.clickDiscountAndCreditText()
        pdPage.verifyBasicDetailsLabel('Basic Details')
        pdPage.verifyIncomeVerificationLabel('Income Verification')
        pdPage.verifyAutoDebitSetupLabel('Auto Debit Setup')
        pdPage.verifyAssestvalidationLabel('Asset Validation')
        pdPage.verifyBuinessDetailsLabel()         
    })

    it('KB-T36717 (1.0)Test case to verify the "NACH E-Mandate" page functionality under Setup NACH Auto Debit page(Debit card NACH)', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-pd.json' })
        cy.intercept('**/me/pd?type=list', { fixture: '/pd/pdDetailsPageAccount.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: '/bank/bankAccount-NACH.json' })
        cy.intercept('me/pd?type=list', { fixture: '/pd/basicDetails/AutoDebtSetup/pdAutoDeptPage.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickCreditLimitAndDiscountText()
        pdPage.clickAutoDebitSetupLabel()
        autoDebitSetupPage.clickNACHAAutoDebit()
        autoDebitSetupPage.clickSelectBankAccountButton()
        autoDebitSetupInfoPage.clickEDSelectBankAccount()
        selectBankAccountPage.clickSelectModeButton()
        autoDebitSetupPage.clickSetupUsingDebitCardlabel()  
        autoDebitSetupPage.clickContinueButton()
        autoDebitOptionsInfoPage.clickContinuebtn()
    })


    it('KB-T22809 Ensure that after clicking on Skip for later button check for calculating Credit Limit page is displayed or not', () => {
        cy.intercept('**/home', { fixture: 'extraDetails/AdditionalInfoPage-SkipForlater-HomePage.json' })
        cy.intercept('**/me/extradetails/loan', { fixture: 'extraDetails/AdditionalInfoPage-Loan.json' })
        cy.intercept('**/me/extradetails/loan/skip', { fixture: 'extraDetails/additionalInfoPage-Skipped.json' })
        cy.intercept('**/me/extradetails?type=groupStatus', { fixture: 'extraDetails/extraDetailsPage-SkippedOffer.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock2Btn()
        availableCreditLimitPage.clickSkipForLaterButton()
        calculatingCreditLimitPage.clickRefreshButton()
    })

    it('KB-T10457 Ensure that on clicking Refresh button from Verifying details page control is navigate to existing home screen on successful validation when RE sends any one offer as mandatory', () => {
        cy.intercept('**/home', { fixture: 'extraDetails/homepage-loanflow.json' })
        cy.intercept('**/me/extradetails/loan', { fixture: 'extraDetails/LoanPage-EDflow.json' })
        cy.intercept('**/me/extradetails/loan/householdincome', { fixture: 'extraDetails/extradetailspage-offer.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.verifyApplyNowButton('APPLY NOW')
        homePage.verifyBankTransferUptoLabel('BANK TRANSFER UPTO')
        homePage.clickFPLGetNowBtn()
        profileInformationPage.verifyPagetitle('Profile re-verification required')
        profileReverificationPage.verifyHouseHoldIncomeLabel('Verify Household Income')
        profileReverificationPage.clickVerifyHouseHoldIncomeLabel()
        profileReverificationPage.clickContinue()
        verifyHouseholdIncomePage.clickMember3Button()
        verifyHouseholdIncomePage.verifyOtherModesOfSalarylabel('OTHER MODES OF INCOME')
        verifyHouseholdIncomePage.verifyRentLabel('Rent')
        verifyHouseholdIncomePage.verifyPensionLabel('Pension')
        verifyHouseholdIncomePage.verifyOtherLabel('Other')
        verifyHouseholdIncomePage.verifyMonthlyIncomeLabel('My Monthly Income')
        verifyHouseholdIncomePage.EnterMyMonthlyIncomeInput('20000')
        verifyHouseholdIncomePage.EnterFamilyMemberIncome('20000')
        verifyHouseholdIncomePage.clickRentCheckBox()
        verifyHouseholdIncomePage.EnterRentInput()
        verifyHouseholdIncomePage.clickContinueButton()
        verifyHouseholdIncomePage.clickSelectAllLabel()
        verifyHouseholdIncomePage.clickSubmitButton()
        cy.intercept('**/me/extradetails/loan', { fixture: 'extraDetails/offerSubmitted.json' })
        verifyHouseholdIncomePage.clickRefreshButton()
    })

    it('KB-T54367 (1.0) Check whether User is able to see Business Details Group in Discover and Credit page', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-pd.json' })
        //  cy.intercept('**/home',{fixture:'pd/businessDetails/businessDetailsPages-HomePage.json'})
        cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage.json' })
        cy.intercept('**/me/pd?type=list', { fixture: 'pd/pdDetailsPage-OfferList.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        footerPage.clickAccountIcon()

        accountsPage.clickDiscountAndCreditText()
        pdPage.verifyBasicDetailsLabel('Basic Details')
        pdPage.verifyAssestvalidationLabel('Asset Validation')
        pdPage.verifyAutoDebitSetupLabel('Auto Debit Setup')
        pdPage.verifyDiscountAndCreditSubText('Complete any of the below steps which will provide us with a better understanding of who you are. The more steps you complete successfully, the better your Credit and Pricing would be')
        pdPage.verifyIncomeVerificationLabel('Income Verification')
        pdPage.verifyBuinessDetailsLabel('Business Details')
        pdPage.verifyEmploymentVerificationlabel('Employment Verification')
    })

    it('KB-T36625 (1.0)Check whether the Verify Communication Address offer working fine or not', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-PD-BasicDetails.json' })
        cy.intercept('**/me/pd?type=list', { fixture: '/pd/basicDetails/AutoDebtSetup/pd-New_Offres.json' })
        cy.intercept('**/me/profile/pduseraddr', { fixture: '/pd/basicDetails/pdUSerAddress.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickCreditLimitAndDiscountText()
        pdPage.clickBasicDetailsLabel()
        basicDetailsPage.clickVerifyCommunicationAddress()
        basicDetailsPage.clickContinue()
        verifyCommunicationAddressSteps.clickContinuebtn()
        verifyConfirmAddressDetails.selectTypeOfResidence()
        verifyConfirmAddressDetails.selectResidencePG()
        verifyConfirmAddressDetails.clickContinue()
        pdVerifyingDetailsPage.verifyPageTitle()

    })

    it('KB-T36593 (1.0)Check whether the Verify Work Email offer is working fine or not', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-pd.json' })
        cy.intercept('**/me/pd?type=list', { fixture: 'pd/basicDetails/BasicDetailspage.json' })
        cy.intercept('**/me/extradetails/pd/workemailverification/otp?email=**', { fixture: 'pd/basicDetails/workEmailOTP.json' })
        cy.intercept('**/extradetails/pd/workemailverification/otp', { fixture: '/pd/basicDetails/EmailOTPVerification.json' })
        cy.intercept('**/workemailverification/status', { fixture: '/pd/basicDetails/EmailStauts.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickCreditLimitAndDiscountText()
        pdPage.verifyPageTitle('Discover your Credit and Pricing')
        pdPage.clickBasicDetailsLabel()
        basicDetailsPage.clickVerifyWorkEmail()
        basicDetailsPage.clickContinue()
        verifyWorkEmailInfoPage.clickContinueButton()
        verifyWorkEmailPage.enterWorkEmail('komodheen.mastan@krazybee.com')
        verifyWorkEmailPage.clickSendOTP()
        verifyWorkEmailOTPInputPage.enterOTP('123456')
        verifyWorkEmailOTPInputPage.clickSubmitButton()
        emailVerifyingDetailsPage.verifyPageTitleText()
        emailVerifyingDetailsPage.verifySubTextOfVerifyingDetails(' We are verifying the provided information. This may take a few minutes. ')
        emailVerifyingDetailsPage.verifyRefreshbtn()

    })

    it('KB-T36607 (1.0)Check whether the Verify Mobile Trust Score offer is working fine or not', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-pd.json' })
        cy.intercept('**/me/pd?type=list', { fixture: '/pd/pdDetailsPageAccount.json' })
        cy.intercept('**/me/pd?type=list', { fixture: 'pd/basicDetails/BasicDetailspage.json' })
        //        cy.intercept('**/me/pd?type=list',{fixture:'/pd/basicDetails/BasiciDeatilPageOffers.json'})
        cy.intercept('**/me/offers/pd/homepage/basicmobauth?isMock=**', { fixture: '/pd/basicDetails/PdMobilContextPage.json' })
        cy.intercept('**/pd/homepage/basicmobauth', { fixture: '/pd/basicDetails/pdVerifyingDetailspage.json' })


       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickCreditLimitAndDiscountText()
        pdPage.clickBasicDetailsLabel()
        basicDetailsPage.clickOnMobileTrustScoreLabel()
        basicDetailsPage.clickContinue()
        mobileTrustScoreInfoPage.clickContinuebtn()
        mobileLetterOfContext.clickAcceptAndContinuebtn()
        mobileTrustOTPInputPage.enterOTP('1234')
        mobileTrustOTPInputPage.clickSubmitbtn()
        pdVerifyingDetailsPage.verifyOKBtn('OK')
    })

    it('KB-T36712 (1.0) Test case to verify the "NACH E-Mandate" page functionality under Setup NACH Auto Debit page(Netbanking)', () => {
        cy.intercept('**/home', { fixture: 'home/homepage-ExtraDetails.json' })
        cy.intercept('**/me/extradetails/loan', { fixture: 'pd/LoanFlow-ExtraDetails.json' })
        cy.intercept('**/me/nachmandate/status', { fixture: 'pd/pdStatus-InActive.json' })
        cy.intercept('**/me/pd?type=list&source=loan', { fixture: 'pd/pdStatus-Inactive-ExtraDetails.json' })
        cy.intercept('**/me/bank?productid=****', { fixture: 'bank/bankAccountPage-Pd.json' })
        cy.intercept('**/loan/enach?mandateType=**', { fixture: 'pd/pd-Nach.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock2Btn()
        profileReverificationPage.verifyAutoDebitSetupLabel('Setup Auto Debit')
        profileReverificationPage.clickAutoDebitSetupLabel()
        profileReverificationPage.clickContinue()
        nachAutoDebitSetupPage.clickNACHAutoDebitLabel()
        nachAutoDebitSetupPage.clickSelectBankAccountButton()
        autoDebitSetupInfoPage.clickSelectBankAaccountButton()
        selectBankAccountPage.clickSelectModeButton()
        autoDebitSetupPage.clickSetupNetBanking()
        autoDebitSetupPage.clickContinueButton()
        autoDebitOptionsInfoPage.verifyPageTitle('Setup Auto Debit using Netbanking')
        autoDebitOptionsInfoPage.verifyNetbankingSubSteps('Login with your Netbanking username and password on your Bank page to authorize the setup')
        autoDebitOptionsInfoPage.clickContinuebtn()

    })

    it('KB-T23062 (1.0) Check whether the Profile Reverification required page is displayed or not when edGroupAction column is set as userNotActed ', function () {
        cy.intercept('**/home', { fixture: 'extraDetails/homepage-loanflow.json' })
        cy.intercept('**/me/extradetails/loan', { fixture: 'extraDetails/LoanPage-EDflow.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.verifyApplyNowButton('APPLY NOW')
        homePage.verifyBankTransferUptoLabel('BANK TRANSFER UPTO')
        homePage.clickFPLGetNowBtn()
        profileInformationPage.verifyPagetitle('Profile re-verification required')
        profileReverificationPage.verifyHouseHoldIncomeLabel('Verify Household Income')
    }) 

    // it('KB-T38047 Check whether the the "Verifying details" screen displayed when user have an active mandate', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-ExtraDetails-VerifyingDetails.json' })

    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickBlock2Btn()
    //     pdVerifyingDetailsPage.verifyPageTitle()
    //     pdVerifyingDetailsPage.verifyRefreshButton()
    // })

    it('1.KB-T36844 Check whether the ITR-V validation offer is working fine or not', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-pd.json' })
        cy.intercept('**/me/pd?type=list', { fixture: 'pd/pdBusinessDetails.json' })
        cy.intercept('**/me?type=pddocs', { fixture: 'pd/incomeVerificationPage-DocUpload.json' })
        cy.intercept('**/me/profile/doc', { fixture: 'pd/itrvUpload.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickCreditLimitAndDiscountText()
        pdPage.verifyPageTitle('Discover your Credit and Pricing')
        pdPage.clickIncomeVerificationLabel()
        incomeVerificationPage.verifyPageTitle('Income Verification')
        incomeVerificationPage.verifyITRVLabel('ITR-V validation')
        incomeVerificationPage.clickITRVLabel()
        incomeVerificationPage.clickContinueButton() 
        itrvValiationInfoPage.clickContinueButton()
        cy.wait(3000)
        itrvValdiationPage.clickContinueButton()
        pdVerifyingDetailsPage.clickOKButton()
    })

    it('2.KB-T36844 Check whether the ITR-V validation offer is working fine or not', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-pd.json' })
        cy.intercept('**/me/pd?type=list', { fixture: 'pd/incomeverificationPage-UploadedSucess-ITRV.json' })

       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickCreditLimitAndDiscountText()
        pdPage.verifyPageTitle('Discover your Credit and Pricing')
        pdPage.clickIncomeVerificationLabel()
        incomeVerificationPage.verifyPageTitle('Income Verification')
        incomeVerificationPage.verifyITRVLabel('ITR-V validation')
        incomeVerificationPage.verifyITRVSubText('Complete')
    })

    // it('KB-T37108 Check whether the Electricity Connection offer is working fine or not', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePageED-Fpl.json' })
    //     cy.intercept('**/me/pd?type=list', { fixture: 'pd/pdVKYCPage.json' })

    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickCreditLimitAndDiscountText()
    //     pdPage.verifyAssestvalidationLabel('Asset Validation')
    //     pdPage.clickAssestValidationLabel()
    //     assetValidationPage.clickOnElectricityConnection()
    //     assetValidationPage.clickOnContinueBtn()
    //     verifyElectricityConnectionInfoPage.verifyPageTitle('Verify Electricity Connection')
    //     verifyElectricityConnectionInfoPage.clickContinueButton()
    //     verifyElectricityConnectionPage.verifypageTitle('Verify Electricity')
    //     verifyElectricityConnectionPage.EnterSelectElectricityBoardInput()
    //     selectServiceProviderPage.clickListOfServicesDropDown()
    //     selectServiceProviderPage.clickContinueButton() 
    //     verifyElectricityConnectionPage.EnterRegistrationNumberInput()
    //     verifyElectricityConnectionPage.clickSubmitButton()
    //     pdVerifyingDetailsPage.verifyPageTitle()
    // })

    it('KB-T51725 Check whether Business Details option is showing in Discover and Credit page', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-pd.json' })
        cy.intercept('**/myaccount',{fixture:'accounts/accountsPage.json'})
        cy.intercept('**/me/pd?type=list',{fixture:'pd/pdDetailsPage-OfferList.json'})

        cy.visit('/newhome',{failOnStatusCode: false})
        footerPage.clickAccountIcon()
        accountsPage.clickDiscountAndCreditText()
        pdPage.verifyBasicDetailsLabel('Basic Details')
        pdPage.verifyIncomeVerificationLabel('Income Verification')
        pdPage.verifyAutoDebitSetupLabel('Auto Debit Setup')
        pdPage.verifyAssestvalidationLabel('Asset Validation')
        pdPage.verifyBuinessDetailsLabel('Business Details')
    })

    it('KB-T54369 (1.0) Check when config is enabled for " GST Details Verification" Offer it should be displayed in Business Details Group', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-pd.json' })
        cy.intercept('**/myaccount', { fixture: 'accounts/accountsPage.json' })
        cy.intercept('**/me/pd?type=list', { fixture: '/pd/pdBusinessDetails.json' })
        cy.intercept('**/me/pd?type=googleSync&mobile=***', { fixture: 'pd/basicDetails/RegisteredMobileNumber-LetterOfConsent.json' })
        cy.visit('/newhome', { failOnStatusCode: false });
        footerPage.clickAccountIcon()
        accountsPage.clickDiscountAndCreditText()
        pdPage.verifyBasicDetailsLabel('Basic Details')
        pdPage.verifyBuinessDetailsLabel()
        pdPage.clickBusinessDetailsLabel()
        businessDetailsPage.verifyGSTVerificationSubText('Avail discount upto')
        businessDetailsPage.verifyGSTNumberVerificationLabel('GST Number Verification')
        businessDetailsPage.verifyPageTitle('Business Details')
    })

    it('KB-T51815 Check whether “GSTR-3B” offer is displayed in “Business Details” when config is Enabled', () => {
        cy.intercept('**/home', { fixture: '/home/homePage-pd.json' })
        cy.intercept('**/myaccount',{fixture:'accounts/accountsPage.json'})
        cy.intercept('**/me/pd?type=list',{fixture:'pd/pdDetailsPage-OfferList.json'})

        cy.visit('/newhome',{failOnStatusCode: false})
        footerPage.clickAccountIcon()
        accountsPage.clickDiscountAndCreditText()
        pdPage.clickBusinessDetailsLabel()
        businessDetailsPage.verifyUploadGSTText('Upload Business Proofs')
        businessDetailsPage.verifyGSTNumberVerificationLabel('GST Number Verification')   
        businessDetailsPage.clickOnUploadGSTR()
        businessDetailsPage.clickContinueButton() 
        uploadGSTR3BPage.verifyPageTitle('Upload Business Proofs')
        uploadGSTR3BPage.verifyStepsText('Business Proofs Options')
    })

    // it('KB-T32408 Ensure ED offer is displayed when already submittted data available and expired for the user and offerMode is Skippable', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-ED.json' })
    //     cy.intercept('**/me/extradetails/loan', { fixture: 'extraDetails/ED-FPLLoan.json' })
    //     cy.intercept('**/me/extradetails/loan/skip', { fixture: 'extraDetails/AdditionalInfoPage-SkipForlater-HomePage.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickBlock2Btn()
    //     availableCreditLimitPage.clickContinueButton()
    //     profileReverificationPage.verifyPageTitle('Profile re-verification required')
    //     profileReverificationPage.verifyMobileTrustScoreLabel()
    //     profileReverificationPage.verifyHouseHoldIncomeLabel('Verify Household Income')
    //     profileReverificationPage.verifySkipForLaterButton('Skip for Later')
    //     profileReverificationPage.clickSkipForLaterButton()
    //     pdVerifyingDetailsPage.verifyPageTitle('Verifying Details')
    // })

    // it('KB-T32492 Ensure ED offer is displayed when already submittted data available and expired for the user and offerMode is Optional', () => {
    //     cy.intercept('**/home', { fixture: 'home/homePage-ED.json' })
    //     cy.intercept('**/me/extradetails/loan', { fixture: 'extraDetails/ED-FPLLoan.json' })
    //     cy.intercept('**/me/extradetails/loan/householdincome', { fixture: 'extraDetails/extradetailspage-offer.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickBlock2Btn()
    //     availableCreditLimitPage.clickContinueButton()
    //     profileReverificationPage.verifyPageTitle('Profile re-verification required')
    //     profileReverificationPage.clickVerifyHouseHoldIncomeLabel()
    //     profileReverificationPage.clickContinue()
    //     verifyHouseholdIncomePage.clickMember3Button()
    //     verifyHouseholdIncomePage.EnterFamilyMemberIncome()
    //     verifyHouseholdIncomePage.clickRentCheckBox()
    //     verifyHouseholdIncomePage.EnterRentInput()
    //     verifyHouseholdIncomePage.clickContinueButton()
    //     verifyHouseholdIncomePage.clickLandLabel()
    //     verifyHouseholdIncomePage.clickSelectAllLabel()
    //     verifyHouseholdIncomePage.clickSubmitButton()
    //     cy.intercept('**/me/extradetails/loan', { fixture: 'extraDetails/offerSubmitted.json' })
    //     pdVerifyingDetailsPage.verifyPageTitle('Verifying Details')
    // })
})

describe('APR Calculation, MLAX Product Loan', () => {

    it('KB-T51319 Check APR calculation for MLAX products in loan summary page,LFA and sanction doc, when processing fee,reassessment fee , Agreement fee and KB Points is applied', () => {
        cy.intercept('**/home', { fixture: 'home/homepage-MLAX.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-5k.json' })
        cy.intercept('**/preloanre?productId=**',
            { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-productID14.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/products/verifycoupon?productid=**', { fixture: 'loan/repaymentSchedulePage/verifyCouponcode.json' })
        cy.intercept('**/me/bank?couponCode=**', { fixture: 'bank/bankAccountVerificationPage-CouponCode.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=**', { fixture: 'loan/sanctionPage-fund-KreditBeePVTLTD.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/loanSanctionLetterPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
        cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.verifyAnnualPercentageRateLabel('Annual Perccentage Rate')
        fplLoanAmountDetailsPage.verifyApplyCouponCodeLabel()
        fplLoanAmountDetailsPage.clickApplyCouponCodeLabel()
        applyCouponCodeOrPointsPage.enterCouponCodeInput('MHAO14')
        applyCouponCodeOrPointsPage.clickApplyBtn()
        fplLoanAmountDetailsPage.verifyAnnualPercentageRateValue()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        //kfs sanction letter - validation
        kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
        //sanction letter -validation
        signDocumentPage.verifyPageTitle('Sign Document')
        signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
        signDocumentPage.verifyContinueText('Continue')
        signDocumentPage.clickContinueButton()
        //signServicePage - validation
        signServicePage.verifyPageTitle('Sign Service')
        signServicePage.verifyTransactionIDLabel('Transaction ID:')
        signServicePage.verifyTransactionIDValue('KBDID20221124RQzHneocfB811837')
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
        cy.clock()
        signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx253') //number changes w.r.t user logged in
        signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
        signServiceOTPInputPage.enterOTP('123456')
        cy.tick(4000)
        signServiceOTPInputPage.verifyTimerValue('(00:26)')
    })

  
    // it('KB-T60481 (1.0)Ensure that fund should get assigned to KB when customerDefaultFundSource=2 in yp_user table, assignToKB=0 in yp_lead_config and assignToKB=0 in yp_loan_product table', () => {
    //     cy.intercept('**/home', { fixture: '/home/homepageFplLoan6.2k.json' })
    //     cy.intercept('**/category?name=fpl*', { fixture: '/loan/fplTurnurePage6.2k.json' })
    //     cy.intercept('**/ecom/offers?type=preloanBanner',{fixture:'/bank/offerstypes.json'})
    //     cy.intercept('**/preloanre?productId',{fixture:'loan/fpl/fpl8KPreloanREPage.json'})
    //     cy.intercept('**/products?productId=**', { fixture: '/loan/fpl/fplLoanAmountDetailspage6.2.json' })
    //     cy.intercept('**/me/bank?productid=**', { fixture: '/bank/creatingNewBank.json' })
    //     cy.intercept('**/me/tnc/bank_mfiLimit', { fixture: '/bank/addingNewAccount.json' })
    //     cy.intercept('**/misc/bank?ifsc=**', { fixture: '/bank/bankIfccodeValidate.json' })
    //     cy.intercept('**/me/bank', { fixture: '/bank/bankAccountAddedSuccessfull.json' })
    //     cy.intercept('**/me/tnc/loan_bank_add', { fixture: '/bank/loanBankIdAddedsuccess.json' })
    //     cy.intercept('**/me/bank?productid=**', { fixture: '/bank/bankAccountVerifiedPagenew.json' })
    //     cy.intercept('**/me/bank?productid=**', { fixture: '/bank/addedbankselctpage.json' })
    //     cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
    //     cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-INCRED.json' })
    //     cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
    //     cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'otp/otpSignServicePage.json' })
    //     cy.intercept('**/me/loan', { fixture: 'otp/loanApplicationPage-Submitted.json' })
    //     cy.intercept('**/me?source=session', { fixture: 'otp/loanApplicationPage-InsSubmit.json' })
    //     cy.visitURL('/newhome')
    //     homePage.clickFPL8KGetNow();
    //     fplPage.clickFPL4KGetNowBtn();
    //     fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
    //     fplLoanAmountDetailsPage.verifyFeeAndchargesLabel('Fees & Charges')
    //     fplLoanAmountDetailsPage.verifyProcessingFee('Processing Fee')
    //     fplLoanAmountDetailsPage.verifyOnboardingFeeLabel('One Time Onboarding Fee')
    //     fplLoanAmountDetailsPage.verifyCSRFeeLabel('Credit Score Report Fee')
    //     fplLoanAmountDetailsPage.verifyGSTlbl('GST @ 18%')
    //     fplLoanAmountDetailsPage.verifyLoanDocumantSigningFee('Loan Document Fee')
    //     fplLoanAmountDetailsPage.verifyTransferToBankLabel('TRANSFER TO BANK')
    //     fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
    //     repaymentPage.clickContinueBtn()
    //     loanPurposePage.clickSelectLoanPurposeDD()
    //     loanPurposePage.selectPurposeFromDDL('Medical expenses')
    //     loanPurposePage.clickContinueBtn()
    //     selectBankAccountPage.verifyPageTitle('Select Bank Account')
    //     bankAccountDetailsPage.clickAddSavingsBankAccountBtn()
    //     addBankAccountPage.enterIFSC('HDFC0009286')
    //     addBankAccountPage.enterAccountNumber('50100278181960')
    //     addBankAccountPage.enterConfirmAccountNumber('50100278181960')
    //     addBankAccountPage.clickAddAccountBtn()
    //     bankAccountVerificationPage.clickContinueBtn()
    //     selectBankAccountPage.clickContinueBtn()
    //     signLoanDocumentPage.clickDigitalSignButton()
    //     signLoanDocumentPage.clickContinueBtn()
    //     //kfs sanction letter - validation
    //     kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
    //     //sanction letter -validation
    //     signDocumentPage.clickContinueButton()
    //     signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
    //     signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
    //     signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
    //     signServicePage.selectConsent()
    //     signServicePage.verifyContinueButtonText('Continue ')
    //     signServicePage.clickContinueButton()
    //     signServiceOTPInputPage.enterOTP('123456')
    //     loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
    // })

    it('KB-T56017 When proc_fee_flag = 0, ensure entire Processing fee is charged by KB for KB fund', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-MLASILVER-ColendingPercaentage80.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-5k.json' })
        cy.intercept('**/preloanre?productId=14&action=getNow&preLoanEvent=preLoanGetNowClick&src=cash',
            { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
        cy.intercept('**/products?productId=14', { fixture: 'loan/fpl/fplLoanAmountTenurePage-productID14.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/me/bank?productid=14', { fixture: 'bank/bankAccountVerifiedPage.json' })
        cy.intercept('**/loan/la?updateMFILimit=0&productid=14&pointType=&csrFee=2', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=kb&productid=14&loanamt=**', { fixture: 'loan/fpl/sanctionPage-fund-KreditBeePVTLTD.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        //kfs sanction letter - validation
        // kfsSanctionLetterPage.verifyPageTitle('KFS & Sanction letter')
        // kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
        // kfsSanctionLetterPage.verifyLenderNameText('Krazybee Services Private Limited.')
        // kfsSanctionLetterPage.verifyContinueToSignLoanDocumentText('Continue to Sign Loan Document')
        // kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
        //sanction letter -validation
        signDocumentPage.verifyPageTitle('Sign Document')
        signDocumentPage.verifyInfoSignDocumentText('These Standard Terms & Conditions along with the Most Important Terms and Conditions form a legal and binding agreement upon acceptance pursuant to the Indian Contract Act, 1872 and the Information Technology Act, 2000.')
        signDocumentPage.verifyContinueText('Continue')
        signDocumentPage.clickContinueButton()
        //signServicePage - validation
        signServicePage.verifyPageTitle('Sign Service')
        signServicePage.verifyTransactionIDLabel('Transaction ID:')
        signServicePage.verifyTransactionIDValue('KBDID20221124RQzHneocfB811837')
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
        // //OTP service page
        cy.clock()
        signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx896') //number changes w.r.t user logged in
        signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
        signServiceOTPInputPage.enterOTP('123456')
        cy.tick(4000)
        signServiceOTPInputPage.verifyTimerValue('(00:26)')
    })

    it('KB-T56044 When proc_fee_flag = 2, ensure entire Processing fee is charged by Partner for non KB fund', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-MLASILVER.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-5k.json' })
        cy.intercept('**/preloanre?productId=**',
            { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-productID14.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/products/verifycoupon?productid=**', { fixture: 'loan/repaymentSchedulePage/verifyCouponcode.json' })
        cy.intercept('**/me/bank?couponCode=**', { fixture: 'bank/bankAccountVerificationPage-CouponCode.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-KreditBeePVTLTD.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/loanSanctionLetterPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.verifyAnnualPercentageRateLabel('Annual Percentage Rate')
        fplLoanAmountDetailsPage.verifyApplyCouponCodeLabel()
        fplLoanAmountDetailsPage.clickApplyCouponCodeLabel()
        applyCouponCodeOrPointsPage.enterCuponCodeInput('MHAO14')
        applyCouponCodeOrPointsPage.clickApplyBtn()
        fplLoanAmountDetailsPage.verifyDiscountAppliedOnTheProcessingFee('Discount applied on the processing fees')
        fplLoanAmountDetailsPage.verifyProcessingFeeLabel('Processing Fee')
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        //kfs sanction letter - validation
        kfsSanctionLetterPage.verifyPageTitle('KFS & Sanction letter')
        kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
        kfsSanctionLetterPage.verifyLenderNameText('Krazybee Services Private Limited.')
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
        signServicePage.verifyTransactionIDValue('KBDID20221124RQzHneocfB811837')
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
        cy.clock()
        signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx') //number changes w.r.t user logged in
        signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
        signServiceOTPInputPage.enterOTP('123456')
        cy.tick(4000)
        signServiceOTPInputPage.verifyTimerValue('(00:26)')
    })

    it('KB-T41411 (1.0) Verify MLAX Product loan creation with coupon code', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-MLASILVER.json' })
        cy.intercept('**/category?name=fplfalse', { fixture: 'loan/fpl/fplPage-5k.json' })
        cy.intercept('**/preloanre?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-preLoanRE-srcCash.json' })
        cy.intercept('**/products?productId=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-productID14.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/fpl/fplLoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/products/verifycoupon?productid=**', { fixture: 'loan/repaymentSchedulePage/verifyCouponcode.json' })
        cy.intercept('**/me/bank?couponCode=**', { fixture: 'bank/bankAccountVerificationPage-CouponCode.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=**', { fixture: 'loan/fpl/sanctionPage-fund-KreditBeePVTLTD.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/loanSanctionLetterPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock2Btn()
        fplPage.clickFPL4KGetNowBtn()
        fplLoanAmountTenurePage.scrollSliderselectLoanAmount()
        fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        fplLoanAmountDetailsPage.clickApplyCouponCodeLabel()
        applyCouponCodeOrPointsPage.enterCouponCodeInput('MHAO16')
        applyCouponCodeOrPointsPage.clickApplyBtn()
        fplLoanAmountDetailsPage.verifyCouponAppliedLabel('applied successfully !')
        fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        kfsSanctionLetterPage.clickContinueToSignLoanDocumentButton()
        signDocumentPage.verifyContinueText('Continue')
        signDocumentPage.clickContinueButton()
        signServicePage.verifyIPAddressValue('122.185.107.110')
        signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
        signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
        signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
        signServicePage.selectConsent()
        signServicePage.verifyContinueButtonText('Continue ')
        signServicePage.clickContinueButton()
        cy.clock()
        signServiceOTPInputPage.enterOTP('123456')
        cy.tick(4000)
        signServiceOTPInputPage.verifyTimerValue('(00:26)')

       cy.visit('/newhome', { failOnStatusCode: false });

    })

    it('KB-T51760 Check APR calculation for SA products in loan summary page,LFA and sanction doc, when processing fee,DocCollect Fee, agreement fee and Coupon code are applied', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-SA.json' })
        cy.intercept('**/preloanre?productId=**', { fixture: 'loan/sa/SA-Amount15k-Tenure6.json' })
        cy.intercept('**/products?productId=5', { fixture: 'loan/sa/SA-Amount15k-Tenure6-MLA2-SubbandGood-APR-Enabled.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/sa/SA-LoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/products/verifycoupon?productid=**', { fixture: 'loan/repaymentSchedulePage/verifyCouponcode-MHAO16.json' })
        cy.intercept('**/me/bank?couponCode=**', { fixture: 'bank/bankAccountVerificationPage-CouponCode.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=**', { fixture: 'loan/sanctionPage-fund-KreditBeePVTLTD.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/loanSanctionLetterPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock1Btn()
        saLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        saLoanAmountDetailsPage.verifyAnnualPercentageRateLabel('Annual Percentage Rate')
        saLoanAmountDetailsPage.verifyDocumentCollectFeeLabel('Document Collect Fee')
        saLoanAmountDetailsPage.verifyApplyCouponCodeLabel()
    //    fplLoanAmountDetailsPage.clickApplyCouponCodeLabel()
        applyCouponCodeOrPointsPage.enterCuponCodeInput('MHAO16')
        applyCouponCodeOrPointsPage.clickApplyBtn()
        saLoanAmountDetailsPage.verifyAnnualPercentageRateValue()
        saLoanAmountDetailsPage.verifyAnnualPercentageRateLabel('Annual Percentage Rate')
       saLoanAmountDetailsPage.verifyDocumentCollectFeeLabel('Document Collect Fee')
        saLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        //kfs sanction letter - validation
        kfsSanctionLetterPage.verifyPageTitle('KFS & Sanction letter')
        kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
        kfsSanctionLetterPage.verifyLenderNameText('Krazybee Services Private Limited.')
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
        signServicePage.verifyTransactionIDValue('KBDID20221124RQzHneocfB811837')
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
        cy.clock()
        signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx281') //number changes w.r.t user logged in
        signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
        signServiceOTPInputPage.enterOTP('123456')
        cy.tick(4000)
        signServiceOTPInputPage.verifyTimerValue('(00:26)')
    })

    it('KB-T51748 Check APR calculation for SA products in loan summary page,LFA and sanction doc, when processing fee,Agreement fee and KB Points is applied', () => {
        cy.intercept('**/home', { fixture: 'home/homePage-SA.json' })
        cy.intercept('**/preloanre?productId=**', { fixture: 'loan/sa/SA-Amount15k-Tenure6.json' })
        cy.intercept('**/products?productId=5', { fixture: 'loan/sa/SA-Amount15k-Tenure6-MLA2-SubbandGood-APR-Enabled.json' })
        cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/sa/SA-LoanAmountTenurePage-feescalculations.json' })
        cy.intercept('**/products/verifycoupon?productid=**', { fixture: 'loan/repaymentSchedulePage/verifyCouponcode-MHAO16.json' })
        cy.intercept('**/me/bank?productid=**', { fixture: 'bank/bankAccountVerifiedPage.json' })
        cy.intercept('**/loan/la?updateMFILimit=**', { fixture: 'loan/signLoanDocumentPage-Enable-ESignAndDigFaceID.json' })
        cy.intercept('**/loan/la?type=**', { fixture: 'loan/sanctionPage-fund-KreditBeePVTLTD.json' })
        cy.intercept('**/me/tnc/loanSanctionLetter', { fixture: 'loan/loanSanctionLetterPage.json' })
        cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
       cy.visit('/newhome', { failOnStatusCode: false });
        homePage.clickBlock1Btn()
        saLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
        saLoanAmountDetailsPage.verifyAnnualPercentageRateLabel('Annual Percentage Rate')
        saLoanAmountDetailsPage.verifyDocumentCollectFeeLabel('Document Collect Fee')
        saLoanAmountDetailsPage.verifyApplyCouponCodeLabel()
        applyCouponCodeOrPointsPage.clickApplyPointsBtn()
        saLoanAmountDetailsPage.verifyAnnualPercentageRateValue()
        saLoanAmountDetailsPage.verifyAnnualPercentageRateLabel('Annual Percentage Rate')
        saLoanAmountDetailsPage.verifyDocumentCollectFeeLabel('Document Collect Fee')
        saLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
        repaymentSchedulePage.clickContinueBtn()
        loanPurposePage.selectLoanPurpose('Medical expenses')
        loanPurposePage.clickContinueBtn()
        selectBankAccountPage.clickContinueBtn()
        signLoanDocumentPage.clickDigitalSignButton()
        signLoanDocumentPage.clickContinueBtn()
        //kfs sanction letter - validation
        kfsSanctionLetterPage.verifyPageTitle('KFS & Sanction letter')
        kfsSanctionLetterPage.verifyLoanSanctionedByLabel('Your loan is being sanctioned by:')
        kfsSanctionLetterPage.verifyLenderNameText('Krazybee Services Private Limited.')
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
        signServicePage.verifyTransactionIDValue('KBDID20221124RQzHneocfB811837')
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
        cy.clock()
        signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx281') //number changes w.r.t user logged in
        signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
        signServiceOTPInputPage.enterOTP('123456')
        cy.tick(4000)
        signServiceOTPInputPage.verifyTimerValue('(00:26)')
    })

    // it('KB-T41419 Verify MLAX product loan creation with CSR fee', () => {
    //     cy.intercept('**/home', { fixture: 'home/homepage-MLAX.json' })
    //     cy.intercept('**/category?name=fplfalse', { fixture: 'loan/mlax/MLAXPage-15k.json' })
    //     cy.intercept('**/preloanre?productId=**', { fixture: 'loan/mlax/Amount15k-Tenure6-MLAX-SubbandGood.json' })
    //     cy.intercept('**/products?productId=**', { fixture: 'loan/mlax/MLAXLoanAmountTenurePage-ProductID6.json' })
    //     cy.intercept('**/products/calcfees?productid=**', { fixture: 'loan/mlax/mlaxLoanAmountTenurePage-feescalculations.json' })
    //     cy.intercept('**/me/bank?productid=**', { fixture: 'bank/bankAccountVerifiedPage.json' })
    //     cy.intercept('**/loan/la?updateMFILimit=0&productid=**', { fixture: 'loan/signLoanDocumentPage-DigFaceID.json' })
    //     cy.intercept('**/loan/la?type=kb&productid=6&loanamt=**', { fixture: 'loan/loanSanctionPage.json' })
    //     cy.intercept('**/me/otp?reason=clickwrap&kbloanId=**', { fixture: 'otp/otp-sanctionOTP.json' })
    //     cy.intercept('**/me/otp?reason=clickwrap', { fixture: 'otp/otpSignServicePage.json' })
    //     cy.intercept('**/me/loan', { fixture: 'otp/loanApplicationPage-Submitted.json' })
    //     cy.intercept('**/me?source=session', { fixture: 'otp/loanApplicationPage-InsSubmit.json' })
    //    cy.visit('/newhome', { failOnStatusCode: false });
    //     homePage.clickBlock2Btn()
    //     fplPage.clickFPL4KGetNowBtn()
    //     fplLoanAmountTenurePage.clickViewSummaryAndChargesBtn()
    //     fplLoanAmountDetailsPage.verifyCSRFeeLabel('Credit Score Report Fee')
    //     fplLoanAmountDetailsPage.verifyCSRFeeValue()
    //     fplLoanAmountDetailsPage.verifyCSRText('Get my Credit Score Report : ₹ 50')
    //     fplLoanAmountDetailsPage.clickViewRepaymentScheduleBtn()
    //     repaymentSchedulePage.clickContinueBtn()
    //     loanPurposePage.selectLoanPurpose('Medical expenses')
    //     loanPurposePage.clickContinueBtn()
    //     selectBankAccountPage.clickContinueBtn()
    //     signLoanDocumentPage.clickDigitalSignButton()
    //     signLoanDocumentPage.clickContinueBtn()
    //     signDocumentPage.clickContinueButton()
    //     signServicePage.verifyConsentReadText('I had carefully read the Standard Terms and Conditions and the Most important Terms and Conditions for availing loan from the lender')
    //     signServicePage.verifyConsentUnderstoodText(' I had understood and read the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender.')
    //     signServicePage.verifyConsentLegalAndBindingText(' I had further understand that upon acceptance of the Standard Terms and Conditions and the Most Important Terms and Conditions for availing loan from the Lender, a legal and binding agreement shall be created between us under the Indian Contract Act, 1872 read with Information Technology Act, 2000.')
    //     signServicePage.selectConsent()
    //     signServicePage.verifyContinueButtonText('Continue ')
    //     signServicePage.clickContinueButton()
    //     signServiceOTPInputPage.verifyEnterOTPLabel('Enter OTP sent to number xxxxxxx253') //number changes w.r.t user logged in
    //     signServiceOTPInputPage.verifySignDocumentLabel('Sign Document with Face ID verification in the next step')
    //     signServiceOTPInputPage.enterOTP('123456')
    //     loanApplicationSubmittedPage.verifypageTitle('Loan Application submitted')
    // })
})
