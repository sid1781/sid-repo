/// <reference types = "cypress" />

export class HowToTakePicturePage {

    details = {
        zeplin: () => 'https://zpl.io/vMqdZL5',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        PageTitle: () => cy.get('[]'),
        imgOfHowToTakePicture: () => cy.get('[]'),
        lblSteps: () => cy.get('[]'),
        subTextOfSteps1: () => cy.get('[]'),
        subTextOfSteps2: () => cy.get('[]'),
        subTextOfSteps3: () => cy.get('[]'),
        btnCaptureAndUpload: () => cy.get('[]'),
    }

}

export const howToTakePicturePage = new HowToTakePicturePage