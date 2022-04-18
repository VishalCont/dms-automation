/// <reference types ="Cypress"/>


Cypress.Commands.add("selectFinancingCalculationType", (paymentCalculationType) => {

    cy.get(`input[formcontrolname='financing_calculation_method_type'][value='${paymentCalculationType}']`).check();

})