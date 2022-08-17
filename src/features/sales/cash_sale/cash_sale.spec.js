/// <reference types ="Cypress"/>
import { faker } from "@faker-js/faker";
import { API_URL } from "../../../utils/constants";
var moment = require("moment");

let customer = {
  first_name: faker.name.firstName().replace("'", ""),
  last_name: faker.name.lastName().replace("'", ""),
  phone: faker.phone.number("3##-###-####"),
  street: faker.address.street(),
  zipcode: "75901",
  full_name: "XYZ",
  bhphOrOutsideFinance: false,
  vehicle_price: "10000.00",
  totalSalePrice: "25,676.46",
  finalizeSale: true,
  saleType: "BHPH",
  typeOfSale: 2,
  apr: "24.82",
  financeCharge: "7,383.96",
  amountFinanced: "18,292.50",
  totalOfPayments: "25,676.46",
  noOfPayments: "35",
  installmentAmount: "725.57",
  tradeInContains: false,
  tradeInVehicleYear: "2000",
  tradeInVehicleVIN: "5TFUM5F12AX012971",
  tradeInVehiclelicensePlate: "N/A",
  trade_in_vehicle_make: " ",
  trade_in_vehicle_model: " ",
  differedDate: moment().add(10, "days").format("MM/DD/YYYY"),
  differedDownPaymentAmount: "20",
};
var tradeInDetails = require(`../../../data/trade_in_details.json`);
describe("cash sale", () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });
  afterEach(() => {
    cy.saveLocalStorageCache();
  });
  it("Logging in to DMS Dealer Account", () => {
    cy.login();
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
    // cy.selectSalesPersons();
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
        cy.log(customer.tradeInVehicleYear);
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
        customer.finalizeSale = false;
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
      it("complete a BHPH Sale by making payment and dowmloading the Docs", () => {
        // const customer = verifyScreenCase.verifyScreen.case1
        customer.full_name = `${customer.first_name} ${customer.last_name}`;
        customer.bhphOrOutsideFinance = true;
        customer.tradeInContains = true;
        cy.verifyScreen(customer);
        cy.makePayment(customer);
        cy.downloadDocument();
        cy.completeSale();
        // customer.full_name = `${customer.first_name} ${customer.last_name}`;
        // customer.bhphOrOutsideFinance = true;
        customer.finalizeSale = false;
        // customer.tradeInContains = true;
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
