import cypress = require("cypress");
import { defferedDownPayment } from "./deal_builder/differed_downpayment.command";
import { installmentAmount } from "./deal_builder/installment_amount_validation.command";
import {
  ICustomer,
  lookupExitingCustomer,
} from "./deal_builder/lookup_existing_customer.command";
import { login } from "./login.command";
import { defSalesTax } from "./deal_builder/deferred_sales_tax.command";
import { changeSaleDate } from "./deal_builder/change_sale_date.command";
import { VData, verifyScreen } from "./deal_builder/verify_screen.command";
import { customerData, newCustomer } from "./deal_builder/new_customer.command";
import { startSale } from "./deal_builder/start_a_sale.command";
import { verifyCustomerData } from "./deal_builder/verify_customer_details_on_deal_builder.command";
import {
  changeSalePrice,
  salePrice,
} from "./deal_builder/change_sale_price.command";
import { makePayment } from "./deal_builder/make_payment.command";
import { downloadDocument } from "./deal_builder/downloand_all_documents";
import { completeSale } from "./deal_builder/complete_sale.command";
import { confirmationAtFinalizeSale } from "./deal_builder/confirmation_to_complete_sale.command";
import { selectSalesPersons } from "./deal_builder/selecting_sales_person.command";
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
require("./deal_builder/remove_tradein.command");
require("./deal_builder/clear_service_contract.command");
require("./deal_builder/remove_tradein.command");
require("./deal_builder/clear_dcc_gap.command");
require("./deal_builder/clear_downpayment.command");
require("./deal_builder/clear_defferdownpayment.command");
require("./deal_builder/change_sale_type.command");
//require("./deal_builder/otherCharges_selection.command");
require("./deal_builder/buyratefrombank_lienholder.command");
require("./deal_builder/flatrate_lienholder.command");
require("./deal_builder/financeCharge_rate.command");
require("./deal_builder/local_storage_memory.command");
require("./deal_builder/sales_recapsheet_for_outside.command");
require("./deal_builder/verify_customer_details_on_deal_builder.command");
require("./deal_builder/deal_worksheet.command");
require("./deal_builder/commission_recap.command");
require("./deal_builder/ofac_check.command");
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
      defferedDownPayment: (
        differedDate: Date,
        differedDownPaymentAmount: number
      ) => void;
      installmentAmount: (
        paymentCalculationType:
          | "numberOfPayments"
          | "apr"
          | "totalAmountMonthly"
      ) => void; //noOfPayments or apr or totalAmountMonthly;
      defSalesTax: (taxInclude: "yes" | "no") => void;
      changeSaleDate: (date: Date, startDate: string) => void;
      verifyScreen: (customer: VData) => void;
      newCustomer: (customer: customerData) => void;
      startSale: () => void;
      verifyCustomerData: (customer: customerData) => void;
      changeSalePrice: (changeSalePrice1: salePrice) => void;
      makePayment: (makePaymentData: VData) => void;
      downloadDocument: () => void;
      completeSale: () => void;
      confirmationAtFinalizeSale: () => void;
      selectSalesPersons: () => void;
    }
  }
}

// add commands to Cypress like "cy.foo()" and "cy.foo2()"
Cypress.Commands.add("login", login);
Cypress.Commands.add("lookupExitingCustomer", lookupExitingCustomer);
Cypress.Commands.add("defferedDownPayment", defferedDownPayment);
Cypress.Commands.add("installmentAmount", installmentAmount);
Cypress.Commands.add("defSalesTax", defSalesTax);
Cypress.Commands.add("changeSaleDate", changeSaleDate);
Cypress.Commands.add("verifyScreen", verifyScreen);
Cypress.Commands.add("newCustomer", newCustomer);
Cypress.Commands.add("startSale", startSale);
Cypress.Commands.add("verifyCustomerData", verifyCustomerData);
Cypress.Commands.add("changeSalePrice", changeSalePrice);
Cypress.Commands.add("makePayment", makePayment);
Cypress.Commands.add("downloadDocument", downloadDocument);
Cypress.Commands.add("completeSale", completeSale);
Cypress.Commands.add("confirmationAtFinalizeSale", confirmationAtFinalizeSale);
Cypress.Commands.add("selectSalesPersons", selectSalesPersons);
