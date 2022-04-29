/// <reference types ="Cypress"/>

import { API_URL, ENV } from "../../utils/constants";
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
var quotationDetails = require(`../../data/quotation_detail.json`);

describe("Dealbuilder Testcases", () => {
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
})