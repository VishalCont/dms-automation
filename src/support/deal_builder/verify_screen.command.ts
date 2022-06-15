export interface VCustomer{
    full_name :string
    mobile_phone :string
    full_address : string
}
import { API_URL } from "../../utils/constants";
export const verifyScreen = (customer: VCustomer) => {
    if (customer == null) throw new Error("There is no Customer Details sent");
    cy.get('button').contains("Calculate").click();
    //cy.intercept(`${ENV}/sales/*`).as("VerifyScreenWait");
    cy.intercept({
      method:"PUT",
      url: new RegExp(`${API_URL}/sales/[a-zA-Z0-9-]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}`)
    }).as("verifyScreenWait");    
    cy.get(`input[type='button'][value='NEXT']`).click();
    cy.wait('@verifyScreenWait');
    // cy.wait(6000);
    cy.get("h4").should("contain","Verify Sale Information");
  //   cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(1)>.col:nth-child(1)>.row.p-1:nth-child(3)").invoke('text')  // for input or textarea, .invoke('val')
  // .then(formatString).should("eq","Aser Addison Texas")
    cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(1)>.col:nth-child(1)>.row.p-1:nth-child(2)").should("contain", customer.full_name);
    //cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(1)>.col:nth-child(1)>.row.p-1:nth-child(3)").should("contain", customer.full_address);
    cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(1)>.col:nth-child(1)>.row.p-1:nth-child(4)").should("contain", customer.mobile_phone);
    cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(4)>.col:nth-child(1)>.row.p-1:nth-child(2)").should("contain","24.82(%)");
    cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(4)>.col:nth-child(2)>.row.p-1:nth-child(2)").should("contain"," ($)6,366.67 ");
    cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(4)>.col:nth-child(3)>.row.p-1:nth-child(2)").should("contain"," ($)16,468.50 ");
    cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(4)>.col:nth-child(4)>.row.p-1:nth-child(2)").should("contain"," ($)22,835.17 ");
    cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(4)>.col:nth-child(5)>.row.p-1:nth-child(2)").should("contain"," ($)22,835.17 ");
    cy.get("app-verification-screen .container.ddms-normal-text > div:nth-child(7) > div:nth-child(1)").should("contain","33");
    cy.get("app-verification-screen .container.ddms-normal-text > div:nth-child(7) > div:nth-child(2)").should("contain"," ($)672.24 ")
    cy.get("app-verification-screen .container.ddms-normal-text > div:nth-child(7) > div:nth-child(3)").should("contain"," monthly ").should("contain","06-29-2022")
};
