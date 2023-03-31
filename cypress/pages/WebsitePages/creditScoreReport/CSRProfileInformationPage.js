export class CSRProfileINformationPage{
    
    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5df388e94802b449b83d18e8',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {

        txtBasicInformation:()=>cy.get('[data-cy="BTxtInheritedTitle"]'),
        txtPanNumber:()=>cy.get('[data-cy="label_app.components.CreditScore.user_pan_label"]'),
        lblEnterYourPAN: () => cy.get('[data-cy="label_app.components.Eligibility.elg_pan_label"]'),
       //pancardinput
        iconEnterYourPAN: () => cy.get('[]'),
        inpPAN: () => cy.get('[data-cy="input_app.components.CreditScore.user_pan_label"]'),
        txtConsentCKYCR: () => cy.get('[data-cy="checkboxText_app.components.Eligibility.elg_pan_agree_label"]'),
        //Date of birth
        typeDate:()=>cy.get('[id="selectDate"]'),
        typeMonth:()=>cy.get('[id="selectMonth"]'),
        typeYear:()=>cy.get('[id="selectYear"]'),

        inpFname:()=>cy.get('[data-cy="input_app.components.CreditScore.user_fname_placeholder"]'),
        inpLname:()=>cy.get('[data-cy="input_app.components.CreditScore.user_lname_placeholder"]'),
        inpEmail:()=>cy.get('[data-cy="input_app.components.CreditScore.user_email_id_label"]'),
        inpAddressLine2:()=>cy.get('[data-cy="input_app.components.CreditScore.user_address2_Label"]'),
        // btnsubmit:()=>cy.get('.BBtn-sc-19btvbw-0')
        btnsubmit:()=>cy.contains('Submit details')
    }
    // inpPAN
    enterPan(pan) {
        let panArray = Array.from(pan)
        this.elements.inpPAN()
            .each(($el, index) => {
                cy.get($el)
                    .type(panArray[index])
            })
    }
    clearPan(pan) {
        let panArray1 = Array.from(pan)
        this.elements.inpPAN()
            .each(($el, index) => {
                cy.get($el)
                    .type(panArray1[index]).clear()
            })
    }

  
    enterDate(date){
        this.elements.typeDate().select(date)
    }
    enterMonth(month){
        this.elements.typeMonth().select(month)
    }
    enterYear(year){
        this.elements.typeYear().select(year)
    }
    enterFNameinput(fname){
        this.elements.inpFname().type(fname)
    }
    enterLastName(lname){
        this.elements.inpLname().type(lname)
    }
    enterEmail(email){
        this.elements.inpEmail().type(email)
    }
    clickAddressLine2Input(secondtxt){
        this.elements.inpAddressLine2().type(secondtxt)
    }
    submitButton(){
        this.elements.btnsubmit().click({force : true})
    }
    
}
export const csrProfileInformationPage=new CSRProfileINformationPage;