/// <reference types ="Cypress"/>
Cypress.Commands.add(
  "priceAdjust",
  (priceAdjust, changeInstallment, vehiclePrice, c_downPayment) => {
    cy.get("button").contains("Calculate").click();
    var vPrice = Cypress.$('[formcontrolname = "sale_price"]').val();
    cy.log(vPrice);
    cy.wait(5000);
    cy.get("button").contains("Price Adjust").click();
    cy.wait(3000);

    cy.get('input[formcontrolname="enterDesiredResult"]')
      .invoke("val")
      .then((amount) => {
        cy.log(amount);
      });
    cy.wait(5000);
    cy.get('input[formcontrolname="enterDesiredResult"]')
      .clear()
      .type(priceAdjust.changeInstallment);
    cy.wait(4000);

    if (priceAdjust.vehiclePrice === true) {
      cy.wait(3000);
      cy.get(
        `input[formcontrolname='changeField'][value='vehiclePrice']` //vehiclePrice//tradeAllowance//downPayment
      ).check();

      cy.get("button").contains("Begin Price Adjustment").click();
      cy.wait(15000);

      cy.get(
        "button.btn-ddms-lightgreen.btn-ddms-small.text-uppercase.ng-star-inserted"
      ).click();
      cy.wait(2000);

      cy.get('[formcontrolname = "sale_price"]')
        .invoke("val")
        .then((value1) => {
          expect(value1.replace(/'/g, "")).to.equal(
            priceAdjust.changesVehiclePrice
          );
        });
      cy.get('input[formcontrolname = "installmentAmount"]')
        .invoke("val")
        .then((value2) => {
          expect(value2).to.equal(priceAdjust.changeInstallment);
        });
    }

    if (priceAdjust.c_downPayment === true) {
      cy.wait(5000);
      // cy.get('input[formcontrolname="enterDesiredResult"]').clear().type(430); /// global
      //cy.wait(2000);
      cy.get(
        `input[formcontrolname='changeField'][value='downPayment']` //vehiclePrice//tradeAllowance//downPayment
      ).check();

      cy.get("button").contains("Begin Price Adjustment").click();
      cy.wait(15000);

      cy.get(
        "button.btn-ddms-lightgreen.btn-ddms-small.text-uppercase.ng-star-inserted"
      ).click();
      cy.wait(2000);
      cy.get('input[formcontrolname = "installmentAmount"]')
        .invoke("val")
        .then((value2) => {
          expect(value2).to.equal(priceAdjust.changeInstallment);
        });
      cy.get('input[formcontrolname = "totalQuoteDownPayment"]')
        .invoke("val")
        .then((value3) => {
          expect(value3).to.equal(priceAdjust.change_downpayment);
        });
      cy.wait(2000);
      cy.get("button").contains("Calculate").click();
      cy.wait(2000);
    }
    if (priceAdjust.tradeAllowance === true) {
      cy.wait(5000);

      cy.get(
        `input[formcontrolname='changeField'][value='tradeAllowance']` //vehiclePrice//tradeAllowance//downPayment
      ).check();

      cy.get("button").contains("Begin Price Adjustment").click();
      cy.wait(15000);

      cy.get(
        "button.btn-ddms-lightgreen.btn-ddms-small.text-uppercase.ng-star-inserted"
      ).click();
      cy.wait(2000);
      cy.get('input[formcontrolname = "installmentAmount"]')
        .invoke("val")
        .then((value4) => {
          expect(value4).to.equal(priceAdjust.changeInstallment);
        });
      cy.wait(2000);
      cy.get("button#trade-in").first().click();
      cy.wait(2000);
      cy.get('input[formcontrolname="dealer_trade_in"]')
        .invoke("val")
        .then((value5) => {
          expect(value5).to.equal(priceAdjust.change_tradeInOffer);
        });
      cy.get("modal-container .modal-header > button > span").click();
    }
  }
);
