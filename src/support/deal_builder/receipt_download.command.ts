export interface customer {
  paymentMethod: string;
  totalSalesPrice: string;
  remainingAmountToPay: string;
  saleType: string;
  downPayment: string;
}

export const receiptDownload = (receiptDownload: customer) => {
  cy.wait(5000);
  cy.get("div:nth-child(7) > div > div.ibox-title > div > button").click();
  cy.wait(10000);
  cy.get("#collapseEvent7 > div > div :nth-child(4) > div > p > a").click();
  cy.wait(5000);
  cy.contains("Transaction Details").should("be.visible");
  cy.wait(3000);
  if (
    receiptDownload.saleType === "cash" ||
    receiptDownload.saleType === "Wholesale"
  ) {
    cy.get("div:nth-child(1) > div:nth-child(2) .transaction-detail").should(
      "contain",
      receiptDownload.totalSalesPrice
    );
  } else {
    cy.get("div:nth-child(1) > div:nth-child(2) .transaction-detail").should(
      "contain",
      receiptDownload.downPayment
    );
  }
  cy.get("div:nth-child(1) > div:nth-child(3) .transaction-detail").should(
    "contain",
    receiptDownload.paymentMethod
  );
  cy.wait(5000);
  cy.get("button").contains("Download Receipt").click();
  cy.wait(12000);
  cy.get("button").contains("Cancel").click();
  cy.wait(5000);
  cy.get("#collapseEvent9 > div > div:nth-child(3) > div > div").should(
    "contain",
    receiptDownload.remainingAmountToPay
  );
};
