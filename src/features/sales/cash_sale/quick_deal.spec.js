/// <reference types ="Cypress"/>
import { API_URL } from "../../../utils/constants";
var quickDCalculator = require(`../../../utils/my_values`);

//var customer = require(`../../utils/sales_flow_cases`);
//var customerInfos = require(`../../data/customer_info.${ENV}.json`);
var vehicleList;
describe("quickDeal", () => {
  it("Logging in to DMS Dealer Account", () => {
    cy.login("albert", "Albert@123");
    const deal = quickDCalculator.quickDCalculator.case1;

    cy.quickDealCalculator(deal);

    cy.contains("Primary Use for Which Purchased").should("be.visible");
    cy.get("[formcontrolname='work_phone']").type("435-435-4354");
    //Click on Lookup Existing Customer button
    cy.get("button").contains("Lookup Existing Customer").click();
    cy.wait(3000);
    //check if all the mandatory fields are filled
    cy.get("[formcontrolname='first_name']")
      .invoke("val")
      .should("not.be.empty");
    cy.get("[formcontrolname='last_name']")
      .invoke("val")
      .should("not.be.empty");
    cy.get("app-customer-info button").contains("NEXT").click();
    cy.get("modal-container button").contains("Confirm").click();
    //Select vehicle
    cy.selectVehicle();
    //Validation  for Quick Deal Calculator
    //validate vehilce price
    cy.wait(3000);

    cy.get("[formcontrolname='sale_price']").should(
      "have.value",
      deal.vehiclePrice
    );
    cy.get("[formcontrolname='totalQuoteDownPayment']").should(
      "have.value",
      deal.downPayment
    );
    cy.get("[formcontrolname='tax_rate']").should("have.value", deal.saleTax);
    cy.get(".btn-govtax input").should("have.value", deal.govtFee);
    //financing Calculation method
    if (deal.bInstallmentAmount === true) {
      cy.get("[formcontrolname='noOfPayments']").should(
        "have.value",
        deal.period
      );
      cy.get("[formcontrolname='rateOfInterest']").should(
        "have.value",
        deal.interestRate
      );
    }
    if (deal.bNumberOfPayments === true) {
      cy.get("[formcontrolname='rateOfInterest']").should(
        "have.value",
        deal.interestRate
      );
      cy.get("[formcontrolname='totalAmountMonthly']").should(
        "have.value",
        deal.installmentAmount
      );
    }
    if (deal.bApr === true) {
      cy.get("[formcontrolname='noOfPayments']").should(
        "have.value",
        deal.period
      );
      cy.get("[formcontrolname='totalAmountMonthly']").should(
        "have.value",
        deal.installmentAmount
      );
    }
    cy.get(".ml-auto.p-2 > :nth-child(2").click();
    cy.wait(4000);
    cy.get("app-verification-screen").contains("OK").click();
    cy.wait(4000);
    //cy.makePayment();
    cy.downloadDocument();

    cy.completeSale();
  });
});
