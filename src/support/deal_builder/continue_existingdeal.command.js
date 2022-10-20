/// <reference types ="Cypress"/>

//var veh;
Cypress.Commands.add("continueDeal", () => {
  //cy("datatable-body-cell:nth-child(4) p").first().invoke("text").as("veh");
  //cy.log(veh);
  cy.get("button").contains("Continue Deal").click();
});
