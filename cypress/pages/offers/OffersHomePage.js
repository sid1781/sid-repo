
/// <reference types = "cypress" />

export class OffersHomePage {

    details = {
        zeplin: () => 'https://zpl.io/anEK4ol',//TODO: Zeplin Link
        overflow: () => '',//TODO: overFlow Link
    }

    elements ={   
        lblOffers : () => cy.contains('span','Offers'),
        iconCities : () => cy.get('[]'),
        ddAllOffers : () => cy.contains('span','All Offers'),
        ddlAllOffers : () => cy.get('[class="skins__Popup-sc-1kh9xfp-1 kETUSM"]'),
        rbElectronics : () => cy.get('div').should('be.visible','Electronics').eq(0),    
        rbAccessories : () => cy.get('div').should('be.visible','Accessories'),
        rbHealthCare : () => cy.get('div').should('be.visible','Healthcare').eq(2),
        rbTravel : () => cy.get('div').should('be.visible','Travel').eq(3),
        rbOthers : () => cy.get('div').should('be.visible','Others'),
        rbGrooming : () => cy.get('div').should('be.visible','Grooming'),
        rbFoodAndBeverages : () => cy.get('div').should('be.visible','Food & Beverages').eq(1),
        imgBanners : () => cy.get('[]'),
        iconOfferProvider  : () => cy.get('[]'),
        lblOfferProvider  : () => cy.get('[]'),
        subTxtOfferProvider  : () => cy.get('[]'),
        imgOfferProvider  : () => cy.get('[]'),
        lnkExplore  : () => cy.get('[]'),
        chevronLeftOffersBanner : () => cy.get('[]'),
        chevronRightOffersBanner : () => cy.get('[]'),
        slideDotOfferBanner : () => cy.get('[]')
    }
    verifyOffersLabel(offers){
        this.elements.lblOffers().should('have.text',offers)
    }
    verifyAllOffersDropDown(alloffers){
        this.elements.ddAllOffers().should('have.text',alloffers)
    }
    clickAllOffersDropDown(){
        this.elements.ddAllOffers().click({force:true})
    }
    verifyAllOffersDropDownList(alloffers){
        this.elements.ddlAllOffers().should('have.text',alloffers)
    }
    clickAllOffersDropDownList(){
        this.elements.ddlAllOffers().click({force:true})
    }
    verifyElectronicsRadioButton(){
        this.elements.rbElectronics().should('be.visible')
    }
    clickElectronicsRadioButton(){
        this.elements.rbElectronics().click({force:true})
    }
    verifyAccessoriesRadioButton(){
        this.elements.rbAccessories().should('be.visible')
    }
    clickAccessoriesRadioButton(){
        this.elements.rbAccessories().click({force:true})
    }
    verifyHealthCareRadioButton(){
        this.elements.rbHealthCare().should('be.visible')
    }
    clickHealthCareRadioButton(){
        this.elements.rbHealthCare().click({force:true})
    }
    verifyTravelRadioButton(){
        this.elements.rbTravel().should('be.visible')
    }
    clickTravelRadioButton(){
        this.elements.rbTravel().click({force:true})
    }
    verifyOthersRadioButton(){
        this.elements.rbOthers().should('be.visible')
    }
    clickOthersRadioButton(){
        this.elements.rbOthers().click({force:true})
    }
    verifyGroomingRadioButton(){
        this.elements.rbGrooming().should('be.visible')
    }
    clickGroomingRadioButton(){
        this.elements.rbGrooming().click({force:true})
    }
    verifyFoodAndBeveragesRadioButton(){
        this.elements.rbFoodAndBeverages().should('be.visible')
    }
    clickFoodAndBeveragesRadioButton(){
        this.elements.rbFoodAndBeverages().click({force:true})
    }

}

export const offersHomePage = new OffersHomePage

