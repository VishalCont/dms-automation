/// <reference types ="Cypress"/>

//const { values } = require("cypress/types/lodash");

Cypress.Commands.add("newVendorForDCCAndGAP", (insuranceVendor, newVendorDetails, vendorName, dealerCost, costPrice) => {

    //if insurance is Dcc
    //perform enter vendor,enter dealer cost,enter price
    // if insurance is gap
    //perform enter vendor,enter dealer cost,enter price
    // if insurance is None
    //else enter vendor, dealer cost

    cy.get("button").contains(" DCC/GAP ").click();
    cy.get(`.modal-content input[formcontrolname='insuranceProtectionType'][value='${insuranceVendor}']`).check();
    cy.wait(1000);
    cy.get("modal-container form button i").click();
    cy.get("modal-container input[formcontrolname='company_name']").type(`${newVendorDetails}`);
    //cy.get("input[formcontrolname='company_name']").type(`${newVendorDetails}`);
    cy.get("button").contains(" Add ").click();
    cy.get("select[formcontrolname='vendor_id']").select(`${newVendorDetails}`);
    //  .select(`${vendorName}`);
    cy.get("input[formcontrolname='dealer_cost']").type(`${dealerCost}`);
    cy.get("input[formcontrolname='insuranceDCCSalePrice']").type(`${costPrice}`);
    // cy.get("input[formcontrolname='insuranceProtectionType']").find("input[value='GAP']").click();
    cy.get("button").contains("SAVE").click();
})


