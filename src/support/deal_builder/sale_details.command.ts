import { snakeCase } from "cypress/types/lodash";

export interface customer {
  full_name: string;
  first_name: string;
  last_name: string;
  sec_full_name: string;
  sec_first_name: string;
  sec_last_name: string;
  phone: string;
  sec_phone: string;
  jointCustomer: boolean;
  vehicle_price: string;
  totalGovernmentFee: string;
  deputyServiceFee: string;
  dccGap: string;
  serviceContract: string;
  netTradeIn: string;
  dealerTradeInOffer: string;
  actualCashValue: string;
  payOffLoanBalance: string;
  otherFees: string;
  totalSalePrice: string;
  saleType: string;
  salesTax: string;
  bhphOrOutsideFinance: boolean;
  downPayment: string;
  differedDownPaymentAmount: string;
  accountType: string;
  totalQuotePrice: string;
  amountFinanced: string;
}

export const saleDetails = (saleDetails: customer) => {
  //sale details
  cy.get(
    "#collapseEvent2 > div > div:nth-child(1) > div.row.font-size-25 > h2.col-sm-7.ddms-normal-text-bold"
  ).should("contain", saleDetails.accountType);
  cy.get("#collapseEvent4 div:nth-child(1) > div:nth-child(2)").should(
    "contain",
    saleDetails.vehicle_price
  );
  cy.get("#collapseEvent4 div:nth-child(2) > div:nth-child(2)").should(
    "contain",
    saleDetails.totalGovernmentFee
  );
  cy.get("#collapseEvent4 div:nth-child(3) > div:nth-child(2)").should(
    "contain",
    saleDetails.deputyServiceFee
  );
  cy.get("#collapseEvent4 div:nth-child(4) > div:nth-child(2)").should(
    "contain",
    saleDetails.salesTax
  );
  cy.get("#collapseEvent4 div:nth-child(5) > div:nth-child(2)").should(
    "contain",
    saleDetails.dccGap
  );
  cy.get("#collapseEvent4 div:nth-child(6) > div:nth-child(2)").should(
    "contain",
    saleDetails.serviceContract
  );
  cy.get(
    "#collapseEvent4 div.row.row22 :nth-child(2) :nth-child(1) :nth-child(2)"
  ).should("contain", saleDetails.netTradeIn);
  cy.get(
    "#collapseEvent4 div.row.row22 :nth-child(2) :nth-child(2) :nth-child(2)"
  ).should("contain", saleDetails.dealerTradeInOffer);
  cy.get(
    "#collapseEvent4 div.row.row22 :nth-child(2) :nth-child(3) :nth-child(2)"
  ).should("contain", saleDetails.actualCashValue);
  cy.get(
    "#collapseEvent4 div.row.row22 :nth-child(2) :nth-child(4) :nth-child(2)"
  ).should("contain", saleDetails.payOffLoanBalance);
  cy.get("h6").should("contain", saleDetails.totalQuotePrice);
  saleDetails.full_name = `${saleDetails.first_name} ${saleDetails.last_name}`;
  cy.get("#collapseEvent7 > div > div:nth-child(1) > div:nth-child(1)").should(
    "contain",
    saleDetails.first_name
  );
  cy.get("#collapseEvent7 > div > div:nth-child(1) > div:nth-child(3)").should(
    "contain",
    saleDetails.phone
  );
  //customer details
  if (saleDetails.jointCustomer === true) {
    saleDetails.sec_full_name = `${saleDetails.sec_first_name} ${saleDetails.sec_last_name}`;
    cy.get(
      "#collapseEvent7 > div > div:nth-child(2) > div:nth-child(1) a"
    ).should("contain", saleDetails.sec_first_name);
    cy.get(
      "#collapseEvent7 > div > div:nth-child(2) > div:nth-child(3)"
    ).should("contain", saleDetails.sec_phone);
  }
  if (
    saleDetails.saleType === "BHPH" ||
    saleDetails.saleType === "OutsideFinance"
  ) {
    cy.get(
      "#collapseEvent2 div div:nth-child(1) div:nth-child(3) .ddms-normal-text-bold"
    ).should("contain", saleDetails.amountFinanced);
  }
};
