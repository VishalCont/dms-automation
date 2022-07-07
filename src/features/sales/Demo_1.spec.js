/// <reference types ="Cypress"/>

import { faker } from "@faker-js/faker";
var moment = require("moment");
const { ENV } = require("../../utils/constants");
// const customer = {
//   first_name: faker.name.firstName(),
//   last_name: faker.name.lastName(),
//   work_phone: faker.phone.phoneNumber(),
//   street: faker.address.street(),
//   zipcode: "75901",
// };
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
var quotationDetails = require(`../../data/quotation_detail.json`);
var financeQuotationDetails = require(`../../data/fin_chrg_rt_prtcptn_details.json`);
var verifyScreenCases = require(`../../utils/values_for_cases.js`);
var tradeInDetails = require(`../../data/trade_in_details.json`);
describe("Demo", () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  afterEach(() => {
    cy.saveLocalStorageCache();
  });

  it("Checking Sales Price,sales Tax, Other by adding Dcc/gap", () => {
    //cy.log(moment().add(10, "days").format("MM/DD/YYYY"));
    cy.login();
    cy.startSale();
    const customer = customerInfos[0];
    const quotation = quotationDetails[5];
    cy.lookupExitingCustomer(customer);
    cy.selectVehicle();
    // cy.log(customer);
    // cy.newCustomer(customer);
    // // const customer = customerInfos[0];
    // const quotation = quotationDetails[5];
    // // cy.lookupExitingCustomer(customer);
    // cy.selectVehicle();
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

  it("Test", () => {
    cy.installmentAmount("apr", "59.75", "672.24");
    const customer = verifyScreenCases.verifyScreen.case1;
    cy.verifyScreen(customer);
  });

  it("Checking Sales Price,sales Tax, Other by adding downPayment", () => {
    cy.clearDccGapValue();
    const quotation1 = quotationDetails[4];
    //cy.wait(10000);
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation1.vehicleSalePrice);
    cy.get("body").click();

    cy.downPayment("2000");
    cy.get("[formcontrolname='tax_rate']").should(
      "have.value",
      quotation1.salesTax
    );
    cy.get("[formcontrolname='quotation_price']").should(
      "have.value",
      quotation1.salesPrice
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

  it("Checking Sales Price,sales Tax, Other by adding tradeIn ", () => {
    const tradeQuotation = tradeInDetails[0];
    // cy.downPayment("2000");
    cy.clearDownpayment();
    cy.tradeIn(
      tradeQuotation.dealerTradeInOffer,
      tradeQuotation.payOffLoanBalance,
      tradeQuotation.cashPaidToBuyer,
      tradeQuotation.actualCashValue
    );
    const quotation2 = quotationDetails[3];
    cy.intercept(`${ENV}/dealeradminnew/dealer_max_apr/detail/77/1407`).as(
      "changeSalePrice"
    );
    cy.get("[formcontrolname='quotation_price']").should(
      "have.value",
      quotation2.salesPrice
    );
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation2.vehicleSalePrice);
    cy.get("body").click();
    //check sales tax
    // cy.wait("@changeSalePrice");
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

  it("Checking Sales Price,sales Tax, Other by adding tradeIn and downPayment ", () => {
    const tradeQuotation = tradeInDetails[0];
    // cy.downPayment("2000");
    cy.removeTradeIn();
    cy.wait(5000);
    cy.downPayment("2000");
    cy.wait(3000);
    cy.tradeIn(
      tradeQuotation.dealerTradeInOffer,
      tradeQuotation.payOffLoanBalance,
      tradeQuotation.cashPaidToBuyer,
      tradeQuotation.actualCashValue
    );
    const quotation2 = quotationDetails[1];
    // cy.intercept(`${ENV}/dealeradminnew/dealer_max_apr/detail/77/1407`).as(
    //   "changeSalePrice"
    // );
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation2.vehicleSalePrice);
    cy.get("body").click();
    //cy.wait("@changeSalePrice");
    cy.wait(2000);
    cy.get("[formcontrolname='quotation_price']").should(
      "have.value",
      quotation2.salesPrice
    );
    //check sales tax
    //cy.wait("@changeSalePrice");
    cy.wait(2000);
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

  it("Checking Sales Price,salesTax,Other charges  by adding Dcc/Gap and downPayment", () => {
    // cy.login();
    // const customer = customerInfos[0];
    const quotation = quotationDetails[7];
    // cy.lookupExitingCustomer(customer);
    // cy.selectVehicle();
    // cy.wait(10000);
    // cy.get("input[formcontrolname='paymentRadios']").each(

    //   (ele, index, list) => {

    //     cy.log(ele);

    //     cy.log(index);

    //     if (index === 2) ele.trigger("click");

    //   }

    // );
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation.vehicleSalePrice);

    cy.wait(5000);
    cy.clearDownpayment();
    cy.removeTradeIn();
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
      quotation.salesTax || "187.50"
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
  });

  it("Checking sales price,salesTax, Other charges by adding service contract", () => {
    cy.clearDccGapValue();
    cy.clearDownpayment();
    cy.existingVendorForServiceContract("Vendor", "125", "125");
    const quotation = quotationDetails[8];
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
  });

  it("Checking sales Price,salesTax, Other charges by adding deferred downPayment", () => {
    cy.clearServiceContract();
    cy.defferedDownPayment(moment().add(10, "days").format("MM/DD/YYYY"), "20");
    const quotation = quotationDetails[9];
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
  });

  it("Checking sales Price,salesTax, Other charges by adding deferred downPayment and Service Contract", () => {
    cy.clearDefferdownpayment();
    cy.defferedDownPayment(moment().add(10, "days").format("MM/DD/YYYY"), 40);
    cy.existingVendorForServiceContract("Vendor", "125", "125");
    const quotation = quotationDetails[10];
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
  });

  it("Checking Sales Price, salesTax, Other charges by adding Dcc/Gap and deferred downPayment", () => {
    cy.clearDefferdownpayment();
    cy.clearServiceContract();
    cy.defferedDownPayment(moment().add(10, "days").format("MM/DD/YYYY"), 80);
    cy.existingVendorForDCCAndGAP("DCC", "Dario", "200", "230");
    const quotation = quotationDetails[11];
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
  });

  it("Checking Sales Price, Sales Tax, Other Charges by adding Service Contract and deferred downPayment ", () => {
    cy.clearDefferdownpayment();
    cy.clearDccGapValue();
    cy.wait(2000);
    cy.defferedDownPayment(moment().add(10, "days").format("MM/DD/YYYY"), 80);
    cy.wait(1000);
    cy.installmentAmount("apr", "59.75", "672.24");
    const quotation = quotationDetails[12];
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
  });

  it("Checking and APR || Installment Amount || Number of Payments by changing financing calculation method", () => {
    cy.installmentAmount("numberOfPayments");
  });

  //verify screen
  it("checking verify screen page", () => {
    const customer = verifyScreenCases.verifyScreen.case1;
    cy.verifyScreen(customer);
  });

  // outside finance with check buy back rate participation
  // it("outside finance with check flat rate participation", () => {
  //  const randomName = faker.name.firstName();
  // cy.log(randomName)
  // cy.buyRateFromBank(randomName, 100, 10, 50);
  // const financeQuotation1 = financeQuotationDetails[0];
  //cy.wait(2000);
  //const customer = verifyScreenCases.verifyScreen.case2;
  //cy.verifyScreen(customer);
  //cy.salesRecapSheet(randomName)
  // cy.get("input[formcontrolname='feeDealer']").should(financeQuotation1.feeDealer)
  // cy.get("input[formcontrolname='buyRateFromBank']").should(financeQuotation1.buyRateFromBank)
  // cy.get("input[formcontrolname='bankPercentHoldInReserve']").should(financeQuotation1.bankPercentHoldInReserve)
  //});

  //outside finance with flat rate
  it("outside finance with flat rate", () => {
    const randomName = faker.name.firstName();
    const financeQuotation2 = financeQuotationDetails[1];

    //ignore comma
    // var number = "1,200.00";
    // var stringValue = parseFloat(number.replace(/,/g, ""));

    // console.log(stringValue, "using String");
    
    cy.log(randomName);
    cy.flatRateLienHolder(randomName, financeQuotation2.amountEarned, 100);
    cy.wait(2000);
    const customer = verifyScreenCases.verifyScreen.case2;
    cy.verifyScreen(customer);
    cy.wait(2000);
    cy.salesRecapSheet("flatRateLienHolder", randomName, "1,200.00");
    //cy.get("input[formcontrolname='amountEarned']").should(financeQuotation2.amountEarned)
    //cy.get("input[formcontrolname='feeDealer']").should(financeQuotation2.feeDealer)
  });
});
