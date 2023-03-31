/// <reference types = "cypress" />

export class FindIFSCPage {

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/616cf272ceebef17c0b2e2db',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements ={
        pageTitle : () => cy.get('[data-cy="BTxtInheritedTitle"]'),
        btnBack : () => cy.get('[data-cy="goBackBtn"]'),
        iconHelp : () => cy.get('[data-cy="helpImg"]'),
        lblBankName : () => cy.get('[data-cy="label_banks"]'),
        iconBank : () => cy.get('[data-cy="img_banks"]'), 
        inpBankName : () => cy.get('[data-cy="input_banks"]'),
        iconSearch : () => cy.get('[]'),
        txtBankName : () => cy.get('[class="BSelectRevamp__BankItem-sc-1xif06d-7 jOZMuc"]'),
        txtErrorMsg : () => cy.get('[data-cy="informationLabel"]'),
        txtInvalidBankNameErrorMsg : () => cy.get('p').children().children(),
        inpStateName : () => cy.get('[data-cy="text_app.components.BbankAccount.lookup_ifsc_searstat"]'),
        inpCityName : () => cy.get('[data-cy="text_app.components.BbankAccount.lookup_ifsc_searcty"]'),
        btnLookUpIFSC : () => cy.get('[data-cy="lookupIfscBtntxt"]'),
        txtBankIFSCUBIN:()=>cy.get('[data-id="Union Bank Of India"]'),
        inpState:()=>cy.get('.Select-arrow-zone'),
        inpCity:()=>cy.get('.Select-arrow-zone'),
        txtBankIFSCUBIN:()=>cy.get('[data-id="Union Bank Of India"]'),
        txtBankIFSCSyndicateBank:()=>cy.get('[data-id="Syndicate Bank"]'),
        okBtn:()=>cy.get('[data-cy="lookupIfscBtntxtMerge"]'),
        inpBank:()=>cy.get('[data-cy="input_banks"]'),
        
        

        
    }

   clickContinueBtn() {
        this.elements.btnContinue().click()
    }

    clickAddSavingBankAccount() {
        this.elements.btnAddSavingBankAcct().click()
    }

    verifyBankStatus(status) {
        this.elements.lblVerified().should('contain', status)
    }  

    verifyPageTitle(FindIFSC) {
        this.elements.pageTitle().should('have.text', FindIFSC)
    }

    enterBankName(BankName) {
        this.elements.inpBankName().type(BankName)
     }

    clickSuggestedBank() {
        this.elements.txtBankName().click()
    }

    verifyBankNameErrorMessageText(ErrorMessage) {
        this.elements.txtErrorMsg().should('have.text', ErrorMessage)
    }

    verifyInvalidBankNameErrorMessageText(ErrorMessage) {
        this.elements.txtInvalidBankNameErrorMsg().should('have.text', ErrorMessage)
    }

    clickFirstSuggestedBank() {
        this.elements.txtBankName().first().click()
    }

    enterStateName(StateName) {
        this.elements.inpStateName().first().type(StateName)
     }

     enterCityName(CityName) {
        this.elements.inpCityName().last().type(CityName)
     }

     clickLookUpIFSCBtn() {
        this.elements.btnLookUpIFSC().click()
    }

    clickBankIFSCUBIN(){
        this.elements.txtBankIFSCUBIN().click()
    }
    clickStateBox(state){
        this.elements.inpState().first().type(state)
    }
    clickCityBox(city){
        this.elements.inpCity().last().type(city)
    }
    clickBankSyndicateBank(){
        this.elements.txtBankIFSCSyndicateBank().click()
    }
    clickOkBtn(){
        this.elements.okBtn().click()
    }
    verifyEntredBank(bankname){
        this.elements.inpBank().should('be.visible',bankname)
    }
    
    verifyBankNameErrorMessageText(ErrorMessage) {
        this.elements.txtErrorMsg().should('have.text', ErrorMessage)
    }
    
    verifyBankNameLabel(bankname){
        this.elements.lblBankName().should('contain.text',bankname)
    }


}

export const findIFSCPage = new FindIFSCPage