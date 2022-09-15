/// <reference types ="Cypress"/>
//var vehicleData = require(`../../utils/sales_flow_cases`);
import { faker } from "@faker-js/faker";
const vinGenerator = require("vin-generator");
describe(" Adding vehicle to Inventory ", () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });
  afterEach(() => {
    cy.saveLocalStorageCache();
  });
  it(" logging into DMS Dealer ", () => {
    cy.login("clearent", "Admin@123");
  });
  it("Adding Vehicle", () => {
    for (let index = 0; index < 10; index++) {
      const inventoryValues = {
        vehicleDetails: {
          vin: vinGenerator.generateVin(),
          mileage: faker.random.numeric(5),
          vehiclePrice: faker.random.numeric(4),
          buyerFee: faker.random.numeric(2),
        },
      };
      //let customer = vehicleDetails;
      //cy.log(vehicleDetails);

      // const element = array[index];
      cy.addVehicle(inventoryValues.vehicleDetails);
    }
  });
});
