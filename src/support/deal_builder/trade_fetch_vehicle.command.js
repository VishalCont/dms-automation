/// <reference types ="Cypress"/>

const vinGenerator = require("vin-generator");

Cypress.Commands.add("tradeFetch", () => {
  //cy.get("input[formcontrolname = 'vin']").type("2FTNW21P33WETNEZZ");
  cy.get("input[formcontrolname = 'vin']").type(vinGenerator.generateVin());
  cy.get(".modal-body button.btn-ddms-lightgreen")
    .contains("Fetch Vehicle Details")
    .click();
  cy.wait("@firstTradeInWait");
});
