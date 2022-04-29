/// <reference types ="Cypress"/>

Cypress.Commands.add("clearDownpayment", () => {
  cy.get("button").contains("Details").click();
  cy.get("input[formcontrolname='down_payment']").clear();
  cy.get("button").contains("SAVE & CONTINUE").click();
  cy.wait(3000);
  cy.get("input[formcontrolname='totalQuoteDownPayment']")
    .invoke("val")
    .should("contain", "0.00");
});
