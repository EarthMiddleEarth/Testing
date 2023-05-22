// MOCHA structure
/// <reference types="Cypress" />

describe("Inspect Automation Test Store items using chain commands", () => {
  it("Click on the first item using item header", () => {
    cy.visit("https://www.automationteststore.com/");
    // cy.get('.info_links_footer > :nth-child(5) > a').click()
    // cy.xpath("//a[contains(@href,'https://automationteststore.com/index.php?rt=content/contact')]").click()
    cy.get(
      "#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .fixed_wrapper > .fixed > .prdocutname"
    ).click();
  });
  it.only("Click on the first item using item text", () => {
    cy.visit("https://www.automationteststore.com/");
    // cy.get('.info_links_footer > :nth-child(5) > a').click()
    // cy.xpath("//a[contains(@href,'https://automationteststore.com/index.php?rt=content/contact')]").click()
    cy.get(".prdocutname")
      .contains("Skinsheen Bronzer Stick")
      .click()
      .then(function (itemHeaderText) {
        console.log("Select the following item" + itemHeaderText.text());
      });
  });
  it("Click on the first item using item text2", () => {
    cy.visit("https://www.automationteststore.com/");
    // cy.get('.info_links_footer > :nth-child(5) > a').click()
    // cy.xpath("//a[contains(@href,'https://automationteststore.com/index.php?rt=content/contact')]").click()
    cy.xpath("(//a[@title='Skinsheen Bronzer Stick'])[1]").click();
  });
  it("Click on the first item using item index", () => {
    cy.visit("https://www.automationteststore.com/");
    cy.get(".fixed_wrapper").find(".prdocutname").eq(0).click();
  });
});
