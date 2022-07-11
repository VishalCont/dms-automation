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

        if (index === 2) ele.trigger("click");
      }
    );
    var value;
    var value_1;
    var value2;
    cy.get('input[formcontrolname="deferredSaleTax"]').each(
        (ele, index, list) => {
          cy.log(ele);
          cy.log(index);
  
          if (index === 0) ele.trigger("click");
        }
      );
      cy.get("div[class='finance-amount-wit-out-tax ng-star-inserted']").invoke('text').then((x)=>{
          cy.log(x);
          value=Number(x);
      });
      cy.get("input[formcontrolname='noOfPayments']").invoke('val').then((y)=>{
          cy.log(y);
        value_1=y;
    });
    value2=String((value/value_1).toFixed(2));
    cy.log(value2);
    cy.contains('Calculate').click();
    cy.wait(5000);
    cy.get("input[formcontrolname='salesTaxMonthly']").should('have.value',value2 );

  });
  
  });