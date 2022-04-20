import { defferedDownPayment } from "./deal_builder/differed_downpayment.command";
import { ICustomer, lookupExitingCustomer } from "./deal_builder/lookup_existing_customer.command";
import { login } from "./login.command";
require("./deal_builder/dcc_gap_existingVendor.command");
require("./deal_builder/new_customer.command");
require("./deal_builder/dcc_gap_newVendor.command");
require("./deal_builder/trade_in.command");
require("./deal_builder/trade_fetch_vehicle.command");
require("./deal_builder/select_vehicle.command");
require("./deal_builder/down_payment.command");
require("./deal_builder/finance_calculation_type.command");
require("./deal_builder/payment_schedule.command");
require("./deal_builder/service_contract_existingVendor.command");
require("./deal_builder/service_contract_newVendor.command");
require("./deal_builder/clear_service_contract.command");
require("./deal_builder/remove_tradein.command");
require("./deal_builder/clear_dcc_gap.command");
require("./deal_builder/clear_downpayment.command");
require("./deal_builder/clear_defferdownpayment.command");
require("./deal_builder/change_sale_type.command");
// add new command to the existing Cypress interface
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command that can be used to Login into DesiDMS
       *
       * @memberof Chainable
       */
      login: (a?: string, b?: string) => void;
      lookupExitingCustomer: (customer: ICustomer) => void;
      defferedDownPayment: (differedDate: Date, differedDownPaymentAmount: number) => void;
    }
  }
}

// add commands to Cypress like "cy.foo()" and "cy.foo2()"
Cypress.Commands.add("login", login);
Cypress.Commands.add("lookupExitingCustomer", lookupExitingCustomer);
Cypress.Commands.add("defferedDownPayment", defferedDownPayment);
