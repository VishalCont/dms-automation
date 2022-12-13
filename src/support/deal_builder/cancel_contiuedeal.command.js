/// <reference types ="Cypress"/>

Cypress.Commands.add("cancelContinueDeal", () => {
  cy.wait(8000);
  cy.get("datatable-body-cell:nth-child(1) div a")
    .first()
    .invoke("text")
    .as("value1");

  cy.get("@value1").then((value1) => {
    var x = value1.trim();
    cy.log(x);

    cy.wait(12000);
    cy.get(
      " datatable-body > datatable-selection :nth-child(1) > datatable-body-row > div :nth-child(8) > div > a"
    ).click();
    cy.wait(10000);
    //Takeing vin number form A/M//
    cy.get("app-load-detail-header :nth-child(3)  a")
      .invoke("text")
      .as("value2");
    cy.get("@value2").then((value2) => {
      var y = value2.trim();
      cy.log(y);
      //Cancel deal in A/M
      cy.cancelDeal();
      cy.wait(5000);
      cy.get("#collapsibleNavbar a[href='/sales']").click();
      cy.wait(10000);

      //validating recent and pending deal value
      cy.get("datatable-body-cell:nth-child(1) > div > p")
        .first()
        .invoke("text")
        .as("value3");

      cy.get("@value3").then((value3) => {
        cy.log(value3); //prints value
        expect(value3).to.equal(x);
        cy.continueDeal();
        cy.wait(8000);
        ///**Validating decent deal vin with A/M vin*//
        cy.get(":nth-child(6)>:nth-child(1) .vin-details .col-7")
          .invoke("text")
          .as("value4");
        cy.get("@value4").then((value4) => {
          cy.log(value4);
          expect(value4).to.equal(y);
          cy.wait(10000);
          cy.get("button").contains("Calculate").click();

          cy.wait(8000);
          cy.get(`input[type='button'][value='NEXT']`).click();
          cy.wait(7000);
          cy.get("app-verification-screen").contains("OK").click();
          //Make payment //
          //cy.wait(3000);
          //cy.get("button").contains("Make Payment").click();
          cy.wait(3000);
          //cy.get("modal-container").contains(" Proceed to Pay ").click();
          cy.downloadDocument();
          cy.wait(5000);
          cy.completeSale();
          cy.wait(6000);
          cy.get("app-verification-screen").contains("OK").click();
          cy.get("button").contains("Proceed").click();
          cy.wait(9000);
          cy.get("datatable-body-cell:nth-child(1) div a")
            .first()
            .invoke("text")
            .as("value5");

          cy.get("@value5").then((value5) => {
            var z = value5.trim();
            cy.log(z);
            expect(z).to.equal(x);
          });
        });
      });
    });
  });
});
