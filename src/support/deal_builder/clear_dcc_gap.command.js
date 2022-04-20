// <reference types ="Cypress"/>

Cypress.Commands.add("clearDccGapValue", () => {

    cy.get("button").contains(" DCC/GAP ").should("be.visible").click();
    cy.get(`.modal-content input[formcontrolname='insuranceProtectionType'][value='NONE']`).check();
    cy.wait(3000);
    // cy.get("select[formcontrolname='vendor_id']").select(`${vendorName}`);
    //cy.get("input[formcontrolname='dealer_cost']").type(`${dealerCost}`);
    cy.get("button").contains("SAVE").should("be.visible").click();


});