export interface customer {
  bhphOrOutsideFinance: boolean;
  downPayment: string;
  amountFinanced: string;
  differedDownPaymentAmount: string;
  rebates: string;
}
export const paymentDetails = (paymentDetails: customer) => {
  if (paymentDetails.bhphOrOutsideFinance === true) {
    cy.get(".defer-downpayment-details > div:nth-child(2)").should(
      "contain",
      paymentDetails.differedDownPaymentAmount
    );
  }
  //validating down payment value
  var dValue = Cypress.$(".downPayment-details > div:nth-child(2)").text();
  var dPay = dValue.trim().substring(1);
  const downPayment = paymentDetails.downPayment?.replace(/[\,$]/g, "");
  cy.log("the down payment value is", dPay);
  expect(dPay).to.eq(downPayment);
  //validating amount finance
  var afValue = Cypress.$(".amountfinanced-details > div:nth-child(2)").text();
  var afPay = afValue.trim().substring(1);
  cy.log("the amt finance is", afPay);
  const amountFinanced = paymentDetails.amountFinanced?.replace(/[\,$]/g, "");
  expect(afPay).to.eq(amountFinanced);
  //validating rebates
  cy.get(".rebate-details > div:nth-child(2)").should(
    "contain",
    paymentDetails.rebates
  );
};
