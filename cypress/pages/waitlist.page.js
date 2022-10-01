const randomPage = require('../help/random.page')
const joinWaitListButtonLocator = 'h1~div div>a'
const firstNameFieldLocator = '#FirstName'
const lastNameFieldLocator = '#LastName'
const emailFieldLocator = '#Email'
const applyNowButtonLocator = 'span>button'
const message = 'h1>span'

class WaitlistPage {
   
clickJoinWaitListButton () {
    cy.get(joinWaitListButtonLocator).click()
}

fillFirstNameField () {
    cy.get(firstNameFieldLocator).type(randomPage.validNameSurnameGenerator())
}

fillLastNameField () {
    cy.get(lastNameFieldLocator).type(randomPage.validNameSurnameGenerator())
}

fillEmailField () {
    cy.get(emailFieldLocator).type(randomPage.validEmailGenerator())
}

clickApplyNowButton () {
    cy.get(applyNowButtonLocator).click()
}

checkMessage () {
    return cy.get(message)
}
   
}
  
module.exports = new WaitlistPage();
