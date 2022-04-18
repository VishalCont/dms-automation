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

    //click on Details button
    cy.get("button").contains("Details").click();

    ///Add down_payment details

    cy.get("input[formcontrolname='down_payment']").type("1000");
    //cy.get("input[formcontrolname='otherKey']").type("cleaning");
    //cy.get("input[formcontrolname='otherValue']").type("100");
    //cy.get("input[formcontrolname='manufacturer_rebate']").type("200");
    cy.get("input[formcontrolname='total_down_payment']")
      .invoke("val")
      .should("not.be.empty");
    cy.get("input[formcontrolname='totalQuoteDownPayment']")
      .invoke("val")
      .should("not.be.empty");
    cy.get("button").contains("SAVE & CONTINUE").click();

    ///Adding differed Down payment
    cy.defferedDownPayment("", "");
    //cy.get("#dueDatePicker_0").type("04/18/2022");

    //cy.get(".row.d-flex.flex-row-reverse>a").click();
    // cy.get("#dueDatePicker_1").type("04/20/2022");

    //cy.get("button").contains("SAVE & CONTINUE").click();
    //cy.get("input[formcontrolname='totalQuoteDefferPay']").invoke("val").should("not.be.empty");

    ///Adding Finance Calculation Type
    // cy.get("input[value='numberOfPayments']").click({ force: true });
    //cy.get('[type="radio"]').check("numberOfPayments");
    //cy.get("input[value='apr']").click();
  });
});
