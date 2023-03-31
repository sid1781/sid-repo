

/// <reference types = "cypress" />

export class MobileTrustScoreContextPage {

    details = {
        //zeplin screen and actual screen may differ
        zeplin: () => '',
        overflow: () => '',
    }

    elements = {
        iconHelp:()=>cy.get('[]'),
        imgContext:()=>cy.get('[]'),
        txtPageTittle:()=>cy.get('[]'),
        subtxtContextAlredyExit:()=>cy.get('[]'),
        btnContinue:()=>cy.contains('Continue'),

    }
    clickContinue(){
        this.elements.btnContinue().click({force:true})
    }
}
export const mobileTrustScoreContextPage=new MobileTrustScoreContextPage;