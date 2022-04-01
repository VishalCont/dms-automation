/// <reference types="cypress"/>

Cypress.Commands.add("lookupExitingCustomer", (customer) => {
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
  // TODO Fill up rest fields
});
