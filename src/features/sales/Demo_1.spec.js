/// <reference types ="Cypress"/>
var moment = require("moment");
const { ENV } = require("../../utils/constants");
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
var quotationDetails = require(`../../data/quotation_detail.json`);
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
  it("adding new lien holder and finance rate participation aswellas flat rate check", ()=> {
    cy.addVendorLienHolder();
  })
  it("Test", () => {
    cy.verifyScreen();
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
    //66cy.wait("@changeSalePrice");
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
  it("checking verify screen page", () => {});
});
