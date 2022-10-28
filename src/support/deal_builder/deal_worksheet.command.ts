export interface customer {
  full_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  tradeInVehicleVIN: string;
  dealerTradeInOffer: string;
  payOffLoanBalance: string;
  cashPaidToBuyer: string;
  vehicle_price: string;
  documentaryFee: string;
  salesTax: string;
  governmentFee: string;
  serviceContract: string;
  dccGap: string;
  inventoryTax: string;
  totalSalesPrice: string;
  downPayment: string;
  total: string;
  saleType: string;
  amountFinanced: string;
  differedDownPaymentAmount: string;
  financeCharge: string;
  tradeInContains: boolean;
}
// Cypress.Commands.add("dealWorksheet",(salesPrice, documentaryFee,
//     salesTax, governmentFee, serviceContract, dccGap, inventoryTax,
//     totalSalesPrice, cashDownpayment, amountFinanced, deferredDownpayment,
//     financing, total, type) =>{

export const dealWorksheet = (dealWorksheet: customer) => {
  //cy.wait(6000);
  //cy.get(".nav-item.active span").should("contain", "Finalize Sale");
  cy.wait(3000);
  cy.get("button").contains("Deal Worksheet").click();
  cy.wait(5000);
  //Need to Verify With developers
  dealWorksheet.full_name = `${dealWorksheet.first_name} ${dealWorksheet.last_name}`;
  cy.get(".buyer-details-section > p.mb-0.wb").should(
    "contain",
    dealWorksheet.first_name
  );
  cy.get(".buyer-details-section > p:nth-child(6)").should(
    "contain",
    dealWorksheet.phone
  );
  // Checking TradeIn Details
  if (dealWorksheet.tradeInContains === true) {
    cy.get(".vin-details-section1 span:nth-child(2)").should(
      "contain",
      dealWorksheet.tradeInVehicleVIN
    );
    cy.get(".dealer-trade-in-offer-details-section1 span:nth-child(2)").should(
      "contain",
      dealWorksheet.dealerTradeInOffer
    );
    cy.get(".pay-off-loan-balance-details-section1 span:nth-child(2)").should(
      "contain",
      dealWorksheet.payOffLoanBalance
    );
    cy.get(".cash-paid-to-buyer-details-section1 span:nth-child(2)").should(
      "contain",
      dealWorksheet.cashPaidToBuyer
    );
  }
  cy.debug();
  cy.get(".sales-price-section .salesprice-details :nth-child(2)").should(
    "contain",
    dealWorksheet.vehicle_price
  );
  cy.get(".sales-price-section .fee-details :nth-child(2)").should(
    "contain",
    dealWorksheet.documentaryFee
  );
  cy.get(".sales-price-section .sales-tax-details :nth-child(2)").should(
    "contain",
    dealWorksheet.salesTax
  );
  cy.get(".sales-price-section .government-fee-details :nth-child(2)").should(
    "contain",
    dealWorksheet.governmentFee
  );
  cy.get(".sales-price-section .service-contract-details :nth-child(2)").should(
    "contain",
    dealWorksheet.serviceContract
  );
  cy.get(".sales-price-section .dcc-gap-details-section :nth-child(2)").should(
    "contain",
    dealWorksheet.dccGap
  );
  cy.get(".sales-price-section .inventorytax-details :nth-child(2)").should(
    "contain",
    dealWorksheet.inventoryTax
  );
  cy.get(
    ".sales-price-section .total-sales-price-details :nth-child(2)"
  ).should("contain", dealWorksheet.totalSalesPrice);
  cy.get(".downPayment-details :nth-child(2)").should(
    "contain",
    dealWorksheet.downPayment
  );
  cy.get(".total-price-details :nth-child(2)").should(
    "contain",
    dealWorksheet.total
  );
  cy.log(dealWorksheet.saleType);
  switch (dealWorksheet.saleType) {
    case "BHPH":
      cy.log(dealWorksheet.saleType);
      cy.get(".amountFinanced-details :nth-child(2)").should(
        "contain",
        dealWorksheet.amountFinanced
      );
      cy.get(".deferred-downpayment-details :nth-child(2)").should(
        "contain",
        dealWorksheet.differedDownPaymentAmount
      );
      cy.get(".financing-charge-details :nth-child(2)").should(
        "contain",
        dealWorksheet.financeCharge
      );
      break;
    case "OutsideFinance":
      cy.get(".amountFinanced-details :nth-child(2)").should(
        "contain",
        dealWorksheet.amountFinanced
      );
      cy.get(".deferred-downpayment-details :nth-child(2)").should(
        "contain",
        dealWorksheet.differedDownPaymentAmount
      );
      cy.get(".financing-charge-details :nth-child(2)").should(
        "contain",
        dealWorksheet.financeCharge
      );
      break;
    case "cash":
      cy.log("In The Cash");
      break;
    case "wholesale":
      break;
  }
  cy.get("#closeBtnID").click();
};
