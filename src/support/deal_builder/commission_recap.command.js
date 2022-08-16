/// <reference types ="Cypress"/>

Cypress.Commands.add("commissionRecap", (bhph, hasDownpayment, others) => {
  cy.get("button").contains("COMMISSION RECAP").click();
  cy.get("h4").should("contain", "Commission Calculation Sheet");
  cy.wait(5000);

  if (bhph === true) {
    if (hasDownpayment === true) {
      cy.get(
        "#commissionRecapSheet >.modal-body > div > .w-100 >:nth-child(2) >:nth-child(2) > div"
      ).should("contain", " $1,000.00 ");

      cy.get(".commission-calculation-details >:nth-child(2)").should(
        "contain",
        " $1,000.00 "
      );
    }
    {
      cy.get(".commission-rate-details >:nth-child(2)").should(
        "contain",
        " 1.50% "
      );
      cy.get(".commission-details >.font-weight-bold").should(
        "contain",
        " $ 150.00 "
      );
      cy.get(".saleperson-section .ml-3").should("contain", "Stefi - $ 150.00");
    }
  }
  if (others == true) {
    cy.get(
      "#commissionRecapSheet >.modal-body > div > div.mt-3 >:nth-child(2) >:nth-child(2) > div"
    ).should("contain", "$5,475.00");
    cy.get(".commission-calculation-details >:nth-child(2)").should(
      "contain",
      "$5,475.00"
    );
    cy.get(".commission-rate-details >:nth-child(2)").should(
      "contain",
      "1.50%"
    );
    cy.get(".commission-details >.font-weight-bold").should(
      "contain",
      "$ 150.00"
    );
    cy.get(".saleperson-section .ml-3 ").should("contain", "Stefi - $ 150.00");
  }
});
