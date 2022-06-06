import moment = require("moment");

export function changeSaleDate(date : Date, startDate : string){
    cy.get(`input[formcontrolname='sale_date']`).clear().type(`${date}`);
    cy.get('body').click();
    cy.get(`input[value="30"]`).check();
    cy.wait(1000);
    cy.get("input[formcontrolname='bhphStartDate']").invoke("val").then(sometext => {
        cy.debug()
        if(sometext){
            cy.log("------------------",sometext.toString())
            cy.log("------------------",sometext)
        }
        let da=moment(sometext,"MM/DD/YYYY").format();
        if(da==startDate){
            cy.log("Hit")

        }
        
    });
    
    cy.get('input[formcontrolname="bhphStartDate"]').should(`${startDate}`);
};