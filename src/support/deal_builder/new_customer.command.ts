export interface customerData {
  first_name: string;
  last_name: string;
  work_phone: string;
  street: string;
  zipcode: string;
}
export const newCustomer = (customer: customerData) => {
  if (customer == null) throw new Error("There is no Customer Details sent");
  cy.get("[formcontrolname='first_name']").type(customer.first_name);
  cy.get("[formcontrolname='last_name']").type(customer.last_name);
  cy.get("[formcontrolname='work_phone']").type(customer.work_phone);
  cy.get("[formcontrolname='street']").type(customer.street);
  cy.get("[formcontrolname='zipcode']").type(customer.zipcode);
};
