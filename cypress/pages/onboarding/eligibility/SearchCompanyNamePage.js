/// <reference types = "cypress" />

export class SearchCompanyNamePage {

    details = {
        zeplin: () => 'https://zpl.io/amxR4yr',
        zeplin_onboarding_newCompany: () => 'https://zpl.io/Am61006',
        oveflow_onboarding_2: () => 'https://overflow.io/s/UCDTKU1H/?node=d68bf83d',
    }

    elements = {
         // data-cy="app.components.Eligibility.search_company"
        pageTitle: () => cy.get('[data-cy="BTxtInheritedTitle" ]'),
        // iconSearch: () => cy.get('[]'),
        lblSearch: () => cy.get('[]'),
        inpSearchCompanyName: () => cy.get('[data-cy="input_app.components.Eligibility.search_type"]'),
        iconSearch: () => cy.get('i'),
        btnLoadMore: () => cy.get('[data-cy="app.components.Eligibility.load_more"]'),
        lnkDidntFindCompanyName: () => cy.get('[data-cy="app.components.Eligibility.other_search_option_text"]'),
        iconNewCompanyName: () => cy.get('[data-cy="input_otherField"]'),
        lblNewCompanyName: () => cy.get('[data-cy="label_otherField"]'),
        inpNewCompanyName: () => cy.get('[data-cy="input_otherField"]'),
        msgNewCompanyName: () => cy.get('[data-cy="errorMessage_otherField"]'),
        btnNext: () => cy.get('[data-cy="nextBtn"]'),
        lblFirstCompanyName: () => cy.get('[data-cy="companyItem_0"]',{timeout:5000}),       
    }
    // pageTitle
    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
       }
    // iconSearch
    verifySearchIcon() {
        this.elements.iconSearch().find('img').should('be.visible')
    }
    clicksearchIcon(){
        this.elements.iconSearch().click({force:true})
    }
    // lblSearch
    verifySearchLabel(search) {
        this.elements.lblSearch().should('have.attr', 'placeholder', search)
    }
    // inpSearchCompanyName
    enterSearchCompanyName(companyName) {
       this.elements.inpSearchCompanyName().type(companyName)
    }

    clickSearchCompanyName() {
        this.elements.inpSearchCompanyName().click({force:true})
    }

    clearSearchCompanyName() {
        this.elements.inpSearchCompanyName().clear()
    }

    verifyPrefilledCompanyName(companyName) {
        this.elements.inpSearchCompanyName().should('have.value', companyName)
    }

    verifyPlaceholerForSearchCompanyName(placeholderText) {
        this.elements.inpSearchCompanyName().should('have.attr', 'placeholder', placeholderText)
    }
    // iconSearch
    verifySearchIcon() {
        this.elements.iconSearch().find('img').should('be.visible')
    }
    // btnLoadMore
    clickLoadMoreBtn() {
        this.elements.btnLoadMore().click()
    }

    verifyLoadMoreText(loadmore) {
        this.elements.btnLoadMore().should('have.text', loadmore)
    }
    // btnDintFindYourCompanyName
    clickDintFindCompanyNameLink() {
        this.elements.lnkDidntFindCompanyName().should('be.visible').click({force:true})
    }

    verifyDintFindCompanyNameText(dintFindCompanyName) {
        this.elements.lnkDidntFindCompanyName().should('have.text', dintFindCompanyName)
    }
    // iconNewCompanyName
    verifyNewCompanyNameIcon(iconEnteringNewCompanyName) {
        this.elements.iconNewCompanyName().should('be.visible', iconEnteringNewCompanyName)
    }
    // lblNewCompanyName
    verifyNewCompanyNameLabel(NewCompanyName) {
        this.elements.lblNewCompanyName().should('have.attr', 'placeholder', NewCompanyName)
    }
    //inpNewCompanyName
    enterNewCompanyName(NewCompanyName) {
        this.elements.inpNewCompanyName().type(NewCompanyName)
    }

    clearNewCompanyName() {
        this.elements.inpNewCompanyName().clear()
    }

    verifyPlaceholerForNewCompanyName(placeholderNewCompanyName) {
        this.elements.inpNewCompanyName().should('have.attr', 'placeholder', placeholderNewCompanyName)
    }
    // msgNewCompanyName
    verifyNewCompanyNameMessage(errorMsg) {
        this.elements.msgNewCompanyName().should('have.text', errorMsg)
    }
    // btnNext
    verifyNextText(nextButton) {
        this.elements.btnNext().should('have.text', nextButton)
    }

    clickNextBtn() {
        this.elements.btnNext().click()
    }
    clickFirstCompanyNameLabel(){
        this.elements.lblFirstCompanyName().click({force:true})
    }
    verifyFirstCompanyNameLabel(){

        this.elements.lblFirstCompanyName().should('be.visible').click({force:true})
    }
    
}

export const searchCompanyNamePage = new SearchCompanyNamePage()
