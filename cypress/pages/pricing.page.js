const wirelessLinkLocator = '[alt="icon products wireless"]'
const countryDropDownLocator = '[aria-haspopup="listbox"]'
const pricePerMbLocator = 'div:nth-child(5)>div~div'
const polandLocator = '[role="option"]'

class PricingPage {
   
clickWirelessLink () {
    cy.get(wirelessLinkLocator).last().click({ force: true })
}

choosePoland () {
    return cy.get(countryDropDownLocator).first()
}

clickPoland () {
    return cy.get(polandLocator).first().click()
}

checkPricePerMb () {
    return cy.get(pricePerMbLocator).scrollIntoView()
}
     
}
  
module.exports = new PricingPage();
