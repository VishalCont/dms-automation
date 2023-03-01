export function refundFinalizePage(customer) {
  cy.log(customer.downPayment);
  cy.get("#collapseEvent9 > div p.col-4.font-size-16.font-weight-600").should(
    "contain",
    customer.downPayment
  );
  cy.get(" app-documentation :nth-child(7) .ibox-title  button").click();
  cy.wait(5000);
  cy.get("button").contains("REFUND").click();
  cy.get("button").contains("Submit").click();
  cy.wait(5000);
  cy.get(
    "#collapseEvent7 :nth-child(2) > datatable-body-row :nth-child(4) p"
  ).click();
  cy.get("button").contains("Download Receipt").click();
  cy.get("button").contains("Cancel").click();
  cy.wait(5000);
  cy.get(
    "#collapseEvent9 > div > div:nth-child(3) > div > div > p.col-7"
  ).should("contain", customer.downPayment);
  cy.wait(3000);
  cy.get("#collapsibleNavbar a[href='/sales']").click();
}
