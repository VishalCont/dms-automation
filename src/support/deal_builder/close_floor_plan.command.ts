export const closeFloorPlan = () => {
  cy.wait(1000);
  cy.contains("Do you want to close Vehicle Floor Plan?").should("be.visible");
  cy.get(".modal-content [type='button']").contains("No").click();
  cy.wait(2000);
};
