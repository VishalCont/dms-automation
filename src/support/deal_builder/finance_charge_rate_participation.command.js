/// <reference types ="Cypress"/>

import { testCases } from "../../utils/sales_flow_cases";

Cypress.Commands.add(
  "financeChargeRateParticipation",
  (
    feeDealer,
    amountEarned,
    buyRateFromBank,
    bankPercentHoldInReserve,
    flatRateParticipation
  ) => {
    //finance charge rate button\\

    cy.get("button")
      .contains("Finance Charge Rate Participation")
      .should("be.visible")
      .click();
    cy.wait(3000);
    cy.get("input[formcontrolname = 'feeDealer']").type(feeDealer);
    cy.wait(3000);

    if (flatRateParticipation === true) {
      cy.get('[type="checkbox"]').check({ force: true });
      cy.wait(3000);
      cy.get("input[formcontrolname = 'amountEarned']")
        .clear()
        .type(amountEarned);
      cy.wait(3000);
    } else {
      cy.get("input[formcontrolname = 'buyRateFromBank']").type(
        buyRateFromBank
      );
      cy.wait(3000);
      cy.get("input[formcontrolname = 'bankPercentHoldInReserve']").type(
        bankPercentHoldInReserve
      );
      cy.wait(3000);
    }
    cy.get("button").contains("Confirm").should("be.visible").click();
  }
);
