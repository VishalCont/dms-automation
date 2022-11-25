import { API_URL } from "../../utils/constants";

export interface VData {
  totalSalePrice: string;
}
export const makePayment = (makePaymentData: VData) => {
  if (makePaymentData == null)
    throw new Error("There is no Customer Details sent");

  cy.wait(5000);

  cy.get(
    "#collapseEvent9 > div > div:nth-child(1) > div > div > p.col-7"
  ).contains(makePaymentData.totalSalePrice);

  cy.get("button").contains("Make Payment").click();

  cy.get("modal-container .modal-header h5").should(
    "have.text",
    "Confirm Payment Details"
  );

  let amount = makePaymentData.totalSalePrice;
  cy.get("modal-container input[formcontrolname='amount']").should(
    "have.value",
    amount.replace(/,/g, "")
  );

  cy.intercept(`${API_URL}/collections/payments/sale/Payment`).as(
    "makePaymentWait"
  );

  cy.get("modal-container").contains(" Proceed to Pay ").click();

  cy.wait("@makePaymentWait");
};

//make payment which i have done, with conditions, need to check with mam
// import { API_URL } from "../../utils/constants";

// export interface VData {
//   totalSalePrice: string;
//   saleType: string;
//   downPayment: string;
//   tap: string;
// }
// export const makePayment = (makePaymentData: VData) => {
//   if (makePaymentData == null)
//     throw new Error("There is no Customer Details sent");

//   cy.wait(5000);
//   //for cash and wholesale type sale payment
//   if (
//     makePaymentData.saleType === "cash" ||
//     makePaymentData.saleType === "Wholesale"
//   ) {
//     cy.get(
//       "#collapseEvent9 > div > div:nth-child(1) > div > div > p.col-7"
//     ).contains(makePaymentData.totalSalePrice);
//     cy.intercept(`${API_URL}/collections/payments/sale/Payment`).as(
//       "makePaymentWait"
//     );
//     cy.get("modal-container").contains(" Proceed to Pay ").click();
//     cy.wait("@makePaymentWait");
//   }
//   let amount = makePaymentData.totalSalePrice;
//   //for bhph and outside finance type sale payment
//   if (makePaymentData.tap !== "0.00") {
//     //if there is no down payment should keep true. or else keep this false
//     cy.get(
//       "#collapseEvent9 > div > div:nth-child(1) > div > div > p.col-7"
//     ).should("contain", makePaymentData.tap);

//     //makePaymentData.downPayment = "";
//     amount = makePaymentData.tap;
//   } else {
//     //if there is down payment
//     cy.get("button").contains("Make Payment").click();
//     cy.get("modal-container .modal-header h5").should(
//       "have.text",
//       "Confirm Payment Details"
//     );
//     amount = makePaymentData.downPayment;
//     cy.intercept(`${API_URL}/collections/payments/sale/Payment`).as(
//       "makePaymentWait"
//     );
//     cy.get("modal-container").contains(" Proceed to Pay ").click();
//     cy.wait("@makePaymentWait");
//   }
//   // do not know why this is used, need to ask
//   // cy.get("modal-container input[formcontrolname='amount']").should(
//   //   "have.value",
//   //   amount.replace(/,/g, "")
//   // );
// };
