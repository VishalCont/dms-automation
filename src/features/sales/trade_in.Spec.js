/// <reference types ="Cypress"/>
var faker = require("faker");
var vinGenerator = require("vin-generator");
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
import { getRandomNumber } from "../../utils/random_number";
import { API_URL, ENV } from "../../utils/constants";
var faker = require("faker");
describe("TradeIn", () => {
  it("Adding Trade In", () => {
    cy.login();
    const customer = customerInfos[0];
    cy.lookupExitingCustomer(customer);
    //Click on Next button
    cy.get("app-customer-info button").contains("NEXT").click();
    //assertion for popup
    cy.contains(" Verify Customer Information").should("be.visible");
    //click on Confirm in the Dialog box
    //Intercept
    cy.intercept(`${API_URL}/inventory/list?staged=staged`).as("vehicleList");
    cy.get("modal-container button").contains("Confirm").click();
    //Wait
    cy.wait("@vehicleList");
    // In Select vehicle Tab-check condition for vehicles>0 (a.vehicle-select) this have length>0
    cy.get("a.vehicle-select").its("length").should("be.greaterThan", 0);
    // array.first(); it selects first vehicle
    cy.intercept(`${API_URL}/sales/credit700/*`).as("dealBuilder");
    cy.get("a.vehicle-select").first().click();
    cy.wait("@dealBuilder", { timeout: 10000 });
    //check with Api call if the page is moved to Dealbuilder page
    cy.contains("Quotation Detail").should("be.visible");
    //cy.get("#TableQuotation i.fa-plus").click();
    cy.tradeIn("7000", "2000", "2000", "8000");
    //TOdo Inputs for all the values
    //TOdo calculate profit on vehicle
    //TOdo Add TradeIn
  });
});
