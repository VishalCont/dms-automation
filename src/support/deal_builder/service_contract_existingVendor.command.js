/// <reference types ="Cypress"/>

const { getRandomNumber } = require("../../utils/random_number");

Cypress.Commands.add(
  "existingVendorForServiceContract",
  (dealerMarkup, cogs) => {
    //Service contract button for existing vendor
    cy.get("button").contains("Service Contract").click();
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
