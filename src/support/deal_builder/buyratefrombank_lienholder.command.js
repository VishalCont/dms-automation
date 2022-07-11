/// <reference types ="Cypress"/>

Cypress.Commands.add("buyRateFromBank", (randomFirstName, feeDealer, buyRateFromBank, bankPercentHoldInReserve) => {

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
    cy.get(".modal-content input[formcontrolname='company_name']").type(randomFirstName);
    cy.get("button").contains("SAVE").should("be.visible").should("be.enabled").click();
    cy.wait(2000)
    cy.get("button").contains("Finance Charge Rate Participation").should("be.visible").click();  
    //finance charge rate button  
    cy.get("input[formcontrolname = 'feeDealer']").type(
      feeDealer
    );
    cy.get("input[formcontrolname = 'buyRateFromBank']").type(
      buyRateFromBank
    );
    cy.get("input[formcontrolname = 'bankPercentHoldInReserve']").type(
      bankPercentHoldInReserve
    );
    cy.get("input[formcontrolname = 'feeDealer']").invoke("val").should("not.be.empty");
    cy.get("input[formcontrolname = 'buyRateFromBank']").invoke("val").should("not.be.empty");
    cy.get("input[formcontrolname = 'bankPercentHoldInReserve']").invoke("val").should("not.be.empty");
   cy.wait(3000);
    cy.get('.modal-header').click();
    cy.wait(2000)
    cy.get("button").contains("Confirm").should("be.visible").click();
   
 
})