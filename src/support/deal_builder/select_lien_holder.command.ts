export interface VData {
  oneLien: boolean;
  secLien: boolean;
  lienHolder: string;
  addLienHolder: string;
}
export const selectLienHolder = (customer: VData) => {
  if (customer.oneLien === true) {
    cy.get(
      "#paymentCollapsable > div:nth-child(1) > div div:nth-child(1) > div.col-4.dealer-details > div > button"
    ).click();
    cy.get("#dropdown-model2").contains(customer.lienHolder).click();
  }
  cy.wait(5000);
  if (customer.secLien === true) {
    cy.get(
      "#paymentCollapsable > div:nth-child(1) > div.col-8.ng-star-inserted > div div.col-4.lienholder-details > div > button"
    ).click();
    cy.get("#dropdown-model2.show").contains(customer.addLienHolder).click();
  }
};
