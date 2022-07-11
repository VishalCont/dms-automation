/// <reference types ="Cypress"/>

//import { contains } from "cypress/types/jquery";

//var customerInfos = ""
Cypress.Commands.add("salesRecapSheet", (salesRecapSheet, randomFirstName, amountEarned) => {
//const customer = customerInfos[0]
//cy.verifyScreen(customer);

//ignore comma
// var number = "1,200.00";
// var stringValue = parseFloat(number.replace(/,/g, ""));

// console.log(stringValue, "using String");

cy.wait(3000);
cy.get('.modal-body > :nth-child(2) > .btn-ddms-orange').click();
cy.wait(3000);
cy.get(".nav-item.active span").should("contain","Finalize Sale");
cy.wait(3000)
cy.get("button").contains("SALES RECAP SHEET").click();
cy.wait(3000)
cy.get("h4").should("contain","Sales Recap Sheet - ");
cy.wait(3000)
// cy.get("#salesRecapSheet .activitybox-title.p-2 :nth-child(1) .w-50.d-flex.align-items-center.justify-content-end.flex-column.pr-5.selling-price-section :nth-child(1) .w-25.p-2.text-right").should("contain", "15,000.00")
// cy.get("#salesRecapSheet .w-100.mt-3.total-taxes-fees-section :nth-child(6) :nth-child(2) > div").should("contain", "37.50")
// cy.get("#salesRecapSheet .w-100.mt-3.total-taxes-fees-section :nth-child(7) :nth-child(2) > div").should("contain", "6,695.11")

if (salesRecapSheet === "buyRateFromBank") {
    cy.get("#salesRecapSheet .total-taxes-fees-section :nth-child(8) :nth-child(2)").should("contain", randomFirstName);
}
//else {
    if (salesRecapSheet === "flatRateLienHolder") {
        cy.get("#salesRecapSheet .total-taxes-fees-section :nth-child(8) :nth-child(2)").should("contain", randomFirstName);
        cy.wait(2000)
        cy.get("#salesRecapSheet .total-taxes-fees-section :nth-child(9) :nth-child(2)").should("contain", amountEarned)
    }

//}
//cy.get("#salesRecapSheet .w-100.mt-3.total-taxes-fees-section :nth-child(10) :nth-child(2) > div").should("contain", "17,568.50");

})
