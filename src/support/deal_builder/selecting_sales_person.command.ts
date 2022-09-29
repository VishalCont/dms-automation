export interface customerData {
  person1: boolean;
  person2: boolean;
  salesPerson: string;
  salesPerson2:string;

}
export const selectSalesPersons = (customer: customerData) => {
  cy.wait(1000);
   if (customer.person1 === true) {
  cy.get(
    ".dropdown:nth-child(1) .dd-vehicle-status button[formcontrolname='status']"
  ).click();
  cy.get(".dd-vehicle-status ul li").contains(customer.salesPerson).click();
   }
   if (customer.person2 === true) {
      //Second  salesperson

      cy.get(
        ".dropdown:nth-child(1) .dd-vehicle-status button[formcontrolname='status']"
      ).click();
      cy.get(".dd-vehicle-status.open ul li").contains(customer.salesPerson).click();
      cy.get(
        ".dropdown:nth-child(2) .dd-vehicle-status button[formcontrolname='status']"
      ).click();
      cy.wait(5000);
      cy.get(".dd-vehicle-status.open ul li").contains(customer.salesPerson2).click();
   }
};
