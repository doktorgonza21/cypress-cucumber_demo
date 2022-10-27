const randomPage = require('../help/random.page')
const becomeBetaTesterBlock = '#become-a-beta-tester'
const firstNameFieldLocator = '#FirstName'
const lastNameFieldLocator = '#LastName'
// const companyFieldLocator = '#Company'
const primaryUseLocator = '#Use_Case_Form__c'
const primaryUseListLocator = '#Use_Case_Form__c option'
const emailFieldLocator = '#Email'
const phoneFieldLocator = '#Form_Phone__c'
const tellUsFieldLocator = '#Form_Additional_Information__c'
const dropDownLocator = '#Partner_Type__c'
const applyNowButtonLocator = 'span>button'
const messageLocator = 'h1>span'

class BetaTestPage {

scrollToForm () {
    return cy.get(becomeBetaTesterBlock).scrollIntoView()
}

fillForm () {
    cy.get(firstNameFieldLocator).type(randomPage.validNameSurnameGenerator())
    cy.get(lastNameFieldLocator).type(randomPage.validNameSurnameGenerator())
    // cy.get(companyFieldLocator).type(randomPage.validFullNameGenerator())
    // cy.get(primaryUseLocator).click()
    // cy.get(primaryUseListLocator).last().click()
    cy.get(emailFieldLocator).type(randomPage.validEmailGenerator())
    // cy.get(phoneFieldLocator).type(randomPage.validPhoneGenerator())
    // cy.get(tellUsFieldLocator).type(randomPage.validUsernameGenerator())
    // cy.get(dropDownLocator).select('Reseller')
    
}

clickApplyButton () {
    cy.get(applyNowButtonLocator).click()
}

checkMessage () {
    return cy.get(messageLocator)
}
   
}
  
module.exports = new BetaTestPage();
