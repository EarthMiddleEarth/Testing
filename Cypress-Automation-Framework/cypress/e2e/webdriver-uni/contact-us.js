// MOCHA structure
import Homepage_PO from "../../support/pageObject/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObject/webdriver-uni/Contact_Us_PO";
/// <reference types="Cypress" />
describe("Test Contact Us form webdriverUni", () => {
  const contactUs_po = new Contact_Us_PO();
  const homepage_PO = new Homepage_PO();
  before(() => {
    cy.fixture("example").then((data) => {
      // this.data = data;
      globalThis.data = data;
    });
  });
  beforeEach(() => {
    // cy.visit(Cypress.env("webdriveruni_hompage")+"/Contact-Us/contactus.html")
    // cy.get("#contact-us").invoke('removeAttr','target').click()

    // explicit timeout
    // Cypress.config('defaultCommandTimeout',20000)
    // Using Page obj instead
    homepage_PO.visitHomepage();
    //cy.wait(5000)
    homepage_PO.clickOn_ContactUs_Button();
    // cy.pause()
    //
  });
  it("Should be able to submit a successfull submission via contact us form", () => {
    // cypress node
    // cy.visit("http://www.webdriveruniversity.com")
    // cy.get("#contact-us").invoke('removeAttr','target').click()
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");

    cy.title().should("eq", "WebDriver | Contact Us");
    cy.url().should(
      "eq",
      "http://www.webdriveruniversity.com/Contact-Us/contactus.html"
    );
    cy.document().should("have.a.property", "charset").and("eq", "UTF-8");

    // cy.get('#contact-us').click({force:true})

    // cy.get('[name="first_name"]').type(data.first_name);
    // cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type(data.email);
    // cy.get("textarea.feedback-input").type(
    //   "Hello it's my first Cypress interaction"
    // );
    // cy.get('[type="submit"]').click();

    // cy.get("h1").should("have.text", "Thank You for your Message!");

    // reducing our process by custom command
    cy.webdriveruni_ContactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "Hello it's my first Cypress interaction",
      "h1",
      "Thank You for your Message!"
    );
  });

  it("Should be able to submit a successfull submission via contact us form 2", () => {
    // using page object

    contactUs_po.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      data.email,
      "Hello it's my first Cypress interaction",
      "h1",
      "Thank You for your Message!"
    );
  });
  // negative scenario
  it("Should not be able to submit a successfull submission via contact us form as all fields are required", () => {
    // cypress node
    // cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.visit("http://www.webdriveruniversity.com")
    // cy.get("#contact-us").invoke('removeAttr','target').click()

    // cy.get('#contact-us').click({force:true})
    cy.get('[name="first_name"]').type(data.first_name);
    cy.get('[name="last_name"]').type(data.last_name);
    // cy.get('[name="email"]').type("earth@xmail.com") // negative
    cy.get("textarea.feedback-input").type(
      "Hello it's my first Cypress interaction"
    );
    cy.get('[type="submit"]').click();

    cy.get("body").contains("Error: all fields are required");
  });
  it("Should not be able to submit a successfull submission via contact us form as all fields are required 2", () => {
    contactUs_po.contactForm_Submission(
      Cypress.env("first_name"),
      data.last_name,
      " ",
      "Hello it's my first Cypress interaction",
      "body",
      "Error: Invalid email address"
    );
  });
});
