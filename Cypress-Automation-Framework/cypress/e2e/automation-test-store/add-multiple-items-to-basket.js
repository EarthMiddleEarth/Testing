
import AutoStore_Homepage_PO from "../../support/pageObject/automation-test-store/AutoStore_Homepage_PO";
import AutoStore_HairCare_PO from "../../support/pageObject/automation-test-store/Auto_HairCare_PO";
// MOCHA structure
/// <reference types="Cypress" />


describe("Add multiple items to basket", () => {
  const autoStore_Homepage_po = new AutoStore_Homepage_PO()
  const autoStore_Haircare_po = new AutoStore_HairCare_PO()

  before(()=>{
        cy.fixture('products').then(data=>{
            globalThis.data = data
        })
    })
  beforeEach(() => {
    // cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    // cy.get("a[href*='product/category&path']").contains("Hair Care").click();
    cy.clearAllLocalStorage()
    cy.clearAllCookies()
    autoStore_Homepage_po.accessHomepage()
    autoStore_Homepage_po.clickOn_Haircare_Link()
  });
  it("Add specific items to basket", () => {

    // globalThis.data.each(($el,index,$list)=>{
    //     cy.addProductToBasket($el)
    // })
    autoStore_Haircare_po.addHairCareProductToBasket()
        
  });
});
