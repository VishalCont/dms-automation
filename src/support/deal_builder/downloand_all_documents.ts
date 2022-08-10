import { API_URL } from "../../utils/constants";

export const downloadDocument = () => {
  cy.wait(4000);
  cy.get("button[aria-controls='collapseEvent1").click();
  cy.get("button[type='button']").contains("Download All ").click();
  cy.intercept(`${API_URL}/dev-api/fill-pdf-export`).as("downloadWait");
  cy.get(".modal-content").contains(" SAVE & CONTINUE ").click();
  cy.wait(1000);
  cy.get(".modal-content").contains(" SAVE & CONTINUE ").click();
  //cy.wait("@downloadWait");
  cy.wait(20000);
};
