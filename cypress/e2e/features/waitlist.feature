Feature: Waitlist form

Scenario: Check the "Join the waitlist" form
    Given A user opens "https://telnyx.com/products/storage" page and click the Join the waitlist button
    When A user fills the form and clicks Apply Now button
    Then A user should see the "You're on the waitlist!" message
        
   

        
