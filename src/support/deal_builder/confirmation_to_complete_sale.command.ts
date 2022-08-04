export const confirmationAtFinalizeSale = () => {
  cy.get(".modal-content").contains(" Proceed ").click();
};
