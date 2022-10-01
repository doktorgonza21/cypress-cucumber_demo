const searchFieldLocator = '#search'
const firstElementLocator = 'header~h2'

class BlogPage {

fillSearchField() {
    return cy.get(searchFieldLocator)
}

checkFirstElement () {
    return cy.get(firstElementLocator).first()
}
  
}
  
module.exports = new BlogPage();
