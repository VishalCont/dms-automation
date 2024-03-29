/// <reference types ="Cypress"/>
const { API_URL } = require("../../utils/constants");
const { getRandomNumber } = require("../../utils/random_number");
Cypress.Commands.add("tradeIn", (tradeDetails) => {
  cy.get("#TableQuotation i.fa-plus").click();
  cy.get("button#trade-in").first().click();
  cy.contains("Vehicle Valuations").should("be.visible");
  cy.intercept(
    `https://devdatamigration.desidms.com/inventory/vin-check/*?trade_in=1`
  ).as("firstTradeInWait");
  cy.tradeFetch();
  // Dms Allows only below 30 year aged vehicle
  var yearLimit = new Date().getFullYear() - 30;
  //log of the limit year
  cy.log(yearLimit);
  cy.debug();
  cy.wait(3000);
  //cy.log(Cypress.$("input[formcontrolname = 'year']").val());
  cy.get("input[formcontrolname = 'year']").then((year) => {
    var vehicleYear = Number(year.val());
    while (vehicleYear < yearLimit) {
      cy.log("inside loop");
      cy.tradeFetch();
      //cy.log(cy.get("input[formcontrolname = 'year']").invoke("val"));
      vehicleYear = cy.get("input[formcontrolname = 'year']").invoke("val");
      cy.log(vehicleYear);
      // vehicleYear = Number(
      // Cypress.$("input[formcontrolname = 'year']").val()
      //  );
    }

    //   if (Number(year.val()) >= yearLimit) {
    //     cy.log(" User can allow this vehicle");
    //   } else {
    //     cy.log(
    //       "Vehicle Manufactrure year is" +
    //         year +
    //         " so we cannot use this vehicle"
    //     );
    //     cy.tradeFetch();

    //     //Add Forloop for this
    //   }
  });
  //TOdo Assertion for make dropdown
  //TOdo Assertion for Vehicle type dropdown
  cy.get("select[formcontrolname='vehicle_type']").then((vehicleType) => {
    if (
      vehicleType === "" ||
      vehicleType === "undefined" ||
      vehicleType == 0 ||
      vehicleType === null
    ) {
      cy.get("select[formcontrolname='vehicle_type']").select("Sedan");
    } else {
      cy.log("It has fetched vehicle type");
    }
  });
  //TOdo Assertion for model dropdown
  //2FTNW21P33WETNEZZ
  //TOdo Assertion for Fuel type dropdown
  cy.get("select[formcontrolname='fuel_type']").then((fuelType) => {
    if (
      fuelType === "" ||
      fuelType === "undefined" ||
      fuelType == 0 ||
      fuelType === null
    ) {
      cy.get("select[formcontrolname='fuel_type']").select("Sedan");
    } else {
      cy.log("It has fetched vehicle fuel type");
    }
  });
  //TOdo Assertion for Transmission dropdown
  cy.get("select[formcontrolname='transmission']").then((transmission) => {
    if (
      transmission === "" ||
      transmission === "undefined" ||
      transmission == 0 ||
      transmission === null
    ) {
      cy.get("select[formcontrolname='transmission']").select("manual");
    } else {
      cy.log("It has fetched vehicle transmission");
    }
  });
  cy.get("input[formcontrolname = 'mileage']").type(
    getRandomNumber(5000, 12000)
  );
  cy.get("input[formcontrolname = 'cylinders']");
  cy.wait(2000);
  cy.get("input[formcontrolname='cylinders']").then((cylinders) => {
    // cylinders.val() !== 0 ||
    if (
      cylinders.val() === "undefined" ||
      cylinders.val() == 0 ||
      cylinders.val() === null ||
      cylinders.val() === ""
    ) {
      cy.get("input[formcontrolname = 'cylinders']").type(
        getRandomNumber(2, 12)
      );
      cy.log("cylinder does not have any value: " + cylinders.val());
    } else {
      //cy.log("cylinder count: " + cylinders.val());
      cy.log("cylinder consist a value :" + cylinders.val());
    }
  });
  //cy.get("input[formcontrolname = 'stock_number']").invoke("val").should("not.be.empty");
  //cy.get("input[formcontrolname = 'stock_number']").clear().type("X88096");
  //cy.log(cy.get("input[formcontrolname = 'stock_number']").invoke("val"));
  cy.get("input[formcontrolname = 'dealer_trade_in']").type(
    `${tradeDetails.dealerTradeInOffer}`
  );
  cy.get("input[formcontrolname = 'pay_off_loan_balance']").type(
    `${tradeDetails.payOffLoanBalance}`
  );
  cy.get("input[formcontrolname =  'cash_paid_for_buyer']").type(
    `${tradeDetails.cashPaidToBuyer}`
  );
  cy.get("input[formcontrolname = 'actual_cash_value']").type(
    `${tradeDetails.actualCashValue}`
  );
  cy.intercept(`${API_URL}/sales/sales_trade_in/*`).as("tradeInWait");
  cy.get("button").contains("SAVE & CONTINUE").click();
  cy.wait(5000);
  cy.get("body").then((body) => {
    if (body.find("div:contains(Stock Number Already Exists)").length === 0) {
      //evaluates as true
      cy.log("Dealer Dont have the same stock already");
    } else {
      cy.log("Dealer  have the same stock already");
      cy.get("input[formcontrolname = 'stock_number']")
        .clear()
        .type(getRandomNumber(10000, 99999));
      cy.get("button").contains("SAVE & CONTINUE").click();
    }
  });
  cy.get("body").then((body) => {
    if (body.find("div:contains(Please Provide Model)").length === 0) {
      cy.log(" vehicle have model");
    } else {
      cy.log("vehicle dont have proper model");
      cy.tradeFetch();
      cy.get("input[formcontrolname = 'mileage']").type(
        getRandomNumber(5000, 12000)
      );
      cy.get("button").contains("SAVE & CONTINUE").click();
    }
  });

  // const stockNumberExists = cy
  //   .find("div")
  //   .contains("Stock Number Already Exists").length;
  // cy.log("stockNumberExists", stockNumberExists);
  // if (stockNumberExists === "Stock Number Already Exists") {
  //   cy.get("input[formcontrolname = 'stock_number']").type(
  //     faker.random.alphaNumeric(5)
  //   );
  // }
  cy.wait("@tradeInWait", 10000);
  //cy.wait(3000);
  cy.debug();
});
