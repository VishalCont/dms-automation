export interface customer {
  full_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  downPayment: string;
  totalGovernmentFee: string;
  netDownpaymentWithSalesTax: string;
  downPaymentSubjectToTax: string;
  salesTaxOnDownPayment: string;
  vehicle_price: string;
  netTradeIn: string;
  salesTax: string;
  salesTaxRemaining: string;
  salesTaxIncludedInDownpayment: string;
  deputyServiceFee: string;
  officialFeesOther: string;
  inventoryTax: string;
  titleFee: string;
  documentaryFee: string;
  licenseRegistration: string;
  inspectionFeePaidToState: string;
  eTagFee: string;
  inspectionStationFee: string;
}
export const salesTaxDisclosure = (salesTaxDisclosure: customer) => {
  cy.wait(3000);
  cy.get("button").contains("Sales Tax Disclosure").click();
  cy.wait(5000);
  salesTaxDisclosure.full_name = `${salesTaxDisclosure.first_name} ${salesTaxDisclosure.last_name}`;
  cy.get(".buyer-details-section :nth-child(3)").should(
    "contain",
    salesTaxDisclosure.first_name
  );
  cy.get(".buyer-details-section :nth-child(3)").should(
    "contain",
    salesTaxDisclosure.first_name
  );
  cy.get(".buyer-details-section :nth-child(6)").should(
    "contain",
    salesTaxDisclosure.phone
  );
  cy.get(".vehicle-price-details :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.vehicle_price
  );
  cy.get(".net-tradein-detais :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.netTradeIn
  );
  cy.get(".downPayment-details :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.downPayment
  );
  cy.get(".totalsalestax-details :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.salesTax
  );
  cy.get(".salestax-inc-inDownPayment-details :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.salesTaxIncludedInDownpayment
  );
  cy.get(".salestax-remaining-details :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.salesTaxRemaining
  );
  cy.get(".downpayment-details :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.downPayment
  );
  cy.get(".total-govtfee-tax-details :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.totalGovernmentFee
  );
  cy.get(".net-downpayment-details :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.netDownpaymentWithSalesTax
  );
  cy.get(".downpaymentsub-to-tax-details :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.downPaymentSubjectToTax
  );
  cy.get(".salestax-On-downpayment-details :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.salesTaxOnDownPayment
  );
  cy.get(".deputy-service-fee :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.deputyServiceFee
  );
  cy.get(".official-fees-other :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.officialFeesOther
  );
  cy.get(".vehicle-inventory-tax :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.inventoryTax
  );
  cy.get(".title-fee :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.titleFee
  );
  cy.get(".documentary-fee :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.documentaryFee
  );
  cy.get(".license-registration :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.licenseRegistration
  );
  cy.get(".inspection-fee-paid-to-state :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.inspectionFeePaidToState
  );
  cy.get(".e-tag-fee :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.eTagFee
  );
  cy.get(".inspection-station-fee :nth-child(2)").should(
    "contain",
    salesTaxDisclosure.inspectionStationFee
  );
  cy.wait(3000);
  cy.get("#salesTaxDisclosure > div.modal-header > button").click();
};
