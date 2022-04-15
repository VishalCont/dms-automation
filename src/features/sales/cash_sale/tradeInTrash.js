function addTradeIn() {
  cy.get("#TableQuotation i.fa-plus").click();
  cy.get("button#trade-in").first().click();
  cy.contains("Vehicle Valuations").should("be.visible");
  cy.intercept(`${API_URL}/inventory/vin-check/*?trade_in=1`).as(
    "firstTradeInWait"
  );
  tradeFetchVehicle();
  // Dms Allows only below 30 year aged vehicle
  var yearLimit = new Date().getFullYear() - 30;
  //log of the limit year
  cy.log(yearLimit);
  cy.get("input[formcontrolname = 'year']").then((year) => {
    if (year >= yearLimit) {
      cy.log(" User can allow this vehicle");
    } else {
      cy.log(
        "Vehicle Manufactrure year is" + year + " so we cannot use this vehicle"
      );
      tradeFetchVehicle();

      //Add Forloop for this
    }
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
    getRandomNumber(5000, 8000)
  );
  cy.get("input[formcontrolname = 'pay_off_loan_balance']").type(
    getRandomNumber(3000, 5000)
  );
  cy.get("input[formcontrolname =  'cash_paid_for_buyer']").type(
    getRandomNumber(2000, 3000)
  );
  cy.get("input[formcontrolname = 'actual_cash_value']").type(
    getRandomNumber(8000, 8200)
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

  // const stockNumberExists = cy
  //   .find("div")
  //   .contains("Stock Number Already Exists").length;
  // cy.log("stockNumberExists", stockNumberExists);
  // if (stockNumberExists === "Stock Number Already Exists") {
  //   cy.get("input[formcontrolname = 'stock_number']").type(
  //     faker.random.alphaNumeric(5)
  //   );
  // }
  cy.wait("@tradeInWait");
  cy.wait(3000);
  cy.debug();
}
function tradeFetchVehicle() {
  cy.get("input[formcontrolname = 'vin']").type(vinGenerator.generateVin());
  cy.get(".modal-body button.btn-ddms-lightgreen")
    .contains("Fetch Vehicle Details")
    .click();
  cy.wait("@firstTradeInWait");
}
