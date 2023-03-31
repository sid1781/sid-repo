/// <reference types = "cypress" />

export class SelectYourIFSCPage {

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
        btnSelect : () => cy.get('[class="skins__SelectBtn-sc-1w7icmd-205 hMdKDk BBtn-sc-19btvbw-0 jDbYbK"]'),
        lblSearch : () => cy.get('[data-cy="label_app.components.BbankAccount.search_result_placeh"]'),
        inpIFSC : () => cy.get('[data-cy="input_app.components.BbankAccount.search_result_placeh"]'),
        txtNumberOfBranchesFound : () => cy.get('[data-cy="branch"]'),
        inpAddress : () => cy.get('[data-cy="input_app.components.BbankAccount.search_result_placeh"]'),
        inpPincode : () => cy.get('[data-cy="input_app.components.BbankAccount.search_result_placeh"]'),
        txtBranch:()=>cy.get('[data-cy="app.components.Common.branch"]'),
        
        

        
    }

    verifyPageTitle(SelectYourIFSC) {
        this.elements.pageTitle().should('have.text', SelectYourIFSC)
    }

    clickSelectBtn() {
        this.elements.btnSelect().eq(0).click()
    }

    verifySearchLabel() {
        this.elements.lblSearch().should('be.visible')
    }

    enterIFSC(IFSC) {
        this.elements.inpIFSC().type(IFSC)
    }

    verifyNumberOfBranchesFoundText(NumberOfBranchesFound) {
        this.elements.txtNumberOfBranchesFound().should('have.text', NumberOfBranchesFound)
    }

    enterAddress(Address) {
        this.elements.inpAddress().type(Address)
    }

    enterPincode(Pincode) {
        this.elements.inpPincode().type(Pincode)
    }
    clickBranch(){
        this.elements.txtBranch().first().click()
    }





    

}

export const selectYourIFSCPage = new SelectYourIFSCPage