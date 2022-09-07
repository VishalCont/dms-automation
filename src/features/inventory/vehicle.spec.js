/// <reference types="cypress"/>
var vinGenerator = require("vin-generator");
import { getRandomNumber } from "../../utils/random_number";
describe("Vehicle Test Suite", () => {
  it("Adding Vehicle to Inventory", () => {
    cy.login("hankk", "Admin@123");
    cy.intercept(
      "https://api.dev.desidms.com/inventory/list?staged=staghghged&offset=0&limit=10&lot_code="
    ).as("InventoryWait");
    cy.get("#collapsibleNavbar > ul > li:nth-child(1) > a").click();
    cy.location("pathname").should("equal", "/inventory");
    cy.wait("@InventoryWait");
    cy.intercept(
      "https://api.dev.desidms.com/inventory/vehicle/body-color/list"
    ).as("Addwait");
    cy.get(".btn-add-vehicle").click();
    cy.wait("@Addwait", { timeout: 4 * 1000 });
    cy.contains("Interior Color").should("be.visible");
    cy.get("select[formcontrolname='new_used']")
      .select("2: original")
      .should("have.value", "2: original");
    cy.debug();
    cy.get("select[formcontrolname='lot_code']")
      .select("A")
      .should("have.value", "A");
    let vin = vinGenerator.generateVin();
    cy.get('input[placeholder="VIN"]').type(vin);
    cy.debug();
    cy.intercept("https://api.dev.desidms.com/inventory/vin-check/*").as(
      "fetchVehicle"
    );
    cy.get(".ddms-form div:nth-child(2) > div.col-6 > button")
      .contains("Fetch Vehicle Details ")
      .click();
    cy.wait("@fetchVehicle");
    cy.get('input[placeholder="Enter Mileage"]').type(
      getRandomNumber(1, 20000)
    );
    cy.intercept("https://api.dev.desidms.com/inventory/addvehicle").as(
      "Addvehicle"
    );
    cy.get(
      "app-vehicles tab.tab-style.tab-pane.active.ng-star-inserted div.ml-auto > button"
    ).click();
    cy.wait("@Addvehicle");
    cy.contains("Ready to Sell Date").should("be.visible");
    cy.get("app-price-purchase input[formcontrolname='price']").type(
      getRandomNumber(4000, 9000)
    );
    cy.get("div.col-lg-6.ddms-normal-text > div:nth-child(4) select").select(0);
    cy.get("div.col-lg-6.ddms-normal-text > div:nth-child(6) input")
      .clear()
      .type(getRandomNumber(20, 50));
    cy.get(
      ".tab-style.tab-pane.ng-star-inserted.active div.ml-auto > button"
    ).click();
    cy.wait(1000);
    //cy.get('input[name="inlineRadioOptions"]#floor-yes').check()
    //cy.ge("")
    cy.get(
      "app-floor-planning > div > div.d-flex.mx-2.my-3 > div.ml-auto.ng-star-inserted > button"
    ).click();
    //cy.get('input[name="recon_cost"]').type(getRandomNumber(25,100));//Doubt
    //cy.get('select[formcontrolname="payment_method"]').select("cash");
    cy.get("#expenses-wraper > div:nth-child(2) div.ml-auto > button").click();
    cy.wait(5000);
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
    //cy.get('button[type="FINISH"]').click();
    cy.get(
      "tab.tab-style.tab-last.tab-pane.ng-star-inserted.active div.ml-auto > button"
    ).click();
  });
  it("Verify all the Mandatory fields are filling or not", () => {
    cy.intercept(
      "https://api.dev.desidms.com/inventory/list?staged=staged&offset=0&limit=10&lot_code="
    ).as("InventoryWait");
    cy.get("#collapsibleNavbar > ul > li:nth-child(1) > a").click();
    cy.location("pathname").should("equal", "/inventory");
    cy.wait("@InventoryWait");
    cy.intercept(
      "https://api.dev.desidms.com/inventory/vehicle/body-color/list"
    ).as("Addwait");
    cy.get(".btn-add-vehicle").click();
    cy.wait("@Addwait");
    cy.contains("Interior Color").should("be.visible");
    cy.get("select[formcontrolname='new_used']")
      .select("2: original")
      .should("have.value", "2: original");
    cy.debug();
    cy.get("select[formcontrolname='lot_code']")
      .select("A")
      .should("have.value", "A");
    cy.get('input[placeholder="VIN"]').type(vinGenerator.generateVin());
    cy.debug();
    cy.intercept("https://api.dev.desidms.com/inventory/vin-check/*").as(
      "fetchVehicle"
    );
    cy.get(".ddms-form div:nth-child(2) > div.col-6 > button")
      .contains("Fetch Vehicle Details ")
      .click();
    cy.wait("@fetchVehicle");
    cy.get('input[placeholder="Enter Mileage"]').type(
      getRandomNumber(1, 20000)
    );
    cy.intercept("https://api.dev.desidms.com/inventory/addvehicle").as(
      "Addvehicle"
    );
    cy.get(
      "app-vehicles tab.tab-style.tab-pane.active.ng-star-inserted div.ml-auto > button"
    ).click();
  });
});
