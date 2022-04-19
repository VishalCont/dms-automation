/// <reference types ="Cypress"/>
import { API_URL, ENV } from "../../utils/constants";
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
var quotationDetails = require(`../../data/quotation_detail.json`);
var faker = require("@faker-js/faker");
import { getRandomNumber } from "../../utils/random_number";
describe("Sales Test cases", () => {
  it("Check the values of sales tax and Govt fees by changing the Vehicle sale Price ", () => {
    cy.login();

    var randomCompanyName = faker.name.firstName();
    //cy.newVendorForServiceContract("darin");

    cy.log("company name from faker: " + randomCompanyName);



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

    //Service contract button for existing vendor
    //cy.existingVendorForServiceContract();

    //clearing service contract
    // cy.get("button")
    //   .contains("Service Contract")
    //   .click();
    // cy.contains("Vehicle Service Contract(VSC)").should("be.visible");
    // cy.get("button").contains(" Clear Service Contract ").click();
    // cy.wait(1000);
    // cy.get("input[formcontrolname = 'Warranty']")
    //   .invoke("val")
    //   .should("contain", "0.00");



    //newvendor for service contract
    cy.newVendorForServiceContract(randomCompanyName);
     //ClearServiceContract
 cy.wait(5000);
 cy.ClearServiceContract();

   

    //SAGI VSC
    //cy.get(`.modal-content input[formcontrolname='warrantyType'][value="SAGI VSC"]`).check();

    //selecting BHPH
    // cy.get("input[formcontrolname='paymentRadios']").each(
    //   (ele, index, list) => {
    //     cy.log(ele);
    //     cy.log(index);
    //     if (index === 2) ele.trigger("click");
    //   }
    // );
    // cy.wait(2000);

    // //selecting days to first payment
    //     cy.get(`.payment-schedule-container input[formcontrolname='no_of_days_from_sale_date'][value="30"]`).check();
  });
});
