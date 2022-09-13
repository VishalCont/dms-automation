export interface VData {
  lienHolder: string;
}
export const selectLienHolder = (customer: VData) => {
  cy.get(".dealer-details button").click();
  cy.get("#dropdown-model2").contains(customer.lienHolder).click();
};
