// MOCHA structure
/// <reference types="Cypress" />
describe("Validate Webdriveruni homepage links", () => {
  it("Confirm link redirect to the correct page", () => {
    // cypress node
    cy.visit("http://www.webdriveruniversity.com");
    cy.get("#contact-us").invoke("removeAttr", "target").click();
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    cy.url().should("include", "contactus");
    cy.go('back')
    cy.reload()
    // cy.reload(true) // reload without using cache
    cy.go('forward')
    cy.url().should("include", "contactus");
    cy.go('back')

    cy.get('#login-portal').invoke('removeAttr','target').click()
    cy.url().should('include','Login-Portal')
    cy.go('back')
    
    cy.get('#to-do-list').invoke('removeAttr','target').click()
    cy.url().should('include','To-Do-List')
    
  });
  // negative scenario
});
