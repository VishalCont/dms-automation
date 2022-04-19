/// <reference types ="Cypress"/>
var faker = require("@faker-js/faker");
var vinGenerator = require("vin-generator");
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
import { getRandomNumber } from "../../utils/random_number";
import { API_URL, ENV } from "../../utils/constants";
describe("TradeIn", () => {
  it("Adding Trade In", () => {
    cy.login();
    const customer = customerInfos[0];
    cy.lookupExitingCustomer(customer);
    cy.selectVehicle();
    //cy.get("#TableQuotation i.fa-plus").click();
    cy.tradeIn("7000", "2000", "2000", "8000");
    //TOdo Inputs for all the values
    //TOdo calculate profit on vehicle
    //TOdo Add TradeIn
  });
});
