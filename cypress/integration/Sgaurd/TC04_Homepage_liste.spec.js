describe('Liste Page', function(){
    Cypress.config('pageLoadTimeout', 100000)

    before(function () {
       cy.SignIn()
    })
        it('Verify the Liste Page', function(){    
            Cypress.on("uncaught:exception", (err, runnable) => { 
                return false;
            });
            cy.viewport(1280, 720)
            cy.wait(5000)
            cy.xpath('//*[@id="root"]/div/div/div[1]/div/header/div/div[1]/div/div[3]/div[2]/div/div/a[2]/span/span').click()
            cy.screenshot({ capture: "fullPage" });
            cy.hash().should('include','#all')
            cy.wait(2000)
           // cy.get("#mui-26717").should("have.value", 100);
            //cy.get('#mui-26717').select(100)
            //cy.get('//*[@id="mui-16194"]').select()
           // cy.xpath('//*[@id="mui-26717"]').click()
            //cy.get('[data-value="10"]').select(10)
            //cy.get("#mui-26717").select(10);
            cy.get('input[type=checkbox]').check({force: true}).should('be.checked')
            cy.xpath('//*[@id="root"]/div/div/div[1]/div[2]/div/div/div/div/div/div[3]/div/div[1]/div[2]/button[4]/span[1]/span/img').click()
    })
})