/// <reference types ="Cypress"/>

import { API_URL } from "../../../utils/constants";
var moment = require("moment");
var customerDetails = require(`../../../utils/sales_flow_cases`);
var tradeInDetails = require(`../../../data/trade_in_details.json`);
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
    const tradeQuotation = tradeInDetails[0];
    cy.tradeIn(
      tradeQuotation.dealerTradeInOffer,
      tradeQuotation.payOffLoanBalance,
      tradeQuotation.cashPaidToBuyer,
      tradeQuotation.actualCashValue
    );
    cy.wait(2000);
    cy.get("button#trade-in").first().click();
    cy.contains("Vehicle Valuations").should("be.visible");

    cy.get("input[formcontrolname = 'year']")
      .invoke("val")
      .then((vehicleYear) => {
        customer.tradeInVehicleYear = vehicleYear;
        //(customer.tradeInVehicleYear);
      });
    // cy.get("input[formcontrolname = 'make']")
    //   .invoke("val")
    //   .then((vehicleMake) => {
    //     customer.trade_in_vehicle_year = vehicleMake;
    //     cy.log(customer.trade_in_vehicle_make);
    //   });
    // cy.get("input[formcontrolname = 'model']")
    //   .invoke("val")
    //   .then((vehicleModel) => {
    //     customer.trade_in_vehicle_year = vehicleModel;
    //     cy.log(customer.trade_in_vehicle_model);
    //   });
    cy.get("input[formcontrolname = 'vin']")
      .invoke("val")
      .then((vehicleVIN) => {
        customer.tradeInVehicleVIN = vehicleVIN;
        cy.log(customer.tradeInVehicleVIN);
      });
    cy.get("input[formcontrolname = 'license_plate']")
      .invoke("val")
      .then((vehicleLicensePlate) => {
        customer.tradeInVehicleVINlicensePlate = vehicleLicensePlate;
        //var trade = customer.trade_in_vehicle_license_plate
        cy.log(customer.tradeInVehicleVINlicensePlate);
      });

    cy.intercept(`${API_URL}/sales/sales_trade_in/*`).as("tradeInWait");
    cy.get("button").contains("SAVE & CONTINUE").click();
    cy.wait("@tradeInWait");
  });
  it("Adding DCC/Gap to Sale", () => {
    cy.log(customer.trade_in_vehicle_year);
    cy.existingVendorForDCCAndGAP("GAP", "qwerty", "200", "230");
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
      it("Adding Deffered Downpaymeny", () => {
        cy.defferedDownPayment(
          customer.differedDate,
          customer.differedDownPaymentAmount
        );
      });
      it("complete a BHPH Sale by making payment and dowmloading the Docs", () => {
        // const customer = verifyScreenCase.verifyScreen.case1
        customer.full_name = `${customer.first_name} ${customer.last_name}`;
        customer.bhphOrOutsideFinance = true;
        customer.tradeInContains = true;
        cy.verifyScreen(customer);
        cy.closeFloorPlan();
        //cy.makePayment(customer);
        cy.downloadDocument();
        cy.completeSale();
        // customer.full_name = `${customer.first_name} ${customer.last_name}`;
        // customer.bhphOrOutsideFinance = true;
      });
      it("Verify Screen After payment", () => {
        customer.finalizeSale = false;
        customer.tradeInContains = true;
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
