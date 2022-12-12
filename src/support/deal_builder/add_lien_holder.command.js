/// <reference types ="Cypress"/>

Cypress.Commands.add("addLienHolder", (randomName) => {
  //add lien holder
  cy.get("button").contains("Add Company").should("be.visible").click();
  cy.wait(3000);
  cy.log("company name from faker: " + randomName);
  cy.get(".modal-content input[formcontrolname='company_name']").type(
    randomName
  );
  cy.get("button")
    .contains("SAVE")
    .should("be.visible")
    .should("be.enabled")
    .click();
});
