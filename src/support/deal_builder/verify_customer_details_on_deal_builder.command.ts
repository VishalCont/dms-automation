export interface customerData {
  first_name: string;
  last_name: string;
  phone: string;
  street: string;
  zipcode: string;
}
export const verifyCustomerData = (customer: customerData) => {
  cy.get(
    "app-deal-term div:nth-child(2) > div:nth-child(1) > div.col-7.px-0"
  ).should("have.text", customer.first_name);
  cy.get(
    "app-deal-term div:nth-child(2) > div:nth-child(2) > div.col-7.px-0"
  ).should("have.text", customer.last_name);
  cy.get(
    "app-deal-term div:nth-child(2) > div:nth-child(4) > div.col-7.px-0"
  ).should("have.text", customer.phone);
  cy.get(
    "app-deal-term div:nth-child(2) > div:nth-child(5) > div.col-7.px-0"
  ).should("have.text", customer.street);
};
