import { API_URL } from "../../utils/constants";

export interface customer {
  full_name: string;
  first_name: string;
  last_name: string;
  phone: string;
  amountFinanced: string;
  paymentSchedule: string;
  noOfPaymentsMd: string;
  aprMd: string;
  installmentAmountMd: string;
  totalOfPaymentsMd: string;
  confirmModifyDeal: boolean;
}
export const modifyDeal = (modifyDeal: customer) => {
  //invoking account number for recent sale
  cy.get(
    " datatable-body > datatable-selection :nth-child(1) > datatable-body-row > div :nth-child(8) > div > a"
  )
    .first()
    .invoke("text")
    .then((val1) => {
      val1 = val1.trim();
      cy.log("the account number is", val1);
      cy.intercept(`${API_URL}/collections/list/*`).as("loanList");
      //click on modify deal in sales page
      cy.get("button").contains("Modify Deal").click();
      cy.wait("@loanList");
      //invoking the account number
      cy.get('input[placeholder="Account No"]#loan').type(val1);
      cy.wait(3000);
      cy.get("button").contains("Search").click();
      cy.get("datatable-body-cell:nth-child(2) > div > a")
        .invoke("text")
        .then((val2) => {
          val2 = val2.trim();
          cy.log("searched account number is", val2);
          expect(val2).to.equal(val1);
          if (val1 === val2) {
            cy.intercept(`${API_URL}/collections/action_notes/*`).as(
              "activeLoan"
            );
            cy.get("datatable-body-cell:nth-child(2) > div > a").click();
            cy.wait("@activeLoan");
          } else {
            cy.log("Account number not found");
          }
          cy.intercept(`${API_URL}/collections/loanbalance/*`).as(
            "modifyPhaseOne"
          );
          cy.get("button").contains("MODIFY DEAL").click();
          cy.wait("@modifyPhaseOne");
          cy.get("#verify-details-part-trigger > span.bs-stepper-label").should(
            "have.text",
            "Verify Details"
          );
          modifyDeal.full_name = `${modifyDeal.first_name}${modifyDeal.last_name}`;
          cy.get(
            "#verify-details-part div:nth-child(1) div:nth-child(2)"
          ).should("contain", modifyDeal.first_name);
          cy.get(
            "#verify-details-part > app-verify-details > div > div:nth-child(1) > div > div:nth-child(2)"
          ).should("contain", modifyDeal.phone);
          cy.get(
            "app-verify-details > div > div:nth-child(3) > div div:nth-child(1)"
          ).should("contain", val2);
          cy.get(
            "#verify-details-part div:nth-child(3) > div > div:nth-child(2) > div:nth-child(1) > div:nth-child(2)"
          ).should("contain", modifyDeal.amountFinanced);
          cy.intercept(`${API_URL}/inventory/vehicle/*`).as("modifyPhaseTwo");
          cy.get(`input[type='submit'][value='NEXT']`).click();
          cy.wait("@modifyPhaseTwo");
          cy.get("#modify-deal-part-trigger > span.bs-stepper-label").should(
            "have.text",
            "Modify Deal"
          );
          // cy.selectPaymentSchedule("Weekly");
          // cy.wait(2000);
          // cy.changeFirstPaymentDate("startDate");
          // cy.wait(2000);
          cy.wait(5000);
          cy.get("button").contains("Reset").click();
          cy.wait(5000);
          cy.get("[formcontrolname='noOfPayments']")
            .clear()
            .type(modifyDeal.noOfPaymentsMd);
          cy.get("[formcontrolname='rateOfInterest']")
            .clear()
            .type(modifyDeal.aprMd);
          cy.wait(5000);
          cy.get("button").contains("Calculate").click();
          cy.wait(5000);
          // cy.get("[formcontrolname='installmentAmount']")
          //   .invoke("text")
          //   .then((val3) => {
          //     val3 = val3.trim();
          //     cy.log("the installment value is", val3);
          //     cy.get("[formcontrolname='financeAmount']")
          //       .invoke("text")
          //       .then((val4) => {
          //         val4 = val4.trim();
          //         cy.log("the total amount value is", val4);
          //       });
          //   });
          cy.intercept(`${API_URL}/sales/*`).as("modifyPhaseThree");
          cy.get(`input[type='submit'][value='NEXT']`).click();
          cy.wait("@modifyPhaseThree");
          cy.get("#confirmation-part-trigger > span.bs-stepper-label").should(
            "have.text",
            "Confirmation"
          );
          modifyDeal.full_name = `${modifyDeal.first_name}${modifyDeal.last_name}`;
          cy.get(
            "app-confirm-deal > div > div.ibox-content > div:nth-child(1) > h3"
          ).should("contain", modifyDeal.first_name);
          cy.get(
            "app-confirm-deal > div > div.ibox-content > div:nth-child(4) > h3"
          ).should("contain", modifyDeal.totalOfPaymentsMd);
          cy.get(
            "app-confirm-deal > div > div.ibox-content > div:nth-child(4) > h6"
          ).should("contain", modifyDeal.installmentAmountMd);
          cy.get("button")
            .contains("Preview Contract Modification Agreement")
            .click();
          cy.wait(3000);
          cy.contains("Contract Modification Agreement - Preview").should(
            "be.visible"
          );
          cy.wait(3000);
          cy.get(
            "body > modal-container > div > div > div.modal-header > button > span"
          ).click();
          cy.wait(3000);
          cy.get("app-confirm-deal button:nth-child(2)")
            .contains("Modify")
            .click();
          cy.wait(3000);
          cy.contains("Please Confirm").should("be.visible");
          if (modifyDeal.confirmModifyDeal === true) {
            cy.intercept(`${API_URL}/sales/upload_documents/*`).as(
              "completeModify"
            );
            cy.get("button").contains("Yes").click();
            cy.wait("@completeModify");
          } else {
            cy.get("button").contains("No").click();
          }
          cy.get("datatable-body-cell:nth-child(2) > div > a")
            .first()
            .invoke("text")
            .then((val5) => {
              val5 = val5.trim();
              let newVal = "MD01";
              let val6 = val2.concat(newVal);
              cy.log("val2 + MD01 =", val6);
              cy.wait(10000);
              cy.get('input[placeholder="Account No"]#loan').type(val6);
              cy.wait(3000);
              cy.get("button").contains("Search").click();
              cy.intercept(`${API_URL}/sales/*`).as("finalMd");
              cy.get("datatable-body-cell:nth-child(2) > div > a").click();
              cy.wait("@finalMd");
              cy.get(
                "app-collections-tabs div:nth-child(3) > div:nth-child(1)"
              ).should("contain", val6.replace(/'/g, ""));
              cy.get(
                "app-collections-tabs div:nth-child(4) > div:nth-child(7)"
              ).should("contain", val2);
            });
        });
    });
};
