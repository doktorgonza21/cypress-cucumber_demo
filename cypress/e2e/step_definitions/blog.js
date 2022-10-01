const blogPage = require('../../pages/blog.page')
const beforePage = require('../../help/before.page')
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user opens {string} blog page', (url) => {
    cy.visit(url);
    beforePage.closeCookiesModalWindow()
})

When('A user type the {string} value in search field', (text) => {
    blogPage.fillSearchField().type(text).type('{enter}')
    cy.wait(2000)
})    

Then('A user should see that the first search result contains {string} word', (message) => {
    blogPage.checkFirstElement().contains(message)
})

  
  
  
  

    