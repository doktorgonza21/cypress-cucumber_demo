Feature: Beta test form

Scenario: Check the "Become a Beta Tester" form
    Given A user opens "https://telnyx.com/integrations" page and scroll down to become a tester form
    When A user fills the form and clicks Submit button
    Then A user should see the "Connect Telnyx to the tools you're already using" header message
        
   

        
