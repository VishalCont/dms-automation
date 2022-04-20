// <reference types ="Cypress"/>

Cypress.Commands.add("changeSaleType", (typeOfSale) => {
    cy.get("input[formcontrolname='paymentRadios']").each(

        (ele, index, list) => {

            cy.log(ele);

            cy.log(index);

            if (index === typeOfSale) ele.trigger("click");

        }

    );

});