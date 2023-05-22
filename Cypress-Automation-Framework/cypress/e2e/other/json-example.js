/// <reference types="cypress" />
describe("JSON Object Examples",()=>{
    it("Json object examples",()=>{
        const exampleObject = {"key": "Alice", "key2":"Aura"}
        const exampleArrayOfvalues = ["Apple","Banana","Catalina"]
        const exampleArrayOfObject = [{"key":"Luke"},{"key2":"Skywalker"},{"key3":"XX"}]
        const users = {"firstname":"Joe",
                        "lastName":"Blogs",
                        "Age":19,"Students":[
                            {
                                "firstname":"August",
                                "lastName": "Olis"
                             },
                             {
                                "firstname":"Bina",
                                "lastName": "Polist"

                             }
                         ]}

        cy.log(exampleObject["key"]);
        cy.log(exampleObject["key2"]);
        cy.log(exampleObject.key);
        cy.log(exampleObject.key2);
        cy.log(exampleArrayOfvalues[0])
        cy.log(exampleArrayOfvalues[1])
        cy.log(exampleArrayOfvalues[2])
        cy.log(users.firstname)
        cy.log(users.Students[0].firstname)


        cy.log(exampleArrayOfObject[0].key)
        cy.log(exampleArrayOfObject[1].key2)
        cy.log(exampleArrayOfObject[2].key3)
    })
})