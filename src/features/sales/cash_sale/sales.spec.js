/// <reference types ="Cypress"/>

import { API_URL } from "../../../utils/constants";
var moment = require("moment");
var customerDetails = require(`../../../utils/sales_flow_cases`);
//var tradeInDetails = require(`../../../data/trade_in_details.json`);
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
  var cases = [
    "case1",
    "case2",
    "case3",
    "case4",
    "case5",
    "case6",
    "case7",
    "case8",
    "case9",
  ];
  for (let index = 0; index < cases.length; index++) {
    const element = cases[index];
    console.log(element);
    let customer = customerDetails.testCases[element];
    console.log(customer);
    it("starting a sale ", () => {
      cy.wait(2000);
      cy.startSale();
      cy.wait(1000);
      cy.newCustomer(customer);
      cy.selectVehicle();
      cy.changeSalePrice(customer);
      cy.selectSalesPersons(customer);
      cy.verifyCustomerData(customer);
    });
    switch (customer.caseNo) {
      case "case1":
        it("Adding DCC/GAP to Sale", () => {
          cy.existingVendorForDCCAndGAP("GAP", "qwerty", "200", "230");
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          //cy.test();
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          cy.makePayment(customer);
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          customer.tradeInContains = false;
          cy.dealWorksheet(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case2":
        it("Adding Service Contract to sale", () => {
          cy.existingVendorForServiceContract("Vendor", "qwerty", "125", "125");
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          //cy.test();
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          cy.makePayment(customer);
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case3":
        it("Adding TradeIn To Sale", () => {
          cy.tradeIn(customer);
          cy.tradeInDetails(customer).then((customer) => {
            //write to file
            cy.writeFile("src/dump/customer-copy.json", customer);
          });
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          //cy.test();
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          cy.makePayment(customer);
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case4":
        it("Adding TradeIn and Service Contract to sale", () => {
          cy.existingVendorForServiceContract("Vendor", "qwerty", "125", "125");
          cy.tradeIn(customer);
          cy.tradeInDetails(customer).then((customer) => {
            //write to file
            cy.writeFile("src/dump/customer-copy.json", customer);
          });
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          //cy.test();
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          cy.makePayment(customer);
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case5":
        it("Adding Service Contract and DCC/GAP to sale", () => {
          cy.existingVendorForServiceContract("Vendor", "qwerty", "125", "125");
          cy.existingVendorForDCCAndGAP("GAP", "qwerty", "200", "230");
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          //cy.test();
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          cy.makePayment(customer);
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case6":
        it("Adding DCC/GAP and TradeIn to sale", () => {
          cy.existingVendorForDCCAndGAP("GAP", "qwerty", "200", "230");
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          //cy.test();
          cy.tradeIn(customer);
          cy.tradeInDetails(customer).then((customer) => {
            //write to file
            cy.writeFile("src/dump/customer-copy.json", customer);
          });
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          cy.makePayment(customer);
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case7":
        it("Changing sale type to BHPH and Adding Service Contract", () => {
          cy.wait(1000);
          cy.changeSaleType(customer.typeOfSale);
          cy.existingVendorForServiceContract("Vendor", "qwerty", "125", "125");
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          customer.bhphOrOutsideFinance = true;
          //cy.test();
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          cy.commissionRecap(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case8":
        it("Changing sale type to BHPH and Adding DCC/GAP to sale", () => {
          cy.wait(1000);
          cy.changeSaleType(customer.typeOfSale);
          cy.existingVendorForDCCAndGAP("GAP", "qwerty", "200", "230");
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          customer.bhphOrOutsideFinance = true;
          //cy.test();
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          cy.commissionRecap(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case9":
        it("Changing sale type to BHPH and Adding TradeIn sale", () => {
          cy.wait(1000);
          cy.changeSaleType(customer.typeOfSale);
          cy.tradeIn(customer);
          cy.tradeInDetails(customer).then((customer) => {
            //write to file
            cy.writeFile("src/dump/customer-copy.json", customer);
          });
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          customer.bhphOrOutsideFinance = true;
          //cy.test();
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          cy.commissionRecap(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
    }
  }
});
