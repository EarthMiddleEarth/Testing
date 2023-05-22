class Homepage_PO{
    visitHomepage(){
        cy.visit(Cypress.env("webdriveruni_hompage"),{timeout:6000})
    }
    clickOn_ContactUs_Button(){
        cy.get("#contact-us").invoke('removeAttr','target').click({timeout:8000})

    }

} export default Homepage_PO;