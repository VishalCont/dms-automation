/// <reference types ="Cypress"/>
import { API_URL, ENV } from "../../../utils/constants";
var customerInfos = require(`../../../data/customer_info.${ENV}.json`);
var quotationDetails = require(`../../../data/quotation_detail.json`);
describe("Sales Test cases", () => {
  it("Check the values of sales tax and Govt fees by changing the Vehicle sale Price ", () => {
    cy.login();
    cy.get("#collapsibleNavbar a[href='/sales']").click();
    cy.log(JSON.stringify(customerInfos));
    //Click on the Start New deal Button
    cy.get("button").contains("Start New Deal").click();
    //need to check if the customer info tab has come
    cy.contains("Primary Use for Which Purchased").should("be.visible");
    //Take Phone number from Json file and populate in  Phone field
    const customer = customerInfos[0];
    //cy.get(`[formcontrolname\${ ='${customer.work_phone}']`).type();
    cy.get("[formcontrolname='work_phone']").type(customer.work_phone);
    //Click on Lookup Existing Customer button
    cy.get("button").contains("Lookup Existing Customer").click();
    cy.wait(3000);
    //check if all the mandatory fields are filled
    cy.get("[formcontrolname='first_name']")
      .invoke("val")
      .should("not.be.empty");
    cy.get("[formcontrolname='last_name']")
      .invoke("val")
      .should("not.be.empty");
    // cy.get("[formcontrolname='work_phone']")
    //   .invoke("val")
    //   .should("not.be.empty");

    cy.get("[formcontrolname='work_phone']").then((workPhoneField) => {
      var valueOfWorkPhone = workPhoneField.val();
      cy.get("[formcontrolname='home_phone']").then((homePhoneField) => {
        var valueOfHomePhone = homePhoneField.val();
        cy.get("[formcontrolname='mobile_phone']").then((mobilePhoneField) => {
          var valueOfMobilePhone = mobilePhoneField.val();
          if (
            valueOfWorkPhone.trim().length === 12 ||
            valueOfHomePhone.trim().length === 12 ||
            valueOfMobilePhone.trim().length === 12
          ) {
            cy.log("Atleast one field has some value");
          } else {
            throw new Error("Invalid");
          }
          cy.log(`Work Phone \n ${valueOfWorkPhone}`);
          cy.log(`Home Phone \n ${valueOfHomePhone}`);
          cy.log(`Mobile Phone 
          ${valueOfMobilePhone}`);
        });
      });
    });
    // cy.get("[formcontrolname='work_phone']").then((x) => {
    //   valueOfWorkPhone = x.val();
    // });

    // var valueOfHomePhone;
    // cy.get("[formcontrolname='home_phone']")
    //   .invoke("val")
    //   .then((x) => {
    //     valueOfHomePhone = x.val();
    //   });
    // cy.log(valueOfHomePhone);
    // cy.log(valueOfWorkPhone);
    //cy.get("[formcontrolname='home_phone']")
    // .invoke("val")
    //.should("not.be.empty");

    //cy.get("[formcontrolname='home_phone']")
    // .invoke("val")
    //.should("not.be.empty");
    //TODO research how to check for atleast 1 field to be filled

    //cy.get("[formcontrolname='mobile_phone']")
    //.invoke("val")
    //.should("not.be.empty");
    cy.get("[formcontrolname='street']").invoke("val").should("not.be.empty");
    cy.get("[formcontrolname='zipcode']").invoke("val").should("not.be.empty");
    cy.get("[formcontrolname='county']").invoke("val").should("not.be.empty");

    // TODO Fillup rest fields

    //Click on Nect button
    cy.get("app-customer-info button").contains("NEXT").click();
    //assertion for popup
    cy.contains(" Verify Customer Information").should("be.visible");
    //click on Confirm in the Dailog box
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
