export interface customerData {
  first_name: string;
  last_name: string;
  phone: string;
  street: string;
  zipcode: string;
  sec_first_name: string;
  sec_last_name: string;
  sec_phone: string;
  sec_zipcode: string;
  sec_street: string;
  jointCustomer: boolean;

}
export const verifyCustomerData = (customer: customerData) => {
  cy.get(
    ".firstname-details > :nth-child(2)"
  ).should("have.text", customer.first_name);
  cy.get(
    ".lastname-details > :nth-child(2)"
  ).should("have.text", customer.last_name);
  cy.get(
    ".phone-no-details > :nth-child(2)"
  ).should("have.text", customer.phone);
  cy.get(
    ".address-details > :nth-child(2)"
  ).should("have.text", customer.street);
  if(customer.jointCustomer === true) {
    cy.get(
      ".cobuyer-firstname-details > :nth-child(2)"
    ).should("have.text", customer.sec_first_name);
    cy.get(
      ".cobuyer-lastname-details > :nth-child(2)"
    ).should("have.text", customer.sec_last_name);
    cy.get(
      ".cobuyer-phon-no-details > :nth-child(2)"
    ).should("have.text", customer.sec_phone);
    cy.get(
      ".cobuyer-address-details > :nth-child(2)"
    ).should("have.text", customer.sec_street);
  }
};
