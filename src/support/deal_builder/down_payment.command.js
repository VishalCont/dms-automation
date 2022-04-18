/// <reference types ="Cypress"/>

Cypress.Commands.add("down_payment", () => {
  //click on Details button
  cy.get("button").contains("Details").click();

  ///Add down_payment details

  cy.get("input[formcontrolname='down_payment']").type("1000");
  //cy.get("input[formcontrolname='otherKey']").type("cleaning");
  //cy.get("input[formcontrolname='otherValue']").type("100");
  //cy.get("input[formcontrolname='manufacturer_rebate']").type("200");
  cy.get("input[formcontrolname='total_down_payment']")
    .invoke("val")
    .should("not.be.empty");
  cy.get("input[formcontrolname='totalQuoteDownPayment']")
    .invoke("val")
    .should("not.be.empty");
  cy.get("button").contains("SAVE & CONTINUE").click();
});
