const mainMenuLocator = 'header li>span';
const companyDropDownMenuLocator = 'header li:nth-child(8)';
const companyDropDownMenuListLocator = 'header li:nth-child(8) a';


class MainMenuPage {
   checkMainMenuLinks () {
    return cy.get(mainMenuLocator)
   }
   
   hoverCompanyDropDownMenu () {
    cy.get(companyDropDownMenuLocator).trigger('mouseover', { timeout: 2000})
   }

   checkCompanyDropDownMenuList () {
    return cy.get(companyDropDownMenuListLocator)
   }
   
}
  
module.exports = new MainMenuPage();
