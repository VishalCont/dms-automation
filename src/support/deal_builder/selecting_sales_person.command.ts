export const selectSalesPersons = () => {
  cy.wait(1000);
  cy.get(
    ".dropdown:nth-child(1) .dd-vehicle-status button[formcontrolname='status']"
  ).click();
  cy.get(".dd-vehicle-status ul li").contains("stefi").click();
};
