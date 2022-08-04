export interface salePrice {
  vehicle_price: string;
}
export const changeSalePrice = (changeSalePrice1: salePrice) => {
  cy.get("[formcontrolname='sale_price']")
    .clear()
    .type(changeSalePrice1.vehicle_price);

  cy.get("#TableQuotation > tbody > tr:nth-child(1) > td.text-left").click();
};
