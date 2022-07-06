import { API_URL } from "../../utils/constants";

export interface ICustomer {
  first_name: string;
  last_name: string;
  work_phone: string;
  home_phone: string;
}
export const lookupExitingCustomer = (customer: ICustomer) => {
  if (customer == null) throw new Error("There is no Customer Details sent");
  cy.get("#collapsibleNavbar a[href='/sales']").click();

  //Click on the Start New deal Button
  cy.get("button").contains("Start New Deal").click();
  //need to check if the customer info tab has come
  cy.contains("Primary Use for Which Purchased").should("be.visible");
  cy.get("[formcontrolname='work_phone']").type(customer.work_phone);
  //Click on Lookup Existing Customer button
  cy.get("button").contains("Lookup Existing Customer").click();
  cy.wait(3000);
  //check if all the mandatory fields are filled
  cy.get("[formcontrolname='first_name']").invoke("val").should("not.be.empty");
  cy.get("[formcontrolname='last_name']").invoke("val").should("not.be.empty");

  cy.get("[formcontrolname='work_phone']").then((workPhoneField) => {
    var valueOfWorkPhone = workPhoneField.val() as string;
    cy.get("[formcontrolname='home_phone']").then((homePhoneField) => {
      var valueOfHomePhone = homePhoneField.val() as string;
      cy.get("[formcontrolname='mobile_phone']").then((mobilePhoneField) => {
        var valueOfMobilePhone = mobilePhoneField.val() as string;
        if (
          valueOfWorkPhone?.trim().length === 12 ||
          valueOfHomePhone.trim().length === 12 ||
          valueOfMobilePhone.trim().length === 12
        ) {
          cy.log("At least one field has some value");
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

  cy.get("[formcontrolname='street']").invoke("val").should("not.be.empty");
  cy.get("[formcontrolname='zipcode']").invoke("val").should("not.be.empty");
  cy.get("[formcontrolname='county']").invoke("val").should("not.be.empty");
  cy.intercept(`${API_URL}/crm/geo/city/*`).as("custWait");
  //Click on Next button
  cy.get("app-customer-info button").contains("NEXT").click();
  //assertion for popup
  cy.wait("@custWait");
  cy.contains(" Verify Customer Information").should("be.visible");
  // TODO Fill up rest fields
  cy.intercept(`${API_URL}/inventory/list?staged=staged`).as("vehicleList");
  cy.get("modal-container button").contains("Confirm").click();
  //Wait
  cy.wait("@vehicleList");
};
