/// <reference types ="Cypress"/>
Cypress.Commands.add("refund", () => {
  cy.get(" app-documentation :nth-child(7) .ibox-title  button").click();
  cy.wait(5000);

  //cy.get(".btn.btn-sm.btn-ddms-small").click();
  cy.get("button").contains("REFUND").click();
  cy.get("button").contains("Submit").click();
  cy.wait(5000);
  cy.get(
    "#collapseEvent7 :nth-child(2) > datatable-body-row :nth-child(4) p"
  ).click();
  cy.get("button").contains("Download Receipt").click();
});
