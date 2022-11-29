/// <reference types ="Cypress"/>

Cypress.Commands.add("deselectSalesTaxGovtFee", () => {
  cy.wait(2000);

  //invoke value from Sales tax field

  var salesTax = Cypress.$('[formcontrolname="tax_rate"]').val();
  cy.log(salesTax);

  //***Invoke Sales prise value
  var salesPrice = Cypress.$('[formcontrolname="quotation_price"]').val();
  cy.log(salesPrice);
  // calculation
  var x = Number(salesPrice - salesTax).toFixed(2); // 2000
  cy.log(x);

  //***un-checking sales tax and checking the Sales price

  cy.get("#exampleCheck1").click();
  cy.wait(2000);
  cy.get("button").contains("Calculate").click();
  cy.get("#paymentCollapsable .btn-ddms-small.mr-2").click();
  cy.wait(5000);
  cy.clearCookie('[formcontrolname="quotation_price"]');

  cy.get('[formcontrolname="quotation_price"]').should("have.value", x);

  //**Check the Sales tax
  cy.wait(5000);
  //cy.clearCookie("#exampleCheck1");

  cy.get("#exampleCheck1").click();
  /////Govt fee///
  cy.wait(3000);

  var govtFee = Cypress.$("#headingTaxes :nth-child(2) > input").val();
  cy.log(govtFee);

  var y = Number(salesPrice - govtFee).toFixed(2); //
  cy.log(y);

  cy.get("#headingTaxes :nth-child(1) > i").click();

  cy.wait(2000);

  cy.get("#collapseTaxes :checkbox").uncheck(); /// it is unchecking All check box in a page
  cy.wait(5000);
  cy.get("#headingTaxes :nth-child(2) > input").should("have.value", "0.00");
  cy.wait(4000);

  cy.get('[formcontrolname="quotation_price"]').should("have.value", y);

  cy.get("#collapseTaxes :checkbox").check(); //
});
