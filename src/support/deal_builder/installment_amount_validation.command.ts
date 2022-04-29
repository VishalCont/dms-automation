
export function installmentAmount(paymentCalculationType:string) {
    cy.get(`input[formcontrolname='financing_calculation_method_type'][value='${paymentCalculationType}']`).check();
     if (paymentCalculationType == "Number Of Payments"){
       cy.get("input[formcontrolname='noOfPayments']").should('be.disabled');

     }

}