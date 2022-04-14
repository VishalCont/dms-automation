/// <reference types ="Cypress"/>
var faker = require("faker");
var vinGenerator = require("vin-generator");
//var customerInfos = require(`../../../data/customer_info.${ENV}.json`);
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
import { getRandomNumber } from "../../utils/random_number";
import { API_URL, ENV } from "../../utils/constants";
//import { isNull } from "cypress/types/lodash";
//import { isEmpty } from "cypress/types/lodash";
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
    addTradeIn();
    //TOdo Inputs for all the values
    //TOdo calculate profit on vehicle
    //TOdo Add TradeIn
  });
});
function addTradeIn() {
  cy.get("#TableQuotation i.fa-plus").click();
  cy.get("button#trade-in").first().click();
  cy.contains("Vehicle Valuations").should("be.visible");
  cy.intercept(`${API_URL}/inventory/vin-check/*?trade_in=1`).as(
    "firstTradeInWait"
  );
  tradeFetchVehicle();
  // Dms Allows only below 30 year aged vehicle
  var yearLimit = new Date().getFullYear() - 30;
  //log of the limit year
  cy.log(yearLimit);
  cy.get("input[formcontrolname = 'year']").then((year) => {
    if (year >= yearLimit) {
      cy.log(" User can allow this vehicle");
    } else {
      cy.log(
        "Vehicle Manufactrure year is" + year + " so we cannot use this vehicle"
      );
      tradeFetchVehicle();

      //Add Forloop for this
    }
  });
  //TOdo Assertion for make dropdown
  //TOdo Assertion for model dropdown
  //2FTNW21P33WETNEZZ
  //TOdo Assertion for Vehicle type dropdown
  //TOdo Assertion for Fuel type dropdown
  //TOdo Assertion for Transmission dropdown
  cy.get("input[formcontrolname = 'mileage']").type(
    getRandomNumber(5000, 12000)
  );
  cy.get("input[formcontrolname = 'cylinders']").clear();
  cy.wait(2000);
  cy.get("input[formcontrolname='cylinders']").then((cylinders) => {
    // cylinders.val() !== 0 ||
    if (
      cylinders.val() === "undefined" ||
      cylinders.val() == 0 ||
      cylinders.val() === null ||
      cylinders.val() === ""
    ) {
      cy.get("input[formcontrolname = 'cylinders']").type(
        getRandomNumber(2, 12)
      );
      cy.log("cylinder does not have any value: " + cylinders.val());
    } else {
      //cy.log("cylinder count: " + cylinders.val());
      cy.log("cylinder consist a value :" + cylinders.val());
    }
  });
  //cy.get("input[formcontrolname = 'stock_number']").invoke("val").should("not.be.empty");
  //cy.get("input[formcontrolname = 'stock_number']").clear().type("X88096");
  //cy.log(cy.get("input[formcontrolname = 'stock_number']").invoke("val"));
  cy.get("input[formcontrolname = 'dealer_trade_in']").type(
    getRandomNumber(5000, 8000)
  );
  cy.get("input[formcontrolname = 'pay_off_loan_balance']").type(
    getRandomNumber(3000, 5000)
  );
  cy.get("input[formcontrolname = 'cash_paid_for_buyer']").type(
    getRandomNumber(2000, 3000)
  );
  cy.get("input[formcontrolname = 'actual_cash_value']").type(
    getRandomNumber(8000, 8200)
  );
  cy.intercept(`${API_URL}/sales/sales_trade_in/*`).as("tradeInWait");
  cy.get("button").contains("SAVE & CONTINUE").click();
  cy.wait(5000);

  cy.get("body").then((body) => {
    if (body.find("div:contains(Stock Number Already Exists)").length === 0) {
      //evaluates as true
      cy.log("Dealer Dont have the same stock already");
    } else {
      cy.log("Dealer  have the same stock already");
      cy.get("input[formcontrolname = 'stock_number']")
        .clear()
        .type(getRandomNumber(10000, 99999));
      cy.get("button").contains("SAVE & CONTINUE").click();
    }
  });

  // const stockNumberExists = cy
  //   .find("div")
  //   .contains("Stock Number Already Exists").length;
  // cy.log("stockNumberExists", stockNumberExists);
  // if (stockNumberExists === "Stock Number Already Exists") {
  //   cy.get("input[formcontrolname = 'stock_number']").type(
  //     faker.random.alphaNumeric(5)
  //   );
  // }
  cy.wait("@tradeInWait");
  cy.wait(3000);
  cy.debug();
}
function tradeFetchVehicle() {
  cy.get("input[formcontrolname = 'vin']").type(vinGenerator.generateVin());
  cy.get(".modal-body button.btn-ddms-lightgreen")
    .contains("Fetch Vehicle Details")
    .click();
  cy.wait("@firstTradeInWait");
}
