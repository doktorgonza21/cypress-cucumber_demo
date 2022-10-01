const loginPage = require('../../pages/login.page')
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user opens login page and clicks the Single Sign-On link', () => {
    cy.visit("https://portal.telnyx.com/");
    loginPage.clickSingleSignOnLink()   
})

When('User fills the Company Email field with random email and clicks the Continue button', () => {
    loginPage.fillCompanyEmailField()
    loginPage.clickSubmitButton()
})

Then('User will see {string} error message', (message) => {
  loginPage.checkErrorMessage().contains(message)
  
});

    