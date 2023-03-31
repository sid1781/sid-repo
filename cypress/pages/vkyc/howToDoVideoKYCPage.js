/// <reference types = "cypress" />

export class HowToDoVideoKYCPage {
    details = {
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.BVideoKyc.how_vkyc_text"]'),
        txtStartVideoCall: () => cy.get('[data-cy="vkycStepContent_0"]'),
        iconStartVideoCall: () => cy.get('[data-cy="vkycStepImg_0"]'),
        iconAnswerTheQuestion: () => cy.get('[data-cy="IconImg_1"]'),
        txtAnswerTheQuestion: () => cy.get('[data-cy="vkycStepContent_1"]'),
        txtKeepYourOriginalPan: () => cy.get('[data-cy="vkycStepContent_2"]'),
        iconKeepYourOriginalPan: () => cy.get('[data-cy="vkycStepImg_2"]'),
        iconSelfieInstructions: () => cy.get('[data-cy="IconImg_3"]'),
        txtSelfieInstructions: () => cy.get('[data-cy="vkycStepContent_3"]'),
        rbTermsAndConditions: () => cy.get('[data-cy="check_icon"]'),
        txtTermsAndConditions: () => cy.get('.skins__TxtDiv-w5pjml-39'),
        btnStartVideoCall: () => cy.get('[data-cy="app.components.BVideoKyc.start_video_btn"]'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('contain.text', title)
    } 
    verifyStartVideoCallText(StartVideoCall){
        this.elements.txtStartVideoCall().should('contain.text', StartVideoCall)
    }
    verifyStartVideoCallIcon(iconStartVideoCall){
        this.elements.iconStartVideoCall().should('have.attr', 'src', iconStartVideoCall)
    }
    verifyAnswerTheQuestionIcon(iconAnswerTheQuestion){
        this.elements.iconAnswerTheQuestion().should('have.attr', 'src', iconAnswerTheQuestion)
    }
    verifyAnswerTheQuestiontext(txtAnswerTheQuestion) {
        this.elements.txtAnswerTheQuestion().should('contain.text', txtAnswerTheQuestion)
    }
    verifyKeepYourOriginalCardtext(txtKeepYourOriginalPan) {
        this.elements.txtKeepYourOriginalPan().should('contain.text', txtKeepYourOriginalPan)
    } 
    verifyKeepYourOriginalCardIcon(iconKeepYourOriginalPan){
        this.elements.iconKeepYourOriginalPan().should('have.attr', 'src', iconKeepYourOriginalPan)
    }
    verifySelfieInstructionIcon(iconSelfieInstructions){
        this.elements.iconSelfieInstructions().should('have.attr', 'src', iconSelfieInstructions)
    }
    verifySelfieInstructionText(txtSelfieInstructions){
        this.elements.txtSelfieInstructions().should('have.text', txtSelfieInstructions)
    }
    clickOnTermsAndConditionRB(){
        this.elements.rbTermsAndConditions().click()
    }
    verifyTermsAndConditionText(){
        this.elements.txtTermsAndConditions().should('be.visible')
    }
    verifyStartVideoCallBtn(btnStartVideoCall){
        this.elements.btnStartVideoCall().should('contain.text', btnStartVideoCall)
    }
    clickOnStartVideoCallBtn(){
        this.elements.btnStartVideoCall().click()
    }
    verifyTermsAndConditionRBChecked(img){
        this.elements.rbTermsAndConditions().should('have.attr','src', img)
    }
}

export const howToDoVideoKYCPage = new HowToDoVideoKYCPage