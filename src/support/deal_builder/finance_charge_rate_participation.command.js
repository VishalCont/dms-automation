/// <reference types ="Cypress"/>

Cypress.Commands.add("financeChargeRateParticipation", (dCustomer) => {

    //finance charge rate button 
    cy.get("button").contains("Finance Charge Rate Participation").should("be.visible").click();  
    cy.wait(3000);
    cy.get("input[formcontrolname = 'feeDealer']").type(
      dCustomer.feeDealer
    );
    cy.wait(3000);
    
    if (dCustomer.flatRateParticipation === true){
      cy.get('[type="checkbox"]').check({ force: true });
      cy.wait(3000);
      cy.get("input[formcontrolname = 'amountEarned']").clear().type(
          dCustomer.amountEarned
        );
      cy.wait(3000);
    } else{

      cy.get("input[formcontrolname = 'buyRateFromBank']").type(
       dCustomer.buyRateFromBank
      );
      cy.wait(3000);
      cy.get("input[formcontrolname = 'bankPercentHoldInReserve']").type(
       dCustomer.bankPercentHoldInReserve
      );
      cy.wait(3000);
    }
    cy.get("button").contains("Confirm").should("be.visible").click();
 
})