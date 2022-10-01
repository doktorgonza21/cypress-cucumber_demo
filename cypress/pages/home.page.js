const powerfullProductsBlockLocator = 'header>h2'
const powerfullProductListLocator = 'li div>h3'
const commentsBlockLocator = '[data-testid="copy"]'
const commentatorsNames = 'cite>span>span'
const awardlsBlockLocator = '.dwBoND'
const awardsListLocator = '.dwBoND img'


class HomePage {
   
    scrollToAwardsList () {
        cy.get(awardlsBlockLocator).first().scrollIntoView()
    }

    checkAwardsAltText () {
        return cy.get(awardsListLocator)
    }

    scrollpowerfullProductBlock () {
        cy.get(powerfullProductsBlockLocator).first().scrollIntoView()
    }

    checkPowerfullProductsListText () {
        return cy.get(powerfullProductListLocator)
    }

    scrollDownToCommentsBlock () {
        cy.get(commentsBlockLocator).first().scrollIntoView()
    }

    checkCommentatorsNames () {
        return cy.get(commentatorsNames)
    }
   
}
  
module.exports = new HomePage();
