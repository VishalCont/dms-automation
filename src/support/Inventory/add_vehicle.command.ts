import { API_URL, DATA_MIGRATION_URL } from "../../utils/constants";

export interface vehicleData {
  vin: string;
  mileage: string;
  vehiclePrice: string;
  buyerFee: string;
}
export const addVehicle = (customer: vehicleData) => {
  cy.intercept(`${API_URL}/dealeradminnew/lot_code/list?active=true`).as(
    "InventoryWait"
  );
  cy.get("#collapsibleNavbar > ul > li:nth-child(1) > a").click();
  cy.location("pathname").should("equal", "/inventory");
  cy.wait("@InventoryWait");
  cy.intercept(`${API_URL}/inventory/vehicle/body-color/list`).as("AddWait");
  cy.get(".btn-add-vehicle").click();
  cy.wait("@AddWait", { timeout: 4 * 1000 });
  cy.contains("Interior Color").should("be.visible");
  cy.get("select[formcontrolname='new_used']")
    .select("2: original")
    .should("have.value", "2: original");
  cy.get("select[formcontrolname='lot_code']")
    .select("A")
    .should("have.value", "A");
  cy.get('input[placeholder="VIN"]').type(customer.vin);
  cy.intercept(`${DATA_MIGRATION_URL}/inventory/vin-check/*`).as(
    "fetchVehicle"
  );
  cy.get(".ddms-form div:nth-child(2) > div.col-6 > button")
    .contains("Fetch Vehicle Details ")
    .click();
  cy.wait("@fetchVehicle");
  cy.get('input[placeholder="Enter Mileage"]').type(customer.mileage);
  cy.intercept(`${API_URL}/inventory/addvehicle`).as("AddVehicle");
  cy.get(
    "app-vehicles tab.tab-style.tab-pane.active.ng-star-inserted div.ml-auto > button"
  ).click();
  cy.wait("@AddVehicle");
  cy.contains("Ready to Sell Date").should("be.visible");
  cy.get("app-price-purchase input[formcontrolname='price']").type(
    customer.vehiclePrice
  );
  cy.get("div.col-lg-6.ddms-normal-text > div:nth-child(4) select").select(0);
  cy.get("div.col-lg-6.ddms-normal-text > div:nth-child(6) input")
    .clear()
    .type(customer.buyerFee);
  cy.get(
    ".tab-style.tab-pane.ng-star-inserted.active div.ml-auto > button"
  ).click();
  cy.wait(1000);
  cy.get(
    "app-floor-planning > div > div.d-flex.mx-2.my-3 > div.ml-auto.ng-star-inserted > button"
  ).click();
  cy.get("#expenses-wraper > div:nth-child(2) div.ml-auto > button").click();
  cy.wait(2000);
  cy.get(
    "body > app-root app-vehicles tab.tab-style.tab-pane.ng-star-inserted.active div.ml-auto > button"
  ).click();
  cy.wait(1000);
  cy.get(
    "div.container-fluid.px-5.pb-80px > app-vehicles  app-vehicle-installed-options button"
  ).click();
  cy.get(
    "div.container-fluid.px-5.pb-80px  tab.tab-style.tab-pane.ng-star-inserted.active div.ml-auto > button"
  ).click();
  cy.get("div.d-flex.justify-content-end span").click();
  cy.get("div.d-flex.justify-content-end  li:nth-child(1) > a").click();
  cy.get(
    "tab.tab-style.tab-last.tab-pane.ng-star-inserted.active div.ml-auto > button"
  ).click();
  cy.get(".ddms-normal-text-bold.font-align-right").should(
    "contain",
    customer.vin
  );
};
