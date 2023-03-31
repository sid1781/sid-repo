export class CooldownPeriodPage {

    details = {
        zeplin : () => '',
        overflow : () => '',
    }
 
     elements = {
         lblYouNeedToWaitTill: () => cy.get('[data-cy="app.components.BloanHome.wait_time_text"]'),
         valYouNeedToWaitTillDate: () => cy.get('[data-cy="notificationDate"]'),
         txtRetryToApplyForLoan: () => cy.get('[data-cy="notificationDate"]'),
         iconRepayYourLoansOnTime: () => cy.get('[data-cy="img_app.components.BloanHome.replay_warning_text"]'),
         txtRepayYourLoansOnTimeToIncreaseCreditworthiness: () => cy.get('[data-cy="label_app.components.BloanHome.replay_warning_text"]'),
         iconHelp: () => cy.get('[]'),
         btnOK: () => cy.get('[data-cy="button"]'),

         
     }

     verifyYouNeedToWaitTillLabel(){
        this.elements.lblYouNeedToWaitTill().should('be.visible')
    }

    verifyYouNeedToWaitTillDateValue(){
        this.elements.valYouNeedToWaitTillDate().should('be.visible')
    }

    verifyRetryToApplyForLoanText(){
        this.elements.txtRetryToApplyForLoan().should('be.visible')
    }

    verifyRepayLoansOnTimeIcon(){
        this.elements.iconRepayYourLoansOnTime().should('be.visible')
    }

    verifyRepayYourLoansOnTimeToIncreaseCreditworthinessText(){
        this.elements.txtRepayYourLoansOnTimeToIncreaseCreditworthiness().should('be.visible')
    }

    verifyHelpIcon(){
        this.elements.iconHelp().should('be.visible')
    }

    verifyOKButton(){
        this.elements.btnOK().should('be.visible')
    }

    clickOKButton(){
        this.elements.btnOK().click()
    }
  }
 export const cooldownPeriodPage = new CooldownPeriodPage