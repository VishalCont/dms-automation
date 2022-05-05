/// <reference types ="Cypress"/>
const { ENV } = require("../../utils/constants");
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
var quotationDetails = require(`../../data/quotation_detail.json`);
var tradeInDetails = require(`../../data/trade_in_details.json`);
describe("Demo", () => {
  it("Checking Sales Price,sales Tax, Other by adding Dcc/gap", () => {
    cy.login();
    const customer = customerInfos[0];
    const quotation = quotationDetails[5];
    cy.lookupExitingCustomer(customer);
    cy.selectVehicle();
    cy.wait(10000);
    cy.get("input[formcontrolname='paymentRadios']").each(
      (ele, index, list) => {
        cy.log(ele);

        cy.log(index);

        if (index === 2) ele.trigger("click");
      }
    );
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation.vehicleSalePrice);
    cy.get("body").click();
    cy.log(
      "salesprice value: " +
        quotation.vehicleSalePrice +
        "salestax value: " +
        quotation.salesTax +
        "govtfeee vlaue is :" +
        quotation.totalOfGovernmentFees +
        "Otherchargesvalue : " +
        quotation.otherCharges
    );

    cy.existingVendorForDCCAndGAP("DCC", "Dario", "200", "230");
    //cy.downPayment("2000");
    cy.wait(2000);
    cy.get("[formcontrolname='tax_rate']").should(
      "have.value",
      quotation.salesTax
    );
    // //check other charges
    cy.get("[formcontrolname='totalQuoteOtherCharges']").should(
      "have.value",
      quotation.otherCharges
    );

    // //sales price
    cy.get("[formcontrolname='quotation_price']").should(
      "have.value",
      quotation.salesPrice
    );
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
  it("Checking Sales Price,sales Tax, Other by adding Downpayment", () => {
    const quotation1 = quotationDetails[5];
    cy.wait(10000);
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation1.vehicleSalePrice);
    cy.get("body").click();

    cy.downPayment("2000");
    cy.clearDccGapValue();
    cy.get("[formcontrolname='tax_rate']").should(
      "have.value",
      quotation1.salesTax
    );
    //check other charges
    cy.get("[formcontrolname='totalQuoteOtherCharges']").should(
      "have.value",
      quotation1.otherCharges
    );
    //check total gov charges
    cy.get(".btn-govtax input").should(
      "have.value",
      quotation1.totalOfGovernmentFees
    );

    cy.wait(1000);
  });
  it("Checking Sales Price,sales Tax, Other by adding tradein ", () => {
    const tradeQuotation = tradeInDetails[0];
    // cy.downPayment("2000");
    cy.tradeIn(
      tradeQuotation.dealerTradeInOffer,
      tradeQuotation.payOffLoanBalance,
      tradeQuotation.cashPaidToBuyer,
      tradeQuotation.actualCashValue
    );
    const quotation2 = quotationDetails[0];
    cy.intercept(`${ENV}/dealeradminnew/dealer_max_apr/detail/77/1407`).as(
      "changeSalePrice"
    );
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation2.vehicleSalePrice);
    cy.get("body").click();
    //check sales tax
    //cy.wait("@changeSalePrice");
    cy.wait(1000);
    cy.get("[formcontrolname='tax_rate']").should(
      "have.value",
      quotation2.salesTax
    );
    //check other charges
    cy.get("[formcontrolname='totalQuoteOtherCharges']").should(
      "have.value",
      quotation2.otherCharges
    );
    //check total gov charges
    cy.get(".btn-govtax input").should(
      "have.value",
      quotation2.totalOfGovernmentFees
    );
  });
  it("Checking Sales Price,sales Tax, Other by adding tradein and downpayment ", () => {
    const tradeQuotation = tradeInDetails[0];
    // cy.downPayment("2000");
    cy.tradeIn(
      tradeQuotation.dealerTradeInOffer,
      tradeQuotation.payOffLoanBalance,
      tradeQuotation.cashPaidToBuyer,
      tradeQuotation.actualCashValue
    );
    const quotation2 = quotationDetails[0];
    cy.intercept(`${ENV}/dealeradminnew/dealer_max_apr/detail/77/1407`).as(
      "changeSalePrice"
    );
    cy.downPayment("2000");
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation2.vehicleSalePrice);
    cy.get("body").click();
    //check sales tax
    //cy.wait("@changeSalePrice");
    cy.wait(1000);
    cy.get("[formcontrolname='tax_rate']").should(
      "have.value",
      quotation2.salesTax
    );
    //check other charges
    cy.get("[formcontrolname='totalQuoteOtherCharges']").should(
      "have.value",
      quotation2.otherCharges
    );
    //check total gov charges
    cy.get(".btn-govtax input").should(
      "have.value",
      quotation2.totalOfGovernmentFees
    );
  });
  it("Check Sales Price,salestax,Other charges  by adding Dcc/Gap and Downpayment", () => {
    cy.login();
    const customer = customerInfos[0];
    const quotation = quotationDetails[7];
    cy.lookupExitingCustomer(customer);
    cy.selectVehicle();
    cy.wait(10000);
    cy.get("input[formcontrolname='paymentRadios']").each(

      (ele, index, list) => {

        cy.log(ele);

        cy.log(index);

        if (index === 2) ele.trigger("click");

      }

    );
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation.vehicleSalePrice);

  cy.wait(5000);
  //adding downpayment
  cy.downPayment("1000");
  cy.wait(5000);
  //adding dcc/gap
  cy.existingVendorForDCCAndGAP("DCC", "qwerty", "200", "230");
  cy.get("input[formcontrolname = 'dcc_sale_price']")
    .invoke("val")
    .should("not.be.empty");

    //check sales tax
    cy.get("[formcontrolname='tax_rate']").should(
      "have.value",
      quotation.salesTax
    );
   //check other charges
    cy.get("[formcontrolname='totalQuoteOtherCharges']").should(
      "have.value",
      quotation.otherCharges
    );
   //sales price
    cy.get("[formcontrolname='quotation_price']").should(
       "have.value",
        quotation.salesPrice
     );
  })
});
