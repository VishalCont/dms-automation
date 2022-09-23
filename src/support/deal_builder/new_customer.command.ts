export interface customerData {
  first_name: string;
  last_name: string;
  phone: string;
  street: string;
  zipcode: string;
  jointCustomer: boolean;
  sec_first_name: string;
  sec_last_name: string;
  sec_phone: string;
  sec_zipcode: string;
  sec_street: string;
}
export const newCustomer = (customer: customerData) => {
  // if (customer == null) throw new Error("There is no Customer Details sent");
  cy.get("[formcontrolname='first_name']").first().type(customer.first_name);
  cy.get("[formcontrolname='last_name']").first().type(customer.last_name);
  cy.get("[formcontrolname='work_phone']").first().type(customer.phone);
  cy.get("[formcontrolname='zipcode']").first().type(customer.zipcode);
  cy.get("[formcontrolname='street']").first().type(customer.street);
  cy.wait(2000)
 if(customer.jointCustomer === true) {
  cy.get("#joint").check();
  cy.get(".joint_inner>div:nth-child(2) [formcontrolname='first_name']").type(customer.sec_first_name);
  cy.get(".joint_inner>div:nth-child(2) [formcontrolname='last_name']").type(customer.sec_last_name);
  cy.get(".joint_inner>div:nth-child(2) [formcontrolname='work_phone']").type(customer.sec_phone);
  cy.get(".joint_inner>div:nth-child(2) [formcontrolname='zipcode']").type(customer.sec_zipcode);
  cy.get(".joint_inner>div:nth-child(2) [formcontrolname='street']").type(customer.sec_street);
 }
  cy.get("app-customer-info button").contains("NEXT").click();
  //assertion for popup
  //y.get("body").contains(" Vehicle").should("be.visible");
};
