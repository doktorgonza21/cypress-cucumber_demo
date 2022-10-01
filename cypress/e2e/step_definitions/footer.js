const footerBlock = require('../../pages/footer.page')
const beforePage = require('../../help/before.page')
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import bucket from "../../help/bucket";

Given('A user opens home page and scrolls down to footer', () => {
    cy.visit("https://telnyx.com/");
    beforePage.closeCookiesModalWindow()
    footerBlock.scrollToFooterBlock()  
})

Then('A user should see that the Pricing block contains 4 links', (url) => {
    footerBlock.checkPricingBlockLinks().each((item, index, list) => {
        expect(list).to.have.length(4);
        expect(Cypress.$(item).text()).to.eq(bucket.footerPricingBlock[index]);
    })
})    

Then('A user should see copiwright {string}', (copyright) => {
    footerBlock.checkCopyright().contains(copyright)
})

  
  
  
  

    