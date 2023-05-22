/// <reference types="cypress" />

describe("Test Datapicker via webdriveruni",()=>{
    it("Select date from the datapicker",()=>{
        cy.visit("http://www.webdriveruniversity.com/index.html")
        cy.get("#datepicker").invoke("removeAttr","target").click()

        cy.get('#datepicker').click()
        // var date = new Date()
        // date.setDate(date.getDate()) //get current day
        // cy.log(date.getDate())

        // var date2 = new Date()
        // date2.setDate(date.getDate() + 5)
        // cy.log(date2.getDate())

        var date = new Date()
        date.setDate(date.getDate()+366)

        var futureYear = date.getFullYear();
        var futureMonth = date.toLocaleString("default", {month: "long"});
        var futureDay = date.getDate();

        cy.log("Future year to select; " + futureYear)
        cy.log("Future month to select; " + futureMonth)
        cy.log("Future day to select; " + futureDay)

        function selectMonthAndYear(){
            cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
                if(!currentDate.text().includes(futureYear)){ //not include futureYear
                    cy.get('.next').first().click()
                    selectMonthAndYear();
                }
                
            }).then(()=>{
                cy.get('.datepicker-dropdown').find('.datepicker-switch').first().then(currentDate =>{
                    if(!currentDate.text().includes(futureMonth)){ //not include futureYear
                        cy.get('.next').first().click()
                        selectMonthAndYear();
                    }
                    
                })
            })
        }

        function selectFutureDay(){
            cy.get("[class='day']").contains(futureDay).click() //select the day (after finding)
        }


        selectMonthAndYear();
        selectFutureDay()



    })
})