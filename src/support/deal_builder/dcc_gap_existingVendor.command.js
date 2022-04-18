/// <reference types ="Cypress"/>

//const { values } = require("cypress/types/lodash");

Cypress.Commands.add("existingVendorForDCCAndGAP", (insuranceVendor, vendorName, dealerCost, costPrice) => {

    //if insurance is Dcc
    //perform enter vendor,enter dealer cost,enter price
    // if insurance is gap
    //perform enter vendor,enter dealer cost,enter price
    // if insurance is None
    //else enter vendor, dealer cost
    if (insuranceVendor === "DCC" || insuranceVendor === "GAP") {
        cy.get("button").contains(" DCC/GAP ").click();
        cy.get(`.modal-content input[formcontrolname='insuranceProtectionType'][value='${insuranceVendor}']`).check();
        cy.wait(1000);
        cy.get("select[formcontrolname='vendor_id']").select(`${vendorName}`);
        //  .select(`${vendorName}`);
        cy.get("input[formcontrolname='dealer_cost']").type(`${dealerCost}`);
        cy.get("input[formcontrolname='insuranceDCCSalePrice']").type(`${costPrice}`);
        // cy.get("input[formcontrolname='insuranceProtectionType']").find("input[value='GAP']").click();
        cy.get("button").contains("SAVE").click();

    }
    cy.get("button").contains(" DCC/GAP ").click();
    cy.get(`.modal-content input[formcontrolname='insuranceProtectionType'][value='${insuranceVendor}']`).check();
    cy.wait(1000);
    cy.get("select[formcontrolname='vendor_id']").select(`${vendorName}`);
    //  .select(`${vendorName}`);
    cy.get("input[formcontrolname='dealer_cost']").type(`${dealerCost}`);
    // cy.get("input[formcontrolname='insuranceDCCSalePrice']").type(`${costPrice}`);
    // cy.get("input[formcontrolname='insuranceProtectionType']").find("input[value='GAP']").click();
    cy.get("button").contains("SAVE").click();
})


