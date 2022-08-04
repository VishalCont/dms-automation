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
  totalSalePrice: "7,956.00",
  finalizeSale: true,
};
//var verifyScreenCase = require(`../../../utils/values_for_cases`);
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
    cy.selectSalesPersons();
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
    cy.existingVendorForDCCAndGAP("GAP", "Dario", "200", "230");
  });
  it("Adding Service Contract to sale ", () => {
    cy.existingVendorForServiceContract("Vendor", "125", "125");
  });
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
});
