describe("xyz",()=>{
    it("x",()=>{
        cy.login("Danish","Admin@12345");
        cy.get("#collapsibleNavbar a[href='/reports']").click();
        cy.wait(1000); 
        cy.get(".pt-1.pb-3.left.ng-star-inserted").contains("Current Inventory").click();
    })
    it("y",()=>{
        cy.wait(1000)
        cy.get("dropdown ng-star-inserted show btn-ddms-orange btn-ddms-small ml-2 dropdown-toggle profile dropdown-item text-center").select("CSV");
    })
})