/// <reference types="cypress"/>
Cypress.Commands.add("login", (username, password) => {
    cy.log(cy.config().baseurl);
    cy.intercept("https://dev.desidms.com/auth").as("AuthPage");
    cy.visit("/auth");
    cy.wait("@AuthPage")
    cy.location("pathname").should("equal", "/auth");
    cy.intercept("https://8m6jqhmsb0.execute-api.us-east-1.amazonaws.com/dev/auth/login").as("LoginWait")
    cy.get('input[name="username"]').type(username ?? "Danish", { force: true });
    cy.get('input[name="password"]').type(password ?? "Admin@12345", { force: true });
    cy.get('button[type="submit"]').click();
    cy.wait("@LoginWait");
    cy.location("pathname").should("equal", "/dashboard");
})