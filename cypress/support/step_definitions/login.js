import {
    Given,
    When,
    And,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";

  import LoginPage from '../../e2e/PageObjects/LoginPage'
  const lp = new LoginPage();
  
  Given("User navigate to Demo Store Login URL", () => {
    lp.visit();
  });

  Given("User enters email address {string}", (email) => {
    lp.fillEmail(email);
  });

  Given("User enters password {string}", (password) => {
    lp.fillPassword(password);
  });

  When("User clicks on submit button", () => {
    lp.submit();
  });
  Then("User logged in into Demo store", () => {
    cy.title().should('eq','Dashboard / nopCommerce administration')
  });

  Then("User is unable to logged in into Demo store", () => {
    cy.title().should('not.eq','Dashboard / nopCommerce administration')
  });
 