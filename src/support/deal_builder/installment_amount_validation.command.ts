export function installmentAmount(paymentCalculationType:string, apr?: Number, instalmentAmount?: Number) {
    cy.get(`input[formcontrolname='financing_calculation_method_type'][value='${paymentCalculationType}']`).check();
    if (paymentCalculationType === "numberOfPayments"){
       cy.get("input[formcontrolname='noOfPayments']").should('be.disabled');
       cy.get("input[formcontrolname='totalAmountMonthly']").clear().type( `${instalmentAmount}` ?? 672.24);
       cy.get("button").contains("Calculate").click();
       cy.get("input[formcontrolname='noOfPayments']").should("have.value",`${apr}` ?? 34);
     }
     if(paymentCalculationType === "apr"){
       cy.get("input[formcontrolname='rateOfInterest']").should('be.disabled');
       cy.get("input[formcontrolname='totalAmountMonthly']").clear().type(`${instalmentAmount}` ??672.24);
       cy.get("button").contains('Calculate').click();
       cy.get("input[formcontrolname='rateOfInterest']").should("have.value",`${apr}` ?? 26.99)
     }
     if(paymentCalculationType === "totalAmountMonthly"){
       cy.get("input[formcontrolname='totalAmountMonthly']").should('be.disabled');
       cy.get("input[formcontrolname='rateOfInterest']").clear().type(`${apr}` ?? 24.82);
       cy.get("button").contains('Calculate').click();
      cy.get("input[formcontrolname='totalAmountMonthly']").should("have.value",`${instalmentAmount}` ?? "653.22")
     }

}