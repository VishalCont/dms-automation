/// <reference types ="Cypress"/>

import { API_URL } from "../../../utils/constants";
var moment = require("moment");
var customerDetails = require(`../../../utils/sales_flow_cases`);
//var tradeInDetails = require(`../../../data/trade_in_details.json`);
//var finChargeRateParticipation = require(`../../../utils/sales_flow_cases`);
describe("Sales Flow", () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });
  afterEach(() => {
    cy.saveLocalStorageCache();
  });
  it("Logging in to DMS Dealer Account", () => {
    cy.login("shelby_ltd", "Admin@123");
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
    "case10",
    "case11",
    "case12",
    "case13",
    "case14",
    "case15",
    "case16",
    "case17",
    "case18",
    "case19",
    "case20",
    "case21",
  ];
  for (let index = 0; index < cases.length; index++) {
    const element = cases[index];
    console.log(element);
    let customer = customerDetails.testCases[element];
    console.log(customer);
    it("starting a sale ", () => {
      cy.wait(5000);
      cy.startSale();
      cy.wait(3000);
      cy.newCustomer(customer);
      cy.selectVehicle();
      cy.changeSaleDate(customer);
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
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
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
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
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
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
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
          cy.wait(3000);
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
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
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
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
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
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
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
          cy.wait(3000);
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
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
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
          cy.wait(3000);
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
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
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
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
        });
        break;
      case "case10":
        it("Changing sale type to outside and Adding new lien holder sale", () => {
          cy.wait(1000);
          cy.changeSaleType(customer.typeOfSale);
          cy.wait(3000);
          cy.addLienHolder(customer.randomName);
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
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
        });
        break;
      case "case11":
        it("Changing sale type to outside and Adding finance charge rate participation with flat rate", () => {
          cy.wait(1000);
          cy.changeSaleType(customer.typeOfSale);
          cy.wait(3000);
          cy.selectLienHolder(customer);
          cy.wait(5000);
          //adding finance charge rate
          const finChargeRtPart = customerDetails.testCases.case11;
          cy.financeChargeRateParticipation(
            finChargeRtPart.feeDealer,
            finChargeRtPart.amountEarned,
            finChargeRtPart.buyRateFromBank,
            finChargeRtPart.bankPercentHoldInReserve,
            true
          );
          cy.wait(3000);
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          customer.bhphOrOutsideFinance = true;
          cy.wait(3000);
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
          cy.salesRecap(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
        });
        break;
      case "case12":
        it("Changing sale type to outside and Adding finance charge rate participation ", () => {
          cy.wait(1000);
          cy.changeSaleType(customer.typeOfSale);
          cy.wait(3000);
          cy.selectLienHolder(customer);
          cy.wait(5000);
          //adding finance charge rate
          const finChargeRtPart = customerDetails.testCases.case12;
          cy.financeChargeRateParticipation(
            finChargeRtPart.feeDealer,
            finChargeRtPart.amountEarned,
            finChargeRtPart.buyRateFromBank,
            finChargeRtPart.bankPercentHoldInReserve,
            false
          );
          cy.wait(3000);
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
          cy.salesRecap(customer);
          cy.commissionRecap(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
        });
        break;
      case "case13":
        it("sale details page with individual customer", () => {
          cy.wait(3000);
          cy.changeSaleType(customer.typeOfSale);
          cy.wait(5000);
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
          //cy.makePayment(customer);
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.wait(6000);
          cy.confirmationAtFinalizeSale();
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
          cy.recentDeal(customer);
          cy.saleDetails(customer);
        });
        break;
      case "case14":
        it("sale details page with joint customer", () => {
          cy.wait(3000);
          cy.changeSaleType(customer.typeOfSale);
          cy.wait(5000);
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
          //cy.makePayment(customer);
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.wait(6000);
          cy.confirmationAtFinalizeSale();
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
          cy.recentDeal(customer);
          cy.saleDetails(customer);
        });
        break;
      case "case15":
        it("Changing sale type to outside and Adding both lien holder sale", () => {
          cy.wait(1000);
          cy.changeSaleType(customer.typeOfSale);
          cy.wait(3000);
          cy.selectLienHolder(customer);
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          customer.bhphOrOutsideFinance = true;
          //cy.test();
          cy.wait(10000);
          cy.verifyScreen(customer);
          cy.wait(3000);
        });
        it(customer.case, () => {
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.downloadDocument();
          cy.dealWorksheet(customer);
          cy.salesRecap(customer);
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
        });
        break;
      case "case16":
        it("sale details page after completing cash Sale", () => {
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
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
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
          cy.recentDeal(customer);
          cy.saleDetails(customer);
        });
        break;
      case "case17":
        it("Changing mileage", () => {
          cy.wait(3000);
          cy.changeMileage(customer.mileage);
          cy.wait(3000);
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
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
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
          cy.wait(5000);
          //sale details page
          cy.get("datatable-body-cell:nth-child(1) a").first().click();
          cy.wait(5000);
          //mileage selector
          cy.get("#collapseEvent4 :nth-child(2) :nth-child(1) > .col-sm-4")
            .invoke("text")
            .as("v1");
          //assertion
          cy.get("@v1").then((v1) => {
            expect(parseFloat(v1)).to.equal(customer.mileage);
          });
        });
        break;
      case "case18":
        it("Changing sale type to cash and Adding new lien holder", () => {
          cy.wait(5000);
          cy.addLienHolder(customer.randomName);
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
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
          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.wait(5000);
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case19":
        it("BHPH-Changing interest rates and Back calculating interest rates", () => {
          cy.wait(1000);
          cy.changeSaleType(customer.typeOfSale);
          cy.wait(3000);
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          customer.bhphOrOutsideFinance = true;
          //cy.test();
          cy.changeInterestRate(customer);
          cy.wait(6000);
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.wait(6000);
          cy.downloadDocument();

          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case20":
        it("Government fees and Sales tax selection and deSelection", () => {
          cy.wait(1000);
          cy.changeSaleType(customer.typeOfSale);
          cy.wait(3000);
          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          customer.bhphOrOutsideFinance = true;
          //cy.test();
          cy.deselectSalesTaxGovtFee();
          cy.wait(6000);
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.wait(6000);
          cy.downloadDocument();

          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
      case "case21":
        it("Cancel deal after going through and Then go through deal again", () => {
          cy.changeSaleType(customer.typeOfSale);
          cy.wait(3000);

          customer.full_name = `${customer.first_name} ${customer.last_name}`;
          customer.bhphOrOutsideFinance = true;

          cy.wait(6000);
          cy.verifyScreen(customer);
        });
        it(customer.case, () => {
          customer.salesPerson = `${
            customer.salesPerson.charAt(0).toLocaleUpperCase() +
            customer.salesPerson.substring(1)
          } - ${customer.otherCommission}`;
          cy.wait(6000);
          cy.downloadDocument();

          customer.finalizeSale = false;
          cy.completeSale();
          cy.verifyScreen(customer);
          cy.confirmationAtFinalizeSale();
          cy.wait(12000);
          cy.cancelContinueDeal();
          cy.get(".sales-home").contains("Deal Activity").should("be.visible");
        });
        break;
    }
  }
});
