
  export function defferedDownPayment(differedDate:Date, differedDownPaymentAmount:number) {
    cy.get("button").contains("Details").click();

    ///Adding differed Down payment
    cy.get("#dueDatePicker_0").type(`${differedDate}`);

    cy.get(".modal-body label")
      .contains("Amount ($)")
      .parent()
      .find("input")
      .type(`${differedDownPaymentAmount}`);

    cy.get("input[formcontrolname='deferred_downpayment_amount']")
      .invoke("val")
      .should("not.be.empty");
    cy.get("button").contains("SAVE & CONTINUE").click();
  }

