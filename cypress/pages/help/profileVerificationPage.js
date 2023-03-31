/// <reference types = "cypress" />

export class ProfileVerificationPage {
    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="conatctUsActive"]'),
        lblRecentIssueQuestion: () => cy.get('[data-cy="app.components.ContactUs.recent_issues_msg"]'),
        txtWhatIsTheStatusOfMyProfile: () => cy.get('[data-cy="recentIssueQuestion_0"]'),
        txtHowMuchTimeTakeForProfileApproval: () => cy.get('[data-cy="recentIssueQuestion_1"]'),
        txtReuploadOfDocument: () => cy.get('[data-cy="recentIssueQuestion_2"]'),
        txtMyProfileIsRejected: () => cy.get('[data-cy="recentIssueQuestion_3"]'),
        btnDidntFindYourQuery: () => cy.get('[data-cy="app.components.ContactUs.dint_find_query_msg"]'),
        //What is The Status of my profile
        subtxtWhatIsTheStatusOfMyProfile: () => cy.get('[data-cy="ques_string"]'),
        txtInfoWhatIsTheStatusOfMyProfile: () => cy.get('[data-cy="ans_string"]'),
        btnAvailLoan: () => cy.get('[data-cy="app.components.ContactUs.avail_loan_msg"]')
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    } 
    verifyRecentIssueQuestionLabel(RecentIssueQuestion){
        this.elements.lblRecentIssueQuestion().should('contain.text', RecentIssueQuestion)
    }
    verifyWhatIsTheStatusOfMyProfile(Profilestatus){
        this.elements.txtWhatIsTheStatusOfMyProfile().should('contain.text', Profilestatus)
    }
    verifyHowMuchTimeTakeForProfileApprovalText(TimeForProfileApproval){
        this.elements.txtHowMuchTimeTakeForProfileApproval().should('have.text', TimeForProfileApproval)
    }
    verifyReuploadOfDocumentText(ReuploadOfDocument){
        this.elements.txtReuploadOfDocument().should('contain.text', ReuploadOfDocument)
    }
    verifyMyProfileIsRejectedText(ProfileRejected){
        this.elements.txtMyProfileIsRejected().should('contain.text', ProfileRejected)
    }
    verifyDidntFindYourQueryButton(QueryButton){
        this.elements.btnDidntFindYourQuery().should('contain.text', QueryButton)
    }
    ClickOnWhatIstheStatusOfMyProfile(){
        this.elements.txtWhatIsTheStatusOfMyProfile().eq(0).click()
    }
    clickOnDidntFindYourQueryButton(){
        this.elements.btnDidntFindYourQuery().click()
    }
    verifysubtxtWhatIsTheStatusOfMyProfile(question){
        this.elements.subtxtWhatIsTheStatusOfMyProfile().should('contain.text',question)
    }
    verifytxtInfoWhatIsTheStatusOfMyProfile(answer){
        this.elements.txtInfoWhatIsTheStatusOfMyProfile().should('contain.text',answer)
    }
    verifybtnAvailLoan(AvailLoan){
        this.elements.btnAvailLoan().should('contain.text',AvailLoan)
    }
    clickOnAvailLoanButton(){
        this.elements.btnAvailLoan().click()
    }

}

export const profileVerificationPage = new ProfileVerificationPage