/// <reference types ="Cypress"/>

Cypress.Commands.add("removeTradeIn", () => {
  cy.get("#TableQuotation i.fa-minus").first().click();
  cy.wait(2000);
});
