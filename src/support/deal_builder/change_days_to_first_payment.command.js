// <reference types ="Cypress"/>
const moment = require("moment");
Cypress.Commands.add("changeFirstPaymentDate", (startDay) => {
  var saleDate;

  saleDate = Cypress.$('[formcontrolname="sale_date"]').val();
  cy.log(saleDate);
  //   cy.get(
  //     `[formcontrolname="no_of_days_from_sale_date"][value='${days}']`
  //   ).check();

  cy.get(
    `[formcontrolname="no_of_days_from_sale_date"][value='${startDay}']`
  ).click();

  cy.get("body").click();
  cy.log("days:", startDay);
  var updatedSaleDate = moment(saleDate)
    .add(startDay, "days")
    .format("MM/DD/YYYY");

  cy.log("updated date:", updatedSaleDate);

  cy.wait(5000);

  cy.get("#paymentCollapsable >:nth-child(11) :nth-child(5) > input")
    .invoke("val")
    .then((text2) => {
      cy.log("for >>>>", text2);
      expect(text2).to.equal(updatedSaleDate);
    });

  // // cy.get('[formcontrolname = "bhphStartDate"]').should(
  // //   "contain",
  // //   updatedSaleDate
  // );
});
