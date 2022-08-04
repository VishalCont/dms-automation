/// <reference types ="Cypress"/>

Cypress.Commands.add(
  "salestaxDisclosure",
  (hasTradeIn, hasDownpayment, disclosure) => {
    cy.get("input[formcontrolname='deferredSaleTax'][value='yes']").check();
    //cy.get("button").contains("Calculate").click();
    cy.wait(10000);
    cy.get(
      'button[class="btn btn-ddms-lightblue btn-ddms-border-radius font-size-13 mx-0 px-5 py-2"]'
    ).click();
    cy.get("input[value='NEXT']").click();
    cy.wait(5000);
    cy.get(
      "modal-container app-verification-screen button.btn.btn-ddms-orange.mr-3"
    ).click();
    cy.wait(6000);
    cy.get("button").contains("Sales Tax Disclosure").click();
    cy.get("h4").should("contain", "Sales Tax Disclosure");
    cy.wait(10000);

    if (hasTradeIn === true) {
      cy.get(
        "#salesTaxDisclosure >.modal-body >div:nth-child(2) > div > div:nth-child(2) > div >.text-right"
      ).should("contain", disclosure.tradeIn);
    }
    if (hasDownpayment === true) {
      cy.get(
        "#salesTaxDisclosure >.modal-body >:nth-child(2) > div >:nth-child(3) > div > .p-2.text-right"
      ).should("contain", disclosure.downPayment);
    }

    cy.get(
      "#salesTaxDisclosure > .modal-body > div:nth-child(2) div:nth-child(1) > div >.text-right"
    ).should("contain", disclosure.vehiclePrice);

    cy.get(
      "#salesTaxDisclosure > .modal-body > div:nth-child(2) div:nth-child(4) div.w-25.p-2.text-right"
    ).should("contain", disclosure.salesTax);

    cy.get(
      "#salesTaxDisclosure >.modal-body >.row.calculation-breakdown-section > .col-sm-12.ng-star-inserted > div > div > .text-right"
    ).should("contain", disclosure.govtFee);
  }
);
