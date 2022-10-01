const elasticSipTrunkingLocator = '[alt="elastic sip trunking"]'
const continueFirstButtonLocator = 'header~div button'
const localNumbersFieldLocator = '#local-numbers'
const tollFreeNumbersFieldLocator = '#toll-free-numbers'
const continueSecondButtonLocator = 'header~div button'
const savingsAmountLocator = 'p>span'

class resourcesPage {
   
clickElasticSipTrunking () {
    cy.get(elasticSipTrunkingLocator).click()
}

clickFirstContinueButton () {
    cy.get(continueFirstButtonLocator).click()
}

fillLocalNumbers () {
    return cy.get(localNumbersFieldLocator).clear()
}

fillTollFreeNumbers () {
    return cy.get(tollFreeNumbersFieldLocator).clear()
}

clickSecondContinueButton () {
    cy.get(continueSecondButtonLocator).last().click()
}

checkSavingAmount () {
    return cy.get(savingsAmountLocator).first()
}
   
}
  
module.exports = new resourcesPage();
