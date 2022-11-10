import { API_URL } from "../../utils/constants";

export interface VData {
  totalSalePrice: string;
  saleType: string;
  downPayment: string;
}
export const makePayment = (makePaymentData: VData) => {
  if (makePaymentData == null)
    throw new Error("There is no Customer Details sent");

  cy.wait(5000);
  if (
    makePaymentData.saleType === "cash" ||
    makePaymentData.saleType === "Wholesale"
  ) {
  cy.get(
    "#collapseEvent9 > div > div:nth-child(1) > div > div > p.col-7"
  ).contains(makePaymentData.totalSalePrice);
  }


  cy.get("button").contains("Make Payment").click();

  cy.get("modal-container .modal-header h5").should(
    "have.text",
    "Confirm Payment Details"
  );

  let amount = makePaymentData.totalSalePrice;
  if (
    makePaymentData.saleType === "BHPH" ||
    makePaymentData.saleType === "OutsideFinance"
  ) {
    amount = makePaymentData.downPayment;
  }
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
