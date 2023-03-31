/// <reference types = "cypress" />





export class CancelPolicyPage{
    details = {
        zeplin: () => 'There is No Zeplin Screen For This Page',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=6921ec61',
    }
    elements={
        pageTitle:()=>cy.getIframeBody().contains('span','Cancel Policy'),
        lblSelectCancellationReason:()=>cy.getIframeBody().contains('div','Select Cancellation reason'),
        txtIDontNeedThePolicyAnymore:()=>cy.getIframeBody().contains('div',"I don’t need the policy anymore"),
        optionIFoundABetterPolicy:()=>cy.getIframeBody().contains('div','I found a better policy'),
        optionIHaveAnotherPolicy:()=>cy.getIframeBody().contains('div','I have another policy'),
        optionIPurchasedByMistake:()=>cy.getIframeBody().contains('div','I purchased by mistake'),
        optionIAmLookingForMoreCover:()=>cy.getIframeBody().contains('div','I am looking for more cover'),

        chkBox:()=>cy.getIframeBody().find('[data-cy="checkbox"]'),
        btnCancelPolicy:()=>cy.getIframeBody().find('[data-cy="btn"]'),
        txtAreYouSure:()=>cy.getIframeBody().contains('p','Are you sure you want to cancel the policy'),
        btnYesCancel:()=>cy.getIframeBody().contains('button','Yes, Cancel'),
        btnNo:()=>cy.getIframeBody().contains('button','No'),
        btnGoBack:()=>cy.getIframeBody().find('[data-cy="btn"]'),
        lnkBack:()=>cy.getIframeBody().find('[class="icic_back typography__BIcon-z7jdzb-17 kIaxlt"]'),
        optionIDontNeedPolicyAnymore:()=>cy.getIframeBody().contains('div',"I don’t need the policy anymore"),
        inpOptionToCancel:()=>cy.getIframeBody().find('[class="Select-arrow"]'),

    }
    verifyInsuranceMyPoliciesTitle(insuranceTitle) {
        this.elements.iframeInsuance().then($iframe => {
            const iframeElement = $iframe.contents().find('body')
            let element= cy.wrap(iframeElement)
            element.contains('p', insuranceTitle).should('exist')
        })
    }
    verifyPageTitle(title){
        this.elements.pageTitle().should('have.text',title)
    }
    clickSelectCancellationReasonLabel(){
        this.elements.lblSelectCancellationReason().click()
    }
    clickOptionIHaveAnotherPolicy(){
        this.elements.optionIHaveAnotherPolicy().click()
    }
    clickIDontNeedThePolicyAnymoreText(){
        this.elements.txtIDontNeedThePolicyAnymore().click()
    }
    clickCheckBox(){
        this.elements.chkBox().click()
    }
    clickCancelPolicyButton(){
        this.elements.btnCancelPolicy().click()
    }
    verifyTxtCancelPolicy(txtcancel){
        this.elements.txtAreYouSure().should('have.text',txtcancel)
    }
    verifyBtnYes(){
        this.elements.btnYesCancel().should('be.visible')
    }
    verifyBtnNo(){
        this.elements.btnNo().should('be.visible')
    }
    clickBtnYesCancel(){
        this.elements.btnYesCancel().click()
    }
    clickBtnGoBack(){
        this.elements.btnGoBack().click()
    }
    clickLinkBack(){
        this.elements.lnkBack().click()
    }
    // verifyOptionIHaveAnotherPolicy(){
    //     this.elements.optionIHaveAnotherPolicy().should('be.selected')
    // }
    verifyCancelPolicyBtnEnabled(){
        this.elements.btnCancelPolicy().should('be.enabled')
    }
    verifyOptionIDontNeedPolicyAnymore(){
        this.elements.optionIDontNeedPolicyAnymore().click()
    }
    verifyOptionIFoundABetterPolicy(){
        this.elements.optionIFoundABetterPolicy().click()
    }
    verifyOptionIHaveAnotherPolicy(){
        this.elements.optionIHaveAnotherPolicy().click()
    }
    verifyOptionIPurchasedByMistake(){
        this.elements.optionIPurchasedByMistake().click()
    }
    verifyOptionIAmLookingForMoreCover(){
        this.elements.optionIAmLookingForMoreCover().click()
    }
    verifySelectCancellationReasonLabel(label){
        this.elements.lblSelectCancellationReason().should('have.text',label)
    }
    verifyCancelPolicyBtnEnabled(){
        this.elements.btnCancelPolicy().should('be.enabled')
    }
    verifyOptionIDontNeedPolicyAnymore(){
        this.elements.optionIDontNeedPolicyAnymore().click()
    }
    verifyOptionIFoundABetterPolicy(){
        this.elements.optionIFoundABetterPolicy().click()
    }
    verifyOptionIHaveAnotherPolicy(){
        this.elements.optionIHaveAnotherPolicy().click()
    }
    verifyOptionIPurchasedByMistake(){
        this.elements.optionIPurchasedByMistake().click()
    }
    verifyOptionIAmLookingForMoreCover(){
        this.elements.optionIAmLookingForMoreCover().click()
    }
    clickOptionToCancel(){
        this.elements.inpOptionToCancel().click()
    }	
    

}

export const cancelPolicyPage= new CancelPolicyPage