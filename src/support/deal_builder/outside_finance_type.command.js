//<reference types="Cypress" />;
Cypress.Commands.add("changeOutsideFinanceType", (documentsUse) => {
  //   cy.get(
  //     " app-deal-term  form > :nth-child(4) > .col-9 > div > :nth-child(4) > input"
  //   ).check("carleton-api");

  cy.get(`input[type="radio"][value='${documentsUse}']`).check();
});

//"reynolds-api"
//"carleton-api"
//"dms-api";
