/// <reference types = "cypress" />

class FetchingProfilePage {

    details = {
        zeplin: () => '',//TODO : Zeplin Link
        overflow: () => 'https://overflow.io/s/1NS0Y7J3/?node=23ce703c',
    }

    elements = {
        lblFetchingProfile: () => cy.get('[]'),
        subTxtFetchingProfile: () => cy.get('[]'),
    }
}
export const fetchingProfilePage = new FetchingProfilePage