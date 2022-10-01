Feature: Home Page elements

Background:
    Given A user opens homepage
Scenario: Check the headers text of "Powerful products" elements
    When A user scrolls down to the Powerful products block
    Then A user should see that Powerful products block contains 6 elements

Scenario: Check the commentators Names from comments block
    When A user scrolls down to the Comments block
    Then A user should see commentators names     
        
Scenario: Check "Awards" block alternate text
    When A user scrolls down to the Awards block
    Then A user should see alternative image text if images are disabled