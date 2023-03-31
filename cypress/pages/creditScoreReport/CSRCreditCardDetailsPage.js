///<reference types="cypress" />

export class CSRCreditCardPage{

    details = {
        zeplin : () => 'https://zpl.io/ewrzvym',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }
    elements = {
        pageTitle : () => cy.get('[]'), 
        lblAmazonPayICICI : () => cy.get('[]'), 
        lblActive : () => cy.get('[]'), 
        lblCreditCard : () => cy.get('[]'), 
        lblCreditLimit : () => cy.get('[]'), 
        lblCreditLimitMin : () => cy.get('[]'), 
        lblCreditLimitMax : () => cy.get('[]'), 
        lblLastUpdateOn : () => cy.get('[]'), 
        lblOnTimePayment : () => cy.get('[]'), 
        valOnTimePayment : () => cy.get('[]'), 
        lblDelayedPayment : () => cy.get('[]'), 
        valDelayedPayment : () => cy.get('[]'), 
        lblAccountOpeningDate : () => cy.get('[]'),
        lblLastPaymentDate : () => cy.get('[]'),
        lblPaymentHistory : () => cy.get('[]'),
        rbPaymentHistoryYear : () => cy.get('[]'),
        lblJan : () => cy.get('[]'),
        lblFeb : () => cy.get('[]'),
        lblMar : () => cy.get('[]'),
        lblApr : () => cy.get('[]'),
        lblMay : () => cy.get('[]'),
        lblJun : () => cy.get('[]'),
        lblJul : () => cy.get('[]'),
        lblAug : () => cy.get('[]'),
        lblSep : () => cy.get('[]'),
        lblOct : () => cy.get('[]'),
        lblNov : () => cy.get('[]'),
        lblDec : () => cy.get('[]'),
        lblMissedPayment : () => cy.get('[]'),
    }  
    verifyPageTitle(pagetitle){
        this.elements.pageTitle().should('have.text', pagetitle)
    }
    verifyAmazonPayICICILabel(){
        this.elements.lblAmazonPayICICI().should('be.visible')
    }
    verifyActiveLabel(){
        this.elements.lblActive().should('be.visible')
    }
    verifyCreditCardLabel(){
        this.elements.lblCreditCard().should('be.visible')
    }
    verifyCreditLimitLabel(){
        this.elements.lblCreditLimit().should('be.visible')
    } 
    verifyCreditLimitMinLabel(){
        this.elements.lblCreditLimitMin().should('be.visible')
    }
    verifyCreditLimitMaxLabel(){
        this.elements.lblCreditLimitMax().should('be.visible')
    }
    verifyLastUpdateOnLabel(){
        this.elements.lblLastUpdateOn().should('be.visible')
    }
    verifyOnTimePaymentLabel(){
        this.elements.lblOnTimePayment().should('be.visible')
    } 
    verifyOnTimePaymentValue(){
        this.elements.valOnTimePayment().should('be.visible')
    } 
    verifyDelayedPaymentLabel(){
        this.elements.lblDelayedPayment().should('be.visible')
    }
    verifyDelayedPaymentValue(){
        this.elements.valDelayedPayment().should('be.visible')
    } 
    verifyAccountOpeningDateLabel(){
        this.elements.lblAccountOpeningDate().should('be.visible')
    }
    verifyLastPaymentDateLabel(){
        this.elements.lblLastPaymentDate().should('be.visible')
    }
    verifyPaymentHistoryLabel(){
        this.elements.lblPaymentHistory().should('be.visible')
    }
    verifyJanLabel(){
        this.elements.lblJan().should('be.visible')
    } 
    verifyFebLabel(){
        this.elements.lblFeb().should('be.visible')
    }
    verifyMarLabel(){
        this.elements.lblMar().should('be.visible')
    } 
    verifyAprLabel(){
        this.elements.lblApr().should('be.visible')
    } 
    verifyMayLabel(){
        this.elements.lblMay().should('be.visible')
    }
    verifyJunLabel(){
        this.elements.lblJun().should('be.visible')
    } 
    verifyJulLabel(){
        this.elements.lblJul().should('be.visible')
    }
    verifyAugLabel(){
        this.elements.lblAug().should('be.visible')
    } 
    verifySepLabel(){
        this.elements.lblSep().should('be.visible')
    } 
    verifyOctLabel(){
        this.elements.lblOct().should('be.visible')
    }
    verifyNovLabel(){
        this.elements.lblNov().should('be.visible')
    } 
    verifyDecLabel(){
        this.elements.lblDec().should('be.visible')
    } 
    verifyMissedPaymentLabel(){
        this.elements.lblMissedPayment().should('be.visible')
    }
}

export const  csrCreditCardPage = new CSRCreditCardPage()

