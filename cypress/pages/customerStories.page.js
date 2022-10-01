const readAboutReplicantLocator = '[href="/customer-stories/replicant"]'
const paragReplicantLinkLocator = 'div>p [title*="Replicant:"]'

class CustomerStoriesPage {
   
clickToReadAboutReplicant () {
    cy.get(readAboutReplicantLocator).scrollIntoView().click()
}

clickParagReplicantLink () {
    cy.get(paragReplicantLinkLocator).scrollIntoView()
    .invoke('removeAttr', 'target')
    .click()
}
  
}
  
module.exports = new CustomerStoriesPage();
