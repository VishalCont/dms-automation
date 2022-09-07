import { API_URL } from "../../utils/constants";

export interface customerData {
  tradeInVehicleYear: string;
  tradeInVehicleMake: string;
  tradeInVehicleModel: string;
  tradeInVehicleVIN: string;
  tradeInVehicleVINlicensePlate: string;
  tradeInStock: string;
  tradeVehicleMileage: string;
}
export const tradeInDetails = (customer: customerData) => {
  cy.wait(2000);
  cy.get("button#trade-in").first().click();
  cy.contains("Vehicle Valuations").should("be.visible");

  cy.get("input[formcontrolname = 'year']")
    .invoke("val")
    .then((vehicleYear) => {
      customer.tradeInVehicleYear = vehicleYear as string;
      cy.log(customer.tradeInVehicleYear);
      //(customer.tradeInVehicleYear);
    });
  cy.get("div.vehicle-make ng-select .ng-value-label")
    .invoke("text")
    .then((vehicleMake) => {
      customer.tradeInVehicleMake = vehicleMake;
      cy.log(customer.tradeInVehicleMake);
    });
  cy.get("div.vehicle-model ng-select .ng-value-label")
    .invoke("text")
    .then((vehicleModel) => {
      customer.tradeInVehicleModel = vehicleModel;
      cy.log(customer.tradeInVehicleModel);
    });
  cy.get("input[formcontrolname = 'vin']")
    .invoke("val")
    .then((vehicleVIN) => {
      customer.tradeInVehicleVIN = vehicleVIN as string;
      cy.log(customer.tradeInVehicleVIN);
    });
  cy.get("input[formcontrolname = 'license_plate']")
    .invoke("val")
    .then((vehicleLicensePlate) => {
      customer.tradeInVehicleVINlicensePlate = vehicleLicensePlate as string;
      //var trade = customer.trade_in_vehicle_license_plate
      cy.log(customer.tradeInVehicleVINlicensePlate);
    });
  cy.get("input[formcontrolname = 'stock_number']")
    .invoke("val")
    .then((vehicleStockNo) => {
      customer.tradeInStock = vehicleStockNo as string;
      //var trade = customer.trade_in_vehicle_license_plate
      cy.log(customer.tradeInStock);
    });
  cy.get("input[formcontrolname = 'mileage']")
    .invoke("val")
    .then((vehicleMileAge) => {
      customer.tradeVehicleMileage = vehicleMileAge as string;
      //var trade = customer.trade_in_vehicle_license_plate
      cy.log(customer.tradeVehicleMileage);
    });
  cy.intercept(`${API_URL}/sales/sales_trade_in/*`).as("tradeInWait");
  cy.get("button").contains("SAVE & CONTINUE").click();
  cy.wait("@tradeInWait");
  return cy.wrap(customer);
};
