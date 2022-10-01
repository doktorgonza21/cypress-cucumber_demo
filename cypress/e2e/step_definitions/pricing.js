const pricingPage = require('../../pages/pricing.page')
const beforePage = require('../../help/before.page')
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user clicks the Wireless link from Pricing drop-down menu', () => {
    cy.visit("https://telnyx.com/");
    beforePage.closeCookiesModalWindow()
    pricingPage.clickWirelessLink() 
})

When('A user chooses {string} from drop-down menu and press Enter button', (country) => {
    pricingPage.choosePoland().type(country)
    pricingPage.clickPoland()
    cy.wait(5000)
})    

Then('A user should see the {string} per MB price value', (price) => {
    pricingPage.checkPricePerMb().contains(price)
})
  

    