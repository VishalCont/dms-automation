/// <reference types ="Cypress"/>

Cypress.Commands.add("commissionRecap", (commissionRecap) => {
  cy.get("button").contains("COMMISSION RECAP").click();
  cy.get("h4").should("contain", "Commission Calculation Sheet");
  cy.wait(5000);
  cy.log(commissionRecap.BHPH);
  cy.log(commissionRecap.commission);

  if (commissionRecap.BHPH === true) {
    cy.log("commissionRecap.BHPH in");
    if (commissionRecap.containsDownPayment === true) {
      cy.get(".cash-details >:nth-child(2)").should(
        "contain",
        commissionRecap.downPayment
      );

      cy.get(".commission-calculation-details >:nth-child(2)").should(
        "contain",
        commissionRecap.commissionCalculation
      );
    }
    {
      cy.get(".commission-rate-details >:nth-child(2)").should(
        "contain",
        commissionRecap.commissionRate
      );
      cy.get(".commission-details >.font-weight-bold").should(
        "contain",
        commissionRecap.commission
      );
      cy.log(commissionRecap.salesPerson);
      cy.get(".saleperson-section .ml-3 strong").should(
        "contain",
        commissionRecap.salesPerson
      );
    }
  }
  if (commissionRecap.otherThanBHPH == true) {
    cy.get(".cash-details >:nth-child(2)").should(
      "contain",
      commissionRecap.profitOnVehicle
    );
    cy.get(".commission-calculation-details >:nth-child(2)").should(
      "contain",
      commissionRecap.otherCalculation
    );
    cy.get(".commission-rate-details >:nth-child(2)").should(
      "contain",
      commissionRecap.otherCommissionRate
    );
    cy.get(".commission-details >.font-weight-bold").should(
      "contain",
      commissionRecap.otherCommission
    );
    cy.get(".saleperson-section .ml-3 ").should(
      "contain",
      commissionRecap.othersalesperson
    );
  }
  cy.get(".modal-header.posRelative > button").click();
});
