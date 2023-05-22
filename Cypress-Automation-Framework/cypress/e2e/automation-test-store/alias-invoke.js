// MOCHA structure
/// <reference types="Cypress" />

describe("Alias and Invoke", () => {
  it("Validate a specific hair care product", () => {
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    // text() stands for Jquery command then, using invoke to convert it to cypress command
    cy.get(".fixed_wrapper .prdocutname")
      .eq(0)
      .invoke("text")
      .as("productThubnail");
    cy.get("@productThubnail").its("length").should("be.gt", 5);
    cy.get("@productThubnail").should("include", "Seaweed Conditioner");
  });
  it("Validate product thumbnail", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    cy.get("@productThumbnail").should("have.length", 16);
    cy.get("@productThumbnail")
      .find(".productcart")
      .invoke("attr", "title")
      .should("include", "Add to Cart");
  });
  it.only("Calculate total of nomal product", () => {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as("productThumbnail");
    // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
    //     cy.log($el.text());

    // });
    cy.get("@productThumbnail")
      .find(".oneprice")
      .invoke("text")
      .as("itemPrice");
    cy.get("@productThumbnail")
      .find(".pricenew")
      .invoke("text")
      .as("saleItemPrice");
    var itemTotal = 0;
    cy.get("@itemPrice").then(($linkText) => {
      var itemPriceTotal = 0;
      var itemPrice = $linkText.split("$");
      var i;
      for (i = 0; i < itemPrice.length; i++) {
        cy.log(itemPrice[i]);
        itemPriceTotal = itemPriceTotal + Number(itemPrice[i]);
      }
      itemTotal += itemPriceTotal;
      cy.log("Non sale price item total: " + String(itemPriceTotal));
    });
    cy.get("@saleItemPrice")
      .then(($linkText) => {
        var saleItemsPrice = 0;
        var saleItemPrice = $linkText.split("$");
        var i;
        for (i = 0; i < saleItemPrice.length; i++) {
          cy.log(saleItemPrice[i]);
          saleItemsPrice += Number(saleItemPrice[i]);
        }
        itemTotal += saleItemsPrice;
        cy.log("Sale price item total:" + String(saleItemsPrice));
      })
      .then(() => {
        cy.log("The total price of all products: " + itemTotal);
        expect(itemTotal).to.equal(639.49);
      });
  });
});
