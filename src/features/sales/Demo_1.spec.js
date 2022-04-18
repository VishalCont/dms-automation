/// <reference types ="Cypress"/>

const { ENV } = require("../../utils/constants");

var customerInfos = require(`../../data/customer_inof.${ENV}.json`);
describe("Checking Sales Price,sales Tax, Other", () => {
  cy.login();
  cy.lookupExistingCustomer(customer);
});
