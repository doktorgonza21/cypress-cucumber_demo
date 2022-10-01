Feature: Main navigation menu
    
Background:
    Given A user opens home page

Scenario: Check main navigation menu links
    Then A user will see that main navigation menu contains 6 elements

Scenario: Check links from "Company" drop-down menu
    When A user hovers mouse to Company drop-down menu
    Then A user will see that Company menu contains 4 elements    
