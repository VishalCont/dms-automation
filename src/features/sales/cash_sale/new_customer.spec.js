/// <reference types ="Cypress"/>
import { API_URL, ENV } from "../../../utils/constants";
//var faker = require("faker");
var faker = require("faker");
describe("Customer Page", () => {
  it("New customer details ", () => {
    cy.login();
    var randomFirstName = faker.name.firstName();
    var randomLastName = faker.name.lastName();
    var randomMobilePhone = faker.phone.phoneNumber();
    var randomWorkPhone = faker.phone.phoneNumber();
    var randomHomePhone = faker.phone.phoneNumber();
    var randomZipCode = faker.address.zipCode();
    var randomStreet = faker.address.streetName();
    cy.get("#collapsibleNavbar a[href='/sales']").click();
    cy.get("button").contains("Start New Deal").click();
    cy.contains("Primary Use for Which Purchased").should("be.visible");
    //Enter Name
    cy.get("[formcontrolname='first_name']").type(randomFirstName);
    cy.get("[formcontrolname='last_name']").type(randomLastName);
    //Enter Work phone
    cy.get("[formcontrolname='work_phone']").type(randomWorkPhone);
    //Enter Home Phone
    cy.get("[formcontrolname='home_phone']").type(randomMobilePhone);
    //ENter mobile phone
    cy.get("[formcontrolname='mobile_phone']").type(randomMobilePhone);
    //Enter Zipcode
    cy.get("[formcontrolname='zipcode']").type(randomZipCode);
    //Enter Street
    cy.get("[formcontrolname='street']").type(randomStreet);
    cy.wait(2000);
    // validate all the remaining mandatory fields are autopopulated or not
    //click on Next
    cy.get("button").contains("NEXT").click();
  });
});
