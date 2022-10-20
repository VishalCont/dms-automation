/// <reference types ="Cypress"/>

var v1;
Cypress.Commands.add("changeMileage", (mileage) => {
  cy.get("[formcontrolname='current_mileage']").clear().type(`${mileage}`);

  cy.get("button").contains("Calculate").click();
  cy.get(`input[type='button'][value='NEXT']`).click();
  cy.wait(5000);
  cy.get("app-verification-screen").contains("OK").click();
  cy.get(".my-3.px-2 >:nth-child(2) .ibox-title button").click({ force: true });
  cy.wait(6000);
  cy.get("button").contains("Download All").click();
  //cy.get(".ml-auto.mr-2.mb-1").click({ force: true });
  cy.get("button").contains("SAVE & CONTINUE").click();
  cy.wait(2000);
  cy.get("button").contains("SAVE & CONTINUE").click();
  cy.wait(10000);
  cy.get("button").contains("Complete the Sale").click();
  cy.get("app-verification-screen").contains("OK").click();
  cy.get("button").contains("Proceed").click();
  cy.wait(2000);
  cy.get("datatable-body-cell:nth-child(1) a").first().click();
  cy.wait(5000); //need if not not invoke

  cy.get("#collapseEvent4 :nth-child(2) :nth-child(1) > .col-sm-4")
    .invoke("text")
    .as("v1");

  cy.get("@v1").then((v1) => {
    expect(parseFloat(v1)).to.equal(mileage);

    //expect(v1).to.eq(mileage);
  });
});
