/// <reference types ="Cypress"/>

const { getRandomNumber } = require("../../utils/random_number");

Cypress.Commands.add(
  "existingVendorForServiceContract",
  (serviceVendor, dealerMarkup, cogs) => {
    //Service contract button for existing vendor
    cy.get("button").contains("Service Contract").click();
    cy.wait(6000);
    //cy.get(".modal-content  button").contains(" CANCEL ").click();
    cy.get(
      `.modal-content input[formcontrolname='warrantyType'][value='${serviceVendor}']`
    ).check();
    cy.contains("Vehicle Service Contract(VSC)").should("be.visible");
    //service contract

    cy.get("select[formcontrolname='vendor_id']").select("Dc company");
    cy.get("input[formcontrolname = 'dealer_mark_up']").type(dealerMarkup);
    cy.get("input[formcontrolname = 'cogs']").type(cogs);
    cy.get("button").contains(" SAVE & CONTINUE ").click();
    cy.wait(2000);
    cy.get("input[formcontrolname = 'Warranty']")
      .invoke("val")
      .should("not.be.empty");
  }
);
