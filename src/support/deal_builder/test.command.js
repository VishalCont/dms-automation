/// <reference types ="Cypress"/>
Cypress.Commands.add("test", (customer) => {
  // const customer = verifyScreenCase.verifyScreen.case1

  //cy.log(customer.saleType);
  //cy.makePayment(customer);
  // cy.log(customer.saleType);

  // cy.commissionRecap(customer);
  //cy.log(customer.saleType); //cash
  cy.readFile("src/dump/customer-copy.json").then((customer) => {});
  cy.downloadDocument();
  //cy.log(customer.saleType); // cash
  //cy.writeFile("src/dump/customer-copy.json", customer);
  //customer.full_name = `${customer.first_name} ${customer.last_name}`;
  //cy.log(customer.saleType); // BHPH
  cy.dealWorksheet(customer);
  //customer.finalizeSale = false;
  //cy.log("customer.finalizeSale", customer.finalizeSale);
  // customer.tradeInContains = true;
  cy.verifyScreen(customer);
  cy.confirmationAtFinalizeSale();
  cy.get(".sales-home").contains("Deal Activity").should("be.visible");
});
