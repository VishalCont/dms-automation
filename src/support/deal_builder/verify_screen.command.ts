import { method } from "cypress/types/bluebird";
import { pullAt } from "cypress/types/lodash";
import { API_URL } from "../../utils/constants";
export function verifyScreen(){
    cy.get('button').contains("Calculate").click();
    //cy.intercept(`${ENV}/sales/*`).as("VerifyScreenWait");
    cy.intercept("PUT",`${API_URL}/sales/*`).as("verifyScreenWait");    
    cy.get(`input[type='button'][value='NEXT']`).click();
    cy.wait('@verifyScreenWait');
    cy.wait(2000);
    cy.get("h4").should("contain","Verify Sale Information");
    cy.get()
}