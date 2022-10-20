/// <reference types ="Cypress"/>

var value1, value2;
Cypress.Commands.add("removeDeal", () => {
  cy.get("datatable-row-wrapper:nth-child(1) .my-2").click();
  cy.wait(2000);

  cy.get("datatable-body-cell:nth-child(1) > div > p")
    .first()
    .invoke("text")
    .as("value1");

  cy.get("@value1").then((value1) => {
    cy.log(value1); //prints value

    cy.get(".btn-success.mr-3").click();
    cy.wait(2000);
    //Do you want to keep the customer info?

    cy.get(".btn.btn-success.mr-3").click();
    cy.wait(3000);

    cy.get("datatable-body-cell:nth-child(1) > div > p")
      .first()
      .invoke("text")
      .as("value2");

    cy.get("@value2").then((value2) => {
      cy.log(value2); //prints value
      expect(value2).not.to.eq(value1);
    });
  });
});
