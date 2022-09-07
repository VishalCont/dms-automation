/// <reference types ="Cypress"/>

import { API_URL } from "../../../utils/constants";
var moment = require("moment");
var customerDetails = require(`../../../utils/sales_flow_cases`);
//var tradeInDetails = require(`../../../data/trade_in_details.json`);
let customer = customerDetails.salesValues.BHPH;
describe("Sales Flow", () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });
  afterEach(() => {
    cy.saveLocalStorageCache();
  });
  it("Logging in to DMS Dealer Account", () => {
    cy.login("clearent", "Admin@123");
  });
  it("Starting a Sale", () => {
    cy.wait(2000);
    cy.startSale();
    cy.wait(2000);
    cy.newCustomer(customer);
  });
  it("Selecting a Vehicle", () => {
    cy.selectVehicle();
  });
  it("Change Sale price", () => {
    cy.changeSalePrice(customer);
    cy.wait(2000);
  });
  it("Selecting Sales Person", () => {
    cy.selectSalesPersons(customer);
  });
  it("Verifying Customer Details", () => {
    cy.verifyCustomerData(customer);
  });
  it("Adding TradeIn to Sale", () => {
    cy.tradeIn(customer);
    cy.tradeInDetails(customer).then((customer) => {
      //write to file
      cy.writeFile("src/dump/customer-copy.json", customer);
    });
  });
  it("Adding DCC/Gap to Sale", () => {
    cy.readFile("src/dump/customer-copy.json").then((customer) => {
      // read file and use object
      cy.log(customer.tradeInVehicleMake);
      cy.existingVendorForDCCAndGAP("GAP", "qwerty", "200", "230");
    });
  });
  it("Adding Service Contract to sale ", () => {
    cy.existingVendorForServiceContract("Vendor", "qwerty", "125", "125");
  });
  switch (customer.saleType) {
    case "cash":
      it("complete a Cash Sale by making payment and dowmloading the Docs", () => {
        // const customer = verifyScreenCase.verifyScreen.case1
        customer.full_name = `${customer.first_name} ${customer.last_name}`;
        cy.verifyScreen(customer);
        cy.makePayment(customer);
        cy.downloadDocument();
        cy.completeSale();
        //customer.full_name = `${customer.first_name} ${customer.last_name}`;
      });
      it("Verify Screen After payment", () => {
        customer.finalizeSale = false;
        cy.log("customer.finalizeSale", customer.finalizeSale);
        // customer.tradeInContains = true;
        cy.verifyScreen(customer);
        cy.confirmationAtFinalizeSale();
        cy.get(".sales-home").contains("Deal Activity").should("be.visible");
      });
      break;
    case "BHPH":
      it("Change Sale type to BHPH", () => {
        cy.wait(1000);
        cy.changeSaleType(customer.typeOfSale);
      });
      it("Adding Deffered Down payment", () => {
        cy.defferedDownPayment(
          customer.differedDate,
          customer.differedDownPaymentAmount
        );
      });
      it("complete a BHPH Sale by making payment and downloading the Docs", () => {
        // const customer = verifyScreenCase.verifyScreen.case1
        customer.full_name = `${customer.first_name} ${customer.last_name}`;
        customer.bhphOrOutsideFinance = true;
        customer.tradeInContains = true;
        customer.deffDownpaymentContains = true;
        cy.verifyScreen(customer);
        //cy.closeFloorPlan();
        //cy.makePayment(customer);
        customer.salesPerson = `${
          customer.salesPerson.charAt(0).toLocaleUpperCase() +
          customer.salesPerson.substring(1)
        } - ${customer.commission}`;
        cy.commissionRecap(customer);
        cy.downloadDocument();

        // customer.full_name = `${customer.first_name} ${customer.last_name}`;
        // customer.bhphOrOutsideFinance = true;
      });
      it("Deal Worksheet", () => {
        cy.dealWorksheet(customer);
      });
      it("Verify Screen After payment", () => {
        customer.finalizeSale = false;
        customer.tradeInContains = true;
        cy.completeSale();
        cy.verifyScreen(customer);
        cy.confirmationAtFinalizeSale();
        cy.get(".sales-home").contains("Deal Activity").should("be.visible");
      });

      break;
    case "OutsideFinance":
      //
      break;
    case "Wholesale":
      //
      break;
    default:
      cy.log("Sale type is incorrect");
      break;
  }
});
