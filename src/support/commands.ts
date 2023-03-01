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
import { closeFloorPlan } from "./deal_builder/close_floor_plan.command";
import { tradeInDetails } from "./deal_builder/trade_In_details_command";
import { addVehicle, vehicleData } from "./Inventory/add_vehicle.command";
import { customer, dealWorksheet } from "./deal_builder/deal_worksheet.command";
import { selectLienHolder } from "./deal_builder/select_lien_holder.command";
import { dCustomer, salesRecap } from "./deal_builder/sales_recapsheet.command";
import { saleDetails } from "./deal_builder/sale_details.command";
import { recentDeal } from "./deal_builder/recent_deal.command";
import { receiptDownload } from "./deal_builder/receipt_download.command";
import { quickDealCalculator } from "./deal_builder/quick_dealcalculator.command";
import { refundFinalizePage } from "./deal_builder/refundFinalizePage.command";
import { modifyDeal } from "./deal_builder/modifyDeal.command";

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
require("./deal_builder/finance_charge_rate_participation.command");
require("./deal_builder/flatrate_lienholder.command");
require("./deal_builder/financeCharge_rate.command");
require("./deal_builder/local_storage_memory.command");
//require("./deal_builder/sales_recapsheet_for_outside.command");
require("./deal_builder/verify_customer_details_on_deal_builder.command");
//require("./deal_builder/deal_worksheet.command");
require("./deal_builder/commission_recap.command");
require("./deal_builder/ofac_check.command");
require("./deal_builder/refund.command ");
require("./deal_builder/test.command");
require("./deal_builder/add_lien_holder.command");
require("./deal_builder/remove_deal.command");
require("./deal_builder/continue_existingdeal.command");
require("./deal_builder/change_mileage.command");
require("./deal_builder/deselect_salestax_govtfee.command");
require("./deal_builder/changing_interestrates.command");
require("./deal_builder/cancel_deal.command");
require("./deal_builder/cancel_contiuedeal.command");
require("./deal_builder/change_days_to_first_payment.command");
require("./deal_builder/outside_finance_type.command");
require("./deal_builder/validate_document _inreport.command ");
require("./deal_builder/validate_salestax&govtfee_wholesale.command");
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
      selectSalesPersons: (customer: customerData) => void;
      closeFloorPlan: () => void;
      tradeInDetails: (attr: any) => void;
      addVehicle: (customer: vehicleData) => void;
      dealWorksheet: (dealWorksheet: customer) => void;
      selectLienHolder: (customer: VData) => void;
      salesRecap: (salesRecap: dCustomer) => void;
      saleDetails: (saleDetails: customer) => void;
      recentDeal: () => void;
      receiptDownload: (receiptDownload: customer) => void;
      quickDealCalculator: () => void;
      refundFinalizePage: () => void;
      changeFirstPaymentDate: (type: string) => void;
      selectPaymentSchedule: (type: string) => void;
      modifyDeal: () => void;
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
Cypress.Commands.add("closeFloorPlan", closeFloorPlan);
Cypress.Commands.add("tradeInDetails", tradeInDetails);
Cypress.Commands.add("addVehicle", addVehicle);
Cypress.Commands.add("dealWorksheet", dealWorksheet);
Cypress.Commands.add("selectLienHolder", selectLienHolder);
Cypress.Commands.add("salesRecap", salesRecap);
Cypress.Commands.add("saleDetails", saleDetails);
Cypress.Commands.add("recentDeal", recentDeal);
Cypress.Commands.add("receiptDownload", receiptDownload);
Cypress.Commands.add("quickDealCalculator", quickDealCalculator);
Cypress.Commands.add("refundFinalizePage", refundFinalizePage);
Cypress.Commands.add("modifyDeal", modifyDeal);
