/// <reference types ="Cypress"/>
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

    //check with Api call if the page is moved to Dealbuilder page
    cy.contains("Quotation Detail").should("be.visible");
    //dealbuilder
    const quotation = quotationDetails[0];

    //VEHICLE SALE PRICE CLEARING AND ENTERING PRICE IN FIELD
    cy.get("[formcontrolname='sale_price']")
      .clear()
      .type(quotation.vehicleSalePrice);
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
    //check total gov charges
    cy.get(".btn-govtax input").should(
      "have.value",
      quotation.totalOfGovernmentFees
    );
  });
});
