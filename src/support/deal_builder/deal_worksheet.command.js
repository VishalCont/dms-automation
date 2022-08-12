/// <reference types = "Cypress"/>

Cypress.Commands.add("dealWorksheet",(salesPrice, documentaryFee, 
    salesTax, governmentFee, serviceContract, dccGap, inventoryTax, 
    totalSalesPrice, cashDownpayment, amountFinanced, deferredDownpayment, 
    financing, total, type) =>{

//cy.get("button").contains("Calculate").click();
//cy.wait(6000);
cy.get('[value="NEXT"]').click();
cy.wait(6000);
cy.get("app-verification-screen").contains("OK").click();
//cy.get('.modal-body > :nth-child(2) > .btn-ddms-orange').click();
cy.wait(6000);
cy.get(".nav-item.active span").should("contain","Finalize Sale");
cy.wait(3000)
cy.get("button").contains("Deal Worksheet").click();
cy.wait(5000)
switch(type)
{
    case "bhph":
        cy.get(".sales-price-section .salesprice-details :nth-child(2)").should("contain", salesPrice);
        cy.get(".sales-price-section .fee-details :nth-child(2)").should("contain", documentaryFee);
        cy.get(".sales-price-section .sales-tax-details :nth-child(2)").should("contain", salesTax);
        cy.get(".sales-price-section .government-fee-details :nth-child(2)").should("contain", governmentFee);
        cy.get(".sales-price-section .service-contract-details :nth-child(2)").should("contain", serviceContract)
        cy.get(".sales-price-section .dcc-gap-details-section :nth-child(2)").should("contain", dccGap);
        cy.get(".sales-price-section .inventorytax-details :nth-child(2)").should("contain", inventoryTax);
        cy.get(".sales-price-section .total-sales-price-details :nth-child(2)").should("contain", totalSalesPrice);
        cy.get(".downPayment-details :nth-child(2)").should("contain", cashDownpayment);
        cy.get(".amountFinanced-details :nth-child(2)").should("contain", amountFinanced);
        cy.get(".deferred-downpayment-details :nth-child(2)").should("contain", deferredDownpayment);
        cy.get(".financing-charge-details :nth-child(2)").should("contain", financing);
        cy.get(".total-price-details :nth-child(2)").should("contain", total)
        break;
    case "outside":
        cy.get(".sales-price-section .salesprice-details :nth-child(2)").should("contain", salesPrice);
        cy.get(".sales-price-section .fee-details :nth-child(2)").should("contain", documentaryFee);
        cy.get(".sales-price-section .sales-tax-details :nth-child(2)").should("contain", salesTax);
        cy.get(".sales-price-section .government-fee-details :nth-child(2)").should("contain", governmentFee);
        cy.get(".sales-price-section .service-contract-details :nth-child(2)").should("contain", serviceContract)
        cy.get(".sales-price-section .dcc-gap-details-section :nth-child(2)").should("contain", dccGap);
        cy.get(".sales-price-section .inventorytax-details :nth-child(2)").should("contain", inventoryTax);
        cy.get(".sales-price-section .total-sales-price-details :nth-child(2)").should("contain", totalSalesPrice);
        cy.get(".downPayment-details :nth-child(2)").should("contain", cashDownpayment);
        cy.get(".amountFinanced-details :nth-child(2)").should("contain", amountFinanced);
        cy.get(".deferred-downpayment-details :nth-child(2)").should("contain", deferredDownpayment);
        cy.get(".financing-charge-details :nth-child(2)").should("contain", financing);
        cy.get(".total-price-details :nth-child(2)").should("contain", total)
        break;
    case "cash":
        cy.get(".sales-price-section .salesprice-details :nth-child(2)").should("contain", salesPrice);
        cy.get(".sales-price-section .fee-details :nth-child(2)").should("contain", documentaryFee);
        cy.get(".sales-price-section .sales-tax-details :nth-child(2)").should("contain", salesTax);
        cy.get(".sales-price-section .government-fee-details :nth-child(2)").should("contain", governmentFee);
        cy.get(".sales-price-section .service-contract-details :nth-child(2)").should("contain", serviceContract)
        cy.get(".sales-price-section .dcc-gap-details-section :nth-child(2)").should("contain", dccGap);
        cy.get(".sales-price-section .inventorytax-details :nth-child(2)").should("contain", inventoryTax);
        cy.get(".sales-price-section .total-sales-price-details :nth-child(2)").should("contain", totalSalesPrice);
        cy.get(".downPayment-details :nth-child(2)").should("contain", cashDownpayment);
        cy.get(".total-price-details :nth-child(2)").should("contain", total);
        break;
    case "wholesale":
        cy.get(".sales-price-section .salesprice-details :nth-child(2)").should("contain", salesPrice);
        cy.get(".sales-price-section .fee-details :nth-child(2)").should("contain", documentaryFee);
        cy.get(".sales-price-section .sales-tax-details :nth-child(2)").should("contain", salesTax);
        cy.get(".sales-price-section .government-fee-details :nth-child(2)").should("contain", governmentFee);
        cy.get(".sales-price-section .service-contract-details :nth-child(2)").should("contain", serviceContract)
        cy.get(".sales-price-section .dcc-gap-details-section :nth-child(2)").should("contain", dccGap);
        cy.get(".sales-price-section .inventorytax-details :nth-child(2)").should("contain", inventoryTax);
        cy.get(".sales-price-section .total-sales-price-details :nth-child(2)").should("contain", totalSalesPrice);
        cy.get(".downPayment-details :nth-child(2)").should("contain", cashDownpayment);
        cy.get(".total-price-details :nth-child(2)").should("contain", total);
        break;
}


}); 