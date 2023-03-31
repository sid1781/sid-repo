
export class MobileLetterOfContext{
    elements={
            lblBack:()=>cy.get('[]'),
            pageTittle:()=>cy.get('[]'),
            txtLeterOfConsent:()=>cy.get('[]'),
            subtxtLetterOfConsent:()=>cy.get('[]'),
            btnAcceptAndContinue:()=>cy.get('[data-cy="buttonTxt"]'),

    }
    clickAcceptAndContinuebtn(){
        this.elements.btnAcceptAndContinue().click()
    }
}
export const mobileLetterOfContext=new MobileLetterOfContext;