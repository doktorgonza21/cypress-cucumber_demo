const footer = 'div>footer'
const footerPricingBlock = '[data-e2e="Footer--navItem-pricing"] li'
const footerCopyrightLocator = 'footer  div:nth-child(2)'

class FooterPage {
   
scrollToFooterBlock () {
    cy.get(footer).scrollIntoView()
}

checkPricingBlockLinks () {
    return cy.get(footerPricingBlock)
}

checkCopyright () {
    return cy.get(footerCopyrightLocator).last()
}
  
}
  
module.exports = new FooterPage();
