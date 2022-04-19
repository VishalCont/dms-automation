//--command for clearing the contract---

/// <reference types ="Cypress"/>

     Cypress.Commands.add("ClearServiceContract", () =>{
     

     //clearing service contract
     cy.get("button").contains("Service Contract").click();
     cy.contains("Vehicle Service Contract(VSC)").should("be.visible");
     cy.get("button").contains(" Clear Service Contract ").click();
     cy.wait(1000);
     cy.get("input[formcontrolname = 'Warranty']").invoke("val").should("contain", "0.00");

     });