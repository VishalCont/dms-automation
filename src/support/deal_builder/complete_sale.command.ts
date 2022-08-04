export const completeSale = () => {
  cy.get("button").contains(" Complete the Sale ").click();
};
