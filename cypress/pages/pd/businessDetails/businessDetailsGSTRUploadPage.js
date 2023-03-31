/// <reference types = "cypress" />

export class BusinessGSTR3BUploadPage {

    details = {
        zeplin: () => 'https://zpl.io/L4mZEpB',
        zeplin_reupload_page: () => 'https://zpl.io/wqM8QZg',
        overflow: () => 'https://overflow.io/s/3IH4JZ6J/?node=b7e5d24f&prototype',
    }
elements = {
      pageTitle : () => cy.get(),
      iconSchedule  : () => cy.get(),
      txtUploadGSTR : () => cy.get(),
      valUploadGSTR : () => cy.get(),
      btnPDFUpload : () => cy.get(),
      lblPDFUpload : () => cy.get(),
      txtPDFInfo : () => cy.get(),
      valPDFMonths : () => cy.get(),
      valSizeFile : () => cy.get(),
      btnContinue : () => cy.get(),
      lblMonthYear : () => cy.get(),
      lblReupload : () => cy.get(),
   }

   verifyPageTitle(title) {
    this.elements.pageTitle().should('have.text', title)
   }

   verifyScheduleIcon() {
    this.elements.iconSchedule().should('be.visible')
   }

   verifyUploadGSTRText(uploadGSTR) {
    this.elements.txtUploadGSTR().should('have.text' , uploadGSTR)
   }

   EnterUploadGSTRValue() {
    this.elements.valUploadGSTR().should('be.visible')
   }

   verifyPDFButton(PDF) {
    this.elements.btnPDFUpload().should('have.text', PDF)
   }

   clickPDFButton() {
    this.elements.btnPDFUpload().click()
   }

   verifyPDFUploadLabel(PDF) {
    this.elements.lblPDFUpload().should('have.text', PDF)
   }

   verifyPDFInfoText(PDFinfo) {
    this.elements.txtPDFInfo().should('have.text', PDFinfo)
   }

   EnterPDFMonthsValue() {
    this.elements.valPDFMonths().should('be.visible')
   }

   verifySizeFileValue() {
    this.elements.valSizeFile().should('be.visible')
   }
   
   verifyContinueButton(Continue) {
    this.elements.btnContinue().should('have.text', Continue)
   }

   clickContinueButton() {
    this.elements.btnContinue().click()
   }
   
   verifyMonthYearLabel(monthyear) {
    this.elements.lblMonthYear().should('have.text' , monthyear)
   }
   
   verifyReuploadLabel(reupload) {
    this.elements.lblReupload().should('have.text', reupload)
   }
}

export const businessGSTR3BUploadPage = new BusinessGSTR3BUploadPage()
