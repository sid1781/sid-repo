/// <reference types = "cypress" />

export class HomePageOfPD {

    details = {
        zeplin: () => 'https://zpl.io/jZoeJrq',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
                imgCreditLImit:()=>cy.get('[]'),
                txtPageTtile:()=>cy.get('[]'),
                subTxtDescription:()=>cy.get('[]'),
                btnSkipForLater:()=>cy.get('[]'),
                btnContinue:()=>cy.get('button').eq(1),
    }
    clickContinueBtn(){
        this.elements.btnContinue().click()
    }
}
export const homePageOfPD=new HomePageOfPD
