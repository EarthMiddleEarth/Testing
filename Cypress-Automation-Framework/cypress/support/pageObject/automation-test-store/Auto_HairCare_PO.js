class AutoStore_HairCare_PO{
    addHairCareProductToBasket(){
        data.productName.forEach(element => {
            cy.addProductToBasket(element).then(()=>{
                //debugger
            })
        });
    
        // cy.get('.cart_total').click().debug()
        cy.get('.cart_total').click()
    }
} export default AutoStore_HairCare_PO;