const { LOGIN_API_URL } = require("../utils/constants");

export function login(username?: string, password?: string) {
  cy.visit("/auth").location("pathname").should("equal", "/auth");
  cy.intercept(LOGIN_API_URL).as("LoginWait");
  cy.get('input[name="username"]').type(username ?? "Danish", { force: true });
  cy.get('input[name="password"]').type(password ?? "Admin@12345", {
    force: true,
  });
  cy.get('button[type="submit"]').click();
  cy.wait("@LoginWait");
  cy.wait(5000);
  cy.location("pathname").should("equal", "/dashboard");
}
