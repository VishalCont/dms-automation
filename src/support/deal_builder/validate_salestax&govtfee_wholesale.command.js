/// <reference types ="Cypress"/>
Cypress.Commands.add("wholesaleValidation", () => {
  cy.wait(2000);
  cy.get("#headingTaxes :nth-child(2) > input").should("have.value", "0.00");

  //   expect(govtFee).to.eq(0.0);

  cy.get("#exampleCheck1").should("not.be.checked");
  cy.wait(3000);
  // Checking the  sales tax radio button and validating
  cy.get("#exampleCheck1").click();

  cy.wait(2000);
  cy.get("#exampleCheck1").should("be.checked");
  cy.wait(3000);
  cy.get("#exampleCheck1").click();
  cy.wait(2000);
});
