Feature: Footer block

Background:
    Given A user opens home page and scrolls down to footer

Scenario: Check the footer "Pricing" block links
    Then A user should see that the Pricing block contains 4 links

Scenario: Check the footer copyright
    Then A user should see copiwright "© Telnyx LLC 2022"    
   

        
