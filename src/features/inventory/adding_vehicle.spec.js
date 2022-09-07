/// <reference types ="Cypress"/>
var vehicleData = require(`../../utils/sales_flow_cases`);
let customer = vehicleData.inventoryValues.vehicleDetails;
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
    cy.addVehicle(customer);
  });
});
