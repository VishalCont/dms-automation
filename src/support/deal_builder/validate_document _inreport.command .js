///<reference types="Cypress" />
const moment = require("moment");

Cypress.Commands.add("validateDocumentInReport", (customer) => {
  /////Taking values from sale id page
  cy.get("datatable-body-cell:nth-child(1) div a")
    .first()
    .invoke("text")
    .as("value1");

  cy.get("@value1").then((value1) => {
    var x = value1.trim();
    cy.log(x);

    cy.get(
      "datatable-body > datatable-selection :nth-child(1) > datatable-body-row > div :nth-child(8) > div > a"
    )
      .first()
      .invoke("text")
      .as("value2");
    cy.get("@value2").then((value2) => {
      var y = value2.trim();
      cy.log(y);

      //// validate in Report
      cy.get("#collapsibleNavbar a[href='/reports']").click();
      cy.get(
        "body > app-root .px-5.pb-80px > app-reports .col-2 > :nth-child(4) > button"
      ).click();
      cy.wait(2000);
      //cy.get("#integration_reports a[href='/reports/banker-doc-report']").click();
      cy.get(
        "#integration_reports :nth-child(2) > datatable-body-row :nth-child(2)  a"
      ).click();

      // cy.get(
      //   "datatable-body > datatable-selection>datatable-scroller > :nth-child(1) .datatable-row-group > :nth-child(2) > div > p"
      // ).should("contains", customer.sale_date);
      //  cy.get(
      //   "datatable-scroller > :nth-child(1) > datatable-body-row :nth-child(7) > div > p"
      //  ).should("bankers", customer.documentType);

      // cy.get(
      //   "datatable-body  datatable-scroller > :nth-child(1) .datatable-row-center >:nth-child(11) > div > p"
      // ).should("contains", customer.lienHolder);
      cy.log(customer.first_name, customer.last_name);
      cy.log(customer.lienHolder);
      cy.log(customer.documentType);

      // cy.get(
      //   "datatable-row-wrapper:nth-child(1) >datatable-body-row datatable-body-cell:nth-child(7) > div > p"
      // ).should("contain", customer.first_name);

      cy.get(
        "datatable-row-wrapper:nth-child(1) >datatable-body-row datatable-body-cell:nth-child(1) > div > p"
      )
        .invoke("text")
        .then((text) => {
          var splitText = text.split(" ")[0];
          cy.log(splitText);
          expect(splitText).to.equal(customer.first_name);

          cy.get(
            " datatable-row-wrapper:nth-child(1) >datatable-body-row datatable-body-cell:nth-child(7) > div > p"
          ).should("contain", customer.documentType);
          cy.get(
            " datatable-row-wrapper:nth-child(1) >datatable-body-row datatable-body-cell:nth-child(11) > div > p"
          ).should("contain", customer.lienHolder);
          cy.get(
            " datatable-row-wrapper:nth-child(1) >datatable-body-row datatable-body-cell:nth-child(2) > div > p"
          )

            .invoke("text")
            .then((text3) => {
              var remove = text3.toString();
              var presentDate = moment().format("MM/DD/YYYY");
              expect(remove).to.equal(presentDate);

              // cy.get(
              //   " datatable-row-wrapper:nth-child(1) >datatable-body-row datatable-body-cell:nth-child(2) > div > p"
              // ).should("contain", customer.sale_date);
              /////validating from sales id
              cy.get(
                "datatable-row-wrapper:nth-child(1) >datatable-body-row datatable-body-cell:nth-child(3) > div > p"
              ).should("contain", x);
              cy.get(
                " datatable-row-wrapper:nth-child(1) >datatable-body-row datatable-body-cell:nth-child(4) > div > p"
              ).should("contain", y);
            });
        });
    });
  });
});
