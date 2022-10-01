const resourcesPage = require('../../pages/resources.page')
const beforePage = require('../../help/before.page')
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user opens Savings Calculator page and chooses Elastic SIP trunking', () => {
    cy.visit("https://telnyx.com/twilio-pricing-calculator");
    beforePage.closeCookiesModalWindow()
    resourcesPage.clickElasticSipTrunking()
    resourcesPage.clickFirstContinueButton()
})

When('A user changes Local Numbers, Toll-free Numbers and clicks Continue', (table) => {
    table.hashes().forEach( (row) => {
        resourcesPage.fillLocalNumbers().type(row.firstvalue)
        resourcesPage.fillTollFreeNumbers().type(row.secondvalue)
    })
    resourcesPage.clickSecondContinueButton()
})    

Then('A user should see the value {string} amount of your savings', (price) => {
    resourcesPage.checkSavingAmount().contains(price)
})

  
  
  
  

    