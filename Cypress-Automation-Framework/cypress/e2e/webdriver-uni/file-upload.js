/// <reference types="cypress" />

describe("Test file upload via webdriveruni",()=>{
    it("Upload a file",()=>{
        cy.visit("http://www.webdriveruniversity.com/index.html")
        cy.get("#file-upload").invoke("removeAttr","target").click()
        cy.get('#myFile').selectFile("/Users/passonsujaritwattanakul/Documents/Testing/Cypress-Automation-Framework/cypress/e2e/webdriver-uni/file-upload.js")
        cy.get('#submit-button').click()
    })
    it("Upload no file",()=>{
        cy.visit("http://www.webdriveruniversity.com/index.html")
        cy.get("#file-upload").invoke("removeAttr","target").click()
        cy.get('#submit-button').click()
    })
})