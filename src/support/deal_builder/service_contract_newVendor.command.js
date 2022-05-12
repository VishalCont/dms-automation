/// <reference types ="Cypress"/>

const { getRandomNumber } = require("../../utils/random_number");

Cypress.Commands.add("newVendorForServiceContract", (randomCompanyName) => {
  cy.get('[type="radio"]').check("Other Vendor");
  cy.get("button").contains("Service Contract").click();
  cy.contains("Vehicle Service Contract(VSC)").should("be.visible");
  cy.get("button").contains("Add Vendor ").click();
  cy.contains(" Company Name ").should("be.visible");
  cy.get("app-vehicle-service-popup [formcontrolname='company_name']").type(
    `${randomCompanyName}`
  );
  cy.get("button").contains(" Add ").click();
  cy.get("input[formcontrolname = 'dealer_mark_up']").type(
    getRandomNumber(100, 200)
  );
  cy.get("input[formcontrolname = 'cogs']").type(getRandomNumber(100, 200));
  cy.get("button").contains(" SAVE & CONTINUE ").click();
  cy.wait(1000);
  cy.get("input[formcontrolname = 'Warranty']")
    .invoke("val")
    .should("not.be.empty");
});
