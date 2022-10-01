Feature: Single Sign-On form
    
Scenario: Check the Single Sign-On with unregistered email
    Given A user opens login page and clicks the Single Sign-On link
    When User fills the Company Email field with random email and clicks the Continue button
    Then User will see "The requested resource or URL could not be found." error message
