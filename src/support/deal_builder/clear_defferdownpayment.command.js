/// <reference types ="Cypress"/>

Cypress.Commands.add("clearDefferdownpayment", () => {
  cy.get("button").contains("Details").click();
  cy.get("#dueDatePicker_0").clear();

  cy.get(".modal-body label")
    .contains("Amount ($)")
    .parent()
    .find("input")
    .clear();
  cy.get("button").contains("SAVE & CONTINUE").click();

  cy.wait(3000);
  cy.get("input[formcontrolname='totalQuoteDefferPay']")
    .invoke("val")
    .should("contain", "0.00");
});
