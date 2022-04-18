/// <reference types ="Cypress"/>


Cypress.Commands.add("selectDeferredSalesTaxType", (deferredSalesTaxType) => {

    cy.get(`input[formcontrolname='deferredSaleTax'][value='${deferredSalesTaxType}']`).check();

})