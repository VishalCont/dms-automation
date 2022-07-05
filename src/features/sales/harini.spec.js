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
        if (index === 2) ele.trigger("click");
      }
    );
    var value;
    ver = verifyScreenCases[0];
    cy.contains('Calculate').click();
    cy.contains('Price Adjust').click();
    cy.get("input[formcontrolname='enterDesiredResult']").invoke('val').then((x) => {
        cy.get("input[formcontrolname='enterDesiredResult']").focus().clear().type(Math.floor((x+5)/5)*5);
    });
    cy.get("button[type='submit']").contains('Begin Price Adjustment').click();
    cy.get("strong[class='ng-star-inserted']").contains('Adjusted Price').invoke('text').then((y)=> {
        value = y.split(/[()]/);
        value = Number(value[1]);
        cy.log(value);
        cy.contains('Confirm Price Adjustment').click();
        cy.get("input[formcontrolname='sale_price']").should('have.value', value)
    })
});

}); 