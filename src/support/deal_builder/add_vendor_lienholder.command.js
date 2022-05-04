/// <reference types ="Cypress"/>
Cypress.Commands.add("addVendorLienHolder", () => {
    cy.get("button").contains("Add Company").should("be.visible").click();
    cy.get("input[formcontrolname='company_name']").type("Hamper");
    cy.get("button").contains("SAVE").should("be.visible").should("be.enabled").click();
})