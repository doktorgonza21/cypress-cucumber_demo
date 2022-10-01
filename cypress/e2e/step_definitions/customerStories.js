const customerStories = require('../../pages/customerStories.page')
const beforePage = require('../../help/before.page')
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user opens Customer Stories page, scrolls down to Replicant item and click Read On', () => {
    cy.visit("https://telnyx.com/customer-stories");
    beforePage.closeCookiesModalWindow()
    customerStories.clickToReadAboutReplicant()   
})

When('A user scrolls down to first paragraph "replicant" link and click it', () => {
    customerStories.clickParagReplicantLink()
})

Then('A user should redirect to {string} url', (url) => {
    cy.url().should("include", url);
})    



  
  
  
  

    