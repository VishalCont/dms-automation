/// <reference types ="Cypress"/>

Cypress.Commands.add("removeTradeIn", () => {
  cy.get("#TableQuotation i.fa-minus").first().click();
  cy.wait(2000);
  cy.get("button").contains("Add Trade-In ").click();
});
