export function defSalesTax(customer) {
  cy.get(
    `input[formcontrolname='deferredSaleTax'][value='${customer.taxInclude}']`
  ).check();
  cy.wait(4000);
  cy.get("#paymentCollapsable button").contains("Calculate").click();
  cy.wait(10000);
  cy.log(customer.salesTaxMonthly, customer.installmentAmount);
  cy.get(`#paymentCollapsable input[formcontrolname='salesTaxMonthly']`)
    .invoke("val")
    .should("contain", customer.salesTaxMonthly);
  cy.get(`#paymentCollapsable input[formcontrolname='totalAmountMonthly']`)
    .invoke("val")
    .should("contain", customer.installmentAmount);
}
