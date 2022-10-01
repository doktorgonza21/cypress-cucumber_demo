const paragraphListLocator = 'div>h2'

class TermsconditionPage {
   
checkParagraphList () {
    return cy.get(paragraphListLocator)
}
   
}
  
module.exports = new TermsconditionPage();
