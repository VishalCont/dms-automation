export interface customer {
  ifDeferredSalesTax: boolean;
  editApr: string;
  editTotalInstallmentAmount: string;
  editNumberOfPayments: string;
  select_numberOfPayments: boolean;
  select_APR: boolean;
  select_installmentAmount: boolean;
}

export const saleFinanceCalculation = (saleFinanceCalculation: customer) => {
  cy.wait(3000);
  if (saleFinanceCalculation.ifDeferredSalesTax === true) {
    cy.get(`input[formcontrolname='deferredSaleTax'][value='yes']`).check();
    cy.wait(2000);
    if (saleFinanceCalculation.select_numberOfPayments === true) {
      cy.get(`input[type='radio'][value='numberOfPayments']`).check();
      cy.wait(2000);
      cy.get("[formcontrolname='rateOfInterest']")
        .clear()
        .type(saleFinanceCalculation.editApr);
      cy.get("[formcontrolname='totalAmountMonthly']")
        .clear()
        .type(saleFinanceCalculation.editTotalInstallmentAmount);
    }
    if (saleFinanceCalculation.select_APR === true) {
      cy.get(`input[type='radio'][value='apr']`).check();
      cy.wait(2000);
      cy.get("[formcontrolname='noOfPayments']")
        .clear()
        .type(saleFinanceCalculation.editNumberOfPayments);
      cy.get("[formcontrolname='totalAmountMonthly']")
        .clear()
        .type(saleFinanceCalculation.editTotalInstallmentAmount);
    }
    if (saleFinanceCalculation.select_installmentAmount === true) {
      cy.get(`input[type='radio'][value='totalAmountMonthly']`).check();
      cy.wait(2000);
      cy.get("[formcontrolname='noOfPayments']")
        .clear()
        .type(saleFinanceCalculation.editNumberOfPayments);
      cy.get("[formcontrolname='rateOfInterest']")
        .clear()
        .type(saleFinanceCalculation.editApr);
    }
  }
  if (saleFinanceCalculation.ifDeferredSalesTax === false) {
    if (saleFinanceCalculation.select_numberOfPayments === true) {
      cy.get(`input[type='radio'][value='numberOfPayments']`).check();
      cy.wait(2000);
      cy.get("[formcontrolname='rateOfInterest']")
        .clear()
        .type(saleFinanceCalculation.editApr);
      cy.get("[formcontrolname='totalAmountMonthly']")
        .clear()
        .type(saleFinanceCalculation.editTotalInstallmentAmount);
    }
    if (saleFinanceCalculation.select_APR === true) {
      cy.get(`input[type='radio'][value='apr']`).check();
      cy.wait(2000);
      cy.get("[formcontrolname='noOfPayments']")
        .clear()
        .type(saleFinanceCalculation.editNumberOfPayments);
      cy.get("[formcontrolname='totalAmountMonthly']")
        .clear()
        .type(saleFinanceCalculation.editTotalInstallmentAmount);
    }
    if (saleFinanceCalculation.select_installmentAmount === true) {
      cy.get(`input[type='radio'][value='totalAmountMonthly']`).check();
      cy.wait(2000);
      cy.get("[formcontrolname='noOfPayments']")
        .clear()
        .type(saleFinanceCalculation.editNumberOfPayments);
      cy.get("[formcontrolname='rateOfInterest']")
        .clear()
        .type(saleFinanceCalculation.editApr);
    }
  }
};
