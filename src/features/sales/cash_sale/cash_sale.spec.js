/// <reference types ="Cypress"/>
import { faker } from "@faker-js/faker";

let customer = {
  first_name: faker.name.firstName().replace("'", ""),
  last_name: faker.name.lastName().replace("'", ""),
  phone: faker.phone.number("3##-###-####"),
  street: faker.address.street(),
  zipcode: "75901",
  full_name: "XYZ",
  bhphOrOutsideFinance: false,
  vehicle_price: "10000.00",
  totalSalePrice: "25,715.60",
  finalizeSale: true,
  saleType: "BHPH",
  typeOfSale: 2,
  apr: "24.82",
  financeCharge: "7,423.10",
  amountFinanced: "18,292.50",
  totalOfPayments: "25,715.60",
  noOfPayments: "35",
  installmentAmount: "725.57",
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
    cy.login("dalmia", "Admin@123");
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
  });
  it("Adding DCC/Gap to Sale", () => {
    cy.existingVendorForDCCAndGAP("GAP", "qwerty", "200", "230");
  });
  it("Adding Service Contract to sale ", () => {
    cy.existingVendorForServiceContract("Vendor", "qwerty", "125", "125");
  });
  switch (customer.saleType) {
    case "cash":
      it("Verify Screen for Cash Sale", () => {
        // const customer = verifyScreenCase.verifyScreen.case1
        customer.full_name = `${customer.first_name} ${customer.last_name}`;
        cy.verifyScreen(customer);
      });
      it("Payment at Finalize sale", () => {
        cy.makePayment(customer);
      });
      it("Download All Documents", () => {
        cy.downloadDocument();
      });
      it("Complete Sale", () => {
        cy.completeSale();
      });
      it("Verify Screen after payment", () => {
        customer.full_name = `${customer.first_name} ${customer.last_name}`;
        customer.finalizeSale = false;
        cy.verifyScreen(customer);
      });
      it("Confirmation of sale", () => {
        cy.confirmationAtFinalizeSale();
        cy.get(".sales-home").contains("Deal Activity").should("be.visible");
      });
      break;
    case "BHPH":
      it("Change Sale type to BHPH", () => {
        cy.wait(1000);
        cy.changeSaleType(customer.typeOfSale);
      });
      it("Verify Screen for BHPH Sale", () => {
        // const customer = verifyScreenCase.verifyScreen.case1
        customer.full_name = `${customer.first_name} ${customer.last_name}`;
        customer.bhphOrOutsideFinance = true;
        cy.verifyScreen(customer);
      });
      it("Payment at Finalize sale", () => {
        cy.makePayment(customer);
      });
      it("Download All Documents", () => {
        cy.downloadDocument();
      });
      it("Complete Sale", () => {
        cy.completeSale();
      });
      it("Verify Screen after payment", () => {
        customer.full_name = `${customer.first_name} ${customer.last_name}`;
        customer.bhphOrOutsideFinance = true;
        customer.finalizeSale = false;
        cy.verifyScreen(customer);
      });
      it("Confirmation of sale", () => {
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
