/// <reference types ="Cypress"/>

import { faker } from '@faker-js/faker';

var randomFirstName = faker.name.firstName();

Cypress.Commands.add("addVendorLienHolder", () => {

    //choosing the Outside finance
    cy.get("input[formcontrolname='paymentRadios']").each(
        (ele, index, list) => {
          cy.log(ele);
  
          cy.log(index);
  
          if (index === 1) ele.trigger("click");
        }
      );

    cy.get("button").contains("Add Company").should("be.visible").click();
    cy.wait(3000);
    cy.log("company name from faker: " + randomFirstName);
    cy.get(".modal-content input[formcontrolname='company_name']").type(`${randomFirstName}`);

    cy.get("button").contains("SAVE").should("be.visible").should("be.enabled").click();
    cy.wait(3000)
    //finance charge rate button
    cy.get("button").contains("Finance Charge Rate Participation").should("be.visible").click();
    cy.get("input[formcontrolname='feeDealer']").type("100");
    cy.get("input[formcontrolname='buyRateFromBank']").type("10");
    cy.get("input[formcontrolname='bankPercentHoldInReserve']").type("50"); 
    cy.wait(3000);
    cy.get('.modal-header').click();
    //flat rate
    cy.get('[type="checkbox"]').check({ force: true });
    cy.wait(3000);
    cy.get("[formcontrolname='amountEarned']")
      .clear()
      .type("1200");
    cy.get("button").contains("Confirm").should("be.visible").click();
   
})