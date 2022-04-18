/// <reference types ="Cypress"/>

//const { values } = require("cypress/types/lodash");

Cypress.Commands.add("newVendorForDCCAndGAP", (insuranceVendor, newVendorDetails, vendorName, dealerCost, costPrice) => {

    //if insurance is Dcc
    //perform enter vendor,enter dealer cost,enter price
    // if insurance is gap
    //perform enter vendor,enter dealer cost,enter price
    // if insurance is None
    //else enter vendor, dealer cost

    cy.get("button").contains(" DCC/GAP ").should("be.visible").click();
    cy.get(`.modal-content input[formcontrolname='insuranceProtectionType'][value='${insuranceVendor}']`).check();
    cy.wait(1000);
    cy.get("modal-container form button i").click();
    cy.get("modal-container input[formcontrolname='company_name']").type(`${newVendorDetails}`);
    //cy.get("input[formcontrolname='company_name']").type(`${newVendorDetails}`);
    cy.get("button").contains(" Add ").should("be.visible").click();

})


