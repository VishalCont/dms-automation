/// <reference types="cypress"/>

const { LOGIN_API_URL } = require("../utils/constants");

Cypress.Commands.add("login", (username, password) => {
  cy.log(cy.config().baseurl);
  // cy.intercept("https://dev.desidms.com/auth").as("AuthPage");
  cy.visit("/auth").location("pathname").should("equal", "/auth");
  cy.intercept(LOGIN_API_URL).as("LoginWait");
  cy.get('input[name="username"]').type(username ?? "Dravid", { force: true });
  cy.get('input[name="password"]').type(password ?? "Dravid@123", {
    force: true,
  });
  cy.get('button[type="submit"]').click();
  cy.wait("@LoginWait");
  cy.wait(2000);
  cy.location("pathname").should("equal", "/dashboard");
});
