/// <reference types ="Cypress"/>

Cypress.Commands.add("downPayment", (downPaymentAmount) => {
  //click on Details button
  cy.get("button").contains("Details").click();

  ///Add down_payment details

  cy.get("input[formcontrolname='down_payment']").type(`${downPaymentAmount}`);
  //cy.get("input[formcontrolname='otherKey']").type("cleaning");
  //cy.get("input[formcontrolname='otherValue']").type("100");
  //cy.get("input[formcontrolname='manufacturer_rebate']").type("200");
  cy.get("input[formcontrolname='total_down_payment']")
    .invoke("val")
    .should("not.be.empty");
  cy.wait(4000);
  cy.get("button").contains("SAVE & CONTINUE").click();
  //replacing comma in the down payment after save and continue
  cy.get("input[formcontrolname='totalQuoteDownPayment']")
    .invoke("val")
    .should("contain", downPaymentAmount.replace(/,/g, ""));
});
