const waitlistPage = require('../../pages/waitlist.page')
const beforePage = require('../../help/before.page')
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user opens {string} page and click the Join the waitlist button', (url) => {
    cy.visit(url);
    beforePage.closeCookiesModalWindow()
    waitlistPage.clickJoinWaitListButton()
})

When('A user fills the form and clicks Apply Now button', () => {
    waitlistPage.fillFirstNameField()
    waitlistPage.fillLastNameField()
    waitlistPage.fillEmailField()
    waitlistPage.clickApplyNowButton()
    cy.wait(2000)
})    

Then('A user should see the {string} message', (message) => {
    waitlistPage.checkMessage().contains(message)
})

  
  
  
  

    