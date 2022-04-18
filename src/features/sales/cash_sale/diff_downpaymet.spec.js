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

    //called down payment command
    cy.down_payment();

    //click on Details button
    cy.get("button").contains("Details").click();

    ///Adding differed Down payment
    cy.get("#dueDatePicker_0").type("04/19/2022");
    cy.get(".modal-body label")
      .contains("Amount ($)")
      .parent()
      //.get("input")
      .then((ele) => {
        // Cypress.$(ele)
        ele.find("input").val("100");
      });
    //.type("100");

    //cy.get(".row.d-flex.flex-row-reverse>a").click();

    cy.get("#dueDatePicker_1").type("04/20/2022");

    //cy.get("button").contains("SAVE & CONTINUE").click();
  });
});
