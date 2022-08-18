/// <reference types ="Cypress"/>

import { API_URL } from "../../utils/constants";

Cypress.Commands.add("ofacCheck", (first_name,last_name,phone,zipcode,street,ssn_number) => {
    
  cy.get("[formcontrolname='ssn']").type(ssn_number)
  cy.get("[formcontrolname='first_name']").type(first_name);
  cy.get("[formcontrolname='last_name']").type(last_name);
  cy.get("[formcontrolname='work_phone']").type(phone);
  cy.get("[formcontrolname='zipcode']").type(zipcode);
  cy.get("[formcontrolname='street']").type(street);
  //cy.intercept(`${API_URL}/crm/geo/city/*`).as("custWait");
  cy.wait(6000);
  cy.get("app-customer-info button").contains("NEXT").click();
  cy.wait(6000);
  cy.contains("This name is found in 'Bad Guy' list").should("be.visible")
  cy.wait(3000);
  cy.intercept(`${API_URL}/dealeradminnew/lot_code/list?active=true`).as("sales")
  cy.get("button").contains("Delete Customer(s) and Deal").click();
  cy.wait("@sales")

})

