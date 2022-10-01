const randomGenerator = require('../help/random.page')
const singleSignOnLinkLocator = '[data-testid="login.signin.tab.sso"]';
const companyEmailFieldLocator = '[name="sso"] [name="email"]';
const submitButtonLocator = '[name="sso"] [type="submit"]'
const errorMessageLocator = '[data-testid="login.signin.message"]'

class LoginPage {
    
    
clickSingleSignOnLink () {
     cy.get(singleSignOnLinkLocator).click()
}

fillCompanyEmailField () {
    cy.get(companyEmailFieldLocator).type(randomGenerator.validEmailGenerator())
}

clickSubmitButton () {
    cy.get(submitButtonLocator).click()
}

checkErrorMessage () {
    return cy.get(errorMessageLocator)    
}

}
  
module.exports = new LoginPage();