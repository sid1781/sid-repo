export class HeaderPage {

    details = {
        zeplin: () => '',
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=e40e434b',
    }

    elements = {
        imgKreditBeeLogo: () => cy.get('img').first(),
        iconHelp: () => cy.get('[data-cy="fixedHeadHelpImg"]'),
        iconApplyCouponCodHelp: () => cy.get('[data-cy="helpImg"]'),
        iconSettings: () => cy.get('[data-cy="fixedHeadSettingsImg"]'),
        iconBack: () => cy.get('[data-cy="goBackBtn"]')
    }

    verifyKreditBeeLogoIcon(imgKreditBeeLogo) {
        this.elements.imgKreditBeeLogo().should('have.attr', 'src', imgKreditBeeLogo)
    }

    verifyHelpIcon(iconHelp) {
        this.elements.iconHelp().should('have.attr', 'src', iconHelp)
    }

    clickApplyCuponCodePageHelpIcon() {
        this.elements.iconApplyCouponCodHelp().click()
    }

    clickHelpBtn() {
        this.elements.iconHelp().click()
    }

    verifySettingIcon(iconSettings) {
        this.elements.iconSettings().should('have.attr', 'src', iconSettings)
    }

    clickSettingBtn() {
        this.elements.iconSettings().click()
    }

    verifyBackIcon(iconBack) {
        this.elements.iconBack().should('have.attr', 'src', iconBack)
    }

    clickBackBtn() {
        this.elements.iconBack().click()
    }
}

export const headerPage = new HeaderPage()