export function defSalesTax(taxInclude:string){
    cy.get(`input[formcontrolname='deferredSaleTax'][value='${taxInclude}']`).check();
}