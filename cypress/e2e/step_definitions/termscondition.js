const termsconditionPage = require('../../pages/termscondition.page')
const beforePage = require('../../help/before.page')
import bucket from '../../help/bucket'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When('A user opens Terms and Condition {string} page', (url) => {
    cy.visit(url)
    beforePage.closeCookiesModalWindow()
})

Then('A user should see that page has 10 paragraph elements', () => {
    termsconditionPage.checkParagraphList().each((item, index, list) => {
        expect(list).to.have.length(10);
        expect(item).to.have.text(bucket.paragraphList[index]) 
    })
}) 


  
  
  
  

    