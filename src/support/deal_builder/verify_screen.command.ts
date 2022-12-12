export interface VData {
  full_name: string;
  phone: string;
  full_address: string;
  apr: string;
  financeCharge: string;
  amountFinanced: string;
  totalOfPayments: string;
  totalSalePrice: string;
  noOfPayments: string;
  installmentAmount: string;
  bhphOrOutsideFinance: boolean;
  finalizeSale: boolean;
  tradeInContains: boolean;
  tradeInVehicleYear: string;
  tradeInVehicleVIN: string;
  tradeInVehiclelicensePlate: string;
  tradeInVehicleMake: string;
  tradeInVehicleModel: string;
  deffDownpaymentContains: boolean;
  differedDate: Date;
  differedDownPaymentAmount: string;
}
import { API_URL } from "../../utils/constants";
import moment = require("moment");
//import { isInteger } from "cypress/types/lodash/fp";
export const verifyScreen = (verifyScreenData: VData) => {
  cy.wait(2000);
  if (verifyScreenData == null)
    throw new Error("There is no Customer Details sent");
  if (verifyScreenData.finalizeSale == true) {
    if (verifyScreenData.bhphOrOutsideFinance === true) {
      cy.get("button").contains("Calculate").click();
      cy.wait(5000);
    }
    //cy.wait("@verifyScreenWait");
    cy.get(`input[type='button'][value='NEXT']`).click();
    cy.wait(8000);
  }
  if (verifyScreenData.bhphOrOutsideFinance === true) {
    cy.get(".finance-section-details div.row.p-1.ng-star-inserted").should(
      "contain",
      verifyScreenData.apr
    );
    cy.get(
      ".finance-section-details div:nth-child(2) > div.row.p-1.ng-star-inserted"
    ).should("contain", verifyScreenData.financeCharge);

    cy.get(
      ".finance-section-details div:nth-child(3) > div.row.p-1.ng-star-inserted"
    ).should("contain", verifyScreenData.amountFinanced);

    cy.get(
      ".finance-section-details div:nth-child(4) > div.row.p-1.ng-star-inserted"
    ).should("contain", verifyScreenData.totalOfPayments);

    cy.get(".payments-section-details div:nth-child(1)  div").should(
      "contain",
      verifyScreenData.noOfPayments
    );

    cy.get(
      ".payments-section-details div:nth-child(2) div:nth-child(2) div"
    ).should("contain", verifyScreenData.installmentAmount);

    cy.get(".payments-section-details > div:nth-child(2) div:nth-child(3) div")
      .should("contain", " monthly ")
      .should("contain", moment().add(14, "days").format("MM-DD-YYYY"));
    if (verifyScreenData.tradeInContains === true) {
      cy.get(
        ".row.no-border.tradein-section.ng-star-inserted :nth-child(1) div"
      ).should("have.text", `Year: ${verifyScreenData.tradeInVehicleYear} `);

      cy.get(
        ".row.no-border.tradein-section.ng-star-inserted :nth-child(2) div"
      ).should("have.text", `Make: ${verifyScreenData.tradeInVehicleMake} `);

      cy.get(
        ".row.no-border.tradein-section.ng-star-inserted :nth-child(3) div"
      ).should("have.text", `Model: ${verifyScreenData.tradeInVehicleModel} `);

      cy.get(
        ".row.no-border.tradein-section.ng-star-inserted :nth-child(4) div"
      ).should("have.text", `VIN: ${verifyScreenData.tradeInVehicleVIN} `);

      cy.get(
        ".row.no-border.tradein-section.ng-star-inserted :nth-child(5) div"
      ).should(
        "have.text",
        `License No.: ${verifyScreenData.tradeInVehiclelicensePlate}`
      );
    }
    if (verifyScreenData.deffDownpaymentContains === true) {
      cy.get(
        ".downpayment-section .row.ng-star-inserted div:nth-child(1)"
      ).should("contain", verifyScreenData.differedDate);
      cy.get(
        ".downpayment-section .row.ng-star-inserted div:nth-child(2)"
      ).should("contain", verifyScreenData.differedDownPaymentAmount);
    }
  }
  //cy.intercept(`${ENV}/sales/*`).as("VerifyScreenWait");
  cy.intercept({
    method: "PUT",
    url: new RegExp(
      `${API_URL}/sales/[a-zA-Z0-9-]{8}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{4}-[a-zA-Z0-9]{12}`
    ),
  }).as("verifyScreenWait");

  // cy.wait(6000);

  cy.get("h4").should("contain", "Verify Sale Information");

  //   cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(1)>.col:nth-child(1)>.row.p-1:nth-child(3)").invoke('text')  // for input or textarea, .invoke('val')
  // .then(formatString).should("eq","Aser Addison Texas")
  cy.get(".buyers-details-section div:nth-child(2)").should(
    "contain",
    verifyScreenData.full_name
  );

  //cy.get("app-verification-screen .container-fluid .container.ddms-normal-text .row:nth-child(1)>.col:nth-child(1)>.row.p-1:nth-child(3)").should("contain", customer.full_address);
  cy.get(".buyers-details-section div:nth-child(4)").should(
    "contain",
    verifyScreenData.phone
  );

  cy.get(
    ".finance-section-details div:nth-child(5) > div.row.p-1.ng-star-inserted"
  ).should("contain", verifyScreenData.totalSalePrice);
  cy.intercept(`${API_URL}/dealeradminnew/common-settings/dealer_documents`).as(
    "verifyScreenWait"
  );
  cy.get("app-verification-screen").contains("OK").click();
};
