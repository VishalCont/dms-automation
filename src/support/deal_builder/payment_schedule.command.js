/// <reference types ="Cypress"/>


Cypress.Commands.add("selectPaymentSchedule", (paymentSchedule) => {

    // cy.get("input[formcontrolname='paymentRadios'] p").contains("BHPH").click();
    cy.get(`input[formcontrolname='paymentSchedule'][value='${paymentSchedule}']`).check();



})