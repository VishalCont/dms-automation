// <reference types ="Cypress"/>

Cypress.Commands.add("otherCharges", () => {
  cy.get("#headingTaxes :nth-child(1) > i").click();

  var con1 = Cypress.$(
    "#collapseTaxes table > tbody >.deputy-service-fee > :nth-child(3) > input"
  ).val();

  var serviceFeeCon = Number(con1).toFixed(2);
  var serviceFee = Number(serviceFeeCon); //converting to number
  cy.log(serviceFee);

  var con2 = Cypress.$(
    "#collapseTaxes table > tbody >.official-fees-other > :nth-child(3) > input"
  ).val();

  var officialFeeCon = Number(con2).toFixed(2);
  var officialFee = Number(officialFeeCon);
  cy.log(officialFee);
  cy.wait(3000);

  cy.get(
    "#collapseTaxes > div > table  .vehicle-inventory-tax> :nth-child(3) > input"
  ).then(($val) => {
    var inventoryTaxCon = parseFloat($val.val());

    var inventoryTax = Number(inventoryTaxCon);
    cy.log("for checking is it inventory", inventoryTax);

    var con4 = Cypress.$(
      "#collapseTaxes table > tbody >.title-fee> :nth-child(3) > input"
    ).val();

    var titleFeeCon = Number(con4).toFixed(2);
    var titleFee = Number(titleFeeCon);
    cy.log(titleFee);

    var con5 = Cypress.$(
      "#collapseTaxes table > tbody >.documentary-fee> :nth-child(3) > input"
    ).val();

    var documentaryFeeCon = Number(con5).toFixed(2);
    var documentaryFee = Number(documentaryFeeCon);
    cy.log(documentaryFee);

    var con6 = Cypress.$(
      "#collapseTaxes table > tbody >.license-registration> :nth-child(3) > input"
    ).val();

    var licenseRegisCon = Number(con6).toFixed(2);
    var licenseRegis = Number(licenseRegisCon);
    cy.log(licenseRegis);

    var con7 = Cypress.$(
      "#collapseTaxes table > tbody >.inspection-fee-paid-to-state >:nth-child(3) > input"
    ).val();

    var paidToStateCon = Number(con7).toFixed(2);
    var paidToState = Number(paidToStateCon);
    cy.log(paidToState);

    var con8 = Cypress.$(
      "#collapseTaxes table > tbody >.e-tag-fee>:nth-child(3) > input"
    ).val();

    var eTagFeeCon = Number(con8).toFixed(2);
    var eTagFee = Number(eTagFeeCon);
    cy.log(eTagFee);

    var con9 = Cypress.$(
      "#collapseTaxes table > tbody >.inspection-station-fee>:nth-child(3) > input"
    ).val();

    var inspectionStationFeeCon = Number(con9).toFixed(2);
    var inspectionStationFee = Number(inspectionStationFeeCon);
    cy.log(inspectionStationFee);
    var totalOfGovtFee =
      serviceFee +
      officialFee +
      inventoryTax +
      titleFee +
      documentaryFee +
      licenseRegis +
      paidToState +
      eTagFee +
      inspectionStationFee;
    cy.log(totalOfGovtFee);
    cy.wait(5000);
    cy.get("#headingTaxes > button > div > :nth-child(2) > input").should(
      "have.value",
      totalOfGovtFee
    );
    cy.wait(2000);

    cy.get("#TableQuotation :nth-child(5) >:nth-child(2) > button").click();
    cy.wait(2000);
    cy.get('input[formcontrolname="deputyServiceFee"]').should(
      "have.value",
      serviceFeeCon
    );
    cy.get('input[formcontrolname="officialsFee"]').should(
      "have.value",
      officialFeeCon
    );
    cy.get('input[formcontrolname="dealer_inventory_tax"]').should(
      "have.value",
      inventoryTaxCon
    );
    cy.get('input[formcontrolname = "inspectionFeePaidToStation"]').should(
      "have.value",
      inspectionStationFeeCon
    );
    cy.get('input[formcontrolname = "documentary_fee"]').should(
      "have.value",
      documentaryFeeCon
    );
    cy.get('input[formcontrolname = "inspectionFeePaidToState"]').should(
      "have.value",
      paidToStateCon
    );
    cy.get('input[formcontrolname = "certificateTitleFee"]').should(
      "have.value",
      titleFeeCon
    );
    cy.get(
      ".modal-body> :nth-child(16) > :nth-child(3) > .col-5 > div > input"
    ).should("have.value", eTagFeeCon);

    cy.get("modal-container .modal-header > button > span").click();
  });
});
