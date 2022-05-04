/// <reference types ="Cypress"/>
Cypress.Commands.add("financeChargeRateParticipation", () => {

    cy.get("input[formcontrolname='financeCompanyId']").contains("RWESF ").click();
    cy.get("button").contains("Finance Charge Rate Participation").should("be.visible").click();
    cy.get("input[formcontrolname='feeDealer']").type("100");
    cy.get("input[formcontrolname='buyRateFromBank']").type("10");
    cy.get("input[formcontrolname='bankPercentHoldInReserve']").type("50");
    cy.get("button").contains("Confirm").should("be.visible").click();
})