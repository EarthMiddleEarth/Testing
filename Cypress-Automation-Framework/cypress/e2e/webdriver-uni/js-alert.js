// MOCHA structure
/// <reference types="Cypress" />
describe("Handle js alert", () => {
    it("Confirm js alert contains the correct text", () => {
      // cypress node
      cy.visit("http://www.webdriveruniversity.com");
      cy.get("#popup-alerts").invoke("removeAttr", "target").click();
    
      cy.get("#button1").click()
      // control window manually handles the alert
      cy.on('window:alert',(str)=> {
        expect(str).to.equal('I am an alert box!')


      })
      
    });
    it("Validate js confirm alert box works correctly when clicking ok", () => {
        // cypress node
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
      
        cy.get("#button4").click()
        // control window manually handles the confirmation
        cy.on('window:confirm',(str)=> {
          return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
        
      });

      it("Validate js confirm alert box works correctly when clicking cancel", () => {
        // cypress node
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
      
        cy.get("#button4").click()
        // control window manually handles the confirmation
        cy.on('window:confirm',(str)=> {
          return false;
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
        
      });

      it("Validate js confirm alert box using a stub", () => {
        // cypress node
        cy.visit("http://www.webdriveruniversity.com");
        cy.get("#popup-alerts").invoke("removeAttr", "target").click();
      
        
        // control window manually handles the confirmation
        const stub = cy.stub()

        cy.on('window:confirm',stub)

        cy.get("#button4").click().then(() => {
            // getCall(0) since it has just 1 answer
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')

        }).then(()=>{
            return true
        }).then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')
        })
        
      });
    // negative scenario
  });
  