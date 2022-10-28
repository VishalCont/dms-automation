export const recentDeal = () => {
    cy.wait(3000);
    cy.get("datatable-body-cell:nth-child(1) div a").first().click();
    cy.get("h6").should("contain", "Customer Details");
    cy.wait(3000);
}