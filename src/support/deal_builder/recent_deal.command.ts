export interface customer {
  ifSaleDetails: Boolean;
  ifAccountNumber: Boolean;
}
export const recentDeal = (recentDeal: customer) => {
  if (recentDeal.ifSaleDetails === true) {
    cy.wait(3000);
    cy.get("datatable-body-cell:nth-child(1) div a").first().click();
    cy.get("h6").should("contain", "Customer Details");
    cy.wait(3000);
  }
  if (recentDeal.ifAccountNumber === true) {
    cy.wait(3000);
    cy.get(
      " datatable-body > datatable-selection :nth-child(1) > datatable-body-row > div :nth-child(8) > div > a"
    )
      .first()
      .click();
    cy.get("h6").should("contain", "Customer Details");
    cy.wait(3000);
  }
};
