import { API_URL } from "../../utils/constants";

export interface customerData {
  first_name: string;
  last_name: string;
  phone: string;
  street: string;
  zipcode: string;
}
export const newCustomer = (customer: customerData) => {
  // if (customer == null) throw new Error("There is no Customer Details sent");
  cy.get("[formcontrolname='first_name']").type(customer.first_name);
  cy.get("[formcontrolname='last_name']").type(customer.last_name);
  cy.get("[formcontrolname='work_phone']").type(customer.phone);
  cy.get("[formcontrolname='zipcode']").type(customer.zipcode);
  cy.get("[formcontrolname='street']").type(customer.street);
  cy.intercept(`${API_URL}/crm/geo/city/*`).as("custWait");
  //Click on Next button
  //cy.wait("@custWait");
  cy.wait(2000);
  cy.get("app-customer-info button").contains("NEXT").click();
  //assertion for popup
  //y.get("body").contains(" Vehicle").should("be.visible");
};
