export interface dCustomer {
  full_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  vehicle_price: string;
  dealerTradeInOffer: string;
  actualCashValue: string;
  documentaryFee: string;
  governmentFee: string;
  payOffLoanBalance: string;
  inventoryTax: string;
  saleType: string;
  salesTax: string;
  dccGap: string;
  dccGapDealerPrice: string;
  dccGapCostPrice: string;
  //This value need to be added in sales flow cases bottom
  dccGapProfit: string;
  lienHolder: string;
  differedDownPaymentAmount: string;
  netSellingPrice: string;
  totalDownPayment: string;
  totalOfTaxAndFee: string;
}

// Cypress.Commands.add("salesRecapSheet", (full_name, first_name, last_name, sellingPrice,
//      tradeIn, acvOfTrade, netSellingPrice,
//      dccPrice, dccCost, dccProfit,
//      documentaryFee, totalDownPay, defferedDownPay,
//      otherCharges, salesTax, totalOfTaxAndFee,
//      payoffOnTradeIn, inventoryTax, lienHolder, type) => {

export const salesRecap = (salesRecap: dCustomer) => {
  cy.wait(10000);
  // cy.get("button").contains("Calculate").click();
  // cy.wait(10000);
  // cy.get('[value="NEXT"]').click();
  // cy.wait(10000);
  // cy.get("app-verification-screen").contains("OK").click();
  // cy.wait(3000);
  cy.get(".nav-item.active span").should("contain", "Finalize Sale");
  cy.wait(3000);
  cy.get("button").contains("SALES RECAP SHEET").click();
  cy.wait(3000);
  cy.get("h4").should("contain", "Sales Recap Sheet - ");
  cy.wait(3000);

  //customer address
  salesRecap.full_name = `${salesRecap.first_name} ${salesRecap.last_name}`;
  cy.get(".customer-address-section :nth-child(1)").should(
    "contain",
    salesRecap.first_name
  );
  cy.get(".customer-address-section :nth-child(4)").should(
    "contain",
    salesRecap.phone
  );
  cy.get(".selling-price-section .selling-price-details :nth-child(2)").should(
    "contain",
    salesRecap.vehicle_price
  );
  cy.get(".selling-price-section .tradin-price-details :nth-child(2)").should(
    "contain",
    salesRecap.dealerTradeInOffer
  );
  cy.get(".selling-price-section .acvoftrade-details :nth-child(2)").should(
    "contain",
    salesRecap.actualCashValue
  );
  cy.get(".fee-details :nth-child(2)").should(
    "contain",
    salesRecap.documentaryFee
  );
  cy.get(
    ".total-taxes-fees-section .other-charges-details :nth-child(2)"
  ).should("contain", salesRecap.governmentFee);
  cy.get(
    ".total-taxes-fees-section .payoff-on-tradein-details :nth-child(2)"
  ).should("contain", salesRecap.payOffLoanBalance);
  cy.get(
    ".total-taxes-fees-section .inventorytax-details :nth-child(2)"
  ).should("contain", salesRecap.inventoryTax);
  cy.get(".total-cost-section div :nth-child(2)").should(
    "contain",
    salesRecap.netSellingPrice
  );
  cy.get(
    ".total-taxes-fees-section .total-down-payment-details :nth-child(2)"
  ).should("contain", salesRecap.totalDownPayment);
  cy.get(
    ".total-taxes-fees-section .total-salestax-Charged-details :nth-child(2)"
  ).should("contain", salesRecap.totalOfTaxAndFee);
  cy.log(salesRecap.saleType);
  switch (salesRecap.saleType) {
    case "cash":
      cy.get(
        ".total-taxes-fees-section .sales-tax-details :nth-child(2)"
      ).should("contain", salesRecap.salesTax);

      break;

    case "BHPH":
      cy.get(".gap-details > div:nth-child(2)").should(
        "contain",
        salesRecap.dccGapCostPrice
      );
      cy.get(".gap-details > div:nth-child(3)").should(
        "contain",
        salesRecap.dccGapDealerPrice
      );
      cy.get(".gap-details :nth-child(4)").should(
        "contain",
        salesRecap.dccGapProfit
      );
      cy.get(
        ".total-taxes-fees-section .differed-downPayment-details :nth-child(2)"
      ).should("contain", salesRecap.differedDownPaymentAmount);
      cy.get(
        ".total-taxes-fees-section .sales-tax-details :nth-child(2)"
      ).should("contain", salesRecap.salesTax);

      break;

    case "wholesale":
      break;

    case "OutsideFinance":
      cy.get(".gap-details > div:nth-child(2)").should(
        "contain",
        salesRecap.dccGapCostPrice
      );
      cy.get(".gap-details > div:nth-child(3)").should(
        "contain",
        salesRecap.dccGapDealerPrice
      );
      cy.get(".gap-details :nth-child(4)").should(
        "contain",
        salesRecap.dccGapProfit
      );
      cy.get(
        ".total-taxes-fees-section .sales-tax-details :nth-child(2)"
      ).should("contain", salesRecap.salesTax);
      cy.get(".lienholder-details :nth-child(2)").should(
        "contain",
        salesRecap.lienHolder
      );

      break;
  }
  cy.get("#salesRecapSheet > div.modal-header > button").click();
};
