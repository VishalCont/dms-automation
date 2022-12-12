import { API_URL } from "../../utils/constants";

export const confirmationAtFinalizeSale = () => {
  cy.intercept(`${API_URL}/sales/*`).as("saleComplete");
  cy.get(".modal-content").contains(" Proceed ").click();
  cy.wait("@saleComplete");
};
