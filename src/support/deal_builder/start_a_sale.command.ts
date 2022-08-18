export const startSale = () => {
  cy.get("#collapsibleNavbar a[href='/sales']").click();
  cy.wait(2000);
  //Click on the Start New deal Button
  cy.get("button").contains("Start New Deal").click();
  //need to check if the customer info tab has come
  cy.contains("Primary Use for Which Purchased").should("be.visible");
};
