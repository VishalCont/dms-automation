/// <reference types ="Cypress"/>

import { API_URL, ENV } from "../../utils/constants";
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
var quotationDetails = require(`../../data/quotation_detail.json`);
var commission = require(`../../data/commission_recap.json`);

describe("Dealbuilder Testcases", () => {
  it("Check Sales Price,salestax,Other charges  by adding Dcc/Gap and Downpayment", () => {
    cy.login("albert", "Albert@123");
    const customer = customerInfos[0];
    const commissionRecap = commission[0];
    //const quotation = quotationDetails[7];
    cy.lookupExitingCustomer(customer);
    cy.wait(2000);
    cy.selectVehicle();
    cy.wait(10000);
    cy.get("input[formcontrolname='paymentRadios']").each(
      (ele, index, list) => {
        cy.log(ele);

        cy.log(index);

        if (index === 2) ele.trigger("click");
      }
    );
    //Change Sale type
    //cy.changeSaleType(1);
    //For outside finance
    // cy.get(":nth-child(1) > .col-4 > .width-alignment > .form-control").click();
    //cy.get("#dropdown-model2 > :nth-child(2) > .dropdown-item").click();

    cy.wait(5000);
    //adding sales person
    cy.selectSalesPersons();
    //adding downpayment
    cy.downPayment("1000");
    cy.wait(5000);
    cy.get(`input[type='button'][value='NEXT']`).click();
    cy.wait(2000);
    cy.get("app-verification-screen").contains("OK").click();
    cy.wait(2000);

    cy.commissionRecap(true, true, false, commissionRecap);
  });
});
