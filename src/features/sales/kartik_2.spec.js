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
    var priceadjust="VehicleSalePrice";
    if(priceadjust==="VehicleSalePrice"){
        var value;
        cy.contains('Calculate').click();
        cy.contains('Price Adjust').click();
        cy.get('input[formcontrolname="changeField"]').each(
          (ele, index, list) => {
            cy.log(ele);
    
            cy.log(index);
    
            if (index === 0) ele.trigger("click");
          }
        );
        cy.get("input[formcontrolname='enterDesiredResult']").invoke('val').then((x) => {
            cy.get("input[formcontrolname='enterDesiredResult']").focus().clear().type(Math.floor((x+5)/5)*5);
        });
        cy.get("button[type='submit']").contains('Begin Price Adjustment').click();
        cy.get("strong[class='ng-star-inserted']").contains('Adjusted Price').invoke('text').then((y)=> {
            value = y.split(/[()]/);
            value = Number(value[1]);
            cy.log(value);
            cy.contains('Confirm Price Adjustment').click();
            cy.get('input[formcontrolname="sale_price"]').should('have.value', value);
        })
    }
    if(priceadjust==="Trade-in"){
    var value;
    const VIN="1GYEE437090158658";
    const mileage=500;
    const license="LJK7854";
    const Dealertradein=10000;
    const Payoffloan=4000;
    const actualcashvalue=12000;
    cy.get('button[type="button"]').contains('Trade-In').click();
    cy.get('input[formcontrolname="vin"]').type(VIN);
    cy.contains('Fetch Vehicle Details').click();
    cy.get('input[formcontrolname="mileage"]').type(mileage);
    cy.get('input[formcontrolname="license_plate"][placeholder="License Plate"]').type(license);
    cy.get('input[formcontrolname="dealer_trade_in"]').type(Dealertradein);
    cy.get('input[formcontrolname="pay_off_loan_balance"]').type(Payoffloan);
    cy.get('input[formcontrolname="actual_cash_value"]').type(actualcashvalue);
    cy.contains('SAVE & CONTINUE').click();
    cy.contains('Calculate').click();
    cy.contains('Price Adjust').click();
    cy.get('input[formcontrolname="changeField"]').each(
      (ele, index, list) => {
        cy.log(ele);

        cy.log(index);

        if (index === 1) ele.trigger("click");
      }
    );
    cy.get("input[formcontrolname='enterDesiredResult']").invoke('val').then((x) => {
        cy.get("input[formcontrolname='enterDesiredResult']").focus().clear().type(Math.floor((x+5)/5)*5);
    });
    cy.get("button[type='submit']").contains('Begin Price Adjustment').click();
    cy.get("strong[class='ng-star-inserted']").contains('Adjusted Price').invoke('text').then((y)=> {
        value = y.split(/[()]/);
        value = Number(value[1]);
        cy.log(value);
        cy.contains('Confirm Price Adjustment').click();
        cy.get('input[class="form-control text-right cust-focus"]').should('have.value', value-Payoffloan);
    })
}
if(priceadjust==="DownPayment"){
var value;
const cashdownpayment=2500;
const VIN="1GYEE437090158658";
    const mileage=500;
    const license="LJK7854";
    const Dealertradein=10000;
    const Payoffloan=4000;
    const actualcashvalue=12000;
    cy.get('button[type="button"]').contains('Trade-In').click();
    cy.get('input[formcontrolname="vin"]').type(VIN);
    cy.contains('Fetch Vehicle Details').click();
    cy.get('input[formcontrolname="mileage"]').type(mileage);
    cy.get('input[formcontrolname="license_plate"][placeholder="License Plate"]').type(license);
    cy.get('input[formcontrolname="dealer_trade_in"]').type(Dealertradein);
    cy.get('input[formcontrolname="pay_off_loan_balance"]').type(Payoffloan);
    cy.get('input[formcontrolname="actual_cash_value"]').type(actualcashvalue);
    cy.contains('SAVE & CONTINUE').click();
cy.get('button[type="button"]').contains('Details').click();
cy.get('input[formcontrolname="down_payment"]').type(cashdownpayment);
cy.contains('SAVE & CONTINUE').click();
cy.contains('Calculate').click();
    cy.contains('Price Adjust').click();
    cy.get('input[formcontrolname="changeField"]').each(
      (ele, index, list) => {
        cy.log(ele);

        cy.log(index);

        if (index === 2) ele.trigger("click");
      }
    );
    cy.get("input[formcontrolname='enterDesiredResult']").invoke('val').then((x) => {
        cy.get("input[formcontrolname='enterDesiredResult']").focus().clear().type(Math.floor((x+5)/5)*5);
    });
    cy.get("button[type='submit']").contains('Begin Price Adjustment').click();
    cy.get("strong[class='ng-star-inserted']").contains('Adjusted Price').invoke('text').then((y)=> {
        value = y.split(/[()]/);
        value = Number(value[1]);
        cy.log(value);
        cy.contains('Confirm Price Adjustment').click();
        cy.get('input[class="form-control text-right cust-focus"]').should('have.value', value+Dealertradein-Payoffloan);
    })
}
});

});