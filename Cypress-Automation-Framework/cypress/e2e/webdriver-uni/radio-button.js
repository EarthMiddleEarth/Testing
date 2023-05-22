/// <reference types="cypress" />



describe("Verify radio buttons via webdriveruni",()=>{
    before(()=>{
        cy.visit("http://www.webdriveruniversity.com")
        cy.get("#dropdown-checkboxes-radiobuttons").invoke("removeAttr","target").click()
    })
    it("Check specific radio buttons",()=>{
        cy.get("#radio-buttons").find("[type='radio']").first().check()
        cy.get("#radio-buttons").find("[type='radio']").eq(2).check()
    })
    it("Validate a state of specific radio buttons",()=>{
        // [value='lettuce']
        // [value='cabbage']
        // [value='pumpkin']
        cy.get("[value='lettuce']").should("not.be.checked")
        cy.get("[value='pumpkin']").should("be.checked")
        cy.get("[value='lettuce']").check()
        cy.get("[value='lettuce']").should("be.checked")
        cy.get("[value='pumpkin']").should("not.be.checked")
        cy.get("[value='cabbage']").should("be.disabled")
    }) 

})