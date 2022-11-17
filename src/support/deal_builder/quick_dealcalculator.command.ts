
export interface qDeal {

  vehiclePrice: string;
  downPayment: string;
  Schedule: string;
  financeCalculation: string;
  firstPayment: string;
  interestRate: string;
  period: string;
  installmentAmount: string;
  apr: string;
  installAmount: string;
  numberOfPayments: string;
  bInstallmentAmount:boolean;
  bNumberOfPayments:boolean;
  bApr:boolean;
  

}
export const quickDealCalculator = (quickDCalculator:qDeal) => {
cy.wait(3000);
  cy.get("#collapsibleNavbar a[href='/sales']").click();
  cy.wait(5000);
  cy.get("button").contains("Quick Deal Calculator").click();
  cy. wait(3000);
  cy.get("[formcontrolname='vehiclePrice']").type(quickDCalculator.vehiclePrice);
  cy.wait(5000);

  //DownPayment
  cy.get("[formcontrolname='downPayment']").type(quickDCalculator.downPayment);
  cy.wait(2000);

  cy.get(
    "app-quick-deal-calculator .modal-body :nth-child(4) :nth-child(2) button"
  ).click();
  cy.wait(3000);

  cy.get("form ul > li > a").contains(quickDCalculator.Schedule).click();

  //Sale Finance Calculation Type
  cy.wait(5000);

  cy.get("form :nth-child(4) > :nth-child(3) button").click();
  cy.wait(3000);
  cy.get(" form  ul > li > a").contains(quickDCalculator.financeCalculation).click();
  //Days to first Payment
  cy.wait(3000);
  cy.get("[formcontrolname = 'daysToPayment']")
    .clear()
    .type(quickDCalculator.firstPayment);
  cy.wait(5000);

  if (quickDCalculator.bInstallmentAmount === true)
   {
    //Apr
    cy.get("[formcontrolname='interestRate']").type(quickDCalculator.interestRate);
    //   //Number Of Payments
    cy.get("[formcontrolname = 'period']").type(quickDCalculator.period);
  }

  if (quickDCalculator.bNumberOfPayments === true) {
    // APR
    cy.get("[formcontrolname='interestRate']").type(quickDCalculator.interestRate);
    //Installment Amount
    cy.get("[formcontrolname='monthlyPayment']").type(
      quickDCalculator.installmentAmount
    );
  }

  if (quickDCalculator.bApr === true) {
    //Number Of Payments
    cy.get("[formcontrolname = 'period']").type(quickDCalculator.period);

    //Installment Amount
    cy.get("[formcontrolname='monthlyPayment']").type(
      quickDCalculator.installmentAmount
    );
  }

  //Calculate
  cy.get("button").contains("Calculate").click();
  //Start New Deal
  cy.get(".ml-3.mr-3.mx-0.px-5.py-2").click();
  
};