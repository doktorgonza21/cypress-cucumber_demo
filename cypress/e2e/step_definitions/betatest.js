const betatestPage = require('../../pages/betatest.page')
const beforePage = require('../../help/before.page')
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user opens {string} page and scroll down to become a tester form', (url) => {
    cy.visit(url);
    beforePage.closeCookiesModalWindow()
    betatestPage.scrollToForm()
    cy.wait(3000)
})

When('A user fills the form and clicks Submit button', () => {
    betatestPage.fillForm()
    betatestPage.clickApplyButton()
    cy.wait(3000)
})    

Then('A user should see the {string} header message', (message) => {
    betatestPage.checkMessage().contains(message)
})

  
  
  
  

    