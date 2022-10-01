Feature: Blog page search form
    
Scenario: Check the "search" field on blog page
    Given A user opens "https://telnyx.com/resources" blog page
    When A user type the "wireless" value in search field
    Then A user should see that the first search result contains "Wireless" word
        
   

        
