/// <reference types ="Cypress"/>
const { ENV } = require("../../utils/constants");
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
var quotationDetails = require(`../../data/quotation_detail.json`);
var tradeInDetails = require(`../../data/trade_in_details.json`);
describe("Demo", () => {
  it("Checking Sales Price,sales Tax, Other by adding tradein ", () => {
    cy.login();
    const customer = customerInfos[0];
    cy.lookupExitingCustomer(customer);
    cy.selectVehicle();
    cy.get("input[formcontrolname='paymentRadios']").each(
      (ele, index, list) => {
        cy.log(ele);
        cy.log(index);
        if (index === 2) ele.trigger("click");
      }
    );
    const tradeQuotation = tradeInDetails[0];
    cy.downPayment("2000");
    cy.tradeIn(
      tradeQuotation.dealerTradeInOffer,
      tradeQuotation.payOffLoanBalance,
      tradeQuotation.cashPaidToBuyer,
      tradeQuotation.actualCashValue
    );
    const quotation = quotationDetails[0];
    cy.intercept(`${ENV}/dealeradminnew/dealer_max_apr/detail/77/1407`).as(
      "changeSalePrice"
    );
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation.vehicleSalePrice);
    cy.get("body").click();
    //check sales tax
    //cy.wait("@changeSalePrice");
    cy.wait(1000);
    cy.get("[formcontrolname='tax_rate']").should(
      "have.value",
      quotation.salesTax
    );
    //check other charges
    cy.get("[formcontrolname='totalQuoteOtherCharges']").should(
      "have.value",
      quotation.otherCharges
    );
    //check total gov charges
    cy.get(".btn-govtax input").should(
      "have.value",
      quotation.totalOfGovernmentFees
    );
  });
  it("Checking Sales Price,sales Tax, Other by adding tradein and downpayment", () => {
    cy.wait(10000);
    cy.downPayment("2000");
    cy.wait(1000);
    // cy.get("[formcontrolname='tax_rate']").should("have.value");
    // //check other charges
    // cy.get("[formcontrolname='totalQuoteOtherCharges']").should(
    //   "have.value",
    //   quotation.otherCharges
    // );
    // //check total gov charges
    // cy.get(".btn-govtax input").should(
    //   "have.value",
    //   quotation.totalOfGovernmentFees
    // );
  });
});
