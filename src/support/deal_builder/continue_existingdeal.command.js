/// <reference types ="Cypress"/>

//var veh;
Cypress.Commands.add("continueDeal", () => {
  cy.wait(3000);
  cy.get("button").contains("Continue Deal").click();
  cy.wait(15000);
  cy.get("body").then(($body) => {
    if ($body.find("#vinNumber").length) {
      cy.get("a.vehicle-select").its("length").should("be.greaterThan", 0);
      cy.wait(5000);
      cy.get("a.vehicle-select").first().click();
      cy.log("Element not found. Skip the Test");
    } else {
      cy.log("Element not found. Skip the Test");
    }
  });
  // if (cy.get("body .col-sm-12.col-md-1.px-0 >:nth-child(1)")) {
  //   cy.get("a.vehicle-select").its("length").should("be.greaterThan", 0);
  //   cy.wait(5000);
  //   cy.get("a.vehicle-select").first().click();
  // }

  // var z = Cypress.$(
  //   "#TableQuotation > tbody > tr:nth-child(1) > td.text-left"
  // ).val();
  //// var z = cy.get("#TableQuotation > tbody > tr:nth-child(1) > td.text-left");
  /// cy.log(z);
  //if (cy.get("button").contains("Trade-In ").should("be.visible"));
  //else {
  /////If Vehicle is not selected or Vehicle is sold  Select Vehicle//////
  // if (z == undefined || z == null) {
  //   //cy.get("a.vehicle-select").its("length").should("be.greaterThan", 0);
  //   cy.wait(5000);
  //   cy.get("a.vehicle-select").first().click();
  //   //});
  //}
});
