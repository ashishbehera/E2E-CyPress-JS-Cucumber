Feature: Demo Store Login

    User wants to login into Demo Store

@demo
Scenario Outline: Successfully Login into Demo Store
    Given User navigate to Demo Store Login URL
    And User enters email address "<email>"
    And User enters password "<password>"
    When User clicks on submit button
    Then User logged in into Demo store

    Examples:
        | email                | password | 
        | admin@yourstore.com  | admin    | 

@demo        
Scenario Outline: Unbale to Login into Demo Store
    Given User navigate to Demo Store Login URL
    And User enters email address "<email>"
    And User enters password "<password>"
    When User clicks on submit button
    Then User is unable to logged in into Demo store

    Examples:
        | email                | password | 
        | admin@yourstore.com  | test     |         