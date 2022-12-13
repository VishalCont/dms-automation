/// <reference types ="Cypress"/>

Cypress.Commands.add("cancelDeal", () => {
  //Account Management
  //cy.get("#collapsibleNavbar a[href='/account-management']").click();
  cy.wait(7000);
  //   //Select First Loan

  //     cy.get(".datatable-row-center  a").first().click();
  //     cy.wait(3000);
  //Go to view Transaction
  cy.get('[href = "javascript:void(0);"]')
    .contains("View Transactions")
    .click();
  cy.wait(10000);
  //If Payment is there refund and Cancel Deal

  cy.get(".d-flex.justify-content-end button").click();
  cy.get("modal-container .mr-3.mb-2").click();
});
