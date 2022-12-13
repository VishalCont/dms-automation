/// <reference types ="Cypress"/>

Cypress.Commands.add("changeInterestRate", (customer) => {
  cy.wait(3000);
  cy.get('[formcontrolname = "rateOfInterest"]').clear().type(customer.apr);
  cy.get("button").contains("Calculate").click();
  cy.wait(3000);
  //   var a = Cypress.$(
  //     "#paymentCollapsable > div:nth-child(15) > div:nth-child(5) > input"
  //   ).val();
  cy.get('[formcontrolname = "totalAmountMonthly"]').then(($val) => {
    var num1 = parseFloat($val.val());
    cy.log(num1);

    cy.get(
      "#paymentCollapsable > .row :nth-child(1) :nth-child(2) .col-3 input"
    ).click(); //APR selecting
    cy.get('[formcontrolname = "totalAmountMonthly"]').clear().type(num1);

    cy.get("button").contains("Calculate").click();
    cy.wait(2000);
    cy.get('[formcontrolname = "rateOfInterest"]').then(($val) => {
      var num2 = parseFloat($val.val());
      expect(num2).to.eq(parseFloat(customer.apr));

      cy.get(
        "#paymentCollapsable > .row :nth-child(1) :nth-child(2) .col-5  input"
      ).click(); //Number of Payments
      cy.get('[formcontrolname = "totalAmountMonthly"]').clear().type(num1);
      cy.get('[formcontrolname = "rateOfInterest"]').clear().type(customer.apr);
      cy.get("button").contains("Calculate").click();
      cy.get('[formcontrolname="noOfPayments"]').then(($val) => {
        var num3 = parseFloat($val.val());
        expect(num3).to.eq(parseFloat(customer.terms));
      });
    });
  });
});

// cy.get("button").contains("Calculate")."#paymentCollapsable > div:nth-child(15) > div:nth-child(5) > input"();
//"#paymentCollapsable > div:nth-child(15) > div:nth-child(5) > input"formcontrolname="totalAmountMonthly"
