/// <reference types = "cypress" />

export class BuisnessDetailsGSTRUploadVerifyingPage {

    details = {
        zeplin: () => 'https://zpl.io/wqM58Nn',
        overflow: () => 'https://overflow.io/s/3ih4jz6j/?node=b7e5d24f&prototype',
    }

    Elements = {
        pagetitle: () => cy.get('[]'),
        iconVerifyingDetails: () => cy.get('[]'),
        txtVerifyingInformation: () => cy.get('[]'),
        valHours: () => cy.get('[]'),
        btnRefresh: () => cy.get('[]')
    }

    verifypageTitle(pagetitle) {
        this.Elements.pagetitle().should('have.text', pagetitle)
    }

    verifyVerifyingDetailsIcon() {
        this.Elements.iconVerifyingDetails().should('be.visible')
    }

    verifyingInformationText(informationtext) {
        this.Elements.txtVerifyingInformation().should('have.text', informationtext)
    }

    verifyHoursValue(hoursvalue) {
        this.Elements.valHours().should('have.value', hoursvalue)
    }

    verifyRefreshButton(Refresh) {
        this.Elements.btnRefresh().should('have.text', Refresh)
    }

    clickRefreshButton() {
        this.Elements.btnRefresh().click()
    }
}
export const businessDetailsGSTRUploadVerifyingPage = new BusinessDetailsGSTRUploadVerifyingPage()