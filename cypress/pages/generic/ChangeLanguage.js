export class ChangeLanguage {

    details = {
        zeplin: () => '',//TODO
        overflow: () => '', //TODO
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.components.Common.change_lang_text"]'),
        lblEnglish: () => cy.get('[data-cy="chooseLanguageTitle_0"]'),
        subTextEnglish: () => () => cy.get('[data-cy="chooseLanguagesubTitle_0"]'),
        chkBoxEnglish: () => cy.get('[data-cy="chooseLanguagesubImg_0"]'),
        lblHindi: () => cy.get('[data-cy="chooseLanguageTitle_1"]'),
        subTextHindi: () => () => cy.get('[data-cy="chooseLanguagesubTitle_1"]'),
        chkBoxHindi: () => cy.get('[data-cy="chooseLanguagesubImg_1"]'),
    }

    // pageTitle 
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }
    // lblEnglish 
    verifyEnglishLabel(lblEnglish) {
        this.elements.lblEnglish().should('have.text', lblEnglish)
    }
    // subTextEnglish 
    verifyEnglishSubText(subTextEnglish) {
        this.elements.subTextEnglish().should('have.text', subTextEnglish)
    }
    // chkBoxEnglish 
    clickEnglishChkBox() {
        this.elements.chkBoxEnglish().click()
    }
    // lblHindi 
    verifyHindiLabel(lblHindi) {
        this.elements.lblHindi().should('have.text', lblHindi)
    }
    // subTextHindi 
    verifyHindiSubText(subTextHindi) {
        this.elements.subTextHindi().should('have.text', subTextHindi)
    }
    // chkBoxHindi
    clickHindiChkBox() {
        this.elements.chkBoxHindi().click()
    }

}

export const changeLanguage = new ChangeLanguage()