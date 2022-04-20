/// <reference types ="Cypress"/>
//import { should } from "chai";
//import { isEqual } from "cypress/types/lodash";
import { API_URL, ENV } from "../../../utils/constants";
var customerInfos = require(`../../../data/customer_info.${ENV}.json`);
var quotationDetails = require(`../../../data/quotation_detail.json`);
describe("Sales Test cases", () => {
  it("Check the values of sales tax and Govt fees by changing the Vehicle sale Price ", () => {
    cy.login();

    //Take Phone number from Json file and populate in  Phone field
    const customer = customerInfos[0];
    cy.lookupExitingCustomer(customer);

    //Click on Next button
    cy.get("app-customer-info button").contains("NEXT").click();
    //assertion for popup
    cy.contains(" Verify Customer Information").should("be.visible");
    //click on Confirm in the Dialog box
    //Intercept
    cy.intercept(`${API_URL}/inventory/list?staged=staged`).as("vehicleList");
    cy.get("modal-container button").contains("Confirm").click();
    //Wait
    cy.wait("@vehicleList");
    // In Select vehicle Tab-check condition for vehicles>0 (a.vehicle-select) this have length>0
    cy.get("a.vehicle-select").its("length").should("be.greaterThan", 0);
    // array.first(); it selects first vehicle
    cy.intercept(`${API_URL}/sales/credit700/*`).as("dealBuilder");
    cy.get("a.vehicle-select").first().click();
    cy.wait("@dealBuilder", { timeout: 10000 });

    //select BHPH from Cash

    cy.get("input[formcontrolname='paymentRadios']").each(
      (ele, index, list) => {
        cy.log(ele);
        cy.log(index);
        if (index === 2) ele.trigger("click");
      }
    );
    const quotation = quotationDetails[3];
    //Clearing and entering vehicle sale price
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation.vehicleSalePrice);

    //Adding DCC/gap value

    cy.existingVendorForDCCAndGAP("DCC", "Colby", "200", "230");

    //Adding Service contract
    cy.existingVendorForServiceContract(100, 200);

    // Checking sales price
    cy.get("[formcontrolname='quotation_price']").should(
      "have.value",
      quotation.salesPrice
    );

    //checking Sales Tax
    cy.get("[formcontrolname='tax_rate']").should(
      "have.value",
      quotation.salesTax
    );
    //Checking other charges
    cy.get("[formcontrolname='totalQuoteOtherCharges']").should(
      "have.value",
      quotation.otherCharges
    );
  });
});
