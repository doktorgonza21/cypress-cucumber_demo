const homePage = require('../../pages/home.page')
const beforePage = require('../../help/before.page')
import bucket from '../../help/bucket'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user opens homepage', () => {
    cy.visit("https://telnyx.com/");
    beforePage.closeCookiesModalWindow()   
})

When('A user scrolls down to the Awards block', () => {
    homePage.scrollToAwardsList()
})

When('A user scrolls down to the Powerful products block', () => {
    homePage.scrollpowerfullProductBlock()
})

When('A user scrolls down to the Comments block', () => {
    homePage.scrollDownToCommentsBlock()
})

Then('A user should see alternative image text if images are disabled', () => {
    homePage.checkAwardsAltText().each((item, index, list) => {
        expect(item).to.have.attr('alt', bucket.awardsAltText[index])  
    })
})    

Then('A user should see that Powerful products block contains 6 elements', () => {
    homePage.checkPowerfullProductsListText().each((item, index, list) => {
        expect(list).to.have.length(6);
        expect(Cypress.$(item).text()).to.eq(bucket.powerfullProduct[index]);
    })
})    

Then('A user should see commentators names', () => {
    homePage.checkCommentatorsNames().each((item, index, list) => {
        expect(list).to.have.length(2);
        expect(Cypress.$(item).text()).to.eq(bucket.commentNames[index]);
    })    
})


  
  
  
  

    