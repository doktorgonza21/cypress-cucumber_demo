Feature: Customer Stories page
   
Scenario: Check the "replicant" link from customer stories page
    Given A user opens Customer Stories page, scrolls down to Replicant item and click Read On 
    When A user scrolls down to first paragraph "replicant" link and click it
    Then A user should redirect to "replicant.com" url
   

        
