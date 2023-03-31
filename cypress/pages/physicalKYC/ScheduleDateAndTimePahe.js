/// <reference types = "cypress" />

export class ScheduleDateAndTimePahe{

    details = {
        zeplin: () => '',
        overflow: () => '',
    }
    elements={

        lblBackButton:()=>cy.get('[]'),
        pageTittle:()=>cy.get('[data-cy="BTxtInheritedTitle"]'),
        iconHelp:()=>cy.get('[]'),
        iconCalender:()=>cy.get('[]'),
        valCalender:()=>cy.get('[]'),
        txtSelectDate:()=>cy.get('span').should('have.text','Select DateSelect Time10:00 am11:30 am01:00 pm02:30 pm04:00 pm05:30 pmSchedule Appointment'),
        valMonth:()=>cy.get('[]'),
        txtSelectTime:()=>cy.contains('Select Time'),
        subTxtMorningSlot:()=>cy.get('[]'),
        btnFirstTime11:()=>cy.contains('10:00 am'),
        btnSecondTime11_30:()=>cy.get('[]'),
        subtxtAfternoonSlots:()=>cy.get('[]'),
        btnFirstTime1:()=>cy.get('[]'),
        btnSecondTime12_30:()=>cy.get('[]'),
        subtxtEveningSlots:()=>cy.get('[]'),
        btnFirstTime4:()=>cy.get('[]'),
        btnSecondTime5_30:()=>cy.get('[]'),
        imgDescription:()=>cy.get('[]'),
        txtDescription:()=>cy.get('[]'),
        btnScheduleAppointment:()=>cy.contains('Schedule Appointment')

        }
        verifyPageTittle(){
            this.elements.pageTittle().should('be.visible')
        }
        verifySelectDate(){
            this.elements.txtSelectDate().should('be.visible')
        }
        verifySelectTime(){
            this.elements.txtSelectTime().should('be.visible')
        }
        clickFirstTime11(){
            this.elements.btnFirstTime11().click()
        }
        clickScheduleAppointment(){
            this.elements.btnScheduleAppointment().click({force:true})
        }
        }
export const sheduleDateAndTimePage=new ScheduleDateAndTimePahe;