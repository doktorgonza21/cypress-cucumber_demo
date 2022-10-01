Feature: Savings calculator

Scenario: Check the savings amount for Elastic SIP Trunking
    Given A user opens Savings Calculator page and chooses Elastic SIP trunking
    When A user changes Local Numbers, Toll-free Numbers and clicks Continue
        | firstvalue | secondvalue |
        | 13         | 12          |
    Then A user should see the value "$3,018" amount of your savings
        
   

        
