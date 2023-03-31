///<reference types="cypress" />

export class CSREmailOTPInputPage{

    details = {
        zeplin : () => 'https://app.zeplin.io/project/5de4ed5ae340d86d8ac92529/screen/5df388e94802b449b83d18e8',
        overflow : () => 'https://overflow.io/s/1NS0Y7J3/?node=f63d5b3b',
    }

    elements = {
        btnBack : () => cy.get('[data-cy="goBackBtn"]'),
        iconHelp : () => cy.get('[]'), 
        lblOTPHeading : () => cy.get('[data-cy="app.components.EmailChange.email_change_otp_title"]'),
        iconOTP : () => cy.get('[]'),
        inpOTP: () => cy.get('[id="input-otp"]'),       
        txtTimer: () => cy.get('[data-cy="resend"]'),

        txtConsent: () => cy.get('[]'),
       
        btnSubmit: () => cy.get('[data-cy="app.components.Common.submit_btn_caps"]'),
        
          

        ///successfully submitted page




    }


    enterOTP(otp){
        this.elements.inpOTP().type(otp)
    }
    
    clearOTP() {
        this.elements.inpOTP().clear()
    }
    clickSubmitButton(){
        this.elements.btnSubmit().click({force:true})
    }
    
    
    
}

export const  csrEmailOTPInputPage = new CSREmailOTPInputPage