// MOCHA structure
/// <reference types="Cypress" />

describe("Verifying variables cypress commands and jquery commands", () => {
  it("navigating to specific product pages", () => {
    cy.visit("https://www.automationteststore.com/");
    // The following will fail
    // const   makeupLink = cy.get("a[href*='product/category&path']").contains("Makeup")
    // makeupLink.click();
    // const   skincareLink = cy.get("a[href*='product/category&path']").contains("Skincare")
    // skincareLink.click()
    // The following will pass
    // const   makeupLink = cy.get("a[href*='product/category&path']").contains("Makeup")
    // makeupLink.click();
    // const   skincareLink = cy.get("a[href*='product/category&path']").contains("Skincare")
    // skincareLink.click()

    // Recommended Approach
    cy.get("a[href*='product/category&path']").contains("Makeup").click();
    cy.get("a[href*='product/category&path']").contains("Skincare").click();
  });
  it("navigating to specific product pages: Makeup", () => {
    cy.visit("https://www.automationteststore.com/");
    // Recommended Approach
    cy.get("a[href*='product/category&path']").contains("Makeup").click();

    // Following code will fail
    // const header = cy.get("h1 .maintext")
    // cy.log(header.text())

    // Folllowing will pass
    //#1
    cy.get("h1 .maintext").then(function (innterText) {
      cy.log("Found headder text (method1): " + innterText.text());
    });
    //#2
    cy.get("h1 .maintext").then(($headderText) => {
      const headerText = $headderText.text();
      cy.log("Found headder text (method2): " + headerText);
    });
    //#3
    cy.get("h1 .maintext").then(($headderText) => {
      cy.log("Found headder text (method3): " + $headderText.text());
      const headerText = $headderText.text();
      expect(headerText).is.equal("Makeup");
    });
  });

  it("Validate properties of the Contact Us page ", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");

    // Uses cypress commands and chaining
    cy.contains("#ContactUsFrm", "Contact Us Form")
      .find("#field_11")
      .should("contain", "First name:");

    // Jquery approach
    cy.contains("#ContactUsFrm", "Contact Us Form").then((text) => {
      const firstNameText = text.find("#field_11").text();
      // expect(firstNameText).is.equal('First name:')
      expect(firstNameText).to.contain("First name:");

      // Embedded command (Closure)
      cy.get("#field_11").then((fnText) => {
        cy.log(fnText.text());
        cy.log(fnText);
      });
    });
  });
});
