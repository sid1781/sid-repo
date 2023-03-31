/// <reference types = "cypress" />

export class CreditLimitEnhancementPage {
    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="conatctUsActive"]'),
        lblRecentIssueQuestion: () => cy.get('[data-cy="app.components.ContactUs.recent_issues_msg"]'),
        txtWhatIsMyCreditLimit: () => cy.get('[data-cy="recentIssueQuestion_0"]'),
        txtHowCanIIncreaseCreditLimit: () => cy.get('[data-cy="recentIssueQuestion_1"]'),
        txtWhenCanTheCreditLimitDecreased: () => cy.get('[data-cy="recentIssueQuestion_2"]'),
        btnDidntFindYourQuery: () => cy.get('[data-cy="app.components.ContactUs.dint_find_query_msg"]'),
        subtxtWhatIsMyCreditLimit: () => cy.get('[data-cy="ques_string"]'),
        txtInfoWhatIsMyCreditLimit: () => cy.get('[data-cy="ans_string"]'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    } 
    verifyRecentIssueQuestionLabel(){
        this.elements.lblRecentIssueQuestion().should('be.visible')
    }
    verifyWhatIsMyCreditLimitText(){
        this.elements.txtWhatIsMyCreditLimit().should('be.visible')
    }
    verifyHowCanIIncreaseCreditLimitText(name){
        this.elements.txtHowCanIIncreaseCreditLimit().should('contain.text', name)
    }
    verifyWhenCanTheCreditLimitDecreasedText(){
        this.elements.txtWhenCanTheCreditLimitDecreased().should('be.visible')
    }
    verifyDidntFindYourQueryButton(){
        this.elements.btnDidntFindYourQuery().should('be.visible')
    }
    ClickOnWhatIsMyCreditLimitText(){
        this.elements.txtWhatIsMyCreditLimit().eq(0).click()
    }
    clickOnDidntFindYourQueryButton(){
        this.elements.btnDidntFindYourQuery().click()
    }
    verifysubtxtWhatIsMyCreditLimit(question){
        this.elements.subtxtWhatIsMyCreditLimit().should('contain.text',question)
    }
    verifytxtinfoWhatIsMyCreditLimit(answer){
        this.elements.txtInfoWhatIsMyCreditLimit().should('contain.text',answer)
    }
    clickOnHowCanIIncreaseCreditLimit(){
        this.elements.txtHowCanIIncreaseCreditLimit().eq(1).click()
    }
}

export const creditLimitEnhancementPage = new CreditLimitEnhancementPage