const mainMenuPage = require('../../pages/mainMenu.page')
const beforePage = require('../../help/before.page')
import bucket from '../../help/bucket'
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('A user opens home page', () => {
    cy.visit("https://telnyx.com/");
    beforePage.closeCookiesModalWindow()   
})

When('A user hovers mouse to Company drop-down menu', () => {
    mainMenuPage.hoverCompanyDropDownMenu()
})

Then('A user will see that main navigation menu contains 6 elements', () => {
    mainMenuPage.checkMainMenuLinks().each((item, index, list) => {
        expect(list).to.have.length(6);
        expect(Cypress.$(item).text()).to.eq(bucket.menuItems[index]);
    })
})

Then('A user will see that Company menu contains 4 elements', () => {
    mainMenuPage.checkCompanyDropDownMenuList().each((item, index, list) => {
        expect(list).to.have.length(4);
        expect(Cypress.$(item).text()).to.eq(bucket.companyDropDown[index]);
    })
})

  
  
  
  

    