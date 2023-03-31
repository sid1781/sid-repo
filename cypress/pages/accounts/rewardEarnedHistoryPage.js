export class RewardEarnedHistoryPage {

    details = {
        zeplin: () => 'https://zpl.io/a7gez6E',
        overflow: () => '', //TODO link
    }

    elements = {
        pageTitle: () => cy.get('[data-cy="app.containers.ReferAndEarn.my_transaction"]'),
        lblPoints: () => cy.get('[]'),
        //earn block
        iconEarn: () => cy.get('[]'),
        lblEarn: () => cy.get('[]'),
        txtPoints: () => cy.get('[]'),
        subText: () => cy.get('[]'),
        txtMonthDateYear: () => cy.get('[]'),
    }

    verifyPageTitle(title) {
        this.elements.pageTitle().should('have.text', title)
    }

    verifyPointsLabel(lblPoints) {
        this.elements.lblPoints().should('have.text', lblPoints)
    }

    verifyEarnIcon(icon) {
        this.elements.iconEarn().should('have.attr', 'src', icon)
    }

    verifyEarnLabel(lblEarn) {
        this.elements.lblEarn().should('have.text', lblEarn)
    }

    verifySubText(subText) {
        this.elements.subText().should('have.text', subText)
    }

    verifyMonthDateYear(txtMonthDateYear) {
        this.elements.txtMonthDateYear().should('have.text', txtMonthDateYear)
    }

}

export const rewardEarnedHistoryPage = new RewardEarnedHistoryPage()