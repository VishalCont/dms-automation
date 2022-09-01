/// <reference types = "Cypress"/>

// Cypress.Commands.add("dealWorksheet",(salesPrice, documentaryFee,
//     salesTax, governmentFee, serviceContract, dccGap, inventoryTax,
//     totalSalesPrice, cashDownpayment, amountFinanced, deferredDownpayment,
//     financing, total, type) =>{

Cypress.Commands.add("dealWorksheet", (dealWorksheet) => {
  if (dealWorksheet.saleType == "BHPH" || "OutsideFinance") {
    cy.get("button").contains("Calculate").click();
    cy.wait(6000);
  }
  cy.get('[value="NEXT"]').click();
  cy.wait(6000);
  cy.get("app-verification-screen").contains("OK").click();
  //cy.get('.modal-body > :nth-child(2) > .btn-ddms-orange').click();
  cy.wait(6000);
  cy.get(".nav-item.active span").should("contain", "Finalize Sale");
  cy.wait(3000);
  cy.get("button").contains("Deal Worksheet").click();
  cy.wait(5000);
  cy.get(".sales-price-section .salesprice-details :nth-child(2)").should(
    "contain",
    dealWorksheet.salesPrice
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
    dealWorksheet.cashDownpayment
  );
  cy.get(".total-price-details :nth-child(2)").should(
    "contain",
    dealWorksheet.total
  );
  switch (dealWorksheet.saleType) {
    case "BHPH":
      cy.get(".amountFinanced-details :nth-child(2)").should(
        "contain",
        dealWorksheet.amountFinanced
      );
      cy.get(".deferred-downpayment-details :nth-child(2)").should(
        "contain",
        dealWorksheet.deferredDownpayment
      );
      cy.get(".financing-charge-details :nth-child(2)").should(
        "contain",
        dealWorksheet.financing
      );
      break;
    case "outside":
      cy.get(".amountFinanced-details :nth-child(2)").should(
        "contain",
        dealWorksheet.amountFinanced
      );
      cy.get(".deferred-downpayment-details :nth-child(2)").should(
        "contain",
        dealWorksheet.deferredDownpayment
      );
      cy.get(".financing-charge-details :nth-child(2)").should(
        "contain",
        dealWorksheet.financing
      );
      break;
    case "cash":
      break;
    case "wholesale":
      break;
  }
});
