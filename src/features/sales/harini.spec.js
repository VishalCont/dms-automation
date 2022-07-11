var moment = require("moment");
const { ENV } = require("../../utils/constants");
var customerInfos = require(`../../data/customer_info.${ENV}.json`);
var quotationDetails = require(`../../data/quotation_detail.json`);
var verifyScreenCases = require(`../../utils/values_for_cases.js`);
var tradeInDetails = require(`../../data/trade_in_details.json`);
describe("Demo", () => {
  beforeEach(() => {
    cy.restoreLocalStorageCache();
  });

  afterEach(() => {
    cy.saveLocalStorageCache();
  });
  it("Checking Sales Price,sales Tax, Other by adding Dcc/gap", () => {
    //cy.log(moment().add(10, "days").format("MM/DD/YYYY"));
    cy.login();
    const customer = customerInfos[0];
    const quotation = quotationDetails[5];
    cy.lookupExitingCustomer(customer);
    cy.selectVehicle();
    cy.wait(10000);
    cy.get("input[formcontrolname='paymentRadios']").each(
      (ele, index, list) => {
        cy.log(ele);

        cy.log(index);

        if (index === 3) ele.trigger("click");
      }
    );
    cy.get('input[formcontrolname="cb1"]').check();
    function validate() {
        if (document.getElementById('remember').checked) {
            alert("checked");
        } else {
            alert("Unchecked");
        }
    }
    cy.get('i[class="fas fa-chevron-up font-size-16 mr-2"]').click();
    cy.get('input[formcontrolname="cb1"]').check();
    cy.get('input[id ="feechares_0"]').check();
    cy.get('input[id ="feechares_1"]').check();
    cy.get('input[id ="feechares_2"]').check();
    cy.get('input[id ="feechares_3"]').check();
    cy.get('input[id ="feechares_4"]').check();
    cy.get('input[id ="feechares_5"]').check();
    cy.get('input[id ="feechares_6"]').check();
    cy.get('input[id ="feechares_7"]').check();
    cy.get('input[id ="feechares_8"]').check();
});

});