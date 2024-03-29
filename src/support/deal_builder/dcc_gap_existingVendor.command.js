/// <reference types ="Cypress"/>
import { API_URL } from "../../utils/constants";

//const { values } = require("cypress/types/lodash");
Cypress.Commands.add(
  "existingVendorForDCCAndGAP",
  (insuranceVendor, vendorName, dealerCost, costPrice) => {
    //if insurance is Dcc
    //perform enter vendor,enter dealer cost,enter price
    // if insurance is gap
    //perform enter vendor,enter dealer cost,enter price
    // if insurance is None
    //else enter vendor, dealer cost
    cy.intercept(`${API_URL}/dealeradminnew/taxes-fees/list/*`).as("dccWait");
    if (insuranceVendor === "DCC" || insuranceVendor === "GAP") {
      cy.get("button").contains(" DCC/GAP ").should("be.visible").click();
      cy.wait(5000);
      cy.get(
        `.modal-content input[formcontrolname='insuranceProtectionType'][value='${insuranceVendor}']`
      ).check();
      cy.wait(5000);
      cy.get("select[formcontrolname='vendor_id']").select(`${vendorName}`);
      //  .select(`${vendorName}`);
      cy.get("input[formcontrolname='dealer_cost']").type(`${dealerCost}`);
      if (insuranceVendor === "DCC") {
        cy.get("input[formcontrolname='insuranceDCCSalePrice']").type(
          `${costPrice}`
        );
      } else {
        cy.get("input[formcontrolname='insuranceGapSalePrice']").type(
          `${costPrice}`
        );
      }
      // cy.get("input[formcontrolname='insuranceProtectionType']").find("input[value='GAP']").click();
      cy.get("button").contains("SAVE").should("be.enabled").click();
    } else {
      cy.get("button").contains(" DCC/GAP ").should("be.visible").click();
      cy.get(
        `.modal-content input[formcontrolname='insuranceProtectionType'][value='${insuranceVendor}']`
      ).check();
      cy.wait(1000);
      cy.get("select[formcontrolname='vendor_id']").select(`${vendorName}`);
      cy.get("input[formcontrolname='dealer_cost']").type(`${dealerCost}`);
      cy.get("button").contains("SAVE").should("be.visible").click();
    }
    cy.wait("@dccWait");
    //cy.wait("@dccWait");
    cy.wait(4000);
  }
);
